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
      answer: "Kort svar fra mock basert på valgt kilde.",
      sourceIds: sourceId ? [sourceId] : [],
    };
    return {
      ok: true as const,
      rawText: JSON.stringify(payload),
      payload,
    };
  };
}

type Case = {
  id: string;
  question: string;
  lang: Lang;
  primarySource: RegExp;
  urlPath: RegExp;
  answerMust?: RegExp;
  answerMustNot?: RegExp;
};

const CASES: Case[] = [
  {
    id: "R01",
    question: "Hvor finner jeg CV-en til Marius?",
    lang: "no",
    primarySource: /^tab:cv:no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/cv$/,
    answerMust: /\/cv/,
  },
  {
    id: "R01b",
    question: "Hvor finner jeg CVen hans?",
    lang: "no",
    primarySource: /^tab:cv:no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/cv$/,
    answerMustNot: /faginnlegg/,
  },
  {
    id: "R01en",
    question: "Where can I find his CV?",
    lang: "en",
    primarySource: /^tab:cv:en$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/en\/cv$/,
  },
  {
    id: "R02",
    question: "Hva slags utdanning har Marius?",
    lang: "no",
    primarySource: /^tab:(cv|home):no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no/,
    answerMust: /utdanning|bi|generative ai/i,
  },
  {
    id: "R03",
    question: "Hvilke lederroller passer han til?",
    lang: "no",
    primarySource: /^tab:(cv|home):no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no/,
    answerMust: /lederroller|kommersiell leder|salgsdirektør/i,
  },
  {
    id: "R04",
    question: "Har han hatt personalansvar?",
    lang: "no",
    primarySource: /^tab:(home|cv|experience):no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no/,
    answerMust: /personalansvar|people leadership/i,
  },
  {
    id: "R05",
    question: "Hvilke resultater har han oppnådd?",
    lang: "no",
    primarySource: /^tab:(results|home|cv):no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no/,
    answerMust: /resultat|franzefoss|mundipharma|salgsvekst/i,
  },
  {
    id: "R06",
    question: "Har Marius referanser?",
    lang: "no",
    primarySource: /^tab:references:no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/referanser$/,
    answerMust: /referanser|anbefaling/i,
  },
  {
    id: "R06b",
    question: "Hva med referanser?",
    lang: "no",
    primarySource: /^tab:references:no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/referanser$/,
  },
  {
    id: "R07",
    question: "Hva sier tidligere medarbeidere om lederskapet hans?",
    lang: "no",
    primarySource: /^tab:references:no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/referanser$/,
  },
  {
    id: "R08",
    question: "Hva tilbyr Marius Ottesen Consulting?",
    lang: "no",
    primarySource: /^tab:consulting:no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/consulting$/,
    answerMust: /Marius Ottesen Consulting/i,
  },
  {
    id: "R09",
    question: "Gjør Marius consulting?",
    lang: "no",
    primarySource: /^tab:consulting:no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/consulting$/,
    answerMust: /Marius Ottesen Consulting/i,
  },
  {
    id: "R10",
    question: "Kan han hjelpe oss med salgsledelse og CRM?",
    lang: "no",
    primarySource: /^tab:consulting:no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/consulting$/,
  },
  {
    id: "R11",
    question: "Hva er Row Solutions?",
    lang: "no",
    primarySource: /^project:row-solutions/,
    urlPath: /row-solutions/,
  },
  {
    id: "R12",
    question: "Hva er forskjellen mellom MOC og Row Solutions?",
    lang: "no",
    primarySource: /^(tab:consulting:no|project:row-solutions)/,
    urlPath: /consulting|row-solutions/,
    answerMust: /Row|Marius Ottesen Consulting|MOC/i,
  },
  {
    id: "R13",
    question: "Hvilke AI-verktøy har Marius utviklet?",
    lang: "no",
    primarySource: /^(hub:projects|project:)/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/prosjekter/,
    answerMustNot: /ai-assistert-innsikt/i,
  },
  {
    id: "R14",
    question: "Hvilke prosjekter er prototyper, og hvilke er publisert?",
    lang: "no",
    primarySource: /^(hub:projects|project:)/,
    urlPath: /prosjekter/,
  },
  {
    id: "R15",
    question: "Hva finner jeg under Innsikt?",
    lang: "no",
    primarySource: /^hub:articles:no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/faginnlegg$/,
    answerMust: /faginnlegg|fagartikler|Innsikt/i,
    answerMustNot: /ai-assistert-innsikt/i,
  },
  {
    id: "R15en",
    question: "What's on the Insights page?",
    lang: "en",
    primarySource: /^hub:articles:en$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/en\/articles$/,
  },
  {
    id: "R16",
    question: "Har Marius skrevet fagartikler?",
    lang: "no",
    primarySource: /^(hub:articles:no|article:)/,
    urlPath: /faginnlegg/,
  },
  {
    id: "R17",
    question: "Hvilke artikler handler om salgsledelse?",
    lang: "no",
    primarySource: /^(hub:articles:no|article:)/,
    urlPath: /faginnlegg/,
    answerMustNot: /ai-assistert-innsikt/i,
  },
  {
    id: "R18",
    question: "Har han skrevet noe om AI og transformasjon?",
    lang: "no",
    primarySource: /^(hub:articles:no|article:)/,
    urlPath: /faginnlegg/,
  },
  {
    id: "R19",
    question: "Hva handler VerdisKIftet om?",
    lang: "no",
    primarySource: /^book:no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/bok$/,
  },
  {
    id: "R20",
    question: "Hvordan kontakter jeg Marius?",
    lang: "no",
    primarySource: /^tab:contact:no$/,
    urlPath: /^https:\/\/www\.mariusottesen\.no\/kontakt$/,
  },
];

describe("07W regression — source selection", () => {
  for (const c of CASES) {
    it(`${c.id} selects primary source for: ${c.question.slice(0, 50)}`, () => {
      const ids = selectRelevantSourceIds(c.question, c.lang, 3);
      assert.ok(
        c.primarySource.test(ids[0] ?? ""),
        `expected ${c.primarySource} got ${ids.join(", ")}`
      );
    });
  }
});

describe("07W regression — pipeline (mock model)", () => {
  for (const c of CASES) {
    it(`${c.id} answers with correct URL: ${c.question.slice(0, 48)}…`, async () => {
      const res = await runAssistantQuery(
        { question: c.question, lang: c.lang },
        { config: enabledConfig, callModel: mockFromFirstSource() }
      );
      assert.equal(res.category, "ANSWER", res.answer);
      const primaryHit = res.sourceIds.some((id) => c.primarySource.test(id));
      assert.ok(primaryHit, `expected one of ${c.primarySource} in ${res.sourceIds.join(",")}`);
      const urlHit = res.urls.some((u) => c.urlPath.test(u));
      assert.ok(urlHit, `urls=${res.urls.join(",")}`);
      if (c.answerMust) assert.match(res.answer, c.answerMust);
      if (c.answerMustNot) assert.ok(!c.answerMustNot.test(res.answer));
    });
  }

});