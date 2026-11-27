/** Classify broad user intents so main tabs beat incidental article token matches. */

export function isValueCreationQuestion(question: string): boolean {
  const q = question.trim();
  if (/\b(skrevet|written|artikkel|article|faginnlegg|innsikt)\b/i.test(q)) return false;
  return (
    /\b(skaper\s+verdi|skaper\b(?:\s+\w+){0,3}\s+verdi\b|creates?\s+(?:\w+\s+){0,3}value|create\s+(?:\w+\s+){0,2}value|verdiskaping|value\s+creation)\b/i.test(
      q
    ) || /\b(how\s+does\s+marius\s+create\s+value)\b/i.test(q)
  );
}

/** Resultatskaping — kobles til verdiskaping og dokumenterte proof points. */
export function isResultsImpactQuestion(question: string): boolean {
  const q = question.trim();
  if (/\b(skrevet|written|artikkel|article)\b/i.test(q)) return false;
  if (isValueCreationQuestion(q)) return false;
  return (
    /\b((hvordan\s+)?skaper\s+(\w+\s+){0,2}resultat\w*|creates?\s+results?|create\s+results?|how\s+does\s+(he|marius)\s+create\s+results?)\b/i.test(
      q
    ) && /\b(marius|han|he|him|his)\b/i.test(q)
  );
}

export function isAuthorshipQuestion(question: string): boolean {
  const q = question.trim();
  if (/\bprosjekter?\b/i.test(q) && !/\b(skrevet|written|artikkel|article|faginnlegg)\b/i.test(q)) return false;
  return /\b(skrevet|skriver|written|writes|authored|fagartikler?|artikler?\s+(om|about)|articles?\s+about|what\s+has\s+marius\s+written|has\s+he\s+written)\b/i.test(
    q
  );
}

export function isHiringQuestion(question: string): boolean {
  const q = question.trim();
  return /\b(ansette|ansett|rekruttere|bør\s+vi\s+ansette|vurdere\s+(han|marius)\s+som|hire|hiring|recruit|recruiting|why\s+(should|would)\s+we\s+hire|should\s+we\s+hire|worth\s+hiring|consider\s+(him|marius)\s+for|good\s+fit\s+for\s+(a\s+)?(leadership|commercial))\b/i.test(
    q
  );
}

export function isExplicitArticleTopicQuestion(question: string): boolean {
  const q = question.trim();
  if (!isAuthorshipQuestion(q) && !/\b(faginnlegg|innsikt|articles?|artikler)\b/i.test(q)) return false;
  return /\b(om\s+\w|about\s+\w|handler\s+om|ledelse|leadership|transformasjon|ai\b)/i.test(q);
}

export function prefersMainSiteTabs(question: string): boolean {
  return (
    isValueCreationQuestion(question) ||
    isHiringQuestion(question) ||
    (/\b(hva\s+kan\s+marius|what\s+can\s+marius)\b/i.test(question) &&
      !isAuthorshipQuestion(question) &&
      !/\b(prosjekt|project|artikkel|article)\b/i.test(question))
  );
}