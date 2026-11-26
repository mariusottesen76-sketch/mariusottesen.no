import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { normalizeExcerptForAssistant } from "./excerpt-voice";

describe("excerpt voice (05J)", () => {
  it("removes page-meta lead and shifts first person", () => {
    const out = normalizeExcerptForAssistant(
      "Her finner du erfaring innen salg. Jeg har lang erfaring med B2B.",
      "no"
    );
    assert.ok(!out.includes("Her finner du"));
    assert.match(out, /Marius Ottesen har lang erfaring/);
  });
});