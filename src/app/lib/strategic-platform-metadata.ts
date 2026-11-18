import type { Metadata } from "next";
import type { StrategicPlatformProject } from "../data/strategic-platform-projects/types";
import { PROJECT_DETAIL_HERO_OG } from "./project-v2-image";

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
      images: [
        {
          url: ogImage,
          width: PROJECT_DETAIL_HERO_OG.widthPx,
          height: PROJECT_DETAIL_HERO_OG.heightPx,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
