import { getAllProjectV2Records } from "../data/projects-v2/registry";

/** Query-parametre for prosjektrelaterte henvendelser fra project_v2 CTA-er. */
export const CONTACT_QUERY_TEMA = {
  tilgangskode: "tilgangskode",
  demonstrasjon: "demonstrasjon",
  anvendelse: "anvendelse",
  samarbeid: "samarbeid",
} as const;

export type ContactQueryTema = (typeof CONTACT_QUERY_TEMA)[keyof typeof CONTACT_QUERY_TEMA];

export type ProjectContactQuery = {
  tema: ContactQueryTema;
  prosjekt: string;
};

/** @deprecated Bruk CONTACT_QUERY_TEMA.tilgangskode */
export const ACCESS_CODE_QUERY_TEMA = CONTACT_QUERY_TEMA.tilgangskode;

/** @deprecated Bruk ProjectContactQuery */
export type AccessCodeContactQuery = ProjectContactQuery;

const VALID_TEMA = new Set<string>(Object.values(CONTACT_QUERY_TEMA));

export function buildProjectContactHref(tema: ContactQueryTema, prosjektSlug: string): string {
  const params = new URLSearchParams({
    tema,
    prosjekt: prosjektSlug,
  });
  return `/consulting?${params.toString()}#cons-dialog-heading`;
}

export function buildAccessCodeContactHref(prosjektSlug: string): string {
  return buildProjectContactHref(CONTACT_QUERY_TEMA.tilgangskode, prosjektSlug);
}

/** @deprecated Alias for buildProjectContactHref */
export function buildConsultingAccessCodeHref(prosjektSlug: string): string {
  return buildAccessCodeContactHref(prosjektSlug);
}

export function parseProjectContactQuery(search: string): ProjectContactQuery | null {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const tema = params.get("tema");
  const prosjekt = params.get("prosjekt")?.trim();
  if (!tema || !prosjekt || !VALID_TEMA.has(tema)) return null;
  return { tema: tema as ContactQueryTema, prosjekt };
}

export function parseAccessCodeContactQuery(search: string): ProjectContactQuery | null {
  const query = parseProjectContactQuery(search);
  if (!query || query.tema !== CONTACT_QUERY_TEMA.tilgangskode) return null;
  return query;
}

/** Visningsnavn for kjente project_v2-slugs i kontekstbanner og skjema. */
export const PROJECT_SLUG_DISPLAY: Record<string, { no: string; en: string }> = {
  "predictive-sales-coach": {
    no: "The Predictive Sales Coach v2.0",
    en: "The Predictive Sales Coach v2.0",
  },
  flowsignal: {
    no: "FlowSignal v1.0",
    en: "FlowSignal v1.0",
  },
  "ai-readiness-scan": {
    no: "AI Readiness Scan",
    en: "AI Readiness Scan",
  },
  "salgsflyt-sjekken": {
    no: "SMB Salgsflyt-sjekken",
    en: "SMB Sales Flow Check",
  },
};

export function getProjectSlugDisplayName(slug: string, lang: "no" | "en"): string {
  const mapped = PROJECT_SLUG_DISPLAY[slug]?.[lang];
  if (mapped) return mapped;

  const fromRegistry = getAllProjectV2Records().find((p) => p.slug === slug);
  if (fromRegistry) return fromRegistry.title[lang];

  return slug;
}

type ContactTemaFormCopy = {
  kategori: { no: string; en: string };
  bannerTitle: { no: string; en: string };
  beskrivelsePrefix: (prosjektNavn: string, lang: "no" | "en") => string;
};

const TEMA_FORM_COPY: Record<ContactQueryTema, ContactTemaFormCopy> = {
  tilgangskode: {
    kategori: { no: "Forespørsel om tilgangskode", en: "Request access code" },
    bannerTitle: { no: "Forespørsel om tilgangskode", en: "Request access code" },
    beskrivelsePrefix: (navn, lang) =>
      lang === "no" ? `Jeg ønsker tilgangskode til ${navn}.` : `I would like an access code for ${navn}.`,
  },
  demonstrasjon: {
    kategori: { no: "Forespørsel om demonstrasjon", en: "Request for demonstration" },
    bannerTitle: { no: "Forespørsel om demonstrasjon", en: "Request for demonstration" },
    beskrivelsePrefix: (navn, lang) =>
      lang === "no"
        ? `Jeg ønsker å ta kontakt om en demonstrasjon av ${navn}.`
        : `I would like to get in touch about a demonstration of ${navn}.`,
  },
  anvendelse: {
    kategori: { no: "Mulig anvendelse av prosjekt", en: "Potential project application" },
    bannerTitle: { no: "Kontakt om mulig anvendelse", en: "Contact about potential use" },
    beskrivelsePrefix: (navn, lang) =>
      lang === "no"
        ? `Jeg ønsker å ta kontakt om mulig anvendelse av ${navn}.`
        : `I would like to get in touch about potential use of ${navn}.`,
  },
  samarbeid: {
    kategori: { no: "Mulig fremtidig samarbeid", en: "Possible future collaboration" },
    bannerTitle: { no: "Kontakt om samarbeid", en: "Contact about collaboration" },
    beskrivelsePrefix: (navn, lang) =>
      lang === "no"
        ? `Jeg ønsker å ta kontakt om mulig samarbeid knyttet til ${navn}.`
        : `I would like to get in touch about potential collaboration related to ${navn}.`,
  },
};

export function getContactTemaKategori(tema: ContactQueryTema, lang: "no" | "en"): string {
  return TEMA_FORM_COPY[tema].kategori[lang];
}

export function getContactTemaBannerTitle(tema: ContactQueryTema, lang: "no" | "en"): string {
  return TEMA_FORM_COPY[tema].bannerTitle[lang];
}

export function getContactTemaBeskrivelsePrefix(
  tema: ContactQueryTema,
  prosjektSlug: string,
  lang: "no" | "en"
): string {
  const prosjektNavn = getProjectSlugDisplayName(prosjektSlug, lang);
  return TEMA_FORM_COPY[tema].beskrivelsePrefix(prosjektNavn, lang);
}
