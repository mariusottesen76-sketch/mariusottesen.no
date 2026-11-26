"use client";

import React, { useEffect, useState } from "react";
import AssistantChatWidget from "./AssistantChatWidget";

type PublicAssistantConfig = {
  uiEnabled: boolean;
  maxQuestionChars: number;
};

export default function AssistantChatRoot() {
  const [config, setConfig] = useState<PublicAssistantConfig | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/assistant", { method: "GET" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data?.uiEnabled) return;
        setConfig({
          uiEnabled: true,
          maxQuestionChars:
            typeof data.maxQuestionChars === "number" ? data.maxQuestionChars : 800,
        });
      })
      .catch(() => {
        /* stay hidden */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!config?.uiEnabled) return null;

  return <AssistantChatWidget maxQuestionChars={config.maxQuestionChars} />;
}