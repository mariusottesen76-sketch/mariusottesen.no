import type { Lang } from "../../LanguageContext";
import { lookupKnowledgeSource } from "./lookup";
import { buildExcerptLedOverview } from "./grounded-overview-answer";
import { isSectionTabDiscoveryQuestion, resolveSiteTabIntent } from "./site-tab-intent";
import type { SourceContext } from "./assistant-types";

export function tryTabSectionOverviewAnswer(
  question: string,
  lang: Lang
): { sourceId: string; answer: string } | null {
  if (!isSectionTabDiscoveryQuestion(question)) return null;
  const tab = resolveSiteTabIntent(question, lang);
  if (!tab) return null;

  const res = lookupKnowledgeSource(tab.sourceId, lang);
  if (!res.ok) return null;

  const ctx: SourceContext = {
    sourceId: res.entry.id,
    title: res.entry.title,
    url: res.entry.canonicalUrl,
    excerptText: res.excerpt.text,
    suitableForFactualAnswer: res.grounding.suitableForFactualAnswer,
  };

  if (!ctx.suitableForFactualAnswer) return null;

  const path = new URL(res.entry.canonicalUrl).pathname;
  const overview = buildExcerptLedOverview(ctx, lang);
  const lead =
    lang === "no"
      ? `På fanen «${tab.label}» (${path}) finner du blant annet:`
      : `On the “${tab.label}” section (${path}) you will find among other things:`;

  return {
    sourceId: res.entry.id,
    answer: `${lead} ${overview}`,
  };
}