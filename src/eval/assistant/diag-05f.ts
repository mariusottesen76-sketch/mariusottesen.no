/**
 * Oppdrag 05F — full pipeline trace (no API calls).
 */
import { classifyQuestionPreModel } from "../../app/lib/assistant-knowledge/question-policy";
import { selectRelevantSourceIds } from "../../app/lib/assistant-knowledge/source-selection";
import { lookupKnowledgeSource } from "../../app/lib/assistant-knowledge/lookup";
import {
  assessFactualAnswerPolicy,
  shouldAnswerConservatively,
} from "../../app/lib/assistant-knowledge/factual-answer-policy";
import { buildSystemPrompt, buildUserPrompt } from "../../app/lib/assistant-knowledge/model-prompt";
import { validateModelPayload } from "../../app/lib/assistant-knowledge/validate-response";
import { runAssistantQuery } from "../../app/lib/assistant-knowledge/assistant-service";
import { ASSISTANT_LIMITS, getAssistantRuntimeConfig } from "../../app/lib/assistant-knowledge/assistant-config";
import type { ModelCallResult } from "../../app/lib/assistant-knowledge/anthropic-caller";
import type { SourceContext } from "../../app/lib/assistant-knowledge/assistant-types";
import {
  isConsultingEngagementQuestion,
  isPortfolioOverviewQuestion,
  tryGroundedOverviewAnswer,
} from "../../app/lib/assistant-knowledge/grounded-overview-answer";
import { fixedReply } from "../../app/lib/assistant-knowledge/fixed-replies";

const QUESTIONS = [
  "Hvilke lederroller passer Marius til?",
  "Hvilke resultater har han oppnådd?",
  "Hvordan kan Marius hjelpe vår virksomhet?",
];

function loadContexts(ids: string[], lang: "no"): SourceContext[] {
  const contexts: SourceContext[] = [];
  for (const id of ids) {
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

function mockModel(
  category: "ANSWER" | "NOT_ON_SITE",
  answer: string,
  sourceIds: string[]
): () => Promise<ModelCallResult> {
  return async () => ({
    ok: true,
    rawText: JSON.stringify({ category, answer, sourceIds }),
    payload: { category, answer, sourceIds },
  });
}

function pipelineGate(q: string, contexts: SourceContext[]) {
  const substantive = contexts.filter((c) => c.suitableForFactualAnswer);
  const gates: Record<string, boolean | string | number> = {
    prePolicyBlocks: Boolean(classifyQuestionPreModel(q)),
    substantiveSourceCount: substantive.length,
    conservativeBlock: shouldAnswerConservatively(q),
    consultingPreModel: isConsultingEngagementQuestion(q),
    portfolioOverview: isPortfolioOverviewQuestion(q),
    excerptFallbackAvailable: Boolean(tryGroundedOverviewAnswer(q, contexts, "no")),
  };
  return gates;
}

function validationProbe(contexts: SourceContext[]) {
  const primaryId = contexts.find((c) => c.suitableForFactualAnswer)?.sourceId ?? contexts[0]?.sourceId;
  return {
    goodAnswer: validateModelPayload(
      { category: "ANSWER", answer: "Oppsummering basert på kilder.", sourceIds: primaryId ? [primaryId] : [] },
      contexts,
      "no"
    ),
    emptySourcesOnAnswer: validateModelPayload(
      { category: "ANSWER", answer: "Tekst", sourceIds: [] },
      contexts,
      "no"
    ),
    wrongSourceId: validateModelPayload(
      { category: "ANSWER", answer: "Tekst", sourceIds: ["tab:does-not-exist:no"] },
      contexts,
      "no"
    ),
    modelNotOnSite: validateModelPayload(
      { category: "NOT_ON_SITE", answer: "Ikke dokumentert.", sourceIds: [] },
      contexts,
      "no"
    ),
  };
}

async function trace(q: string) {
  const lang = "no" as const;
  const pre = classifyQuestionPreModel(q);
  const ids = selectRelevantSourceIds(q, lang, ASSISTANT_LIMITS.maxSources);
  const contexts = loadContexts(ids, lang);
  const userMessage = buildUserPrompt(q, contexts);
  const system = buildSystemPrompt(lang);
  const excerpts = contexts.map((c) => ({
    id: c.sourceId,
    substantive: c.suitableForFactualAnswer,
    excerptChars: c.excerptText.length,
    excerptPreview: c.excerptText.replace(/\s+/g, " ").slice(0, 200),
  }));

  const mockNotOnSite = await runAssistantQuery(
    { question: q, lang },
    {
      config: { chatEnabled: true, apiKeyConfigured: true, model: getAssistantRuntimeConfig().model },
      callModel: mockModel("NOT_ON_SITE", "Ikke i kildene.", []),
    }
  );
  const mockAnswer = await runAssistantQuery(
    { question: q, lang },
    {
      config: { chatEnabled: true, apiKeyConfigured: true, model: getAssistantRuntimeConfig().model },
      callModel: mockModel("ANSWER", "Kort svar fra modell.", [ids[0]!]),
    }
  );

  let rejectionHypothesis = "reaches_model";
  if (pre) rejectionHypothesis = `pre_policy:${pre.reason}`;
  else if (contexts.filter((c) => c.suitableForFactualAnswer).length === 0) rejectionHypothesis = "insufficient_grounding";
  else if (shouldAnswerConservatively(q)) rejectionHypothesis = "conservative_gate";
  else if (isConsultingEngagementQuestion(q)) rejectionHypothesis = "consulting_pre_model_short_circuit";
  else rejectionHypothesis = "model_or_post_validation";

  return {
    question: q,
    prePolicy: pre,
    factualPolicy: assessFactualAnswerPolicy(q),
    pipelineGates: pipelineGate(q, contexts),
    sourceIds: ids,
    grounding: excerpts,
    promptStats: {
      systemChars: system.length,
      userMessageChars: userMessage.length,
      blocksInPrompt: (userMessage.match(/^SOURCE id=/gm) ?? []).length,
      personaNotOnSiteLine: system.includes("bruk kategori NOT_ON_SITE"),
      rulesBroadQuestionLine: system.includes("Do not use NOT_ON_SITE only because the question is broad"),
    },
    userMessage,
    validation: validationProbe(contexts),
    expectedModelJson:
      '{"category":"ANSWER|NOT_ON_SITE|RESTRICTED|OFF_TOPIC","answer":"plain text","sourceIds":["id1"]}',
    outcomes: {
      mockModelNOT_ON_SITE: {
        category: mockNotOnSite.category,
        errorCode: mockNotOnSite.errorCode,
        sourceIds: mockNotOnSite.sourceIds,
        isFixedNotOnSiteText: mockNotOnSite.answer === fixedReply("NOT_ON_SITE", lang),
        answerHead: mockNotOnSite.answer.slice(0, 120),
      },
      mockModelANSWER: {
        category: mockAnswer.category,
        sourceIds: mockAnswer.sourceIds,
        answerHead: mockAnswer.answer.slice(0, 120),
      },
    },
    rejectionHypothesis,
  };
}

async function main() {
  const cfg = getAssistantRuntimeConfig();
  console.log(
    JSON.stringify(
      {
        env: {
          chatEnabled: cfg.chatEnabled,
          apiKeyConfigured: cfg.apiKeyConfigured,
          model: cfg.model,
          note: "Shell uten .env.local → chatEnabled false i app; mock-scenario overstyrer.",
        },
        traces: await Promise.all(QUESTIONS.map(trace)),
      },
      null,
      2
    )
  );
}

void main();