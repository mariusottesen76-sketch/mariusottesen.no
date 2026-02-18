import type { Metadata } from "next";
import type { ResolvingMetadata } from "next";
import Page from "../page";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Referanser & Anbefalinger — Marius Ottesen",
  description:
    "Referanser og anbefalinger fra kollegaer og medarbeidere som har jobbet direkte med meg. Publisert på LinkedIn.",
  metadataBase: new URL("https://www.mariusottesen.no"),
  openGraph: {
    title: "Referanser & Anbefalinger — Marius Ottesen",
    description:
      "Hva andre sier om mitt lederskap. Tilbakemeldinger fra kollegaer og medarbeidere som har jobbet direkte med meg.",
    url: "https://www.mariusottesen.no/referanser",
    type: "website",
    siteName: "Marius Ottesen",
    images: [
      {
        url: "https://www.mariusottesen.no/images/profil.jpg",
        width: 1200,
        height: 630,
        alt: "Referanser & Anbefalinger — Marius Ottesen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Referanser & Anbefalinger — Marius Ottesen",
    description:
      "Hva andre sier om mitt lederskap. Tilbakemeldinger fra kollegaer og medarbeidere.",
    images: ["https://www.mariusottesen.no/images/profil.jpg"],
  },
  };
}

export default function ReferanserPage() {
  return <Page initialTab="Referanser" />;
}
