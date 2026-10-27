/** Offisiell kundeadresse — eget domene (MOC). */
export const SMB_SALGSFLYT_APP_URL = "https://salgsflytsjekken.no/";

export const SMB_SALGSFLYT_PUBLIC_DOMAIN = "salgsflytsjekken.no";

export const SMB_SALGSFLYT_PILOT_PATH = "/salgsflyt-sjekken";

/** 1:3 oversiktsbilde på /prosjekter (salgsflytsjekken-vertikal-2). */
export const SMB_SALGSFLYT_OVERVIEW_IMAGE =
  "/images/salgsflytsjekken-vertikal-2.jpg?v=20261027";

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

/** Kort status på prosjektkort (/prosjekter). */
export const SMB_SALGSFLYT_OVERVIEW_STATUS = {
  no: `${SMB_SALGSFLYT_MATURITY_LABEL.no}. Tilgjengelig på eget domene (${SMB_SALGSFLYT_PUBLIC_DOMAIN}).`,
  en: `${SMB_SALGSFLYT_MATURITY_LABEL.en}. Available on its own domain (${SMB_SALGSFLYT_PUBLIC_DOMAIN}).`,
} as const;

/** Utfyllende ingress på detaljsiden. */
export const SMB_SALGSFLYT_EXECUTIVE_SUMMARY = {
  no: "SMB Salgsflyt-sjekken 2.0 er en selvstendig, tilgangsstyrt diagnoseplattform for SMB-ledere, nå tilgjengelig på eget domene: salgsflytsjekken.no. Løsningen er utviklet av Marius Ottesen Consulting og er klar for avgrenset kundebruk.",
  en: "SMB Sales Flow Check 2.0 is an access-controlled commercial diagnostic for SME leaders, now available on its own domain: salgsflytsjekken.no. Developed by Marius Ottesen Consulting and ready for limited customer use.",
} as const;

/** Diskret merknad under CTA på detaljsiden. */
export const SMB_SALGSFLYT_DETAIL_ACCESS_NOTE = {
  no: "Løsningen er tilgjengelig på eget domene, salgsflytsjekken.no, og krever tilgangskode i pilotperioden.",
  en: "The solution is available on its own domain, salgsflytsjekken.no, and requires an access code during the pilot period.",
} as const;

export const SMB_SALGSFLYT_PROSJEKT_IDS = new Set(["smb-salgsflyt-sjekken-2026"]);

export function isSmbSalgsflytProsjekt(id: string): boolean {
  return SMB_SALGSFLYT_PROSJEKT_IDS.has(id);
}
