import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { fixedReply } from "./fixed-replies";
import { isPlausibleAnthropicModelId, technicalFailureReply } from "./technical-failure";

describe("technical failure (05I)", () => {
  it("accepts normal Haiku model ids", () => {
    assert.equal(isPlausibleAnthropicModelId("claude-haiku-4-5-20251001"), true);
    assert.equal(isPlausibleAnthropicModelId("claude-sonnet-4-20250514"), true);
  });

  it("rejects corrupted env-spliced ids", () => {
    assert.equal(isPlausibleAnthropicModelId("claude-haiku-4-5-20251001CHAT_UI_ENABLED=true"), false);
    assert.equal(isPlausibleAnthropicModelId(""), false);
    assert.equal(isPlausibleAnthropicModelId("gpt-4o"), false);
  });

  it("keeps policy NOT_ON_SITE separate from technical failures", () => {
    const policy = fixedReply("NOT_ON_SITE", "no");
    assert.ok(policy.includes("tilstrekkelig dokumentert"));
    assert.ok(!technicalFailureReply("model_error", "no").includes("tilstrekkelig dokumentert"));
  });

  it("uses distinct copy for model, timeout and validation", () => {
    const notOnSiteSnippet = "tilstrekkelig dokumentert";
    for (const code of ["model_error", "timeout", "validation_failed"] as const) {
      const no = technicalFailureReply(code, "no");
      assert.ok(!no.includes(notOnSiteSnippet), code);
    }
    assert.match(technicalFailureReply("model_error", "no"), /midlertidig utilgjengelig/i);
    assert.match(technicalFailureReply("timeout", "no"), /lang tid/i);
  });
});