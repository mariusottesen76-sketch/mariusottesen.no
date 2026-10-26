/** v2.0 pilot (Cloud Run) — tilgangsstyrt; ingen koder eller admin-URL-er på nettsiden. */
export const SMB_SALGSFLYT_APP_URL =
  "https://smb-salgsflyt-pilot-586303019432.europe-west1.run.app";

export const SMB_SALGSFLYT_PILOT_PATH = "/salgsflyt-sjekken";

/** 1:3 oversiktsbilde på /prosjekter (vertikal app-forside). */
export const SMB_SALGSFLYT_OVERVIEW_IMAGE = "/images/smb-salgsflyt-sjekken-hjemmeside.png?v=20261026";

/** 3:1 detaljbanner på /salgsflyt-sjekken. */
export const SMB_SALGSFLYT_HERO_IMAGE = "/images/salgsflyt-sjekken-hero.png?v=20261026";

/** Eier: Marius Ottesen Consulting (MOC). */
export const SMB_SALGSFLYT_OWNER_LABEL = {
  no: "Marius Ottesen Consulting (MOC)",
  en: "Marius Ottesen Consulting (MOC)",
} as const;

export const SMB_SALGSFLYT_MATURITY_LABEL = {
  no: "Tilgangsstyrt diagnoseverktøy · Klar for avgrenset kundebruk",
  en: "Access-controlled diagnostic tool · Ready for limited customer use",
} as const;

export const SMB_SALGSFLYT_PROSJEKT_IDS = new Set(["smb-salgsflyt-sjekken-2026"]);

export function isSmbSalgsflytProsjekt(id: string): boolean {
  return SMB_SALGSFLYT_PROSJEKT_IDS.has(id);
}
