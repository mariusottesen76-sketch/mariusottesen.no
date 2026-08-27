/** PSCv2.0 merkevarefarger (som i appen). */
export const PSC_COLORS = {
  background: "#0B1120",
  text: "#FFFFFF",
  accent: "#E30613",
} as const;

export const PSC_APP_URL = "https://pscv6-744893320985.europe-west2.run.app/";

export const PSC_VERSION = "v2.0";
export const PSC_VERSION_LABEL = "PSCv2.0";

export const PSC_FULL_TITLE = {
  no: "The Predictive Sales Coach v2.0",
  en: "The Predictive Sales Coach v2.0",
} as const;

/** Konsekvent modenhetslabel — verktøytype · kundebruk. */
export const PSC_MATURITY_LABEL = {
  no: "Tilgangsstyrt salgsutviklingsverktøy · Klar for avgrenset kundebruk",
  en: "Access-controlled sales development tool · Ready for limited customer use",
} as const;

/** Primær kortbeskrivelse — brukes konsekvent på kort, metadata og internlenker. */
export const PSC_SHORT_DESCRIPTION = {
  no: "AI-basert salgstrening og møteforberedelse for B2B-salg, med realistiske kundesimuleringer, strukturert feedback og salgslederinnsikt.",
  en: "AI-based sales training and meeting preparation for B2B sales, with realistic customer simulations, structured feedback and sales leadership insight.",
} as const;

/** SEO title og description for /psc — unike metadata, uten dobbelt merkenavn. */
export const PSC_SEO_TITLE = {
  no: "The Predictive Sales Coach v2.0 | AI-basert salgstrening",
  en: "The Predictive Sales Coach v2.0 | AI-based sales training",
} as const;

export const PSC_SEO_DESCRIPTION = {
  no: "AI-basert salgstrening og møteforberedelse for B2B-salg, med realistiske kundesimuleringer, strukturert feedback, scorecard og salgslederinnsikt.",
  en: "AI-based sales training and meeting preparation for B2B sales, with realistic customer simulations, structured feedback, scorecard and sales leadership insight.",
} as const;

export const PSC_CANONICAL_URL = "https://www.mariusottesen.no/psc";

export const PSC_OG_IMAGE = "https://www.mariusottesen.no/images/predictive-sales-coach-hero.png?v=20260719b";

export const PSC_PROSJEKT_IDS = new Set([
  "predictive-sales-coach-2026",
  "psc-promo-video-moc-2026",
]);

export function isPscProsjekt(id: string): boolean {
  return PSC_PROSJEKT_IDS.has(id);
}

/** Rød v2.0 kun i prosjektoverskrift – «The Predictive Sales Coach v2.0». */
export function applyPscTitleBrandingHtml(html: string): string {
  return html.replace(
    /(The Predictive Sales Coach)\s+(v[\d.]+)/gi,
    '$1 <span class="psc-v">$2</span>'
  );
}

/** Markerer PSC-versjoner med rød accent – PSCv2.0 / (PSCv2.0), uten mellomrom før v. */
export function applyPscBrandingHtml(html: string): string {
  return html
    .replace(/\(PSC(v[\d.]+)\)/gi, '(<span class="psc-mark">PSC</span><span class="psc-v">$1</span>)')
    .replace(/\(PSC\)\s*(v[\d.]+)/g, '(<span class="psc-mark">PSC</span><span class="psc-v">$1</span>)')
    .replace(/PSC(v[\d.]+)/g, '<span class="psc-mark">PSC</span><span class="psc-v">$1</span>')
    .replace(/\(PSC\)/g, '<span class="psc-mark">(PSC)</span>');
}

export function applyPscBrandingPlain(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return applyPscBrandingHtml(escaped);
}
