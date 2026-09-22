import type { Lang } from "../LanguageContext";
import { BOK_ROUTE } from "../data/bok-prosjekt-innhold";
import { normalizePath } from "./locale-routes";

export function resolveBokLocalePair(pathname: string): { no: string; en: string } | null {
  const normalized = normalizePath(pathname);
  if (normalized === BOK_ROUTE.no || normalized === BOK_ROUTE.en) {
    return { no: BOK_ROUTE.no, en: BOK_ROUTE.en };
  }
  return null;
}

export function localePathFromNoBokPath(normalizedNoPath: string, lang: Lang): string | null {
  if (normalizedNoPath === BOK_ROUTE.no) return BOK_ROUTE[lang];
  return null;
}
