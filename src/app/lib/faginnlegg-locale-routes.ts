import type { Lang } from "../LanguageContext";
import { getAlleFaginnlegg, getFaginnleggBySlug } from "./faginnlegg-data";
import { hasFullEnFaginnleggBody, classifyFaginnleggEnBody } from "./faginnlegg-en-audit";
import { normalizePath } from "./locale-routes";

export const ARTICLES_HUB_PAIR = { no: "/faginnlegg", en: "/en/articles" } as const;

export function faginnleggNoArticlePath(slug: string): string {
  return `/faginnlegg/${slug}`;
}

export function faginnleggEnArticlePath(slug: string): string {
  return `/en/articles/${slug}`;
}

export function faginnleggArticlePath(slug: string, lang: Lang): string {
  const innlegg = getFaginnleggBySlug(slug);
  if (lang === "en" && hasFullEnFaginnleggBody(slug, innlegg)) {
    return faginnleggEnArticlePath(slug);
  }
  return faginnleggNoArticlePath(slug);
}

export function getIndexableEnArticleSlugs(): string[] {
  return getAlleFaginnlegg()
    .filter((innlegg) => classifyFaginnleggEnBody(innlegg) === "FULL_EN_BODY")
    .map((innlegg) => innlegg.id);
}

export function getIndexableEnArticleStaticParams(): { slug: string }[] {
  return getIndexableEnArticleSlugs().map((slug) => ({ slug }));
}

export function resolveArticleLocalePair(pathname: string): { no: string; en: string } | null {
  const normalized = normalizePath(pathname);
  if (normalized === ARTICLES_HUB_PAIR.no || normalized === ARTICLES_HUB_PAIR.en) {
    return { ...ARTICLES_HUB_PAIR };
  }

  const noPrefix = "/faginnlegg/";
  const enPrefix = "/en/articles/";

  if (normalized.startsWith(noPrefix)) {
    const slug = normalized.slice(noPrefix.length);
    const innlegg = getFaginnleggBySlug(slug);
    if (!innlegg || !hasFullEnFaginnleggBody(slug, innlegg)) return null;
    return { no: faginnleggNoArticlePath(slug), en: faginnleggEnArticlePath(slug) };
  }

  if (normalized.startsWith(enPrefix)) {
    const slug = normalized.slice(enPrefix.length);
    const innlegg = getFaginnleggBySlug(slug);
    if (!innlegg || !hasFullEnFaginnleggBody(slug, innlegg)) return null;
    return { no: faginnleggNoArticlePath(slug), en: faginnleggEnArticlePath(slug) };
  }

  return null;
}

export function localePathFromNoArticlePath(noPathname: string, lang: Lang): string | null {
  const normalized = normalizePath(noPathname);
  if (normalized === ARTICLES_HUB_PAIR.no) {
    return lang === "en" ? ARTICLES_HUB_PAIR.en : ARTICLES_HUB_PAIR.no;
  }
  if (normalized.startsWith("/faginnlegg/")) {
    const slug = normalized.slice("/faginnlegg/".length);
    return faginnleggArticlePath(slug, lang);
  }
  return null;
}
