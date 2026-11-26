import type { Lang } from "../../LanguageContext";
import { getTranslation } from "../../data/translations";
import { lookupKnowledgeSource } from "./lookup";

export function isReferencesPresenceQuestion(question: string): boolean {
  return /\b(har\s+(marius|han)\s+referanser|does\s+marius\s+have\s+references|hva\s+med\s+referanser|what\s+about\s+references|testimonials?\s+on\s+the\s+site)\b/i.test(
    question.trim()
  );
}

export function tryReferencesBriefAnswer(lang: Lang): { sourceId: string; answer: string } | null {
  const sourceId = lang === "no" ? "tab:references:no" : "tab:references:en";
  const res = lookupKnowledgeSource(sourceId, lang);
  if (!res.ok || !res.grounding.suitableForFactualAnswer) return null;

  const path = new URL(res.entry.canonicalUrl).pathname;
  const intro = getTranslation("ref.intro", lang);
  const title = getTranslation("ref.title", lang);

  const answer =
    lang === "no"
      ? `Ja. På ${path} (${title}) finner du dokumenterte anbefalinger fra navngitte kollegaer og medarbeidere. ${intro}`
      : `Yes. At ${path} (${title}) you will find documented endorsements from named colleagues and team members. ${intro}`;

  return { sourceId, answer };
}