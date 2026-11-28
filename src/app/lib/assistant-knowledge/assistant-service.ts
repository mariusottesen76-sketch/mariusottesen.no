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
  tryBookTopicAnswer,
  tryGroundedAuthorshipAnswer,
  tryGroundedOverviewAnswer,
} from "./grounded-overview-answer";
import { tryGroundedFactualAnswer } from "./grounded-factual-answer";
import { tryGroundedCareerAnswer } from "./grounded-career-answer";
import {
  augmentQuestionForRetrieval,
  resolveConversationFocus,
  sanitizeClientContext,
  sessionHintForModel,
  type AssistantClientContext,
  type ConversationFocus,
} from "./conversation-context";
import {
  deriveFocusForResponse,
  tryGroundedEmployerContextAnswer,
  tryGroundedRoleFitAnswer,
  tryGroundedRoleHistoryAnswer,
} from "./grounded-context-answer";
import { tryAuthoritativeGroundedAnswer } from "./authoritative-before-not-on-site";
import { augmentForSiteSubjectRetrieval } from "./site-assistant-subject";
import { normalizeAssistantQuestion } from "./assistant-question-normalize";
import { tryGroundedPublicContactAnswer } from "./grounded-contact-answer";
import { selectRelevantSourceIds } from "./source-selection";
import { detectCvIntent, isSectionTabDiscoveryQuestion, resolveSiteTabIntent } from "./site-tab-intent";
import { tryTabSectionOverviewAnswer } from "./tab-section-answer";
import {
  isSimpleConsultingOfferingQuestion,
  trySimpleConsultingOfferingAnswer,
} from "./simple-consulting-answer";
import {
  isReferencesPresenceQuestion,
  tryReferencesBriefAnswer,
} from "./references-brief-answer";
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

function attachConversationFocus(
  body: AssistantResponseBody,
  question: string,
  clientCtx?: AssistantClientContext,
  explicitFocus?: ConversationFocus
): AssistantResponseBody {
  const focus = explicitFocus ?? deriveFocusForResponse(question, clientCtx);
  if (!focus?.employerKey) return body;
  return { ...body, conversationFocus: { employerKey: focus.employerKey } };
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

function contextFromSourceId(sourceId: string, lang: Lang, contexts: SourceContext[]): SourceContext | null {
  const hit = contexts.find((c) => c.sourceId === sourceId);
  if (hit) return hit;
  const res = lookupKnowledgeSource(sourceId, lang);
  if (!res.ok) return null;
  return {
    sourceId: res.entry.id,
    title: res.entry.title,
    url: res.entry.canonicalUrl,
    excerptText: res.excerpt.text,
    suitableForFactualAnswer: res.grounding.suitableForFactualAnswer,
  };
}

function pickNavigationContext(question: string, contexts: SourceContext[], lang: Lang): SourceContext | null {
  const tab = resolveSiteTabIntent(question, lang);
  if (tab) {
    const ctx = contextFromSourceId(tab.sourceId, lang, contexts);
    if (ctx) return ctx;
  }

  const q = question.toLowerCase();
  const rules: Array<{ hint: RegExp; idHint: RegExp }> = [
    { hint: /\b(cv[\s-]?en|cven|cv\b|curriculum|resume)\b/i, idHint: /:cv:/ },
    { hint: /\b(kontakt|contact|skjema)\b/i, idHint: /:contact:/ },
    { hint: /\b(erfaring|experience)\b/i, idHint: /:experience:/ },
    { hint: /\b(resultat|results)\b/i, idHint: /:results:/ },
    { hint: /\b(consulting|konsulent|rådgiv)\b/i, idHint: /:consulting:/ },
    { hint: /\b(referanser|referanse|references|anbefaling)\b/i, idHint: /:references:/ },
    { hint: /\b(faginnlegg|innsikt|artikkel|articles|insights)\b/i, idHint: /hub:articles:/ },
    { hint: /\b(prosjekt|project|prosjekter|portfolio)\b/i, idHint: /hub:projects:/ },
    { hint: /\b(bok|book|verdiskiftet)\b/i, idHint: /:book:|book:/ },
  ];
  for (const rule of rules) {
    if (rule.hint.test(q)) {
      const hit = contexts.find((c) => rule.idHint.test(c.sourceId));
      if (hit) return hit;
    }
  }
  if (detectCvIntent(question)) {
    const cv = contexts.find((c) => /:cv:/.test(c.sourceId));
    if (cv) return cv;
    return contextFromSourceId(lang === "no" ? "tab:cv:no" : "tab:cv:en", lang, contexts);
  }
  return contexts[0] ?? null;
}

function navigationAnswer(
  lang: Lang,
  contexts: SourceContext[],
  question: string
): AssistantResponseBody | null {
  const primary = pickNavigationContext(question, contexts, lang);
  if (!primary) return null;
  const path = new URL(primary.url).pathname;
  const text =
    lang === "no"
      ? `${primary.title} finner du på ${path}. Bruk kildelenken under for direkte tilgang.`
      : `${primary.title} is at ${path}. Use the source link below for direct access.`;
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
  const question = typeof body.question === "string" ? normalizeAssistantQuestion(body.question) : "";
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
  const clientCtx = sanitizeClientContext(body.context);
  const conversationFocus = resolveConversationFocus(question, clientCtx);

  const pre = classifyQuestionPreModel(question);
  if (pre) {
    return attachConversationFocus(buildResponse(pre.category, fixedReply(pre.category, lang), lang, []), question, clientCtx);
  }

  const roleHistory = tryGroundedRoleHistoryAnswer(question, lang);
  if (roleHistory) {
    return attachConversationFocus(
      buildResponse("ANSWER", roleHistory.answer, lang, roleHistory.sourceIds.slice(0, 3)),
      question,
      clientCtx
    );
  }

  const roleFit = tryGroundedRoleFitAnswer(question, lang);
  if (roleFit) {
    return attachConversationFocus(
      buildResponse("ANSWER", roleFit.answer, lang, roleFit.sourceIds.slice(0, 3)),
      question,
      clientCtx
    );
  }

  const employerContext = tryGroundedEmployerContextAnswer(question, lang, clientCtx);
  if (employerContext) {
    return attachConversationFocus(
      buildResponse("ANSWER", employerContext.answer, lang, employerContext.sourceIds.slice(0, 3)),
      question,
      clientCtx,
      employerContext.focus
    );
  }

  const authoritativeEarly = tryAuthoritativeGroundedAnswer(question, lang);
  if (authoritativeEarly) {
    return attachConversationFocus(
      buildResponse("ANSWER", authoritativeEarly.answer, lang, authoritativeEarly.sourceIds.slice(0, 3)),
      question,
      clientCtx
    );
  }

  let retrievalQuestion = augmentQuestionForRetrieval(
    question,
    conversationFocus,
    lang,
    ASSISTANT_LIMITS.maxQuestionChars
  );
  retrievalQuestion = augmentForSiteSubjectRetrieval(retrievalQuestion, ASSISTANT_LIMITS.maxQuestionChars);
  const sourceIds = selectRelevantSourceIds(retrievalQuestion, lang, ASSISTANT_LIMITS.maxSources);
  const contexts = loadSourceContexts(sourceIds, lang);

  if (isSectionTabDiscoveryQuestion(question)) {
    const section = tryTabSectionOverviewAnswer(question, lang);
    if (section) {
      return attachConversationFocus(buildResponse("ANSWER", section.answer, lang, [section.sourceId]), question, clientCtx);
    }
  }

  if (isReferencesPresenceQuestion(question)) {
    const refs = tryReferencesBriefAnswer(lang);
    if (refs) {
      return attachConversationFocus(buildResponse("ANSWER", refs.answer, lang, [refs.sourceId]), question, clientCtx);
    }
  }

  if (isSimpleConsultingOfferingQuestion(question)) {
    const consulting = trySimpleConsultingOfferingAnswer(lang);
    if (consulting) {
      return attachConversationFocus(buildResponse("ANSWER", consulting.answer, lang, [consulting.sourceId]), question, clientCtx);
    }
  }

  if (isContactGuidanceQuestion(question)) {
    const publicContact = tryGroundedPublicContactAnswer(question, lang);
    if (publicContact) {
      return attachConversationFocus(
        buildResponse("ANSWER", publicContact.answer, lang, publicContact.sourceIds.slice(0, 3)),
        question,
        clientCtx
      );
    }
  }

  const substantive = contexts.filter((c) => c.suitableForFactualAnswer);

  if (isNavigationQuestion(question)) {
    const groundedNav =
      substantive.length > 0
        ? (tryGroundedFactualAnswer(question, lang) ?? tryGroundedCareerAnswer(question, lang))
        : null;
    if (groundedNav) {
      return attachConversationFocus(
        buildResponse("ANSWER", groundedNav.answer, lang, groundedNav.sourceIds.slice(0, 3)),
        question,
        clientCtx
      );
    }
    const nav = navigationAnswer(lang, contexts, question);
    if (nav) return attachConversationFocus(nav, question, clientCtx);
  }
  if (substantive.length === 0) {
    const authoritativeFallback = tryAuthoritativeGroundedAnswer(question, lang);
    if (authoritativeFallback) {
      return attachConversationFocus(
        buildResponse("ANSWER", authoritativeFallback.answer, lang, authoritativeFallback.sourceIds.slice(0, 3)),
        question,
        clientCtx
      );
    }
    return attachConversationFocus(buildResponse("NOT_ON_SITE", fixedReply("NOT_ON_SITE", lang), lang, []), question, clientCtx);
  }

  const groundedFactual = tryGroundedFactualAnswer(question, lang);
  if (groundedFactual) {
    return attachConversationFocus(
      buildResponse("ANSWER", groundedFactual.answer, lang, groundedFactual.sourceIds.slice(0, 3)),
      question,
      clientCtx
    );
  }

  const groundedCareer = tryGroundedCareerAnswer(question, lang);
  if (groundedCareer) {
    return attachConversationFocus(
      buildResponse("ANSWER", groundedCareer.answer, lang, groundedCareer.sourceIds.slice(0, 3)),
      question,
      clientCtx
    );
  }

  if (shouldAnswerConservatively(question)) {
    const authoritativeLate = tryAuthoritativeGroundedAnswer(question, lang);
    if (authoritativeLate) {
      return attachConversationFocus(
        buildResponse("ANSWER", authoritativeLate.answer, lang, authoritativeLate.sourceIds.slice(0, 3)),
        question,
        clientCtx
      );
    }
    return attachConversationFocus(buildResponse("NOT_ON_SITE", fixedReply("NOT_ON_SITE", lang), lang, []), question, clientCtx);
  }

  const bookTopicAnswer = tryBookTopicAnswer(question, contexts, lang);
  if (bookTopicAnswer) {
    return attachConversationFocus(
      buildResponse("ANSWER", bookTopicAnswer.answer, lang, bookTopicAnswer.sourceIds),
      question,
      clientCtx
    );
  }

  const authorshipAnswer = tryGroundedAuthorshipAnswer(question, contexts, lang);
  if (authorshipAnswer) {
    return attachConversationFocus(
      buildResponse(
        "ANSWER",
        authorshipAnswer.answer,
        lang,
        authorshipAnswer.sourceIds.slice(0, ASSISTANT_LIMITS.maxSources)
      ),
      question,
      clientCtx
    );
  }

  if (isConsultingEngagementQuestion(question) || isPortfolioOverviewQuestion(question)) {
    const excerptAnswer = tryGroundedOverviewAnswer(question, contexts, lang);
    if (excerptAnswer) {
      return attachConversationFocus(
        buildResponse("ANSWER", excerptAnswer.answer, lang, [excerptAnswer.sourceId]),
        question,
        clientCtx
      );
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
  const userMessage = buildUserPrompt(question, contexts, sessionHintForModel(conversationFocus, lang));
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
      return attachConversationFocus(
        buildResponse("ANSWER", excerptFallback.answer, lang, [excerptFallback.sourceId]),
        question,
        clientCtx
      );
    }
    return buildTechnicalFailure(lang, "validation_failed");
  }

  const payload: ModelReplyPayload = validated.payload;
  if (payload.category !== "ANSWER") {
    if (payload.category === "NOT_ON_SITE") {
      const authoritativeModelFallback = tryAuthoritativeGroundedAnswer(question, lang);
      if (authoritativeModelFallback) {
        return attachConversationFocus(
          buildResponse(
            "ANSWER",
            authoritativeModelFallback.answer,
            lang,
            authoritativeModelFallback.sourceIds.slice(0, 3)
          ),
          question,
          clientCtx
        );
      }
      const excerptFallback = tryGroundedOverviewAnswer(question, contexts, lang);
      if (excerptFallback) {
        return attachConversationFocus(
          buildResponse("ANSWER", excerptFallback.answer, lang, [excerptFallback.sourceId]),
          question,
          clientCtx
        );
      }
    }
    let category = payload.category;
    if (category === "RESTRICTED" && isUndocumentedAvailabilityQuestion(question)) {
      category = "NOT_ON_SITE";
    }
    return attachConversationFocus(
      buildResponse(category, payload.answer.trim() || fixedReply(category, lang), lang, []),
      question,
      clientCtx
    );
  }

  return attachConversationFocus(
    buildResponse("ANSWER", payload.answer.trim(), lang, payload.sourceIds),
    question,
    clientCtx
  );
}

/** Exposed for tests — parse only. */
export { parseModelJson };