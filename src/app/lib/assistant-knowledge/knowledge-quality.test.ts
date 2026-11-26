import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getIndexableEnArticleSlugs } from "../faginnlegg-locale-routes";
import { listKnowledgeManifestEntries, lookupKnowledgeSource } from "./index";
import { scrubSensitiveExcerptText } from "./text-utils";
import { usesLimitedProjectExcerpt } from "./project-excerpt-policy";

const FORBIDDEN_RAW_PATTERNS = [
  /\bsk-[a-zA-Z0-9]{20,}\b/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bprocess\.env\.[A-Z_]+\b/i,
  /\bEMAIL_PASS\b/,
];

const LOCALE_SAMPLES = [
  { id: "tab:home:no", path: "/", lang: "no" as const },
  { id: "tab:home:en", path: "/en", lang: "en" as const },
  { id: "tab:experience:no", path: "/erfaring", lang: "no" as const },
  { id: "tab:experience:en", path: "/en/experience", lang: "en" as const },
  { id: "tab:results:en", path: "/en/results", lang: "en" as const },
  { id: "book:no", path: "/bok", lang: "no" as const },
  { id: "book:en", path: "/en/book", lang: "en" as const },
  { id: "project:predictive-sales-coach-2026:no", path: "/psc", lang: "no" as const },
  { id: "project:row-solutions-2026:no", path: "/row-solutions", lang: "no" as const },
] as const;

describe("locale and URL integrity", () => {
  it("maps representative sources to correct language and canonical paths", () => {
    for (const sample of LOCALE_SAMPLES) {
      const entry = listKnowledgeManifestEntries().find((e) => e.id === sample.id);
      assert.ok(entry, `missing ${sample.id}`);
      assert.equal(entry.lang, sample.lang);
      const pathname = new URL(entry.canonicalUrl).pathname;
      assert.equal(pathname, sample.path);
      if (sample.lang === "en") {
        assert.ok(pathname === "/en" || pathname.startsWith("/en/"), sample.id);
      } else {
        assert.ok(!pathname.startsWith("/en/") || pathname === "/", sample.id);
      }
    }
  });

  it("does not invent English article URLs beyond indexable EN slugs", () => {
    const indexable = new Set(getIndexableEnArticleSlugs());
    const enArticles = listKnowledgeManifestEntries().filter(
      (e) => e.category === "article" && e.lang === "en"
    );
    for (const entry of enArticles) {
      const slug = entry.contentRef.kind === "article" ? entry.contentRef.slug : "";
      assert.ok(indexable.has(slug), entry.id);
    }
  });

  it("marks NO-only articles without alternate EN id", () => {
    const noOnly = listKnowledgeManifestEntries().filter(
      (e) => e.category === "article" && e.lang === "no" && !e.alternateSourceId
    );
    assert.ok(noOnly.length >= 1);
    const enSlugSet = new Set(getIndexableEnArticleSlugs());
    for (const entry of noOnly) {
      const slug = entry.contentRef.kind === "article" ? entry.contentRef.slug : "";
      assert.ok(!enSlugSet.has(slug), entry.id);
    }
  });
});

describe("grounding vs metadata", () => {
  it("treats enriched hub entries as substantive for section overviews", () => {
    const res = lookupKnowledgeSource("hub:articles:no");
    assert.equal(res.ok, true);
    if (res.ok) {
      assert.equal(res.grounding.suitableForFactualAnswer, true);
      assert.equal(res.grounding.grounding, "substantive");
    }
  });

  it("treats core tabs as substantive for factual answers", () => {
    const res = lookupKnowledgeSource("tab:experience:no");
    assert.equal(res.ok, true);
    if (res.ok) {
      assert.equal(res.grounding.suitableForFactualAnswer, true);
    }
  });

  it("distinguishes substantive articles from teaser-only metadata", () => {
    const articles = listKnowledgeManifestEntries().filter((e) => e.category === "article" && e.lang === "no");
    let teaserOnly = false;
    let substantive = false;
    for (const entry of articles) {
      const res = lookupKnowledgeSource(entry.id);
      if (!res.ok) continue;
      if (res.grounding.suitableForFactualAnswer && res.excerpt.level === "partial") {
        substantive = true;
      }
      if (!res.grounding.suitableForFactualAnswer && res.excerpt.level === "metadata_only") {
        teaserOnly = true;
      }
    }
    assert.ok(teaserOnly, "expected at least one teaser-only article");
    assert.ok(substantive, "expected at least one substantive article");
  });
});

describe("accessMode excerpt policy", () => {
  it("tags limited-access projects in the manifest", () => {
    const limited = listKnowledgeManifestEntries().filter(
      (e) => e.category === "project" && e.projectAccessMode && usesLimitedProjectExcerpt(e.projectAccessMode)
    );
    assert.ok(limited.length >= 5);
    for (const entry of limited) {
      const res = lookupKnowledgeSource(entry.id);
      assert.equal(res.ok, true);
      if (res.ok) {
        assert.equal(res.entry.projectAccessMode, entry.projectAccessMode);
      }
    }
  });
});

describe("excerpt security scan", () => {
  it("does not leak raw secret-like patterns across all lookups", () => {
    for (const entry of listKnowledgeManifestEntries()) {
      const res = lookupKnowledgeSource(entry.id);
      if (!res.ok) continue;
      const text = res.excerpt.text;
      for (const pattern of FORBIDDEN_RAW_PATTERNS) {
        assert.ok(!pattern.test(text), `${entry.id} matched ${pattern}`);
      }
    }
  });

  it("scrubs access-code wording in synthetic strings", () => {
    const out = scrubSensitiveExcerptText("Be om tilgangskode og passord her");
    assert.ok(!/tilgangskode/i.test(out));
    assert.ok(!/passord/i.test(out));
    assert.ok(out.includes("[redacted]"));
  });
});