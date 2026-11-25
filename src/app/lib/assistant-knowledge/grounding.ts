import type { KnowledgeCategory, KnowledgeExcerpt, KnowledgeManifestEntry } from "./types";
import { stripHtmlToPlainText } from "./text-utils";

/**
 * Whether a source can support factual ANSWER-class responses (not just navigation).
 * Distinct from manifest `excerptLevel` which describes cataloguing defaults.
 */
export type KnowledgeGrounding = "substantive" | "metadata_only" | "insufficient";

/** Minimum plain-text length for substantive factual grounding (tabs, CV, experience). */
export const SUBSTANTIVE_MIN_CHARS = 160;

/** Articles need more body text before treating claims as documented. */
export const ARTICLE_SUBSTANTIVE_MIN_CHARS = 450;

export type KnowledgeGroundingAssessment = {
  grounding: KnowledgeGrounding;
  /** Safe to cite for specific factual claims in Oppdrag 03+ when combined with ANSWER policy. */
  suitableForFactualAnswer: boolean;
  plainTextLength: number;
};

export function plainTextLength(text: string): number {
  return stripHtmlToPlainText(text).length;
}

export function assessGroundingFromExcerpt(
  entry: KnowledgeManifestEntry,
  excerpt: KnowledgeExcerpt
): KnowledgeGroundingAssessment {
  const len = plainTextLength(excerpt.text);
  const level = excerpt.level;

  const tabLike = new Set<KnowledgeCategory>([
    "profile",
    "experience",
    "results",
    "references",
    "consulting",
    "cv",
    "contact",
    "book",
    "legal",
  ]);

  if (entry.category === "hub") {
    return { grounding: "metadata_only", suitableForFactualAnswer: false, plainTextLength: len };
  }

  if (entry.category === "article") {
    const substantive = level === "partial" && len >= ARTICLE_SUBSTANTIVE_MIN_CHARS;
    return {
      grounding: substantive ? "substantive" : "metadata_only",
      suitableForFactualAnswer: substantive,
      plainTextLength: len,
    };
  }

  if (entry.category === "project") {
    const substantive = level === "partial" && len >= SUBSTANTIVE_MIN_CHARS;
    return {
      grounding: substantive ? "substantive" : len > 0 ? "metadata_only" : "insufficient",
      suitableForFactualAnswer: substantive,
      plainTextLength: len,
    };
  }

  if (tabLike.has(entry.category)) {
    const substantive = level === "partial" && len >= SUBSTANTIVE_MIN_CHARS;
    return {
      grounding: substantive ? "substantive" : len > 0 ? "metadata_only" : "insufficient",
      suitableForFactualAnswer: substantive,
      plainTextLength: len,
    };
  }

  const fallbackSubstantive = level !== "metadata_only" && len >= SUBSTANTIVE_MIN_CHARS;
  return {
    grounding: fallbackSubstantive ? "substantive" : len > 0 ? "metadata_only" : "insufficient",
    suitableForFactualAnswer: fallbackSubstantive,
    plainTextLength: len,
  };
}
