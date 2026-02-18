import type { Metadata } from "next";
import Page from "../page";

export const metadata: Metadata = {
  title: "Kontakt — Marius Ottesen",
  description:
    "Ta gjerne kontakt via en av kanalene under. Marius Ottesen Consulting — AI-strategi, prosessoptimalisering og digital transformasjon.",
  openGraph: {
    title: "Kontakt — Marius Ottesen",
    description:
      "Ta gjerne kontakt via en av kanalene under. Marius Ottesen Consulting — AI-strategi, prosessoptimalisering og digital transformasjon.",
    url: "https://www.mariusottesen.no/kontakt",
    type: "website",
    images: [
      {
        url: "/images/kontakt.jpg",
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
    images: ["/images/kontakt.jpg"],
  },
};

export default function KontaktPage() {
  return <Page initialTab="Kontakt" />;
}
