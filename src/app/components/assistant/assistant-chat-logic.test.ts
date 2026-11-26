import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  getAssistantUiCopy,
} from "./assistant-copy";
import {
  chatOutcomeFromResponse,
  isSafeSourceUrl,
  resolveSiteLang,
  formatSourceLinkLabel,
  responseToAssistantMessage,
  shouldAcceptChatSubmit,
  stripSiteUrlsFromAnswerText,
  userFacingError,
} from "./assistant-chat-logic";

describe("assistant chat UI logic", () => {
  it("resolveSiteLang from pathname", () => {
    assert.equal(resolveSiteLang("/"), "no");
    assert.equal(resolveSiteLang("/consulting"), "no");
    assert.equal(resolveSiteLang("/en"), "en");
    assert.equal(resolveSiteLang("/en/consulting"), "en");
  });

  it("copy includes contact paths per language", () => {
    assert.equal(getAssistantUiCopy("no").contactHref, "/consulting#cons-dialog-heading");
    assert.equal(getAssistantUiCopy("en").contactHref, "/en/consulting#cons-dialog-heading");
    assert.equal(getAssistantUiCopy("no").launcherLabel, "Spør om Marius");
    assert.equal(getAssistantUiCopy("en").launcherLabel, "Ask about Marius");
  });

  it("maps API response to assistant message", () => {
    const msg = responseToAssistantMessage({
      category: "ANSWER",
      answer: "Test.",
      lang: "no",
      sourceIds: ["tab:contact:no"],
      urls: ["https://www.mariusottesen.no/kontakt"],
    });
    assert.equal(msg.role, "assistant");
    assert.deepEqual(msg.urls, ["https://www.mariusottesen.no/kontakt"]);
  });

  it("rejects unsafe source URLs", () => {
    assert.ok(isSafeSourceUrl("https://www.mariusottesen.no/erfaring"));
    assert.equal(isSafeSourceUrl("https://evil.example/phish"), false);
    assert.equal(isSafeSourceUrl("javascript:alert(1)"), false);
  });

  it("user-facing errors for disabled API", () => {
    assert.match(userFacingError("no", 503, "ai_disabled"), /ikke tilgjengelig/i);
    assert.match(userFacingError("en", 503, "ai_disabled"), /not available/i);
  });

  it("shouldAcceptChatSubmit blocks empty and in-flight", () => {
    assert.equal(shouldAcceptChatSubmit("", false), false);
    assert.equal(shouldAcceptChatSubmit("  ", false), false);
    assert.equal(shouldAcceptChatSubmit("Hei", true), false);
    assert.equal(shouldAcceptChatSubmit("Hei", false), true);
  });

  it("chatOutcomeFromResponse maps mock success", () => {
    const out = chatOutcomeFromResponse(
      true,
      200,
      {
        category: "ANSWER",
        answer: "Mock-svar.",
        lang: "no",
        sourceIds: [],
        urls: [],
      },
      "no",
      "t1"
    );
    assert.equal(out.kind, "assistant");
    assert.equal(out.message.text, "Mock-svar.");
    assert.equal(out.message.role, "assistant");
  });

  it("chatOutcomeFromResponse maps technical failures on 200", () => {
    const modelErr = chatOutcomeFromResponse(
      false,
      503,
      {
        category: "NOT_ON_SITE",
        answer: "should be ignored",
        lang: "no",
        sourceIds: [],
        urls: [],
        errorCode: "model_error",
      },
      "no",
      "t-tech"
    );
    assert.equal(modelErr.kind, "error");
    assert.match(modelErr.message.text, /midlertidig utilgjengelig/i);

    const ok = chatOutcomeFromResponse(
      true,
      200,
      {
        category: "ANSWER",
        answer: "Svar.",
        lang: "no",
        sourceIds: ["tab:cv:no"],
        urls: ["https://www.mariusottesen.no/cv"],
      },
      "no",
      "t-ok"
    );
    assert.equal(ok.kind, "assistant");
    assert.ok(ok.message.urls?.length);
  });

  it("chatOutcomeFromResponse maps API error", () => {
    const out = chatOutcomeFromResponse(
      false,
      503,
      { error: "down", errorCode: "ai_disabled" },
      "no",
      "t2"
    );
    assert.equal(out.kind, "error");
    assert.match(out.message.text, /ikke tilgjengelig/i);
  });

  it("chatOutcomeFromResponse never silent on ok without answer", () => {
    const out = chatOutcomeFromResponse(true, 200, { error: "empty" }, "no", "t3");
    assert.equal(out.kind, "error");
    assert.match(out.message.text, /gikk galt/i);
  });

  it("strips raw site URLs from displayed answer", () => {
    const cleaned = stripSiteUrlsFromAnswerText(
      "Les mer på https://www.mariusottesen.no/resultater for detaljer."
    );
    assert.ok(!cleaned.includes("https://"));
    assert.match(cleaned, /Les mer på/i);
  });

  it("formats source link labels for common paths", () => {
    assert.equal(formatSourceLinkLabel("https://www.mariusottesen.no/resultater", "no"), "Resultater");
    assert.equal(formatSourceLinkLabel("https://www.mariusottesen.no/en/results", "en"), "Results");
  });

  it("suggestion text is valid submit payload", () => {
    const q = getAssistantUiCopy("no").suggestions[0];
    assert.equal(shouldAcceptChatSubmit(q, false), true);
    assert.ok(q.length > 10);
  });
});