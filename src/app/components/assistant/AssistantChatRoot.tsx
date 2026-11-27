"use client";

import React, { useEffect, useState } from "react";
import {
  maxQuestionCharsFromGet,
  shouldShowAssistantChat,
  type AssistantGetConfig,
} from "../../lib/assistant-ui-config";
import AssistantChatWidget from "./AssistantChatWidget";
import type { AssistantChatBootstrap } from "./assistant-chat-bootstrap";
import {
  clearCachedAssistantAvailability,
  readCachedAssistantAvailability,
  writeCachedAssistantAvailability,
} from "./assistant-availability-cache";

type PublicAssistantConfig = {
  maxQuestionChars: number;
};

export default function AssistantChatRoot({
  bootstrap,
}: {
  bootstrap?: AssistantChatBootstrap;
}) {
  const [config, setConfig] = useState<PublicAssistantConfig | null>(() =>
    bootstrap?.show ? { maxQuestionChars: bootstrap.maxQuestionChars } : null
  );

  useEffect(() => {
    if (bootstrap?.show === false) {
      clearCachedAssistantAvailability();
      setConfig(null);
      return;
    }

    if (bootstrap?.show) {
      let cancelled = false;
      fetch("/api/assistant", { method: "GET" })
        .then(async (r) => {
          if (r.status === 429) return null;
          return r.ok ? ((await r.json()) as AssistantGetConfig) : null;
        })
        .then((data: AssistantGetConfig | null) => {
          if (cancelled || !data) return;
          if (!shouldShowAssistantChat(data)) {
            clearCachedAssistantAvailability();
            setConfig(null);
            return;
          }
          writeCachedAssistantAvailability(data);
          setConfig({ maxQuestionChars: maxQuestionCharsFromGet(data) });
        })
        .catch(() => {
          /* keep server bootstrap visibility */
        });
      return () => {
        cancelled = true;
      };
    }

    let cancelled = false;
    fetch("/api/assistant", { method: "GET" })
      .then(async (r) => {
        if (r.status === 429) {
          return readCachedAssistantAvailability();
        }
        return r.ok ? ((await r.json()) as AssistantGetConfig) : null;
      })
      .then((data: AssistantGetConfig | null) => {
        if (cancelled || !data || !shouldShowAssistantChat(data)) return;
        writeCachedAssistantAvailability(data);
        setConfig({ maxQuestionChars: maxQuestionCharsFromGet(data) });
      })
      .catch(() => {
        const cached = readCachedAssistantAvailability();
        if (!cancelled && cached && shouldShowAssistantChat(cached)) {
          setConfig({ maxQuestionChars: maxQuestionCharsFromGet(cached) });
        }
      });
    return () => {
      cancelled = true;
    };
  }, [bootstrap?.show]);

  if (!config) return null;

  return <AssistantChatWidget maxQuestionChars={config.maxQuestionChars} />;
}