import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { runAssistantQuery } from "./assistant-service";
import { selectRelevantSourceIds } from "./source-selection";
import { isCompositeFactualQuestion, tryGroundedFactualAnswer } from "./grounded-factual-answer";
import type { ModelCallResult } from "./anthropic-caller";

const COMPOSITE = [
  "Hvordan har Marius brukt personalansvar, salgsledelse og CRM til å skape resultater?",
  "Hvilke bransjer har Marius erfaring fra, og hvordan kan kompetansen overføres til andre bransjer?",
  "Hvordan henger Marius' ledererfaring, AI-prosjekter og arbeidet gjennom Row Solutions sammen?",
] as const;

const SIMPLE = [
  "Har Marius hatt personalansvar?",
  "Hvilken utdanning har Marius?",
  "Har Marius undervist på BI?",
  "Har Marius hatt personalansvar og P/L-ansvar med KPI?",
  "Hva tilbyr Marius Ottesen Consulting, og hvor finner jeg kontakt?",
] as const;

describe("07J composite vs simple factual routing", () => {
  it("flags composite intents without using «og» alone", () => {
    assert.equal(isCompositeFactualQuestion(COMPOSITE[0]), true);
    assert.equal(isCompositeFactualQuestion(COMPOSITE[1]), true);
    assert.equal(isCompositeFactualQuestion(COMPOSITE[2]), true);
    assert.equal(isCompositeFactualQuestion("Hvilke bransjer har Marius erfaring fra?"), false);
    assert.equal(isCompositeFactualQuestion(SIMPLE[3]), false);
  });

  it("does not use deterministic answers for composite questions", () => {
    for (const q of COMPOSITE) {
      assert.equal(tryGroundedFactualAnswer(q, "no"), null, q);
    }
  });

  it("keeps deterministic answers for simple 07H-style questions", () => {
    for (const q of SIMPLE.slice(0, 3)) {
      const grounded = tryGroundedFactualAnswer(q, "no");
      assert.ok(grounded, q);
      assert.ok(grounded.answer.length > 20, q);
    }
    const pl = tryGroundedFactualAnswer(SIMPLE[3], "no");
    assert.ok(pl);
    assert.match(pl!.answer.toLowerCase(), /personalansvar/);
    assert.equal(isCompositeFactualQuestion(SIMPLE[4]), false);
  });

  it("sends composite questions to model pipeline (mocked)", async () => {
    for (const q of COMPOSITE) {
      const sourceIds = selectRelevantSourceIds(q, "no", 3);
      assert.ok(sourceIds.length > 0, q);

      let modelInvoked = false;
      const res = await runAssistantQuery(
        { question: q, lang: "no" },
        {
          config: { chatEnabled: true, apiKeyConfigured: true, model: "claude-haiku-4-5-20251001" },
          callModel: async (): Promise<ModelCallResult> => {
            modelInvoked = true;
            return {
              ok: true,
              rawText:
                '{"category":"ANSWER","answer":"Sammensatt mock-svar fra flere kilder.","sourceIds":["tab:home:no"]}',
              payload: {
                category: "ANSWER",
                answer: "Sammensatt mock-svar fra flere kilder.",
                sourceIds: sourceIds.slice(0, 1),
              },
            };
          },
        }
      );

      assert.equal(modelInvoked, true, q);
      assert.equal(res.category, "ANSWER", q);
      assert.equal(tryGroundedFactualAnswer(q, "no"), null, q);
    }
  });
});