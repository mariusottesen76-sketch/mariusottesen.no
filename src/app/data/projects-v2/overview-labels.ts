import type { LocalizedString } from "./types";

/** Faste overskrifter for de åtte innholdsboksene på /prosjekter — gjelder alle project_v2-prosjekter. */
export const OVERVIEW_BOX_LABELS: Record<keyof import("./types").ProjectOverviewContent, LocalizedString> = {
  what: {
    no: "Hva prosjektet er",
    en: "What the project is",
  },
  challenge: {
    no: "Utfordringen",
    en: "The challenge",
  },
  built: {
    no: "Hva som er bygget eller utviklet",
    en: "What has been built or developed",
  },
  how: {
    no: "Hvordan løsningen fungerer",
    en: "How the solution works",
  },
  relevance: {
    no: "Relevans",
    en: "Relevance",
  },
  status: {
    no: "Status og modenhet",
    en: "Status and maturity",
  },
  development: {
    no: "Videreutvikling av løsningen",
    en: "Further development of the solution",
  },
  adaptation: {
    no: "Tilpasning til funksjoner og bransjer",
    en: "Adaptation to functions and industries",
  },
};

export const OVERVIEW_BOX_ORDER: (keyof import("./types").ProjectOverviewContent)[] = [
  "what",
  "challenge",
  "built",
  "how",
  "relevance",
  "status",
  "development",
  "adaptation",
];
