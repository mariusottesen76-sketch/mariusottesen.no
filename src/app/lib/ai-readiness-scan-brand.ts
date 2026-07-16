export const AI_READINESS_SCAN_APP_URL =
  "https://ai-readiness-scan-773132199483.europe-west2.run.app/";

export const AI_READINESS_SCAN_PROSJEKT_PATH = "/ai-readiness-scan";

export const AI_READINESS_SCAN_PROSJEKT_IDS = new Set(["ai-readiness-scan-2026-06"]);

export function isAiReadinessScanProsjekt(id: string): boolean {
  return AI_READINESS_SCAN_PROSJEKT_IDS.has(id);
}
