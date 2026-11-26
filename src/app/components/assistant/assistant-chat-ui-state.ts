import type { ChatMessage } from "./assistant-chat-logic";

export const INITIAL_VISIBLE_SUGGESTIONS = 4;

export function countUserMessages(messages: ChatMessage[]): number {
  return messages.filter((m) => m.role === "user").length;
}

/** Intro + forslag skal vises før første brukerspørsmål. */
export function isChatOnboardingPhase(messages: ChatMessage[]): boolean {
  return countUserMessages(messages) === 0;
}

export function messagesForDisplay(messages: ChatMessage[]): ChatMessage[] {
  if (isChatOnboardingPhase(messages)) return messages;
  return messages.filter((m) => m.id !== "intro");
}

/** Brukeren har scrollet opp når avstand til bunnen er større enn terskel (px). */
export function shouldStickScrollToBottom(scrollEl: HTMLElement, thresholdPx = 56): boolean {
  const distance = scrollEl.scrollHeight - scrollEl.scrollTop - scrollEl.clientHeight;
  return distance <= thresholdPx;
}