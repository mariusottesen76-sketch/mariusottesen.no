import { EVENT_PLANNER_DEMO_URL, EVENT_PLANNER_HERO_IMAGE, EVENT_PLANNER_OVERVIEW_IMAGE } from "../../../lib/event-planner-brand";
import type { ProjectV2Record } from "../types";

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
    no: "AI-assistert planlegging, samarbeid og gjennomføring av arrangementer i én felles arbeidsflate. Event Planner kombinerer generativ AI med strukturert prosjektlogikk for deltakere, oppgaver, program, samtaler, økonomi, dokumenter og arrangementsklarhet. Plattformen gjør ustrukturert informasjon handlingsbar, foreslår neste aktiviteter og lar flere arrangører samarbeide i sanntid – med AI-forslag som forhåndsvises og må godkjennes før endringer lagres.",
    en: "AI-assisted planning, collaboration and execution of events in one shared workspace. Event Planner combines generative AI with structured project logic for participants, tasks, programme, conversations, finance, documents and event readiness. The platform makes unstructured information actionable, suggests next activities and lets multiple organisers collaborate in real time — with AI suggestions that are previewed and must be approved before changes are saved.",
  },
  overview: {
    what: {
      no: "Fungerende full-stack prototype for planlegging og gjennomføring – med deltakere, oppgaver, program, samtaler, budsjett, arrangementsklarhet (Event Readiness) og offentlig skrivebeskyttet demo med fiktive data.",
      en: "Working full-stack prototype for planning and execution — with participants, tasks, programme, conversations, budget, event readiness (Event Readiness) and a public write-protected demo with fictional data.",
    },
    challenge: {
      no: "Arrangementer fragmenteres mellom regneark, e-post, SMS, meldinger og parallelle sjekklister – uten tydelig sammenheng mellom avtaler, ansvar, kostnad, mangler og neste steg.",
      en: "Events fragment across spreadsheets, email, SMS, messages and parallel checklists — without clear connection between agreements, ownership, cost, gaps and next steps.",
    },
    built: {
      no: "Sanntidssamarbeid med trådede samtaler koblet til oppgaver og kostnader, Event Readiness, budsjett og økonomistyring, Quick Entry og Smart Paste med human-in-the-loop – samt valgfri Reise & opphold og rollebasert tilgang for Owner, Editor og Viewer.",
      en: "Real-time collaboration with threaded conversations linked to tasks and costs, Event Readiness, budget and financial control, Quick Entry and Smart Paste with human-in-the-loop — plus optional Travel & accommodation and role-based access for Owner, Editor and Viewer.",
    },
    how: {
      no: "Arrangøren bygger gradvis et datagrunnlag, samarbeider i sanntid og følger opp via dashboard, readiness-motor og AI-assistent. Offentlig demo kan utforskes uten innlogging; full bruk krever tilgang til private beta.",
      en: "The organiser gradually builds a data foundation, collaborates in real time and follows up via dashboard, readiness engine and AI assistant. Public demo can be explored without logging in; full use requires access to the private beta.",
    },
    relevance: {
      no: "Viser hvordan generativ AI kan integreres i operativ arbeidsflyt – fra samtale og ustrukturert tekst til strukturerte forslag om oppgaver, beslutninger og kostnader, ikke som en chatbot ved siden av.",
      en: "Shows how generative AI can be integrated into operational workflow — from conversation and unstructured text to structured suggestions for tasks, decisions and costs, not as a chatbot on the side.",
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
    overviewSecondary: { no: "Be om tilgang", en: "Request access" },
    detailPrimary: { no: "Se demo", en: "View demo" },
    detailSecondary: { no: "Be om tilgang", en: "Request access" },
  },
  seo: {
    title: {
      no: "Event Planner | AI-assistert arrangementsplanlegging | Marius Ottesen",
      en: "Event Planner | AI-assisted event planning | Marius Ottesen",
    },
    description: {
      no: "Event Planner kombinerer AI-assistert planlegging, samarbeid, Event Readiness, samtaler og økonomistyring i én arbeidsflate — med read-only demo og private beta.",
      en: "Event Planner combines AI-assisted planning, collaboration, Event Readiness, conversations and financial control in one workspace — with read-only demo and private beta.",
    },
    ogImage: EVENT_PLANNER_HERO_IMAGE,
    canonicalPath: "/event-planner",
  },
  strategicPlatformSlug: "event-planner",
};
