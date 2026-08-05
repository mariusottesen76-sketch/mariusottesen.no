import { Lang } from "../LanguageContext";

/** Felles 6 punkter — profil og resultater bygger på samme struktur. */
export const PROFIL_PROOF_POINTS: Record<Lang, string[]> = {
  no: [
    "Ledet nasjonale salgsorganisasjoner med 10 - 20 ansatte.",
    "Personal-, P/L- og KPI-ansvar i komplekse B2B-miljøer.",
    "67 % salgsvekst i Norengros Johs. Olsen.",
    "Ledet team til global #1-ranking i Mundipharma.",
    "Etablerte tydeligere KPI-, styrings- og salgsmodell på tvers av 18 driftssteder i Franzefoss.",
    "Bygget praktiske AI-prototyper, plattformer, arbeidsflyter og beslutningsmodeller for salg, team, beredskap og operativ planlegging.",
  ],
  en: [
    "Led national sales organisations with 10–20 people.",
    "People, P&L and KPI accountability in complex B2B environments.",
    "67% revenue growth at Norengros Johs. Olsen.",
    "Led the team to a global #1 ranking at Mundipharma.",
    "Established a clearer KPI, governance and sales model across 18 operational sites at Franzefoss.",
    "Built practical AI prototypes, platforms, workflows and decision models for sales, team development, readiness and operational planning.",
  ],
};

export function getProfilProofPoints(lang: Lang): string[] {
  return PROFIL_PROOF_POINTS[lang];
}

/** Samme seks temaer; 67 % vises allerede i nøkkeltall-kortene over. */
export function getResultaterProofPoints(lang: Lang): string[] {
  const base = PROFIL_PROOF_POINTS[lang];
  const vekstmål =
    lang === "no"
      ? "Bidro til selskapets vekstmål om NOK 1 mrd. gjennom kommersiell utvikling og teamledelse."
      : "Contributed to the company's NOK 1 billion growth target through commercial development and team leadership.";
  return [base[0], base[1], vekstmål, base[3], base[4], base[5]];
}
