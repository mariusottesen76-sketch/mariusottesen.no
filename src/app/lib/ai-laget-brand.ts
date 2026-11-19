/**
 * AI-laget — bildestier for porteføljeprosjektet.
 *
 * Oversikt (1:3 på /prosjekter): ai-laget-portefolje.jpg
 * Detalj (/ai-laget): ai-laget-detail-hero.jpg — horisontalt podcast-banner.
 */
export const AI_LAGET_LIVE_URL = "https://www.ai-laget.no/";

export const AI_LAGET_TEAM_URL = "https://www.ai-laget.no/oss/";

export const AI_LAGET_OVERVIEW_IMAGE = "/images/ai-laget-portefolje.jpg?v=20261117";

export const AI_LAGET_HERO_IMAGE = "/images/ai-laget-detail-hero.jpg?v=20261117";

export const AI_LAGET_PROSJEKT_IDS = new Set(["ai-laget-2026"]);

export function isAiLagetProsjekt(id: string): boolean {
  return AI_LAGET_PROSJEKT_IDS.has(id);
}