/**
 * Lette, felles korreksjoner før intent-matching — ikke full stavekontroll.
 */

const TYPO_MAP: Array<[RegExp, string]> = [
  [/\bhbem\b/gi, "Hvem"],
  [/\bhvem\s+eer\b/gi, "hvem er"],
  [/\bmoc\b/g, "MOC"],
];

export function normalizeAssistantQuestion(question: string): string {
  let q = question.trim().replace(/\s+/g, " ");
  q = q.replace(/\browsolutions\.no\b/gi, "row solutions");
  q = q.replace(/\browsolutions\b/gi, "row solutions");
  for (const [pattern, replacement] of TYPO_MAP) {
    q = q.replace(pattern, replacement);
  }
  return q;
}