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
  no: "Tilgangsstyrt diagnoseverktøy · utviklingsversjon",
  en: "Access-controlled diagnostic tool · development version",
} as const;

/** Kort status på prosjektkort (/prosjekter). */
export const SMB_SALGSFLYT_OVERVIEW_STATUS = {
  no: `${SMB_SALGSFLYT_MATURITY_LABEL.no}. Publisert på ${SMB_SALGSFLYT_PUBLIC_DOMAIN}; tilgang med kode etter avtale.`,
  en: `${SMB_SALGSFLYT_MATURITY_LABEL.en}. Published on ${SMB_SALGSFLYT_PUBLIC_DOMAIN}; access with code by agreement.`,
} as const;

/** Utfyllende ingress på detaljsiden. */
export const SMB_SALGSFLYT_EXECUTIVE_SUMMARY = {
  no: "SMB Salgsflyt-sjekken 2.0 er en selvstendig, tilgangsstyrt diagnoseplattform for SMB-ledere, tilgjengelig på eget domene: salgsflytsjekken.no. Løsningen er utviklet av Marius Ottesen Consulting. Det er en utviklingsversjon med tilgang etter avtale — ikke en generell kundelansering.",
  en: "SMB Sales Flow Check 2.0 is a standalone, access-controlled diagnostic platform for SME leaders, available on its own domain: salgsflytsjekken.no. Developed by Marius Ottesen Consulting. It is a development version with access by agreement — not a general customer launch.",
} as const;

/** Diskret merknad under CTA på detaljsiden. */
export const SMB_SALGSFLYT_DETAIL_ACCESS_NOTE = {
  no: "Løsningen er tilgjengelig på eget domene, salgsflytsjekken.no, og krever tilgangskode etter avtale.",
  en: "The solution is available on its own domain, salgsflytsjekken.no, and requires an access code by agreement.",
} as const;

/** Kort tilgang-merknad på pilotlanding (hero). */
export const SMB_SALGSFLYT_PILOT_HERO_ACCESS_NOTE = {
  no: "Tilgang med kode etter avtale. Ingen koder publiseres på nettsiden.",
  en: "Access with code by agreement. No codes are published on the website.",
} as const;

/** Avsnitt «Status og tilgang» på pilotlanding. */
export const SMB_SALGSFLYT_PILOT_STATUS_BODY = {
  no: `SMB Salgsflyt-sjekken 2.0 er publisert på ${SMB_SALGSFLYT_PUBLIC_DOMAIN} som tilgangsstyrt diagnoseverktøy (utviklingsversjon). Tilgang skjer med kode etter avtale.`,
  en: `SMB Sales Flow Check 2.0 is published on ${SMB_SALGSFLYT_PUBLIC_DOMAIN} as an access-controlled diagnostic tool (development version). Access is with a code by agreement.`,
} as const;

export const SMB_SALGSFLYT_PROSJEKT_IDS = new Set(["smb-salgsflyt-sjekken-2026"]);

export function isSmbSalgsflytProsjekt(id: string): boolean {
  return SMB_SALGSFLYT_PROSJEKT_IDS.has(id);
}
