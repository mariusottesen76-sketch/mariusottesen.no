"use client";

import React, { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ConsentProvider } from "./ConsentContext";
import CookieConsentBanner from "./CookieConsentBanner";
import AnalyticsPageView from "../analytics/AnalyticsPageView";
import AnalyticsClickListener from "../analytics/AnalyticsClickListener";
import { applyAnalyticsOptOutFromSearch } from "../../lib/analytics-opt-out";
import { shutdownAnalytics } from "../../lib/analytics";

function OptOutQueryHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const qs = searchParams?.toString();
    const search = qs ? `?${qs}` : window.location.search;
    if (applyAnalyticsOptOutFromSearch(search)) {
      shutdownAnalytics();
      window.dispatchEvent(new Event("marius-analytics-opt-out-changed"));
    }
  }, [searchParams]);

  return null;
}

export default function SiteConsentRoot({ children }: { children: React.ReactNode }) {
  return (
    <ConsentProvider>
      {children}
      <Suspense fallback={null}>
        <OptOutQueryHandler />
        <AnalyticsPageView />
      </Suspense>
      <AnalyticsClickListener />
      <CookieConsentBanner />
    </ConsentProvider>
  );
}
