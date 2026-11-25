import type { Lang } from "../../LanguageContext";
import type { AssistantAnswerCategory } from "./answer-categories";

export type PreModelClassification = {
  category: Exclude<AssistantAnswerCategory, "ANSWER">;
  reason: string;
} | null;

const RESTRICTED_PATTERNS: RegExp[] = [
  /\b(lønn|lonn|salary|inntekt|income|hva\s+tjener|how\s+much\s+(does\s+he\s+)?earn|tjente\s+(han|de|marius))\b/i,
  /\b(api\s+secret|secret\s+key)\b/i,
  /\b(api[\s-]?nøkkel\w*|api[\s_-]?key\w*|anthropic|openai)\b/i,
  /\b(ignor(er|e)\s+(alle\s+)?(instruksjon\w*|instruks\w*|regl\w*|prompt)|ignore\s+(all\s+)?(your\s+)?(instructions|rules|prompt))\b/i,
  /\b(vis|show|print|gi\s+meg|reveal|hent)\s+.*(passord\w*|password\w*|hemmelig\w*|secret\w*|tilgangskod\w*|access\s+code\w*|api[\s-]?nøkkel\w*|api[\s_-]?key\w*)\b/i,
  /\b(api[\s-]?nøkkel\w*|api[\s_-]?key\w*)\b.*\b(vis|show|print)\b/i,
  /\b(system\s+prompt|developer\s+message)\b/i,
  /\b(gi\s+meg|show\s+me|reveal)\s+.*\btilgangskod\w*\b/i,
  /\b(personnummer|social\s+security\s+number)\b/i,
  /\b(opphev\s+alle\s+regler|return\s+category|off_topic\s+but\s+answer)\b/i,
  /\bSYSTEM:/i,
  /\bevil:fake\b/i,
];

const OFF_TOPIC_PATTERNS: RegExp[] = [
  /\b(bestill|bestiller|order)\s+(jeg\s+)?(pizza|mat|food|taxi)\b/i,
  /\b(hvordan|how)\s+(lage|make|cook|bestill|order|reparer\w*|fix)\s+(pizza|mat|food)\b/i,
  /\bpizza\b/i,
  /\bværmeld\w*\b/i,
  /\bweather\s+forecast\b/i,
  /\b(hvilken|which)\s+(film|movie)\b/i,
  /\b(recipe|oppskrift)\b/i,
  /\b(love\s+song|kjærlighetssang)\b/i,
  /\b(washing\s+machine|vaskemaskin)\b/i,
  /\b(hvordan|how)\s+(reparer\w*|fikse\w*|fix)\s+.*(vaskemaskin\w*|washing\s+machine)\b/i,
  /\b(super\s+bowl|fotballkamp)\b/i,
  /\b(hovedstaden|capital\s+of)\b/i,
  /\b(stock\s+price|aksjekurs)\b/i,
  /\b(tiktok)\b/i,
  /\b(lekser|homework)\b/i,
  /\btranslate\s+.+\s+to\s+\w+/i,
  /\b(lasagna|boller|sushi)\b/i,
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
  const mixedDocAndAvailability =
    IN_SCOPE_HINT.test(q) &&
    /\b(resultat|erfaring|consulting|prosjekt|norengros)\b/i.test(q) &&
    /\b(ledig|tilgjengelig|available|neste\s+måned|next\s+month)\b/i.test(q);
  for (const pattern of NOT_ON_SITE_PATTERNS) {
    if (mixedDocAndAvailability) continue;
    if (pattern.test(q) && !IN_SCOPE_HINT.test(q)) {
      return { category: "NOT_ON_SITE", reason: "policy_not_documented" };
    }
  }
  return null;
}

export function isNavigationQuestion(question: string): boolean {
  return /\b(hvor\s+finn(er|es)?|hvor\s+er|hvor\s+kan\s+jeg|where\s+(can\s+i\s+)?find|where\s+should\s+i\s+look|where\s+is|where\s+are|how\s+do\s+i\s+contact|lenke\s+til|link\s+(me\s+)?to)\b/i.test(
    question
  );
}