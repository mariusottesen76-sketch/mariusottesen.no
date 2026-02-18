import type { Metadata } from "next";
import Page from "../page";

export const metadata: Metadata = {
  title: "Referanser & Anbefalinger — Marius Ottesen",
  description:
    "Referanser og anbefalinger fra kollegaer og medarbeidere som har jobbet direkte med meg. Publisert på LinkedIn.",
  openGraph: {
    title: "Referanser & Anbefalinger — Marius Ottesen",
    description:
      "Hva andre sier om mitt lederskap. Tilbakemeldinger fra kollegaer og medarbeidere som har jobbet direkte med meg.",
    url: "https://www.mariusottesen.no/referanser",
    type: "website",
    images: [
      {
        url: "/images/profil.jpg",
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
    images: ["/images/profil.jpg"],
  },
};

export default function ReferanserPage() {
  return <Page initialTab="Referanser" />;
}
