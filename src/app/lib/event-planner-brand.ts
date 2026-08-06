/** Produksjons-URL for Event Planner (private beta). */
export const EVENT_PLANNER_APP_URL =
  "https://event-planner-985835222462.europe-north2.run.app/";

/**
 * Event Planner — porteføljesti og merkevare.
 *
 * To separate prosjektbilder (samme standard som øvrige project_v2-prosjekter):
 * - Oversikt (/prosjekter): `public/images/event-planner-hjemmeside.png` — 341×1024 px (1:3, samme som øvrige prosjekter)
 * - Detalj (/event-planner): `public/images/event-planner-hero.png` — 1800×600 px (3:1 landscape)
 *
 * Innhold: anonymisert Event Planner-UI (f.eks. «Kick-off 2026») — ingen private navn, e-post eller ekte deltakerlister.
 */
export const EVENT_PLANNER_PILOT_PATH = "/event-planner";

export const EVENT_PLANNER_OVERVIEW_IMAGE = "/images/event-planner-hjemmeside.png?v=20260804f";
export const EVENT_PLANNER_HERO_IMAGE = "/images/event-planner-hero.png?v=20260804f";

export const EVENT_PLANNER_PROSJEKT_IDS = new Set(["event-planner-2026-08"]);

export function isEventPlannerProsjekt(id: string): boolean {
  return EVENT_PLANNER_PROSJEKT_IDS.has(id);
}
