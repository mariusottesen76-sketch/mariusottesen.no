/** Server-only: controls whether the chat widget may render (separate from CHAT_ENABLED API). */
export function isAssistantUiEnabled(env: NodeJS.ProcessEnv = process.env): boolean {
  return env.CHAT_UI_ENABLED === "true";
}

/** Shape returned by GET /api/assistant — safe to use on client (no secrets). */
export type AssistantGetConfig = {
  enabled?: unknown;
  uiEnabled?: unknown;
  maxQuestionChars?: unknown;
};

/** Chat widget only when both UI flag and API (key + CHAT_ENABLED) are ready. */
export function shouldShowAssistantChat(config: AssistantGetConfig | null | undefined): boolean {
  return config?.uiEnabled === true && config?.enabled === true;
}

export function maxQuestionCharsFromGet(config: AssistantGetConfig | null | undefined): number {
  return typeof config?.maxQuestionChars === "number" ? config.maxQuestionChars : 800;
}

export type AssistantPublicConfig = {
  /** POST /api/assistant will attempt model calls when true and key is set. */
  apiReady: boolean;
  /** Widget may render in the document. */
  uiEnabled: boolean;
  maxQuestionChars: number;
};

export function getAssistantPublicConfig(
  env: NodeJS.ProcessEnv = process.env
): Omit<AssistantPublicConfig, "apiReady"> & { enabled: boolean } {
  const chatEnabled = env.CHAT_ENABLED === "true";
  const apiKey = env.ANTHROPIC_API_KEY?.trim();
  const apiReady = chatEnabled && Boolean(apiKey);
  return {
    enabled: apiReady,
    uiEnabled: isAssistantUiEnabled(env),
    maxQuestionChars: 800,
  };
}