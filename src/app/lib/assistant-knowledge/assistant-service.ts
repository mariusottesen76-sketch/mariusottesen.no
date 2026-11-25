import type { Lang } from "../../LanguageContext";
import type { AssistantAnswerCategory } from "./answer-categories";
import { ASSISTANT_LIMITS, getAssistantRuntimeConfig, type AssistantRuntimeConfig } from "./assistant-config";
import { callAnthropicModel, type ModelCallResult, parseModelJson } from "./anthropic-caller";
import { fixedReply, contactPath } from "./fixed-replies";
import { lookupKnowledgeSource } from "./lookup";
import { buildSystemPrompt, buildUserPrompt } from "./model-prompt";
import { shouldAnswerConservatively } from "./factual-answer-policy";
import { classifyQuestionPreModel, detectQuestionLang, isNavigationQuestion } from "./question-policy";
import { selectRelevantSourceIds } from "./source-selection";
import { urlsForSourceIds, validateModelPayload, assertUrlsAllowed } from "./validate-response";
import type {
  AssistantErrorCode,
  AssistantRequestBody,
  AssistantResponseBody,
  ModelReplyPayload,
  SourceContext,
} from "./assistant-types";

export type AssistantServiceDeps = {
  config: AssistantRuntimeConfig;
  callModel?: (input: {
    apiKey: string;
    model: string;
    system: string;
    userMessage: string;
    signal?: AbortSignal;
  }) => Promise<ModelCallResult>;
};

function buildResponse(
  category: AssistantAnswerCategory,
  answer: string,
  lang: Lang,
  sourceIds: string[],
  errorCode?: AssistantErrorCode
): AssistantResponseBody {
  const urls = urlsForSourceIds(sourceIds);
  if (!assertUrlsAllowed(urls)) {
    return {
      category: "NOT_ON_SITE",
      answer: fixedReply("NOT_ON_SITE", lang),
      lang,
      sourceIds: [],
      urls: [],
      errorCode: "validation_failed",
    };
  }
  return { category, answer, lang, sourceIds, urls, errorCode };
}

function loadSourceContexts(sourceIds: string[], lang: Lang): SourceContext[] {
  const contexts: SourceContext[] = [];
  for (const id of sourceIds) {
    const res = lookupKnowledgeSource(id, lang);
    if (!res.ok) continue;
    contexts.push({
      sourceId: res.entry.id,
      title: res.entry.title,
      url: res.entry.canonicalUrl,
      excerptText: res.excerpt.text,
      suitableForFactualAnswer: res.grounding.suitableForFactualAnswer,
    });
  }
  return contexts;
}

function pickNavigationContext(question: string, contexts: SourceContext[]): SourceContext {
  const q = question.toLowerCase();
  const rules: Array<{ hint: RegExp; idHint: RegExp }> = [
    { hint: /\b(cv)\b/i, idHint: /:cv:/ },
    { hint: /\b(kontakt|contact|skjema)\b/i, idHint: /:contact:/ },
    { hint: /\b(erfaring|experience)\b/i, idHint: /:experience:/ },
    { hint: /\b(resultat|results)\b/i, idHint: /:results:/ },
    { hint: /\b(consulting|konsulent|rådgiv)\b/i, idHint: /:consulting:/ },
    { hint: /\b(referanse|references)\b/i, idHint: /:references:/ },
    { hint: /\b(faginnlegg|artikkel|articles)\b/i, idHint: /hub:articles:/ },
    { hint: /\b(prosjekt|project)\b/i, idHint: /hub:projects:/ },
    { hint: /\b(bok|book|verdiskiftet)\b/i, idHint: /:book:|book:/ },
  ];
  for (const rule of rules) {
    if (rule.hint.test(q)) {
      const hit = contexts.find((c) => rule.idHint.test(c.sourceId));
      if (hit) return hit;
    }
  }
  return contexts[0];
}

function navigationAnswer(
  lang: Lang,
  contexts: SourceContext[],
  question: string
): AssistantResponseBody | null {
  if (contexts.length === 0) return null;
  const primary = pickNavigationContext(question, contexts);
  const text =
    lang === "no"
      ? `Du finner dette på ${primary.title}: ${primary.url}. For kontakt med Marius, bruk ${contactPath(lang)}.`
      : `You can find this on ${primary.title}: ${primary.url}. To contact Marius, use ${contactPath(lang)}.`;
  return buildResponse("ANSWER", text, lang, [primary.sourceId]);
}

export async function runAssistantQuery(
  body: AssistantRequestBody,
  deps?: Partial<AssistantServiceDeps>
): Promise<AssistantResponseBody> {
  const question = typeof body.question === "string" ? body.question.trim() : "";
  if (!question) {
    return {
      category: "NOT_ON_SITE",
      answer: "",
      lang: "no",
      sourceIds: [],
      urls: [],
      errorCode: "invalid_request",
    };
  }
  if (question.length > ASSISTANT_LIMITS.maxQuestionChars) {
    const lang = detectQuestionLang(question, body.lang);
    return {
      category: "NOT_ON_SITE",
      answer: fixedReply("NOT_ON_SITE", lang),
      lang,
      sourceIds: [],
      urls: [],
      errorCode: "question_too_long",
    };
  }

  const lang = detectQuestionLang(question, body.lang);
  const pre = classifyQuestionPreModel(question);
  if (pre) {
    return buildResponse(pre.category, fixedReply(pre.category, lang), lang, []);
  }

  const sourceIds = selectRelevantSourceIds(question, lang, ASSISTANT_LIMITS.maxSources);
  const contexts = loadSourceContexts(sourceIds, lang);

  if (isNavigationQuestion(question)) {
    const nav = navigationAnswer(lang, contexts, question);
    if (nav) return nav;
  }

  const substantive = contexts.filter((c) => c.suitableForFactualAnswer);
  if (substantive.length === 0) {
    return buildResponse("NOT_ON_SITE", fixedReply("NOT_ON_SITE", lang), lang, []);
  }

  if (shouldAnswerConservatively(question)) {
    return buildResponse("NOT_ON_SITE", fixedReply("NOT_ON_SITE", lang), lang, []);
  }

  const config = deps?.config ?? getAssistantRuntimeConfig();
  if (!config.chatEnabled) {
    return {
      category: "NOT_ON_SITE",
      answer:
        lang === "no"
          ? "AI-assistenten er midlertidig deaktivert. Bruk lenkene på nettstedet eller kontaktskjemaet."
          : "The AI assistant is temporarily disabled. Use the site links or the contact form.",
      lang,
      sourceIds: [],
      urls: [],
      errorCode: "ai_disabled",
    };
  }
  const usingMock = Boolean(deps?.callModel);
  if (!config.apiKeyConfigured && !usingMock) {
    return {
      category: "NOT_ON_SITE",
      answer: fixedReply("NOT_ON_SITE", lang),
      lang,
      sourceIds: [],
      urls: [],
      errorCode: "ai_unconfigured",
    };
  }

  const system = buildSystemPrompt(lang);
  const userMessage = buildUserPrompt(question, contexts);
  if (userMessage.length > ASSISTANT_LIMITS.maxModelInputChars) {
    return buildResponse("NOT_ON_SITE", fixedReply("NOT_ON_SITE", lang), lang, [], "validation_failed");
  }

  const apiKey = process.env.ANTHROPIC_API_KEY?.trim() || "mock-key-not-used";
  const callModel =
    deps?.callModel ??
    ((input) =>
      callAnthropicModel({
        apiKey: input.apiKey,
        model: input.model,
        system: input.system,
        userMessage: input.userMessage,
        signal: input.signal,
      }));

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ASSISTANT_LIMITS.requestTimeoutMs);

  let modelResult: ModelCallResult;
  try {
    modelResult = await callModel({
      apiKey,
      model: config.model,
      system,
      userMessage,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }

  if (!modelResult.ok) {
    const code: AssistantErrorCode =
      modelResult.code === "timeout" ? "timeout" : modelResult.code === "parse_error" ? "validation_failed" : "model_error";
    return buildResponse("NOT_ON_SITE", fixedReply("NOT_ON_SITE", lang), lang, [], code);
  }

  const validated = validateModelPayload(modelResult.payload, contexts, lang);
  if (!validated.ok) {
    return buildResponse("NOT_ON_SITE", fixedReply("NOT_ON_SITE", lang), lang, [], "validation_failed");
  }

  const payload: ModelReplyPayload = validated.payload;
  if (payload.category !== "ANSWER") {
    return buildResponse(payload.category, payload.answer.trim() || fixedReply(payload.category, lang), lang, []);
  }

  return buildResponse("ANSWER", payload.answer.trim(), lang, payload.sourceIds);
}

/** Exposed for tests — parse only. */
export { parseModelJson };