import type { Lang } from "../LanguageContext";
import { erAiInnlegg, erLedelseInnlegg } from "./faginnlegg-data";

export interface RelevantVidereLink {
  href: string;
  label: { no: string; en: string };
}

/**
 * Enkel kategori-basert routing — maks 3 lenker, minst én til profil/forside.
 * Ledelse: erfaring, resultater, profil.
 * AI: prosjekter, consulting, profil.
 * Ukjente kategorier: consulting, erfaring, profil.
 */
export function getRelevantVidereLinks(kategori: string): RelevantVidereLink[] {
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

export function labelForLang(link: RelevantVidereLink, lang: Lang): string {
  return link.label[lang];
}
