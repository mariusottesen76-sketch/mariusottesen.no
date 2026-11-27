import type { AssistantGetConfig } from "../../lib/assistant-ui-config";

export const ASSISTANT_AVAILABILITY_CACHE_KEY = "marius-assistant-availability";

/** Legacy fallback only — must not resurrect UI when server bootstrap says hidden. */
export function readCachedAssistantAvailability(): AssistantGetConfig | null {
  if (typeof sessionStorage === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(ASSISTANT_AVAILABILITY_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AssistantGetConfig;
    if (parsed.uiEnabled !== true || parsed.enabled !== true) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeCachedAssistantAvailability(data: AssistantGetConfig): void {
  if (typeof sessionStorage === "undefined") return;
  try {
    if (data.uiEnabled !== true || data.enabled !== true) {
      sessionStorage.removeItem(ASSISTANT_AVAILABILITY_CACHE_KEY);
      return;
    }
    sessionStorage.setItem(ASSISTANT_AVAILABILITY_CACHE_KEY, JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

export function clearCachedAssistantAvailability(): void {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.removeItem(ASSISTANT_AVAILABILITY_CACHE_KEY);
  } catch {
    /* ignore */
  }
}