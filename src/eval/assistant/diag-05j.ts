/**
 * Oppdrag 05J — fire spørsmål, mock/grounding only (no API).
 */
import { selectRelevantSourceIds } from "../../app/lib/assistant-knowledge/source-selection";
import { lookupKnowledgeSource } from "../../app/lib/assistant-knowledge/lookup";
import { tryGroundedOverviewAnswer, isPortfolioOverviewQuestion } from "../../app/lib/assistant-knowledge/grounded-overview-answer";
import { runAssistantQuery } from "../../app/lib/assistant-knowledge/assistant-service";
import type { SourceContext } from "../../app/lib/assistant-knowledge/assistant-types";
import type { ModelCallResult } from "../../app/lib/assistant-knowledge/anthropic-caller";

const QUESTIONS = [
  "Hvilke resultater har Marius oppnådd?",
  "Hvordan kan Marius hjelpe vår virksomhet?",
  "Kan Marius utvikle praktiske AI-løsninger?",
  "Hvilke lederroller passer Marius til?",
];

function contexts(ids: string[]): SourceContext[] {
  const out: SourceContext[] = [];
  for (const id of ids) {
    const r = lookupKnowledgeSource(id, "no");
    if (!r.ok) continue;
    out.push({
      sourceId: r.entry.id,
      title: r.entry.title,
      url: r.entry.canonicalUrl,
      excerptText: r.excerpt.text,
      suitableForFactualAnswer: r.grounding.suitableForFactualAnswer,
    });
  }
  return out;
}

async function trace(q: string) {
  const ids = selectRelevantSourceIds(q, "no", 3);
  const ctx = contexts(ids);
  const excerpt = tryGroundedOverviewAnswer(q, ctx, "no");
  const res = await runAssistantQuery(
    { question: q, lang: "no" },
    {
      config: { chatEnabled: true, apiKeyConfigured: true, model: "claude-haiku-4-5-20251001" },
      callModel: async (): Promise<ModelCallResult> => ({
        ok: true,
        payload: {
          category: "NOT_ON_SITE",
          answer: "Ikke dokumentert.",
          sourceIds: [],
        },
        rawText: "{}",
      }),
    }
  );
  return {
    q,
    sourceIds: ids,
    portfolioOverview: isPortfolioOverviewQuestion(q),
    excerptFallback: excerpt
      ? { sourceId: excerpt.sourceId, answerHead: excerpt.answer.slice(0, 200), words: excerpt.answer.split(/\s+/).length }
      : null,
    pipelineMockNOT_ON_SITE: {
      category: res.category,
      sourceIds: res.sourceIds,
      answerHead: res.answer.slice(0, 220),
      words: res.answer.split(/\s+/).length,
      hasFraTitle: res.answer.includes("Fra «"),
    },
  };
}

void (async () => {
  for (const q of QUESTIONS) {
    console.log(JSON.stringify(await trace(q)));
  }
})();