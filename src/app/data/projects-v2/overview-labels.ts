import type { LocalizedString } from "./types";

/** Felles overskrifter for informasjonsboksene på /prosjekter — kundeorientert, sammenlignbar portefølje. */
export const OVERVIEW_BOX_LABELS: Record<keyof import("./types").ProjectOverviewContent, LocalizedString> = {
  what: {
    no: "Hva løsningen gjør",
    en: "What the solution does",
  },
  challenge: {
    no: "Utfordringen",
    en: "The challenge",
  },
  built: {
    no: "Dette er tilgjengelig",
    en: "What is available",
  },
  how: {
    no: "Hvordan det brukes",
    en: "How it is used",
  },
  relevance: {
    no: "Verdien for virksomheten",
    en: "Value for the business",
  },
  status: {
    no: "Status og anvendelighet",
    en: "Status and applicability",
  },
  development: {
    no: "Videre utviklingsmuligheter",
    en: "Further development potential",
  },
  adaptation: {
    no: "Tilpasning til virksomheter",
    en: "Adaptation to organisations",
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
