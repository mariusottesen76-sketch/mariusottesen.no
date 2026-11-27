import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { runAssistantQuery } from "./assistant-service";
import type { Lang } from "../../LanguageContext";

const cfgOff = {
  config: { chatEnabled: false, apiKeyConfigured: false, model: "claude-haiku-4-5-20251001" as const },
};

const mockOn = {
  config: { chatEnabled: true, apiKeyConfigured: true, model: "claude-haiku-4-5-20251001" as const },
  callModel: async (): Promise<import("./anthropic-caller").ModelCallResult> => ({
    ok: true as const,
    rawText: "{}",
    payload: { category: "NOT_ON_SITE" as const, answer: "[]", sourceIds: [] },
  }),
};

type Group = {
  name: string;
  lang: Lang;
  variants: string[];
  mustMatch: RegExp;
  mustNot?: RegExp;
};

async function assertSemanticGroup(group: Group): Promise<void> {
  for (const q of group.variants) {
    const r = await runAssistantQuery({ question: q, lang: group.lang }, cfgOff);
    assert.equal(r.category, "ANSWER", `${group.name}: ${q}`);
    assert.match(r.answer, group.mustMatch, `${group.name}: ${q}`);
    if (group.mustNot) assert.doesNotMatch(r.answer, group.mustNot, `${group.name}: ${q}`);
    assert.ok(r.sourceIds.length > 0, `${group.name} sources: ${q}`);
  }
}

describe("08L semantic consistency (deterministic pipeline)", () => {
  it("education: pronouns, spelling, EN/NO", async () => {
    await assertSemanticGroup({
      name: "education",
      lang: "no",
      variants: [
        "Hva er Marius utdannelse?",
        "Hva er hans utdannelse?",
        "Hvilken utdanning har han?",
        "Hva har Marius studert?",
        "Hvilke grader har han?",
        "Hva slags akademisk bakgrunn har Marius?",
        "Hvor har han studert?",
        "Hvilke kvalifikasjoner har han?",
      ],
      mustMatch: /Utah|BI|utdanning|Oslo|Generative AI/i,
      mustNot: /ikke dokumentert/i,
    });
    await assertSemanticGroup({
      name: "education-en",
      lang: "en",
      variants: ["What is his educational background?", "What did Marius study?"],
      mustMatch: /Utah|BI|education|Oslo|Generative AI/i,
      mustNot: /not documented/i,
    });
  });

  it("employers and sales leadership positions", async () => {
    await assertSemanticGroup({
      name: "employers",
      lang: "no",
      variants: ["Hvilke arbeidsgivere har han jobbet for?", "Hvilke arbeidsgivere har Marius jobbet for?"],
      mustMatch: /Franzefoss|Mundipharma|arbeidsgiver|CV/i,
    });
    await assertSemanticGroup({
      name: "sales-positions",
      lang: "no",
      variants: ["Hvilke salgslederstillinger har han hatt?", "Hvilke salgslederstillinger har Marius hatt?"],
      mustMatch: /Franzefoss|salgssjef|Mundipharma/i,
    });
  });

  it("profile strengths and competency", async () => {
    await assertSemanticGroup({
      name: "strengths",
      lang: "no",
      variants: ["Hva er hans viktigste egenskaper?", "Hva er Marius' superstyrker?"],
      mustMatch: /Gjennomføringskraft|superstyrker|styrker/i,
    });
    await assertSemanticGroup({
      name: "competency",
      lang: "no",
      variants: ["Hva er han god på?", "Hva er Marius god på?"],
      mustMatch: /kjernekompetanse|Kommersiell ledelse|core competenc/i,
    });
  });

  it("Row, MOC, contact", async () => {
    await assertSemanticGroup({
      name: "row",
      lang: "no",
      variants: ["Hva er Marius' rolle i Row?", "Hva er hans rolle i Row Solutions?"],
      mustMatch: /Row|SMB|kommersiell/i,
    });
    await assertSemanticGroup({
      name: "moc",
      lang: "no",
      variants: ["Hva tilbyr han gjennom consulting?", "Hva tilbyr Marius Ottesen Consulting?"],
      mustMatch: /consulting|MOC|rådgiv|Verdilekkasj/i,
    });
    await assertSemanticGroup({
      name: "contact",
      lang: "no",
      variants: ["Hvordan kontakter jeg ham?", "Hvordan kontakter jeg Marius?"],
      mustMatch: /470|marius\.ottesen|kontakt|skjema/i,
    });
  });

  it("model NOT_ON_SITE overridden when authoritative exists", async () => {
    const r = await runAssistantQuery({ question: "Hva er hans utdannelse?", lang: "no" }, mockOn);
    assert.equal(r.category, "ANSWER");
    assert.match(r.answer, /Utah|BI|utdanning/i);
  });
});