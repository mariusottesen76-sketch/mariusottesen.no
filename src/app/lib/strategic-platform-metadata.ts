import type { Metadata } from "next";
import type { StrategicPlatformProject } from "../data/strategic-platform-projects/types";

const SITE = "https://www.mariusottesen.no";

export function buildStrategicPlatformMetadata(
  project: StrategicPlatformProject,
  lang: "no" | "en" = "no"
): Metadata {
  const { meta } = project;
  const title = meta.title[lang];
  const description = meta.description[lang];
  const url = `${SITE}${meta.canonicalPath}`;
  const ogImage = meta.ogImage.startsWith("http") ? meta.ogImage : `${SITE}${meta.ogImage}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Marius Ottesen",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
