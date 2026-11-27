import {
  getAssistantPublicConfig,
  shouldShowAssistantChat,
} from "../../lib/assistant-ui-config";

/** Server-only: whether the launcher may render (same logic as GET /api/assistant). */
export type AssistantChatBootstrap = {
  show: boolean;
  maxQuestionChars: number;
};

export function getAssistantChatBootstrap(
  env: NodeJS.ProcessEnv = process.env
): AssistantChatBootstrap {
  const pub = getAssistantPublicConfig(env);
  const show = shouldShowAssistantChat({ enabled: pub.enabled, uiEnabled: pub.uiEnabled });
  return { show, maxQuestionChars: pub.maxQuestionChars };
}