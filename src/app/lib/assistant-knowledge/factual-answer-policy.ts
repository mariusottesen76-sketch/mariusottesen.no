/**
 * Separates "source has substantive text" from "this question can be answered from it".
 * Conservative deterministic rules — no LLM emulation.
 */

export type FactualAnswerPolicy = {
  /** The specific claim or data point is unlikely to be documented verbatim on-site. */
  undocumentedFactRequest: boolean;
  /** Needs model to judge excerpt vs question (private tone, mixed, semantics). */
  requiresModelJudgment: boolean;
  /** Pricing, guarantees, availability dates, headcount precision, etc. */
  commercialUndocumented: boolean;
  /** Questions that assert a number/percentage and ask to confirm. */
  unverifiedClaimPremise: boolean;
  /** Private life / wealth / family / health — not professional CV facts. */
  privatePersonal: boolean;
  reasons: string[];
};

const IN_SCOPE_HINT =
  /\b(marius|ottesen|consulting|moc|norengros|franzefoss|verdiskiftet|faginnlegg|prosjekt|cv|erfaring|resultat|consulting|ai[-\s]?prosjekt|leder|rekrutt|bok|article)\b/i;

const COMMERCIAL_UNDOCUMENTED =
  /\b(hvor\s+mye\s+koster|hva\s+koster|how\s+much\s+(does|is)|what\s+does\s+.*\s+cost|pris|prisliste|price|pricing|dag\s+med|per\s+dag|day\s+rate|garanti|guarantee|leveransegaranti|promis(e|ed)\s+.*\b(roi|garant)|guaranteed\s+roi|mrr|arr|monthly\s+active|betalende\s+kunder|paying\s+customers|gratis|free\s+consultation|skriftlig\s+leveranse|notice\s+period|oppsigelsestid|book.*\d+\s*time|48\s*timer|immediately|starte\s+neste)\b/i;

const MIXED_IN_SCOPE =
  /\b(og\s+|,|;\s*and\s+)(?=.+\b(pris|koster|garanti|ledig|tilgjengelig|måned|users|mrr))/i;

const UNVERIFIED_CLAIM =
  /\b(økte|øker|increased|increase|sank|reduserte|confirm|bekreft\w*|sant\?|true\?|\d+\s*(prosent|%|million|mill))\b/i;

const PRIVATE_PERSONAL =
  /\b(familien|family|barn|children|barna|gift\s+med|married|personnummer|net\s+worth|formue|bankkonto|helseproblem\w*|health\s+problem|private\s+e-?mail|hjemme|husadresse|personal\s+mobile|hvor\s+bor|where\s+does\s+he\s+live|barna\s+til|weekends?\s+with)\b/i;

const PROFESSIONAL_CONTACT =
  /\b(kontakt|contact|profesjonell|professional|nå\s+marius|reach\s+marius|samarbeid|collaboration|linkedin)\b/i;

export function assessFactualAnswerPolicy(question: string): FactualAnswerPolicy {
  const q = question.trim();
  const reasons: string[] = [];
  let commercialUndocumented = COMMERCIAL_UNDOCUMENTED.test(q);
  const unverifiedClaimPremise =
    UNVERIFIED_CLAIM.test(q) &&
    /\b(bekreft|confirm|sant|true|\?|økte|øker|increased|increase|\d+\s*(%|prosent|percent))/i.test(q);
  const privatePersonal = PRIVATE_PERSONAL.test(q) && !PROFESSIONAL_CONTACT.test(q);

  if (/\b(antall\s+ansatte|mange\s+ansatte|how\s+many\s+employees|pmp|sertifisert\s+projektleder|administrerende\s+direktør|ceo\s+of)\b/i.test(q)) {
    commercialUndocumented = true;
    reasons.push("precise_role_or_cert");
  }

  if (commercialUndocumented) reasons.push("commercial_undocumented");
  if (unverifiedClaimPremise) reasons.push("unverified_claim_premise");
  if (privatePersonal) reasons.push("private_personal");

  const undocumentedFactRequest =
    commercialUndocumented || unverifiedClaimPremise || privatePersonal;

  const requiresModelJudgment =
    undocumentedFactRequest ||
    /\b(forfatter|mening\s+privat|because\s+of\s+a\s+conflict|hva\s+mener\s+han\s+privat|widget\s+.*\s+besøkende|allerede\s+lansert|live\s+widget)\b/i.test(q);

  return {
    undocumentedFactRequest,
    requiresModelJudgment,
    commercialUndocumented,
    unverifiedClaimPremise,
    privatePersonal,
    reasons,
  };
}

function isMixedInScopeQuestion(question: string): boolean {
  return IN_SCOPE_HINT.test(question) && MIXED_IN_SCOPE.test(question);
}

/** When true, pipeline should not treat substantive tabs as permission to ANSWER specific facts. */
export function shouldAnswerConservatively(question: string): boolean {
  const policy = assessFactualAnswerPolicy(question);
  if (isMixedInScopeQuestion(question) && !policy.privatePersonal && !policy.unverifiedClaimPremise) {
    return false;
  }
  if (policy.privatePersonal || policy.unverifiedClaimPremise) return true;
  if (policy.commercialUndocumented) {
  if (/\b(neste\s+måned|next\s+month)\b/i.test(question) && IN_SCOPE_HINT.test(question)) {
      return false;
    }
    return true;
  }
  return false;
}