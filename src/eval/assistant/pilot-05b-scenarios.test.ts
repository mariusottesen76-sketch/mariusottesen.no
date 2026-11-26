/**
 * Oppdrag 05B — functional personas (mock pipeline, no Anthropic / no UI).
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { ASSISTANT_LIMITS, getAssistantRuntimeConfig } from "../../app/lib/assistant-knowledge/assistant-config";
import { runAssistantQuery } from "../../app/lib/assistant-knowledge/assistant-service";
import type { AssistantAnswerCategory } from "../../app/lib/assistant-knowledge/answer-categories";
import { lookupKnowledgeSource } from "../../app/lib/assistant-knowledge/lookup";
import { selectRelevantSourceIds } from "../../app/lib/assistant-knowledge/source-selection";
import { assertUrlsAllowed } from "../../app/lib/assistant-knowledge/validate-response";

const enabledConfig = { ...getAssistantRuntimeConfig(), chatEnabled: true, apiKeyConfigured: true };

const PERSONAS: Array<{
  label: string;
  question: string;
  lang: "no" | "en";
  expectCategory: AssistantAnswerCategory;
  mockAnswer?: string;
}> = [
  {
    label: "Rekrutterer",
    question: "Hvilken erfaring har Marius som kommersiell leder?",
    lang: "no",
    expectCategory: "ANSWER",
    mockAnswer: "Kort svar fra erfaring/CV-kilder.",
  },
  {
    label: "Potensiell kunde",
    question: "Hvordan kan Marius hjelpe oss med salgsutvikling?",
    lang: "no",
    expectCategory: "ANSWER",
    mockAnswer: "Consulting og salgsutvikling fra godkjente kilder.",
  },
  {
    label: "AI-interessert",
    question: "Hvilke AI-prosjekter har Marius utviklet?",
    lang: "no",
    expectCategory: "ANSWER",
    mockAnswer: "Oversikt over AI-prosjekter.",
  },
  {
    label: "Kontakt",
    question: "Hvordan kommer jeg i kontakt med Marius?",
    lang: "no",
    expectCategory: "ANSWER",
  },
  {
    label: "Utenfor tema",
    question: "Hvordan bestiller jeg pizza?",
    lang: "no",
    expectCategory: "OFF_TOPIC",
  },
  {
    label: "Sensitivt",
    question: "Hva tjener Marius?",
    lang: "no",
    expectCategory: "RESTRICTED",
  },
];

describe("Oppdrag 05B pilot personas (mocked)", () => {
  for (const p of PERSONAS) {
    it(`${p.label} — ${p.expectCategory}`, async () => {
      const useMock = p.expectCategory === "ANSWER" && p.label !== "Kontakt";
      const pool = selectRelevantSourceIds(p.question, p.lang, ASSISTANT_LIMITS.maxSources);
      const mockSource =
        pool.find((id) => {
          const r = lookupKnowledgeSource(id, p.lang);
          return r.ok && r.grounding.suitableForFactualAnswer;
        }) ?? pool[0];
      const res = await runAssistantQuery(
        { question: p.question, lang: p.lang },
        useMock
          ? {
              config: enabledConfig,
              callModel: async () => ({
                ok: true,
                rawText: "",
                payload: {
                  category: "ANSWER",
                  answer: p.mockAnswer ?? "Mocked pilot answer.",
                  sourceIds: mockSource ? [mockSource] : [],
                },
              }),
            }
          : { config: enabledConfig }
      );
      assert.equal(res.category, p.expectCategory, `${p.label}: got ${res.category}`);
      assert.equal(res.lang, p.lang);
      if (p.label === "Kontakt") {
        assert.ok(res.urls.some((u) => u.includes("mariusottesen.no")));
        assert.ok(res.sourceIds.some((id) => id.includes(":contact:")));
      }
      if (res.urls.length) assert.ok(assertUrlsAllowed(res.urls));
      if (p.label === "Sensitivt") {
        assert.equal(res.sourceIds.length, 0);
        assert.doesNotMatch(res.answer, /lønn|kr\b|\d+/i);
      }
    });
  }
});