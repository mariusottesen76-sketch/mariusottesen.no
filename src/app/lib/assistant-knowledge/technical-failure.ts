import type { Lang } from "../../LanguageContext";
import type { AssistantErrorCode } from "./assistant-types";

/** Loosely validate Anthropic model id before API call — allow future claude-* ids. */
export function isPlausibleAnthropicModelId(model: string): boolean {
  const id = model.trim();
  if (id.length < 10 || id.length > 96) return false;
  if (/[=;\r\n]|\s/.test(id)) return false;
  if (/CHAT_|ANTHROPIC_|\.env/i.test(id)) return false;
  if (!/^claude-[a-z0-9]+([.-][a-z0-9]+)*$/i.test(id)) return false;
  return true;
}

const TECHNICAL_REPLY: Record<
  Extract<AssistantErrorCode, "model_error" | "timeout" | "validation_failed">,
  Record<Lang, string>
> = {
  model_error: {
    no: "Beklager, AI-assistenten er midlertidig utilgjengelig. Prøv gjerne igjen om litt.",
    en: "Sorry, the AI assistant is temporarily unavailable. Please try again in a little while.",
  },
  timeout: {
    no: "Det tar dessverre litt for lang tid å hente svaret. Prøv gjerne igjen.",
    en: "Unfortunately it is taking too long to fetch an answer. Please try again.",
  },
  validation_failed: {
    no: "Assistenten klarte ikke å formatere svaret. Prøv igjen om litt, eller bruk lenkene på nettstedet.",
    en: "The assistant could not format a valid answer. Try again shortly, or use the links on the site.",
  },
};

export function technicalFailureReply(
  code: Extract<AssistantErrorCode, "model_error" | "timeout" | "validation_failed">,
  lang: Lang
): string {
  return TECHNICAL_REPLY[code][lang];
}

export function isTechnicalFailureCode(
  code: AssistantErrorCode | undefined
): code is Extract<AssistantErrorCode, "model_error" | "timeout" | "validation_failed"> {
  return code === "model_error" || code === "timeout" || code === "validation_failed";
}