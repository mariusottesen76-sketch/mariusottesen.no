import type { Metadata } from "next";
import Page from "../page";

const ogDescription =
  "Egenutviklede AI-prosjekter, apper, plattformer, demonstratorer og casearbeid innen kommersiell ledelse, salgsutvikling, arbeidsflyt, transformasjon, beslutningsstøtte og praktisk AI — med operasjonell erfaring fra salg, drift og gjennomføring.";

export const metadata: Metadata = {
  title: "AI-prosjekter og faglig utvikling | Marius Ottesen",
  description: ogDescription,
  metadataBase: new URL("https://www.mariusottesen.no"),
  alternates: { canonical: "https://www.mariusottesen.no/prosjekter" },
  openGraph: {
    title: "AI-prosjekter og faglig utvikling | Marius Ottesen",
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
    title: "AI-prosjekter og faglig utvikling | Marius Ottesen",
    description: ogDescription,
    images: ["https://www.mariusottesen.no/images/prosjekt-bilde.jpg"],
  },
};

export default function ProsjekterPage() {
  return <Page initialTab="Prosjekter" />;
}
