/** Standard visningsflate for project_v2-prosjektbilder på /prosjekter (referanse: AI Transformation). */
export const PROJECT_OVERVIEW_IMAGE = {
  desktopWidthPx: 232,
  desktopHeightPx: 696,
  mobileMaxWidthPx: 260,
  aspectRatio: "1 / 3",
} as const;

/** Felles hero-/bannerstandard på alle prosjektdetaljsider — 3:1 (ca. 40 % lavere enn 16:9 ved 1200 px bredde). */
export const PROJECT_DETAIL_HERO = {
  maxWidthPx: 1200,
  maxHeightPx: 400,
  aspectRatio: "3 / 1",
  recommendedWidthPx: 1800,
  recommendedHeightPx: 600,
  altRecommendedWidthPx: 1500,
  altRecommendedHeightPx: 500,
} as const;

export type DetailHeroFit = "cover" | "contain";

/** Standard object-position når ikke satt per prosjekt. */
export const PROJECT_DETAIL_HERO_DEFAULT_OBJECT_POSITION = "center";

export function resolveDetailHeroFit(needsNewDetailHero?: boolean): DetailHeroFit {
  return needsNewDetailHero ? "contain" : "cover";
}
