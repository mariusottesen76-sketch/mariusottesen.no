import type { Lang } from "../../LanguageContext";
import type { AssistantAnswerCategory } from "./answer-categories";

export type PreModelClassification = {
  category: Exclude<AssistantAnswerCategory, "ANSWER">;
  reason: string;
} | null;

const RESTRICTED_PATTERNS: RegExp[] = [
  /\b(lønn|lonn|salary|inntekt|income|hva\s+tjener|how\s+much\s+(does\s+he\s+)?earn)\b/i,
  /\b(api[\s-]?nøkkel\w*|api[\s_-]?key\w*|anthropic|openai)\b/i,
  /\b(ignor(er|e)\s+(instruksjon\w*|instruks\w*|regl\w*|prompt)|ignore\s+(your\s+)?(instructions|rules|prompt))\b/i,
  /\b(vis|show|print|gi\s+meg)\s+.*(passord|password|hemmelig|secret|tilgangskode|access\s+code|api[\s-]?nøkkel\w*|api[\s_-]?key\w*)\b/i,
  /\b(api[\s-]?nøkkel\w*|api[\s_-]?key\w*)\b.*\b(vis|show|print)\b/i,
  /\b(system\s+prompt|developer\s+message)\b/i,
];

const OFF_TOPIC_PATTERNS: RegExp[] = [
  /\b(bestill|bestiller|order)\s+(jeg\s+)?(pizza|mat|food)\b/i,
  /\b(hvordan|how)\s+(lage|make|cook|bestill|order)\s+pizza\b/i,
  /\bpizza\b/i,
  /\bværmeld\w*\b/i,
  /\bweather\s+forecast\b/i,
];

const IN_SCOPE_HINT =
  /\b(marius|ottesen|consulting|moc|norengros|franzefoss|verdiskiftet|faginnlegg|prosjekt|cv|erfaring|resultat|consulting|ai[-\s]?prosjekt|leder|rekrutt|bok|article)\b/i;

const NOT_ON_SITE_PATTERNS: RegExp[] = [
  /\b(tilgjengelig|available|oppsigelsestid|notice\s+period)\b.*\b(neste\s+måned|next\s+month|nå|now|immediately)\b/i,
  /\b(når\s+kan\s+han\s+starte|when\s+can\s+he\s+start)\b/i,
  /\b(lønnsforventning|salary\s+expectation)\b/i,
];

export function detectQuestionLang(question: string, hint?: Lang): Lang {
  if (hint === "no" || hint === "en") return hint;
  const enHits = (question.match(/\b(the|what|how|who|where|experience|results|consulting|projects)\b/gi) ?? []).length;
  const noHits = (question.match(/\b(hva|hvordan|hvem|hvor|erfaring|resultater|prosjekt)\b/gi) ?? []).length;
  return enHits > noHits ? "en" : "no";
}

export function classifyQuestionPreModel(question: string): PreModelClassification {
  const q = question.trim();
  for (const pattern of RESTRICTED_PATTERNS) {
    if (pattern.test(q)) {
      return { category: "RESTRICTED", reason: "policy_restricted" };
    }
  }
  for (const pattern of OFF_TOPIC_PATTERNS) {
    if (pattern.test(q) && !IN_SCOPE_HINT.test(q)) {
      return { category: "OFF_TOPIC", reason: "policy_off_topic" };
    }
  }
  for (const pattern of NOT_ON_SITE_PATTERNS) {
    if (pattern.test(q) && !IN_SCOPE_HINT.test(q)) {
      return { category: "NOT_ON_SITE", reason: "policy_not_documented" };
    }
  }
  return null;
}

export function isNavigationQuestion(question: string): boolean {
  return /\b(hvor\s+finn|hvor\s+kan\s+jeg|where\s+(can\s+i\s+)?find|lenke\s+til|link\s+to)\b/i.test(
    question
  );
}