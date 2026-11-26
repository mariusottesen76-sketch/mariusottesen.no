/**
 * Oppdrag 05F — plan for max 3 live Haiku calls. Does NOT call the API.
 * Run results → src/eval/assistant/live-runs/05f-*.json (gitignored locally by convention).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { estimateManualRunCostUsd, RECOMMENDED_HAIKU_MODEL } from "./manual-haiku-plan";

const QUESTIONS = [
  {
    id: "05F-A",
    lang: "no" as const,
    question: "Hvilke lederroller passer Marius til?",
    observe: ["modelRawCategory", "validateOk", "excerptFallbackUsed", "finalCategory", "errorCode"],
  },
  {
    id: "05F-B",
    lang: "no" as const,
    question: "Hvilke resultater har han oppnådd?",
    observe: ["pronounQuestion", "resultsSourceFirst", "modelVsFallback"],
  },
  {
    id: "05F-C",
    lang: "no" as const,
    question: "Hvordan kan Marius hjelpe vår virksomhet?",
    observe: ["mustBePreModelExcerpt", "anthropicCallCountZero"],
  },
];

const MAX_BUDGET_USD = 0.1;

export function write05fLivePlan(): string {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
  const outDir = path.join(root, "src/eval/assistant/live-runs");
  fs.mkdirSync(outDir, { recursive: true });
  const est = estimateManualRunCostUsd(QUESTIONS.length);
  const plan = {
    oppdrag: "05F",
    model: RECOMMENDED_HAIKU_MODEL,
    maxBudgetUsd: MAX_BUDGET_USD,
    estimate: est,
    rules: [
      "Load .env.local (CHAT_ENABLED=true, ANTHROPIC_API_KEY set)",
      "Single dev server on localhost",
      "No retry on failure",
      "Log category, sourceIds, errorCode, validation reason — never API key or Authorization",
      "Compare: selected sourceIds, userPrompt char count, raw model JSON, validateModelPayload, final HTTP body",
      "05F-C should skip Anthropic (consulting pre-model); if API called → regression",
    ],
    questions: QUESTIONS,
    runCommandAfterApproval: "npx tsx src/eval/assistant/run-haiku-05f-live.ts",
    outputPattern: path.join(outDir, "05f-haiku-{timestamp}.json"),
  };
  const outPath = path.join(outDir, "05f-plan.json");
  fs.writeFileSync(outPath, JSON.stringify(plan, null, 2), "utf8");
  return outPath;
}

if (process.argv[1]?.includes("run-haiku-05f-plan")) {
  console.log(write05fLivePlan());
}