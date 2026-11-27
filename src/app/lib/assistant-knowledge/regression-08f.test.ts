import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  detectEmployerKeyInText,
  resolveConversationFocus,
  sanitizeClientContext,
} from "./conversation-context";
import {
  tryGroundedEmployerContextAnswer,
  tryGroundedRoleFitAnswer,
  tryGroundedRoleHistoryAnswer,
} from "./grounded-context-answer";
import { runAssistantQuery } from "./assistant-service";
import { getCareerPositions } from "../../data/career-facts";

describe("08F conversation context & factual polish", () => {
  it("F01: sanitizeClientContext allowlists employer keys only", () => {
    assert.deepEqual(sanitizeClientContext({ employerKey: "franzefoss" }), { employerKey: "franzefoss" });
    assert.equal(sanitizeClientContext({ employerKey: "evil-corp" }), undefined);
    assert.equal(sanitizeClientContext({ employerKey: "x".repeat(50) }), undefined);
  });

  it("F02: follow-up inherits Franzefoss focus from client context", () => {
    const focus = resolveConversationFocus("Hvor mange ansatte ledet han?", { employerKey: "franzefoss" });
    assert.equal(focus?.employerKey, "franzefoss");
    const ans = tryGroundedEmployerContextAnswer("Hvor mange ansatte ledet han?", "no", {
      employerKey: "franzefoss",
    });
    assert.ok(ans);
    assert.match(ans!.answer, /Franzefoss/i);
    assert.match(ans!.answer, /20|salgsrådgivere/i);
  });

  it("F03: employer switch to Norengros updates focus", () => {
    const focus = resolveConversationFocus("Hva med Norengros?", { employerKey: "franzefoss" });
    assert.equal(focus?.employerKey, "norengros");
  });

  it("F04: topic reset drops inherited employer context", () => {
    const focus = resolveConversationFocus("Hvor finner jeg kontaktskjema?", { employerKey: "franzefoss" });
    assert.equal(focus, undefined);
  });

  it("F05: AD history fact vs suitability assessment", () => {
    const fact = tryGroundedRoleHistoryAnswer("Har Marius vært administrerende direktør?", "no");
    const fit = tryGroundedRoleFitAnswer("Passer Marius som administrerende direktør?", "no");
    assert.ok(fact);
    assert.ok(fit);
    assert.match(fact!.answer, /^Nei/i);
    assert.match(fit!.answer, /vurdering|egnethet/i);
    assert.doesNotMatch(fit!.answer, /^Nei — dokumenterte stillinger/i);
  });

  it("F06: MedDrop period in career registry (authoritative)", () => {
    const med = getCareerPositions("no").find((p) => p.employer === "MedDrop");
    assert.ok(med);
    assert.match(med!.periodDisplay, /2018/);
    assert.match(med!.periodDisplay, /2026/);
  });

  it("F07: runAssistantQuery propagates conversationFocus and answers follow-up", async () => {
    const first = await runAssistantQuery({ question: "Fortell om Franzefoss", lang: "no" });
    assert.equal(first.conversationFocus?.employerKey, "franzefoss");
    const second = await runAssistantQuery({
      question: "Hvilken rolle hadde han?",
      lang: "no",
      context: first.conversationFocus,
    });
    assert.equal(second.category, "ANSWER");
    assert.match(second.answer, /Franzefoss/i);
    assert.equal(second.conversationFocus?.employerKey, "franzefoss");
  });

  it("F08: detectEmployerKeyInText covers Johs. Olsen → Norengros", () => {
    assert.equal(detectEmployerKeyInText("Og i Johs. Olsen?"), "norengros");
  });
});