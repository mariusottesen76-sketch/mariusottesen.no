import type { Metadata } from "next";
import Page from "../page";

const ogDescription =
  "AI-prosjekter og utvikling som skaper kommersiell verdi. Fra prototyper til produksjon — konkrete løsninger innen salgstrening, beslutningsstøtte og prosessoptimalisering.";

export const metadata: Metadata = {
  title: "Prosjekter | AI & Utvikling — Marius Ottesen",
  description: ogDescription,
  metadataBase: new URL("https://www.mariusottesen.no"),
  openGraph: {
    title: "Prosjekter | AI & Utvikling — Marius Ottesen",
    description: ogDescription,
    url: "https://www.mariusottesen.no/prosjekter",
    type: "website",
    locale: "nb_NO",
    siteName: "Marius Ottesen",
    images: [
      {
        url: "https://www.mariusottesen.no/images/prosjekt-bilde.jpg",
        width: 1200,
        height: 630,
        alt: "AI-prosjekter og utvikling — Marius Ottesen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosjekter | AI & Utvikling — Marius Ottesen",
    description: ogDescription,
    images: ["https://www.mariusottesen.no/images/prosjekt-bilde.jpg"],
  },
};

export default function ProsjekterPage() {
  return <Page initialTab="Prosjekter" />;
}
