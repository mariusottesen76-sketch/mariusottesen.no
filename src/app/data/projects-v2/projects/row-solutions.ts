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
    no: "Kommersielle initiativer · Publisert nettside · Tjenester og metoder",
    en: "Commercial Initiatives · Published website · Services and methods",
  },
  statusLabel: {
    no: "Publisert og live",
    en: "Published and live",
  },
  overviewIntroduction: {
    no: "Row Solutions er et kommersielt samarbeid mellom Marius Ottesen og Thomas Holm, rettet mot små og mellomstore virksomheter. Vi kombinerer kommersiell erfaring, rådgivning og praktisk teknologi for å forbedre sammenhengen mellom synlighet, salg, kundedialog og oppfølging.\n\nArbeidet omfatter utvikling av strategi, tjenester, metoder og verktøy, samt den publiserte nettsiden rowsolutions.no.",
    en: "Row Solutions is a commercial collaboration between Marius Ottesen and Thomas Holm, aimed at small and medium-sized organisations. We combine commercial experience, advisory work and practical technology to improve the connection between visibility, sales, customer dialogue and follow-up.\n\nThe work includes development of strategy, services, methods and tools, as well as the published website rowsolutions.no.",
  },
  overview: {
    what: {
      no: "Kommersielt samarbeid mellom Marius Ottesen og Thomas Holm for SMB — strategi, tjenester, metoder, verktøy, salg og kundedialog, med rowsolutions.no som publisert digital plattform.",
      en: "Commercial collaboration between Marius Ottesen and Thomas Holm for SMEs — strategy, services, methods, tools, sales and customer dialogue, with rowsolutions.no as the published digital platform.",
    },
    challenge: {
      no: "Utfordringen er ikke bare å bygge en nettside, men å gjøre et bredt kommersielt tilbud forståelig for SMB-ledere. Virksomheter opplever friksjon mellom synlighet, leadgenerering, CRM, salg, kundedialog og oppfølging — samtidig som et rådgivningsmiljø som kombinerer strategi, salg, transformasjon og AI raskt kan fremstå for bredt uten tydelig struktur.",
      en: "The challenge is not just to build a website, but to make a broad commercial offering understandable for SMB leaders. Organisations experience friction between visibility, lead generation, CRM, sales, customer dialogue and follow-up — while an advisory environment combining strategy, sales, transformation and AI can quickly appear too broad without clear structure.",
    },
    built: {
      no: "Arbeidet har omfattet kommersiell posisjonering, målgruppeforståelse, tjenestestruktur, informasjonsarkitektur, kundereise og CTA-logikk — og publisering av rowsolutions.no på norsk og engelsk med Next.js i Production, responsivt design og AI-assistert utviklingsarbeidsflyt i Cursor.",
      en: "The work has included commercial positioning, audience understanding, service structure, information architecture, customer journey and CTA logic — and publishing rowsolutions.no in Norwegian and English with Next.js in production, responsive design and an AI-assisted development workflow in Cursor.",
    },
    how: {
      no: "rowsolutions.no leder fra overordnet forståelse av Row Solutions til relevante tjenester — inkludert AI Discovery — faglig innsikt, prosjekter og kontakt. Arbeidsprosessen bak løsningen følger forretningsproblem → posisjonering → informasjonsarkitektur → live løsning → evaluering → forbedring.",
      en: "rowsolutions.no leads from an overall understanding of Row Solutions to relevant services — including AI Discovery — professional insight, projects and contact. The process behind the solution follows business problem → positioning → information architecture → live solution → evaluation → improvement.",
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
      no: "Row Solutions | Marius Ottesen",
      en: "Row Solutions | Marius Ottesen",
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
