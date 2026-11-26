import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { ROW_EXTERNAL_SOURCES } from "./row-external-knowledge";
import { lookupKnowledgeSource } from "./index";
import { selectRelevantSourceIds } from "./source-selection";
import { assertUrlsAllowed } from "./validate-response";

describe("06D-1 row external allowlist", () => {
  it("indexes eight versioned rowsolutions.no sources in NO and EN", () => {
    assert.equal(ROW_EXTERNAL_SOURCES.length, 8);
    const urls = [...new Set(ROW_EXTERNAL_SOURCES.map((s) => s.url))];
    assert.equal(urls.length, 8);
    assert.ok(assertUrlsAllowed(urls));
  });

  it("grounds Row team and MOC separation on row-solutions project excerpt", () => {
    const res = lookupKnowledgeSource("project:row-solutions-2026:no");
    assert.equal(res.ok, true);
    if (!res.ok) return;
    const t = res.excerpt.text.toLowerCase();
    assert.match(t, /marius ottesen/);
    assert.match(t, /thomas holm/);
    assert.match(t, /gunnar gundersen/);
    assert.ok(res.grounding.suitableForFactualAnswer);
  });

  it("attributes AI Discovery to Thomas Holm, not MOC", () => {
    const res = lookupKnowledgeSource("project:ai-discovery-2026-11:no");
    assert.equal(res.ok, true);
    if (!res.ok) return;
    const t = res.excerpt.text.toLowerCase();
    assert.match(t, /thomas holm/);
    assert.match(t, /ikke utviklet eller eid av marius ottesen consulting/);
    assert.doesNotMatch(t, /utviklet av marius ottesen consulting[^.]*ai discovery/);
  });

  it("clarifies PSC is training, not CRM", () => {
    const res = lookupKnowledgeSource("project:predictive-sales-coach-2026:no");
    assert.equal(res.ok, true);
    if (!res.ok) return;
    const t = res.excerpt.text.toLowerCase();
    assert.match(t, /marius ottesen consulting|moc/);
    assert.match(t, /crm/);
    assert.match(t, /salgstrening|salgstren/);
  });

  it("VerdisKIftet excerpt documents sole author and framework link", () => {
    const res = lookupKnowledgeSource("book:no");
    assert.equal(res.ok, true);
    if (!res.ok) return;
    const t = res.excerpt.text;
    assert.match(t, /forfatter:\s*marius ottesen/i);
    assert.match(t, /fra innsikt til resultater/i);
    assert.doesNotMatch(t.toLowerCase(), /thomas holm/);
    assert.doesNotMatch(t.toLowerCase(), /gunnar/);
  });

  it("selects external fra-innsikt source for framework questions", () => {
    const ids = selectRelevantSourceIds("Hva er rammeverket Fra innsikt til resultater?", "no", 5);
    assert.ok(ids.some((id) => id.includes("fra-innsikt-til-resultater")));
  });

  it("prioritises projects hub for broad portfolio listing (06D-3)", () => {
    const cases = [
      "Hvilke AI-verktøy har Marius Ottesen utviklet?",
      "Hvilke apper og digitale løsninger har Marius laget?",
      "Hvilke prosjekter har Marius jobbet med?",
    ];
    for (const q of cases) {
      const ids = selectRelevantSourceIds(q, "no", 3);
      assert.ok(ids.includes("hub:projects:no"), q);
      const hub = lookupKnowledgeSource("hub:projects:no");
      assert.equal(hub.ok, true);
      if (!hub.ok) continue;
      assert.equal(hub.grounding.suitableForFactualAnswer, true);
      assert.match(hub.excerpt.text.toLowerCase(), /predictive sales coach/);
      assert.doesNotMatch(hub.excerpt.text.toLowerCase(), /ai discovery.*marius ottesen consulting/);
    }
    const roles = selectRelevantSourceIds("Hvilke lederroller passer Marius til?", "no", 3);
    assert.ok(!roles.includes("hub:projects:no") || roles[0] !== "hub:projects:no");
  });
});