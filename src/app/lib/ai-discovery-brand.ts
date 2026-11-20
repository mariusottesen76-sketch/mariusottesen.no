/**
 * AI Discovery — partnerutviklet løsning (Thomas Holm / Row Solutions).
 *
 * Oversikt (1:3 på /prosjekter): ai-discovery-portefolje.png
 * Detalj (/ai-discovery): ai-discovery-hero.png — 3:1 landscape.
 */
export const AI_DISCOVERY_CHECK_URL = "https://aidiscovery.no/";

export const AI_DISCOVERY_PLAYBOOK_URL = "https://aidiscovery.no/playbook";

export const AI_DISCOVERY_ROW_METHOD_URL = "https://rowsolutions.no/metoder/ai-discovery";

export const AI_DISCOVERY_IMAGE_VERSION = "20261120a";

export const AI_DISCOVERY_OVERVIEW_IMAGE = `/images/ai-discovery-portefolje.png?v=${AI_DISCOVERY_IMAGE_VERSION}`;

export const AI_DISCOVERY_HERO_IMAGE = `/images/ai-discovery-hero.png?v=${AI_DISCOVERY_IMAGE_VERSION}`;

export const AI_DISCOVERY_PARTNER_LABEL: { no: string; en: string } = {
  no: "Partnerutviklet løsning · Thomas Holm · Tilbys gjennom Row Solutions",
  en: "Partner-developed solution · Thomas Holm · Offered through Row Solutions",
};

export const AI_DISCOVERY_PROSJEKT_IDS = new Set(["ai-discovery-2026-11"]);

export function isAiDiscoveryProsjekt(id: string): boolean {
  return AI_DISCOVERY_PROSJEKT_IDS.has(id);
}