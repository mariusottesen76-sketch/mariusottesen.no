import type { Lang } from "../../LanguageContext";
import type { AssistantAnswerCategory } from "./answer-categories";
import { ASSISTANT_LIMITS, getAssistantRuntimeConfig, type AssistantRuntimeConfig } from "./assistant-config";
import { callAnthropicModel, type ModelCallResult, parseModelJson } from "./anthropic-caller";
import { fixedReply } from "./fixed-replies";
import { lookupKnowledgeSource } from "./lookup";
import { buildSystemPrompt, buildUserPrompt } from "./model-prompt";
import { shouldAnswerConservatively } from "./factual-answer-policy";
import {
  classifyQuestionPreModel,
  detectQuestionLang,
  isContactGuidanceQuestion,
  isNavigationQuestion,
  isUndocumentedAvailabilityQuestion,
} from "./question-policy";
import {
  isConsultingEngagementQuestion,
  isPortfolioOverviewQuestion,
  tryGroundedOverviewAnswer,
} from "./grounded-overview-answer";
import { tryGroundedFactualAnswer } from "./grounded-factual-answer";
import { selectRelevantSourceIds } from "./source-selection";
import { urlsForSourceIds, validateModelPayload, assertUrlsAllowed } from "./validate-response";
import {
  isPlausibleAnthropicModelId,
  technicalFailureReply,
} from "./technical-failure";
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

function buildTechnicalFailure(
  lang: Lang,
  errorCode: Extract<AssistantErrorCode, "model_error" | "timeout" | "validation_failed">
): AssistantResponseBody {
  return {
    category: "NOT_ON_SITE",
    answer: technicalFailureReply(errorCode, lang),
    lang,
    sourceIds: [],
    urls: [],
    errorCode,
  };
}

/** HTTP/UI contract when CHAT_ENABLED is false — no sources or generated answers. */
export function buildAiDisabledResponse(lang: Lang): AssistantResponseBody {
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

function buildResponse(
  category: AssistantAnswerCategory,
  answer: string,
  lang: Lang,
  sourceIds: string[],
  errorCode?: AssistantErrorCode
): AssistantResponseBody {
  const urls = urlsForSourceIds(sourceIds);
  if (!assertUrlsAllowed(urls)) {
    return buildTechnicalFailure(lang, "validation_failed");
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
      ? `Du finner mer om dette under «${primary.title}» på nettsiden — se kildelenken under svaret. For kontakt med Marius, bruk lenken Kontakt i chatten.`
      : `You can find more about this under "${primary.title}" on the site — see the source link below. To contact Marius, use the Contact link in the chat.`;
  return buildResponse("ANSWER", text, lang, [primary.sourceId]);
}

function contactGuidanceAnswer(lang: Lang, context: SourceContext): AssistantResponseBody {
  const text =
    lang === "no"
      ? `Du finner kontaktinformasjon og veiledning under «${context.title}». For profesjonell dialog, bruk kontaktskjemaet på Consulting-siden (lenken Kontakt i chatten).`
      : `You can find contact guidance under "${context.title}". For a professional enquiry, use the contact form on the Consulting page (Contact link in the chat).`;
  return buildResponse("ANSWER", text, lang, [context.sourceId]);
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

  if (isContactGuidanceQuestion(question)) {
    const contactId = lang === "no" ? "tab:contact:no" : "tab:contact:en";
    const contactContexts = loadSourceContexts(
      sourceIds.includes(contactId) ? sourceIds : [contactId, ...sourceIds],
      lang
    );
    const contactCtx = contactContexts.find((c) => /:contact:/.test(c.sourceId));
    if (contactCtx) return contactGuidanceAnswer(lang, contactCtx);
  }

  if (isNavigationQuestion(question)) {
    const nav = navigationAnswer(lang, contexts, question);
    if (nav) return nav;
  }

  const substantive = contexts.filter((c) => c.suitableForFactualAnswer);
  if (substantive.length === 0) {
    return buildResponse("NOT_ON_SITE", fixedReply("NOT_ON_SITE", lang), lang, []);
  }

  const groundedFactual = tryGroundedFactualAnswer(question, lang);
  if (groundedFactual) {
    return buildResponse("ANSWER", groundedFactual.answer, lang, groundedFactual.sourceIds.slice(0, 3));
  }

  if (shouldAnswerConservatively(question)) {
    return buildResponse("NOT_ON_SITE", fixedReply("NOT_ON_SITE", lang), lang, []);
  }

  if (isConsultingEngagementQuestion(question) || isPortfolioOverviewQuestion(question)) {
    const excerptAnswer = tryGroundedOverviewAnswer(question, contexts, lang);
    if (excerptAnswer) {
      return buildResponse("ANSWER", excerptAnswer.answer, lang, [excerptAnswer.sourceId]);
    }
  }

  const config = deps?.config ?? getAssistantRuntimeConfig();
  if (!config.chatEnabled) {
    return buildAiDisabledResponse(lang);
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
    return buildTechnicalFailure(lang, "validation_failed");
  }

  if (!isPlausibleAnthropicModelId(config.model)) {
    return buildTechnicalFailure(lang, "model_error");
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
    const code: Extract<AssistantErrorCode, "model_error" | "timeout" | "validation_failed"> =
      modelResult.code === "timeout"
        ? "timeout"
        : modelResult.code === "parse_error"
          ? "validation_failed"
          : "model_error";
    return buildTechnicalFailure(lang, code);
  }

  const validated = validateModelPayload(modelResult.payload, contexts, lang);
  if (!validated.ok) {
    const excerptFallback = tryGroundedOverviewAnswer(question, contexts, lang);
    if (excerptFallback) {
      return buildResponse("ANSWER", excerptFallback.answer, lang, [excerptFallback.sourceId]);
    }
    return buildTechnicalFailure(lang, "validation_failed");
  }

  const payload: ModelReplyPayload = validated.payload;
  if (payload.category !== "ANSWER") {
    if (payload.category === "NOT_ON_SITE") {
      const excerptFallback = tryGroundedOverviewAnswer(question, contexts, lang);
      if (excerptFallback) {
        return buildResponse("ANSWER", excerptFallback.answer, lang, [excerptFallback.sourceId]);
      }
    }
    let category = payload.category;
    if (category === "RESTRICTED" && isUndocumentedAvailabilityQuestion(question)) {
      category = "NOT_ON_SITE";
    }
    return buildResponse(category, payload.answer.trim() || fixedReply(category, lang), lang, []);
  }

  return buildResponse("ANSWER", payload.answer.trim(), lang, payload.sourceIds);
}

/** Exposed for tests — parse only. */
export { parseModelJson };