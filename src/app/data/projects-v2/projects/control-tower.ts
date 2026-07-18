import type { ProjectV2Record } from "../types";

/** Godkjent oversiktsinnhold — hentet fra eksisterende strategic platform-data, ikke omskrevet. */
export const controlTowerV2: ProjectV2Record = {
  id: "control-tower",
  slug: "control-tower",
  category: "strategic_platform",
  layoutVersion: "project_v2",
  accessMode: "concept",
  detailLevel: "full",
  date: "2026-07-07",
  displayDate: { no: "07.07.26", en: "07.07.26" },
  title: {
    no: "Control Tower: Decision & Execution Intelligence",
    en: "Control Tower: Decision & Execution Intelligence",
  },
  subtitle: {
    no: "Beslutnings- og gjennomføringsplattform for operativ og kommersiell prioritering",
    en: "Decision and execution platform for operational and commercial prioritisation",
  },
  statusLabel: {
    no: "Ferdigstilt funksjonell konseptprototype med fiktive demodata",
    en: "Completed functional concept prototype with fictional demo data",
  },
  maturityLevel: {
    no: "Konseptprototype",
    en: "Concept prototype",
  },
  overviewIntroduction: {
    no: "Control Tower er en ferdigstilt beslutnings- og gjennomføringsplattform som omsetter spredte data, KPI-er og risikosignaler til tydelige prioriteringer, tiltak, ansvar og systematisk effektoppfølging.",
    en: "Control Tower is a completed decision and execution platform that turns scattered data, KPIs and risk signals into clear priorities, actions, ownership and systematic impact follow-up.",
  },
  overview: {
    what: {
      no: "En modulær lederplattform som gjør spredte virksomhetssignaler om til prioriteringer, tiltak, ansvar og systematisk effektoppfølging.",
      en: "A modular leadership platform that turns scattered business signals into priorities, actions, ownership and systematic impact follow-up.",
    },
    challenge: {
      no: "Mange virksomheter har nok data og rapporter, men mangler tydelig prioritering, eierskap og kobling til konkret handling. Kritiske signaler kan derfor oppdages sent, mens tiltak og effekt blir svakt fulgt opp.",
      en: "Many organisations have enough data and reports, but lack clear prioritisation, ownership and connection to concrete action. Critical signals can therefore be detected late, while actions and impact are weakly followed up.",
    },
    built: {
      no: "Det er utviklet en funksjonell konseptprototype med felles landingsside, datamodell, regelmotor, AI-støttet analyse, Action Centre og to ledermoduler: Operations Control Tower og Commercial Control Tower.",
      en: "A functional concept prototype has been developed with a shared landing page, data model, rules engine, AI-supported analysis, Action Centre and two leadership modules: Operations Control Tower and Commercial Control Tower.",
    },
    how: {
      no: "Strukturerte data fra Excel eller CSV normaliseres til en felles modell. En transparent regelmotor identifiserer avvik, risiko og prioriteringer.",
      en: "Structured data from Excel or CSV is normalised into a shared model. A transparent rules engine identifies deviations, risk and priorities.",
    },
    relevance: {
      no: "Prosjektet viser hvordan operativ og kommersiell lederinformasjon kan omsettes til neste beste handling, tydelig ansvar og mer strukturert gjennomføring.",
      en: "The project shows how operational and commercial leadership information can be turned into next best action, clear ownership and more structured execution.",
    },
    status: {
      no: "Ferdigstilt konseptprototype med fungerende Operations- og Commercial-modul, fiktive demodata og uten aktive systemintegrasjoner.",
      en: "Completed concept prototype with working Operations and Commercial modules, fictional demo data and no active system integrations.",
    },
    development: {
      no: "Plattformen kan videreutvikles med systemintegrasjoner, rollebaserte arbeidsflater, varslinger, scenarioanalyse og mer avansert AI-støtte.",
      en: "The platform can be developed further with system integrations, role-based workspaces, alerts, scenario analysis and more advanced AI support.",
    },
    adaptation: {
      no: "Grunnmodellen kan tilpasses flere lederroller, funksjoner og bransjer.",
      en: "The core model can be adapted to more leadership roles, functions and industries.",
    },
  },
  overviewImage: "/images/control-tower-hjemmeside.png?v=20260716",
  detailHeroImage: "/images/control-tower-hjemmeside-bak.png?v=20260717",
  detailHeroObjectPosition: "center",
  needsNewDetailHero: false,
  altText: {
    no: "Control Tower – beslutnings- og gjennomføringsplattform for operativ og kommersiell prioritering",
    en: "Control Tower – decision and execution platform for operational and commercial prioritisation",
  },
  overviewImageFormat: "standard_1x3",
  detailHeroMissing: false,
  detailDestination: "/control-tower",
  seo: {
    title: {
      no: "Control Tower – Decision & Execution Intelligence | Marius Ottesen",
      en: "Control Tower – Decision & Execution Intelligence | Marius Ottesen",
    },
    description: {
      no: "Modulær lederplattform for operativ og kommersiell prioritering, neste beste handling, ansvar og systematisk effektoppfølging.",
      en: "Modular leadership platform for operational and commercial prioritisation, next best action, ownership and systematic impact follow-up.",
    },
    ogImage: "/images/control-tower-hjemmeside-bak.png",
    canonicalPath: "/control-tower",
  },
  strategicPlatformSlug: "control-tower",
};
