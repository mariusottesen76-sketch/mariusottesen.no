import {
  AI_DISCOVERY_CHECK_URL,
  AI_DISCOVERY_HERO_IMAGE,
  AI_DISCOVERY_OVERVIEW_IMAGE,
  AI_DISCOVERY_PARTNER_LABEL,
} from "../../../lib/ai-discovery-brand";
import type { ProjectV2Record } from "../types";
import { relevantVidereLinksForSlug } from "../relevant-videre-catalog";

export const aiDiscoveryV2: ProjectV2Record = {
  id: "ai-discovery-2026-11",
  slug: "ai-discovery",
  category: "app_prototype",
  layoutVersion: "project_v2",
  accessMode: "public",
  detailLevel: "full",
  publishedAt: "2026-11-20",
  updatedAt: "2026-11-20",
  date: "2026-11-20",
  displayDate: { no: "20.11.26", en: "20.11.26" },
  title: {
    no: "AI Discovery – synlighet i AI-drevne kundereiser",
    en: "AI Discovery – visibility in AI-driven customer journeys",
  },
  subtitle: {
    no: "Hvordan blir virksomheten funnet og forstått av AI?",
    en: "How is the business found and understood by AI?",
  },
  statusLabel: AI_DISCOVERY_PARTNER_LABEL,
  maturityLevel: {
    no: "Publisert verktøy og metode",
    en: "Published tool and method",
  },
  overviewMetadataLine: AI_DISCOVERY_PARTNER_LABEL,
  overviewIntroduction: {
    no: "Undersøker hvordan virksomheter blir forstått og funnet i ChatGPT, Claude og Perplexity — både når kunden kjenner navnet og når AI må finne aktuelle leverandører. Analyseverktøy og metode utviklet av Thomas Holm, tilbudt gjennom Row Solutions.",
    en: "Explores how businesses are understood and found in ChatGPT, Claude and Perplexity — both when the customer knows the name and when AI must find relevant providers. Analysis tool and method developed by Thomas Holm, offered through Row Solutions.",
  },
  overview: {
    what: {
      no: "AI Discovery er en analysemetode og et verktøysett for å undersøke hvordan virksomheter fremstår i AI-drevne research- og vurderingssituasjoner — ikke et produkt utviklet eller eid av Marius Ottesen Consulting.",
      en: "AI Discovery is an analysis method and toolkit for exploring how businesses appear in AI-driven research and evaluation situations — not a product developed or owned by Marius Ottesen Consulting.",
    },
    challenge: {
      no: "Kundereisen kan starte i ChatGPT, Claude eller Perplexity før kunden besøker nettsiden. Virksomheten kan da bli oversett, misforstått eller vurdert på grunnlag av kilder den ikke kontrollerer.",
      en: "The customer journey may start in ChatGPT, Claude or Perplexity before the customer visits the website. The business may then be overlooked, misunderstood or assessed on the basis of sources it does not control.",
    },
    built: {
      no: "Thomas Holm har utviklet AI Discovery Check (aidiscovery.no), den bredere AI Discovery-metoden og The AI Discovery Playbook — tilbudt gjennom Row Solutions.",
      en: "Thomas Holm has developed AI Discovery Check (aidiscovery.no), the broader AI Discovery method and The AI Discovery Playbook — offered through Row Solutions.",
    },
    how: {
      no: "AI Discovery Check kjører definerte spørsmål i tre AI-tjenester, sammenligner svar med og uten virksomhetsnavn, og viser observasjoner — uten universell synlighetsscore eller automatisk korrekthetsvurdering.",
      en: "AI Discovery Check runs defined questions in three AI services, compares answers with and without the business name, and shows observations — without a universal visibility score or automatic correctness assessment.",
    },
    relevance: {
      no: "Relevant for ledere, markedsførere og kommersielle team som vil forstå synlighet og forståelse før direkte kontakt — og prioritere innhold, struktur og kilder videre.",
      en: "Relevant for leaders, marketers and commercial teams who want to understand visibility and perception before direct contact — and prioritise content, structure and sources further.",
    },
    status: {
      no: "Publisert verktøy og metode · live på aidiscovery.no. AI Discovery kan ikke garantere synlighet eller anbefalinger i AI-tjenester, og viser observasjoner fra definerte undersøkelser — ikke dokumentert kundeeffekt.",
      en: "Published tool and method · live at aidiscovery.no. AI Discovery cannot guarantee visibility or recommendations in AI services, and shows observations from defined investigations — not documented customer effect.",
    },
    development: {
      no: "Videre arbeid kan omfatte gjentatt måling, Playbook-oppdateringer, rådgivning gjennom Row Solutions og oppfølgingstiltak — avhengig av Thomas Holm og Row Solutions sine prioriteringer.",
      en: "Further work may include repeated measurement, Playbook updates, advisory work through Row Solutions and follow-up measures — depending on Thomas Holm and Row Solutions' priorities.",
    },
    adaptation: {
      no: "Metoden kan brukes i kartlegging og tjenesteleveranser for SMB og kunnskapsbedrifter gjennom Row Solutions — ikke som MOC-produkt eller mal kopiert uten faglig ansvarlig.",
      en: "The method can be used in mapping and service delivery for SMEs and knowledge businesses through Row Solutions — not as an MOC product or template copied without the professional lead.",
    },
  },
  overviewImage: AI_DISCOVERY_OVERVIEW_IMAGE,
  detailHeroImage: AI_DISCOVERY_HERO_IMAGE,
  detailHeroObjectPosition: "center",
  overviewImageMissing: false,
  detailHeroMissing: false,
  needsNewOverviewImage: false,
  needsNewDetailHero: false,
  altText: {
    no: "AI Discovery – synlighet i AI-drevne kundereiser",
    en: "AI Discovery – visibility in AI-driven customer journeys",
  },
  detailHeroAlt: {
    no: "AI Discovery – analyse av hvordan virksomheter fremstår i ChatGPT, Claude og Perplexity",
    en: "AI Discovery – analysis of how businesses appear in ChatGPT, Claude and Perplexity",
  },
  overviewImageFormat: "standard_1x3",
  detailDestination: "/ai-discovery",
  liveSolutionUrl: AI_DISCOVERY_CHECK_URL,
  ctaLabels: {
    overviewPrimary: { no: "Utforsk AI Discovery", en: "Explore AI Discovery" },
    overviewSecondary: { no: "Prøv AI Discovery Check", en: "Try AI Discovery Check" },
    detailPrimary: { no: "Prøv AI Discovery Check", en: "Try AI Discovery Check" },
    detailSecondary: {
      no: "Se AI Discovery hos Row Solutions",
      en: "See AI Discovery at Row Solutions",
    },
  },
  seo: {
    title: {
      no: "AI Discovery – synlighet i AI-kundereiser | Marius Ottesen",
      en: "AI Discovery – visibility in AI customer journeys | Marius Ottesen",
    },
    description: {
      no: "Partnerløsning utviklet av Thomas Holm og tilbudt via Row Solutions. Undersøker hvordan virksomheter blir funnet og forstått i ChatGPT, Claude og Perplexity.",
      en: "Partner solution developed by Thomas Holm and offered via Row Solutions. Explores how businesses are found and understood in ChatGPT, Claude and Perplexity.",
    },
    ogImage: AI_DISCOVERY_HERO_IMAGE,
    canonicalPath: "/ai-discovery",
  },
  strategicPlatformSlug: "ai-discovery",
  fagPerspektivLinks: relevantVidereLinksForSlug("ai-discovery"),
};