import type { Lang } from "../../LanguageContext";
import {
  ROW_COLLABORATORS,
  formatRowSolutionsMariusContext,
  formatRowSolutionsWho,
  formatRowCollaboratorAnswer,
  isRowCollaboratorPersonQuestion,
  mentionsRowBrand,
} from "../../data/row-solutions-knowledge";
import { formatMocLegalFormAnswer } from "../../data/moc-legal-knowledge";
import { normalizeAssistantQuestion } from "./assistant-question-normalize";
import { normalizeExcerptForAssistant } from "./excerpt-voice";
import { rowExternalManifestId } from "./row-external-knowledge";
import { isQuestionAboutMarius } from "./site-assistant-subject";

function tabId(lang: Lang, key: string): string {
  return `tab:${key}:${lang}`;
}

function say(text: string, lang: Lang): string {
  return normalizeExcerptForAssistant(text, lang);
}

/** «Hvem er Row?» — markedsnavn, ikke person. */
export function isRowBrandIdentityQuestion(question: string): boolean {
  const q = normalizeAssistantQuestion(question);
  return /^\s*(hvem|who)\s+(er|is)\s+row(\s+solutions|\s+consulting)?\s*\??\s*$/i.test(q);
}

export function isRowLegalFormQuestion(question: string): boolean {
  const q = normalizeAssistantQuestion(question);
  if (!mentionsRowBrand(q)) return false;
  return /\b(as|asa|registrert\s+selskap|registered\s+company|eget\s+registrert)\b/i.test(q);
}

export function isMocIdentityQuestion(question: string): boolean {
  const q = normalizeAssistantQuestion(question);
  if (/^\s*(hva|what)\s+(er|is|betyr|means)\s+moc\b/i.test(q)) return true;
  if (/^\s*er\s+consulting\s+moc\b/i.test(q)) return true;
  if (/^\s*who\s+owns\s+moc\b/i.test(q)) return true;
  if (/\b(hva|what)\s+er\s+(hans|his)\s+firma\b/i.test(q) && isQuestionAboutMarius(q)) return true;
  return false;
}

export function isRowTeamOverviewQuestion(question: string): boolean {
  const q = normalizeAssistantQuestion(question);
  return mentionsRowBrand(q) && /\b(row\s+team|teamet|who\s+is\s+behind|partners?)\b/i.test(q);
}

export function isRowMocOwnershipClarification(question: string): boolean {
  const q = normalizeAssistantQuestion(question);
  return (
    mentionsRowBrand(q) &&
    /\b(moc|marius\s+ottesen\s+consulting)\b/i.test(q) &&
    /\b(eier|own[es]|eies|owned)\b/i.test(q)
  );
}

/** Dokumentert samarbeid Marius ↔ Thomas (typisk Row Solutions). */
export function isMariusThomasCollaborationQuestion(question: string): boolean {
  const q = normalizeAssistantQuestion(question);
  if (!/\b(samarbeid|samarbeider|collaborat|work\s+together)\b/i.test(q)) return false;
  return /\b(marius|ottesen)\b/i.test(q) && /\b(thomas|holm)\b/i.test(q);
}

/** MOC selskapsform / ENK — ikke generell juridisk rådgivning. */
export function isMocLegalFormQuestion(question: string): boolean {
  const q = normalizeAssistantQuestion(question);
  const legal =
    /\b(enk\b|enkeltmannsforetak|enkeltpersonforetak|sole\s+proprietor|business\s+form|organisasjonsnummer|org\.?\s*nr|company\s+type)\b/i.test(
      q
    );
  const moc = /\b(moc|marius\s+ottesen\s+consulting)\b/i.test(q);
  const orgNr = /\b(org\.?\s*nr|org\s+number|organisasjonsnummer|organisation\s+number)\b/i.test(q);
  if (moc && (legal || orgNr)) return true;
  if (orgNr && isQuestionAboutMarius(q)) return true;
  if (/^\s*hva\s+er\s+organisasjonsnummeret\b/i.test(q) && isQuestionAboutMarius(q)) return true;
  if (legal && isQuestionAboutMarius(q) && !mentionsRowBrand(q)) return true;
  if (/^\s*enkeltmannsforetak\??\s*$/i.test(q) || /^\s*enkeltpersonforetak\??\s*$/i.test(q)) return true;
  if (/\bis\s+moc\s+a\s+sole\s+proprietorship\b/i.test(q)) return true;
  return false;
}

/** Row og MOC uten eksplisitt «forskjell» — kort sammenligning. */
export function isRowAndMocRelationshipQuestion(question: string): boolean {
  const q = normalizeAssistantQuestion(question);
  if (!mentionsRowBrand(q) || !/\b(moc|marius\s+ottesen\s+consulting)\b/i.test(q)) return false;
  if (/\b(forskjell|difference|versus|vs\.?)\b/i.test(q)) return false;
  return /\b(og\s+moc|moc\s+og|row\s+og\s+moc|sammenheng|relationship|sammenlign|compare)\b/i.test(q) || /^\s*row\s+og\s+moc\.?\s*$/i.test(q);
}

export function tryGroundedEntityRelationshipAnswer(
  question: string,
  lang: Lang
): { answer: string; sourceIds: string[] } | null {
  const q = normalizeAssistantQuestion(question);
  if (!q) return null;

  const projectId = lang === "no" ? "project:row-solutions:no" : "project:row-solutions:en";
  const rowHome = rowExternalManifestId("home", lang);
  const consulting = tabId(lang, "consulting");
  const privacy = lang === "no" ? "legal:privacy:no" : "legal:privacy:en";

  if (isMocIdentityQuestion(q)) {
    const text =
      lang === "no"
        ? `MOC står for Marius Ottesen Consulting — Marius' eget enkeltpersonforetak (ENK) med org.nr. 937 102 801, med rådgivning, metoder og porteføljeprosjekter. Consulting-fanen og /consulting beskriver leveranser. Row Solutions er adskilt kommersielt samarbeid (rowsolutions.no).`
        : `MOC stands for Marius Ottesen Consulting — Marius' own sole proprietorship (ENK), org. no. 937 102 801, with advisory work, methods and portfolio projects. The consulting tab and /consulting describe deliveries. Row Solutions is a separate commercial collaboration (rowsolutions.no).`;
    return { answer: say(text, lang), sourceIds: [consulting, tabId(lang, "home"), privacy] };
  }

  if (isRowLegalFormQuestion(q)) {
    const text =
      lang === "no"
        ? `Row Solutions er dokumentert som felles markedsnavn for et kommersielt rådgivningssamarbeid — ikke eget registrert AS eller ENK. MOC (Marius Ottesen Consulting) er Marius' registrerte enkeltpersonforetak (org.nr. 937 102 801), adskilt fra Row.`
        : `Row Solutions is documented as a shared brand name for a commercial advisory collaboration — not a separately registered limited company or sole proprietorship. MOC (Marius Ottesen Consulting) is Marius' registered sole proprietorship (org. no. 937 102 801), separate from Row.`;
    return { answer: say(text, lang), sourceIds: [projectId, rowHome, consulting] };
  }

  if (isRowTeamOverviewQuestion(q) || (/\bhvem\s+står\s+bak\b/i.test(q) && mentionsRowBrand(q))) {
    const text = formatRowSolutionsWho(lang);
    return { answer: say(text, lang), sourceIds: [projectId, rowHome] };
  }

  if (isRowMocOwnershipClarification(q)) {
    const text =
      lang === "no"
        ? `MOC eier ikke Row Solutions. Row er felles markedsnavn for samarbeidet mellom Marius Ottesen, Thomas Holm og Gunnar Gundersen — ikke eget registrert AS. MOC er Marius' egne firma og kan eie verktøy (f.eks. PSC) som kan brukes i Row-rådgivning uten at Row eier dem.`
        : `MOC does not own Row Solutions. Row is the shared brand for the collaboration between Marius Ottesen, Thomas Holm and Gunnar Gundersen — not a separately registered company. MOC is Marius' own firm and may own tools (e.g. PSC) that can be used in Row advisory work without Row owning them.`;
    return { answer: say(text, lang), sourceIds: [projectId, consulting, rowHome] };
  }

  if (isRowBrandIdentityQuestion(q)) {
    const names = ROW_COLLABORATORS.join(", ");
    const text =
      lang === "no"
        ? `Row er ikke én person, men markedsnavnet for Row Solutions — et aktivt kommersielt rådgivningssamarbeid for SMB (rowsolutions.no). De som står bak samarbeidet er: ${names}. Row er felles markedsnavn, ikke eget registrert AS, og adskilt fra Marius Ottesen Consulting (MOC).`
        : `Row is not a single person, but the brand name for Row Solutions — an active commercial advisory collaboration for SMEs (rowsolutions.no). The people behind it are: ${names}. Row is a shared brand, not a separately registered company, and separate from Marius Ottesen Consulting (MOC).`;
    return { answer: say(text, lang), sourceIds: [projectId, rowHome, consulting] };
  }

  if (isRowCollaboratorPersonQuestion(q)) {
    const thomas = /\bthomas\b/i.test(q);
    const gunnar = /\bgunnar\b/i.test(q);
    const text =
      thomas && !gunnar
        ? formatRowCollaboratorAnswer("thomas", lang)
        : gunnar && !thomas
          ? formatRowCollaboratorAnswer("gunnar", lang)
          : formatRowCollaboratorAnswer("gunnar", lang);
    const extra = thomas && !gunnar ? [rowExternalManifestId("ai-discovery", lang)] : [];
    return { answer: say(text, lang), sourceIds: [projectId, rowHome, ...extra] };
  }

  if (isMariusThomasCollaborationQuestion(q)) {
    const text =
      lang === "no"
        ? `Marius Ottesen og Thomas Holm samarbeider gjennom Row Solutions — et felles kommersielt rådgivningssamarbeid for SMB, dokumentert med ${ROW_COLLABORATORS.join(", ")}. Marius' dokumenterte bidrag omfatter blant annet kommersiell utvikling og porteføljedokumentasjon på mariusottesen.no; Thomas Holms dokumenterte rolle i samarbeidet inkluderer marked, synlighet og utvikling av AI Discovery (tilbudt via Row, ikke eid av MOC). ${formatRowSolutionsMariusContext(lang)}`
        : `Marius Ottesen and Thomas Holm collaborate through Row Solutions — a joint commercial advisory collaboration for SMEs, documented with ${ROW_COLLABORATORS.join(", ")}. Marius' documented contribution includes commercial development and portfolio documentation on mariusottesen.no; Thomas Holm's documented role includes marketing, visibility and development of AI Discovery (offered via Row, not owned by MOC). ${formatRowSolutionsMariusContext(lang)}`;
    return {
      answer: say(text, lang),
      sourceIds: [projectId, rowHome, rowExternalManifestId("ai-discovery", lang)],
    };
  }

  if (isMocLegalFormQuestion(q)) {
    const text = formatMocLegalFormAnswer(lang);
    return { answer: say(text, lang), sourceIds: [consulting, privacy, tabId(lang, "home")] };
  }

  if (isRowAndMocRelationshipQuestion(q)) {
    const text =
      lang === "no"
        ? `MOC (Marius Ottesen Consulting) er Marius' eget enkeltpersonforetak (ENK) med rådgivning, metodeutvikling og kundeoppdrag. ${formatRowSolutionsMariusContext(lang)}`
        : `MOC (Marius Ottesen Consulting) is Marius' own sole proprietorship (ENK) with advisory work, methodology and client engagements. ${formatRowSolutionsMariusContext(lang)}`;
    return { answer: say(text, lang), sourceIds: [consulting, projectId, rowHome] };
  }

  return null;
}