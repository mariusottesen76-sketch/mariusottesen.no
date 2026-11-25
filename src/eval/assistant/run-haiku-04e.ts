/**
 * Oppdrag 04E — live Haiku regression (max 6 API calls). Local only.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getAssistantRuntimeConfig } from "../../app/lib/assistant-knowledge/assistant-config";
import { runAssistantQuery } from "../../app/lib/assistant-knowledge/assistant-service";
import type { ModelTokenUsage } from "../../app/lib/assistant-knowledge/anthropic-caller";
import { assertUrlsAllowed } from "../../app/lib/assistant-knowledge/validate-response";
import { MANUAL_HAIKU_QUESTIONS } from "./manual-haiku-plan";

const MAX_CALLS = 6;
const HAIKU_INPUT_USD_PER_MTOK = 1.0;
const HAIKU_OUTPUT_USD_PER_MTOK = 5.0;
const MAX_BUDGET_USD = 1.0;

const h = (id: string) => MANUAL_HAIKU_QUESTIONS.find((q) => q.id === id)!;

const REGRESSION_04E = [
  { id: "R01", lang: h("H10").lang, question: h("H10").question, expectedCategory: "ANSWER" as const },
  { id: "R02", lang: h("H11").lang, question: h("H11").question, expectedCategory: "ANSWER" as const },
  { id: "R03", lang: h("H18").lang, question: h("H18").question, expectedCategory: "NOT_ON_SITE" as const },
  {
    id: "R04",
    lang: "en" as const,
    question: "How can I contact Marius about improving our B2B sales?",
    expectedCategory: "ANSWER" as const,
  },
  {
    id: "R05",
    lang: "en" as const,
    question: "What results has Marius achieved at Norengros, and what is his salary?",
    expectedCategory: "ANSWER" as const,
    editorialNote: "Ideal: partial ANSWER on results; salary refused. Pre-policy may RESTRICTED entire question.",
  },
  {
    id: "R06",
    lang: "no" as const,
    question: "Hvordan bestiller jeg pizza?",
    expectedCategory: "OFF_TOPIC" as const,
  },
];

function loadEnvLocal(): void {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
  const envPath = path.join(root, ".env.local");
  if (!fs.existsSync(envPath)) throw new Error("Missing .env.local");
  const text = fs.readFileSync(envPath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq < 0) continue;
    const key = t.slice(0, eq).trim();
    const val = t.slice(eq + 1);
    if (!(key in process.env) || process.env[key] === undefined) process.env[key] = val;
  }
}

function estimateUsd(usage: ModelTokenUsage): number {
  return (
    (usage.input_tokens / 1_000_000) * HAIKU_INPUT_USD_PER_MTOK +
    (usage.output_tokens / 1_000_000) * HAIKU_OUTPUT_USD_PER_MTOK
  );
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

  let apiCalls = 0;
  let totalIn = 0;
  let totalOut = 0;
  let totalUsd = 0;
  const results: Array<Record<string, unknown>> = [];

  for (const item of REGRESSION_04E) {
    if (apiCalls > MAX_CALLS) throw new Error("Safety stop: exceeded 6 API calls");

    let modelInvoked = false;
    let usage: ModelTokenUsage | undefined;

    const res = await runAssistantQuery(
      { question: item.question, lang: item.lang },
      {
        config: { ...config, apiKeyConfigured: true, chatEnabled: true },
        callModel: async (input) => {
          if (apiCalls >= MAX_CALLS) throw new Error("Budget: max 6 model calls");
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
            usage = out.usage;
            totalIn += out.usage.input_tokens;
            totalOut += out.usage.output_tokens;
            totalUsd += estimateUsd(out.usage);
          }
          if (totalUsd > MAX_BUDGET_USD) {
            throw new Error(`Budget stop: estimated USD ${totalUsd.toFixed(4)}`);
          }
          return out;
        },
      }
    );

    const categoryPass =
      item.id === "R05"
        ? res.category === "ANSWER" ||
          res.category === "RESTRICTED" ||
          (res.category === "NOT_ON_SITE" && !/lønn|salary|\$|kr\b/i.test(res.answer))
        : res.category === item.expectedCategory;

    results.push({
      id: item.id,
      lang: item.lang,
      question: item.question,
      expectedCategory: item.expectedCategory,
      actualCategory: res.category,
      categoryPass,
      answer: res.answer,
      sourceIds: res.sourceIds,
      urls: res.urls,
      errorCode: res.errorCode,
      modelInvoked,
      usage,
      urlsValid: res.urls.length === 0 || assertUrlsAllowed(res.urls),
      editorialNote: "editorialNote" in item ? item.editorialNote : undefined,
    });

    if (res.errorCode === "model_error" && apiCalls <= 1) {
      console.error("First model call failed — stopping.");
      break;
    }
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "reports");
  fs.mkdirSync(outDir, { recursive: true });
  const summary = {
    generatedAt: new Date().toISOString(),
    oppdag: "04E",
    branch: "feature/assistant-knowledge-manifest",
    model: config.model,
    apiCalls,
    tokenTotals: { input_tokens: totalIn, output_tokens: totalOut },
    estimatedUsd: Math.round(totalUsd * 10000) / 10000,
    pricingNote: "Estimate Haiku 4.5 $1/$5 per MTok — not invoiced.",
    results,
  };
  const jsonPath = path.join(outDir, `haiku-04e-${stamp}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(summary, null, 2));
  fs.writeFileSync(path.join(outDir, "haiku-04e-latest.json"), JSON.stringify(summary, null, 2));

  console.log(
    JSON.stringify({
      ok: true,
      apiCalls,
      estimatedUsd: summary.estimatedUsd,
      reportJson: jsonPath,
      categoryPass: results.filter((r) => r.categoryPass).length,
      total: results.length,
    })
  );
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});