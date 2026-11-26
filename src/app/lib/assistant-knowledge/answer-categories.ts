/**
 * Future chat response policy (Oppdrag 03+) — types and rule hooks only, no AI classification.
 */

export type AssistantAnswerCategory = "ANSWER" | "NOT_ON_SITE" | "RESTRICTED" | "OFF_TOPIC";

export type AssistantTopicScope =
  | "leadership_cv_results"
  | "moc_consulting"
  | "ai_projects_book_articles"
  | "contact_navigation"
  | "private_sensitive"
  | "off_topic"
  | "security_abuse";

/** Maps grounding assessment to the default category when a question is in-scope and not restricted/off-topic. */
export function defaultCategoryForGrounding(
  suitableForFactualAnswer: boolean
): Extract<AssistantAnswerCategory, "ANSWER" | "NOT_ON_SITE"> {
  return suitableForFactualAnswer ? "ANSWER" : "NOT_ON_SITE";
}