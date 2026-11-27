import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  isCoreCompetencyQuestion,
  isPersonalStrengthsQuestion,
  tryGroundedProfileAnswer,
} from "./grounded-profile-answer";
import { tryGroundedCareerAnswer } from "./grounded-career-answer";
import { isRowCoreQuestion } from "../../data/row-solutions-knowledge";
import { isResultsImpactQuestion } from "./information-needs";
import { runAssistantQuery } from "./assistant-service";
import { isFilteredPastPositionsQuestion } from "./career-position-intent";

const cfgOff = {
  config: { chatEnabled: false, apiKeyConfigured: false, model: "claude-haiku-4-5-20251001" as const },
};

const enabled = {
  config: { chatEnabled: true, apiKeyConfigured: true, model: "claude-haiku-4-5-20251001" as const },
  callModel: async (): Promise<import("./anthropic-caller").ModelCallResult> => ({
    ok: true as const,
    rawText: "{}",
    payload: { category: "ANSWER" as const, answer: "[MOCK]", sourceIds: ["tab:home:no"] },
  }),
};

describe("08H.1 semantic quality regression", () => {
  it("profile: natural competency and trait phrasing", () => {
    for (const [q, lang, kind] of [
      ["Hva er Marius god på?", "no", "competency"],
      ["Hva er hans viktigste egenskaper?", "no", "strength"],
      ["What is Marius good at?", "en", "competency"],
    ] as const) {
      const r = tryGroundedProfileAnswer(q, lang);
      assert.ok(r, q);
      if (kind === "competency") {
        assert.ok(isCoreCompetencyQuestion(q), q);
        assert.match(r!.answer, /Kommersiell ledelse|Commercial leadership/i);
      } else {
        assert.ok(isPersonalStrengthsQuestion(q), q);
        assert.match(r!.answer, /Gjennomføringskraft|Execution power/i);
      }
    }
  });

  it("results creation linked to value and proof points", () => {
    assert.ok(isResultsImpactQuestion("Hvordan skaper Marius resultater?"));
    const r = tryGroundedCareerAnswer("Hvordan skaper Marius resultater?", "no");
    assert.ok(r);
    assert.match(r!.answer, /verdiskaping|omsette strategi/i);
    assert.match(r!.answer, /Dokumenterte resultat|proof/i);
    assert.ok(r!.sourceIds.some((id) => id.includes("results")));
  });

  it("filtered sales leadership positions from CV registry", () => {
    const q = "Hvilke salgslederstillinger har han hatt?";
    assert.ok(isFilteredPastPositionsQuestion(q));
    const r = tryGroundedCareerAnswer(q, "no");
    assert.ok(r);
    assert.match(r!.answer, /Franzefoss|Nasjonal|salgssjef|Mundipharma/i);
    assert.match(r!.sourceIds[0], /career:cv-registry/);
  });

  it("Row SMB help uses four service areas", () => {
    const q = "Hva kan Row Solutions hjelpe bedriften vår med?";
    assert.ok(isRowCoreQuestion(q));
    const r = tryGroundedCareerAnswer(q, "no");
    assert.ok(r);
    assert.match(r!.answer, /Synlighet og posisjonering/i);
    assert.match(r!.answer, /Salg og kundeoppfølging/i);
    assert.doesNotMatch(r!.answer, /finner du på \/row/i);
  });

  it("English hiring via pipeline (deterministic)", async () => {
    const r = await runAssistantQuery({ question: "Why should we hire him?", lang: "en" }, cfgOff);
    assert.equal(r.category, "ANSWER");
    assert.match(r.answer, /commercial leader|lasting value/i);
    assert.ok(r.sourceIds.some((id) => id.includes("open-application")));
  });

  it("pipeline chat on: competency still deterministic before mock", async () => {
    const r = await runAssistantQuery({ question: "What is Marius good at?", lang: "en" }, enabled);
    assert.equal(r.category, "ANSWER");
    assert.doesNotMatch(r.answer, /^\[MOCK\]/);
    assert.match(r.answer, /Commercial leadership|core competenc/i);
  });
});