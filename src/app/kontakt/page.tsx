import type { Metadata } from "next";
import type { ResolvingMetadata } from "next";
import Page from "../page";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Kontakt — Marius Ottesen",
  description:
    "Ta gjerne kontakt via en av kanalene under. Marius Ottesen Consulting — AI-strategi, prosessoptimalisering og digital transformasjon.",
  metadataBase: new URL("https://www.mariusottesen.no"),
  openGraph: {
    title: "Kontakt — Marius Ottesen",
    description:
      "Ta gjerne kontakt via en av kanalene under. Marius Ottesen Consulting — AI-strategi, prosessoptimalisering og digital transformasjon.",
    url: "https://www.mariusottesen.no/kontakt",
    type: "website",
    siteName: "Marius Ottesen",
    images: [
      {
        url: "https://www.mariusottesen.no/images/kontakt.jpg",
        width: 1200,
        height: 630,
        alt: "Kontakt — Marius Ottesen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt — Marius Ottesen",
    description:
      "Ta gjerne kontakt via en av kanalene under. Marius Ottesen Consulting.",
    images: ["https://www.mariusottesen.no/images/kontakt.jpg"],
  },
  };
}

export default function KontaktPage() {
  return <Page initialTab="Kontakt" />;
}
