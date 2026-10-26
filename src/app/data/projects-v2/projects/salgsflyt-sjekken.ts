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
    no: "Finn ut hvor salgsarbeidet lekker verdi — og hva ledelsen bør prioritere først. Ca. 10–12 minutter til en lederrapport med konkrete anbefalinger.",
    en: "Find where sales work leaks value — and what leadership should prioritise first. About 10–12 minutes to a leader report with concrete recommendations.",
  },
  overview: {
    what: {
      no: "En tilgangsstyrt diagnose for SMB-ledere som kartlegger friksjon og forbedringsmuligheter i salgsflyt, kundedialog og kundeoppfølging — på tvers av 12 suksessdimensjoner.",
      en: "An access-controlled diagnosis for SMB leaders that maps friction and improvement opportunities in sales flow, customer dialogue and follow-up — across 12 success dimensions.",
    },
    challenge: {
      no: "Muligheter forsvinner ofte mellom synlighet, dialog, tilbud og videre kundeoppfølging — uten at ledelsen ser det tydelig nok.",
      en: "Opportunities are often lost between visibility, dialogue, proposals and follow-up — without leadership seeing it clearly enough.",
    },
    built: {
      no: "Lederrapport med styrker, forbedringsområder og prioriterte tiltak — basert på 36 kjernespørsmål og virksomhetskontekst.",
      en: "Leader report with strengths, improvement areas and prioritised actions — based on 36 core questions and business context.",
    },
    how: {
      no: "Svar på spørsmål → eventuelle korte dypdykk → lederrapport med anbefalinger. Tilgang med kode.",
      en: "Answer questions → optional short deep dives → leader report with recommendations. Access with code.",
    },
    relevance: {
      no: "Gir klarere prioriteringer og kommersiell lederinnsikt — som grunnlag for forbedring, ikke som ferdig salgsstrategi.",
      en: "Gives clearer priorities and commercial leadership insight — as a basis for improvement, not as a finished sales strategy.",
    },
    status: {
      no: SMB_SALGSFLYT_MATURITY_LABEL.no,
      en: SMB_SALGSFLYT_MATURITY_LABEL.en,
    },
    development: {
      no: "Løsningen kan videreutvikles med bransjetilpassede vurderinger, tettere CRM-samspill og oppfølging av forbedringstiltak over tid. Erfaringene fra kundebruk vil avgjøre hva som prioriteres videre.",
      en: "The solution can be further developed with industry-adapted assessments, closer CRM interaction and follow-up of improvement measures over time. Experience from customer use will determine what is prioritised next.",
    },
    adaptation: {
      no: "Kartleggingen kan tilpasses ulike SMB-virksomheter, salgsmodeller og kommersielle utfordringer – slik at vurderingene blir relevante for hvordan den enkelte virksomhet skaper og følger opp kunder.",
      en: "The assessment can be adapted to different SME businesses, sales models and commercial challenges — so that the evaluations are relevant to how each business creates and follows up customers.",
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
      no: "SMB Salgsflyt-sjekken 2.0 | Kartlegg salgsflyt – Marius Ottesen",
      en: "SMB Sales Flow Check 2.0 | Map sales flow – Marius Ottesen",
    },
    description: {
      no: "Oppdag friksjon i salgsflyten: 12 dimensjoner, 36 spørsmål, lederrapport og prioriterte tiltak. Ca. 10–12 min. MOC.",
      en: "Discover friction in the sales flow: 12 dimensions, 36 questions, leader report and prioritised actions. About 10–12 min. MOC.",
    },
    ogImage: SMB_SALGSFLYT_HERO_IMAGE,
    canonicalPath: "/salgsflyt-sjekken",
  },
  strategicPlatformSlug: "salgsflyt-sjekken",
  fagPerspektivLinks: relevantVidereLinksForSlug("salgsflyt-sjekken"),
};
