import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { ModelCallResult } from "./anthropic-caller";
import { runAssistantQuery } from "./assistant-service";
import {
  classifyQuestionPreModel,
  isPrivatePersonalLifeQuestion,
} from "./question-policy";

const enabledConfig = {
  chatEnabled: true,
  apiKeyConfigured: true,
  model: "claude-haiku-4-5-20251001",
};

describe("private life pre-model policy (06B)", () => {
  it("classifies private forhold as RESTRICTED (NO)", () => {
    const q = "Hva vet du om Marius' private forhold?";
    assert.equal(isPrivatePersonalLifeQuestion(q), true);
    assert.equal(classifyQuestionPreModel(q)?.category, "RESTRICTED");
  });

  it("classifies privatliv and spouse questions (NO/EN)", () => {
    assert.equal(classifyQuestionPreModel("Hva vet du om Marius sitt privatliv?")?.category, "RESTRICTED");
    assert.equal(
      classifyQuestionPreModel("What do you know about Marius' private life?")?.category,
      "RESTRICTED"
    );
    assert.equal(
      classifyQuestionPreModel("Who is Marius' spouse?")?.category,
      "RESTRICTED"
    );
  });

  it("does not block professional relationship questions", () => {
    const professional = [
      "Hvordan bygger Marius kundeforhold i B2B?",
      "Hva sier nettsiden om samarbeidsforhold med kunder?",
      "How does Marius describe professional customer relationships?",
      "Hvilken erfaring har han med arbeidsforhold og lederrelasjoner?",
    ];
    for (const q of professional) {
      assert.equal(isPrivatePersonalLifeQuestion(q), false);
      assert.notEqual(classifyQuestionPreModel(q)?.reason, "policy_private_life");
    }
  });

  it("private forhold does not call the model", async () => {
    let modelCalled = false;
    const res = await runAssistantQuery(
      { question: "Hva vet du om Marius' private forhold?", lang: "no" },
      {
        config: enabledConfig,
        callModel: async (): Promise<ModelCallResult> => {
          modelCalled = true;
          throw new Error("model should not be called");
        },
      }
    );
    assert.equal(modelCalled, false);
    assert.equal(res.category, "RESTRICTED");
    assert.deepEqual(res.sourceIds, []);
  });
});