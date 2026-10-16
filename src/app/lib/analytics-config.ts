/** Offentlig GA4 Measurement ID (produksjon). Overstyr med NEXT_PUBLIC_GA_MEASUREMENT_ID ved behov. */
export const GA4_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-LTLPQ27LQN";

const PRODUCTION_HOSTS = new Set(["www.mariusottesen.no", "mariusottesen.no"]);

export function isAnalyticsProductionHost(hostname: string): boolean {
  return PRODUCTION_HOSTS.has(hostname.toLowerCase());
}
