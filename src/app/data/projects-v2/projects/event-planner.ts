import { EVENT_PLANNER_DEMO_URL, EVENT_PLANNER_HERO_IMAGE, EVENT_PLANNER_OVERVIEW_IMAGE } from "../../../lib/event-planner-brand";
import type { ProjectV2Record } from "../types";
import { relevantVidereLinksForSlug } from "../relevant-videre-catalog";

export const eventPlannerV2: ProjectV2Record = {
  id: "event-planner-2026-08",
  slug: "event-planner",
  category: "app_prototype",
  layoutVersion: "project_v2",
  accessMode: "access_code",
  detailLevel: "full",
  publishedAt: "2026-08-04",
  updatedAt: "2026-08-10",
  date: "2026-08-04",
  displayDate: { no: "04.08.26", en: "04.08.26" },
  title: {
    no: "Event Planner",
    en: "Event Planner",
  },
  subtitle: {
    no: "AI-assistert planlegging, samarbeid og gjennomføring av arrangementer",
    en: "AI-assisted planning, collaboration and execution of events",
  },
  statusLabel: {
    no: "Fungerende full-stack prototype · Private beta",
    en: "Working full-stack prototype · Private beta",
  },
  maturityLevel: {
    no: "Private beta",
    en: "Private beta",
  },
  overviewIntroduction: {
    no: "Samler avtaler, ansvar, oppgaver, program og økonomi for ett arrangement — slik at flere arrangører ser hva som mangler og hva som må gjøres neste. AI-forslag forhåndsvises og godkjennes før de lagres.",
    en: "Brings agreements, ownership, tasks, programme and finances for one event together — so multiple organisers see what is missing and what to do next. AI suggestions are previewed and approved before they are saved.",
  },
  overview: {
    what: {
      no: "Arbeidsflate for planlegging og gjennomføring av arrangementer — fra første idé til arrangementsklarhet, med samtaler, oppgaver og budsjett i samme kontekst.",
      en: "Workspace for planning and executing events — from first idea to event readiness, with conversations, tasks and budget in the same context.",
    },
    challenge: {
      no: "Arrangementer fragmenteres mellom regneark, e-post, SMS, meldinger og parallelle sjekklister – uten tydelig sammenheng mellom avtaler, ansvar, kostnad, mangler og neste steg.",
      en: "Events fragment across spreadsheets, email, SMS, messages and parallel checklists — without clear connection between agreements, ownership, cost, gaps and next steps.",
    },
    built: {
      no: "Private beta med sanntidssamarbeid, Event Readiness, budsjett, AI-assistert innlegging (med godkjenning) og skrivebeskyttet demo med fiktive data — uten innlogging.",
      en: "Private beta with real-time collaboration, Event Readiness, budget, AI-assisted entry (with approval) and a write-protected demo with fictional data — no login required.",
    },
    how: {
      no: "Arrangøren bygger gradvis et datagrunnlag, samarbeider i sanntid og følger opp via dashboard, readiness-motor og AI-assistent. Offentlig demo kan utforskes uten innlogging; full bruk krever tilgang til private beta.",
      en: "The organiser gradually builds a data foundation, collaborates in real time and follows up via dashboard, readiness engine and AI assistant. Public demo can be explored without logging in; full use requires access to the private beta.",
    },
    relevance: {
      no: "For virksomheter og team som planlegger konferanser, kundearrangementer, kick-off eller større interne events — og trenger én felles oversikt fremfor spredte regneark og tråder.",
      en: "For businesses and teams planning conferences, customer events, kick-offs or larger internal events — and needing one shared overview instead of scattered spreadsheets and threads.",
    },
    status: {
      no: "Fungerende full-stack prototype · Private beta – brukes i reell planlegging og har offentlig skrivebeskyttet demo. Portefølje- og utviklingsprosjekt, ikke ferdig kommersielt SaaS.",
      en: "Working full-stack prototype · Private beta — used in real planning and has a public write-protected demo. Portfolio and development project, not finished commercial SaaS.",
    },
    development: {
      no: "Videre utvikling kan omfatte ferdige maler, leverandør- og tilbudsoppfølging, varsler, kalender- og e-postintegrasjoner, selvbetjent RSVP og rapportering etter gjennomføring.",
      en: "Further development may include ready-made templates, supplier and quote follow-up, alerts, calendar and email integrations, self-service RSVP and post-event reporting.",
    },
    adaptation: {
      no: "Tilpasser planleggingsfokus etter om arrangementet er privat eller virksomhetsrettet – fra bursdag og bryllup til konferanse, messe, kick-off og kundearrangement. Relevante funksjoner kan aktiveres etter behov, eksempelvis Reise & opphold.",
      en: "Adapts planning focus based on whether the event is private or business-oriented — from birthday and wedding to conference, trade fair, kick-off and customer event. Relevant features can be activated as needed, for example Travel & accommodation.",
    },
  },
  overviewImage: EVENT_PLANNER_OVERVIEW_IMAGE,
  detailHeroImage: EVENT_PLANNER_HERO_IMAGE,
  detailHeroObjectPosition: "center",
  needsNewOverviewImage: true,
  needsNewDetailHero: false,
  altText: {
    no: "Event Planner – AI-assistert arbeidsflate for planlegging, samarbeid og gjennomføring av arrangementer",
    en: "Event Planner – AI-assisted workspace for planning, collaboration and execution of events",
  },
  overviewImageFormat: "standard_1x3",
  detailHeroMissing: true,
  detailDestination: "/event-planner",
  liveSolutionUrl: EVENT_PLANNER_DEMO_URL,
  ctaLabels: {
    detailPrimary: { no: "Prøv Event Planner-demoen", en: "Try the Event Planner demo" },
    detailSecondary: { no: "Be om tilgang til beta", en: "Request beta access" },
  },
  seo: {
    title: {
      no: "Event Planner | AI-assistert arrangementsplanlegging | Marius Ottesen",
      en: "Event Planner | AI-assisted event planning | Marius Ottesen",
    },
    description: {
      no: "Planlegg arrangementer med felles oversikt over ansvar, oppgaver, program og budsjett — prøv demo uten innlogging eller be om beta-tilgang.",
      en: "Plan events with shared visibility of ownership, tasks, programme and budget — try the demo without login or request beta access.",
    },
    ogImage: EVENT_PLANNER_HERO_IMAGE,
    canonicalPath: "/event-planner",
  },
  strategicPlatformSlug: "event-planner",
  fagPerspektivLinks: relevantVidereLinksForSlug("event-planner"),
};
