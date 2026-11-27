import { refersToMariusOrHis } from "./profile-theme-intent";

/** Named third parties the assistant may answer about explicitly — not default «hans». */
const OTHER_PERSON_FOCUS =
  /\b(thomas\s+holm|ai\s+discovery.*holm|hvem\s+står\s+ bak|who\s+is\s+behind\s+row|row\s+solutions\s+.*\b(team|founders?))\b/i;

/**
 * Spørsmål i Marius-assistenten uten tydelig annen referent → Marius som subjekt.
 * Unngå å overstyre når brukeren åpenbart spør om andre (f.eks. Thomas Holm).
 */
export function isQuestionAboutMarius(question: string): boolean {
  const q = question.trim();
  if (!q) return false;
  if (OTHER_PERSON_FOCUS.test(q) && !/\bmarius\b/i.test(q)) return false;
  if (/\b(marius|ottesen)\b/i.test(q)) return true;
  if (refersToMariusOrHis(q)) return true;
  if (/\b(hun|hennes|she|her|they|them|their|de\b|dem\b)\b/i.test(q)) return false;
  return true;
}

/** Kun for scoring/retrieval — ikke som fakta i svar. */
export function augmentForSiteSubjectRetrieval(question: string, maxChars: number): string {
  if (/\bmarius\b/i.test(question)) return question;
  if (!isQuestionAboutMarius(question)) return question;
  const hint = `${question} (Marius Ottesen)`;
  return hint.length <= maxChars ? hint : question;
}