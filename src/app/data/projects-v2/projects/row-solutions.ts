import { ROW_SOLUTIONS_HERO_IMAGE, ROW_SOLUTIONS_LIVE_URL, ROW_SOLUTIONS_OVERVIEW_IMAGE } from "../../../lib/row-solutions-brand";
import type { ProjectV2Record } from "../types";
import { relevantVidereLinksForSlug } from "../relevant-videre-catalog";

export const rowSolutionsV2: ProjectV2Record = {
  id: "row-solutions-2026",
  slug: "row-solutions",
  category: "case_implementation",
  layoutVersion: "project_v2",
  accessMode: "public",
  detailLevel: "full",
  publishedAt: "2026-08-28",
  updatedAt: "2026-11-17",
  date: "2026-08-28",
  displayDate: { no: "28.08.26", en: "28.08.26" },
  title: {
    no: "Row Solutions – bedre kommersiell flyt fra synlighet til salg og oppfølging",
    en: "Row Solutions – better commercial flow from visibility to sales and follow-up",
  },
  subtitle: {
    no: "Retning. Kraft. Fremdrift. Resultat.",
    en: "Direction. Power. Momentum. Results.",
  },
  overviewMetadataLine: {
    no: "Kommersielle initiativer · Publisert nettside og aktivt samarbeid",
    en: "Commercial Initiatives · Published website and active collaboration",
  },
  statusLabel: {
    no: "Publisert nettside og aktivt kommersielt samarbeid",
    en: "Published website and active commercial collaboration",
  },
  overviewIntroduction: {
    no: "Row Solutions er kommersielt samarbeid mellom Marius Ottesen og Thomas Holm for SMB — bedre sammenheng mellom synlighet, salg, kundedialog og oppfølging, med tjenester, metoder og rowsolutions.no.",
    en: "Row Solutions is commercial collaboration between Marius Ottesen and Thomas Holm for SMEs — stronger alignment between visibility, sales, customer dialogue and follow-up, with services, methods and rowsolutions.no.",
  },
  overview: {
    what: {
      no: "Rådgivningssamarbeid for SMB med strategi, tjenester, metoder og rowsolutions.no som publisert plattform.",
      en: "Advisory collaboration for SMEs with strategy, services, methods and rowsolutions.no as the published platform.",
    },
    challenge: {
      no: "SMB-ledere møter friksjon mellom synlighet, leads, salg og oppfølging — og trenger et tilbud som er forståelig uten å bli for bredt eller teknisk.",
      en: "SMB leaders face friction between visibility, leads, sales and follow-up — and need an offering that is understandable without becoming too broad or technical.",
    },
    built: {
      no: "Posisjonering, tjenestestruktur, kundereise og publisert rowsolutions.no (norsk og engelsk).",
      en: "Positioning, service structure, customer journey and published rowsolutions.no (Norwegian and English).",
    },
    how: {
      no: "Nettsiden leder fra hvem Row er til tjenester, AI Discovery, innhold og kontakt.",
      en: "The site leads from who Row is to services, AI Discovery, content and contact.",
    },
    relevance: {
      no: "Prosjektet dokumenterer evne til å koble kommersiell problemforståelse, struktur, brukerreise, teknologi og praktisk gjennomføring — relevant for kommersiell utvikling, digital transformasjon og AI Value Realization.",
      en: "The project documents ability to connect commercial problem understanding, structure, user journey, technology and practical execution — relevant for commercial development, digital transformation and AI value realization.",
    },
    status: {
      no: "Nettsiden for rowsolutions.no er publisert og live i Production. Plattformen samler posisjonering, tjenester, prosjekter, faglig innhold og kundedialog i én kommersiell struktur, uten at det er påstått dokumentert markedseffekt eller kommersiell traction.",
      en: "The website for rowsolutions.no is published and live in production. The platform brings together positioning, services, projects, professional content and customer dialogue in one commercial structure, without claimed documented market effect or commercial traction.",
    },
    development: {
      no: "Videre utvikling inkluderer mer faginnhold og dokumenterte case, konverterings- og brukerreiseanalyse, videreutvikling av AI Discovery, optimalisering av CTA-er og leadflyt, SEO/AEO/GEO-arbeid, analytics og læring fra faktisk bruk — samt CRM-integrasjon som mulig videreutvikling der det ikke er bygget.",
      en: "Further development includes more professional content and documented cases, conversion and user journey analysis, further development of AI Discovery, optimisation of CTAs and lead flows, SEO/AEO/GEO work, analytics and learning from actual use — plus CRM integration as possible further development where not yet built.",
    },
    adaptation: {
      no: "Arbeidsmetoden kan overføres til andre SMB-er, rådgivningsmiljøer, kunnskapsbedrifter og profesjonelle tjenestevirksomheter som må koble posisjonering, tjenester, innhold og kommersiell digital tilstedeværelse — uten å fremstilles som leverte kundeprosjekter.",
      en: "The working method can be transferred to other SMBs, advisory environments, knowledge businesses and professional service organisations that need to connect positioning, services, content and commercial digital presence — without being presented as delivered client projects.",
    },
  },
  overviewImage: ROW_SOLUTIONS_OVERVIEW_IMAGE,
  detailHeroImage: ROW_SOLUTIONS_HERO_IMAGE,
  detailHeroObjectPosition: "center",
  needsNewOverviewImage: false,
  needsNewDetailHero: false,
  altText: {
    no: "Row Solutions – logo og merkevaregrafikk",
    en: "Row Solutions – logo and brand graphic",
  },
  detailHeroAlt: {
    no: "Row Solutions – Bedre kommersiell flyt, fra synlighet til salg og oppfølging",
    en: "Row Solutions – Better commercial flow, from visibility to sales and follow-up",
  },
  overviewImageFormat: "standard_1x3",
  detailHeroMissing: false,
  detailDestination: "/row-solutions",
  liveSolutionUrl: ROW_SOLUTIONS_LIVE_URL,
  ctaLabels: {
    overviewSecondary: { no: "Åpne rowsolutions.no", en: "Open rowsolutions.no" },
    detailPrimary: { no: "Utforsk Row Solutions", en: "Explore Row Solutions" },
    detailSecondary: { no: "Tilbake til AI, prosjekter & utvikling", en: "Back to AI, Projects & Development" },
  },
  seo: {
    title: {
      no: "Row Solutions — kommersielt SMB-samarbeid | Marius Ottesen",
      en: "Row Solutions — commercial SMB collaboration | Marius Ottesen",
    },
    description: {
      no: "Row Solutions — kommersielt samarbeid for SMB: strategi, tjenester, metoder, verktøy, salg og kundedialog. Dokumentert på mariusottesen.no; live plattform på rowsolutions.no.",
      en: "Row Solutions — commercial collaboration for SMEs: strategy, services, methods, tools, sales and customer dialogue. Documented on mariusottesen.no; live platform at rowsolutions.no.",
    },
    ogImage: ROW_SOLUTIONS_HERO_IMAGE,
    canonicalPath: "/row-solutions",
  },
  strategicPlatformSlug: "row-solutions",
  fagPerspektivLinks: relevantVidereLinksForSlug("row-solutions"),
};
