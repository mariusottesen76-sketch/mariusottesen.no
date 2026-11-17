import type { Metadata } from "next";
import { BOK_OMSLAG, BOK_ROUTE, BOK_TITTEL } from "../data/bok-prosjekt-innhold";
import { HREFLANG_EN, HREFLANG_NB, SITE } from "./locale-routes";
import { PERSON_SCHEMA_ID } from "./structured-data";

const META = {
  no: {
    title: "VerdisKIftet | Fagbok om ledelse, endring og AI | Marius Ottesen",
    description:
      "VerdisKIftet er en fagbok av Marius Ottesen om ledelse, strategi, mennesker, gjennomføring og AI. Manus er ferdigskrevet og til faglig testlesing.",
    ogImageAlt:
      "Foreløpig forsideomslag til VerdisKIftet – Fra innsikt til nye fortrinn, fagbok skrevet av Marius Ottesen.",
    bookName: `${BOK_TITTEL} – Fra innsikt til nye fortrinn`,
    bookAbstract:
      "Fagbok om hvordan ledere omsetter innsikt til strategiske valg, mobiliserer mennesker og skaper varige resultater. Manuskriptet (17 kapitler, syv deler) er ferdigskrevet og til faglig testlesing — ikke publisert.",
  },
  en: {
    title: "VerdisKIftet | Book on leadership, change and AI | Marius Ottesen",
    description:
      "VerdisKIftet is a professional book by Marius Ottesen on leadership, strategy, people, execution and AI. The manuscript is completed and undergoing expert review.",
    ogImageAlt:
      "Provisional front cover for VerdisKIftet – From insight to new advantages, professional book written by Marius Ottesen.",
    bookName: `${BOK_TITTEL} – From insight to new advantages`,
    bookAbstract:
      "A professional book on how leaders turn insight into strategic choices, mobilise people and create lasting results. The manuscript (17 chapters, seven parts) is completed and undergoing expert review — not published.",
  },
} as const;

const OG_IMAGE = `${SITE}${BOK_OMSLAG.forside.src}`;
const OG_IMAGE_WIDTH = 682;
const OG_IMAGE_HEIGHT = 1024;

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
      images: [{ url: OG_IMAGE, alt: meta.ogImageAlt }],
    },
  };
}

export function getBokBookJsonLd(lang: "no" | "en") {
  const meta = META[lang];
  const pageUrl = `${SITE}${lang === "en" ? BOK_ROUTE.en : BOK_ROUTE.no}`;

  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `${pageUrl}#book`,
    name: meta.bookName,
    author: {
      "@type": "Person",
      "@id": PERSON_SCHEMA_ID,
      name: "Marius Ottesen",
      url: lang === "en" ? `${SITE}/en` : SITE,
    },
    url: pageUrl,
    inLanguage: lang === "en" ? "en" : "nb",
    image: OG_IMAGE,
    description: meta.bookAbstract,
    abstract: meta.bookAbstract,
    genre: lang === "en" ? "Professional literature" : "Faglitteratur",
    creativeWorkStatus: "InProgress",
    workExample: {
      "@type": "Book",
      bookEdition: lang === "en" ? "Manuscript — expert review" : "Manuskript — faglig testlesing",
      inLanguage: lang === "en" ? "en" : "nb",
    },
  };
}

export function serializeBokBookJsonLd(lang: "no" | "en"): string {
  return JSON.stringify(getBokBookJsonLd(lang)).replace(/</g, "\\u003c");
}