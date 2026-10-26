import { type ProsjektType } from "./predictive-sales-coach";
import { SMB_SALGSFLYT_OVERVIEW_IMAGE } from "../../lib/smb-salgsflyt-brand";

/** Kort metadata for /prosjekter — full dokumentasjon på /salgsflyt-sjekken */
export const smbSalgsflytSjekken: ProsjektType = {
  id: "smb-salgsflyt-sjekken-2026",
  tittel: {
    no: "SMB Salgsflyt-sjekken 2.0 – Fra salgsfriksjon til prioriterte tiltak",
    en: "SMB Sales Flow Check 2.0 – From sales friction to prioritised actions",
  },
  teaser: {
    no: "Lederorientert diagnose med 12 suksessdimensjoner, 36 spørsmål og prioriterte tiltak for bedre salgsflyt — utviklet av MOC.",
    en: "Leadership-oriented diagnosis with 12 success dimensions, 36 questions and prioritised actions for better sales flow — developed by MOC.",
  },
  bildeUrl: SMB_SALGSFLYT_OVERVIEW_IMAGE,
  bildeRamme: "natural",
  dato: "2026-05-08",
  visningsDato: "26.10.26",
  bildeHint: {
    no: "Klikk på bildet for å se SMB Salgsflyt-sjekken 2.0 i større format.",
    en: "Click the image to view SMB Sales Flow Check 2.0 in a larger format.",
  },
  innhold: { no: "", en: "" },
};
