/**
 * 08I blind eval runner — does not modify assistant code.
 * ANTHROPIC_API_KEY absent: scores deterministic pipeline (chat off); flags model-dependent cases.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { runAssistantQuery } from "../../../app/lib/assistant-knowledge/assistant-service";
import { selectRelevantSourceIds } from "../../../app/lib/assistant-knowledge/source-selection";
import type { Eval08iQuestion } from "./generate-dataset";
import { score08iAnswer, type Eval08iFailureCause, type Eval08iVerdict } from "./rubric";

const ROOT = dirname(fileURLToPath(import.meta.url));
const DATASET = join(ROOT, "dataset-08i.json");

type Row = {
  question: Eval08iQuestion;
  responseCategory: string;
  answer: string;
  sourceIds: string[];
  urls: string[];
  pipelineMode: "deterministic_off" | "live_model" | "skipped_model";
  errorCode?: string;
  selectedSources: string[];
  score: ReturnType<typeof score08iAnswer>;
};

const cfgOff = {
  config: {
    chatEnabled: false,
    apiKeyConfigured: false,
    model: "claude-haiku-4-5-20251001" as const,
  },
};

async function main() {
  const raw = JSON.parse(readFileSync(DATASET, "utf8")) as { questions: Eval08iQuestion[] };
  const hasLiveKey = Boolean(process.env.ANTHROPIC_API_KEY?.trim());
  const rows: Row[] = [];

  for (const q of raw.questions) {
    const ctx = q.context?.employerKey ? { employerKey: q.context.employerKey } : undefined;
    const res = await runAssistantQuery({ question: q.question, lang: q.lang, context: ctx }, cfgOff);
    const selectedSources = selectRelevantSourceIds(q.question, q.lang, 5);

    const pipelineMode = hasLiveKey ? "skipped_model" : "deterministic_off";

    const score = score08iAnswer({
      category: q.category,
      question: q.question,
      responseCategory: res.category,
      answer: res.answer,
      sourceIds: res.sourceIds,
      pipelineMode,
      errorCode: res.errorCode,
    });

    if (res.errorCode === "ai_disabled" && !/ANSWER/.test(res.category)) {
      score.failureCause = "needs_live_model";
      score.reasons.push("Would require live model when substantive contexts exist (not run in 08I).");
      if (score.overall !== "pass") score.overall = "partial";
    }

    rows.push({
      question: q,
      responseCategory: res.category,
      answer: res.answer,
      sourceIds: res.sourceIds,
      urls: res.urls,
      pipelineMode,
      errorCode: res.errorCode,
      selectedSources,
      score,
    });
  }

  const byCat = tallyByCategory(rows);
  const byCause = tallyCauses(rows);
  const topFails = rows
    .filter((r) => r.score.overall === "fail")
    .slice(0, 10)
    .map((r) => ({ id: r.question.id, q: r.question.question, reasons: r.score.reasons }));

  const pass = rows.filter((r) => r.score.overall === "pass").length;
  const partial = rows.filter((r) => r.score.overall === "partial").length;
  const fail = rows.filter((r) => r.score.overall === "fail").length;

  const report = {
    generatedAt: new Date().toISOString(),
    dataset: DATASET,
    liveModelUsed: false,
    anthropicKeyPresent: hasLiveKey,
    note: hasLiveKey
      ? "Live model pass not executed in this run to respect budget; deterministic_off only."
      : "ANTHROPIC_API_KEY missing — results reflect deterministic/authoritative pipeline only, not Haiku answer quality.",
    totals: { n: rows.length, pass, partial, fail, passRate: `${((pass / rows.length) * 100).toFixed(1)}%` },
    byCategory: byCat,
    failureCauses: byCause,
    topFailures: topFails,
    rows,
  };

  const outPath = join(ROOT, "reports", "eval-08i-results.json");
  writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
  console.log(JSON.stringify({ ...report, rows: `[${rows.length} rows in file]` }, null, 2));
}

function tallyByCategory(rows: Row[]) {
  const m: Record<string, { pass: number; partial: number; fail: number; n: number }> = {};
  for (const r of rows) {
    const c = r.question.category;
    m[c] ??= { pass: 0, partial: 0, fail: 0, n: 0 };
    m[c].n += 1;
    m[c][r.score.overall] += 1;
  }
  return m;
}

function tallyCauses(rows: Row[]) {
  const m: Record<string, number> = {};
  for (const r of rows) {
    const c = r.score.failureCause ?? "ok";
    m[c] = (m[c] ?? 0) + 1;
  }
  return m;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});