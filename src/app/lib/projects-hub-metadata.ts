import type { Metadata } from "next";
import { HREFLANG_EN, HREFLANG_NB, SITE } from "./locale-routes";
import { PROJECTS_HUB_PAIR } from "./project-locale-routes";

const HUB_META = {
  no: {
    title: "AI, prosjekter & utvikling | Marius Ottesen",
    description:
      "Kommersielle initiativer, AI-løsninger, digitale plattformer, implementeringscase og faglige samarbeid innen kommersiell ledelse, salgsutvikling, transformasjon, arbeidsflyt og praktisk AI — inkludert Row Solutions og AI-laget.",
    ogImageAlt: "AI, prosjekter og utvikling — Marius Ottesen",
  },
  en: {
    title: "AI, Projects & Development | Marius Ottesen",
    description:
      "Commercial initiatives, AI solutions, digital platforms, implementation cases and professional collaborations in commercial leadership, sales development, transformation, workflow and practical AI — including Row Solutions and AI-laget.",
    ogImageAlt: "AI, projects and development — Marius Ottesen",
  },
} as const;

const OG_IMAGE = `${SITE}/images/prosjekt-bilde.jpg`;

export function buildProjectsHubMetadata(lang: "no" | "en"): Metadata {
  const meta = HUB_META[lang];
  const canonical = `${SITE}${lang === "en" ? PROJECTS_HUB_PAIR.en : PROJECTS_HUB_PAIR.no}`;
  const noUrl = `${SITE}${PROJECTS_HUB_PAIR.no}`;
  const enUrl = `${SITE}${PROJECTS_HUB_PAIR.en}`;

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(SITE),
    alternates: {
      canonical,
      languages: {
        [HREFLANG_NB]: noUrl,
        [HREFLANG_EN]: enUrl,
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
