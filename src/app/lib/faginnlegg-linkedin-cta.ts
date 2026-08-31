import type { Lang } from "../LanguageContext";
import { getTranslation } from "../data/translations";

export const LINKEDIN_ACTIVITY_FEED_URL =
  "https://www.linkedin.com/in/mariusottesen/recent-activity/all/";

/** Normaliserer LinkedIn-URL for sammenligning (trailing slash). */
export function normalizeLinkedInHref(href: string): string {
  return href.trim().replace(/\/+$/, "");
}

export function isLinkedInActivityFeed(href: string): boolean {
  return normalizeLinkedInHref(href) === normalizeLinkedInHref(LINKEDIN_ACTIVITY_FEED_URL);
}

/** Sentral CTA-tekst basert på faktisk LinkedIn-href — ikke antatt feed for alle artikler. */
export function getFaginnleggLinkedInCta(href: string, lang: Lang): string {
  if (isLinkedInActivityFeed(href)) {
    return getTranslation("fag.linkedin.feed", lang);
  }
  return getTranslation("fag.linkedin.discussion", lang);
}
