import type { Lang } from "../../LanguageContext";
import type { SourceContext } from "./assistant-types";
import { ASSISTANT_LIMITS } from "./assistant-config";
import { selectRelevantSourceIds } from "./source-selection";
import { isAuthorshipQuestion, isValueCreationQuestion } from "./information-needs";
import { normalizeExcerptForAssistant } from "./excerpt-voice";
import { stripHtmlToPlainText } from "./text-utils";

/** Bredt spørsmål om hvordan Marius kan bidra til en virksomhet — skal kunne besvares fra Consulting-fanen. */
export function isConsultingEngagementQuestion(question: string): boolean {
  const q = question.trim();
  return (
    /\b(hjelpe|hjelper|bidra|bistå|help)\b.*\b(virksomhet\w*|bedrift\w*|business|selskap|organisasjon|company|us)\b/i.test(
      q
    ) || /\bhow\s+can\s+marius\s+help\b/i.test(q)
  );
}

export function isPortfolioOverviewQuestion(question: string): boolean {
  const q = question.trim();
  if (isAuthorshipQuestion(q)) return false;
  if (isConsultingEngagementQuestion(q)) return true;
  if (/\b(lederroller|roller.*passer|roles.*fit)\b/i.test(q)) return true;
  if (/\bresultat\w*/i.test(q) && /\b(oppnådd|levert|delivered|dokumentert)\b/i.test(q)) return true;
  if (/\b(hvilke\s+resultater|what\s+results)\b/i.test(q)) return true;
  if (isValueCreationQuestion(q)) return true;
  if (
    /\b(praktiske?\s+ai|ai-løsninger|ai\s+solutions|practical\s+ai)\b/i.test(q) &&
    /\b(utvikle|bygge|kan\s+marius|develop|build|lage)\b/i.test(q)
  ) {
    return true;
  }
  return false;
}

function truncateAtSentence(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  const cut = text.slice(0, maxChars);
  const last = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  if (last >= 80) return cut.slice(0, last + 1).trim();
  return `${cut.trim()}…`;
}

export function buildExcerptLedOverview(ctx: SourceContext, lang: Lang): string {
  const plain = stripHtmlToPlainText(ctx.excerptText);
  const snippet = truncateAtSentence(plain, 420);
  return normalizeExcerptForAssistant(snippet, lang);
}

/** Utdrag fra prioritert kilde — ingen fritt oppfunnet salgstekst. */
export function tryGroundedOverviewAnswer(
  question: string,
  contexts: SourceContext[],
  lang: Lang
): { sourceId: string; answer: string } | null {
  if (!isPortfolioOverviewQuestion(question)) return null;
  let ids = selectRelevantSourceIds(question, lang, ASSISTANT_LIMITS.maxSources);
  const q = question.trim();
  if (isValueCreationQuestion(q)) {
    const tabPriority =
      lang === "no"
        ? ["tab:home:no", "tab:results:no", "tab:consulting:no", "tab:experience:no", "tab:cv:no"]
        : ["tab:home:en", "tab:results:en", "tab:consulting:en", "tab:experience:en", "tab:cv:en"];
    const rest = ids.filter((id) => !tabPriority.includes(id));
    ids = [...tabPriority, ...rest];
  }
  if (/\bresultat\w*/i.test(q) && /\b(oppnådd|levert|delivered)\b/i.test(q)) {
    const tab = lang === "no" ? ["tab:experience:no", "tab:cv:no", "tab:results:no"] : ["tab:experience:en", "tab:cv:en", "tab:results:en"];
    ids = [...new Set([...tab.filter((id) => ids.includes(id)), ...ids])];
  }
  if (/\b(praktiske?\s+ai|ai-løsninger)\b/i.test(q)) {
    const tab = lang === "no" ? ["tab:consulting:no", "tab:results:no"] : ["tab:consulting:en", "tab:results:en"];
    ids = [...new Set([...tab.filter((id) => ids.includes(id)), ...ids])];
  }
  for (const id of ids) {
    const ctx = contexts.find((c) => c.sourceId === id && c.suitableForFactualAnswer);
    if (ctx) {
      return { sourceId: ctx.sourceId, answer: buildExcerptLedOverview(ctx, lang) };
    }
  }
  return null;
}

export function isBookTopicQuestion(question: string): boolean {
  const q = question.trim();
  if (isAuthorshipQuestion(q)) return false;
  if (!/\b(verdiskiftet|bok|book)\b/i.test(q)) return false;
  return /\b(hva handler|hva er|what is|what's|handle|handler|om\b|about)\b/i.test(q);
}

export function tryBookTopicAnswer(
  question: string,
  contexts: SourceContext[],
  lang: Lang
): { sourceIds: string[]; answer: string } | null {
  if (!isBookTopicQuestion(question)) return null;
  const bookId = lang === "no" ? "book:no" : "book:en";
  const ctx = contexts.find((c) => c.sourceId === bookId && c.suitableForFactualAnswer);
  if (!ctx) return null;
  return { sourceIds: [bookId], answer: buildExcerptLedOverview(ctx, lang) };
}

function isVerdiskapingAuthorshipTopic(question: string): boolean {
  const q = question.trim();
  return (
    isAuthorshipQuestion(q) &&
    /\bverdiskaping|verdiskiftet|value\s+creation\b/i.test(q)
  );
}

/** Authorship questions — Innsikt/Bok, not Consulting or random articles. */
export function tryGroundedAuthorshipAnswer(
  question: string,
  contexts: SourceContext[],
  lang: Lang
): { sourceIds: string[]; answer: string } | null {
  if (!isAuthorshipQuestion(question)) return null;
  const q = question.trim();
  const hubId = lang === "no" ? "hub:articles:no" : "hub:articles:en";
  const bookId = lang === "no" ? "book:no" : "book:en";

  if (isVerdiskapingAuthorshipTopic(q)) {
    const hubCtx = contexts.find((c) => c.sourceId === hubId && c.suitableForFactualAnswer);
  const bookCtx = contexts.find((c) => c.sourceId === bookId && c.suitableForFactualAnswer);
    if (hubCtx) {
      const hubText = buildExcerptLedOverview(hubCtx, lang);
      const sourceIds: string[] = [hubId];
      let answer = hubText;
      if (bookCtx) {
        sourceIds.push(bookId);
        const bookLead = buildExcerptLedOverview(bookCtx, lang).slice(0, 300);
        answer =
          lang === "no"
            ? `${hubText} På boksiden dokumenteres også bokprosjektet VerdisKIftet: ${bookLead}`
            : `${hubText} The book page also documents the VerdisKIftet project: ${bookLead}`;
      }
      return { sourceIds, answer: truncateAtSentence(answer, 900) };
    }
  }

  let ids = selectRelevantSourceIds(question, lang, ASSISTANT_LIMITS.maxSources);
  const tabPriority =
    lang === "no"
      ? ["hub:articles:no", "book:no", "tab:home:no"]
      : ["hub:articles:en", "book:en", "tab:home:en"];
  const rest = ids.filter((id) => !tabPriority.includes(id));
  ids = [...tabPriority, ...rest];
  for (const id of ids) {
    const ctx = contexts.find((c) => c.sourceId === id && c.suitableForFactualAnswer);
    if (ctx) {
      return { sourceIds: [ctx.sourceId], answer: buildExcerptLedOverview(ctx, lang) };
    }
  }
  return null;
}