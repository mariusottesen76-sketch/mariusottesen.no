/** PSCv2.0 merkevarefarger (som i appen). */
export const PSC_COLORS = {
  background: "#0B1120",
  text: "#FFFFFF",
  accent: "#E30613",
} as const;

export const PSC_APP_URL = "https://pscv6-744893320985.europe-west2.run.app/";

export const PSC_VERSION = "v2.0";
export const PSC_VERSION_LABEL = "PSCv2.0";

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
