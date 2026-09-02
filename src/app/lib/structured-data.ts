import { SITE } from "./locale-routes";

export function getStructuredDataGraph(lang: "no" | "en") {
  if (lang === "en") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          name: "Marius Ottesen",
          url: `${SITE}/en`,
          jobTitle: "Commercial leader",
          description:
            "Commercial leader with experience in sales leadership, growth, P&L accountability, team development, transformation and practical AI — including operational leadership experience from sales, operations and execution.",
          image: `${SITE}/images/profil.jpg`,
          sameAs: ["https://www.linkedin.com/in/mariusottesen/"],
          worksFor: {
            "@type": "Organization",
            name: "Marius Ottesen Consulting",
            url: SITE,
            taxID: "937102801",
          },
          knowsAbout: [
            "Commercial Leadership",
            "Sales Management",
            "Sales Director",
            "International B2B sales",
            "Digital Transformation",
            "Artificial Intelligence",
            "Business Development",
            "Team Development",
            "B2B Markets",
          ],
          alumniOf: [
            { "@type": "EducationalOrganization", name: "BI Norwegian Business School" },
            { "@type": "EducationalOrganization", name: "University of Utah" },
          ],
        },
        {
          "@type": "Organization",
          name: "Marius Ottesen Consulting",
          url: SITE,
          logo: `${SITE}/images/ikon.png`,
          taxID: "937102801",
          founder: { "@type": "Person", name: "Marius Ottesen" },
          description:
            "Professional platform bringing together experience, methods and portfolio projects in commercial development, AI, workflow and leadership support.",
          areaServed: "NO",
        },
      ],
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Marius Ottesen",
        url: SITE,
        jobTitle: "Kommersiell leder",
        description:
          "Kommersiell leder med erfaring fra salgsledelse, vekst, P/L-ansvar, teamutvikling, transformasjon og praktisk AI — inkludert operasjonell ledererfaring fra salg, drift og gjennomføring.",
        image: `${SITE}/images/profil.jpg`,
        sameAs: ["https://www.linkedin.com/in/mariusottesen/"],
        worksFor: {
          "@type": "Organization",
          name: "Marius Ottesen Consulting",
          url: SITE,
          taxID: "937102801",
        },
        knowsAbout: [
          "Commercial Leadership",
          "Sales Management",
          "International B2B sales",
          "Digital Transformation",
          "Artificial Intelligence",
          "Business Development",
          "Team Development",
          "B2B Markets",
        ],
        alumniOf: [
          { "@type": "EducationalOrganization", name: "BI Norwegian Business School" },
          { "@type": "EducationalOrganization", name: "University of Utah" },
        ],
      },
      {
        "@type": "Organization",
        name: "Marius Ottesen Consulting",
        url: SITE,
        logo: `${SITE}/images/ikon.png`,
        taxID: "937102801",
        founder: { "@type": "Person", name: "Marius Ottesen" },
        description:
          "Faglig plattform som samler erfaring, metoder og porteføljeprosjekter innen kommersiell utvikling, AI, arbeidsflyt og lederstøtte.",
        areaServed: "NO",
      },
    ],
  };
}
