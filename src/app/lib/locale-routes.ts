import type { Lang } from "../LanguageContext";

export const SITE = "https://www.mariusottesen.no" as const;

/** Tabs with indexable EN-1A URL pairs. */
export type SiteTabKey =
  | "Profil"
  | "Erfaring"
  | "Resultater"
  | "Consulting"
  | "CV & Åpen søknad"
  | "Kontakt";

export const LOCALE_ROUTE_MAP: Record<SiteTabKey, { no: string; en: string }> = {
  Profil: { no: "/", en: "/en" },
  Erfaring: { no: "/erfaring", en: "/en/experience" },
  Resultater: { no: "/resultater", en: "/en/results" },
  Consulting: { no: "/consulting", en: "/en/consulting" },
  "CV & Åpen søknad": { no: "/cv", en: "/en/cv" },
  Kontakt: { no: "/kontakt", en: "/en/contact" },
};

/** Tabs without dedicated EN route in EN-1A — always Norwegian URL. */
const UNMAPPED_TAB_SLUGS: Record<string, string> = {
  Referanser: "referanser",
  Faginnlegg: "faginnlegg",
  Prosjekter: "prosjekter",
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
  return null;
}

export function pathForTab(tab: string, lang: Lang): string {
  const mapped = LOCALE_ROUTE_MAP[tab as SiteTabKey];
  if (mapped) return mapped[lang];
  const slug = UNMAPPED_TAB_SLUGS[tab];
  if (slug) return `/${slug}`;
  return lang === "en" ? "/en" : "/";
}

/** Map a Norwegian internal href to locale-aware path (hash preserved). */
export function localePathFromNoPath(noHref: string, lang: Lang): string {
  const [pathPart, hash] = noHref.split("#");
  const normalized = normalizePath(pathPart);
  for (const pair of Object.values(LOCALE_ROUTE_MAP)) {
    if (pair.no === normalized) {
      const base = pair[lang];
      return hash ? `${base}#${hash}` : base;
    }
  }
  return noHref;
}

export function localePairForPage(page: SitePageKey): { no: string; en: string } {
  const tab = SITE_PAGE_TO_TAB[page];
  return LOCALE_ROUTE_MAP[tab];
}
