import type { CareerPosition } from "../../data/career-facts";

function asksFutureTargetRoles(question: string): boolean {
  return /\b(aktuell\w*\s+(for\s+)?roller|roller\s+(er\s+)?(han|marius)\s+aktuell|which\s+roles\s+is\s+he\s+(suitable|fit)|passer\s+(han|marius)\s+for)\b/i.test(
    question
  );
}

/** Rolletype-filter på *tidligere* stillinger — ikke aktuelle målroller. */
const POSITION_TYPE_FILTERS: Array<{ pattern: RegExp; matchTitle: RegExp }> = [
  {
    pattern:
      /\b(salgsleder\w*|salgsdirektør|sales\s+(director|leader|leadership)|head\s+of\s+sales|nasjonal\s+salgssjef|national\s+sales\s+director)\b/i,
    matchTitle: /\b(salg|sales|kommersiell|commercial|salgssjef|sales\s+director)\b/i,
  },
  {
    pattern: /\b(kommersiell\s+leder|commercial\s+(director|leader)|cco\b|chief\s+commercial)\b/i,
    matchTitle: /\b(kommersiell|commercial|ccio|sales|salg)\b/i,
  },
];

export function isFilteredPastPositionsQuestion(question: string): boolean {
  const q = question.trim();
  if (asksFutureTargetRoles(q)) return false;
  if (!/\b(stilling\w*|position\w*|rolle\w*|job\s+titles?|hatt|held|had|jobbet|worked)\b/i.test(q)) {
    return false;
  }
  if (!POSITION_TYPE_FILTERS.some((f) => f.pattern.test(q))) return false;
  return /\b(marius|han|he|hvilke|which|what|his|hans)\b/i.test(q);
}

export function filterCareerPositionsByQuestion(
  question: string,
  positions: CareerPosition[]
): CareerPosition[] {
  const filter = POSITION_TYPE_FILTERS.find((f) => f.pattern.test(question));
  if (!filter) return positions;
  return positions.filter((p) => {
    const title = `${p.title} ${p.titleProgression ?? ""}`;
    return filter.matchTitle.test(title);
  });
}