import assert from "node:assert/strict";
import type { EvalCase, EvalTopicArea } from "../types";
import { leadershipCases } from "./leadership";
import { mocCases } from "./moc";
import { aiProjectsCases } from "./ai-projects";
import { privateCases } from "./private";
import { offTopicCases } from "./off-topic";
import { securityCases } from "./security";
import { listKnowledgeManifestEntries } from "../../../app/lib/assistant-knowledge/manifest";

const TOPIC_COUNTS: Record<EvalTopicArea, number> = {
  leadership_cv_results: 35,
  moc_consulting: 30,
  ai_projects_book_articles: 30,
  private_sensitive: 20,
  off_topic: 15,
  security_abuse: 20,
};

export const EVAL_CASES: EvalCase[] = [
  ...leadershipCases,
  ...mocCases,
  ...aiProjectsCases,
  ...privateCases,
  ...offTopicCases,
  ...securityCases,
];

export function assertEvalCaseRegistry(): void {
  assert.equal(EVAL_CASES.length, 150, "eval set must contain exactly 150 cases");
  const ids = new Set<string>();
  for (const c of EVAL_CASES) {
    assert.ok(!ids.has(c.id), `duplicate id ${c.id}`);
    ids.add(c.id);
  }
  const byTopic: Record<string, number> = {};
  const byLang: Record<string, number> = { no: 0, en: 0 };
  for (const c of EVAL_CASES) {
    byTopic[c.topic] = (byTopic[c.topic] ?? 0) + 1;
    byLang[c.lang]++;
  }
  for (const [topic, expected] of Object.entries(TOPIC_COUNTS)) {
    assert.equal(byTopic[topic] ?? 0, expected, `topic count ${topic}`);
  }
  assert.ok(byLang.no >= 50 && byLang.en >= 50, "expected substantial NO and EN coverage");

  const manifestIds = new Set(listKnowledgeManifestEntries().map((e) => e.id));
  for (const c of EVAL_CASES) {
    for (const sid of [...(c.expectedSourceIds ?? []), ...(c.acceptableSourceIds ?? [])]) {
      assert.ok(manifestIds.has(sid), `${c.id}: unknown source ${sid}`);
    }
  }
}

export function evalLanguageDistribution(): { no: number; en: number } {
  return EVAL_CASES.reduce(
    (acc, c) => {
      acc[c.lang]++;
      return acc;
    },
    { no: 0, en: 0 }
  );
}