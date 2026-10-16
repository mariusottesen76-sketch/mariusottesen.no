/** Personlig opt-out i nettleseren (uavhengig av samtykkebanner). */
export const ANALYTICS_OPT_OUT_KEY = "marius_analytics_opt_out";

export const ANALYTICS_OPT_OUT_QUERY = "analytics_opt_out";

export function readAnalyticsOptOut(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === "1";
  } catch {
    return false;
  }
}

export function setAnalyticsOptOut(enabled: boolean): void {
  if (enabled) {
    localStorage.setItem(ANALYTICS_OPT_OUT_KEY, "1");
  } else {
    localStorage.removeItem(ANALYTICS_OPT_OUT_KEY);
  }
}

/** Støtter ?analytics_opt_out=1 (på) og ?analytics_opt_out=0 (av). Returnerer true hvis URL ble behandlet. */
export function applyAnalyticsOptOutFromSearch(search: string): boolean {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(search);
  if (!params.has(ANALYTICS_OPT_OUT_QUERY)) return false;
  const value = params.get(ANALYTICS_OPT_OUT_QUERY);
  if (value === "1" || value === "true") {
    setAnalyticsOptOut(true);
  } else if (value === "0" || value === "false") {
    setAnalyticsOptOut(false);
  }
  params.delete(ANALYTICS_OPT_OUT_QUERY);
  const nextQuery = params.toString();
  const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", nextUrl);
  return true;
}
