import { classifyQuestionPreModel } from "../../app/lib/assistant-knowledge/question-policy";
import { selectRelevantSourceIds } from "../../app/lib/assistant-knowledge/source-selection";
import { lookupKnowledgeSource } from "../../app/lib/assistant-knowledge/lookup";
import { shouldAnswerConservatively, assessFactualAnswerPolicy } from "../../app/lib/assistant-knowledge/factual-answer-policy";
import { runAssistantQuery } from "../../app/lib/assistant-knowledge/assistant-service";
import { ASSISTANT_LIMITS, getAssistantRuntimeConfig } from "../../app/lib/assistant-knowledge/assistant-config";
import type { ModelCallResult } from "../../app/lib/assistant-knowledge/anthropic-caller";
import { fixedReply } from "../../app/lib/assistant-knowledge/fixed-replies";

const QUESTIONS = [
  "Hvordan kan Marius hjelpe vår virksomhet?",
  "Hvilke lederroller passer Marius til?",
  "Hvilke resultater har Marius oppnådd?",
  "Hvordan skaper Marius verdi?",
];

function mockModel(category: "ANSWER" | "NOT_ON_SITE", answer: string, sourceIds: string[]) {
  return async (): Promise<ModelCallResult> => ({
    ok: true,
    rawText: JSON.stringify({ category, answer, sourceIds }),
    payload: { category, answer, sourceIds },
  });
}

async function trace(q: string) {
  const pre = classifyQuestionPreModel(q);
  const ids = selectRelevantSourceIds(q, "no", ASSISTANT_LIMITS.maxSources);
  const rows = ids.map((id) => {
    const r = lookupKnowledgeSource(id, "no");
    return {
      id,
      substant: r.ok ? r.grounding.suitableForFactualAnswer : false,
      len: r.ok ? r.grounding.plainTextLength : 0,
      title: r.ok ? r.entry.title.slice(0, 48) : "?",
      excerptHead: r.ok ? r.excerpt.text.replace(/\s+/g, " ").slice(0, 120) : "",
    };
  });
  const substantive = rows.filter((r) => r.substant).length;
  const conservative = shouldAnswerConservatively(q);
  const cfg = getAssistantRuntimeConfig();

  const notOnSiteModel = await runAssistantQuery(
    { question: q, lang: "no" },
    {
      config: { chatEnabled: true, apiKeyConfigured: true, model: cfg.model },
      callModel: mockModel("NOT_ON_SITE", "Ikke dokumentert.", []),
    }
  );
  const answerModel = await runAssistantQuery(
    { question: q, lang: "no" },
    {
      config: { chatEnabled: true, apiKeyConfigured: true, model: cfg.model },
      callModel: mockModel("ANSWER", "Kort oppsummering fra modell.", [ids[0]!]),
    }
  );
  const noMockUnconfigured = await runAssistantQuery({ question: q, lang: "no" });

  return {
    q,
    pre,
    sourceIds: ids,
    sources: rows,
    substantiveCount: substantive,
    conservative,
    policyReasons: assessFactualAnswerPolicy(q).reasons,
    env: { chatEnabled: cfg.chatEnabled, apiKeyConfigured: cfg.apiKeyConfigured, model: cfg.model },
    scenarios: {
      mockModelNOT_ON_SITE: {
        category: notOnSiteModel.category,
        errorCode: notOnSiteModel.errorCode,
        answerHead: notOnSiteModel.answer.slice(0, 80),
        matchesFixedNotOnSite: notOnSiteModel.answer.includes(fixedReply("NOT_ON_SITE", "no").slice(0, 40)),
      },
      mockModelANSWER: { category: answerModel.category, sourceIds: answerModel.sourceIds },
      livePipelineNoMock: {
        category: noMockUnconfigured.category,
        errorCode: noMockUnconfigured.errorCode,
        answerHead: noMockUnconfigured.answer.slice(0, 80),
      },
    },
  };
}

async function main() {
  for (const q of QUESTIONS) {
    console.log(JSON.stringify(await trace(q), null, 0));
  }
}

void main();