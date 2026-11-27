import type { Lang } from "../LanguageContext";

/**
 * Godkjent fakta om Row Solutions for assistenten.
 * Deltakerstruktur: Marius Ottesen, Thomas Holm, Gunnar Gundersen (portefølje/projects-v2).
 * Row er felles markedsnavn — ikke dokumentert som eget registrert AS.
 */
export const ROW_COLLABORATORS = ["Marius Ottesen", "Thomas Holm", "Gunnar Gundersen"] as const;

/** Kort svar når fokus er Marius' rolle — ikke nødvendig å liste alle navn. */
export function formatRowSolutionsMariusContext(lang: Lang): string {
  return lang === "no"
    ? "Marius arbeider også med kommersiell utvikling gjennom Row Solutions, et rådgivningssamarbeid rettet mot SMB-markedet — publisert på rowsolutions.no. Det er ikke det samme som Marius Ottesen Consulting (MOC); Row er felles markedsnavn, ikke eget registrert AS."
    : "Marius also works on commercial development through Row Solutions, an advisory collaboration for the SME market — published at rowsolutions.no. It is not the same as Marius Ottesen Consulting (MOC); Row is a shared brand name, not a separately registered company.";
}

/** Når brukeren spør hvem som står bak Row Solutions. */
export function formatRowSolutionsWho(lang: Lang): string {
  const collab = ROW_COLLABORATORS.join(", ");
  return lang === "no"
    ? `Row Solutions er et aktivt kommersielt rådgivningssamarbeid for SMB (rowsolutions.no). De tre som står bak samarbeidet er: ${collab}. Row er felles markedsnavn — ikke eget registrert AS, og ikke det samme som MOC.`
    : `Row Solutions is an active commercial advisory collaboration for SMEs (rowsolutions.no). The three people behind the collaboration are: ${collab}. Row is a shared brand — not a separately registered company, and not the same as MOC.`;
}

/** Bakoverkompatibel full tekst — bruk kontekstspesifikke hjelpere først. */
export function formatRowSolutionsKnowledge(lang: Lang): string {
  return formatRowSolutionsWho(lang);
}

export function formatAiDiscoveryAttribution(lang: Lang): string {
  return lang === "no"
    ? "AI Discovery er analysemetode og verktøy for synlighet i AI-drevne kundereiser. Metoden og verktøyet er utviklet av Thomas Holm og tilbys gjennom Row Solutions — ikke utviklet eller eid av Marius Ottesen eller MOC. Marius' dokumenterte rolle er med i Row-samarbeidet og i kommersiell/porteføljeomtale på mariusottesen.no."
    : "AI Discovery is an analysis method and toolkit for visibility in AI-driven customer journeys. The method and tool were developed by Thomas Holm and are offered through Row Solutions — not developed or owned by Marius Ottesen or MOC. Marius' documented role is participation in the Row collaboration and commercial/portfolio coverage on mariusottesen.no.";
}