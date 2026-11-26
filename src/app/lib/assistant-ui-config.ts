/** Server-only: controls whether the chat widget may render (separate from CHAT_ENABLED API). */
export function isAssistantUiEnabled(env: NodeJS.ProcessEnv = process.env): boolean {
  return env.CHAT_UI_ENABLED === "true";
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