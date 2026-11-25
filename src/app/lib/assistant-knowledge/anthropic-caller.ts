import Anthropic from "@anthropic-ai/sdk";
import { ASSISTANT_LIMITS } from "./assistant-config";
import type { ModelReplyPayload } from "./assistant-types";

export type ModelCallParams = {
  apiKey: string;
  model: string;
  system: string;
  userMessage: string;
  signal?: AbortSignal;
};

export type ModelCallResult =
  | { ok: true; payload: ModelReplyPayload; rawText: string }
  | { ok: false; code: "model_error" | "timeout" | "parse_error"; message: string };

function extractJsonObject(text: string): string | null {
  const trimmed = text.trim();
  if (trimmed.startsWith("{")) return trimmed;
  const match = trimmed.match(/\{[\s\S]*\}/);
  return match?.[0] ?? null;
}

export function parseModelJson(text: string): ModelReplyPayload | null {
  const json = extractJsonObject(text);
  if (!json) return null;
  try {
    const parsed = JSON.parse(json) as ModelReplyPayload;
    if (!parsed || typeof parsed.answer !== "string" || typeof parsed.category !== "string") {
      return null;
    }
    if (!Array.isArray(parsed.sourceIds)) parsed.sourceIds = [];
    return parsed;
  } catch {
    return null;
  }
}

export async function callAnthropicModel(params: ModelCallParams): Promise<ModelCallResult> {
  const client = new Anthropic({ apiKey: params.apiKey });
  try {
    const response = await client.messages.create(
      {
        model: params.model,
        max_tokens: ASSISTANT_LIMITS.maxOutputTokens,
        system: params.system,
        messages: [{ role: "user", content: params.userMessage }],
      },
      { signal: params.signal, timeout: ASSISTANT_LIMITS.requestTimeoutMs }
    );
    const part = response.content.find((c) => c.type === "text");
    const rawText = part && part.type === "text" ? part.text : "";
    const payload = parseModelJson(rawText);
    if (!payload) {
      return { ok: false, code: "parse_error", message: "Model response was not valid JSON." };
    }
    return { ok: true, payload, rawText };
  } catch (err: unknown) {
    if (err instanceof Error && err.name === "AbortError") {
      return { ok: false, code: "timeout", message: "Model request timed out." };
    }
    const message = err instanceof Error ? err.message : "Anthropic request failed";
    return { ok: false, code: "model_error", message: message.slice(0, 200) };
  }
}