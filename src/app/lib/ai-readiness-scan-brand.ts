export const AI_READINESS_SCAN_APP_URL =
  "https://ai-readiness-scan-773132199483.europe-west2.run.app/";

export const AI_READINESS_SCAN_PROSJEKT_PATH = "/ai-readiness-scan";

/** 1:3 oversiktsbilde på /prosjekter. */
export const AI_READINESS_SCAN_OVERVIEW_IMAGE = "/images/Row_Project_AIReadinessScan_Detail_MASTER_v1.png";

/** Konsekvent modenhetslabel — verktøytype · kundebruk. */
export const AI_READINESS_SCAN_MATURITY_LABEL = {
  no: "Tilgangsstyrt kartleggingsverktøy · Klar for avgrenset kundebruk",
  en: "Access-controlled mapping tool · Ready for limited customer use",
} as const;

export const AI_READINESS_SCAN_PROSJEKT_IDS = new Set(["ai-readiness-scan-2026-06"]);

export function isAiReadinessScanProsjekt(id: string): boolean {
  return AI_READINESS_SCAN_PROSJEKT_IDS.has(id);
}
