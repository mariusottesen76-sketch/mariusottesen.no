import type { Metadata } from "next";
import { SITE } from "./locale-routes";
import { ARTICLES_HUB_PAIR } from "./faginnlegg-locale-routes";

const HUB_META = {
  no: {
    title: "Faginnlegg | Innsikt & Tankeledelse — Marius Ottesen",
    description:
      "I krysningen mellom teknologi, kommersiell strategi og menneskelig ledelse ligger nøkkelen til moderne vekst. Faginnlegg innen strategisk ledelse, transformasjon og AI.",
    ogImageAlt: "Innsikt og tankeledelse — Marius Ottesen",
  },
  en: {
    title: "Articles | Insight & Thought Leadership — Marius Ottesen",
    description:
      "At the intersection of technology, commercial strategy and human leadership lies the key to modern growth. Articles on strategic leadership, transformation and AI.",
    ogImageAlt: "Insight and thought leadership — Marius Ottesen",
  },
} as const;

const OG_IMAGE = `${SITE}/images/blogg.jpg`;

export function buildArticlesHubMetadata(lang: "no" | "en"): Metadata {
  const meta = HUB_META[lang];
  const canonical = `${SITE}${lang === "en" ? ARTICLES_HUB_PAIR.en : ARTICLES_HUB_PAIR.no}`;
  const noUrl = `${SITE}${ARTICLES_HUB_PAIR.no}`;
  const enUrl = `${SITE}${ARTICLES_HUB_PAIR.en}`;

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(SITE),
    alternates: {
      canonical,
      languages: {
        no: noUrl,
        en: enUrl,
        "x-default": noUrl,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      type: "website",
      siteName: "Marius Ottesen",
      locale: lang === "en" ? "en_GB" : "nb_NO",
      alternateLocale: lang === "en" ? ["nb_NO"] : ["en_GB"],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: meta.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
  };
}
