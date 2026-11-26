import type { AssistantErrorCode, AssistantResponseBody } from "../../lib/assistant-knowledge/assistant-types";
import { isTechnicalFailureCode } from "../../lib/assistant-knowledge/technical-failure";
import type { Lang } from "../../LanguageContext";
import { getAssistantUiCopy } from "./assistant-copy";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  urls?: string[];
};

export function resolveSiteLang(pathname: string): Lang {
  return pathname.startsWith("/en") || pathname === "/en" ? "en" : "no";
}

export function userFacingError(
  lang: Lang,
  status: number,
  errorCode?: AssistantErrorCode
): string {
  const c = getAssistantUiCopy(lang).errors;
  if (errorCode === "question_too_long" || status === 400) return c.tooLong;
  if (errorCode === "ai_disabled" || errorCode === "ai_unconfigured") return c.disabled;
  if (errorCode === "model_error") return c.modelUnavailable;
  if (errorCode === "timeout") return c.timeout;
  if (errorCode === "validation_failed") return c.validationFailed;
  if (status === 503) return c.disabled;
  return c.generic;
}

const SITE_URL_PREFIX = "https://www.mariusottesen.no";

/** Remove raw manifest URLs from bubble text — links are shown separately. */
export function stripSiteUrlsFromAnswerText(text: string): string {
  return text
    .replace(new RegExp(`${SITE_URL_PREFIX.replace(/\./g, "\\.")}[^\\s)\\]>,]*`, "gi"), "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.!?])/g, "$1")
    .trim();
}

export function formatSourceLinkLabel(url: string, lang: Lang): string {
  try {
    const path = new URL(url).pathname.replace(/\/$/, "") || "/";
    const labels: Record<Lang, Record<string, string>> = {
      no: {
        "/": "Profil",
        "/erfaring": "Erfaring",
        "/resultater": "Resultater",
        "/consulting": "Consulting",
        "/kontakt": "Kontakt",
        "/cv": "CV og lederprofil",
        "/referanser": "Referanser",
        "/prosjekter": "AI-prosjekter",
        "/faginnlegg": "Faginnlegg",
        "/bok": "VerdisKIftet",
      },
      en: {
        "/en": "Profile",
        "/en/experience": "Experience",
        "/en/results": "Results",
        "/en/consulting": "Consulting",
        "/en/contact": "Contact",
        "/en/cv": "CV & profile",
        "/en/references": "References",
        "/en/projects": "AI projects",
        "/en/articles": "Articles",
        "/en/book": "VerdisKIftet",
      },
    };
    const table = labels[lang];
    if (table[path]) return table[path];
    const slug = path.split("/").filter(Boolean).pop();
    if (!slug) return lang === "no" ? "Nettsiden" : "Site";
    return slug.replace(/-/g, " ");
  } catch {
    return url;
  }
}

export function responseToAssistantMessage(res: AssistantResponseBody): ChatMessage {
  return {
    id: `a-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role: "assistant",
    text: stripSiteUrlsFromAnswerText(res.answer.trim()),
    urls: res.urls.length ? res.urls : undefined,
  };
}

export function shouldAcceptChatSubmit(question: string, inFlight: boolean): boolean {
  return question.trim().length > 0 && !inFlight;
}

export type ChatSubmitOutcome =
  | { kind: "assistant"; message: ChatMessage }
  | { kind: "error"; message: ChatMessage };

/** Map POST /api/assistant HTTP result to the next assistant bubble (never silent). */
export function chatOutcomeFromResponse(
  resOk: boolean,
  status: number,
  body: AssistantResponseBody | { error?: string; errorCode?: AssistantErrorCode },
  lang: Lang,
  messageIdPrefix: string
): ChatSubmitOutcome {
  const errCode =
    "errorCode" in body && body.errorCode ? (body.errorCode as AssistantErrorCode) : undefined;

  if (!resOk || isTechnicalFailureCode(errCode)) {
    return {
      kind: "error",
      message: {
        id: `${messageIdPrefix}-err`,
        role: "assistant",
        text: userFacingError(lang, status, errCode),
      },
    };
  }
  if ("answer" in body && typeof body.answer === "string" && body.answer.trim()) {
    return { kind: "assistant", message: responseToAssistantMessage(body as AssistantResponseBody) };
  }
  return {
    kind: "error",
    message: {
      id: `${messageIdPrefix}-err`,
      role: "assistant",
      text: userFacingError(lang, status),
    },
  };
}

/** Only allow https links returned by the API — no user-supplied hrefs. */
export function isSafeSourceUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === "https:" && u.hostname === "www.mariusottesen.no";
  } catch {
    return false;
  }
}