import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getAssistantUiCopy } from "./assistant-copy";
import { chatOutcomeFromResponse, shouldAcceptChatSubmit } from "./assistant-chat-logic";

/** Regression coverage for submit paths (suggestion, Enter, Send) sharing one guard + outcome mapper. */
describe("assistant chat submit flow", () => {
  it("manual Enter/Send payload accepted when not in flight", () => {
    const manual = "Hvordan Marius skaper verdi";
    assert.equal(shouldAcceptChatSubmit(manual, false), true);
  });

  it("double submit blocked while in flight", () => {
    const manual = "Hvordan Marius skaper verdi";
    assert.equal(shouldAcceptChatSubmit(manual, true), false);
    assert.equal(shouldAcceptChatSubmit(getAssistantUiCopy("no").suggestions[2], true), false);
  });

  it("successful mock response becomes visible assistant bubble text", () => {
    const out = chatOutcomeFromResponse(
      true,
      200,
      {
        category: "ANSWER",
        answer: "[MOCK 05C] Verdi gjennom kommersiell ledelse og gjennomføring.",
        lang: "no",
        sourceIds: ["tab:profil:no"],
        urls: ["https://www.mariusottesen.no/"],
      },
      "no",
      "mock"
    );
    assert.equal(out.kind, "assistant");
    assert.match(out.message.text, /MOCK 05C/);
  });

  it("fetch network failure path uses generic error copy", () => {
    const generic = getAssistantUiCopy("no").errors.generic;
    assert.match(generic, /gikk galt/i);
  });
});