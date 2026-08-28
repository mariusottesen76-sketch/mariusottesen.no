import { PSC_APP_URL, PSC_MATURITY_LABEL, PSC_OVERVIEW_IMAGE, PSC_SEO_DESCRIPTION, PSC_SEO_TITLE, PSC_SHORT_DESCRIPTION } from "../../../lib/psc-brand";
import type { ProjectV2Record } from "../types";

export const predictiveSalesCoachV2: ProjectV2Record = {
  id: "predictive-sales-coach-2026",
  slug: "predictive-sales-coach",
  category: "app_prototype",
  layoutVersion: "project_v2",
  accessMode: "access_code",
  detailLevel: "full",
  publishedAt: "2026-02-26",
  updatedAt: "2026-06-17",
  updateSummary: {
    no: "Offentlig publisering av ekspressmodus v2.0 i PSC-appen med flervalgstrening, egen evalueringslogikk og Express Mode Scoring.",
    en: "Public release of Express Mode v2.0 in the PSC app with multiple-choice training, dedicated evaluation logic and Express Mode scoring.",
  },
  date: "2026-06-19",
  displayDate: { no: "19.06.26", en: "19.06.26" },
  title: {
    no: "The Predictive Sales Coach v2.0: AI-basert salgstrening og møteforberedelse",
    en: "The Predictive Sales Coach v2.0: AI-based sales training and meeting preparation",
  },
  subtitle: {
    no: "AI-basert salgstrening og møteforberedelse for B2B-salg",
    en: "AI-based sales training and meeting preparation for B2B sales",
  },
  statusLabel: PSC_MATURITY_LABEL,
  maturityLevel: PSC_MATURITY_LABEL,
  overviewIntroduction: PSC_SHORT_DESCRIPTION,
  overview: {
    what: {
      no: "En tilgangsstyrt trenings-, simulerings- og evalueringsplattform for B2B-kundedialog — med scenario-oppsett, kundesimulering, scorecard, DISC-inspirert kommunikasjon og lederinnsikt.",
      en: "An access-controlled training, simulation and evaluation platform for B2B customer dialogue — with scenario setup, customer simulation, scorecard, DISC-inspired communication and leadership insight.",
    },
    challenge: {
      no: "Mange selgere trener for lite før viktige kundemøter. Forberedelser blir ofte generelle, kundeinnsikt brukes ujevnt, og salgsledere mangler strukturert innsikt i hvilke ferdigheter teamet faktisk må utvikle.",
      en: "Many sales reps train too little before important customer meetings. Preparation is often generic, customer insight is used unevenly, and sales leaders lack structured insight into which skills the team actually needs to develop.",
    },
    built: {
      no: "Det er utviklet en AI-basert plattform med scenario-oppsett, kundetype, bransje, salgsfase, simulert kundedialog, strukturert evaluering, scorecard, arkiv og grunnlag for lederinnsikt.",
      en: "An AI-based platform has been developed with scenario setup, customer type, industry, sales phase, simulated customer dialogue, structured evaluation, scorecard, archive and a foundation for leadership insight.",
    },
    how: {
      no: "Brukeren setter opp et kundescenario, trener på kundedialogen med AI-simulert kunde, og får strukturert feedback på salgsfase, kommunikasjon, verdiargumentasjon og innvendingshåndtering etter økten.",
      en: "The user sets up a customer scenario, trains on the customer dialogue with an AI-simulated customer, and receives structured feedback on sales phase, communication, value argumentation and objection handling after the session.",
    },
    relevance: {
      no: "Prosjektet viser hvordan AI kan støtte salgstrening, møteforberedelse, onboarding og mer presis coaching før viktige kundemøter — uten å erstatte salgsledelse.",
      en: "The project shows how AI can support sales training, meeting preparation, onboarding and more precise coaching before important customer meetings — without replacing sales leadership.",
    },
    status: {
      no: "Tilgangsstyrt salgsutviklingsverktøy · klar for avgrenset kundebruk. Løsningen er tekstbasert i dagens versjon og utviklet for trenings-, simulerings-, evaluerings- og lederinnsiktsbruk.",
      en: "Access-controlled sales development tool · ready for limited customer use. The solution is text-based in the current version and built for training, simulation, evaluation and leadership insight use.",
    },
    development: {
      no: "Videre potensial inkluderer talegrensesnitt, flere scenarioer, teamrapporter, CRM-kobling, lederdashboard og mer avansert scorecard og historikk.",
      en: "Further potential includes voice interfaces, more scenarios, team reports, CRM integration, leadership dashboards and more advanced scorecard and history.",
    },
    adaptation: {
      no: "Grunnmodellen kan tilpasses andre selskaper, bransjer og profesjonelle samtalesituasjoner — for eksempel forhandling, rådgivning og krevende kundedialoger.",
      en: "The core model can be adapted for other organisations, industries and professional conversation situations — for example negotiation, advisory work and demanding customer dialogues.",
    },
  },
  overviewImage: PSC_OVERVIEW_IMAGE,
  detailHeroImage: "/images/predictive-sales-coach-hero.png?v=20260719b",
  detailHeroObjectPosition: "center",
  needsNewOverviewImage: false,
  needsNewDetailHero: false,
  altText: {
    no: "The Predictive Sales Coach v2.0 – AI-basert salgstrening og møteforberedelse",
    en: "The Predictive Sales Coach v2.0 – AI-based sales training and meeting preparation",
  },
  overviewImageFormat: "standard_1x3",
  detailHeroMissing: false,
  detailDestination: "/psc",
  liveSolutionUrl: PSC_APP_URL,
  seo: {
    title: PSC_SEO_TITLE,
    description: PSC_SEO_DESCRIPTION,
    ogImage: "/images/predictive-sales-coach-hero.png?v=20260719b",
    canonicalPath: "/psc",
  },
  strategicPlatformSlug: "predictive-sales-coach",
};
