import type { Lang } from "../LanguageContext";
import { getTranslation } from "./translations";
import { rowSolutionsPlatform } from "./strategic-platform-projects/row-solutions-platform";

/** Row Solutions / Row consulting — ikke tabellrader eller andre «row»-betydninger. */
export function mentionsRowBrand(question: string): boolean {
  const q = question.trim();
  if (!q) return false;
  if (/\b(table\s+row|excel\s+row|rad\s+\d+)\b/i.test(q)) return false;
  return /\brow(\s+solutions|\s+consulting)?\b/i.test(q) || /\brow\s+consulting\b/i.test(q);
}

function rowTeamBody(lang: Lang): string {
  const section = rowSolutionsPlatform.detail.contentSections?.find((s) =>
    /row-team|the row team/i.test(s.heading[lang])
  );
  return section?.body[lang] ?? "";
}

/** Én person fra Row-teamet — autoritativt fra plattformdata. */
export function formatRowCollaboratorAnswer(which: "thomas" | "gunnar", lang: Lang): string {
  const needle = which === "thomas" ? "Thomas Holm" : "Gunnar Gundersen";
  const body = rowTeamBody(lang);
  const line = body.split("\n\n").find((p) => p.startsWith(needle)) ?? needle;
  const context =
    lang === "no"
      ? `${line} Personen er dokumentert som del av Row Solutions-samarbeidet på mariusottesen.no/row-solutions og rowsolutions.no — ikke som ansatt eller representant for MOC.`
      : `${line} They are documented as part of the Row Solutions collaboration on mariusottesen.no/row-solutions and rowsolutions.no — not as an employee or representative of MOC.`;
  if (which === "thomas") {
    const ai =
      lang === "no"
        ? " Thomas Holm utviklet analysemetoden AI Discovery, som tilbys gjennom Row Solutions."
        : " Thomas Holm developed the AI Discovery analysis method, offered through Row Solutions.";
    return `${context}${ai}`;
  }
  return context;
}

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

/** Kjernebudskap og fire områder — autoritativ for «hva/hvorfor/hvordan» uten lenke-svar alene. */
export function formatRowSolutionsCore(lang: Lang): string {
  const tagline = getTranslation("prosjekter.featured.row.title", lang);
  const intro = getTranslation("prosjekter.featured.row.intro", lang);
  const challenge = getTranslation("prosjekter.featured.row.box.challenge.body", lang);
  const areasShort = getTranslation("prosjekter.featured.row.box.areas.body", lang);
  const fourAreas = stripRowAreaNumbers(rowSolutionsPlatform.detail.utfordring.body[lang]);

  return lang === "no"
    ? `${tagline} ${intro} Row hjelper SMB-bedrifter med å finne tap av synlighet, kunder og kommersiell effekt — typisk der ${challenge} Fire tjenesteområder: ${fourAreas} (${areasShort}). MOC (Marius Ottesen Consulting) er Marius' eget firma — adskilt fra Row Solutions.`
    : `${tagline} ${intro} Row helps SME businesses identify loss of visibility, customers and commercial impact — typically where ${challenge} Four service areas: ${fourAreas} (${areasShort}). MOC (Marius Ottesen Consulting) is Marius' own firm — separate from Row Solutions.`;
}

function stripRowAreaNumbers(body: string): string {
  return body
    .replace(/Row Solutions er strukturert rundt fire områder[^:]*:\s*/i, "")
    .replace(/Row Solutions is structured around four areas[^:]*:\s*/i, "")
    .replace(/^\s*\d+\.\s*/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Spørsmål om Row som tilbud — ikke kun Marius' rolle eller MOC-sammenligning. */
export function isRowCoreQuestion(question: string): boolean {
  const q = question.trim();
  if (!mentionsRowBrand(q)) return false;
  if (/\b(ai\s+discovery)\b/i.test(q)) return false;
  if (/\b(hvem\s+står\s+bak|who\s+is\s+behind|who\s+are\s+the)\b/i.test(q)) return false;
  if (/\b(sammenheng|henger\s+sammen|how\s+does.*fit|koble\w*|kombin\w*|together)\b/i.test(q)) return false;
  if (
    /\b(moc|marius\s+ottesen\s+consulting)\b/i.test(q) &&
    /\b(forskjell|difference|versus|vs\.?|mellom)\b/i.test(q)
  ) {
    return false;
  }
  if (/\b(marius['']?\s+rolle|marius['']?\s+role|marius['']?\s+bidrag)\b/i.test(q)) return false;
  if (/^\s*(hva|what)\s+er\s+row(\s+solutions|\s+consulting)?\s*\??\s*$/i.test(q)) return true;
  if (/\b(row\s+consulting)\b/i.test(q) && /\b(hva|what|tilbyr|offer)\b/i.test(q)) return true;
  if (/\b(hva|what)\s+kan\s+(du|you)\s+si\s+om\s+row\b/i.test(q)) return true;
  if (/\b(hva|what)\s+tilbyr\s+row\b/i.test(q)) return true;
  const smbHelp =
    mentionsRowBrand(q) &&
    /\b(hjelpe|help[s]?|hva\s+kan\s+row|what\s+can\s+row)\b/i.test(q) &&
    /\b(bedrift|virksomhet|company|companies|business|smb|sme|oss|our|vår|kunder?|customers?)\b/i.test(q);

  if (smbHelp) return true;

  return (
    /\b(kjerne|kjernen|essence|kjernebudskap|målgruppe|target\s+(market|audience)|smb|hvorfor|why|hvordan\s+hjelper|how\s+does\s+row\s+help)\b/i.test(
      q
    ) ||
    /\b(hva\s+er\s+row|what\s+is\s+row)\b/i.test(q) ||
    (/\b(hva|what)\s+kan\s+(du|you)\s+(si|say)\b/i.test(q) && /\brow\b/i.test(q))
  );
}

/** Spørsmål om Thomas eller Gunnar i Row-kontekst (kort eller fullt navn). */
export function isRowCollaboratorPersonQuestion(question: string): boolean {
  const q = question.trim();
  if (/\bmarius\b/i.test(q)) return false;
  if (/\b(thomas\s+holm|gunnar\s+gundersen)\b/i.test(q) && /\b(hvem|who|hva|what)\b/i.test(q)) return true;
  if (/\b(hvem\s+er|who\s+is)\s+(thomas|gunnar)\b/i.test(q)) return true;
  if (/^\s*(thomas|gunnar)(\s+holm|\s+gundersen)?\s*\??\s*$/i.test(q)) return true;
  return false;
}

export function formatAiDiscoveryAttribution(lang: Lang): string {
  return lang === "no"
    ? "AI Discovery er analysemetode og verktøy for synlighet i AI-drevne kundereiser. Metoden og verktøyet er utviklet av Thomas Holm og tilbys gjennom Row Solutions — ikke utviklet eller eid av Marius Ottesen eller MOC. Marius' dokumenterte rolle er med i Row-samarbeidet og i kommersiell/porteføljeomtale på mariusottesen.no."
    : "AI Discovery is an analysis method and toolkit for visibility in AI-driven customer journeys. The method and tool were developed by Thomas Holm and are offered through Row Solutions — not developed or owned by Marius Ottesen or MOC. Marius' documented role is participation in the Row collaboration and commercial/portfolio coverage on mariusottesen.no.";
}