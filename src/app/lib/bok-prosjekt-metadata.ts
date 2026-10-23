import type { Metadata } from "next";
import { BOK_OMSLAG, BOK_ROUTE } from "../data/bok-prosjekt-innhold";
import { HREFLANG_EN, HREFLANG_NB, SITE } from "./locale-routes";

const META = {
  no: {
    title: "VerdisKIftet – Fra innsikt til nye fortrinn | Marius Ottesen",
    description:
      "VerdisKIftet er en fagbok under utvikling om ledelse, strategiske valg, mennesker, kundeverdi, kunstig intelligens og læring når spillereglene endres.",
    ogImageAlt: "Foreløpig omslag til fagboka VerdisKIftet – Fra innsikt til nye fortrinn, av Marius Ottesen.",
  },
  en: {
    title: "VerdisKIftet – From insight to new advantages | Marius Ottesen",
    description:
      "VerdisKIftet is a professional book in development on leadership, strategic choices, people, customer value, artificial intelligence and learning when the rules of the game change.",
    ogImageAlt: "Provisional cover for the book VerdisKIftet – From insight to new advantages, by Marius Ottesen.",
  },
} as const;

const OG_IMAGE = `${SITE}${BOK_OMSLAG.forside.src}`;
const OG_IMAGE_WIDTH = 600;
const OG_IMAGE_HEIGHT = 900;

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
      images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: meta.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
  };
}
