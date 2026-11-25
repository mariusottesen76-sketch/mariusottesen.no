import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { assessFactualAnswerPolicy, shouldAnswerConservatively } from "./factual-answer-policy";

describe("factual answer policy", () => {
  it("flags pricing and guarantee questions", () => {
    const p = assessFactualAnswerPolicy("Hvor mye koster en dag med konsulent Marius?");
    assert.equal(p.commercialUndocumented, true);
    assert.equal(shouldAnswerConservatively("Hvor mye koster en dag med konsulent Marius?"), true);
  });

  it("allows professional contact questions", () => {
    const p = assessFactualAnswerPolicy("Hvor kan jeg nå Marius professionelt?");
    assert.equal(p.privatePersonal, false);
    assert.equal(shouldAnswerConservatively("Hvor kan jeg nå Marius professionelt?"), false);
  });

  it("flags unverified numeric premises", () => {
    const p = assessFactualAnswerPolicy("Økte Marius omsetningen i Franzefoss med 80 prosent?");
    assert.equal(p.unverifiedClaimPremise, true);
    assert.equal(shouldAnswerConservatively("Økte Marius omsetningen i Franzefoss med 80 prosent?"), true);
  });

  it("allows documented experience lookup questions", () => {
    assert.equal(shouldAnswerConservatively("Hva gjorde Marius hos Franzefoss?"), false);
  });
});