import { getAlleFaginnlegg } from "../faginnlegg-data";
import { getAllProjectV2Records } from "../../data/projects-v2/registry";
import {
  getIndexableProjectRecords,
  projectEnPath,
  projectNoPath,
  PROJECTS_HUB_PAIR,
} from "../project-locale-routes";
import { REFERANSER_LOCALE, SITE, localePairForPage, type SitePageKey } from "../locale-routes";
import { getSitePageMeta } from "../site-page-metadata";
import { BOK_ROUTE } from "../../data/bok-prosjekt-innhold";
import { PRIVACY_ROUTE, getPrivacyPageContent } from "../../data/privacy-content";
import { getTranslation } from "../../data/translations";
import { getIndexableEnArticleSlugs, ARTICLES_HUB_PAIR } from "../faginnlegg-locale-routes";
import { resolveFaginnleggHubUpdatedAt } from "../../data/projects-v2/project-date-resolvers";
import type {
  KnowledgeCategory,
  KnowledgeExcerptLevel,
  KnowledgeLang,
  KnowledgeManifest,
  KnowledgeManifestEntry,
} from "./types";
import { ROW_EXTERNAL_SOURCES, rowExternalManifestId } from "./row-external-knowledge";
import type { Lang } from "../../LanguageContext";

function abs(path: string): string {
  return `${SITE}${path}`;
}

function sitePageMeta(page: SitePageKey, lang: Lang) {
  const m = getSitePageMeta(page, lang);
  const pair = localePairForPage(page);
  const canonicalPath = lang === "en" ? pair.en : pair.no;
  return {
    title: m.title,
    description: m.description,
    canonicalPath,
    canonicalUrl: abs(canonicalPath),
  };
}

const TAB_PAGES: { page: SitePageKey; category: KnowledgeCategory; idKey: string }[] = [
  { page: "home", category: "profile", idKey: "home" },
  { page: "experience", category: "experience", idKey: "experience" },
  { page: "results", category: "results", idKey: "results" },
  { page: "consulting", category: "consulting", idKey: "consulting" },
  { page: "cv", category: "cv", idKey: "cv" },
  { page: "contact", category: "contact", idKey: "contact" },
];

function tabExcerptLevel(): KnowledgeExcerptLevel {
  return "partial";
}

function buildTabEntries(siteDates: { publishedAt?: string; updatedAt?: string }): KnowledgeManifestEntry[] {
  const entries: KnowledgeManifestEntry[] = [];
  for (const { page, category, idKey } of TAB_PAGES) {
    const localePairId = `pair:tab:${idKey}`;
    const langs: KnowledgeLang[] = ["no", "en"];
    const ids: Record<KnowledgeLang, string> = {
      no: `tab:${idKey}:no`,
      en: `tab:${idKey}:en`,
    };
    for (const lang of langs) {
      const meta = sitePageMeta(page, lang);
      entries.push({
        id: ids[lang],
        title: meta.title,
        url: meta.canonicalUrl,
        lang,
        description: meta.description,
        category,
        publishedAt: siteDates.publishedAt,
        updatedAt: siteDates.updatedAt,
        canonicalUrl: meta.canonicalUrl,
        localePairId,
        alternateSourceId: ids[lang === "no" ? "en" : "no"],
        contentRef: { kind: "site-page", page },
        excerptLevel: tabExcerptLevel(),
      });
    }
  }
  return entries;
}

function buildReferencesEntries(siteDates: { publishedAt?: string; updatedAt?: string }): KnowledgeManifestEntry[] {
  const localePairId = "pair:tab:references";
  const ids = { no: "tab:references:no", en: "tab:references:en" } as const;
  const langs: KnowledgeLang[] = ["no", "en"];
  const result: KnowledgeManifestEntry[] = [];
  for (const lang of langs) {
    const path = REFERANSER_LOCALE[lang];
    const title = getTranslation("ref.title", lang);
    const description = getTranslation("ref.sub", lang);
    result.push({
      id: ids[lang],
      title,
      url: abs(path),
      lang,
      description,
      category: "references",
      publishedAt: siteDates.publishedAt,
      updatedAt: siteDates.updatedAt,
      canonicalUrl: abs(path),
      localePairId,
      alternateSourceId: ids[lang === "no" ? "en" : "no"],
      contentRef: { kind: "references-hub" },
      excerptLevel: "partial",
    });
  }
  return result;
}

function buildBookEntries(faginnleggDates: { publishedAt?: string; updatedAt?: string }): KnowledgeManifestEntry[] {
  const localePairId = "pair:book";
  const ids = { no: "book:no", en: "book:en" } as const;
  const langs: KnowledgeLang[] = ["no", "en"];
  const result: KnowledgeManifestEntry[] = [];
  for (const lang of langs) {
    const path = BOK_ROUTE[lang];
    const title =
      lang === "no"
        ? "VerdisKIftet — fagbokprosjekt | Marius Ottesen"
        : "VerdisKIftet — book project | Marius Ottesen";
    const description =
      lang === "no"
        ? "Fagbokprosjekt om strategisk ledelse, gjennomføring, endringsledelse og kunstig intelligens."
        : "Book project on strategic leadership, execution, change leadership and artificial intelligence.";
    result.push({
      id: ids[lang],
      title,
      url: abs(path),
      lang,
      description,
      category: "book",
      publishedAt: faginnleggDates.publishedAt,
      updatedAt: faginnleggDates.updatedAt,
      canonicalUrl: abs(path),
      localePairId,
      alternateSourceId: ids[lang === "no" ? "en" : "no"],
      contentRef: { kind: "book" },
      excerptLevel: "partial",
    });
  }
  return result;
}

function buildHubEntries(
  hub: "projects" | "articles",
  pair: { no: string; en: string },
  titleNo: string,
  titleEn: string,
  descNo: string,
  descEn: string,
  dates: { publishedAt?: string; updatedAt?: string }
): KnowledgeManifestEntry[] {
  const localePairId = `pair:hub:${hub}`;
  const ids = { no: `hub:${hub}:no`, en: `hub:${hub}:en` } as const;
  const meta = {
    no: { title: titleNo, description: descNo, path: pair.no },
    en: { title: titleEn, description: descEn, path: pair.en },
  };
  const langs: KnowledgeLang[] = ["no", "en"];
  return langs.map((lang) => ({
    id: ids[lang],
    title: meta[lang].title,
    url: abs(meta[lang].path),
    lang,
    description: meta[lang].description,
    category: "hub" as const,
    publishedAt: dates.publishedAt,
    updatedAt: dates.updatedAt,
    canonicalUrl: abs(meta[lang].path),
    localePairId,
    alternateSourceId: ids[lang === "no" ? "en" : "no"],
    contentRef: { kind: "hub", hub },
    excerptLevel: "metadata_only" as const,
  }));
}

function buildPrivacyEntries(siteDates: { updatedAt?: string }): KnowledgeManifestEntry[] {
  const localePairId = "pair:legal:privacy";
  const ids = { no: "legal:privacy:no", en: "legal:privacy:en" } as const;
  const langs: KnowledgeLang[] = ["no", "en"];
  return langs.map((lang) => {
    const page = getPrivacyPageContent(lang);
    const path = PRIVACY_ROUTE[lang];
    return {
      id: ids[lang],
      title: page.title,
      url: abs(path),
      lang,
      description: page.intro,
      category: "legal" as const,
      updatedAt: siteDates.updatedAt,
      canonicalUrl: abs(path),
      localePairId,
      alternateSourceId: ids[lang === "no" ? "en" : "no"],
      contentRef: { kind: "legal-privacy" },
      excerptLevel: "partial" as const,
    };
  });
}

function buildRowExternalEntries(): KnowledgeManifestEntry[] {
  const entries: KnowledgeManifestEntry[] = [];
  const langs: KnowledgeLang[] = ["no", "en"];
  for (const def of ROW_EXTERNAL_SOURCES) {
    const localePairId = `pair:external:rowsolutions:${def.key}`;
    for (const lang of langs) {
      const id = rowExternalManifestId(def.key, lang);
      entries.push({
        id,
        title: def.title[lang],
        url: def.url,
        lang,
        description: def.description[lang],
        category: "external_reference",
        canonicalUrl: def.url,
        localePairId,
        alternateSourceId: rowExternalManifestId(def.key, lang === "no" ? "en" : "no"),
        contentRef: { kind: "external-row", sourceKey: def.key },
        excerptLevel: "partial",
      });
    }
  }
  return entries;
}

function buildProjectEntries(): KnowledgeManifestEntry[] {
  const projects = getAllProjectV2Records();
  const indexableEn = new Set(getIndexableProjectRecords().map((p) => p.id));
  const inSitemap = projects.filter(
    (p) =>
      p.seo.canonicalPath &&
      !p.seo.canonicalPath.startsWith("/prosjekter") &&
      p.seo.canonicalPath !== "/faginnlegg"
  );

  const entries: KnowledgeManifestEntry[] = [];
  for (const project of inSitemap) {
    const localePairId = `pair:project:${project.id}`;
    const noPath = projectNoPath(project);
    const noId = `project:${project.id}:no`;
    entries.push({
      id: noId,
      title: project.seo.title.no,
      url: abs(noPath),
      lang: "no",
      description: project.seo.description.no,
      category: "project",
      publishedAt: project.publishedAt,
      updatedAt: project.updatedAt ?? project.publishedAt,
      canonicalUrl: abs(noPath),
      localePairId,
      alternateSourceId: indexableEn.has(project.id) ? `project:${project.id}:en` : undefined,
      contentRef: { kind: "project", projectId: project.id },
      excerptLevel: "partial",
      projectAccessMode: project.accessMode,
    });

    if (indexableEn.has(project.id)) {
      const enPath = projectEnPath(project);
      const enId = `project:${project.id}:en`;
      entries.push({
        id: enId,
        title: project.seo.title.en,
        url: abs(enPath),
        lang: "en",
        description: project.seo.description.en,
        category: "project",
        publishedAt: project.publishedAt,
        updatedAt: project.updatedAt ?? project.publishedAt,
        canonicalUrl: abs(enPath),
        localePairId,
        alternateSourceId: noId,
        contentRef: { kind: "project", projectId: project.id },
        excerptLevel: "partial",
        projectAccessMode: project.accessMode,
      });
    }
  }
  return entries;
}

function buildArticleEntries(faginnleggHubDate: string): KnowledgeManifestEntry[] {
  const enSlugs = new Set(getIndexableEnArticleSlugs());
  const entries: KnowledgeManifestEntry[] = [];
  for (const innlegg of getAlleFaginnlegg()) {
    const slug = innlegg.id;
    const localePairId = enSlugs.has(slug) ? `pair:article:${slug}` : undefined;
    const noId = `article:${slug}:no`;
    const enId = `article:${slug}:en`;
    const noPath = `/faginnlegg/${slug}`;
    const description = innlegg.metaDescription?.no ?? innlegg.teaser.no;

    entries.push({
      id: noId,
      title: innlegg.tittel.no,
      url: abs(noPath),
      lang: "no",
      description,
      category: "article",
      publishedAt: innlegg.dato,
      updatedAt: innlegg.visningsDato ?? innlegg.dato,
      canonicalUrl: abs(noPath),
      localePairId,
      alternateSourceId: enSlugs.has(slug) ? enId : undefined,
      contentRef: { kind: "article", slug },
      excerptLevel: "metadata_only",
    });

    if (enSlugs.has(slug)) {
      const enPath = `/en/articles/${slug}`;
      const enDescription = innlegg.metaDescription?.en ?? innlegg.teaser.en;
      entries.push({
        id: enId,
        title: innlegg.tittel.en,
        url: abs(enPath),
        lang: "en",
        description: enDescription,
        category: "article",
        publishedAt: innlegg.dato,
        updatedAt: innlegg.visningsDato ?? innlegg.dato,
        canonicalUrl: abs(enPath),
        localePairId,
        alternateSourceId: noId,
        enArticleStatus: "full",
        contentRef: { kind: "article", slug },
        excerptLevel: "metadata_only",
      });
    }
  }
  void faginnleggHubDate;
  return entries;
}

const MANIFEST_GENERATED_AT = "content-registers-v1";

export function buildKnowledgeManifest(fixedGeneratedAt?: string): KnowledgeManifest {
  const projects = getAllProjectV2Records();
  const siteProject = projects.find((p) => p.id === "mariusottesen-no-2025");
  const faginnleggHub = projects.find((p) => p.id === "ai-faginnlegg-serie-2026");
  const homeLastMod = siteProject?.updatedAt ?? siteProject?.publishedAt ?? "2025-11-15";
  const prosjekterLastMod = projects.reduce((max, p) => {
    const iso = p.updatedAt ?? p.publishedAt;
    return iso > max ? iso : max;
  }, "2025-11-15");
  const faginnleggPublishedAt = faginnleggHub?.publishedAt ?? "2026-01-13";
  const faginnleggLastMod =
    resolveFaginnleggHubUpdatedAt(faginnleggPublishedAt) ?? faginnleggPublishedAt;

  const siteDates = { publishedAt: homeLastMod, updatedAt: homeLastMod };
  const hubProjectDates = { publishedAt: prosjekterLastMod, updatedAt: prosjekterLastMod };
  const hubArticleDates = { publishedAt: faginnleggPublishedAt, updatedAt: faginnleggLastMod };

  const entries: KnowledgeManifestEntry[] = [
    ...buildTabEntries(siteDates),
    ...buildReferencesEntries(siteDates),
    ...buildBookEntries(hubArticleDates),
    ...buildHubEntries(
      "projects",
      PROJECTS_HUB_PAIR,
      "AI-prosjekter | Marius Ottesen",
      "AI projects | Marius Ottesen",
      "Portefølje av apper, plattformer og arbeidsflyter.",
      "Portfolio of apps, platforms and workflows.",
      hubProjectDates
    ),
    ...buildHubEntries(
      "articles",
      ARTICLES_HUB_PAIR,
      "Faginnlegg og innsikt | Marius Ottesen",
      "Articles and insights | Marius Ottesen",
      "Faglige artikler om ledelse, salg og praktisk AI.",
      "Professional articles on leadership, sales and practical AI.",
      hubArticleDates
    ),
    ...buildPrivacyEntries({ updatedAt: siteDates.updatedAt }),
    ...buildProjectEntries(),
    ...buildRowExternalEntries(),
    ...buildArticleEntries(faginnleggLastMod),
  ];

  entries.sort((a, b) => a.id.localeCompare(b.id));

  return {
    generatedAt: fixedGeneratedAt ?? MANIFEST_GENERATED_AT,
    site: SITE,
    entries,
  };
}

/** Path-only URLs from manifest for alignment checks with `sitemap.ts`. */
export function manifestCanonicalPaths(manifest: KnowledgeManifest): string[] {
  return manifest.entries
    .filter((e) => e.category !== "external_reference")
    .map((e) => {
      const u = new URL(e.canonicalUrl);
      return u.pathname;
    });
}