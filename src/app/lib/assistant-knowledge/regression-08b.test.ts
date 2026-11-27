import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { Lang } from "../../LanguageContext";
import { runAssistantQuery } from "./assistant-service";
import { selectRelevantSourceIds } from "./source-selection";

const enabledConfig = {
  chatEnabled: true,
  apiKeyConfigured: true,
  model: "claude-haiku-4-5-20251001",
};

function mockFromFirstSource() {
  return async (input: { userMessage: string }) => {
    const idMatch = input.userMessage.match(/SOURCE id=(\S+)/);
    const sourceId = idMatch?.[1] ?? "";
    const payload = {
      category: "ANSWER" as const,
      answer: "Kort svar fra mock.",
      sourceIds: sourceId ? [sourceId] : [],
    };
    return { ok: true as const, rawText: JSON.stringify(payload), payload };
  };
}

type Case = {
  id: string;
  question: string;
  lang: Lang;
  /** At least one of the first `rankDepth` ids must match. */
  topSource: RegExp;
  rankDepth?: number;
  /** Every pattern must match at least one selected/cited id (within top N for selection). */
  sourcesMustInclude?: RegExp[];
  selectionDepth?: number;
  answerMustNot?: RegExp;
  answerMust?: RegExp;
};

function assertSourcesInclude(ids: string[], patterns: RegExp[], label: string) {
  for (const pattern of patterns) {
    assert.ok(
      ids.some((id) => pattern.test(id)),
      `${label}: expected ${pattern} among ${ids.join(", ")}`
    );
  }
}

const CASES: Case[] = [
  {
    id: "B01",
    question: "Hvordan skaper Marius verdi?",
    lang: "no",
    topSource: /^(document:open-application|tab:(home|results)):no$/,
    rankDepth: 3,
    sourcesMustInclude: [/^document:open-application:no$/],
    answerMust: /omsette strategi/i,
    answerMustNot: /^article:/,
  },
  {
    id: "B01b",
    question: "Hvordan skaper han verdi?",
    lang: "no",
    topSource: /^(document:open-application|tab:(home|results)):no$/,
    rankDepth: 3,
    sourcesMustInclude: [/^document:open-application:no$/],
    answerMust: /omsette strategi/i,
    answerMustNot: /^article:/,
  },
  {
    id: "B02",
    question: "Hva kan Marius bidra med i vår virksomhet?",
    lang: "no",
    topSource: /^tab:(consulting|home):no$/,
  },
  {
    id: "B03",
    question: "Hvorfor bør vi ansette Marius?",
    lang: "no",
    topSource: /^(document:open-application|tab:(home|cv)):no$/,
    rankDepth: 3,
    sourcesMustInclude: [/^document:open-application:no$/],
    answerMustNot: /^article:/,
  },
  {
    id: "B04",
    question: "Hva har Marius skrevet om verdiskaping?",
    lang: "no",
    topSource: /^hub:articles:no$/,
    sourcesMustInclude: [/^hub:articles:no$/, /^book:no$/],
    answerMust: /fagartikler|Innsikt|artikler|Eksempler/i,
    answerMustNot: /^tab:consulting:/,
  },
  {
    id: "B05",
    question: "Hvilke artikler har han skrevet om ledelse?",
    lang: "no",
    topSource: /^(hub:articles|article):/,
    sourcesMustInclude: [/^hub:articles:no$/],
    answerMust: /fagartikler|artikler|Innsikt|ledelse/i,
    answerMustNot: /^tab:experience:/,
  },
  {
    id: "B06",
    question: "Hva handler VerdisKIftet om?",
    lang: "no",
    topSource: /^book:no$/,
    sourcesMustInclude: [/^book:no$/],
    answerMust: /VerdisKIftet|bok|forfatter/i,
  },
  {
    id: "B07",
    question: "Hva tilbyr Marius Ottesen Consulting?",
    lang: "no",
    topSource: /^tab:consulting:no$/,
  },
  {
    id: "B08",
    question: "Hvilke AI-prosjekter har Marius utviklet?",
    lang: "no",
    topSource: /^(hub:projects|project:)/,
    sourcesMustInclude: [/^hub:projects:no$/],
  },
  {
    id: "B09",
    question: "What has Marius written about value creation?",
    lang: "en",
    topSource: /^hub:articles:en$/,
    sourcesMustInclude: [/^hub:articles:en$/, /^book:en$/],
    answerMust: /articles|Insights|VerdisKIftet/i,
  },
  {
    id: "B10",
    question: "How does Marius create value for businesses?",
    lang: "en",
    topSource: /^(document:open-application:en|tab:home:en)$/,
    sourcesMustInclude: [/^document:open-application:en$/, /^tab:home:en$/],
    answerMust: /turning strategy into tangible commercial results/i,
    answerMustNot: /^article:/,
  },
  {
    id: "B11",
    question: "Hvilke prosjekter er prototyper, og hvilke er publisert?",
    lang: "no",
    topSource: /^hub:projects:no$/,
    sourcesMustInclude: [/^hub:projects:no$/],
  },
];

describe("08B regression — main-tab source priority", () => {
  for (const c of CASES) {
    it(`${c.id} selects sources: ${c.question.slice(0, 42)}`, () => {
      const depth = c.selectionDepth ?? 5;
      const ids = selectRelevantSourceIds(c.question, c.lang, depth);
      const rankDepth = c.rankDepth ?? 1;
      const topSlice = ids.slice(0, rankDepth);
      const topHit = topSlice.some((id) => c.topSource.test(id));
      assert.ok(topHit, `top ${c.topSource} expected in ${topSlice.join(", ")} (full: ${ids.join(", ")})`);
      if (c.sourcesMustInclude) {
        assertSourcesInclude(ids.slice(0, depth), c.sourcesMustInclude, c.id);
      }
    });
  }
});

describe("08B regression — pipeline (mock model)", () => {
  for (const c of CASES) {
    it(`${c.id} answer content and cited sources`, async () => {
      const res = await runAssistantQuery(
        { question: c.question, lang: c.lang },
        { config: enabledConfig, callModel: mockFromFirstSource() }
      );
      assert.equal(res.category, "ANSWER", res.answer);
      const rankDepth = c.rankDepth ?? 1;
      const topHit = res.sourceIds.slice(0, rankDepth).some((id) => c.topSource.test(id));
      assert.ok(topHit, `cited sources=${res.sourceIds.join(",")}`);
      if (c.sourcesMustInclude) {
        assertSourcesInclude(res.sourceIds, c.sourcesMustInclude, `${c.id} cited`);
      }
      if (c.answerMustNot) {
        assert.ok(!c.answerMustNot.test(res.sourceIds[0] ?? ""), `bad primary ${res.sourceIds[0]}`);
      }
      if (c.answerMust) assert.match(res.answer, c.answerMust);
    });
  }
});