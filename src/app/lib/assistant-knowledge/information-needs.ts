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

export function isAuthorshipQuestion(question: string): boolean {
  const q = question.trim();
  if (/\bprosjekter?\b/i.test(q) && !/\b(skrevet|written|artikkel|article|faginnlegg)\b/i.test(q)) return false;
  return /\b(skrevet|skriver|written|writes|authored|fagartikler?|artikler?\s+(om|about)|articles?\s+about|what\s+has\s+marius\s+written|has\s+he\s+written)\b/i.test(
    q
  );
}

export function isHiringQuestion(question: string): boolean {
  const q = question.trim();
  return /\b(ansette|ansett|hire|hiring|rekruttere|why\s+(should|would)\s+we\s+hire|bør\s+vi\s+ansette)\b/i.test(q);
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