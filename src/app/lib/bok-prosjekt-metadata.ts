import type { Metadata } from "next";
import { BOK_ROUTE } from "../data/bok-prosjekt-innhold";
import { SITE } from "./locale-routes";

const META = {
  no: {
    title: "Bokprosjekt | Læring, ledelse og gjennomføring | Marius Ottesen",
    description:
      "Én sammenhengende fagbok under utvikling — bygget på ledererfaring, faginnlegg, masterarbeid og praktisk utviklingsarbeid. 17 kapitler i syv deler.",
    ogImageAlt: "Bokprosjekt — Marius Ottesen",
  },
  en: {
    title: "Book project | Learning, leadership and execution | Marius Ottesen",
    description:
      "One coherent professional book in development — built on leadership experience, articles, master’s work and practical development. 17 chapters in seven parts.",
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
