/**
 * Row Solutions — merkevare og bildestier for porteføljeprosjektet.
 *
 * Oversikt (1:3 venstre seksjon på /prosjekter): row-solutions-prosjekt.png
 * Detalj (/row-solutions): RowSolutions_ProjectHero_3x1_v2.png — 3:1 hero for detaljside.
 */
export const ROW_SOLUTIONS_OVERVIEW_IMAGE = "/images/row-solutions-prosjekt.png?v=20260828";

export const ROW_SOLUTIONS_HERO_IMAGE = "/images/RowSolutions_ProjectHero_3x1_v2.png?v=20260828";

export const ROW_SOLUTIONS_PROSJEKT_IDS = new Set(["row-solutions-2026"]);

export function isRowSolutionsProsjekt(id: string): boolean {
  return ROW_SOLUTIONS_PROSJEKT_IDS.has(id);
}
