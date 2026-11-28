import type { Lang } from "../LanguageContext";

/** Godkjent juridisk fakta om MOC — speiler personvern og structured data (Brønnøysund). */
export const MOC_ORG_NUMBER_DISPLAY = "937 102 801";
export const MOC_ORG_NUMBER_DIGITS = "937102801";
export const MOC_BRREG_ENTITY_URL = `https://virksomhet.brreg.no/nb/oppslag/enheter/${MOC_ORG_NUMBER_DIGITS}`;

export function formatMocLegalFormAnswer(lang: Lang): string {
  return lang === "no"
    ? `Marius Ottesen Consulting (MOC) er registrert som enkeltpersonforetak (ENK) med organisasjonsnummer ${MOC_ORG_NUMBER_DISPLAY}. Næringsvirksomheten drives av Marius Ottesen under det registrerte foretaksnavnet MARIUS OTTESEN CONSULTING; «Marius Ottesen Consulting» brukes som navn på nettsiden og i kommunikasjon. Row Solutions er et eget kommersielt samarbeid — felles markedsnavn, ikke eget registrert AS, og adskilt fra MOC.`
    : `Marius Ottesen Consulting (MOC) is registered as a sole proprietorship (ENK) with organisation number ${MOC_ORG_NUMBER_DISPLAY}. The business is operated by Marius Ottesen under the registered name MARIUS OTTESEN CONSULTING; “Marius Ottesen Consulting” is used as the site and communication name. Row Solutions is a separate commercial collaboration — shared brand name, not a separately registered company, and distinct from MOC.`;
}