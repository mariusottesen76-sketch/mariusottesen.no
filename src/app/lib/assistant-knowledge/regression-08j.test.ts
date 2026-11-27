import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { tryGroundedBiTeachingAnswer } from "./grounded-education-answer";
import { tryAuthoritativeGroundedAnswer } from "./authoritative-before-not-on-site";
import { tryGroundedCareerAnswer } from "./grounded-career-answer";
import { runAssistantQuery } from "./assistant-service";
import { score08iAnswer } from "../../../eval/assistant/08i/rubric";

const cfgOff = {
  config: { chatEnabled: false, apiKeyConfigured: false, model: "claude-haiku-4-5-20251001" as const },
};

describe("08J quality fixes regression", () => {
  it("BI teaching vs education — English teach at BI", () => {
    const q = "Did he teach at BI?";
    assert.ok(tryGroundedBiTeachingAnswer(q, "en"));
    const auth = tryAuthoritativeGroundedAnswer(q, "en");
    assert.ok(auth);
    assert.match(auth!.answer, /studied|does not state.*taught|No —/i);
    assert.doesNotMatch(auth!.answer, /undervist.*ja/i);
  });

  it("Row role sources match row rubric", () => {
    const q = "Hva er Marius' rolle i Row?";
    const r = tryGroundedCareerAnswer(q, "no");
    assert.ok(r);
    const joined = r!.sourceIds.join(",");
    assert.match(joined, /row-solutions|external:rowsolutions/);
    const score = score08iAnswer({
      category: "row",
      question: q,
      responseCategory: "ANSWER",
      answer: r!.answer,
      sourceIds: r!.sourceIds,
      pipelineMode: "deterministic_off",
    });
    assert.notEqual(score.overall, "fail");
  });

  it("Generative AI for Business links to documented leadership profile (EN)", async () => {
    const q = "Generative AI course link to leadership?";
    const r = await runAssistantQuery({ question: q, lang: "en" }, cfgOff);
    assert.equal(r.category, "ANSWER");
    assert.match(r.answer, /Generative AI for Business|grade A/i);
    assert.match(r.answer, /commercial leadership|decision support|workflow/i);
    assert.doesNotMatch(r.answer, /is at \/en\/experience/i);
    assert.ok(r.sourceIds.some((id) => id.includes("tab:home")));
  });

  it("substantive navigation prefers grounded answer over path-only", async () => {
    const q = "Hvor finner jeg Marius' utdanning?";
    const r = await runAssistantQuery({ question: q, lang: "no" }, cfgOff);
    assert.equal(r.category, "ANSWER");
    assert.doesNotMatch(r.answer, /^Consulting-siden finner du/i);
    assert.match(r.answer, /BI|Utah|utdanning|Oslo/i);
  });
});