import assert from "node:assert/strict";
import { describe, it } from "node:test";
import sitemap from "../../sitemap";
import { SITE } from "../locale-routes";
import {
  buildKnowledgeManifest,
  manifestCanonicalPaths,
} from "./build-manifest";
import { getKnowledgeManifest, listKnowledgeManifestEntries } from "./manifest";
import { lookupKnowledgeSource } from "./lookup";
import type { KnowledgeManifestEntry } from "./types";

function sitemapPaths(): string[] {
  return sitemap()
    .map((e) => new URL(e.url).pathname)
    .sort();
}

function countBy<T>(items: readonly T[], fn: (item: T) => string): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const key = fn(item);
    out[key] = (out[key] ?? 0) + 1;
  }
  return out;
}

describe("assistant knowledge manifest", () => {
  it("generates without error and matches sitemap URL set", () => {
    const manifest = buildKnowledgeManifest();
    assert.ok(manifest.entries.length > 0);

    const manifestPaths = [...manifestCanonicalPaths(manifest)].sort();
    const sitePaths = sitemapPaths();

    assert.deepEqual(manifestPaths, sitePaths, "Manifest paths must match sitemap.ts");
    assert.equal(manifest.entries.length, 285);
  });

  it("has unique source ids", () => {
    const ids = listKnowledgeManifestEntries().map((e) => e.id);
    assert.equal(ids.length, new Set(ids).size);
  });

  it("uses internal https URLs on production host", () => {
    for (const entry of listKnowledgeManifestEntries()) {
      if (entry.category === "external_reference") {
        assert.ok(entry.canonicalUrl.startsWith("https://rowsolutions.no"), entry.id);
        continue;
      }
      assert.ok(entry.url.startsWith(SITE), entry.id);
      assert.ok(entry.canonicalUrl.startsWith(SITE), entry.id);
      assert.ok(!entry.url.includes("/api/"), entry.id);
    }
  });

  it("has no duplicate canonical URLs per language", () => {
    const seen = new Set<string>();
    for (const entry of listKnowledgeManifestEntries()) {
      const key = `${entry.lang}|${entry.canonicalUrl}`;
      assert.ok(!seen.has(key), `duplicate: ${key}`);
      seen.add(key);
    }
  });

  it("classifies Norwegian and English entries", () => {
    const byLang = countBy(listKnowledgeManifestEntries(), (e) => e.lang);
    assert.equal(byLang.no, 147);
    assert.equal(byLang.en, 138);
  });

  it("wires locale pairs to existing ids", () => {
    for (const entry of listKnowledgeManifestEntries()) {
      if (!entry.alternateSourceId) continue;
      const alt = listKnowledgeManifestEntries().find((e) => e.id === entry.alternateSourceId);
      assert.ok(alt, `missing alternate for ${entry.id}`);
      assert.notEqual(alt.lang, entry.lang);
    }
  });

  it("is deterministic across builds", () => {
    const a = JSON.stringify(buildKnowledgeManifest());
    const b = JSON.stringify(buildKnowledgeManifest());
    assert.equal(a, b);
    const cached = JSON.stringify(getKnowledgeManifest());
    assert.equal(a, cached);
  });

  it("lookup returns partial excerpt for profile tab", () => {
    const res = lookupKnowledgeSource("tab:home:no");
    assert.equal(res.ok, true);
    if (res.ok) {
      assert.equal(res.entry.category, "profile");
      assert.equal(res.excerpt.level, "partial");
      assert.ok(res.excerpt.text.length > 80);
      assert.ok(!/tilgangskode/i.test(res.excerpt.text));
      assert.equal(res.grounding.grounding, "substantive");
      assert.equal(res.grounding.suitableForFactualAnswer, true);
    }
  });

  it("rejects unknown source ids", () => {
    const res = lookupKnowledgeSource("article:does-not-exist:no");
    assert.equal(res.ok, false);
    if (!res.ok) assert.equal(res.code, "unknown_id");
  });

  it("reports unavailable English when no indexed EN article", () => {
    const onlyNo = listKnowledgeManifestEntries().find(
      (e) => e.category === "article" && e.lang === "no" && !e.alternateSourceId
    );
    assert.ok(onlyNo, "expected at least one NO-only article");
    const res = lookupKnowledgeSource(onlyNo.id, "en");
    assert.equal(res.ok, false);
    if (!res.ok) assert.equal(res.code, "lang_unavailable");
  });

  it("includes priority tab categories", () => {
    const categories = new Set(listKnowledgeManifestEntries().map((e) => e.category));
    for (const cat of [
      "profile",
      "experience",
      "results",
      "references",
      "consulting",
      "cv",
      "contact",
      "book",
      "external_reference",
    ] as const) {
      assert.ok(categories.has(cat), `missing category ${cat}`);
    }
  });

  it("does not expose API routes in manifest", () => {
    const bad = listKnowledgeManifestEntries().filter((e) => e.canonicalUrl.includes("/api"));
    assert.deepEqual(bad, []);
  });
});

describe("manifest excerpt coverage", () => {
  it("counts excerpt levels for core tabs", () => {
    const coreIds = [
      "tab:home:no",
      "tab:experience:no",
      "tab:results:no",
      "tab:consulting:no",
      "tab:cv:no",
      "tab:contact:no",
      "tab:references:no",
      "book:no",
    ];
    for (const id of coreIds) {
      const res = lookupKnowledgeSource(id);
      assert.equal(res.ok, true);
      if (res.ok) {
        assert.equal(res.excerpt.level, "partial");
        assert.ok(res.excerpt.text.length > 20, id);
      }
    }
  });

  it("articles and projects default to metadata or partial in manifest", () => {
    const articles = listKnowledgeManifestEntries().filter((e) => e.category === "article");
    const projects = listKnowledgeManifestEntries().filter((e) => e.category === "project");
    assert.ok(articles.length > 0);
    assert.ok(projects.length > 0);
    const manifestMeta = [...articles, ...projects].every(
      (e: KnowledgeManifestEntry) =>
        e.excerptLevel === "metadata_only" || e.excerptLevel === "partial"
    );
    assert.ok(manifestMeta);
  });
});