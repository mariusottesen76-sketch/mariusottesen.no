import type { AssistantAnswerCategory } from "../../app/lib/assistant-knowledge/answer-categories";
import type { Lang } from "../../app/LanguageContext";

/** Topic buckets aligned with Oppdrag 04A test areas. */
export type EvalTopicArea =
  | "leadership_cv_results"
  | "moc_consulting"
  | "ai_projects_book_articles"
  | "private_sensitive"
  | "off_topic"
  | "security_abuse";

/**
 * Which deterministic layer this case primarily exercises.
 * `pipeline_mock` still uses no Anthropic — injected callModel only.
 */
export type EvalLayer =
  | "policy"
  | "source_selection"
  | "grounding"
  | "deterministic_pipeline"
  | "pipeline_mock";

export type EvalCase = {
  id: string;
  lang: Lang;
  question: string;
  topic: EvalTopicArea;
  expectedCategory: AssistantAnswerCategory;
  expectedSourceIds?: string[];
  /** Alternate manifest ids that also satisfy the question (union with expectedSourceIds). */
  acceptableSourceIds?: string[];
  expectedBehavior: string;
  layer: EvalLayer;
  notes?: string;
  /** Set when expected outcome depends on editorial judgment or live model tone. */
  manualReview?: boolean;
};

export type EvalCaseOutcome = {
  id: string;
  topic: EvalTopicArea;
  layer: EvalLayer;
  passed: boolean;
  expectedCategory: AssistantAnswerCategory;
  actualCategory?: AssistantAnswerCategory;
  preModelCategory?: AssistantAnswerCategory | "none";
  sourceMatch?: boolean;
  groundingOk?: boolean;
  urlsValid?: boolean;
  langOk?: boolean;
  details?: string;
  manualReview?: boolean;
};

export type EvalReport = {
  generatedAt: string;
  totalCases: number;
  passed: number;
  failed: number;
  manualReviewCount: number;
  byTopic: Record<EvalTopicArea, { total: number; passed: number; failed: number }>;
  byLayer: Record<EvalLayer, { total: number; passed: number; failed: number }>;
  categoryAccuracy: {
    evaluated: number;
    correct: number;
    percent: number;
  };
  sourceSelection: {
    evaluated: number;
    correct: number;
    percent: number;
  };
  grounding: {
    evaluated: number;
    correct: number;
    percent: number;
  };
  falseRejections: number;
  wrongAnswerCategory: number;
  invalidUrls: number;
  securityDeviations: number;
  langMismatches: number;
  outcomes: EvalCaseOutcome[];
};