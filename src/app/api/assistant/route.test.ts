import assert from "node:assert/strict";
import { afterEach, beforeEach, describe, it } from "node:test";
import { POST } from "./route";

describe("POST /api/assistant when CHAT_ENABLED is false", () => {
  const prev = process.env.CHAT_ENABLED;

  beforeEach(() => {
    process.env.CHAT_ENABLED = "false";
  });

  afterEach(() => {
    if (prev === undefined) delete process.env.CHAT_ENABLED;
    else process.env.CHAT_ENABLED = prev;
  });

  it("returns 503 ai_disabled without sources before the knowledge pipeline", async () => {
    const res = await POST(
      new Request("http://localhost/api/assistant", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          lang: "no",
          question: "Hva har Marius oppnådd hos Norengros?",
        }),
      })
    );

    assert.equal(res.status, 503);
    const body = (await res.json()) as {
      errorCode?: string;
      category?: string;
      sourceIds?: string[];
      urls?: string[];
      answer?: string;
    };
    assert.equal(body.errorCode, "ai_disabled");
    assert.deepEqual(body.sourceIds, []);
    assert.deepEqual(body.urls, []);
    assert.match(body.answer ?? "", /deaktivert/i);
    assert.notEqual(body.category, "ANSWER");
  });

  it("honours lang=en in disabled response", async () => {
    const res = await POST(
      new Request("http://localhost/api/assistant", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ lang: "en", question: "What is on the site?" }),
      })
    );
    assert.equal(res.status, 503);
    const body = (await res.json()) as { errorCode?: string; lang?: string; answer?: string };
    assert.equal(body.errorCode, "ai_disabled");
    assert.equal(body.lang, "en");
    assert.match(body.answer ?? "", /disabled/i);
  });
});