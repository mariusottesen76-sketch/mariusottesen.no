/**
 * Oppdrag 05G — max 2 live Haiku calls (A + B). No retries.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Lang } from "../../app/LanguageContext";
import { ASSISTANT_LIMITS, getAssistantRuntimeConfig } from "../../app/lib/assistant-knowledge/assistant-config";
import { callAnthropicModel, type ModelCallResult, type ModelTokenUsage } from "../../app/lib/assistant-knowledge/anthropic-caller";
import { runAssistantQuery } from "../../app/lib/assistant-knowledge/assistant-service";
import { lookupKnowledgeSource } from "../../app/lib/assistant-knowledge/lookup";
import { selectRelevantSourceIds } from "../../app/lib/assistant-knowledge/source-selection";
import { tryGroundedOverviewAnswer, isPortfolioOverviewQuestion } from "../../app/lib/assistant-knowledge/grounded-overview-answer";
import { validateModelPayload } from "../../app/lib/assistant-knowledge/validate-response";
import type { ModelReplyPayload, SourceContext } from "../../app/lib/assistant-knowledge/assistant-types";
import { fixedReply } from "../../app/lib/assistant-knowledge/fixed-replies";

const HAIKU_INPUT_USD_PER_MTOK = 1.0;
const HAIKU_OUTPUT_USD_PER_MTOK = 5.0;
const MAX_BUDGET_USD = 0.1;
const MAX_API_CALLS = 2;

const TESTS = [
  { id: "05G-A", question: "Hvilke lederroller passer Marius til?" },
  { id: "05G-B", question: "Hvilke resultater har han oppnådd?" },
] as const;

function loadEnvLocal(): void {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
  const envPath = path.join(root, ".env.local");
  if (!fs.existsSync(envPath)) {
    throw new Error("Missing .env.local");
  }
  const text = fs.readFileSync(envPath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq < 0) continue;
    const key = t.slice(0, eq).trim();
    const val = t.slice(eq + 1);
    if (process.env[key] === undefined) {
      process.env[key] = val;
    }
  }
}

function loadSourceContexts(sourceIds: string[], lang: Lang): SourceContext[] {
  const contexts: SourceContext[] = [];
  for (const id of sourceIds) {
    const res = lookupKnowledgeSource(id, lang);
    if (!res.ok) continue;
    contexts.push({
      sourceId: res.entry.id,
      title: res.entry.title,
      url: res.entry.canonicalUrl,
      excerptText: res.excerpt.text,
      suitableForFactualAnswer: res.grounding.suitableForFactualAnswer,
    });
  }
  return contexts;
}

function estimateUsd(usage: ModelTokenUsage): number {
  const inCost = (usage.input_tokens / 1_000_000) * HAIKU_INPUT_USD_PER_MTOK;
  const outCost = (usage.output_tokens / 1_000_000) * HAIKU_OUTPUT_USD_PER_MTOK;
  return inCost + outCost;
}

function looksLikeExcerptFallback(answer: string, lang: Lang): boolean {
  const prefix = lang === "no" ? "Fra «" : 'From "';
  return answer.startsWith(prefix);
}

type CallCapture = {
  modelInvoked: boolean;
  rawText?: string;
  modelCallOk: boolean;
  modelCallCode?: string;
  modelPayload?: ModelReplyPayload | null;
  validation?: { ok: true; payload: ModelReplyPayload } | { ok: false; reason: string };
  usage?: ModelTokenUsage;
};

async function runOneTest(
  id: string,
  question: string,
  lang: Lang,
  apiKey: string,
  model: string,
  apiCallBudget: { count: number; usd: number }
): Promise<Record<string, unknown>> {
  const sourceIds = selectRelevantSourceIds(question, lang, ASSISTANT_LIMITS.maxSources);
  const contexts = loadSourceContexts(sourceIds, lang);
  const grounding = contexts.map((c) => ({
    sourceId: c.sourceId,
    substantive: c.suitableForFactualAnswer,
    excerptChars: c.excerptText.length,
  }));
  const substantiveCount = grounding.filter((g) => g.substantive).length;

  const capture: CallCapture = { modelInvoked: false, modelCallOk: false };

  const final = await runAssistantQuery(
    { question, lang },
    {
      config: { chatEnabled: true, apiKeyConfigured: true, model },
      callModel: async (input) => {
        if (apiCallBudget.count >= MAX_API_CALLS) {
          throw new Error("Safety stop: exceeded MAX_API_CALLS");
        }
        apiCallBudget.count++;
        capture.modelInvoked = true;
        const out: ModelCallResult = await callAnthropicModel({
          apiKey,
          model: input.model,
          system: input.system,
          userMessage: input.userMessage,
          signal: input.signal,
        });
        capture.modelCallOk = out.ok;
        if (!out.ok) {
          capture.modelCallCode = out.code;
          (capture as { modelErrorMessage?: string }).modelErrorMessage = out.message.slice(0, 300);
          return out;
        }
        capture.rawText = out.rawText;
        capture.modelPayload = out.payload;
        capture.usage = out.usage;
        capture.validation = validateModelPayload(out.payload, contexts, lang);
        if (out.usage) {
          const usd = estimateUsd(out.usage);
          apiCallBudget.usd += usd;
          if (apiCallBudget.usd > MAX_BUDGET_USD) {
            throw new Error(`Budget stop: ${apiCallBudget.usd.toFixed(4)} USD > ${MAX_BUDGET_USD}`);
          }
        }
        return out;
      },
    }
  );

  const modelPayload = capture.modelPayload;
  const excerptFallbackWouldApply =
    isPortfolioOverviewQuestion(question) &&
    Boolean(tryGroundedOverviewAnswer(question, contexts, lang));

  let fallbackActivated = false;
  let fallbackReason: string | null = null;
  if (capture.modelInvoked && modelPayload) {
    const modelCategory = modelPayload.category;
    const validationFailed = capture.validation && !capture.validation.ok;
    const modelNotOnSite = modelCategory === "NOT_ON_SITE";
    const userExcerpt = looksLikeExcerptFallback(final.answer, lang);
    if (final.category === "ANSWER" && userExcerpt && (modelNotOnSite || validationFailed)) {
      fallbackActivated = true;
      fallbackReason = modelNotOnSite ? "post_model_not_on_site_excerpt" : `validation_failed:${capture.validation && !capture.validation.ok ? capture.validation.reason : "?"}`;
    } else if (
      final.category === "ANSWER" &&
      modelCategory === "ANSWER" &&
      modelPayload.answer.trim() !== final.answer.trim()
    ) {
      fallbackActivated = true;
      fallbackReason = "answer_differs_from_model";
    }
  } else if (capture.modelInvoked && !capture.modelCallOk) {
    fallbackActivated = final.category === "ANSWER" && looksLikeExcerptFallback(final.answer, lang);
    if (fallbackActivated) fallbackReason = "model_error_or_parse_excerpt";
  }

  const fixedNotOnSite = final.answer === fixedReply("NOT_ON_SITE", lang);

  return {
    id,
    question,
    lang,
    selectedSourceIds: sourceIds,
    grounding: { substantiveCount, sources: grounding },
    modelId: model,
    anthropic: {
      invoked: capture.modelInvoked,
      callOk: capture.modelCallOk,
      callCode: capture.modelCallCode,
      rawJsonText: capture.rawText,
      payload: modelPayload
        ? {
            category: modelPayload.category,
            answer: modelPayload.answer,
            sourceIds: modelPayload.sourceIds,
          }
        : null,
      usage: capture.usage,
      estimatedUsd: capture.usage ? Math.round(estimateUsd(capture.usage) * 10000) / 10000 : 0,
    },
    validation: capture.validation ?? null,
    fallback: {
      portfolioExcerptAvailable: excerptFallbackWouldApply,
      activated: fallbackActivated,
      reason: fallbackReason,
    },
    modelOriginal: modelPayload
      ? {
          category: modelPayload.category,
          answer: modelPayload.answer,
          sourceIds: modelPayload.sourceIds,
        }
      : null,
    userFinal: {
      category: final.category,
      answer: final.answer,
      sourceIds: final.sourceIds,
      urls: final.urls,
      errorCode: final.errorCode,
      isFixedNotOnSiteText: fixedNotOnSite,
    },
    diagnosis: {
      rejectionAtModel: modelPayload?.category === "NOT_ON_SITE",
      rejectionAtValidation:
        Boolean(modelPayload && modelPayload.category === "ANSWER" && capture.validation && !capture.validation.ok),
      userSawModelAnswer:
        modelPayload?.category === "ANSWER" &&
        capture.validation?.ok === true &&
        final.answer.trim() === modelPayload.answer.trim(),
    },
  };
}

async function main() {
  loadEnvLocal();
  const config = getAssistantRuntimeConfig();
  if (!config.apiKeyConfigured) {
    console.error("ANTHROPIC_API_KEY not set");
    process.exit(1);
  }
  if (!config.chatEnabled) {
    console.error("CHAT_ENABLED must be true");
    process.exit(1);
  }
  const apiKey = process.env.ANTHROPIC_API_KEY!.trim();
  const model = config.model;

  const apiCallBudget = { count: 0, usd: 0 };
  const results: Record<string, unknown>[] = [];

  for (const t of TESTS) {
    results.push(await runOneTest(t.id, t.question, "no", apiKey, model, apiCallBudget));
  }

  if (apiCallBudget.count !== MAX_API_CALLS) {
    throw new Error(`Expected ${MAX_API_CALLS} API calls, got ${apiCallBudget.count}`);
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "live-runs");
  fs.mkdirSync(outDir, { recursive: true });
  const summary = {
    oppdrag: process.env.OPPDRAG_LIVE_TAG?.toUpperCase() ?? "05G",
    generatedAt: new Date().toISOString(),
    branch: "feature/assistant-knowledge-manifest",
    maxApiCalls: MAX_API_CALLS,
    maxBudgetUsd: MAX_BUDGET_USD,
    apiCalls: apiCallBudget.count,
    totalEstimatedUsd: Math.round(apiCallBudget.usd * 10000) / 10000,
    model,
    pricingNote: "Estimate Haiku ~$1/$5 per MTok in+out — not invoice.",
    results,
  };

  const tag = process.env.OPPDRAG_LIVE_TAG ?? "05g";
  const outPath = path.join(outDir, `${tag}-haiku-${stamp}.json`);
  fs.writeFileSync(outPath, JSON.stringify(summary, null, 2), "utf8");
  console.log(JSON.stringify({ ok: true, apiCalls: apiCallBudget.count, estimatedUsd: summary.totalEstimatedUsd, report: outPath }));
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});