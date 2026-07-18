/** Editorial rekkefølge på /prosjekter — støtter porteføljehierarki (Del C/E). */
export const PROSJEKT_PORTFOLIO_ORDER: string[] = [
  "ai-transformation-value-realization",
  "control-tower",
  "predictive-sales-coach-2026",
  "flowsignal-2026-05",
  "ai-readiness-scan-2026-06",
  "smb-salgsflyt-sjekken-2026",
  "mariusottesen-no-2025",
  "prosjektoppgave-strategisk-implementering-2026",
  "skoyenasen-tannklinikk-2026",
  "ai-assistert-innsikts-og-opportunity-agent-2026",
  "ai-assistert-innsikts-og-innholdsagent-2026",
  "ai-arkitektur-beslutningsstotte-2026",
  "ai-value-lab-oslo-2026",
  "ai-faginnlegg-serie-2026",
  "psc-promo-video-moc-2026",
];

export function sortProsjekterByPortfolioOrder<T extends { id: string }>(projects: T[]): T[] {
  const order = new Map(PROSJEKT_PORTFOLIO_ORDER.map((id, index) => [id, index]));
  return [...projects].sort(
    (a, b) => (order.get(a.id) ?? PROSJEKT_PORTFOLIO_ORDER.length) - (order.get(b.id) ?? PROSJEKT_PORTFOLIO_ORDER.length)
  );
}
