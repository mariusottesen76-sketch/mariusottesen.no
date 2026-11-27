/**
 * 08J — 30 representative questions from locked 08I dataset.
 * Deterministic pass always; live Haiku only if ANTHROPIC_API_KEY is set locally (optional .env.local).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getAssistantRuntimeConfig } from "../../../app/lib/assistant-knowledge/assistant-config";
import { runAssistantQuery } from "../../../app/lib/assistant-knowledge/assistant-service";
import type { ModelCallResult } from "../../../app/lib/assistant-knowledge/anthropic-caller";
import type { Eval08iQuestion } from "./generate-dataset";
import { score08iAnswer } from "./rubric";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DATASET = path.join(ROOT, "dataset-08i.json");
const REPORT = path.join(ROOT, "reports", "eval-08j-sample-30.json");

/** Fixed representative sample — not tuned to chatbot, spread across 08I categories. */
const SAMPLE_IDS: string[] = [
  "08I-001",
  "08I-003",
  "08I-005",
  "08I-021",
  "08I-022",
  "08I-023",
  "08I-026",
  "08I-030",
  "08I-046",
  "08I-048",
  "08I-057",
  "08I-061",
  "08I-065",
  "08I-070",
  "08I-074",
  "08I-084",
  "08I-088",
  "08I-092",
  "08I-104",
  "08I-108",
  "08I-112",
  "08I-124",
  "08I-128",
  "08I-132",
  "08I-137",
  "08I-144",
  "08I-148",
  "08I-152",
  "08I-035",
  "08I-040",
];

const MAX_LIVE_CALLS = 30;
const HAIKU_INPUT_USD_PER_MTOK = 1.0;
const HAIKU_OUTPUT_USD_PER_MTOK = 5.0;
const MAX_BUDGET_USD = 1.0;

function tryLoadEnvLocal(): void {
  const projectRoot = path.resolve(ROOT, "../../..");
  const envPath = path.join(projectRoot, ".env.local");
  if (!fs.existsSync(envPath)) return;
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

function estimateUsd(usage: { input_tokens: number; output_tokens: number }): number {
  return (
    (usage.input_tokens / 1_000_000) * HAIKU_INPUT_USD_PER_MTOK +
    (usage.output_tokens / 1_000_000) * HAIKU_OUTPUT_USD_PER_MTOK
  );
}

async function main() {
  tryLoadEnvLocal();
  const raw = JSON.parse(fs.readFileSync(DATASET, "utf8")) as { questions: Eval08iQuestion[] };
  const byId = new Map(raw.questions.map((q) => [q.id, q]));
  const sample = SAMPLE_IDS.map((id) => {
    const q = byId.get(id);
    if (!q) throw new Error(`Missing dataset id ${id}`);
    return q;
  });

  const cfgOff = {
    config: {
      chatEnabled: false,
      apiKeyConfigured: false,
      model: "claude-haiku-4-5-20251001" as const,
    },
  };

  const deterministicRows = [];
  for (const q of sample) {
    const res = await runAssistantQuery({ question: q.question, lang: q.lang }, cfgOff);
    const score = score08iAnswer({
      category: q.category,
      question: q.question,
      responseCategory: res.category,
      answer: res.answer,
      sourceIds: res.sourceIds,
      pipelineMode: "deterministic_off",
      errorCode: res.errorCode,
    });
    if (res.errorCode === "ai_disabled" && res.category !== "ANSWER") {
      score.failureCause = "needs_live_model";
      score.reasons.push("No deterministic handler; would need live model.");
      if (score.overall === "fail" || score.overall === "pass") score.overall = "partial";
    }
    deterministicRows.push({ question: q, response: res, score });
  }

  const detPass = deterministicRows.filter((r) => r.score.overall === "pass").length;
  const detPartial = deterministicRows.filter((r) => r.score.overall === "partial").length;
  const detFail = deterministicRows.filter((r) => r.score.overall === "fail").length;

  const runtime = getAssistantRuntimeConfig();
  const canLive = Boolean(runtime.apiKeyConfigured && process.env.ANTHROPIC_API_KEY?.trim());
  let liveBlock: Record<string, unknown> = {
    executed: false,
    reason: canLive ? "not_run" : "ANTHROPIC_API_KEY missing in local environment",
    pass: 0,
    partial: 0,
    fail: 0,
    estimatedUsd: 0,
    rows: [] as unknown[],
  };

  if (canLive) {
    let spent = 0;
    let calls = 0;
    const liveRows = [];
    const cfgLive = {
      config: {
        chatEnabled: true,
        apiKeyConfigured: true,
        model: runtime.model,
      },
      callModel: async (req: unknown): Promise<ModelCallResult> => {
        if (calls >= MAX_LIVE_CALLS || spent >= MAX_BUDGET_USD) {
          return { ok: false, code: "model_error", message: "08J live eval budget cap" };
        }
        const mod = await import("../../../app/lib/assistant-knowledge/anthropic-caller");
        const out = await mod.callAnthropicModel(req as Parameters<typeof mod.callAnthropicModel>[0]);
        calls += 1;
        if (out.ok && out.usage) spent += estimateUsd(out.usage);
        return out;
      },
    };

    for (const q of sample) {
      if (calls >= MAX_LIVE_CALLS || spent >= MAX_BUDGET_USD) break;
      const res = await runAssistantQuery({ question: q.question, lang: q.lang }, cfgLive);
      const score = score08iAnswer({
        category: q.category,
        question: q.question,
        responseCategory: res.category,
        answer: res.answer,
        sourceIds: res.sourceIds,
        pipelineMode: "live_model",
        errorCode: res.errorCode,
      });
      liveRows.push({ question: q, response: res, score, pipelineMode: "live_model" as const });
    }

    liveBlock = {
      executed: true,
      reason: null,
      pass: liveRows.filter((r) => r.score.overall === "pass").length,
      partial: liveRows.filter((r) => r.score.overall === "partial").length,
      fail: liveRows.filter((r) => r.score.overall === "fail").length,
      apiCalls: calls,
      estimatedUsd: Number(spent.toFixed(4)),
      rows: liveRows,
    };
  }

  const report = {
    generatedAt: new Date().toISOString(),
    oppdag: "08J",
    sampleIds: SAMPLE_IDS,
    deterministic: {
      n: deterministicRows.length,
      pass: detPass,
      partial: detPartial,
      fail: detFail,
      rows: deterministicRows,
    },
    liveHaiku: liveBlock,
    anthropicKeyPresent: canLive,
  };

  fs.mkdirSync(path.dirname(REPORT), { recursive: true });
  fs.writeFileSync(REPORT, JSON.stringify(report, null, 2));
  console.log(
    JSON.stringify(
      {
        deterministic: { pass: detPass, partial: detPartial, fail: detFail },
        live: liveBlock.executed
          ? { pass: liveBlock.pass, partial: liveBlock.partial, fail: liveBlock.fail }
          : { executed: false, reason: liveBlock.reason },
        report: REPORT,
      },
      null,
      2
    )
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});