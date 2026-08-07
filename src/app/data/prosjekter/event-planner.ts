import { EVENT_PLANNER_OVERVIEW_IMAGE } from "../../lib/event-planner-brand";
import { type ProsjektType } from "./predictive-sales-coach";

/** Kort metadata for /prosjekter — full dokumentasjon på /event-planner */
export const eventPlanner: ProsjektType = {
  id: "event-planner-2026-08",
  tittel: {
    no: "Event Planner",
    en: "Event Planner",
  },
  teaser: {
    no: "AI-assistert planlegging, samarbeid og gjennomføring i én arbeidsflate — med Event Readiness, samtaler koblet til oppgaver og kostnader, budsjett og read-only demo.",
    en: "AI-assisted planning, collaboration and execution in one workspace — with Event Readiness, conversations linked to tasks and costs, budget and read-only demo.",
  },
  bildeUrl: EVENT_PLANNER_OVERVIEW_IMAGE,
  bildeRamme: "natural",
  dato: "2026-08-04",
  visningsDato: "04.08.26",
  bildeHint: {
    no: "Klikk på bildet for å se Event Planner i større format.",
    en: "Click the image to view Event Planner in a larger format.",
  },
  innhold: { no: "", en: "" },
};
