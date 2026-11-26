import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  INITIAL_VISIBLE_SUGGESTIONS,
  countUserMessages,
  isChatOnboardingPhase,
  messagesForDisplay,
} from "./assistant-chat-ui-state";
import type { ChatMessage } from "./assistant-chat-logic";

describe("assistant chat UI state (05D)", () => {
  const intro: ChatMessage = { id: "intro", role: "assistant", text: "Hei!" };

  it("shows suggestions phase until first user message", () => {
    assert.equal(isChatOnboardingPhase([intro]), true);
    assert.equal(isChatOnboardingPhase([intro, { id: "u1", role: "user", text: "?" }]), false);
  });

  it("hides intro after first user turn", () => {
    const withUser: ChatMessage[] = [
      intro,
      { id: "u1", role: "user", text: "Hvordan?" },
      { id: "a1", role: "assistant", text: "Svar." },
    ];
    const visible = messagesForDisplay(withUser);
    assert.equal(visible.some((m) => m.id === "intro"), false);
    assert.equal(visible.length, 2);
  });

  it("keeps intro visible before first question", () => {
    assert.deepEqual(messagesForDisplay([intro]), [intro]);
  });

  it("initial visible suggestion count is two", () => {
    assert.equal(INITIAL_VISIBLE_SUGGESTIONS, 2);
    assert.equal(countUserMessages([intro]), 0);
  });
});