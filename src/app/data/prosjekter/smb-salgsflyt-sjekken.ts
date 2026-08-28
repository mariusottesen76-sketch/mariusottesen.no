import { type ProsjektType } from "./predictive-sales-coach";
import { SMB_SALGSFLYT_OVERVIEW_IMAGE } from "../../lib/smb-salgsflyt-brand";

/** Kort metadata for /prosjekter — full dokumentasjon på /salgsflyt-sjekken */
export const smbSalgsflytSjekken: ProsjektType = {
  id: "smb-salgsflyt-sjekken-2026",
  tittel: {
    no: "SMB Salgsflyt-sjekken: Interaktiv diagnose og AI-rapportering",
    en: "SMB Sales Flow Check: Interactive diagnosis and AI reporting",
  },
  teaser: {
    no: "Interaktiv diagnose med scoring, AI-analyse, rapportering og administrativ oppfølging — dokumentert på egen prosjektside.",
    en: "Interactive diagnosis with scoring, AI analysis, reporting and administrative follow-up — documented on a dedicated project page.",
  },
  bildeUrl: SMB_SALGSFLYT_OVERVIEW_IMAGE,
  bildeRamme: "natural",
  dato: "2026-05-08",
  visningsDato: "16.06.26",
  bildeHint: {
    no: "Klikk på bildet for å se SMB Salgsflyt-sjekken i større format.",
    en: "Click the image to view SMB Sales Flow Check in a larger format.",
  },
  innhold: { no: "", en: "" },
};
