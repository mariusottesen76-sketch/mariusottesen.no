import type { Metadata } from "next";
import { SITE } from "./locale-routes";
import { PROJECTS_HUB_PAIR } from "./project-locale-routes";

const HUB_META = {
  no: {
    title: "AI-prosjekter og faglig utvikling | Marius Ottesen",
    description:
      "Egenutviklede AI-prosjekter, apper, plattformer, demonstratorer og casearbeid innen kommersiell ledelse, salgsutvikling, arbeidsflyt, transformasjon, beslutningsstøtte og praktisk AI — med operasjonell erfaring fra salg, drift og gjennomføring.",
    ogImageAlt: "AI-prosjekter og utvikling — Marius Ottesen",
  },
  en: {
    title: "AI Projects and professional development | Marius Ottesen",
    description:
      "Custom AI projects, apps, platforms, demonstrators and case work in commercial leadership, sales development, workflow, transformation, decision support and practical AI — with operational experience from sales, operations and execution.",
    ogImageAlt: "AI projects and development — Marius Ottesen",
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
