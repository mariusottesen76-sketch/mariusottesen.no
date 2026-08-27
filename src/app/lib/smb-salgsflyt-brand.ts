export const SMB_SALGSFLYT_APP_URL =
  "https://smb-salgsflyt-sjekken-744893320985.europe-west2.run.app/";

export const SMB_SALGSFLYT_PILOT_PATH = "/salgsflyt-sjekken";

/** Konsekvent modenhetslabel — verktøytype · kundebruk. */
export const SMB_SALGSFLYT_MATURITY_LABEL = {
  no: "Tilgangsstyrt diagnoseverktøy · Klar for avgrenset kundebruk",
  en: "Access-controlled diagnostic tool · Ready for limited customer use",
} as const;

export const SMB_SALGSFLYT_PROSJEKT_IDS = new Set(["smb-salgsflyt-sjekken-2026"]);

export function isSmbSalgsflytProsjekt(id: string): boolean {
  return SMB_SALGSFLYT_PROSJEKT_IDS.has(id);
}
