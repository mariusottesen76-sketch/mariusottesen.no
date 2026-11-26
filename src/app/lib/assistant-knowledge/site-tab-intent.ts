import type { Lang } from "../../LanguageContext";
import { getTranslation } from "../../data/translations";

/** Maps UI main tabs to knowledge manifest source ids (no `tab:` for article/project hubs). */
export type SiteTabKey =
  | "home"
  | "experience"
  | "results"
  | "articles"
  | "book"
  | "projects"
  | "consulting"
  | "cv"
  | "references"
  | "contact";

export type ResolvedSiteTab = {
  key: SiteTabKey;
  sourceId: string;
  /** Short UI label, e.g. «Innsikt». */
  label: string;
};

const TAB_LABEL_KEYS: Record<SiteTabKey, string> = {
  home: "tab.profil",
  experience: "tab.erfaring",
  results: "tab.resultater",
  articles: "tab.faginnlegg",
  book: "tab.bok",
  projects: "tab.prosjekter",
  consulting: "tab.consulting",
  cv: "tab.cv",
  references: "tab.referanser",
  contact: "tab.kontakt",
};

export function manifestSourceIdForTab(key: SiteTabKey, lang: Lang): string {
  switch (key) {
    case "articles":
      return `hub:articles:${lang}`;
    case "projects":
      return `hub:projects:${lang}`;
    case "book":
      return `book:${lang}`;
    default:
      return `tab:${key}:${lang}`;
  }
}

export function siteTabKeyToSelectionHint(key: SiteTabKey): string {
  if (key === "articles") return "articles";
  if (key === "projects") return "projects";
  return key;
}

const TAB_ALIAS_PATTERNS: Record<SiteTabKey, RegExp[]> = {
  home: [/\bprofil\b/i, /\bprofile\b/i, /\bhjemmeside\b/i, /\bhome\s*page\b/i, /\b(forside|homepage)\b/i],
  experience: [/\berfaring\b/i, /\bexperience\b/i, /\barbeidshistorikk\b/i],
  results: [/\bresultat(er)?\b/i, /\bresults?\b/i, /\bproof\s+points?\b/i],
  articles: [
    /\binnsikt\b/i,
    /\binsights\b/i,
    /\bfaginnlegg\b/i,
    /\bfagartikler\b/i,
    /\barticles\b/i,
    /\bprofessional\s+depth\b/i,
    /\blesestier\b/i,
  ],
  book: [/\bbok\b/i, /\bbook\b/i, /\bverdiskiftet\b/i],
  projects: [
    /\bai\s*&\s*prosjekter\b/i,
    /\bai\s*&\s*projects\b/i,
    /\bportefølje\b/i,
    /\bportfolio\b/i,
    /\b(prosjektoversikt|project\s+hub)\b/i,
  ],
  consulting: [/\bconsulting\b/i, /\bkonsulent/i, /\brådgiv/i, /\bmoc\b/i, /\bmarius\s+ottesen\s+consulting\b/i],
  cv: [],
  references: [
    /\breferanser\b/i,
    /\breferanse(r|ne)?\b/i,
    /\banbefaling(er)?\b/i,
    /\btestimonials?\b/i,
    /\bendorsements?\b/i,
    /\brecommendations?\b/i,
    /\b(medarbeider|kollega|team\s*member).*(sier|uttale|says|quote)/i,
    /\b(tidligere\s+medarbeidere|former\s+(employees|colleagues))\b/i,
    /\bwhat\s+colleagues\s+say\b/i,
  ],
  contact: [/\bkontakt\b/i, /\bcontact\b/i, /\bhenvendelse\b/i],
};

/** Norwegian/English CV wording including inflected forms. */
export function detectCvIntent(question: string): boolean {
  const q = question.toLowerCase();
  return (
    /\b(cv[\s-]?en|cven|cv\b|curriculum\s+vitae|resume)\b/i.test(q) ||
    /\b(åpen\s+søknad|open\s+application)\b/i.test(q) ||
    /\b(hans|hennes|their|hans)\s+(cv|cven)\b/i.test(q) ||
    /\b(cv|cven)\s+(hans|hennes|their)\b/i.test(q)
  );
}

/** Spørsmål om hva som finnes på en bestemt fane/seksjon. */
export function isSectionTabDiscoveryQuestion(question: string): boolean {
  const q = question.trim();
  return (
    /\b(hva\s+(finn(er|es)|er)|what(?:'s| is)\s+(on|in)|what\s+can\s+(i|you)\s+find|what\s+do\s+you\s+find)\b[\s\S]{0,48}\b(under|on|in|i|på|page|fanen|tab|section)\b/i.test(
      q
    ) ||
    /\bwhat(?:'s| is)\s+on\s+the\s+(insights|profile|consulting|references)\s+page\b/i.test(q) ||
    /\bhva\s+med\s+(referanser|innsikt|consulting|cv|prosjekter|bok|erfaring|resultater|kontakt)\b/i.test(q)
  );
}

function scoreTabAliases(question: string, key: SiteTabKey): number {
  let score = 0;
  for (const re of TAB_ALIAS_PATTERNS[key]) {
    if (re.test(question)) score += 3;
  }
  return score;
}

/**
 * Best-effort mapping from natural language to a main site tab / hub source.
 * Returns null when no tab signal is strong enough.
 */
export function resolveSiteTabIntent(question: string, lang: Lang): ResolvedSiteTab | null {
  const q = question.trim();
  let best: { key: SiteTabKey; score: number } | null = null;

  if (detectCvIntent(q)) {
    best = { key: "cv", score: 12 };
  }

  for (const key of Object.keys(TAB_ALIAS_PATTERNS) as SiteTabKey[]) {
    if (key === "cv") continue;
    const score = scoreTabAliases(q, key);
    if (score <= 0) continue;
    if (!best || score > best.score) best = { key, score };
  }

  if (/\b(gjør|does|tilbyr|offer)\b[\s\S]{0,24}\b(consulting|konsulent|rådgiv)\b/i.test(q) && (!best || best.score < 6)) {
    best = { key: "consulting", score: 8 };
  }

  if (!best || best.score < 3) return null;

  const key = best.key;
  return {
    key,
    sourceId: manifestSourceIdForTab(key, lang),
    label: getTranslation(TAB_LABEL_KEYS[key], lang),
  };
}