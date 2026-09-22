import type { Metadata } from "next";
import { SITE } from "./locale-routes";
import { ARTICLES_HUB_PAIR } from "./faginnlegg-locale-routes";

const HUB_META = {
  no: {
    title: "Faginnlegg | Innsikt & faglig fordypning — Marius Ottesen",
    description:
      "Faginnlegg om kommersiell ledelse, transformasjon og praktisk AI — og et bokprosjekt under utvikling. Strategisk ledelse, gjennomføring og faglig formidling.",
    ogImageAlt: "Innsikt og faglig fordypning — Marius Ottesen",
  },
  en: {
    title: "Articles | Insight & professional depth — Marius Ottesen",
    description:
      "Articles on commercial leadership, transformation and practical AI — plus an evolving book project. Strategic leadership, execution and professional communication.",
    ogImageAlt: "Insight and professional depth — Marius Ottesen",
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
