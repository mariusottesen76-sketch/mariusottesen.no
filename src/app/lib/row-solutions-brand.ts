/**
 * Row Solutions — merkevare og bildestier for porteføljeprosjektet.
 *
 * Oversikt (1:3 venstre seksjon på /prosjekter): row-solutions-prosjekt.png
 * Detalj (/row-solutions): row-solutions-detail-hero.jpg — horisontalt kampanjebanner.
 */
/** Offisiell live-nettside (Production). */
export const ROW_SOLUTIONS_LIVE_URL = "https://rowsolutions.no";

export const ROW_SOLUTIONS_OVERVIEW_IMAGE = "/images/row-solutions-prosjekt.png?v=20260828";

export const ROW_SOLUTIONS_HERO_IMAGE = "/images/row-solutions-detail-hero.jpg?v=20261117";

export const ROW_SOLUTIONS_PROSJEKT_IDS = new Set(["row-solutions-2026"]);

export function isRowSolutionsProsjekt(id: string): boolean {
  return ROW_SOLUTIONS_PROSJEKT_IDS.has(id);
}
