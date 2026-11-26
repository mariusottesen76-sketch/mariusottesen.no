import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { ModelCallResult } from "./anthropic-caller";
import { runAssistantQuery } from "./assistant-service";
import { detectQuestionLang } from "./question-policy";
import { tryGroundedFactualAnswer } from "./grounded-factual-answer";

const enabledConfig = {
  chatEnabled: true,
  apiKeyConfigured: true,
  model: "claude-haiku-4-5-20251001",
};

function mockModelReply(payload: {
  category: "ANSWER";
  answer: string;
  sourceIds: string[];
}): () => Promise<ModelCallResult> {
  return async () => ({
    ok: true,
    rawText: JSON.stringify(payload),
    payload,
  });
}

function looksEnglish(text: string) {
  assert.doesNotMatch(text, /\b(Ja —|nettsiden dokumenterer at|Profilen nevner)\b/i);
  assert.ok(/\b(the|yes|site|profile|marius|consulting|documented)\b/i.test(text));
}

function looksNorwegian(text: string) {
  assert.doesNotMatch(text, /\b(Yes — it is documented|The site documents that)\b/i);
  assert.doesNotMatch(text, /\bthe site documents\b/i);
  assert.ok(/\b(ja|nettsiden|profilen|dokumentert|virksomhet|leder|salg|erfaring|kommersiell)\b/i.test(text));
}

describe("detectQuestionLang (07Q)", () => {
  it("prefers English question wording over Norwegian site lang", () => {
    assert.equal(detectQuestionLang("Can Marius do sales?", "no"), "en");
    assert.equal(detectQuestionLang("Has Marius managed employees?", "no"), "en");
    assert.equal(detectQuestionLang("What does Marius Ottesen Consulting offer?", "no"), "en");
    assert.equal(detectQuestionLang("What is Row Solutions?", "no"), "en");
  });

  it("prefers Norwegian question wording over English site lang", () => {
    assert.equal(detectQuestionLang("Har Marius hatt personalansvar?", "en"), "no");
    assert.equal(detectQuestionLang("Hvilke lederroller passer Marius til?", "en"), "no");
    assert.equal(detectQuestionLang("Hvordan kan Marius hjelpe virksomheten vår?", "en"), "no");
  });

  it("uses site lang for short or ambiguous questions", () => {
    assert.equal(detectQuestionLang("CRM?", "en"), "en");
    assert.equal(detectQuestionLang("CRM?", "no"), "no");
    assert.equal(detectQuestionLang("Marius", "en"), "en");
  });
});

describe("answer language through pipeline (07Q, mock model)", () => {
  it("English sales question with Norwegian site lang", async () => {
    const res = await runAssistantQuery(
      { question: "Can Marius do sales?", lang: "no" },
      { config: enabledConfig }
    );
    assert.equal(res.lang, "en");
    assert.equal(res.category, "ANSWER");
    looksEnglish(res.answer);
    assert.ok(res.sourceIds.every((id) => id.endsWith(":en") || id.includes("row")));
  });

  it("English people management with Norwegian site lang", async () => {
    const res = await runAssistantQuery(
      { question: "Has Marius managed employees?", lang: "no" },
      { config: enabledConfig }
    );
    assert.equal(res.lang, "en");
    looksEnglish(res.answer);
  });

  it("English consulting question uses English excerpts/response", async () => {
    const res = await runAssistantQuery(
      { question: "What does Marius Ottesen Consulting offer?", lang: "no" },
      {
        config: enabledConfig,
        callModel: mockModelReply({
          category: "ANSWER",
          answer:
            "The consulting page describes commercial advisory services, B2B sales development and coaching grounded in documented methods.",
          sourceIds: ["tab:consulting:en"],
        }),
      }
    );
    assert.equal(res.lang, "en");
    looksEnglish(res.answer);
    assert.ok(res.sourceIds.some((id) => id.endsWith(":en")));
  });

  it("English Row question with mock model", async () => {
    const res = await runAssistantQuery(
      { question: "What is Row Solutions?", lang: "no" },
      {
        config: enabledConfig,
        callModel: mockModelReply({
          category: "ANSWER",
          answer:
            "Row Solutions is presented on the site as a separate portfolio company focused on structured recruitment processes.",
          sourceIds: ["external:row-solutions:en"],
        }),
      }
    );
    assert.equal(res.lang, "en");
    looksEnglish(res.answer);
  });

  it("Norwegian factual answers with English site lang", async () => {
    for (const question of [
      "Har Marius hatt personalansvar?",
      "Hvilke lederroller passer Marius til?",
    ]) {
      const res = await runAssistantQuery({ question, lang: "en" }, { config: enabledConfig });
      assert.equal(res.lang, "no", question);
      looksNorwegian(res.answer);
    }
  });

  it("Norwegian help question keeps Norwegian overview excerpt", async () => {
    const res = await runAssistantQuery(
      { question: "Hvordan kan Marius hjelpe virksomheten vår?", lang: "en" },
      { config: { ...enabledConfig, apiKeyConfigured: false } }
    );
    assert.equal(res.lang, "no");
    looksNorwegian(res.answer);
    assert.ok(res.sourceIds.some((id) => id.endsWith(":no")));
  });

  it("composite English question is not overridden by deterministic CV clips", async () => {
    const q =
      "How does Marius combine leadership experience, AI projects and Row Solutions in one answer?";
    assert.equal(tryGroundedFactualAnswer(q, "en"), null);
    const res = await runAssistantQuery(
      { question: q, lang: "no" },
      {
        config: enabledConfig,
        callModel: mockModelReply({
          category: "ANSWER",
          answer:
            "The site documents commercial leadership alongside practical AI projects and a separate Row Solutions portfolio line — described across profile, projects and consulting sources.",
          sourceIds: ["tab:home:en", "tab:consulting:en"],
        }),
      }
    );
    assert.equal(res.lang, "en");
    looksEnglish(res.answer);
  });
});