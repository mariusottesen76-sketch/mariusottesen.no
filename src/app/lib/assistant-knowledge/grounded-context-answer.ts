import type { Lang } from "../../LanguageContext";
import type { AssistantClientContext, ConversationFocus, EmployerFocusKey } from "./conversation-context";
import {
  detectEmployerKeyInText,
  getCareerEntryForFocus,
  isFollowUpRequiringEmployerContext,
  resolveConversationFocus,
} from "./conversation-context";
import { normalizeExcerptForAssistant } from "./excerpt-voice";

function tabId(lang: Lang, key: string): string {
  return `tab:${key}:${lang}`;
}

function careerId(lang: Lang): string {
  return lang === "no" ? "career:cv-registry:no" : "career:cv-registry:en";
}

function say(text: string, lang: Lang): string {
  return normalizeExcerptForAssistant(text.trim(), lang);
}

export function isRoleHistoryFactQuestion(question: string): boolean {
  const q = question.trim();
  if (/\b(passer|egnet|aktuell|suitable|fit\s+for|vurdere\s+som)\b/i.test(q)) return false;
  const asksTitle =
    /\b(har\s+(han|marius)\s+vært|was\s+(he|marius)|has\s+(he|marius)\s+been)\b/i.test(q) &&
    /\b(administrerende\s+direktør|daglig\s+leder|managing\s+director|ceo|generaldirector)\b/i.test(q);
  if (!asksTitle) return false;

  const ofOrg = q.match(/\b(ceo|chief\s+executive|managing\s+director)\s+of\s+(.+)/i);
  if (ofOrg) {
    const named = detectEmployerKeyInText(ofOrg[2]);
    if (!named) return false;
  }

  return true;
}

export function isRoleFitAssessmentQuestion(question: string): boolean {
  const q = question.trim();
  return (
    /\b(passer|egnet|aktuell|suitable|fit\s+for|vurdere\s+som|could\s+he\s+be)\b/i.test(q) &&
    /\b(administrerende\s+direktør|daglig\s+leder|managing\s+director|ceo|cco|commercial\s+director)\b/i.test(q)
  );
}

export function tryGroundedRoleHistoryAnswer(
  question: string,
  lang: Lang
): { answer: string; sourceIds: string[] } | null {
  if (!isRoleHistoryFactQuestion(question)) return null;
  const text =
    lang === "no"
      ? "Nei — dokumenterte stillinger i godkjent CV inkluderer ikke administrerende direktør eller daglig leder som formell tittel. Marius har hatt nasjonal salgssjef, salgssjef, Business Unit Manager og kommersiell rådgiver/gründer, med dokumentert personal-, budsjett- og P/L-ansvar."
      : "No — documented positions in the approved CV do not include CEO or managing director as a formal title. Marius has held national sales director, sales manager, business unit manager and commercial adviser/founder roles, with documented people, budget and P&L accountability.";
  return { answer: say(text, lang), sourceIds: [careerId(lang), tabId(lang, "cv")] };
}

export function tryGroundedRoleFitAnswer(
  question: string,
  lang: Lang
): { answer: string; sourceIds: string[] } | null {
  if (!isRoleFitAssessmentQuestion(question)) return null;
  const text =
    lang === "no"
      ? "Basert på dokumentert erfaring og åpen søknad er Marius relevant for blant annet daglig leder / Managing Director, kommersiell leder / CCO og salgsdirektør — med bakgrunn i kommersiell ledelse, P/L, personalansvar og gjennomføring. Dette er en vurdering av rolleegnethet, ikke en dokumentert stillingstittel han allerede har hatt."
      : "Based on documented experience and the open application, Marius is relevant for roles including managing director, commercial director / CCO and sales director — with background in commercial leadership, P&L, people accountability and execution. This is a suitability assessment, not a documented job title he has already held.";
  return {
    answer: say(text, lang),
    sourceIds: [lang === "no" ? "document:open-application:no" : "document:open-application:en", tabId(lang, "cv")],
  };
}

function headcountForEmployer(key: EmployerFocusKey, lang: Lang): string | null {
  if (key === "franzefoss") {
    return lang === "no"
      ? "ca. 20 salgsrådgivere og markedsansvarlige i salgsavdelingen"
      : "around 20 sales advisers and marketing staff in the sales department";
  }
  if (key === "norengros") {
    return lang === "no" ? "ca. 9–14 selgere (varierende i perioden)" : "around 9–14 salespeople (varied across the period)";
  }
  if (key === "nilfisk") return lang === "no" ? "ca. 10 selgere" : "around 10 salespeople";
  if (key === "mundipharma") return lang === "no" ? "nasjonalt salgsteam med HR-ansvar" : "national sales team with HR accountability";
  return null;
}

export function tryGroundedEmployerContextAnswer(
  question: string,
  lang: Lang,
  clientContext?: AssistantClientContext
): { answer: string; sourceIds: string[]; focus?: ConversationFocus } | null {
  const focus = resolveConversationFocus(question, clientContext);
  if (!focus?.employerKey) return null;

  const q = question.trim();
  const key = focus.employerKey;
  const entry = getCareerEntryForFocus(key, lang);
  if (!entry) return null;

  const employerName = entry.employer;

  if (
    /\b(hvor\s+mange\s+ansatte|how\s+many\s+(people|employees)|team\s+size|personell|ansatte\s+ledet|ledet\s+.*\bansatte)\b/i.test(
      q
    ) &&
    (isFollowUpRequiringEmployerContext(q) || detectEmployerKeyInText(q) || clientContext?.employerKey)
  ) {
    const hc = headcountForEmployer(key, lang) ?? entry.peopleManagement ?? "";
    if (!hc) return null;
    const text =
      lang === "no"
        ? `Hos ${employerName} (${entry.periodDisplay}) dokumenterer CV-en: ${hc}.`
        : `At ${employerName} (${entry.periodDisplay}) the CV documents: ${hc}.`;
    return { answer: say(text, lang), sourceIds: [careerId(lang), tabId(lang, "experience")], focus };
  }

  if (/\b(hva\s+oppnådde|hvilke\s+resultater|what\s+did\s+he\s+achieve|results)\b/i.test(q)) {
    const results = entry.documentedResults?.join(" ") ?? entry.responsibilities.slice(0, 2).join(" ");
    const text =
      lang === "no"
        ? `Hos ${employerName} (${entry.title}, ${entry.periodDisplay}) er dokumenterte resultater/oppgaver blant annet: ${results}`
        : `At ${employerName} (${entry.title}, ${entry.periodDisplay}) documented results/responsibilities include: ${results}`;
    return { answer: say(text, lang), sourceIds: [careerId(lang), tabId(lang, "results")], focus };
  }

  if (/\b(når\s+jobbet|hvilken\s+periode|which\s+period|when\s+did\s+he\s+work)\b/i.test(q)) {
    const text =
      lang === "no"
        ? `Marius var hos ${employerName} i perioden ${entry.periodDisplay} som ${entry.title}.`
        : `Marius was at ${employerName} in the period ${entry.periodDisplay} as ${entry.title}.`;
    return { answer: say(text, lang), sourceIds: [careerId(lang)], focus };
  }

  if (/\b(hvilken\s+rolle|what\s+role|stilling)\b/i.test(q) && isFollowUpRequiringEmployerContext(q)) {
    const text =
      lang === "no"
        ? `Hos ${employerName} var rollen dokumentert som ${entry.title} (${entry.periodDisplay}).`
        : `At ${employerName} the documented role was ${entry.title} (${entry.periodDisplay}).`;
    return { answer: say(text, lang), sourceIds: [careerId(lang)], focus };
  }

  if (
    detectEmployerKeyInText(q) &&
    /\b(hva\s+gjorde|what\s+did|fortell\s+om|tell\s+me\s+about|oppsummer|summarize)\b/i.test(q) &&
    !/\b(erfaring|experience|salg|sales)\b/i.test(q)
  ) {
    const text =
      lang === "no"
        ? `${entry.title} hos ${employerName} (${entry.periodDisplay}): ${entry.responsibilities.slice(0, 3).join(" ")}`
        : `${entry.title} at ${employerName} (${entry.periodDisplay}): ${entry.responsibilities.slice(0, 3).join(" ")}`;
    return { answer: say(text, lang), sourceIds: [careerId(lang), tabId(lang, "experience")], focus };
  }

  return null;
}

export function deriveFocusForResponse(
  question: string,
  clientContext?: AssistantClientContext
): ConversationFocus | undefined {
  const explicit = detectEmployerKeyInText(question);
  if (explicit) return { employerKey: explicit };
  return resolveConversationFocus(question, clientContext);
}