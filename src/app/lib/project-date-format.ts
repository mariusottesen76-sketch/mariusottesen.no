import type { Lang } from "../LanguageContext";

/** ISO YYYY-MM-DD → dd.mm.åå (norsk/europeisk kortformat). */
export function formatIsoDateShort(iso: string, _lang: Lang): string {
  const [year, month, day] = iso.split("-");
  if (!year || !month || !day) return iso;
  return `${day}.${month}.${year.slice(2)}`;
}

export function formatPublishedDateLabel(iso: string, lang: Lang): string {
  const short = formatIsoDateShort(iso, lang);
  return lang === "no" ? `Publisert ${short}` : `Published ${short}`;
}

export function formatUpdatedDateLabel(iso: string, lang: Lang): string {
  const short = formatIsoDateShort(iso, lang);
  return lang === "no" ? `Oppdatert ${short}` : `Updated ${short}`;
}

/** For sitemap/JSON-LD — deterministisk, ikke dagens dato. */
export function isoToUtcDate(iso: string): Date {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

export function projectLastModifiedIso(project: {
  publishedAt: string;
  updatedAt?: string;
}): string {
  return project.updatedAt ?? project.publishedAt;
}

export function sitemapLastModifiedFromIso(iso: string): Date {
  return isoToUtcDate(iso);
}
