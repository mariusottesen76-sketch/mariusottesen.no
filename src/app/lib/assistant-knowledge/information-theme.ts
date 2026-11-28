/**
 * Felles tematiske mønstre — semantisk like spørsmål skal treffe samme behandling.
 * Ikke parallelle svarregistre; kun delte intent-signaler.
 */

/** Utdanning / akademisk bakgrunn — ikke undervisningserfaring. */
export const EDUCATION_TOPIC =
  /\b(utdanning|utdannelse|utdann\w*|education|educational|kvalifikasjon\w*|qualifications?|studert|studerte|studies|studied|study|studying|studie|studier|degree|degrees|grader|grades|akademisk|academic|skole|school|universitet|university|høyskole|college|bakgrunn|background|formell\s+kompetanse|credentials?)\b/i;

const EDUCATION_TEACHING_EXCLUDE =
  /\b(undervist|underviser|foreleser|lectur|teaching\s+at|taught\s+at|teach(es|ing)?\s+at)\b/i;

export function isEducationTopic(question: string): boolean {
  const q = question.trim();
  if (!q) return false;
  if (!EDUCATION_TOPIC.test(q)) return false;
  return !EDUCATION_TEACHING_EXCLUDE.test(q);
}

export const CAREER_EMPLOYERS_TOPIC =
  /\b(arbeidsgiver\w*|employers?|jobbet\s+(hos|for)|worked\s+(at|for)|tidligere\s+jobb|previous\s+jobs|karriere|career|erfaring|experience)\b/i;

export const POSITIONS_TOPIC =
  /\b(stilling\w*|positions?|roller|roles|tittel\w*|titles?|jobb\w*|jobs)\b/i;

export const TARGET_ROLES_TOPIC =
  /\b(aktuell\s+for|relevant\s+for|lederroller|leadership\s+roles|target\s+roles|fremtidige\s+roller|future\s+roles)\b/i;

export const CONTACT_TOPIC =
  /\b(kontakt\w*|contact\w*|telefon|phone|e-?post|email|linkedin|skjema|form|nå\s+marius|reach\s+marius)\b/i;

export const REFERENCES_TOPIC =
  /\b(referanser?|references?|testimonials?|anbefaling\w*|endorsements?)\b/i;

export const MOC_TOPIC =
  /\b(moc\b|marius\s+ottesen\s+consulting|consulting-tjenester|consulting\s+packages?|rådgivning|advisory)\b/i;

export const ROW_TOPIC =
  /\b(row\s+solutions|row\s+consulting|\brow\b.*\b(smb|solutions|consulting|hjelp|help|tilbyr|offer))|(?:hva|what)\s+(?:er|kan\s+du\s+si\s+om|tilbyr)\s+row\b/i;

export const AI_PORTFOLIO_TOPIC =
  /\b(ai\s*[- ]?prosjekter|ai\s+projects|ai-verktøy|ai\s+tools|praktisk\s+ai|practical\s+ai|portfolio|prosjekter\s+.*\bai\b)/i;

export const INSIGHT_TOPIC =
  /\b(faginnlegg|innsikt|insights?|artikler?\b|articles?\b|fagartikler?)\b/i;

export const BOOK_TOPIC = /\b(verdiskiftet|bok|book)\b/i;