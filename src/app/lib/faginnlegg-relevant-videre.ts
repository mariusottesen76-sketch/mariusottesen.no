import { getFaginnleggRelevantVidereOverride } from "../data/faginnlegg-authority";
import type { Lang } from "../LanguageContext";
import { localizeArticleHref } from "./faginnlegg-internal-links";
import { erAiInnlegg, erLedelseInnlegg } from "./faginnlegg-data";

export interface RelevantVidereLink {
  href: string;
  label: { no: string; en: string };
}

function getGenericRelevantVidereLinks(kategori: string): RelevantVidereLink[] {
  if (erAiInnlegg(kategori)) {
    return [
      { href: "/prosjekter", label: { no: "AI-prosjekter", en: "AI projects" } },
      { href: "/consulting", label: { no: "Consulting", en: "Consulting" } },
      { href: "/", label: { no: "Om Marius Ottesen", en: "About Marius Ottesen" } },
    ];
  }

  if (erLedelseInnlegg(kategori)) {
    return [
      { href: "/erfaring", label: { no: "Erfaring", en: "Experience" } },
      { href: "/resultater", label: { no: "Resultater", en: "Results" } },
      { href: "/", label: { no: "Om Marius Ottesen", en: "About Marius Ottesen" } },
    ];
  }

  return [
    { href: "/consulting", label: { no: "Consulting", en: "Consulting" } },
    { href: "/erfaring", label: { no: "Erfaring", en: "Experience" } },
    { href: "/", label: { no: "Om Marius Ottesen", en: "About Marius Ottesen" } },
  ];
}

/**
 * Håndkuratert override for Core Authority Set v1.0; ellers kategori-basert fallback.
 */
export function getRelevantVidereLinks(slug: string, kategori: string): RelevantVidereLink[] {
  const override = getFaginnleggRelevantVidereOverride(slug);
  if (override?.length) return override;
  return getGenericRelevantVidereLinks(kategori);
}

export function labelForLang(link: RelevantVidereLink, lang: Lang): string {
  return link.label[lang];
}

export function resolveRelevantVidereHref(href: string, lang: Lang): string {
  return localizeArticleHref(href, lang);
}
