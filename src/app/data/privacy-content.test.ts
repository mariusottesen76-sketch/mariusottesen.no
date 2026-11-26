import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getPrivacyPageContent } from "./privacy-content";

describe("privacy-content AI assistant sections", () => {
  it("includes Utforsk Marius section in Norwegian", () => {
    const { sections } = getPrivacyPageContent("no");
    const ai = sections.find((s) => s.heading.includes("Utforsk Marius"));
    assert.ok(ai, "missing NO AI section");
    assert.ok(ai.paragraphs.some((p) => /Anthropic/i.test(p)));
    assert.ok(ai.paragraphs.some((p) => /30 dager/i.test(p)));
    assert.ok(sections.some((s) => s.paragraphs.some((p) => /GA4/i.test(p) && /assistent/i.test(p))));
  });

  it("includes Explore Marius section in English", () => {
    const { sections } = getPrivacyPageContent("en");
    const ai = sections.find((s) => s.heading.includes("Explore Marius"));
    assert.ok(ai, "missing EN AI section");
    assert.ok(ai.paragraphs.some((p) => /Anthropic/i.test(p)));
    assert.ok(ai.paragraphs.some((p) => /30 days/i.test(p)));
  });

  it("names Marius Ottesen as controller, not a separate legal entity", () => {
    const noCtrl = getPrivacyPageContent("no").sections[0].paragraphs.join(" ");
    assert.match(noCtrl, /Marius Ottesen/i);
    assert.match(noCtrl, /937 102 801/);
    assert.match(noCtrl, /registrerte foretaksnavnet/i);
  });
});