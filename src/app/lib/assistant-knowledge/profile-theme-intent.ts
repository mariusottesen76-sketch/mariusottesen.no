/** Gjenbrukbare tema- og intensjonsregler for profil (ikke parallelle datakilder). */

export function refersToMariusOrHis(question: string): boolean {
  const q = question.trim();
  return (
    /\b(marius|han|hans|ham\b|his\b|he\b|him\b)\b/i.test(q) ||
    /^\s*(superstyrker?|kjernekompetanse|core\s+competenc\w*)\s*\??\s*$/i.test(q)
  );
}

/** Ledertype-/stilspørsmål skal ikke til personlige superstyrker. */
export function isLeadershipStyleOrTargetFraming(question: string): boolean {
  return /\b(sine\s+lederroller|lederroller\s+han|lederstil|leadership\s+style|how\s+does\s+he\s+lead|leads\s+people|target\s+roles|aktuell\s+for\s+roller)\b/i.test(
    question
  );
}

const STRENGTH_THEME =
  /\b(superstyrk\w*|signature\s+strength\w*|personal\s+strength\w*|leadership\s+strength\w*|sterke\s+sider|styrkeside\w*|egenskaper|viktigste\s+egenskaper|traits?|key\s+traits?|personal\s+qualities|characteristics?)\b/i;

function matchesCompetencyIntent(q: string): boolean {
  return (
    /\b(kjernekompetanse|core\s+competenc\w*|kjerne\s+kompetanse|key\s+competenc\w*)\b/i.test(q) ||
    /god\s+på/i.test(q) ||
    /\b(good\s+at|skilled\s+at|strongest\s+skills|leadership\s+competenc\w*|faglig\s+styrke|professional\s+strengths?)\b/i.test(
      q
    ) ||
    /\bwhat\s+is\s+(marius|he)\s+good\s+at\b/i.test(q) ||
    /\bhva\s+er\s+(marius|han|hans)\s+god\s+på/i.test(q)
  );
}

/** Personlige superstyrker (profil.styrker) — ikke kjernekompetanse-listen. */
export function isPersonalStrengthsQuestion(question: string): boolean {
  const q = question.trim();
  if (!q) return false;
  if (
    /^\s*(superstyrker?|signature\s+strengths?|personal\s+strengths?|leadership\s+strengths?|sterke\s+sider)\s*\??\s*$/i.test(
      q
    )
  ) {
    return true;
  }
  if (/\b(row\s+solutions|moc\b)\b/i.test(q)) return false;
  if (isLeadershipStyleOrTargetFraming(q)) return false;
  if (matchesCompetencyIntent(q) && !STRENGTH_THEME.test(q)) return false;
  if (STRENGTH_THEME.test(q)) {
    return refersToMariusOrHis(q) || /\b(hans|his)\b/i.test(q);
  }
  if (
    /\b(hva\s+kjennetegner|what\s+characteri[sz]es)\b/i.test(q) &&
    /\b(marius|han|him)\b/i.test(q) &&
    !isLeadershipStyleOrTargetFraming(q)
  ) {
    return true;
  }
  return false;
}

/** Kjernekompetanse (profil.kompetanse) — kommersiell ledelse først. */
export function isCoreCompetencyQuestion(question: string): boolean {
  const q = question.trim();
  if (!q) return false;
  if (isPersonalStrengthsQuestion(q) && STRENGTH_THEME.test(q) && !matchesCompetencyIntent(q)) return false;
  if (/^\s*(kjernekompetanse|core\s+competenc\w*)\s*\??\s*$/i.test(q)) return true;
  if (/\b(row\s+solutions|article|artikkel)\b/i.test(q)) return false;
  if (matchesCompetencyIntent(q)) {
    return refersToMariusOrHis(q) || /\b(hans|his)\b/i.test(q);
  }
  return false;
}

/** Bidrag i ledergruppe / lederteam — profil + kompetanse, ikke fremtidige målroller. */
export function isLeadershipContributionQuestion(question: string): boolean {
  const q = question.trim();
  if (isLeadershipStyleOrTargetFraming(q) && !/\b(bidra|contribute)\b/i.test(q)) return false;
  if (
    /\b(bidra|bidr|contribute|bidra\s+med)\b/i.test(q) &&
    /\b(ledergruppe|lederteam|leadership\s+team|management\s+team|executive\s+team|top\s+team)\b/i.test(q)
  ) {
    return refersToMariusOrHis(q);
  }
  if (/\bwhat\s+can\s+(he|marius)\s+contribute\b/i.test(q) && /\b(leader|leadership|team|commercial)\b/i.test(q)) {
    return true;
  }
  return false;
}