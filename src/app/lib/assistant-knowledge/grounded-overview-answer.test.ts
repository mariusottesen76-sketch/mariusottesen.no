import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { ModelCallResult } from "./anthropic-caller";
import { runAssistantQuery } from "./assistant-service";
import { lookupKnowledgeSource } from "./lookup";
import { selectRelevantSourceIds } from "./source-selection";
import {
  isConsultingEngagementQuestion,
  isPortfolioOverviewQuestion,
  tryGroundedOverviewAnswer,
} from "./grounded-overview-answer";
import type { SourceContext } from "./assistant-types";

function contextsFor(q: string, lang: "no" | "en" = "no"): SourceContext[] {
  const ids = selectRelevantSourceIds(q, lang, 3);
  const out: SourceContext[] = [];
  for (const id of ids) {
    const r = lookupKnowledgeSource(id, lang);
    if (!r.ok) continue;
    out.push({
      sourceId: r.entry.id,
      title: r.entry.title,
      url: r.entry.canonicalUrl,
      excerptText: r.excerpt.text,
      suitableForFactualAnswer: r.grounding.suitableForFactualAnswer,
    });
  }
  return out;
}

describe("grounded overview answer (05E)", () => {
  it("detects consulting engagement questions", () => {
    assert.ok(isConsultingEngagementQuestion("Hvordan kan Marius hjelpe vår virksomhet?"));
    assert.equal(isConsultingEngagementQuestion("Hvordan bestiller jeg pizza?"), false);
  });

  it("detects portfolio overview patterns", () => {
    assert.ok(isPortfolioOverviewQuestion("Hvilke lederroller passer Marius til?"));
    assert.ok(isPortfolioOverviewQuestion("Hvordan skaper Marius verdi?"));
  });

  it("returns consulting-led answer for business help", () => {
    const q = "Hvordan kan Marius hjelpe vår virksomhet?";
    const out = tryGroundedOverviewAnswer(q, contextsFor(q), "no");
    assert.ok(out);
    assert.equal(out.sourceId, "tab:consulting:no");
    assert.ok(!out.answer.includes("Fra «"));
    assert.match(out.answer, /salg|kommersiell/i);
  });
});

describe("assistant pipeline 05E — consulting help", () => {
  const mockNotOnSite = async (): Promise<ModelCallResult> => ({
    ok: true,
    rawText: JSON.stringify({ category: "NOT_ON_SITE", answer: "", sourceIds: [] }),
    payload: { category: "NOT_ON_SITE", answer: "", sourceIds: [] },
  });

  it("returns ANSWER before model when consulting help (scenario B bypass)", async () => {
    let modelCalled = false;
    const res = await runAssistantQuery(
      { question: "Hvordan kan Marius hjelpe vår virksomhet?", lang: "no" },
      {
        config: { chatEnabled: true, apiKeyConfigured: true, model: "claude-haiku-4-5-20251001" },
        callModel: async () => {
          modelCalled = true;
          return mockNotOnSite();
        },
      }
    );
    assert.equal(res.category, "ANSWER");
    assert.equal(res.sourceIds[0], "tab:consulting:no");
    assert.equal(modelCalled, false);
    assert.ok(!res.answer.toLowerCase().includes("ikke tilstrekkelig dokumentert"));
  });

  it("post-model fallback when model returns NOT_ON_SITE for roles", async () => {
    const res = await runAssistantQuery(
      { question: "Hvilke lederroller passer Marius til?", lang: "no" },
      {
        config: { chatEnabled: true, apiKeyConfigured: true, model: "claude-haiku-4-5-20251001" },
        callModel: mockNotOnSite,
      }
    );
    assert.equal(res.category, "ANSWER");
    assert.ok(
      res.sourceIds.some((id) => /tab:cv:no|document:open-application:no/.test(id)),
      res.sourceIds.join(",")
    );
  });
});