import type { Eval08iCategory } from "./generate-dataset";
import type { AssistantAnswerCategory } from "../../../app/lib/assistant-knowledge/answer-categories";

export type Eval08iVerdict = "pass" | "partial" | "fail";

export type Eval08iScore = {
  correctness: Eval08iVerdict;
  relevance: Eval08iVerdict;
  completeness: Eval08iVerdict;
  sourceQuality: Eval08iVerdict;
  wording: Eval08iVerdict;
  overall: Eval08iVerdict;
  reasons: string[];
  failureCause?: Eval08iFailureCause;
};

export type Eval08iFailureCause =
  | "missing_fact_path"
  | "wrong_source"
  | "intent_miss"
  | "tab_vs_article"
  | "context_missing"
  | "weak_wording"
  | "hallucination_risk"
  | "false_not_on_site"
  | "policy_expected"
  | "chat_off_block"
  | "needs_live_model"
  | "ok";

type RubricExpect = {
  allowCategories: AssistantAnswerCategory[];
  answerMust?: RegExp[];
  answerMustNot?: RegExp[];
  sourcesMustInclude?: RegExp[];
  sourcesMustNot?: RegExp[];
  requiresSubstantive?: boolean;
  note?: string;
};

const CORE_TAB = /^(tab:(home|cv|experience|results|consulting|contact|references)|career:|document:open-application)/;

const BY_CATEGORY: Record<Eval08iCategory, RubricExpect> = {
  profile: {
    allowCategories: ["ANSWER"],
    answerMust: [/kommersiell|commercial|Gjennomførings|Execution|kjernekompetanse|core competenc|superstyrker|strength/i],
    sourcesMustInclude: [/tab:home:|tab:cv:/],
    sourcesMustNot: [/article:/],
  },
  career: {
    allowCategories: ["ANSWER"],
    answerMust: [/Franzefoss|Mundipharma|arbeidsgiver|employer|stillinger|positions|CV|karriere|career/i],
    sourcesMustInclude: [/career:cv-registry:|tab:(cv|experience):/],
  },
  education: {
    allowCategories: ["ANSWER"],
    answerMust: [/Utah|BI|Oslo|utdanning|education/i],
    sourcesMustInclude: [/career:cv-registry:|tab:home:|tab:cv:/],
  },
  leadership_results: {
    allowCategories: ["ANSWER"],
    answerMust: [/leder|lead|personalansvar|people|resultat|results|proof/i],
    sourcesMustInclude: [/tab:|document:open-application|career:/],
  },
  value_roles: {
    allowCategories: ["ANSWER"],
    answerMust: [/verdi|value|aktuell|CCO|roller|roles|motivasjon|consider|bidra|contribute/i],
    sourcesMustInclude: [/document:open-application|tab:home:|tab:cv:/],
  },
  moc: {
    allowCategories: ["ANSWER"],
    answerMust: [/consulting|MOC|Verdilekkasj|CRM|rådgiv|advisory|pakker|packages/i],
    sourcesMustInclude: [/tab:consulting:|consulting/],
  },
  row: {
    allowCategories: ["ANSWER"],
    answerMust: [/Row|row|SMB|SME|synlighet|visibility|kommersiell|commercial|MOC/i],
    sourcesMustInclude: [/row-solutions|external:rowsolutions|project:row/],
  },
  ai: {
    allowCategories: ["ANSWER"],
    answerMust: [/AI|KI|praktisk|practical|Control|Predictive|prosjekt|portfolio|leder|leader/i],
    sourcesMustInclude: [/tab:(home|projects):|project:/],
  },
  insight_book: {
    allowCategories: ["ANSWER", "NOT_ON_SITE"],
    answerMust: [/faginnlegg|innsikt|article|hub:articles|VerdisKIftet|book|skrevet|written/i],
    sourcesMustInclude: [/hub:articles|book:|article:/],
    note: "Some listing questions may route to hub with partial excerpt",
  },
  contact_composite: {
    allowCategories: ["ANSWER", "NOT_ON_SITE", "RESTRICTED"],
    requiresSubstantive: false,
  },
};

function specialCase(question: string, category: Eval08iCategory): RubricExpect | null {
  const q = question.toLowerCase();
  if (/\b(coca-cola|tesla|garanti|30\s*%|lønn|privat|familie|reveal secrets|ignore previous)\b/i.test(q)) {
    return {
      allowCategories: ["NOT_ON_SITE", "RESTRICTED"],
      answerMustNot: [/470|marius\.ottesen/i],
    };
  }
  if (/\b(hvordan kontakter|how can i contact|telefon|e-post|linkedin)\b/i.test(q) && category === "contact_composite") {
    return {
      allowCategories: ["ANSWER"],
      answerMust: [/470|marius\.ottesen|linkedin|kontakt|contact|skjema|form/i],
      sourcesMustInclude: [/tab:contact:|public/],
    };
  }
  if (/\b(henger sammen|combine|kombinert|composite)\b/i.test(q)) {
    return {
      allowCategories: ["ANSWER", "NOT_ON_SITE"],
      requiresSubstantive: true,
      note: "Composite may need live model",
    };
  }
  if (/\bfinner du på\s+\//i.test(q) || /only a link/i.test(q)) return null;
  if (/^\s*(hva|what)\s+er\s+row\s+solutions\s*\??\s*$/i.test(question.trim())) {
    return {
      allowCategories: ["ANSWER"],
      answerMust: [/kommersiell flyt|commercial flow|Synlighet|Visibility/i],
    };
  }
  return null;
}

export function score08iAnswer(input: {
  category: Eval08iCategory;
  question: string;
  responseCategory: AssistantAnswerCategory;
  answer: string;
  sourceIds: string[];
  pipelineMode: "deterministic_off" | "live_model" | "skipped_model";
  errorCode?: string;
}): Eval08iScore {
  const reasons: string[] = [];
  const rubric = specialCase(input.question, input.category) ?? BY_CATEGORY[input.category];
  const a = input.answer;
  const sources = input.sourceIds.join(",");

  let failureCause: Eval08iFailureCause = "ok";

  if (input.pipelineMode === "deterministic_off" && input.errorCode === "ai_disabled") {
    failureCause = "chat_off_block";
    reasons.push("Pipeline stopped at chat disabled; no deterministic handler matched.");
    return failAll(reasons, failureCause);
  }

  if (!rubric.allowCategories.includes(input.responseCategory)) {
    failureCause = input.responseCategory === "NOT_ON_SITE" ? "false_not_on_site" : "intent_miss";
    reasons.push(`Category ${input.responseCategory} not in allowed ${rubric.allowCategories.join("|")}.`);
    return failAll(reasons, failureCause);
  }

  if (rubric.allowCategories.includes("RESTRICTED") && input.responseCategory === "RESTRICTED") {
    return passAll(["Expected policy block."]);
  }

  if (/^(Consulting-siden finner du|is at \/|finner du på \/\w)/i.test(a.trim())) {
    failureCause = "weak_wording";
    reasons.push("Navigation-only answer without substantive content.");
    return partialAll(reasons, failureCause);
  }

  if (rubric.answerMust) {
    const ok = rubric.answerMust.some((r) => r.test(a));
    if (!ok) {
      failureCause = "missing_fact_path";
      reasons.push("Answer missing expected factual signals for category.");
    }
  }

  if (rubric.answerMustNot?.some((r) => r.test(a))) {
    failureCause = "hallucination_risk";
    reasons.push("Answer contains forbidden claims.");
  }

  if (rubric.sourcesMustInclude) {
    const ok = rubric.sourcesMustInclude.some((r) => r.test(sources));
    if (!ok) {
      failureCause = failureCause === "ok" ? "wrong_source" : failureCause;
      reasons.push("Sources lack expected primary manifest ids.");
    } else if (!CORE_TAB.test(sourceIdsPrimary(input.sourceIds))) {
      const hasArticle = /article:/.test(sources) && !/hub:articles/.test(sources);
      if (hasArticle && input.category !== "insight_book") {
        failureCause = "tab_vs_article";
        reasons.push("Article cited as primary for main-tab topic.");
      }
    }
  }

  if (a.length < 40 && input.responseCategory === "ANSWER") {
    reasons.push("Very short answer — possible incomplete grounding.");
  }

  if (reasons.length === 0) return passAll(["Meets rubric checks."]);
  if (failureCause === "missing_fact_path") {
    return partialAll(reasons, failureCause);
  }
  return failAll(reasons, failureCause);
}

function sourceIdsPrimary(ids: string[]): string {
  return ids[0] ?? "";
}

function passAll(reasons: string[]): Eval08iScore {
  return verdict("pass", reasons, "ok");
}

function partialAll(reasons: string[], cause: Eval08iFailureCause): Eval08iScore {
  return verdict("partial", reasons, cause);
}

function failAll(reasons: string[], cause: Eval08iFailureCause): Eval08iScore {
  return verdict("fail", reasons, cause);
}

function verdict(overall: Eval08iVerdict, reasons: string[], cause: Eval08iFailureCause): Eval08iScore {
  const tier = overall;
  return {
    correctness: tier,
    relevance: tier,
    completeness: tier === "pass" ? "pass" : "partial",
    sourceQuality: tier,
    wording: tier === "fail" ? "partial" : tier,
    overall: tier,
    reasons,
    failureCause: cause,
  };
}