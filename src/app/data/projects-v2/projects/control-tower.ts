import {
  CONTROL_TOWER_APP_URL,
  CONTROL_TOWER_PILOT_PUBLIC,
} from "../../../lib/control-tower-brand";
import type { ProjectV2Record } from "../types";
import { relevantVidereLinksForSlug } from "../relevant-videre-catalog";

export const controlTowerV2: ProjectV2Record = {
  id: "control-tower",
  slug: "control-tower",
  category: "strategic_platform",
  layoutVersion: "project_v2",
  accessMode: "public",
  detailLevel: "full",
  publishedAt: "2026-06-30",
  updatedAt: "2026-07-21",
  date: "2026-07-07",
  displayDate: { no: "07.07.26", en: "07.07.26" },
  title: {
    no: "Control Tower – Decision & Execution Intelligence",
    en: "Control Tower – Decision & Execution Intelligence",
  },
  subtitle: {
    no: "Beslutnings- og gjennomføringsplattform for operativ og kommersiell prioritering",
    en: "Decision and execution platform for operational and commercial prioritisation",
  },
  statusLabel: {
    no: "Funksjonell konseptprototype med Operations- og Commercial-modul, transparent regelmotor og fiktive demodata",
    en: "Functional concept prototype with Operations and Commercial modules, transparent rules engine and fictional demo data",
  },
  maturityLevel: {
    no: "Konseptprototype",
    en: "Concept prototype",
  },
  overviewIntroduction: {
    no: "Hjelper ledelsen å se hvilke operative og kommersielle signaler som krever handling nå — med tydelig prioritet, ansvar og oppfølging av effekt, ikke bare flere rapporter.",
    en: "Helps leadership see which operational and commercial signals require action now — with clear priority, ownership and impact follow-up, not just more reports.",
  },
  overview: {
    what: {
      no: "Konseptdemo som viser hvordan signaler kan samles i Operations- og Commercial-moduler, prioriteres og kobles til tiltak med eier — med åpen demo på fiktive data.",
      en: "Concept demo showing how signals can be gathered in Operations and Commercial modules, prioritised and linked to actions with owners — with an open demo on fictional data.",
    },
    challenge: {
      no: "Mange virksomheter har nok data og rapporter, men mangler tydelig prioritering, eierskap og kobling til konkret handling. Kritiske signaler kan derfor oppdages sent, mens tiltak og effekt blir svakt fulgt opp.",
      en: "Many organisations have enough data and reports, but lack clear prioritisation, ownership and connection to concrete action. Critical signals can therefore be detected late, while actions and impact are weakly followed up.",
    },
    built: {
      no: "Det er utviklet en funksjonell konseptprototype med felles landingsside, Operations Control Tower, Commercial Control Tower, transparent regelmotor, Action Centre, scenarioanalyse og AI-støttet brief.",
      en: "A functional concept prototype has been developed with a shared landing page, Operations Control Tower, Commercial Control Tower, transparent rules engine, Action Centre, scenario analysis and AI-supported brief.",
    },
    how: {
      no: "Signal → konsekvens → prioritet → tiltak → ansvar → effekt. En transparent regelmotor identifiserer avvik, risiko og prioriteringer, og Action Centre kobler neste beste handling til eier og forventet effekt.",
      en: "Signal → consequence → priority → action → ownership → impact. A transparent rules engine identifies deviations, risk and priorities, and the Action Centre links next best action to owner and expected impact.",
    },
    relevance: {
      no: "Prosjektet viser hvordan operativ og kommersiell lederinformasjon kan omsettes til neste beste handling, tydelig ansvar og mer strukturert gjennomføring.",
      en: "The project shows how operational and commercial leadership information can be turned into next best action, clear ownership and more structured execution.",
    },
    status: {
      no: "Konseptprototype — ikke produksjonssatt kundeløsning. Demo viser logikk og brukerflyt; integrasjoner mot reelle systemer er fremtidig arbeid.",
      en: "Concept prototype — not a production customer solution. The demo shows logic and user flow; integrations to real systems are future work.",
    },
    development: {
      no: "Videreutvikling kan omfatte produksjonsintegrasjoner, sikker innlogging, permanent historikk, varslinger og mer avansert prediktiv analyse.",
      en: "Further development may include production integrations, secure login, permanent history, alerts and more advanced predictive analysis.",
    },
    adaptation: {
      no: "Grunnmodellen kan tilpasses flere lederroller, funksjoner og bransjer.",
      en: "The core model can be adapted to more leadership roles, functions and industries.",
    },
  },
  overviewImage: "/images/control-tower-hjemmeside.png?v=20260716",
  detailHeroImage: "/images/control-tower-hjemmeside-bak.png?v=20260720",
  detailHeroObjectPosition: "center",
  needsNewDetailHero: false,
  altText: {
    no: "Control Tower – beslutnings- og gjennomføringsplattform for operativ og kommersiell prioritering",
    en: "Control Tower – decision and execution platform for operational and commercial prioritisation",
  },
  overviewImageFormat: "standard_1x3",
  detailHeroMissing: false,
  detailDestination: "/control-tower",
  liveSolutionUrl: CONTROL_TOWER_APP_URL,
  isLive: CONTROL_TOWER_PILOT_PUBLIC,
  seo: {
    title: {
      no: "Control Tower – Decision & Execution Intelligence | Marius Ottesen",
      en: "Control Tower – Decision & Execution Intelligence | Marius Ottesen",
    },
    description: {
      no: "Konseptdemo: prioriter operative og kommersielle signaler, tiltak og ansvar — åpen demo på fiktive data.",
      en: "Concept demo: prioritise operational and commercial signals, actions and ownership — open demo on fictional data.",
    },
    ogImage: "/images/control-tower-hjemmeside-bak.png?v=20260720",
    canonicalPath: "/control-tower",
  },
  strategicPlatformSlug: "control-tower",
  fagPerspektivLinks: relevantVidereLinksForSlug("control-tower"),
};
