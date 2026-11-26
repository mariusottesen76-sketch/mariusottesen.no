import type { Lang } from "../../LanguageContext";
import { getTranslation } from "../../data/translations";
import { lookupKnowledgeSource } from "./lookup";
import { buildExcerptLedOverview } from "./grounded-overview-answer";
import type { SourceContext } from "./assistant-types";

/** Korte spørsmål om om Marius tilbyr consulting / MOC — uten full engasjementsmal. */
export function isSimpleConsultingOfferingQuestion(question: string): boolean {
  return /\b(gjør\s+(han|marius)\s+consulting|does\s+marius\s+(do\s+)?consulting|tilbyr\s+marius(\s+ottesen)?(\s+consulting)?|what\s+does\s+marius\s+ottesen\s+consulting|hva\s+tilbyr\s+marius\s+ottesen\s+consulting)\b/i.test(
    question.trim()
  );
}

export function trySimpleConsultingOfferingAnswer(lang: Lang): { sourceId: string; answer: string } | null {
  const sourceId = lang === "no" ? "tab:consulting:no" : "tab:consulting:en";
  const res = lookupKnowledgeSource(sourceId, lang);
  if (!res.ok) return null;

  const mocLead =
    lang === "no"
      ? getTranslation("profil.selskap.desc", lang).split("\n")[0]?.trim()
      : getTranslation("profil.selskap.desc", lang).split("\n")[0]?.trim();

  const ctx: SourceContext = {
    sourceId: res.entry.id,
    title: res.entry.title,
    url: res.entry.canonicalUrl,
    excerptText: res.excerpt.text,
    suitableForFactualAnswer: res.grounding.suitableForFactualAnswer,
  };

  const detail = buildExcerptLedOverview(ctx, lang);
  const path = new URL(res.entry.canonicalUrl).pathname;

  const rowNote =
    lang === "no"
      ? " Row Solutions er et eget kommersielt samarbeid (rowsolutions.no), ikke det samme som MOC."
      : " Row Solutions is a separate commercial collaboration (rowsolutions.no), not the same as MOC.";

  return {
    sourceId,
    answer: `${mocLead} ${lang === "no" ? "Consulting-siden" : "The Consulting page"} (${path}): ${detail}${rowNote}`,
  };
}