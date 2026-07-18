import { predictiveSalesCoachPlatform } from "../data/strategic-platform-projects/predictive-sales-coach-platform";
import {
  PSC_CANONICAL_URL,
  PSC_FULL_TITLE,
  PSC_OG_IMAGE,
  PSC_SEO_DESCRIPTION,
  PSC_VERSION,
} from "./psc-brand";

const SITE = "https://www.mariusottesen.no";

/** JSON-LD for /psc — WebApplication + FAQPage, basert på synlig innhold. */
export function buildPscStructuredData(lang: "no" | "en" = "no") {
  const faq = predictiveSalesCoachPlatform.detail.faq;
  const description = `${PSC_SEO_DESCRIPTION[lang]} Tilgangsstyrt lukket pilot for trenings-, simulerings- og evalueringsbruk.`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebApplication",
      name: PSC_FULL_TITLE[lang],
      alternateName: "PSC",
      description,
      url: PSC_CANONICAL_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      softwareVersion: PSC_VERSION,
      inLanguage: lang === "no" ? "nb-NO" : "en",
      image: PSC_OG_IMAGE,
      dateModified: "2026-06-19",
      creator: {
        "@type": "Person",
        name: "Marius Ottesen",
        url: SITE,
      },
    },
  ];

  if (faq?.items.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.question[lang],
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer[lang],
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
