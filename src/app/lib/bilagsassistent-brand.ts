/** Ingen offentlig demo-URL — kun porteføljedokumentasjon. */

export const BILAGSASSISTENT_PROSJEKT_PATH = "/bilagsassistent";

/** 1:3 oversiktsbilde på /prosjekter. */
export const BILAGSASSISTENT_OVERVIEW_IMAGE = "/images/bilagsassistent-vertikal.png?v=20260919";

/** 3:1 hero på detaljside. */
export const BILAGSASSISTENT_HERO_IMAGE = "/images/bilagsassistent-horisontal.png?v=20260919";

/** TODO(asset): bilagsassistent-workflow — supplerende arbeidsflyt/kontrollkø. */
export const BILAGSASSISTENT_WORKFLOW_IMAGE = "/images/bilagsassistent-workflow.png";

export const BILAGSASSISTENT_MATURITY_LABEL = {
  no: "Ferdigstilt funksjonell MVP · Pilotklar",
  en: "Completed functional MVP · Pilot-ready",
} as const;

export const BILAGSASSISTENT_ALT = {
  overview: {
    no: "Bilagsassistent – automatisert innhenting og strukturering av kvitteringer og bilag",
    en: "Receipt Assistant – automated collection and structuring of receipts and vouchers",
  },
  hero: {
    no: "Bilagsassistent – automatisert innhenting og strukturering av kvitteringer og bilag",
    en: "Receipt Assistant – automated collection and structuring of receipts and vouchers",
  },
  workflow: {
    no: "Arbeidsflyt fra dokumentkilde til registrert og arkivert bilag",
    en: "Workflow from document source to registered and archived voucher",
  },
  controlQueue: {
    no: "Bilagsassistent – kontrollkø for usikre bilag",
    en: "Receipt Assistant – review queue for uncertain vouchers",
  },
} as const;

export const BILAGSASSISTENT_PROSJEKT_IDS = new Set(["bilagsassistent-2026-09"]);

export function isBilagsassistentProsjekt(id: string): boolean {
  return BILAGSASSISTENT_PROSJEKT_IDS.has(id);
}
