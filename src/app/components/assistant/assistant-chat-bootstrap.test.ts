import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getAssistantChatBootstrap } from "./assistant-chat-bootstrap";

const mockEnv = (partial: Record<string, string | undefined>): NodeJS.ProcessEnv =>
  partial as unknown as NodeJS.ProcessEnv;

describe("assistant chat bootstrap (08M.1)", () => {
  it("exposes only public show + maxQuestionChars — no secrets", () => {
    const boot = getAssistantChatBootstrap(
      mockEnv({
        CHAT_UI_ENABLED: "true",
        CHAT_ENABLED: "true",
        ANTHROPIC_API_KEY: "sk-secret-must-not-leak",
      })
    );
    assert.equal(typeof boot.show, "boolean");
    assert.equal(typeof boot.maxQuestionChars, "number");
    assert.deepEqual(Object.keys(boot).sort(), ["maxQuestionChars", "show"]);
  });

  it("show false when UI or API disabled", () => {
    assert.equal(
      getAssistantChatBootstrap(mockEnv({ CHAT_UI_ENABLED: "false", CHAT_ENABLED: "true", ANTHROPIC_API_KEY: "k" }))
        .show,
      false
    );
    assert.equal(
      getAssistantChatBootstrap(mockEnv({ CHAT_UI_ENABLED: "true", CHAT_ENABLED: "false" })).show,
      false
    );
    assert.equal(
      getAssistantChatBootstrap(
        mockEnv({ CHAT_UI_ENABLED: "true", CHAT_ENABLED: "true", ANTHROPIC_API_KEY: "k" })
      ).show,
      true
    );
  });
});