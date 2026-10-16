import type { Metadata } from "next";
import { HREFLANG_EN, HREFLANG_NB, SITE } from "./locale-routes";
import { PRIVACY_ROUTE } from "../data/privacy-content";

export function buildPrivacyPageMetadata(lang: "no" | "en"): Metadata {
  const title =
    lang === "en"
      ? "Privacy policy | Marius Ottesen Consulting"
      : "Personvernerklæring | Marius Ottesen Consulting";
  const description =
    lang === "en"
      ? "Privacy policy for mariusottesen.no: contact form, optional Google Analytics 4, cookies, your rights and how to change choices."
      : "Personvernerklæring for mariusottesen.no: kontaktskjema, valgfri Google Analytics 4, informasjonskapsler, rettigheter og cookievalg.";

  const canonical = `${SITE}${lang === "en" ? PRIVACY_ROUTE.en : PRIVACY_ROUTE.no}`;
  const noUrl = `${SITE}${PRIVACY_ROUTE.no}`;
  const enUrl = `${SITE}${PRIVACY_ROUTE.en}`;

  return {
    title,
    description,
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
      title,
      description,
      url: canonical,
      type: "website",
      siteName: "Marius Ottesen",
      locale: lang === "en" ? "en_GB" : "nb_NO",
    },
    robots: { index: true, follow: true },
  };
}
