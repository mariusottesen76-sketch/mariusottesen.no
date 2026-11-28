import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { runAssistantQuery } from "./assistant-service";
import { tryGroundedCareerAnswer } from "./grounded-career-answer";
import { tryGroundedConsultingDeliveryAnswer } from "./grounded-consulting-delivery-answer";
import { getAssistantRuntimeConfig } from "./assistant-config";
import { isQuestionAboutMarius } from "./site-assistant-subject";

const cfgOff = {
  config: {
    ...getAssistantRuntimeConfig(),
    chatEnabled: false,
    apiKeyConfigured: false,
  },
};

describe("08N entity & delivery regression", () => {
  const rowCases: Array<{ q: string; lang: "no" | "en"; pattern: RegExp }> = [
    { q: "Hva er Row?", lang: "no", pattern: /Row Solutions|SMB|rowsolutions/i },
    { q: "Hva kan du si om Row?", lang: "no", pattern: /Row Solutions|fire tjenesteområder|rowsolutions/i },
    { q: "Hva tilbyr Row Solutions?", lang: "no", pattern: /Row|rowsolutions/i },
    { q: "What is Row consulting?", lang: "en", pattern: /Row Solutions|SME/i },
    { q: "Hvem er Thomas?", lang: "no", pattern: /Thomas Holm|Row Solutions/i },
    { q: "Who is Thomas Holm?", lang: "en", pattern: /Thomas Holm|AI Discovery/i },
    { q: "Hvem står bak Row Solutions?", lang: "no", pattern: /Thomas Holm|Gunnar Gundersen|Marius Ottesen/i },
  ];

  for (const { q, lang, pattern } of rowCases) {
    it(`Row/people: ${q}`, async () => {
      const r = await runAssistantQuery({ question: q, lang }, cfgOff);
      assert.equal(r.category, "ANSWER", `expected ANSWER for: ${q}`);
      assert.match(r.answer, pattern);
      assert.ok((r.urls?.length ?? r.sourceIds?.length ?? 0) > 0);
    });
  }

  const deliveryCases: Array<{ q: string; lang: "no" | "en"; mustNot: RegExp; must: RegExp }> = [
    {
      q: "Kan Marius holde kurs?",
      lang: "no",
      mustNot: /NOT_ON_SITE|ikke dokumentert/i,
      must: /kurs|foredrag|consulting|kontakt/i,
    },
    {
      q: "Kan han holde kurs eller foredrag?",
      lang: "no",
      mustNot: /kan ikke|cannot offer|NOT_ON_SITE/i,
      must: /foredrag|kurs|tema|consulting/i,
    },
    {
      q: "Har Marius dokumenterte foredragsoppdrag?",
      lang: "no",
      mustNot: /Coca-Cola|fant opp/i,
      must: /tema|bidrag|ikke en fullstendig liste|not a complete list/i,
    },
    {
      q: "Tilbyr MOC workshops?",
      lang: "no",
      mustNot: /NOT_ON_SITE/i,
      must: /workshop|MOC|consulting/i,
    },
    {
      q: "Can he give talks?",
      lang: "en",
      mustNot: /NOT_ON_SITE/i,
      must: /talk|workshop|consulting|contact/i,
    },
    {
      q: "How do we contact Marius about a talk?",
      lang: "en",
      mustNot: /NOT_ON_SITE/i,
      must: /contact|kontakt|consulting|get in touch|ta kontakt/i,
    },
  ];

  for (const { q, lang, must, mustNot } of deliveryCases) {
    it(`Delivery: ${q}`, async () => {
      const r = await runAssistantQuery({ question: q, lang }, cfgOff);
      assert.equal(r.category, "ANSWER", q);
      assert.match(r.answer, must);
      assert.doesNotMatch(r.answer, mustNot);
    });
  }

  it("subject: Thomas is not defaulted to Marius", () => {
    assert.ok(!isQuestionAboutMarius("Hvem er Thomas?"));
  });

  it("deterministic: Row shorthand core", () => {
    const r = tryGroundedCareerAnswer("Hva kan du si om Row?", "no");
    assert.ok(r);
    assert.match(r!.answer, /Row Solutions/i);
  });

  it("deterministic: delivery capability before model", () => {
    const r = tryGroundedConsultingDeliveryAnswer("Kan han holde foredrag?", "no");
    assert.ok(r);
    assert.match(r!.answer, /foredrag|tema/i);
    assert.ok(r!.sourceIds.some((id) => id.includes("consulting")));
  });
});