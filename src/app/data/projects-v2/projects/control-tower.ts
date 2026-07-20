import {
  CONTROL_TOWER_APP_URL,
  CONTROL_TOWER_PILOT_PUBLIC,
} from "../../../lib/control-tower-brand";
import type { ProjectV2Record } from "../types";

export const controlTowerV2: ProjectV2Record = {
  id: "control-tower",
  slug: "control-tower",
  category: "strategic_platform",
  layoutVersion: "project_v2",
  accessMode: "public",
  detailLevel: "full",
  publishedAt: "2026-06-30",
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
    no: "Control Tower omsetter operative og kommersielle signaler til konsekvens, prioritet, neste beste handling, tydelig ansvar og strukturert effektoppfølging.",
    en: "Control Tower turns operational and commercial signals into consequence, priority, next best action, clear ownership and structured impact follow-up.",
  },
  overview: {
    what: {
      no: "En modulær lederplattform som omsetter spredte operative og kommersielle signaler til tydelige prioriteringer, neste beste handling, ansvar og strukturert effektoppfølging.",
      en: "A modular leadership platform that turns scattered operational and commercial signals into clear priorities, next best action, ownership and structured impact follow-up.",
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
      no: "Funksjonell konseptprototype med Operations- og Commercial-modul, transparent regelmotor og fiktive demodata.",
      en: "Functional concept prototype with Operations and Commercial modules, transparent rules engine and fictional demo data.",
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
      no: "Beslutnings- og gjennomføringsplattform som omsetter operative og kommersielle signaler til prioritering, handling, ansvar og effekt.",
      en: "Decision and execution platform that turns operational and commercial signals into prioritisation, action, ownership and impact.",
    },
    ogImage: "/images/control-tower-hjemmeside-bak.png?v=20260720",
    canonicalPath: "/control-tower",
  },
  strategicPlatformSlug: "control-tower",
};
