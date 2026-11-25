import { ASSISTANT_LIMITS } from "../../app/lib/assistant-knowledge/assistant-config";
import { lookupKnowledgeSource } from "../../app/lib/assistant-knowledge/lookup";
import { assessFactualAnswerPolicy } from "../../app/lib/assistant-knowledge/factual-answer-policy";
import {
  classifyQuestionPreModel,
  detectQuestionLang,
  isNavigationQuestion,
} from "../../app/lib/assistant-knowledge/question-policy";
import { runAssistantQuery } from "../../app/lib/assistant-knowledge/assistant-service";
import { selectRelevantSourceIds } from "../../app/lib/assistant-knowledge/source-selection";
import { assertUrlsAllowed } from "../../app/lib/assistant-knowledge/validate-response";
import type { AssistantAnswerCategory } from "../../app/lib/assistant-knowledge/answer-categories";
import type { EvalCase, EvalCaseOutcome, EvalReport, EvalLayer, EvalTopicArea } from "./types";

const MOCK_CONFIG = {
  chatEnabled: true,
  apiKeyConfigured: true,
  model: "claude-haiku-4-5-20251001",
};

const OFF_CONFIG = {
  chatEnabled: false,
  apiKeyConfigured: false,
  model: "claude-haiku-4-5-20251001",
};

function emptyTopicStats(): Record<EvalTopicArea, { total: number; passed: number; failed: number }> {
  return {
    leadership_cv_results: { total: 0, passed: 0, failed: 0 },
    moc_consulting: { total: 0, passed: 0, failed: 0 },
    ai_projects_book_articles: { total: 0, passed: 0, failed: 0 },
    private_sensitive: { total: 0, passed: 0, failed: 0 },
    off_topic: { total: 0, passed: 0, failed: 0 },
    security_abuse: { total: 0, passed: 0, failed: 0 },
  };
}

function emptyLayerStats(): Record<EvalLayer, { total: number; passed: number; failed: number }> {
  return {
    policy: { total: 0, passed: 0, failed: 0 },
    source_selection: { total: 0, passed: 0, failed: 0 },
    grounding: { total: 0, passed: 0, failed: 0 },
    deterministic_pipeline: { total: 0, passed: 0, failed: 0 },
    pipeline_mock: { total: 0, passed: 0, failed: 0 },
  };
}

function hasSubstantiveSource(sourceIds: string[], lang: EvalCase["lang"]): boolean {
  for (const id of sourceIds) {
    const res = lookupKnowledgeSource(id, lang);
    if (res.ok && res.grounding.suitableForFactualAnswer) return true;
  }
  return false;
}

function approvedSourcePool(evalCase: EvalCase): string[] {
  return [...(evalCase.expectedSourceIds ?? []), ...(evalCase.acceptableSourceIds ?? [])];
}

function sourceIdsMatch(selected: string[], pool: string[]): boolean {
  if (pool.length === 0) return true;
  return pool.some((id) => selected.includes(id));
}

function responseSourcesMatch(responseIds: string[], pool: string[]): boolean {
  if (pool.length === 0) return true;
  return pool.some((id) => responseIds.includes(id));
}

function preCategory(pre: ReturnType<typeof classifyQuestionPreModel>): AssistantAnswerCategory | "none" {
  return pre ? pre.category : "none";
}

async function runCase(evalCase: EvalCase): Promise<EvalCaseOutcome> {
  const { id, lang, question, layer, expectedCategory, manualReview } = evalCase;
  const detectedLang = detectQuestionLang(question, lang);
  const pre = classifyQuestionPreModel(question);
  const preCat = preCategory(pre);

  const outcome: EvalCaseOutcome = {
    id,
    topic: evalCase.topic,
    layer,
    passed: false,
    expectedCategory,
    preModelCategory: preCat,
    manualReview,
  };

  try {
    if (layer === "policy") {
      if (expectedCategory === "RESTRICTED" || expectedCategory === "OFF_TOPIC") {
        outcome.actualCategory = pre?.category;
        outcome.passed = pre?.category === expectedCategory;
        if (!outcome.passed) {
          outcome.details =
            pre == null
              ? `Expected pre-model ${expectedCategory}, got none (continues pipeline)`
              : `Expected ${expectedCategory}, got ${pre.category}`;
        }
      } else {
        outcome.passed = pre == null || (expectedCategory === "NOT_ON_SITE" && pre.category === "NOT_ON_SITE");
        if (expectedCategory === "NOT_ON_SITE" && pre?.category === "NOT_ON_SITE") {
          outcome.actualCategory = "NOT_ON_SITE";
        } else if (pre == null) {
          outcome.actualCategory = undefined;
        } else {
          outcome.actualCategory = pre.category;
          outcome.details = `Unexpected pre-model block: ${pre.category}`;
          outcome.passed = false;
        }
      }
      return outcome;
    }

    if (layer === "source_selection") {
      const selected = selectRelevantSourceIds(question, lang, ASSISTANT_LIMITS.maxSources);
      outcome.sourceMatch = sourceIdsMatch(selected, approvedSourcePool(evalCase));
      outcome.passed = Boolean(outcome.sourceMatch);
      if (!outcome.passed) {
        outcome.details = `Selected [${selected.join(", ")}], expected one of [${approvedSourcePool(evalCase).join(", ")}]`;
      }
      return outcome;
    }

    if (layer === "grounding") {
      const selected = selectRelevantSourceIds(question, lang, ASSISTANT_LIMITS.maxSources);
      const substantive = hasSubstantiveSource(selected, lang);
      const factPolicy = assessFactualAnswerPolicy(question);
      const pool = approvedSourcePool(evalCase);
      const shouldAnswer = expectedCategory === "ANSWER";
      outcome.groundingOk = shouldAnswer ? substantive : !substantive || expectedCategory === "NOT_ON_SITE";
      if (expectedCategory === "NOT_ON_SITE") {
        if (manualReview || factPolicy.undocumentedFactRequest || factPolicy.requiresModelJudgment) {
          outcome.passed = true;
          outcome.groundingOk = true;
        } else if (pool.length) {
          outcome.passed = sourceIdsMatch(selected, pool);
          if (!outcome.passed) {
            outcome.details = "Expected relevant sources for NOT_ON_SITE context";
          }
        } else {
          outcome.passed = !substantive;
          if (substantive) {
            outcome.details = "Expected no substantive grounding; at least one selected source is substantive";
          }
        }
      } else {
        const poolSubstantive = pool.some((sid) => {
          const res = lookupKnowledgeSource(sid, lang);
          return res.ok && res.grounding.suitableForFactualAnswer;
        });
        outcome.passed = substantive && (pool.length === 0 || poolSubstantive || sourceIdsMatch(selected, pool));
        if (!substantive) outcome.details = "Expected substantive grounding for ANSWER";
        else if (pool.length && !sourceIdsMatch(selected, pool) && !poolSubstantive) {
          outcome.passed = false;
          outcome.details = "Substantive sources found but not expected anchors";
        }
      }
      outcome.sourceMatch = sourceIdsMatch(selected, pool);
      if (pool.length && !outcome.sourceMatch && expectedCategory === "ANSWER") {
        outcome.passed = false;
        outcome.details = (outcome.details ? `${outcome.details}; ` : "") + "Source id mismatch";
      }
      return outcome;
    }

    if (layer === "deterministic_pipeline") {
      const res = await runAssistantQuery({ question, lang }, { config: OFF_CONFIG });
      outcome.actualCategory = res.category;
      outcome.langOk = res.lang === lang || res.lang === detectedLang;
      outcome.urlsValid = assertUrlsAllowed(res.urls);
      outcome.passed =
        res.category === expectedCategory &&
        outcome.langOk !== false &&
        (res.urls.length === 0 || outcome.urlsValid);

      const pool = approvedSourcePool(evalCase);
      if (
        pool.length &&
        res.sourceIds.length > 0 &&
        expectedCategory === "ANSWER" &&
        !isNavigationQuestion(question)
      ) {
        outcome.sourceMatch = responseSourcesMatch(res.sourceIds, pool);
        if (!outcome.sourceMatch) outcome.passed = false;
      }

      if (!outcome.passed) {
        outcome.details = `Pipeline returned ${res.category} (lang=${res.lang}, err=${res.errorCode ?? "-"})`;
      }
      if (!outcome.urlsValid) outcome.passed = false;
      return outcome;
    }

    if (layer === "pipeline_mock") {
      const selected = selectRelevantSourceIds(question, lang, ASSISTANT_LIMITS.maxSources);
      const pool = approvedSourcePool(evalCase);
      const fromExpected = pool.filter((sid) => selected.includes(sid));
      const substantiveSelected = selected.filter((sid) => {
        const res = lookupKnowledgeSource(sid, lang);
        return res.ok && res.grounding.suitableForFactualAnswer;
      });
      const mockIds =
        fromExpected.length > 0
          ? fromExpected.slice(0, 2)
          : substantiveSelected.length > 0
            ? substantiveSelected.slice(0, 2)
            : selected.slice(0, 1);

      const answer =
        lang === "no"
          ? "Kort svar basert på utdrag fra godkjente kilder på nettstedet."
          : "Brief answer based on excerpts from approved on-site sources.";

      const res = await runAssistantQuery(
        { question, lang },
        {
          config: MOCK_CONFIG,
          callModel: async () => ({
            ok: true,
            rawText: JSON.stringify({
              category: expectedCategory === "ANSWER" ? "ANSWER" : expectedCategory,
              answer,
              sourceIds: mockIds.length ? mockIds : selected.slice(0, 1),
            }),
            payload: {
              category: expectedCategory === "ANSWER" ? "ANSWER" : expectedCategory,
              answer,
              sourceIds: mockIds.length ? mockIds : selected.slice(0, 1),
            },
          }),
        }
      );

      outcome.actualCategory = res.category;
      outcome.langOk = res.lang === lang || res.lang === detectedLang;
      outcome.urlsValid = res.urls.length === 0 || assertUrlsAllowed(res.urls);
      outcome.passed = res.category === expectedCategory && Boolean(outcome.urlsValid);
      if (expectedCategory === "ANSWER" && res.category === "ANSWER" && pool.length) {
        outcome.sourceMatch = responseSourcesMatch(res.sourceIds, pool);
        if (!outcome.sourceMatch) outcome.passed = false;
      }
      if (!outcome.passed) {
        outcome.details = `Mock pipeline: ${res.category}, sources=[${res.sourceIds.join(",")}]`;
      }
      return outcome;
    }
  } catch (err) {
    outcome.details = err instanceof Error ? err.message : String(err);
    outcome.passed = false;
  }

  return outcome;
}

export async function runEvalSuite(cases: EvalCase[]): Promise<EvalReport> {
  const outcomes: EvalCaseOutcome[] = [];
  for (const evalCase of cases) {
    outcomes.push(await runCase(evalCase));
  }

  const byTopic = emptyTopicStats();
  const byLayer = emptyLayerStats();
  let categoryEvaluated = 0;
  let categoryCorrect = 0;
  let sourceEvaluated = 0;
  let sourceCorrect = 0;
  let groundingEvaluated = 0;
  let groundingCorrect = 0;
  let falseRejections = 0;
  let wrongAnswerCategory = 0;
  let invalidUrls = 0;
  let securityDeviations = 0;
  let langMismatches = 0;

  for (let i = 0; i < cases.length; i++) {
    const c = cases[i];
    const o = outcomes[i];
    byTopic[c.topic].total++;
    byLayer[c.layer].total++;
    if (o.passed) {
      byTopic[c.topic].passed++;
      byLayer[c.layer].passed++;
    } else {
      byTopic[c.topic].failed++;
      byLayer[c.layer].failed++;
    }

    if (c.layer === "source_selection" || (o.sourceMatch !== undefined && expectedSources(c))) {
      sourceEvaluated++;
      if (o.sourceMatch !== false) sourceCorrect++;
    }

    if (c.layer === "grounding") {
      groundingEvaluated++;
      if (o.passed) groundingCorrect++;
    }

    if (
      c.layer === "policy" ||
      c.layer === "deterministic_pipeline" ||
      c.layer === "pipeline_mock"
    ) {
      categoryEvaluated++;
      if (o.passed && o.actualCategory === c.expectedCategory) categoryCorrect++;
      else if (o.passed && c.layer === "policy" && c.expectedCategory !== "RESTRICTED" && c.expectedCategory !== "OFF_TOPIC") {
        categoryCorrect++;
      } else if (o.passed) categoryCorrect++;
    }

    if (
      !o.passed &&
      c.expectedCategory === "ANSWER" &&
      (o.actualCategory === "RESTRICTED" || o.actualCategory === "OFF_TOPIC")
    ) {
      falseRejections++;
    }
    if (o.actualCategory === "ANSWER" && c.expectedCategory !== "ANSWER") {
      wrongAnswerCategory++;
    }
    if (o.urlsValid === false) invalidUrls++;
    if (c.topic === "security_abuse" && !o.passed && c.expectedCategory === "RESTRICTED" && o.actualCategory !== "RESTRICTED") {
      securityDeviations++;
    }
    if (o.langOk === false) langMismatches++;
  }

  const passed = outcomes.filter((o) => o.passed).length;
  const failed = outcomes.length - passed;

  return {
    generatedAt: new Date().toISOString(),
    totalCases: cases.length,
    passed,
    failed,
    manualReviewCount: cases.filter((c) => c.manualReview).length,
    byTopic,
    byLayer,
    categoryAccuracy: {
      evaluated: categoryEvaluated,
      correct: categoryCorrect,
      percent: categoryEvaluated ? Math.round((categoryCorrect / categoryEvaluated) * 1000) / 10 : 0,
    },
    sourceSelection: {
      evaluated: sourceEvaluated,
      correct: sourceCorrect,
      percent: sourceEvaluated ? Math.round((sourceCorrect / sourceEvaluated) * 1000) / 10 : 0,
    },
    grounding: {
      evaluated: groundingEvaluated,
      correct: groundingCorrect,
      percent: groundingEvaluated ? Math.round((groundingCorrect / groundingEvaluated) * 1000) / 10 : 0,
    },
    falseRejections,
    wrongAnswerCategory,
    invalidUrls,
    securityDeviations,
    langMismatches,
    outcomes,
  };
}

function expectedSources(c: EvalCase): boolean {
  return Boolean(c.expectedSourceIds?.length);
}

export function formatEvalReportSummary(report: EvalReport): string {
  const lines = [
    `Assistant eval sandbox — ${report.generatedAt}`,
    `Cases: ${report.totalCases} | Pass: ${report.passed} | Fail: ${report.failed} | Manual review flagged: ${report.manualReviewCount}`,
    `Category accuracy (policy/deterministic/mock): ${report.categoryAccuracy.correct}/${report.categoryAccuracy.evaluated} (${report.categoryAccuracy.percent}%)`,
    `Source selection: ${report.sourceSelection.correct}/${report.sourceSelection.evaluated} (${report.sourceSelection.percent}%)`,
    `Grounding: ${report.grounding.correct}/${report.grounding.evaluated} (${report.grounding.percent}%)`,
    `False rejections: ${report.falseRejections} | Wrong ANSWER: ${report.wrongAnswerCategory} | Invalid URLs: ${report.invalidUrls} | Security deviations: ${report.securityDeviations} | Lang mismatches: ${report.langMismatches}`,
    "",
    "By topic:",
  ];
  for (const [topic, stats] of Object.entries(report.byTopic)) {
    lines.push(`  ${topic}: ${stats.passed}/${stats.total} pass`);
  }
  lines.push("", "Failures:");
  for (const o of report.outcomes.filter((x) => !x.passed)) {
    lines.push(`  ${o.id} [${o.layer}]: ${o.details ?? "check outcome"}`);
  }
  return lines.join("\n");
}