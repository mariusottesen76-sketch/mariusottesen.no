import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { runAssistantQuery } from "./assistant-service";
import { lookupKnowledgeSource } from "./lookup";
import { selectRelevantSourceIds } from "./source-selection";
import { shouldAnswerConservatively } from "./factual-answer-policy";
import { tryGroundedFactualAnswer } from "./grounded-factual-answer";
import { assertUrlsAllowed } from "./validate-response";
import { fixedReply } from "./fixed-replies";

const REGRESSION = [
  {
    q: "Hvilken utdanning har Marius?",
    mustMatch: [/generative ai for business|handelshøyskolen|bi/i],
    mustNot: [/ikke dokumentert|undervist/i],
    sourceHint: /:home:|tab:cv:/,
  },
  {
    q: "Har Marius undervist på BI?",
    mustMatch: [/nei|ikke|studert/i, /generative ai|bi/i],
    mustNot: [/ja,.*undervist/i],
    sourceHint: /:home:|tab:cv:/,
  },
  {
    q: "Har Marius jobbet i Mundipharma?",
    mustMatch: [/mundipharma/i, /ja/i],
    mustNot: [/ikke dokumentert/i],
    sourceHint: /:experience:|tab:cv:/,
  },
  {
    q: "Hvilke bransjer har Marius erfaring fra?",
    mustMatch: [/b2b|industri|life science|sirkulær|grossist|gjenvinning/i],
    mustNot: [/ikke dokumentert/i],
    sourceHint: /:experience:/,
  },
  {
    q: "Har Marius hatt personalansvar?",
    mustMatch: [/personalansvar|personal- og resultatansvar|people leadership/i],
    mustNot: [/ikke dokumentert/i],
    sourceHint: /:home:|tab:cv:/,
  },
  {
    q: "Hvor mange ansatte har Marius ledet?",
    mustMatch: [/10|20|årsverk/i],
    mustNot: [/ikke tilstrekkelig dokumentert/i],
    sourceHint: /:home:|tab:experience:/,
  },
  {
    q: "Hvilke resultater har Marius oppnådd?",
    mustMatch: [/67|franzefoss|mundipharma|salgsvekst/i],
    mustNot: [/ikke dokumentert/i],
    sourceHint: /:results:|tab:cv:|tab:experience:/,
  },
  {
    q: "Hvordan kan Marius hjelpe vår virksomhet?",
    mustMatch: [/kommersiell|consulting|virksomhet|salg|transformasjon/i],
    mustNot: [/cons-dialog|#/i],
    sourceHint: /:consulting:|tab:home:/,
  },
  {
    q: "Hva kan Marius bidra med som kommersiell leder?",
    mustMatch: [/kommersiell|salgs|p\/l|gjennomføring/i],
    mustNot: [/ikke dokumentert/i],
    sourceHint: /:home:|tab:cv:/,
  },
  {
    q: "Hvilke lederroller passer han til?",
    mustMatch: [/kommersiell leder|salgsdirektør|transformasjonsleder|aktuell/i],
    mustNot: [/ikke dokumentert/i],
    sourceHint: /:home:|tab:cv:/,
  },
] as const;

describe("07H factual regression (deterministic, no Anthropic)", () => {
  it("CV PDF is not in knowledge manifest", () => {
    const cv = lookupKnowledgeSource("tab:cv:no");
    assert.equal(cv.ok, true);
    if (!cv.ok) return;
    assert.match(cv.entry.url, /^https:\/\/www\.mariusottesen\.no\/cv$/);
    assert.doesNotMatch(cv.excerpt.text.toLowerCase(), /\.pdf/);
  });

  it("profile and experience excerpts ground BI study and personalansvar", () => {
    const home = lookupKnowledgeSource("tab:home:no");
    const exp = lookupKnowledgeSource("tab:experience:no");
    assert.equal(home.ok, true);
    assert.equal(exp.ok, true);
    if (!home.ok || !exp.ok) return;
    const h = home.excerpt.text.toLowerCase();
    const e = exp.excerpt.text.toLowerCase();
    assert.match(h, /generative ai for business/);
    assert.match(h, /personalansvar/);
    assert.match(e, /mundipharma/);
    assert.match(e, /franzefoss gjenvinning/);
    assert.equal(home.grounding.suitableForFactualAnswer, true);
  });

  it("NOT_ON_SITE copy uses public consulting path without hash", () => {
    const text = fixedReply("NOT_ON_SITE", "no");
    assert.doesNotMatch(text, /#/);
    assert.match(text, /\/consulting/);
  });

  for (const row of REGRESSION) {
    it(`pipeline: ${row.q}`, async () => {
      assert.equal(shouldAnswerConservatively(row.q), false, row.q);
      const ids = selectRelevantSourceIds(row.q, "no", 3);
      assert.ok(row.sourceHint.test(ids.join(" ")), `${row.q} → ${ids.join(", ")}`);

      const grounded = tryGroundedFactualAnswer(row.q, "no");
      const res = await runAssistantQuery(
        { question: row.q, lang: "no" },
        { config: { chatEnabled: false, apiKeyConfigured: false, model: "claude-haiku-4-5-20251001" } }
      );

      assert.equal(res.category, "ANSWER", row.q);
      for (const re of row.mustMatch) assert.match(res.answer, re, row.q);
      for (const re of row.mustNot) assert.doesNotMatch(res.answer.toLowerCase(), re, row.q);
      assert.ok(res.sourceIds.length > 0);
      assert.ok(assertUrlsAllowed(res.urls));
      assert.doesNotMatch(res.answer, /\/#|cons-dialog/i);

      if (grounded) {
        assert.ok(grounded.answer.length > 40);
      }
    });
  }

  it("private question stays RESTRICTED without spurious links", async () => {
    const res = await runAssistantQuery(
      { question: "Hva kan du fortelle om Marius sitt privatliv og ekteskap?", lang: "no" },
      { config: { chatEnabled: false, apiKeyConfigured: false, model: "claude-haiku-4-5-20251001" } }
    );
    assert.equal(res.category, "RESTRICTED");
    assert.doesNotMatch(res.answer, /#/);
  });
});