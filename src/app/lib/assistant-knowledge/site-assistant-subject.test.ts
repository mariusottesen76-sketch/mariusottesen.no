import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { isQuestionAboutMarius, augmentForSiteSubjectRetrieval } from "./site-assistant-subject";

describe("site-assistant-subject", () => {
  it("defaults pronouns to Marius", () => {
    assert.ok(isQuestionAboutMarius("Hva er hans utdannelse?"));
    assert.ok(isQuestionAboutMarius("What did he study?"));
  });
  it("does not assume Marius for explicit third party", () => {
    assert.ok(!isQuestionAboutMarius("Who is Thomas Holm in AI Discovery?"));
  });
  it("augments retrieval hint", () => {
    const aug = augmentForSiteSubjectRetrieval("Hva er hans utdannelse?", 200);
    assert.match(aug, /Marius Ottesen/);
  });
});