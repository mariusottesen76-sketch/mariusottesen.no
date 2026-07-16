/** Query-parametre for tilgangskode-henvendelser fra project_v2 CTA-er. */
export const ACCESS_CODE_QUERY_TEMA = "tilgangskode";

export type AccessCodeContactQuery = {
  tema: typeof ACCESS_CODE_QUERY_TEMA;
  prosjekt: string;
};

export function buildAccessCodeContactHref(prosjektSlug: string): string {
  const params = new URLSearchParams({
    tema: ACCESS_CODE_QUERY_TEMA,
    prosjekt: prosjektSlug,
  });
  return `/kontakt?${params.toString()}`;
}

export function buildConsultingAccessCodeHref(prosjektSlug: string): string {
  const params = new URLSearchParams({
    tema: ACCESS_CODE_QUERY_TEMA,
    prosjekt: prosjektSlug,
  });
  return `/consulting?${params.toString()}#cons-dialog-heading`;
}

export function parseAccessCodeContactQuery(
  search: string
): AccessCodeContactQuery | null {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const tema = params.get("tema");
  const prosjekt = params.get("prosjekt")?.trim();
  if (tema !== ACCESS_CODE_QUERY_TEMA || !prosjekt) return null;
  return { tema: ACCESS_CODE_QUERY_TEMA, prosjekt };
}

/** Visningsnavn for kjente project_v2-slugs i kontekstbanner. */
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
  return PROJECT_SLUG_DISPLAY[slug]?.[lang] ?? slug;
}
