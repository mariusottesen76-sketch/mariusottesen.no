import { SMB_SALGSFLYT_APP_URL } from "../../../lib/smb-salgsflyt-brand";
import type { ProjectV2Record } from "../types";

export const salgsflytSjekkenV2: ProjectV2Record = {
  id: "smb-salgsflyt-sjekken-2026",
  slug: "salgsflyt-sjekken",
  category: "app_prototype",
  layoutVersion: "project_v2",
  accessMode: "access_code",
  detailLevel: "full",
  publishedAt: "2026-06-16",
  date: "2026-05-08",
  displayDate: { no: "08.05.26", en: "08.05.26" },
  title: {
    no: "SMB Salgsflyt-sjekken: Interaktiv diagnose og AI-rapportering",
    en: "SMB Sales Flow Check: Interactive diagnosis and AI reporting",
  },
  subtitle: {
    no: "Tilgangsstyrt diagnoseverktøy med scoring, AI-analyse, rapportering og administrativ oppfølging",
    en: "Access-controlled diagnostic tool with scoring, AI analysis, reporting and administrative follow-up",
  },
  statusLabel: {
    no: "Tilgangsstyrt diagnoseverktøy utviklet for avgrenset testing og videreutvikling",
    en: "Access-controlled diagnostic tool developed for limited testing and further development",
  },
  maturityLevel: {
    no: "Tilgangsstyrt prototype",
    en: "Access-controlled prototype",
  },
  overviewIntroduction: {
    no: "SMB Salgsflyt-sjekken er et interaktivt diagnoseverktøy som kartlegger salgsfriksjon på tvers av ti kommersielle dimensjoner — med AI-generert analyse, kunderapport og adminkonsoll for oppfølging.",
    en: "SMB Sales Flow Check is an interactive diagnostic tool that maps sales friction across ten commercial dimensions — with AI-generated analysis, customer report and admin console for follow-up.",
  },
  overview: {
    what: {
      no: "Et tilgangsstyrt diagnoseverktøy for ledere som avdekker friksjon og flaskehalser i salgsleddet — særlig relevant for SMB, men tilpassbart til andre kommersielle miljøer.",
      en: "An access-controlled diagnostic tool for leaders that uncovers friction and bottlenecks in the sales function — especially relevant for SMBs, but adaptable to other commercial environments.",
    },
    challenge: {
      no: "Mange virksomheter har usynlig friksjon i salgsleddet: ubrukte CRM-systemer, ustrukturerte tilbudsprosesser og svak leadoppfølging. Rotårsaker avdekkes sjelden systematisk.",
      en: "Many organisations have invisible friction in their sales function: unused CRM systems, unstructured proposal processes and weak lead follow-up. Root causes are rarely uncovered systematically.",
    },
    built: {
      no: "Det er utviklet en tilgangsstyrt diagnoseapp med hovedkartlegging, dypdykk i svake områder, automatisk scoring, AI-generert kunderapport og intern salgsvurdering — med adminkonsoll.",
      en: "An access-controlled diagnostic app has been developed with main assessment, deep dives into weak areas, automatic scoring, AI-generated customer report and internal sales assessment — with admin console.",
    },
    how: {
      no: "Respondenten gjennomfører hovedkartlegging og dypdykk, AI tolker scores og fritekst, og kunden får PDF-rapport mens besvarelser samles i adminkonsollet for prioritering og oppfølging.",
      en: "The respondent completes main assessment and deep dive, AI interprets scores and free text, and the customer receives a PDF report while responses are collected in the admin console for prioritisation and follow-up.",
    },
    relevance: {
      no: "Prosjektet viser hvordan AI kan strukturere diagnose og forberede prioritering — og samtidig levere umiddelbar verdi til respondenten gjennom rapport og refleksjon.",
      en: "The project shows how AI can structure diagnosis and prepare prioritisation — while also delivering immediate value to the respondent through report and reflection.",
    },
    status: {
      no: "Tilgangsstyrt diagnoseverktøy med scoring, AI-analyse og adminkonsoll — moden for avgrenset testing og videreutvikling. Hele prosessen tar under ti minutter.",
      en: "Access-controlled diagnostic tool with scoring, AI analysis and admin console — mature for limited testing and further development. The full process takes under ten minutes.",
    },
    development: {
      no: "Videre potensial inkluderer CRM-integrasjon, bransjetilpassede spørsmål, pipeline-styring, oppfølgingslogikk og rapportering for ulike kommersielle team.",
      en: "Further potential includes CRM integration, industry-adapted questions, pipeline management, follow-up logic and reporting for different commercial teams.",
    },
    adaptation: {
      no: "Grunnmodellen kan tilpasses andre selskaper, bransjer og salgsmodeller — uten at dette fremstilles som allerede implementert i kundevirksomheter.",
      en: "The core model can be adapted for other organisations, industries and sales models — without presenting this as already implemented in customer organisations.",
    },
  },
  overviewImage: "/images/smb-salgsflyt-sjekken-hjemmeside.png?v=20260717",
  detailHeroImage: "/images/salgsflyt-sjekken-hero.png?v=20260720",
  detailHeroObjectPosition: "center",
  needsNewDetailHero: false,
  altText: {
    no: "SMB Salgsflyt-sjekken – interaktiv diagnose og AI-rapportering",
    en: "SMB Sales Flow Check – interactive diagnosis and AI reporting",
  },
  overviewImageFormat: "standard_1x3",
  detailHeroMissing: false,
  detailDestination: "/salgsflyt-sjekken",
  liveSolutionUrl: SMB_SALGSFLYT_APP_URL,
  seo: {
    title: {
      no: "SMB Salgsflyt-sjekken | Marius Ottesen",
      en: "SMB Sales Flow Check | Marius Ottesen",
    },
    description: {
      no: "Tilgangsstyrt salgsdiagnose med ti kommersielle dimensjoner, AI-analyse, PDF-kunderapport og adminkonsoll — utviklet for avgrenset testing og videreutvikling.",
      en: "Access-controlled sales diagnosis with ten commercial dimensions, AI analysis, PDF customer report and admin console — developed for limited testing and further development.",
    },
    ogImage: "/images/salgsflyt-sjekken-hero.png?v=20260720",
    canonicalPath: "/salgsflyt-sjekken",
  },
  strategicPlatformSlug: "salgsflyt-sjekken",
};
