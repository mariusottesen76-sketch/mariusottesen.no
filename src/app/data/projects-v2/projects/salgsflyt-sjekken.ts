import {
  SMB_SALGSFLYT_APP_URL,
  SMB_SALGSFLYT_HERO_IMAGE,
  SMB_SALGSFLYT_MATURITY_LABEL,
  SMB_SALGSFLYT_OVERVIEW_IMAGE,
} from "../../../lib/smb-salgsflyt-brand";
import type { ProjectV2Record } from "../types";
import { relevantVidereLinksForSlug } from "../relevant-videre-catalog";

export const salgsflytSjekkenV2: ProjectV2Record = {
  id: "smb-salgsflyt-sjekken-2026",
  slug: "salgsflyt-sjekken",
  category: "app_prototype",
  layoutVersion: "project_v2",
  accessMode: "access_code",
  detailLevel: "full",
  publishedAt: "2026-10-26",
  date: "2026-05-08",
  displayDate: { no: "26.10.26", en: "26.10.26" },
  title: {
    no: "SMB Salgsflyt-sjekken 2.0 – Fra salgsfriksjon til prioriterte tiltak",
    en: "SMB Sales Flow Check 2.0 – From sales friction to prioritised actions",
  },
  subtitle: {
    no: "Lederorientert diagnose med 12 suksessdimensjoner og 36 spørsmål",
    en: "Leadership-oriented diagnosis with 12 success dimensions and 36 questions",
  },
  statusLabel: SMB_SALGSFLYT_MATURITY_LABEL,
  maturityLevel: SMB_SALGSFLYT_MATURITY_LABEL,
  overviewIntroduction: {
    no: "En lederorientert diagnose av hvor virksomheten mister fremdrift og kommersielle muligheter — med 12 suksessdimensjoner, 36 spørsmål og konkrete anbefalinger for bedre salgsflyt.",
    en: "A leadership-oriented diagnosis of where the organisation loses momentum and commercial opportunity — with 12 success dimensions, 36 questions and concrete recommendations for better sales flow.",
  },
  overview: {
    what: {
      no: "Et tilgangsstyrt diagnoseverktøy fra Marius Ottesen Consulting (MOC) som kartlegger friksjon i salgsarbeid, kundedialog, digital kundereise og kundeoppfølging — på tvers av 12 suksessdimensjoner.",
      en: "An access-controlled diagnostic tool from Marius Ottesen Consulting (MOC) that maps friction in sales work, customer dialogue, digital customer journey and customer follow-up — across 12 success dimensions.",
    },
    challenge: {
      no: "Muligheter forsvinner ofte i overgangene mellom synlighet, henvendelse, dialog, tilbud, beslutning og videre kundeutvikling — uten at ledelsen ser hvor verdien lekker ut.",
      en: "Opportunities are often lost in transitions between visibility, enquiry, dialogue, proposal, decision and further customer development — without leadership seeing where value leaks.",
    },
    built: {
      no: "v2.0 er deployert som tilgangsstyrt diagnose: virksomhetskontekst, 36 atferdsbaserte spørsmål, adaptive dypdykk, strukturert scoring, lederrapport og fortrolig rådgivergrunnlag for MOC.",
      en: "v2.0 is deployed as an access-controlled diagnosis: business context, 36 behaviour-based questions, adaptive deep dives, structured scoring, leader report and confidential advisor basis for MOC.",
    },
    how: {
      no: "Virksomhetskontekst → 36 kjernespørsmål → eventuelle adaptive dypdykk → samlet scoring og lederrapport med prioriterte tiltak. Estimert tidsbruk ca. 10–12 minutter.",
      en: "Business context → 36 core questions → optional adaptive deep dives → overall scoring and leader report with prioritised actions. Estimated time about 10–12 minutes.",
    },
    relevance: {
      no: "Gir SMB-ledere klarere prioriteringer og strukturert innsikt i salgsflyt — som grunnlag for forbedring, ikke som ferdig CRM-prosjekt eller salgsstrategi.",
      en: "Gives SMB leaders clearer priorities and structured insight into sales flow — as a basis for improvement, not as a finished CRM project or sales strategy.",
    },
    status: {
      no: SMB_SALGSFLYT_MATURITY_LABEL.no,
      en: SMB_SALGSFLYT_MATURITY_LABEL.en,
    },
    development: {
      no: "Videre modenhet kan omfatte bransjetilpasning, CRM-koblinger, utvidet rapportering og oppfølging etter gjennomgang — etter avtale med MOC.",
      en: "Further maturity may include industry adaptation, CRM connections, extended reporting and follow-up after review — by agreement with MOC.",
    },
    adaptation: {
      no: "Grunnmodellen kan tilpasses andre SMB-er og salgsmodeller etter avtale — blant annet bransjetilpasning og utvidet rapportering.",
      en: "The core model can be adapted for other SMEs and sales models by agreement — including industry adaptation and extended reporting.",
    },
  },
  overviewImage: SMB_SALGSFLYT_OVERVIEW_IMAGE,
  detailHeroImage: SMB_SALGSFLYT_HERO_IMAGE,
  detailHeroObjectPosition: "center",
  needsNewDetailHero: false,
  altText: {
    no: "SMB Salgsflyt-sjekken 2.0 – lederorientert kommersiell diagnose",
    en: "SMB Sales Flow Check 2.0 – leadership-oriented commercial diagnosis",
  },
  overviewImageFormat: "standard_1x3",
  detailHeroMissing: false,
  detailDestination: "/salgsflyt-sjekken",
  liveSolutionUrl: SMB_SALGSFLYT_APP_URL,
  seo: {
    title: {
      no: "SMB Salgsflyt-sjekken 2.0 | Kommersiell diagnose – Marius Ottesen",
      en: "SMB Sales Flow Check 2.0 | Commercial diagnosis – Marius Ottesen",
    },
    description: {
      no: "Lederorientert diagnose for SMB: 12 suksessdimensjoner, 36 spørsmål og prioriterte tiltak. Utviklet av Marius Ottesen Consulting (MOC).",
      en: "Leadership-oriented SMB diagnosis: 12 success dimensions, 36 questions and prioritised actions. Developed by Marius Ottesen Consulting (MOC).",
    },
    ogImage: SMB_SALGSFLYT_HERO_IMAGE,
    canonicalPath: "/salgsflyt-sjekken",
  },
  strategicPlatformSlug: "salgsflyt-sjekken",
  fagPerspektivLinks: relevantVidereLinksForSlug("salgsflyt-sjekken"),
};
