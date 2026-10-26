import { AI_READINESS_SCAN_APP_URL, AI_READINESS_SCAN_MATURITY_LABEL, AI_READINESS_SCAN_OVERVIEW_IMAGE } from "../../../lib/ai-readiness-scan-brand";
import type { ProjectV2Record } from "../types";
import { relevantVidereLinksForSlug } from "../relevant-videre-catalog";

export const aiReadinessScanV2: ProjectV2Record = {
  id: "ai-readiness-scan-2026-06",
  slug: "ai-readiness-scan",
  category: "app_prototype",
  layoutVersion: "project_v2",
  accessMode: "access_code",
  detailLevel: "full",
  publishedAt: "2026-06-29",
  date: "2026-05-22",
  displayDate: { no: "22.05.26", en: "22.05.26" },
  title: {
    no: "AI Readiness Scan: Kartlegging av AI-beredskap og gjennomføringsevne",
    en: "AI Readiness Scan: Mapping AI readiness and execution capability",
  },
  subtitle: {
    no: "Avklar forutsetninger og prioriteringer før større AI-investeringer",
    en: "Clarify prerequisites and priorities before major AI investments",
  },
  statusLabel: AI_READINESS_SCAN_MATURITY_LABEL,
  maturityLevel: AI_READINESS_SCAN_MATURITY_LABEL,
  overviewIntroduction: {
    no: "Hjelper ledelsen å vurdere om virksomheten er rustet til AI — og hva som bør styrkes før dere investerer bredt i verktøy, piloter eller transformasjon.",
    en: "Helps leadership assess whether the organisation is ready for AI — and what to strengthen before investing broadly in tools, pilots or transformation.",
  },
  overview: {
    what: {
      no: "Tilgangsstyrt kartlegging som samler svar om strategi, kompetanse, data, prosesser, styring og verdi — og gir en rapport ledelsen kan bruke i prioriteringsmøter.",
      en: "Access-controlled assessment that gathers answers on strategy, competence, data, processes, governance and value — and produces a report leadership can use in prioritisation meetings.",
    },
    challenge: {
      no: "Mange virksomheter ønsker å ta i bruk AI, men mangler felles bilde av nåsituasjonen og hva som bør komme først. Utfordringen er å skape struktur før man investerer i større initiativer.",
      en: "Many organisations want to adopt AI, but lack a shared picture of the current situation and what should come first. The challenge is to create structure before investing in larger initiatives.",
    },
    built: {
      no: "Tilgangsstyrt kartleggingsverktøy med kontekstspørsmål, 18 scored spørsmål på seks dimensjoner, valg av forbedringsområder, regelstyrt resultatrapport (åtte hoveddeler), sikker innlogging og administrativ oppfølging.",
      en: "Access-controlled mapping tool with context questions, 18 scored questions across six dimensions, improvement area selection, rule-based results report (eight main sections), secure login and administrative follow-up.",
    },
    how: {
      no: "Virksomheten får tilgang via kode eller innlogging. Deltakeren svarer på scored spørsmål, velger forbedringsområder og får en regelstyrt rapport — analysen er svarbasert, ikke generativ AI i sanntid.",
      en: "The organisation gains access via code or login. The participant answers scored questions, selects improvement areas and receives a rule-based report — analysis is response-driven, not generative AI in real time.",
    },
    relevance: {
      no: "Passer når ledelsen trenger felles bilde av modenhet og vil unngå dyre AI-tiltak uten forankring i data, kompetanse og styring.",
      en: "Suited when leadership needs a shared maturity picture and wants to avoid costly AI initiatives without grounding in data, competence and governance.",
    },
    status: {
      no: "Tilgangsstyrt kartleggingsverktøy · klar for avgrenset kundebruk. Resultatet er et grunnlag for dialog og prioritering, ikke en autoritativ vurdering av AI-modenhet.",
      en: "Access-controlled mapping tool · ready for limited customer use. The result is a basis for dialogue and prioritisation, not an authoritative assessment of AI maturity.",
    },
    development: {
      no: "Videre potensial inkluderer bransjespesifikke spørsmålssett, AI-generert oppsummering, modenhetsprofiler, prioriteringsmatriser og kobling mot implementeringsløp.",
      en: "Further potential includes industry-specific question sets, AI-generated summaries, maturity profiles, prioritisation matrices and links to implementation tracks.",
    },
    adaptation: {
      no: "Grunnmodellen kan tilpasses andre virksomheter, bransjer og modenhetsnivåer — som forberedelse før større AI-initiativer eller transformasjonsløp.",
      en: "The core model can be adapted for other organisations, industries and maturity levels — as preparation before larger AI initiatives or transformation tracks.",
    },
  },
  overviewImage: AI_READINESS_SCAN_OVERVIEW_IMAGE,
  detailHeroImage: "/images/ai-readiness-scan-hero.png?v=20260719",
  detailHeroObjectPosition: "center",
  needsNewDetailHero: false,
  altText: {
    no: "AI Readiness Scan – kartlegging av AI-beredskap og gjennomføringsevne",
    en: "AI Readiness Scan – mapping AI readiness and execution capability",
  },
  overviewImageFormat: "standard_1x3",
  detailHeroMissing: false,
  detailDestination: "/ai-readiness-scan",
  liveSolutionUrl: AI_READINESS_SCAN_APP_URL,
  seo: {
    title: {
      no: "AI Readiness Scan | Kartlegg AI-modenhet før investering | Marius Ottesen",
      en: "AI Readiness Scan | Map AI readiness before you invest | Marius Ottesen",
    },
    description: {
      no: "Ledelsesverktøy for å avklare AI-forutsetninger på tvers av strategi, data, kompetanse og styring — med rapport og tilgangskode for avgrenset kundebruk.",
      en: "Leadership tool to clarify AI prerequisites across strategy, data, competence and governance — with report and access code for limited customer use.",
    },
    ogImage: "/images/ai-readiness-scan-hero.png?v=20260719",
    canonicalPath: "/ai-readiness-scan",
  },
  strategicPlatformSlug: "ai-readiness-scan",
  fagPerspektivLinks: relevantVidereLinksForSlug("ai-readiness-scan"),
};
