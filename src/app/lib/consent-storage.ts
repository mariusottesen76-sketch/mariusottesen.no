/** Cookie/samtykke — versjon bump krever nytt valg. */
export const CONSENT_POLICY_VERSION = 1;

/** Lagringstid for dokumentert samtykkevalg (12 måneder). */
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export const CONSENT_STORAGE_KEY = "marius_cookie_consent_v1";

export type AnalyticsConsentChoice = "granted" | "denied";

export type StoredConsent = {
  policyVersion: number;
  analytics: AnalyticsConsentChoice;
  recordedAt: number;
};

export function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.policyVersion !== CONSENT_POLICY_VERSION) return null;
    if (parsed.analytics !== "granted" && parsed.analytics !== "denied") return null;
    if (typeof parsed.recordedAt !== "number") return null;
    if (Date.now() - parsed.recordedAt > CONSENT_MAX_AGE_MS) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function writeStoredConsent(analytics: AnalyticsConsentChoice): StoredConsent {
  const record: StoredConsent = {
    policyVersion: CONSENT_POLICY_VERSION,
    analytics,
    recordedAt: Date.now(),
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  return record;
}

export function clearStoredConsent(): void {
  localStorage.removeItem(CONSENT_STORAGE_KEY);
}
