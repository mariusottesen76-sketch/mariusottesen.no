import type { Lang } from "../../LanguageContext";
import type { AssistantAnswerCategory } from "./answer-categories";

export type AssistantErrorCode =
  | "invalid_request"
  | "question_too_long"
  | "ai_disabled"
  | "ai_unconfigured"
  | "model_error"
  | "validation_failed"
  | "timeout"
  | "rate_limited";

export type AssistantConversationFocus = {
  employerKey?: string;
};

export type AssistantRequestBody = {
  question: string;
  lang?: Lang;
  /** Valgfri, allowlist-validert samtalekontekst fra klient (ingen historikk). */
  context?: AssistantConversationFocus;
};

export type AssistantResponseBody = {
  category: AssistantAnswerCategory;
  answer: string;
  lang: Lang;
  sourceIds: string[];
  urls: string[];
  errorCode?: AssistantErrorCode;
  /** Tillatt arbeidsgiverfokus for neste tur (allowlist). */
  conversationFocus?: AssistantConversationFocus;
};

export type ModelReplyPayload = {
  category: AssistantAnswerCategory;
  answer: string;
  sourceIds: string[];
};

export type SourceContext = {
  sourceId: string;
  title: string;
  url: string;
  excerptText: string;
  suitableForFactualAnswer: boolean;
};