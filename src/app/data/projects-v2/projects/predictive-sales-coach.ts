import { PSC_APP_URL, PSC_MATURITY_LABEL, PSC_OVERVIEW_IMAGE, PSC_SEO_DESCRIPTION, PSC_SEO_TITLE, PSC_SHORT_DESCRIPTION } from "../../../lib/psc-brand";
import type { ProjectV2Record } from "../types";
import { relevantVidereLinksForSlug } from "../relevant-videre-catalog";

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
      no: "Treningsflate der selgere øver på realistiske kundescenarioer, får tilbakemelding etter økten og bygger trygghet før møter — med grunnlag for lederoppfølging.",
      en: "Training workspace where sales reps practise realistic customer scenarios, receive feedback after sessions and build confidence before meetings — with a basis for leadership follow-up.",
    },
    challenge: {
      no: "Før viktige kundemøter er forberedelsen ofte for generell — og salgsledere ser sent hvilke dialogferdigheter som faktisk svikter i praksis.",
      en: "Before important customer meetings, preparation is often too generic — and sales leaders see too late which dialogue skills actually fail in practice.",
    },
    built: {
      no: "Tilgangsstyrt app: scenario, simulert kundedialog, evaluering etter økt og arkiv — tekstbasert i dagens versjon.",
      en: "Access-controlled app: scenario, simulated customer dialogue, post-session evaluation and archive — text-based in the current version.",
    },
    how: {
      no: "Velg scenario og kundetype → dialog med simulert kunde → scorecard og konkrete forbedringspunkter. Tekstbasert i dagens versjon; tilgang med kode.",
      en: "Choose scenario and customer type → dialogue with simulated customer → scorecard and concrete improvement points. Text-based in the current version; access with code.",
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
  fagPerspektivLinks: relevantVidereLinksForSlug("psc"),
};
