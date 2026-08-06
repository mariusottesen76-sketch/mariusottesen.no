import { EVENT_PLANNER_APP_URL } from "../../../lib/event-planner-brand";
import type { ProjectV2Record } from "../types";

export const eventPlannerV2: ProjectV2Record = {
  id: "event-planner-2026-08",
  slug: "event-planner",
  category: "app_prototype",
  layoutVersion: "project_v2",
  accessMode: "access_code",
  detailLevel: "full",
  publishedAt: "2026-08-04",
  updatedAt: "2026-08-06",
  date: "2026-08-04",
  displayDate: { no: "04.08.26", en: "04.08.26" },
  title: {
    no: "Event Planner",
    en: "Event Planner",
  },
  subtitle: {
    no: "AI-assistert planlegging, koordinering og gjennomføring av arrangementer i én felles arbeidsflate",
    en: "AI-assisted planning, coordination and execution of events in one shared workspace",
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
    no: "AI-assistert planlegging, koordinering og gjennomføring av arrangementer i én felles arbeidsflate – med deltakere, oppgaver, program, filer, naturlig språk og flerbrukersamarbeid.",
    en: "AI-assisted planning, coordination and execution of events in one shared workspace — with participants, tasks, programme, files, natural language and multi-user collaboration.",
  },
  overview: {
    what: {
      no: "En AI-assistert full-stack applikasjon for planlegging og gjennomføring av arrangementer — med én samlet arbeidsflate for deltakere, RSVP, oppgaver, ansvar, program, filer og planleggingsbehov.",
      en: "An AI-assisted full-stack application for planning and execution of events — with one shared workspace for participants, RSVP, tasks, ownership, programme, files and planning needs.",
    },
    challenge: {
      no: "Arrangementsplanlegging blir raskt fragmentert mellom Excel, e-post, meldinger, dokumenter og ulike sjekklister. Informasjonen finnes ofte, men det er vanskeligere å vite hva som mangler, hvem som har ansvar, hvilke frister som nærmer seg og hvilke aktiviteter som blokkerer andre.",
      en: "Event planning quickly becomes fragmented across spreadsheets, email, messages, documents and separate checklists. The information often exists, but it is harder to know what is missing, who owns what, which deadlines are approaching and which activities block others.",
    },
    built: {
      no: "Fungerende full-stack prototype med arrangementsoversikt, deltakere og RSVP, oppgaver og ansvar, program, Smart Paste og naturlig språk, intelligent Excel/CSV-import, private filer, AI-assistert prioritering og flerbrukersamarbeid med permanent datalagring og sanntidsoppdatering.",
      en: "Working full-stack prototype with event overview, participants and RSVP, tasks and ownership, programme, Smart Paste and natural language, intelligent Excel/CSV import, private files, AI-assisted prioritisation and multi-user collaboration with persistent storage and real-time updates.",
    },
    how: {
      no: "Arrangøren oppretter arrangementet, bygger grunnlaget med deltakere, oppgaver og program, fordeler ansvar, følger opp via dashboard og AI-assistent, og bruker løsningen operativt frem mot og under gjennomføring.",
      en: "The organiser creates the event, builds the foundation with participants, tasks and programme, assigns ownership, follows up via dashboard and AI assistant, and uses the solution operationally before and during execution.",
    },
    relevance: {
      no: "Prosjektet viser hvordan generativ AI kan integreres direkte i en operativ arbeidsprosess — ikke som en separat chatbot — med kontrollert AI, forhåndsvisning og brukerbekreftelse før endringer lagres.",
      en: "The project shows how generative AI can be integrated directly into an operational workflow — not as a separate chatbot — with controlled AI, preview and user confirmation before changes are saved.",
    },
    status: {
      no: "Fungerende full-stack prototype og lukket private beta med permanent datalagring, autentisering og rollebasert flerbrukersamarbeid. Løsningen er et portefølje- og utviklingsprosjekt — ikke et ferdig kommersielt SaaS-produkt.",
      en: "Working full-stack prototype and closed private beta with persistent storage, authentication and role-based multi-user collaboration. The solution is a portfolio and development project — not a finished commercial SaaS product.",
    },
    development: {
      no: "Videre utvikling kan omfatte maler for ulike arrangementstyper, budsjett- og kostnadsstyring, leverandør- og tilbudsoppfølging, varsler, kalender- og e-postintegrasjoner, selvbetjent RSVP og rapportering etter gjennomføring.",
      en: "Further development may include templates for different event types, budget and cost management, supplier and quote follow-up, alerts, calendar and email integrations, self-service RSVP and post-event reporting.",
    },
    adaptation: {
      no: "Grunnmodellen er generell og kan tilpasses firmafester, kundearrangementer, møter, konferanser, bryllup, bursdager, konfirmasjoner og andre private og profesjonelle arrangementer gjennom konfigurerbare grupper, roller og planleggingsprinsipper.",
      en: "The core model is general and can be adapted for company parties, customer events, meetings, conferences, weddings, birthdays, confirmations and other private and professional events through configurable groups, roles and planning principles.",
    },
  },
  overviewImage: "/images/event-planner-hjemmeside.png?v=20260804f",
  detailHeroImage: "/images/event-planner-hero.png?v=20260804f",
  detailHeroObjectPosition: "center",
  needsNewOverviewImage: false,
  needsNewDetailHero: false,
  altText: {
    no: "Event Planner – AI-assistert arbeidsflate for planlegging, deltakere, oppgaver og gjennomføring av arrangementer",
    en: "Event Planner – AI-assisted workspace for planning, participants, tasks and execution of events",
  },
  overviewImageFormat: "standard_1x3",
  detailHeroMissing: true,
  detailDestination: "/event-planner",
  liveSolutionUrl: EVENT_PLANNER_APP_URL,
  ctaLabels: {
    overviewSecondary: { no: "Be om tilgang", en: "Request access" },
    detailPrimary: { no: "Åpne Event Planner", en: "Open Event Planner" },
    detailSecondary: { no: "Be om tilgang", en: "Request access" },
  },
  seo: {
    title: {
      no: "Event Planner | AI-assistert arrangementsplanlegging | Marius Ottesen",
      en: "Event Planner | AI-assisted event planning | Marius Ottesen",
    },
    description: {
      no: "Event Planner samler deltakere, oppgaver, ansvar, program, filer og AI-assistert oppfølging i én arbeidsflate — fungerende full-stack prototype i private beta.",
      en: "Event Planner brings participants, tasks, ownership, programme, files and AI-assisted follow-up together in one workspace — working full-stack prototype in private beta.",
    },
    ogImage: "/images/event-planner-hero.png?v=20260804f",
    canonicalPath: "/event-planner",
  },
  strategicPlatformSlug: "event-planner",
};
