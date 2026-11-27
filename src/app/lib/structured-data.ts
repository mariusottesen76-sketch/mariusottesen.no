import { BOK_OMSLAG, BOK_ROUTE } from "../data/bok-prosjekt-innhold";
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

function rowSolutionsOrgNode(lang: "no" | "en") {
  return {
    "@type": "Organization" as const,
    name: "Row Solutions",
    url: ROW_SOLUTIONS_URL,
    areaServed: "NO",
    description:
      lang === "en"
        ? "Commercial collaboration with Marius Ottesen, Thomas Holm and Gunnar Gundersen for SMEs in Norway — visibility, B2B sales, customer follow-up, sales development and practical AI (via rowsolutions.no)."
        : "Kommersielt samarbeid med Marius Ottesen, Thomas Holm og Gunnar Gundersen for SMB i Norge — synlighet, B2B-salg, kundeoppfølging, salgsutvikling og praktisk AI (via rowsolutions.no).",
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
        ? "Marius Ottesen Consulting — advisory and leadership experience for B2B and SME organisations in Norway: sales development, sales coaching, CRM and sales processes, commercial leadership, transformation and practical AI."
        : "Marius Ottesen Consulting — rådgivnings- og ledererfaring for B2B- og SMB-virksomheter i Norge: salgsutvikling, salgscoaching, CRM og salgsprosesser, kommersiell ledelse, transformasjon og praktisk AI.",
    areaServed: "NO",
    additionalType: "https://schema.org/ProfessionalService",
    serviceType:
      lang === "en"
        ? [
            "Commercial leadership advisory",
            "B2B sales development",
            "Sales coaching",
            "Sales leadership",
            "CRM and sales process improvement",
            "SME commercial development",
            "Practical AI in sales and operations",
          ]
        : [
            "Kommersiell ledelsesrådgivning",
            "B2B-salgsutvikling",
            "Salgscoaching",
            "Salgsledelse",
            "CRM og forbedring av salgsprosesser",
            "Kommersiell utvikling for SMB",
            "Praktisk AI i salg og drift",
          ],
  };
}

function verdisKiftetBookNode(lang: "no" | "en") {
  const bookUrl = `${SITE}${lang === "en" ? BOK_ROUTE.en : BOK_ROUTE.no}`;
  const bookName =
    lang === "en"
      ? "VerdisKIftet – From insight to new advantages"
      : "VerdisKIftet – Fra innsikt til nye fortrinn";
  return {
    "@type": "Book" as const,
    "@id": `${bookUrl}#book`,
    name: bookName,
    url: bookUrl,
    image: `${SITE}${BOK_OMSLAG.forside.src}`,
    author: { "@id": PERSON_ID },
    inLanguage: lang === "en" ? "en" : "nb",
    creativeWorkStatus: "InProgress" as const,
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
    affiliation: rowSolutionsOrgNode(lang),
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
      "B2B sales development",
      "Sales coaching",
      "Sales process improvement",
      "CRM",
      "Digital Transformation",
      "Artificial Intelligence",
      "Generative AI",
      "Practical AI implementation",
      "Business Development",
      "Team Development",
      "B2B Markets",
      "VerdisKIftet",
    ],
    workExample: verdisKiftetBookNode(lang),
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
