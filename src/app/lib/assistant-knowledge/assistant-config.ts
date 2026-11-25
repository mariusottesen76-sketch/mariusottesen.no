/** Server-only assistant limits — tune via env where noted. */
export const ASSISTANT_LIMITS = {
  maxQuestionChars: 800,
  maxSources: 3,
  maxExcerptCharsTotal: 6_000,
  maxOutputTokens: 512,
  maxModelInputChars: 24_000,
  requestTimeoutMs: 25_000,
} as const;

export type AssistantRuntimeConfig = {
  chatEnabled: boolean;
  apiKeyConfigured: boolean;
  model: string;
};

export function getAssistantRuntimeConfig(env: NodeJS.ProcessEnv = process.env): AssistantRuntimeConfig {
  const chatEnabled = env.CHAT_ENABLED === "true";
  const apiKey = env.ANTHROPIC_API_KEY?.trim();
  const model =
    env.CHAT_MODEL?.trim() ||
    "claude-haiku-4-5-20251001";
  return {
    chatEnabled,
    apiKeyConfigured: Boolean(apiKey),
    model,
  };
}