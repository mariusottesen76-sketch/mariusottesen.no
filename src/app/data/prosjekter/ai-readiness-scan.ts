import { type ProsjektType } from "./predictive-sales-coach";
import { AI_READINESS_SCAN_OVERVIEW_IMAGE } from "../../lib/ai-readiness-scan-brand";

/** Kort metadata for /prosjekter — full dokumentasjon på /ai-readiness-scan */
export const aiReadinessScan: ProsjektType = {
  id: "ai-readiness-scan-2026-06",
  tittel: {
    no: "AI Readiness Scan: Kartlegging av AI-beredskap og gjennomføringsevne",
    en: "AI Readiness Scan: Mapping AI readiness and execution capability",
  },
  teaser: {
    no: "Strukturert kartlegging av AI-modenhet, prioriteringer og neste steg — dokumentert på egen prosjektside.",
    en: "Structured mapping of AI maturity, priorities and next steps — documented on a dedicated project page.",
  },
  bildeUrl: AI_READINESS_SCAN_OVERVIEW_IMAGE,
  bildeRamme: "natural",
  dato: "2026-05-22",
  visningsDato: "25.06.26",
  bildeHint: {
    no: "Klikk på bildet for å se AI Readiness Scan i større format.",
    en: "Click the image to view AI Readiness Scan in a larger format.",
  },
  innhold: { no: "", en: "" },
};
