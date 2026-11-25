import type { AssistantAnswerCategory } from "./answer-categories";
import { getKnowledgeManifestEntryById, listKnowledgeManifestEntries } from "./manifest";
import type { Lang } from "../../LanguageContext";
import type { ModelReplyPayload, SourceContext } from "./assistant-types";

const ALLOWED_URLS = new Set(listKnowledgeManifestEntries().map((e) => e.canonicalUrl));

export function urlsForSourceIds(sourceIds: string[]): string[] {
  const urls: string[] = [];
  for (const id of sourceIds) {
    const entry = getKnowledgeManifestEntryById(id);
    if (entry && ALLOWED_URLS.has(entry.canonicalUrl)) {
      urls.push(entry.canonicalUrl);
    }
  }
  return [...new Set(urls)];
}

export function validateModelPayload(
  payload: ModelReplyPayload,
  contexts: SourceContext[],
  lang: Lang
): { ok: true; payload: ModelReplyPayload } | { ok: false; reason: string } {
  if (!payload.answer?.trim()) {
    return { ok: false, reason: "empty_answer" };
  }
  if (payload.answer.length > 4_000) {
    return { ok: false, reason: "answer_too_long" };
  }

  const allowedIds = new Set(contexts.map((c) => c.sourceId));
  const cited = payload.sourceIds ?? [];
  if (payload.category === "ANSWER") {
    if (cited.length === 0) {
      return { ok: false, reason: "answer_without_sources" };
    }
    for (const id of cited) {
      if (!allowedIds.has(id)) {
        return { ok: false, reason: "unknown_source_id" };
      }
      const entry = getKnowledgeManifestEntryById(id);
      if (!entry || entry.lang !== lang) {
        return { ok: false, reason: "wrong_lang_source" };
      }
    }
    const hasSubstantive = cited.some((id) => {
      const ctx = contexts.find((c) => c.sourceId === id);
      return ctx?.suitableForFactualAnswer;
    });
    if (!hasSubstantive) {
      return { ok: false, reason: "insufficient_grounding" };
    }
  }

  const validCategories: AssistantAnswerCategory[] = [
    "ANSWER",
    "NOT_ON_SITE",
    "RESTRICTED",
    "OFF_TOPIC",
  ];
  if (!validCategories.includes(payload.category)) {
    return { ok: false, reason: "invalid_category" };
  }

  return { ok: true, payload };
}

export function assertUrlsAllowed(urls: string[]): boolean {
  return urls.every((u) => ALLOWED_URLS.has(u));
}