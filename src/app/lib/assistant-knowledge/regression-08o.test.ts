import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { runAssistantQuery } from "./assistant-service";
import { getAssistantRuntimeConfig } from "./assistant-config";
import { tryGroundedEntityRelationshipAnswer } from "./grounded-entity-relationship-answer";

const cfg = {
  config: { ...getAssistantRuntimeConfig(), chatEnabled: false, apiKeyConfigured: false },
};

type Case = {
  q: string;
  lang?: "no" | "en";
  category?: "ANSWER";
  must: RegExp;
  mustNot?: RegExp;
  urlHint?: RegExp;
};

const documentedFailures: Case[] = [
  { q: "Hvem er Row?", must: /ikke én person|not a single person|Row Solutions/i, urlHint: /row-solutions|rowsolutions/i },
  { q: "Hbem er Gunnar?", must: /Gunnar Gundersen|Row Solutions/i },
  { q: "Du bør vite om Gunnar.", must: /Gunnar Gundersen/i, mustNot: /ikke dokumentert/i },
  { q: "Hvordan samarbeider Marius og Thomas?", must: /Row Solutions|Thomas Holm/i, mustNot: /ikke dokumentert/i },
  { q: "Hvordan samarbeider Marius Ottesen og Thomas Holm?", must: /Row Solutions|AI Discovery/i },
  { q: "Er MOC ENK?", must: /enkeltpersonforetak|ENK|937/ },
  { q: "Er MOC enkeltmannsforetak?", must: /enkeltpersonforetak|ENK|937/ },
  { q: "Enkeltmannsforetak?", must: /MOC|ENK|enkeltpersonforetak|937/ },
  { q: "Row og MOC.", must: /MOC|Row Solutions|adskilt|separate/i, urlHint: /consulting|row/i },
];

const variations: Case[] = [
  { q: "Who is Row?", lang: "en", must: /Row Solutions|not a single person/i },
  { q: "Who is Gunnar?", lang: "en", must: /Gunnar Gundersen/i },
  { q: "What is the relationship between Row and MOC?", lang: "en", must: /separate|MOC|Row/i },
  { q: "Hva er MOC?", must: /Marius Ottesen Consulting|MOC/i },
  { q: "Hva er forskjellen på MOC og Row Solutions?", must: /MOC|Row|adskilt|ikke det samme/i },
  { q: "Er Row et AS?", must: /ikke eget registrert|not a separately registered/i },
  { q: "Is Row a registered company?", lang: "en", must: /shared brand|not a separately registered/i },
  { q: "Hvem er Thomas Holm?", must: /Thomas Holm|Row/i },
  { q: "Hvem er Gunnar Gundersen?", must: /Gunnar/i },
  { q: "Thomas og Marius — samarbeid?", must: /Row Solutions/i },
  { q: "How do Marius and Thomas work together?", lang: "en", must: /Row Solutions/i },
  { q: "Org.nr til MOC?", must: /937/ },
  { q: "Is MOC a sole proprietorship?", lang: "en", must: /sole proprietorship|ENK|937/ },
  { q: "Hva tilbyr Row?", must: /Row|SMB|rowsolutions/i },
  { q: "Hva kan du si om Row?", must: /Row Solutions/i },
  { q: "Kan han holde foredrag?", must: /foredrag|consulting/i },
  { q: "Hvem står bak Row?", must: /Marius|Thomas|Gunnar/i },
  { q: "Hvem står bak rowsolutions?", must: /Thomas Holm/i },
  { q: "AI Discovery — hvem utviklet?", must: /Thomas Holm/i },
  { q: "Hva er Row consulting?", lang: "en", must: /Row Solutions/i },
  { q: "Marius og Row — hva er forskjellen på MOC?", must: /MOC|Row/i },
  { q: "Gunnar i Row", must: /Gunnar|Row/i },
  { q: "Fortell om Gunnar", must: /Gunnar Gundersen/i },
  { q: "Row vs MOC", lang: "en", must: /MOC|Row/i },
  { q: "MOC org number", lang: "en", must: /937/ },
  { q: "Hva er rowsolutions?", must: /Row Solutions|rowsolutions/i },
  { q: "Er Marius og Thomas kolleger i Row?", must: /Row Solutions|Thomas/i },
  { q: "Hvordan henger MOC og Row sammen?", must: /MOC|Row|adskilt/i },
  { q: "Hva betyr MOC?", must: /Marius Ottesen Consulting/i },
  { q: "Er consulting MOC?", must: /MOC|consulting/i },
  { q: "Hvem er med i Row?", must: /Thomas|Marius|Gunnar/i },
  { q: "Partner i Row Solutions", must: /Gunnar|Thomas|Marius/i },
  { q: "Thomas' rolle i Row", must: /Thomas|Row/i },
  { q: "Gunnar partner Row", must: /Gunnar/i },
  { q: "Marius' rolle i Row", must: /Marius|Row/i },
  { q: "Row team", lang: "en", must: /Row Solutions|Thomas|Marius/i },
  { q: "Hvem eier AI Discovery?", must: /Thomas Holm/i },
  { q: "Eier MOC Row?", must: /ikke|not|adskilt|separate/i },
  { q: "Hva er organisasjonsnummeret?", must: /937/ },
  { q: "Marius Ottesen Consulting ENK", must: /ENK|enkeltpersonforetak|937/ },
  { q: "Samarbeid Thomas Gunnar Marius", must: /Row Solutions/i },
  { q: "Hvordan kontakter jeg Marius om Row?", must: /kontakt|contact|Row/i },
  { q: "Hva er hans firma?", must: /MOC|consulting|937/i },
  { q: "Driver han enkeltmannsforetak?", must: /ENK|enkeltperson|937/ },
  { q: "Who owns MOC?", lang: "en", must: /Marius/i },
  { q: "Row Solutions services", lang: "en", must: /Row|rowsolutions/i },
  { q: "Thomas Holm AI Discovery", lang: "en", must: /Thomas|AI Discovery/i },
];

describe("08O entity & relationship regression", () => {
  for (const c of documentedFailures) {
    it(`documented: ${c.q}`, async () => {
      const r = await runAssistantQuery({ question: c.q, lang: c.lang ?? "no" }, cfg);
      assert.equal(r.category, c.category ?? "ANSWER", c.q);
      assert.match(r.answer, c.must, c.q);
      if (c.mustNot) assert.doesNotMatch(r.answer, c.mustNot);
      if (c.urlHint) {
        const blob = (r.urls ?? []).join(" ");
        assert.match(blob, c.urlHint, `sources for: ${c.q}`);
      }
    });
  }

  for (const c of variations) {
    it(`variation: ${c.q.slice(0, 48)}`, async () => {
      const r = await runAssistantQuery({ question: c.q, lang: c.lang ?? "no" }, cfg);
      assert.equal(r.category, "ANSWER", c.q);
      assert.match(r.answer, c.must, c.q);
      if (c.mustNot) assert.doesNotMatch(r.answer, c.mustNot);
    });
  }

  it("deterministic entity module covers ENK", () => {
    const r = tryGroundedEntityRelationshipAnswer("Er MOC ENK?", "no");
    assert.ok(r);
    assert.match(r!.answer, /937/);
    assert.ok(r!.sourceIds.some((id) => id.includes("consulting")));
  });
});