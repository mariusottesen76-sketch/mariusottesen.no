"use client";

import React, { useEffect, useState } from "react";
import {
  maxQuestionCharsFromGet,
  shouldShowAssistantChat,
  type AssistantGetConfig,
} from "../../lib/assistant-ui-config";
import AssistantChatWidget from "./AssistantChatWidget";

type PublicAssistantConfig = {
  maxQuestionChars: number;
};

export default function AssistantChatRoot() {
  const [config, setConfig] = useState<PublicAssistantConfig | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/assistant", { method: "GET" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data: AssistantGetConfig | null) => {
        if (cancelled || !shouldShowAssistantChat(data)) return;
        setConfig({
          maxQuestionChars: maxQuestionCharsFromGet(data),
        });
      })
      .catch(() => {
        /* stay hidden */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!config) return null;

  return <AssistantChatWidget maxQuestionChars={config.maxQuestionChars} />;
}