import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  getAssistantPublicConfig,
  isAssistantUiEnabled,
  shouldShowAssistantChat,
} from "./assistant-ui-config";

const mockEnv = (partial: Record<string, string | undefined>): NodeJS.ProcessEnv =>
  partial as unknown as NodeJS.ProcessEnv;

describe("assistant UI config", () => {
  it("ui is off unless CHAT_UI_ENABLED=true", () => {
    assert.equal(isAssistantUiEnabled(mockEnv({})), false);
    assert.equal(isAssistantUiEnabled(mockEnv({ CHAT_UI_ENABLED: "true" })), true);
    assert.equal(isAssistantUiEnabled(mockEnv({ CHAT_UI_ENABLED: "false" })), false);
  });

  it("public config separates ui and api", () => {
    const cfg = getAssistantPublicConfig(
      mockEnv({ CHAT_UI_ENABLED: "true", CHAT_ENABLED: "false" })
    );
    assert.equal(cfg.uiEnabled, true);
    assert.equal(cfg.enabled, false);
  });

  it("shouldShowAssistantChat requires both ui and api from GET probe", () => {
    assert.equal(shouldShowAssistantChat(null), false);
    assert.equal(shouldShowAssistantChat({ uiEnabled: true, enabled: false }), false);
    assert.equal(shouldShowAssistantChat({ uiEnabled: false, enabled: true }), false);
    assert.equal(shouldShowAssistantChat({ uiEnabled: true, enabled: true }), true);
  });
});