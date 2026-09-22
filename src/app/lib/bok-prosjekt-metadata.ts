import type { Metadata } from "next";
import { BOK_ROUTE } from "../data/bok-prosjekt-innhold";
import { SITE } from "./locale-routes";

const META = {
  no: {
    title: "Bokprosjekt | Ledelse, kommersiell utvikling og AI | Marius Ottesen",
    description:
      "Marius Ottesen utvikler 100+ faginnlegg, masterarbeid, ledererfaring og praktiske AI-case til en fagbok om ledelse, gjennomføring, transformasjon og praktisk AI.",
    ogImageAlt: "Bokprosjekt — Marius Ottesen",
  },
  en: {
    title: "Book project | Leadership, commercial development and AI | Marius Ottesen",
    description:
      "Marius Ottesen is developing 100+ articles, master’s work, leadership experience and practical AI cases into a professional book on leadership, execution, transformation and practical AI.",
    ogImageAlt: "Book project — Marius Ottesen",
  },
} as const;

const OG_IMAGE = `${SITE}/images/blogg.jpg`;

export function buildBokProsjektMetadata(lang: "no" | "en"): Metadata {
  const meta = META[lang];
  const canonical = `${SITE}${lang === "en" ? BOK_ROUTE.en : BOK_ROUTE.no}`;
  const noUrl = `${SITE}${BOK_ROUTE.no}`;
  const enUrl = `${SITE}${BOK_ROUTE.en}`;

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
