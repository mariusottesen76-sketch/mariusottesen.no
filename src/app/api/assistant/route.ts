import { NextResponse } from "next/server";
import { runAssistantQuery } from "../../lib/assistant-knowledge/assistant-service";
import { ASSISTANT_LIMITS, getAssistantRuntimeConfig } from "../../lib/assistant-knowledge/assistant-config";
import { isAssistantUiEnabled } from "../../lib/assistant-ui-config";
import type { AssistantRequestBody } from "../../lib/assistant-knowledge/assistant-types";

export const runtime = "nodejs";

/**
 * Rate limiting: rely on Vercel WAF / Firewall rules in production (not in-memory counters).
 * Keep endpoint disabled via CHAT_ENABLED until protection is configured.
 */
export async function POST(req: Request) {
  const contentLength = req.headers.get("content-length");
  if (contentLength && Number(contentLength) > 16_384) {
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const question =
    typeof body === "object" && body !== null && "question" in body
      ? String((body as AssistantRequestBody).question ?? "")
      : "";
  const langRaw =
    typeof body === "object" && body !== null && "lang" in body
      ? (body as AssistantRequestBody).lang
      : undefined;
  const lang = langRaw === "en" || langRaw === "no" ? langRaw : undefined;

  const config = getAssistantRuntimeConfig();
  if (!config.chatEnabled) {
    const result = await runAssistantQuery({ question, lang });
    return NextResponse.json(result, { status: 503 });
  }

  const result = await runAssistantQuery({ question, lang });
  const status =
    result.errorCode === "rate_limited"
      ? 429
      : result.errorCode === "invalid_request" || result.errorCode === "question_too_long"
        ? 400
        : result.errorCode === "ai_disabled" ||
            result.errorCode === "ai_unconfigured" ||
            result.errorCode === "model_error" ||
            result.errorCode === "timeout" ||
            result.errorCode === "validation_failed"
          ? 503
          : 200;

  return NextResponse.json(result, { status });
}

export async function GET() {
  const config = getAssistantRuntimeConfig();
  return NextResponse.json({
    enabled: config.chatEnabled && config.apiKeyConfigured,
    uiEnabled: isAssistantUiEnabled(),
    maxQuestionChars: ASSISTANT_LIMITS.maxQuestionChars,
    maxSources: ASSISTANT_LIMITS.maxSources,
    note: "POST JSON { question, lang? }. CHAT_ENABLED must be true with ANTHROPIC_API_KEY set.",
  });
}