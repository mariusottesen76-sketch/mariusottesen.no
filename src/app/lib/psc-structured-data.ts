import { predictiveSalesCoachPlatform } from "../data/strategic-platform-projects/predictive-sales-coach-platform";
import { getProjectV2ById } from "../data/projects-v2/registry";
import {
  PSC_CANONICAL_URL,
  PSC_FULL_TITLE,
  PSC_MATURITY_LABEL,
  PSC_OG_IMAGE,
  PSC_SEO_DESCRIPTION,
  PSC_VERSION,
} from "./psc-brand";
import { projectSchemaDates } from "./project-overview-metadata";

import { projectEnPath } from "./project-locale-routes";

const SITE = "https://www.mariusottesen.no";

/** JSON-LD for /psc and /en/psc — WebApplication + FAQPage, basert på synlig innhold. */
export function buildPscStructuredData(lang: "no" | "en" = "no") {
  const faq = predictiveSalesCoachPlatform.detail.faq;
  const description = `${PSC_SEO_DESCRIPTION[lang]} ${PSC_MATURITY_LABEL[lang]}.`;
  const pscProject = getProjectV2ById("predictive-sales-coach-2026");
  const { datePublished, dateModified } = pscProject
    ? projectSchemaDates(pscProject)
    : { datePublished: "2026-02-26", dateModified: "2026-06-17" };
  const url = lang === "en" && pscProject ? `${SITE}${projectEnPath(pscProject)}` : PSC_CANONICAL_URL;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebApplication",
      name: PSC_FULL_TITLE[lang],
      alternateName: "PSC",
      description,
      url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      softwareVersion: PSC_VERSION,
      inLanguage: lang === "no" ? "nb-NO" : "en",
      image: PSC_OG_IMAGE,
      datePublished,
      ...(dateModified ? { dateModified } : {}),
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
