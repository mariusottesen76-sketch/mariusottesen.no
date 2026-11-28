import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { normalizeAssistantQuestion } from "./assistant-question-normalize";

describe("assistant-question-normalize", () => {
  it("fixes common hvem typo", () => {
    assert.equal(normalizeAssistantQuestion("Hbem er Gunnar?"), "Hvem er Gunnar?");
  });
});