import { PSC_APP_URL, PSC_SEO_DESCRIPTION, PSC_SEO_TITLE, PSC_SHORT_DESCRIPTION } from "../../../lib/psc-brand";
import type { ProjectV2Record } from "../types";

export const predictiveSalesCoachV2: ProjectV2Record = {
  id: "predictive-sales-coach-2026",
  slug: "predictive-sales-coach",
  category: "app_prototype",
  layoutVersion: "project_v2",
  accessMode: "access_code",
  detailLevel: "full",
  date: "2026-06-19",
  displayDate: { no: "19.06.26", en: "19.06.26" },
  title: {
    no: "The Predictive Sales Coach v2.0: AI-basert salgstrening og møteforberedelse",
    en: "The Predictive Sales Coach v2.0: AI-based sales training and meeting preparation",
  },
  subtitle: {
    no: "Lukket pilot og tilgangsstyrt trenings-, evaluerings- og lederinnsiktsplattform for B2B-salg",
    en: "Closed pilot and access-controlled training, evaluation and leadership insight platform for B2B sales",
  },
  statusLabel: {
    no: "Lukket pilot og tilgangsstyrt trenings-, evaluerings- og lederinnsiktsplattform",
    en: "Closed pilot and access-controlled training, evaluation and leadership insight platform",
  },
  maturityLevel: {
    no: "Lukket pilot",
    en: "Closed pilot",
  },
  overviewIntroduction: {
    no: `${PSC_SHORT_DESCRIPTION.no} — tilgangsstyrt lukket pilot.`,
    en: `${PSC_SHORT_DESCRIPTION.en} — access-controlled closed pilot.`,
  },
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
      no: "Lukket pilot og tilgangsstyrt trenings-, evaluerings- og lederinnsiktsplattform. Løsningen er tekstbasert i dagens versjon og utviklet for avgrenset testbruk.",
      en: "Closed pilot and access-controlled training, evaluation and leadership insight platform. The solution is text-based in the current version and developed for limited test use.",
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
  overviewImage: "/images/psc2.png",
  detailHeroImage: "/images/predictive-sales-coach-hero.png",
  detailHeroObjectPosition: "center top",
  needsNewOverviewImage: true,
  needsNewDetailHero: true,
  altText: {
    no: "The Predictive Sales Coach v2.0 – AI-basert salgstrening og møteforberedelse",
    en: "The Predictive Sales Coach v2.0 – AI-based sales training and meeting preparation",
  },
  overviewImageFormat: "legacy_other",
  detailHeroMissing: false,
  detailDestination: "/psc",
  liveSolutionUrl: PSC_APP_URL,
  seo: {
    title: PSC_SEO_TITLE,
    description: PSC_SEO_DESCRIPTION,
    ogImage: "/images/predictive-sales-coach-hero.png",
    canonicalPath: "/psc",
  },
  strategicPlatformSlug: "predictive-sales-coach",
};
