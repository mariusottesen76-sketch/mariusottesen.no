import { readStoredConsent } from "./consent-storage";
import { readAnalyticsOptOut } from "./analytics-opt-out";
import { GA4_MEASUREMENT_ID, isAnalyticsProductionHost } from "./analytics-config";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let scriptInjected = false;
let lastPagePath = "";

function hostnameOk(): boolean {
  if (typeof window === "undefined") return false;
  return isAnalyticsProductionHost(window.location.hostname);
}

export function isAnalyticsConsentGranted(): boolean {
  return readStoredConsent()?.analytics === "granted";
}

/** GA4 kan lastes kun på produksjonsvert, med samtykke og uten personlig opt-out. */
export function canRunAnalytics(): boolean {
  if (typeof window === "undefined") return false;
  if (!hostnameOk()) return false;
  if (readAnalyticsOptOut()) return false;
  return isAnalyticsConsentGranted();
}

function ensureGtagStub(): void {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }
}

export function clearGa4Cookies(): void {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const domains = [host, host.startsWith("www.") ? host.slice(4) : `.${host}`, ""];
  const names = document.cookie
    .split(";")
    .map((c) => c.trim().split("=")[0])
    .filter((name) => name.startsWith("_ga") || name === "_gid");
  for (const name of names) {
    for (const domain of domains) {
      const domainPart = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainPart}`;
    }
  }
}

export function shutdownAnalytics(): void {
  scriptInjected = false;
  lastPagePath = "";
  const el = document.getElementById("ga4-gtag-js");
  el?.remove();
  clearGa4Cookies();
  if (window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}

export function initAnalyticsIfAllowed(): boolean {
  if (!canRunAnalytics()) return false;
  if (scriptInjected) return true;

  ensureGtagStub();
  window.gtag!("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });

  const script = document.createElement("script");
  script.id = "ga4-gtag-js";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag!("js", new Date());
  window.gtag!("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag!("config", GA4_MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  scriptInjected = true;
  return true;
}

export function trackPageView(pagePath: string): void {
  if (!initAnalyticsIfAllowed()) return;
  const path = pagePath || "/";
  if (path === lastPagePath) return;
  lastPagePath = path;
  window.gtag!("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackAnalyticsEvent(eventName: string, params?: EventParams): void {
  if (!initAnalyticsIfAllowed()) return;
  const clean: Record<string, string | number | boolean> = {};
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== "") clean[key] = value;
    }
  }
  window.gtag!("event", eventName, clean);
}

export function trackContactClick(linkType: "email" | "phone", placement: string): void {
  trackAnalyticsEvent("contact_click", { link_type: linkType, link_placement: placement });
}

export function trackFileDownload(fileName: string): void {
  trackAnalyticsEvent("file_download", { file_name: fileName });
}

export function trackCtaClick(ctaId: string): void {
  trackAnalyticsEvent("cta_click", { cta_id: ctaId });
}

export function trackGenerateLead(formName: string): void {
  trackAnalyticsEvent("generate_lead", { form_name: formName });
}

/** Plassering for contact_click uten PII — avledet fra nærmeste [data-analytics-placement]. */
export function resolveClickPlacement(target: EventTarget | null): string {
  if (!(target instanceof Element)) return "unknown";
  const marked = target.closest("[data-analytics-placement]");
  if (marked instanceof HTMLElement && marked.dataset.analyticsPlacement) {
    return marked.dataset.analyticsPlacement;
  }
  const section = target.closest("main, article, section, nav");
  if (section instanceof HTMLElement && section.id) return section.id;
  return "unknown";
}
