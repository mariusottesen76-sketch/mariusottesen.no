import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { ASSISTANT_LIMITS } from "./assistant-config";
import { selectRelevantSourceIds } from "./source-selection";

const PORTFOLIO_QS = [
  {
    q: "Hvilke lederroller passer Marius til?",
    expectAny: [":cv:", ":home:", ":experience:"],
  },
  {
    q: "Hvilke resultater har Marius oppnådd?",
    expectAny: [":results:"],
  },
  {
    q: "Hvordan skaper Marius verdi?",
    expectAny: [":home:", ":consulting:", ":results:"],
  },
  {
    q: "Hvordan kan Marius hjelpe vår virksomhet?",
    expectAny: [":consulting:", ":home:"],
    rejectProject: true,
  },
];

describe("source selection — portfolio questions (05D)", () => {
  for (const { q, expectAny, rejectProject } of PORTFOLIO_QS) {
    it(`prioritizes relevant tabs for: ${q.slice(0, 42)}…`, () => {
      const ids = selectRelevantSourceIds(q, "no", ASSISTANT_LIMITS.maxSources);
      assert.ok(ids.length >= 1, "at least one source");
      assert.ok(
        expectAny.some((frag) => ids.some((id) => id.includes(frag))),
        `expected one of ${expectAny.join(", ")} in ${ids.join(", ")}`
      );
      if (rejectProject) {
        assert.ok(!ids[0]?.startsWith("project:"), `first source should not be project: ${ids[0]}`);
      }
    });
  }
});