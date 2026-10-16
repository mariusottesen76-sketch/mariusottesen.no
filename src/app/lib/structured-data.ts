import { SITE } from "./locale-routes";

export const PERSON_SCHEMA_ID = `${SITE}/#person`;
const PERSON_ID = PERSON_SCHEMA_ID;
const CONSULTING_ID = `${SITE}/#consulting`;
const WEBSITE_ID = `${SITE}/#website`;
const ROW_SOLUTIONS_URL = "https://rowsolutions.no/";
const BRREG_ENTITY_URL = "https://virksomhet.brreg.no/nb/oppslag/enheter/937102801";

const CONTACT_EMAIL = "marius.ottesen.76@gmail.com";
const CONTACT_PHONE_E164 = "+4747012005";

type StructuredDataOptions = {
  includeProfilePage?: boolean;
};

function rowSolutionsOrgNode() {
  return {
    "@type": "Organization" as const,
    name: "Row Solutions",
    url: ROW_SOLUTIONS_URL,
  };
}

function consultingOrgNode(lang: "no" | "en") {
  return {
    "@type": "Organization" as const,
    "@id": CONSULTING_ID,
    name: "Marius Ottesen Consulting",
    legalName: "MARIUS OTTESEN CONSULTING",
    url: SITE,
    logo: `${SITE}/images/ikon.png`,
    taxID: "937102801",
    founder: { "@id": PERSON_ID },
    sameAs: [BRREG_ENTITY_URL],
    description:
      lang === "en"
        ? "Professional platform bringing together experience, methods and portfolio projects in commercial development, AI, workflow and leadership support."
        : "Faglig plattform som samler erfaring, metoder og porteføljeprosjekter innen kommersiell utvikling, AI, arbeidsflyt og lederstøtte.",
    areaServed: "NO",
    additionalType: "https://schema.org/ProfessionalService",
  };
}

function personNode(lang: "no" | "en") {
  const homeUrl = lang === "en" ? `${SITE}/en` : SITE;
  return {
    "@type": "Person" as const,
    "@id": PERSON_ID,
    name: "Marius Ottesen",
    url: homeUrl,
    jobTitle: lang === "en" ? "Commercial leader and AI strategist" : "Kommersiell leder og AI-strateg",
    description:
      lang === "en"
        ? "Commercial leader with experience in sales leadership, growth, P&L accountability, team development, transformation and practical AI, including operational leadership experience from sales, operations and execution."
        : "Kommersiell leder med erfaring fra salgsledelse, vekst, P/L-ansvar, teamutvikling, transformasjon og praktisk AI, inkludert operasjonell ledererfaring fra salg, drift og gjennomføring.",
    image: `${SITE}/images/profil.jpg`,
    sameAs: ["https://www.linkedin.com/in/mariusottesen/"],
    worksFor: { "@id": CONSULTING_ID },
    affiliation: rowSolutionsOrgNode(),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "professional",
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE_E164,
      availableLanguage: ["Norwegian", "English"],
    },
    knowsAbout: [
      "Commercial Leadership",
      "Sales Management",
      "Sales Director",
      "International B2B sales",
      "Digital Transformation",
      "Artificial Intelligence",
      "Generative AI",
      "Practical AI implementation",
      "Business Development",
      "Team Development",
      "B2B Markets",
    ],
    alumniOf: [
      { "@type": "EducationalOrganization", name: "BI Norwegian Business School" },
      { "@type": "EducationalOrganization", name: "University of Utah" },
    ],
  };
}

function webSiteNode(lang: "no" | "en") {
  return {
    "@type": "WebSite" as const,
    "@id": WEBSITE_ID,
    url: SITE,
    name: "Marius Ottesen",
    inLanguage: lang === "en" ? ["en", "nb-NO"] : ["nb-NO", "en"],
    publisher: { "@id": PERSON_ID },
  };
}

function profilePageNode(lang: "no" | "en") {
  const pageUrl = lang === "en" ? `${SITE}/en` : SITE;
  return {
    "@type": ["WebPage", "ProfilePage"] as const,
    "@id": `${pageUrl}#profilepage`,
    url: pageUrl,
    name: lang === "en" ? "Marius Ottesen — Profile" : "Marius Ottesen — Profil",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    inLanguage: lang === "en" ? "en" : "nb-NO",
    mainEntity: { "@id": PERSON_ID },
  };
}

export function getStructuredDataGraph(lang: "no" | "en", options: StructuredDataOptions = {}) {
  const graph: Record<string, unknown>[] = [
    personNode(lang),
    consultingOrgNode(lang),
    webSiteNode(lang),
  ];

  if (options.includeProfilePage) {
    graph.push(profilePageNode(lang));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
