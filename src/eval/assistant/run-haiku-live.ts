/**
 * Oppdrag 04C — sequential live Haiku run (local only, max 18 API calls).
 * Loads `.env.local` from project root — never logs secrets.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { AssistantAnswerCategory } from "../../app/lib/assistant-knowledge/answer-categories";
import { getAssistantRuntimeConfig } from "../../app/lib/assistant-knowledge/assistant-config";
import { runAssistantQuery } from "../../app/lib/assistant-knowledge/assistant-service";
import type { ModelTokenUsage } from "../../app/lib/assistant-knowledge/anthropic-caller";
import { assertUrlsAllowed } from "../../app/lib/assistant-knowledge/validate-response";
import { MANUAL_HAIKU_QUESTIONS } from "./manual-haiku-plan";

const HAIKU_INPUT_USD_PER_MTOK = 1.0;
const HAIKU_OUTPUT_USD_PER_MTOK = 5.0;
const MAX_BUDGET_USD = 1.0;

type ExpectedRow = {
  expectedCategory: AssistantAnswerCategory;
  notes?: string;
};

const EXPECTED: Record<string, ExpectedRow> = {
  H01: { expectedCategory: "ANSWER" },
  H02: { expectedCategory: "ANSWER" },
  H03: { expectedCategory: "ANSWER", notes: "Status live vs konsept — vurder manuelt." },
  H04: { expectedCategory: "ANSWER" },
  H05: { expectedCategory: "NOT_ON_SITE" },
  H06: { expectedCategory: "RESTRICTED" },
  H07: { expectedCategory: "RESTRICTED" },
  H08: { expectedCategory: "NOT_ON_SITE" },
  H09: { expectedCategory: "ANSWER" },
  H10: { expectedCategory: "ANSWER", notes: "Blandet: FlowSignal ANSWER; pizza ikke besvart." },
  H11: { expectedCategory: "ANSWER" },
  H12: { expectedCategory: "ANSWER" },
  H13: { expectedCategory: "NOT_ON_SITE" },
  H14: { expectedCategory: "NOT_ON_SITE" },
  H15: { expectedCategory: "NOT_ON_SITE" },
  H16: { expectedCategory: "ANSWER", notes: "Skille konsept/live." },
  H17: { expectedCategory: "ANSWER" },
  H18: { expectedCategory: "NOT_ON_SITE" },
};

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
    if (!(key in process.env) || process.env[key] === undefined) {
      process.env[key] = val;
    }
  }
}

function estimateUsd(usage: ModelTokenUsage): number {
  const inCost = (usage.input_tokens / 1_000_000) * HAIKU_INPUT_USD_PER_MTOK;
  const outCost = (usage.output_tokens / 1_000_000) * HAIKU_OUTPUT_USD_PER_MTOK;
  return inCost + outCost;
}

async function main() {
  loadEnvLocal();
  const config = getAssistantRuntimeConfig();
  if (!config.apiKeyConfigured) {
    console.error("ANTHROPIC_API_KEY not set in .env.local");
    process.exit(1);
  }
  if (!config.chatEnabled) {
    console.error("CHAT_ENABLED must be true");
    process.exit(1);
  }

  const model = config.model;

  if (MANUAL_HAIKU_QUESTIONS.length !== 18) {
    throw new Error(`Expected 18 questions, got ${MANUAL_HAIKU_QUESTIONS.length}`);
  }

  let apiCalls = 0;
  let totalIn = 0;
  let totalOut = 0;
  let totalCacheCreate = 0;
  let totalCacheRead = 0;
  let totalUsd = 0;

  const results: Array<Record<string, unknown>> = [];

  for (const item of MANUAL_HAIKU_QUESTIONS) {
    if (apiCalls >= 18) {
      throw new Error("Safety stop: more than 18 API calls attempted");
    }

    const expected = EXPECTED[item.id]?.expectedCategory ?? "ANSWER";
    let usedTokens: ModelTokenUsage | undefined;
    let modelInvoked = false;

    const res = await runAssistantQuery(
      { question: item.question, lang: item.lang },
      {
        config: { ...config, apiKeyConfigured: true, chatEnabled: true },
        callModel: async (input) => {
          modelInvoked = true;
          apiCalls++;
          const { callAnthropicModel } = await import(
            "../../app/lib/assistant-knowledge/anthropic-caller"
          );
          const out = await callAnthropicModel({
            apiKey: input.apiKey,
            model: input.model,
            system: input.system,
            userMessage: input.userMessage,
            signal: input.signal,
          });
          if (out.ok && out.usage) {
            usedTokens = out.usage;
            totalIn += out.usage.input_tokens;
            totalOut += out.usage.output_tokens;
            totalCacheCreate += out.usage.cache_creation_input_tokens ?? 0;
            totalCacheRead += out.usage.cache_read_input_tokens ?? 0;
            totalUsd += estimateUsd(out.usage);
          }
          if (totalUsd > MAX_BUDGET_USD) {
            throw new Error(`Budget stop: estimated USD ${totalUsd.toFixed(4)} exceeds ${MAX_BUDGET_USD}`);
          }
          return out;
        },
      }
    );

    const categoryMatch = res.category === expected;
    const urlsOk = res.urls.length === 0 || assertUrlsAllowed(res.urls);

    results.push({
      id: item.id,
      lang: item.lang,
      question: item.question,
      expectedCategory: expected,
      actualCategory: res.category,
      categoryMatch,
      answer: res.answer,
      sourceIds: res.sourceIds,
      urls: res.urls,
      errorCode: res.errorCode,
      modelInvoked,
      usage: usedTokens,
      urlsValid: urlsOk,
      expectationNotes: EXPECTED[item.id]?.notes,
    });

    if (!modelInvoked && expected === "ANSWER" && res.category === "NOT_ON_SITE" && res.errorCode === "ai_disabled") {
      // should not happen when chat enabled
    }

    if (res.errorCode === "model_error" && apiCalls === 1) {
      console.error("First model call failed — stopping (check model ID and API key).");
      break;
    }
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "reports");
  fs.mkdirSync(outDir, { recursive: true });
  const summary = {
    generatedAt: new Date().toISOString(),
    branch: "feature/assistant-knowledge-manifest",
    model,
    apiCalls,
    tokenTotals: {
      input_tokens: totalIn,
      output_tokens: totalOut,
      cache_creation_input_tokens: totalCacheCreate,
      cache_read_input_tokens: totalCacheRead,
    },
    estimatedUsd: Math.round(totalUsd * 10000) / 10000,
    pricingNote: "Estimate using Haiku 4.5 list price $1/$5 per MTok — not invoiced amount.",
    results,
  };

  const jsonPath = path.join(outDir, `haiku-04c-${stamp}.json`);
  const txtPath = path.join(outDir, `haiku-04c-latest.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(summary, null, 2));
  fs.writeFileSync(txtPath, JSON.stringify(summary, null, 2));

  console.log(
    JSON.stringify({
      ok: true,
      apiCalls,
      estimatedUsd: summary.estimatedUsd,
      reportJson: jsonPath,
      passedCategory: results.filter((r) => r.categoryMatch).length,
      total: results.length,
    })
  );
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});