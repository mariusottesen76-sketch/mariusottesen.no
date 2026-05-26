/** PSCv6 merkevarefarger (som i appen). */
export const PSC_COLORS = {
  background: "#0B1120",
  text: "#FFFFFF",
  accent: "#E30613",
} as const;

export const PSC_PROSJEKT_IDS = new Set([
  "predictive-sales-coach-2026",
  "psc-promo-video-moc-2026",
]);

export function isPscProsjekt(id: string): boolean {
  return PSC_PROSJEKT_IDS.has(id);
}

/** Markerer PSC-versjoner (v6) med rød accent – PSCv6 / (PSCv6), uten mellomrom før v. */
export function applyPscBrandingHtml(html: string): string {
  return html
    .replace(/\(PSC(v\d+)\)/gi, '(<span class="psc-mark">PSC</span><span class="psc-v">$1</span>)')
    .replace(/\(PSC\)\s*(v\d+)/g, '(<span class="psc-mark">PSC</span><span class="psc-v">$1</span>)')
    .replace(/PSC\s*(v\d+)/g, '<span class="psc-mark">PSC</span><span class="psc-v">$1</span>')
    .replace(/\(PSC\)/g, '<span class="psc-mark">(PSC)</span>');
}

export function applyPscBrandingPlain(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return applyPscBrandingHtml(escaped);
}
