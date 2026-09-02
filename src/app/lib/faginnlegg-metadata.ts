import type { Metadata } from "next";
import type { FaginnleggInnlegg } from "./faginnlegg-types";
import { stripHtmlForMeta } from "./faginnlegg-innhold";
import { hasFullEnFaginnleggBody } from "./faginnlegg-en-audit";
import {
  ARTICLES_HUB_PAIR,
  faginnleggEnArticlePath,
  faginnleggNoArticlePath,
} from "./faginnlegg-locale-routes";

const SITE = "https://www.mariusottesen.no";

export function faginnleggCanonicalUrl(slug: string, lang: "no" | "en" = "no"): string {
  return lang === "en"
    ? `${SITE}${faginnleggEnArticlePath(slug)}`
    : `${SITE}${faginnleggNoArticlePath(slug)}`;
}

export function faginnleggOgImageUrl(innlegg: FaginnleggInnlegg): string {
  const src = innlegg.bildeUrlKort ?? innlegg.karusellBilder?.[0]?.src ?? innlegg.bildeUrl;
  if (!src || !src.trim()) return `${SITE}/images/profil.jpg`;
  if (src.startsWith("http")) return src;
  return `${SITE}${src.startsWith("/") ? src : `/${src}`}`;
}

export function buildFaginnleggArticleMetadata(
  innlegg: FaginnleggInnlegg,
  lang: "no" | "en" = "no"
): Metadata {
  const slug = innlegg.id;
  const titleText = stripHtmlForMeta(innlegg.tittel[lang]);
  const description = stripHtmlForMeta(
    innlegg.metaDescription?.[lang] ?? innlegg.teaser[lang]
  ).slice(0, 160);
  const noUrl = `${SITE}${faginnleggNoArticlePath(slug)}`;
  const hasEn = hasFullEnFaginnleggBody(slug, innlegg);
  const enUrl = hasEn ? `${SITE}${faginnleggEnArticlePath(slug)}` : null;
  const canonical = lang === "en" && enUrl ? enUrl : noUrl;
  const ogImage = faginnleggOgImageUrl(innlegg);
  const titleSuffix = lang === "en" ? "Articles" : "Faginnlegg";

  return {
    title: `${titleText} | ${titleSuffix} — Marius Ottesen`,
    description,
    metadataBase: new URL(SITE),
    alternates: {
      canonical,
      ...(hasEn && enUrl
        ? {
            languages: {
              no: noUrl,
              en: enUrl,
              "x-default": noUrl,
            },
          }
        : {}),
    },
    openGraph: {
      title: `${titleText} | ${titleSuffix} — Marius Ottesen`,
      description,
      url: canonical,
      type: "article",
      locale: lang === "en" ? "en_GB" : "nb_NO",
      alternateLocale: lang === "en" ? ["nb_NO"] : hasEn ? ["en_GB"] : undefined,
      siteName: "Marius Ottesen",
      publishedTime: innlegg.dato,
      authors: ["Marius Ottesen"],
      images: [
        {
          url: ogImage,
          alt: titleText,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${titleText} | ${titleSuffix} — Marius Ottesen`,
      description,
      images: [ogImage],
    },
  };
}

export function buildFaginnleggArticleJsonLd(
  innlegg: FaginnleggInnlegg,
  lang: "no" | "en" = "no"
) {
  const slug = innlegg.id;
  const url = faginnleggCanonicalUrl(slug, lang);
  const headline = stripHtmlForMeta(innlegg.tittel[lang]);
  const description = stripHtmlForMeta(innlegg.metaDescription?.[lang] ?? innlegg.teaser[lang]);
  const image = faginnleggOgImageUrl(innlegg);

  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished: innlegg.dato,
    author: {
      "@type": "Person",
      name: "Marius Ottesen",
      url: lang === "en" ? `${SITE}/en` : SITE,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    inLanguage: lang === "en" ? "en" : "nb",
  };

  if (innlegg.bildeUrl || innlegg.bildeUrlKort || innlegg.karusellBilder?.length) {
    article.image = image;
  }

  return article;
}

export function buildFaginnleggBreadcrumbJsonLd(
  innlegg: FaginnleggInnlegg,
  lang: "no" | "en" = "no"
) {
  const slug = innlegg.id;
  const headline = stripHtmlForMeta(innlegg.tittel[lang]);
  const hubLabel = lang === "en" ? "Articles" : "Faginnlegg";
  const hubUrl = `${SITE}${lang === "en" ? ARTICLES_HUB_PAIR.en : ARTICLES_HUB_PAIR.no}`;
  const homeUrl = lang === "en" ? `${SITE}/en` : SITE;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "en" ? "Home" : "Hjem",
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: hubLabel,
        item: hubUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: headline,
        item: faginnleggCanonicalUrl(slug, lang),
      },
    ],
  };
}
