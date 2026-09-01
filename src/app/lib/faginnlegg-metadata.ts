import type { Metadata } from "next";
import type { FaginnleggInnlegg } from "./faginnlegg-types";
import { stripHtmlForMeta } from "./faginnlegg-innhold";

const SITE = "https://www.mariusottesen.no";

export function faginnleggCanonicalUrl(slug: string): string {
  return `${SITE}/faginnlegg/${slug}`;
}

export function faginnleggOgImageUrl(innlegg: FaginnleggInnlegg): string {
  const src = innlegg.bildeUrlKort ?? innlegg.karusellBilder?.[0]?.src ?? innlegg.bildeUrl;
  if (!src || !src.trim()) return `${SITE}/images/profil.jpg`;
  if (src.startsWith("http")) return src;
  return `${SITE}${src.startsWith("/") ? src : `/${src}`}`;
}

export function buildFaginnleggArticleMetadata(innlegg: FaginnleggInnlegg): Metadata {
  const slug = innlegg.id;
  const titleNo = stripHtmlForMeta(innlegg.tittel.no);
  const description = stripHtmlForMeta(innlegg.metaDescription?.no ?? innlegg.teaser.no).slice(0, 160);
  const canonical = faginnleggCanonicalUrl(slug);
  const ogImage = faginnleggOgImageUrl(innlegg);

  return {
    title: `${titleNo} | Faginnlegg — Marius Ottesen`,
    description,
    metadataBase: new URL(SITE),
    alternates: { canonical },
    openGraph: {
      title: `${titleNo} | Faginnlegg — Marius Ottesen`,
      description,
      url: canonical,
      type: "article",
      locale: "nb_NO",
      siteName: "Marius Ottesen",
      publishedTime: innlegg.dato,
      authors: ["Marius Ottesen"],
      images: [
        {
          url: ogImage,
          alt: titleNo,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${titleNo} | Faginnlegg — Marius Ottesen`,
      description,
      images: [ogImage],
    },
  };
}

export function buildFaginnleggArticleJsonLd(innlegg: FaginnleggInnlegg) {
  const slug = innlegg.id;
  const url = faginnleggCanonicalUrl(slug);
  const headline = stripHtmlForMeta(innlegg.tittel.no);
  const description = stripHtmlForMeta(innlegg.metaDescription?.no ?? innlegg.teaser.no);
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
      url: SITE,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    inLanguage: "nb",
  };

  if (innlegg.bildeUrl || innlegg.bildeUrlKort || innlegg.karusellBilder?.length) {
    article.image = image;
  }

  return article;
}

export function buildFaginnleggBreadcrumbJsonLd(innlegg: FaginnleggInnlegg) {
  const slug = innlegg.id;
  const headline = stripHtmlForMeta(innlegg.tittel.no);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Faginnlegg",
        item: `${SITE}/faginnlegg`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: headline,
        item: faginnleggCanonicalUrl(slug),
      },
    ],
  };
}
