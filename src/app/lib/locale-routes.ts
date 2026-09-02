import type { Lang } from "../LanguageContext";

export const SITE = "https://www.mariusottesen.no" as const;

/** Tabs with indexable EN-1A URL pairs. */
import { localePathFromNoProjectPath, resolveProjectLocalePair } from "./project-locale-routes";

export type SiteTabKey =
  | "Profil"
  | "Erfaring"
  | "Resultater"
  | "Consulting"
  | "CV & Åpen søknad"
  | "Kontakt"
  | "Prosjekter";

export const LOCALE_ROUTE_MAP: Record<SiteTabKey, { no: string; en: string }> = {
  Profil: { no: "/", en: "/en" },
  Erfaring: { no: "/erfaring", en: "/en/experience" },
  Resultater: { no: "/resultater", en: "/en/results" },
  Consulting: { no: "/consulting", en: "/en/consulting" },
  "CV & Åpen søknad": { no: "/cv", en: "/en/cv" },
  Kontakt: { no: "/kontakt", en: "/en/contact" },
  Prosjekter: { no: "/prosjekter", en: "/en/projects" },
};

/** Tabs without dedicated EN route — always Norwegian URL. */
const UNMAPPED_TAB_SLUGS: Record<string, string> = {
  Referanser: "referanser",
  Faginnlegg: "faginnlegg",
};

export type SitePageKey = "home" | "experience" | "results" | "consulting" | "cv" | "contact";

export const SITE_PAGE_TO_TAB: Record<SitePageKey, SiteTabKey> = {
  home: "Profil",
  experience: "Erfaring",
  results: "Resultater",
  consulting: "Consulting",
  cv: "CV & Åpen søknad",
  contact: "Kontakt",
};

export function isEnPath(pathname: string): boolean {
  return pathname === "/en" || pathname.startsWith("/en/");
}

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/$/, "") || "/";
}

export function resolveLocalePair(pathname: string): { no: string; en: string } | null {
  const normalized = normalizePath(pathname);
  for (const pair of Object.values(LOCALE_ROUTE_MAP)) {
    if (pair.no === normalized || pair.en === normalized) return pair;
  }
  return resolveProjectLocalePair(normalized);
}

export function pathForTab(tab: string, lang: Lang): string {
  const mapped = LOCALE_ROUTE_MAP[tab as SiteTabKey];
  if (mapped) return mapped[lang];
  const slug = UNMAPPED_TAB_SLUGS[tab];
  if (slug) return `/${slug}`;
  return lang === "en" ? "/en" : "/";
}

/** Map a Norwegian internal href to locale-aware path (query + hash preserved). */
export function localePathFromNoPath(noHref: string, lang: Lang): string {
  const hashIdx = noHref.indexOf("#");
  const beforeHash = hashIdx >= 0 ? noHref.slice(0, hashIdx) : noHref;
  const hash = hashIdx >= 0 ? noHref.slice(hashIdx + 1) : "";

  const queryIdx = beforeHash.indexOf("?");
  const pathPart = queryIdx >= 0 ? beforeHash.slice(0, queryIdx) : beforeHash;
  const query = queryIdx >= 0 ? beforeHash.slice(queryIdx) : "";

  const normalized = normalizePath(pathPart);
  for (const pair of Object.values(LOCALE_ROUTE_MAP)) {
    if (pair.no === normalized) {
      const base = pair[lang];
      const withQuery = `${base}${query}`;
      return hash ? `${withQuery}#${hash}` : withQuery;
    }
  }
  const projectPath = localePathFromNoProjectPath(normalized, lang);
  if (projectPath) {
    const withQuery = `${projectPath}${query}`;
    return hash ? `${withQuery}#${hash}` : withQuery;
  }
  return noHref;
}

export function localePairForPage(page: SitePageKey): { no: string; en: string } {
  const tab = SITE_PAGE_TO_TAB[page];
  return LOCALE_ROUTE_MAP[tab];
}
