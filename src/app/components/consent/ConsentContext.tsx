"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  readStoredConsent,
  writeStoredConsent,
  type AnalyticsConsentChoice,
} from "../../lib/consent-storage";
import { initAnalyticsIfAllowed, shutdownAnalytics, trackPageView } from "../../lib/analytics";
import { readAnalyticsOptOut } from "../../lib/analytics-opt-out";

type ConsentUiState = "loading" | "needs_choice" | "set";

type ConsentContextValue = {
  uiState: ConsentUiState;
  analyticsChoice: AnalyticsConsentChoice | null;
  optOutActive: boolean;
  acceptAnalytics: () => void;
  rejectAnalytics: () => void;
  withdrawAnalytics: () => void;
  openPreferences: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return ctx;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [uiState, setUiState] = useState<ConsentUiState>("loading");
  const [analyticsChoice, setAnalyticsChoice] = useState<AnalyticsConsentChoice | null>(null);
  const [optOutActive, setOptOutActive] = useState(false);

  const refreshOptOut = useCallback(() => {
    setOptOutActive(readAnalyticsOptOut());
  }, []);

  useEffect(() => {
    const syncFromStorage = () => {
      const stored = readStoredConsent();
      if (stored) {
        setAnalyticsChoice(stored.analytics);
        setUiState("set");
        if (stored.analytics === "granted" && !readAnalyticsOptOut()) {
          initAnalyticsIfAllowed();
          trackPageView(`${window.location.pathname}${window.location.search}`);
        } else {
          shutdownAnalytics();
        }
      } else {
        setAnalyticsChoice(null);
        setUiState("needs_choice");
      }
      refreshOptOut();
    };
    syncFromStorage();
    const onOptOut = () => {
      refreshOptOut();
      shutdownAnalytics();
    };
    window.addEventListener("marius-analytics-opt-out-changed", onOptOut);
    return () => window.removeEventListener("marius-analytics-opt-out-changed", onOptOut);
  }, [refreshOptOut]);

  const applyChoice = useCallback(
    (choice: AnalyticsConsentChoice) => {
      writeStoredConsent(choice);
      setAnalyticsChoice(choice);
      setUiState("set");
      if (choice === "granted" && !readAnalyticsOptOut()) {
        initAnalyticsIfAllowed();
        trackPageView(`${window.location.pathname}${window.location.search}`);
      } else {
        shutdownAnalytics();
      }
    },
    []
  );

  const acceptAnalytics = useCallback(() => applyChoice("granted"), [applyChoice]);
  const rejectAnalytics = useCallback(() => applyChoice("denied"), [applyChoice]);

  const withdrawAnalytics = useCallback(() => {
    applyChoice("denied");
  }, [applyChoice]);

  const openPreferences = useCallback(() => {
    setUiState("needs_choice");
  }, []);

  const value = useMemo(
    () => ({
      uiState,
      analyticsChoice,
      optOutActive,
      acceptAnalytics,
      rejectAnalytics,
      withdrawAnalytics,
      openPreferences,
    }),
    [
      uiState,
      analyticsChoice,
      optOutActive,
      acceptAnalytics,
      rejectAnalytics,
      withdrawAnalytics,
      openPreferences,
    ]
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}
