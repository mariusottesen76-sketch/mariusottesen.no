import { type ProsjektType } from "./predictive-sales-coach";

/** Kuratert «hub» under AI-prosjekter som peker leseren til alle AI-innlegg under Faginnlegg. */
export const aiFaginnleggHub: ProsjektType = {
  id: "ai-faginnlegg-serie-2026",
  tittel: {
    no: "Faginnlegg: AI og fremtidens teknologiledelse",
    en: "Articles: AI and next-generation technology leadership",
  },
  teaser: {
    no: "Teori, rammeverk, masterarbeid fra BI, rapportutdrag, verktøy og praktiske erfaringer samlet i et løpende fagspor — med lenke til /faginnlegg.",
    en: "Theory, frameworks, BI master's work, report excerpts, tools and practical experience gathered in an ongoing professional track — with link to /articles.",
  },
  bildeUrl: "/images/ai-faginnlegg-hjemmeside.png?v=20260717",
  dato: "2026-01-02",
  visningsDato: "Løpende oppdatert",
  bildeHint: {
    no: "Klikk på bildet for å se illustrasjonen i større format.",
    en: "Click the image to view the illustration in a larger format.",
  },
  innhold: { no: "", en: "" },
};
