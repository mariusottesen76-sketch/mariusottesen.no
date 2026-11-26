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
    no: "Aktivt kommersielt rådgivningssamarbeid med Marius Ottesen, Thomas Holm og Gunnar Gundersen — publisert plattform på rowsolutions.no. Denne siden dokumenterer mitt porteføljebidrag som plattformutvikler, ikke en upublisert prototype.",
    en: "Active commercial advisory collaboration with Marius Ottesen, Thomas Holm and Gunnar Gundersen — published platform at rowsolutions.no. This page documents my portfolio contribution as platform developer, not an unpublished prototype.",
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
      no: "Publisert nettsted med tjenester, metoder, faglig innsikt og kontakt. Videreutvikles løpende med nytt innhold og bedre brukeropplevelse.",
      en: "Published website with services, methods, professional insight and contact. Continues to evolve with new content and improved user experience.",
    },
    development: { no: "", en: "" },
    adaptation: { no: "", en: "" },
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
      no: "Row Solutions — aktivt kommersielt rådgivningssamarbeid med Marius Ottesen, Thomas Holm og Gunnar Gundersen. Publisert rowsolutions.no og porteføljedokumentasjon av Marius' utviklingsbidrag.",
      en: "Row Solutions — active commercial advisory collaboration with Marius Ottesen, Thomas Holm and Gunnar Gundersen. Published rowsolutions.no and portfolio documentation of Marius' development contribution.",
    },
    ogImage: ROW_SOLUTIONS_HERO_IMAGE,
    canonicalPath: "/row-solutions",
  },
  strategicPlatformSlug: "row-solutions",
  fagPerspektivLinks: relevantVidereLinksForSlug("row-solutions"),
};
