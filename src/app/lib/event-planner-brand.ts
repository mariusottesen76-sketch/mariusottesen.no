/** Produksjons-URL for Event Planner (private beta / innlogging). */
export const EVENT_PLANNER_APP_URL =
  "https://event-planner-985835222462.europe-north2.run.app/";

/**
 * Offentlig read-only demo — `?demo=1` håndteres i Event Planner-appen.
 * Verifiser at URL-en åpner fungerende demo før nettside-deploy.
 */
export const EVENT_PLANNER_DEMO_URL = `${EVENT_PLANNER_APP_URL}?demo=1`;

/**
 * Cache-buster for prosjektbilder. Oppdater når nye skjermbilder fra demo er klare
 * (erstatt filene i public/images/ — samme filnavn og dimensjoner).
 */
export const EVENT_PLANNER_IMAGE_VERSION = "20260807a";

/**
 * Event Planner — porteføljesti og merkevare.
 *
 * To separate prosjektbilder (samme standard som øvrige project_v2-prosjekter):
 * - Oversikt (/prosjekter): `public/images/event-planner-hjemmeside.png` — 341×1024 px (1:3)
 * - Detalj (/event-planner): `public/images/event-planner-hero.png` — 1800×600 px (3:1 landscape)
 *
 * Innhold: skjermbilde fra offentlig read-only demo (Nordic Growth Summit 2026, fiktive data).
 */
export const EVENT_PLANNER_PILOT_PATH = "/event-planner";

export const EVENT_PLANNER_OVERVIEW_IMAGE = `/images/event-planner-hjemmeside.png?v=${EVENT_PLANNER_IMAGE_VERSION}`;
export const EVENT_PLANNER_HERO_IMAGE = `/images/event-planner-hero.png?v=${EVENT_PLANNER_IMAGE_VERSION}`;

export const EVENT_PLANNER_PROSJEKT_IDS = new Set(["event-planner-2026-08"]);

export function isEventPlannerProsjekt(id: string): boolean {
  return EVENT_PLANNER_PROSJEKT_IDS.has(id);
}
