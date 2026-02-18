import type { Metadata } from "next";
import type { ResolvingMetadata } from "next";
import Page from "../page";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Resultater | Dokumenterte Resultater — Marius Ottesen",
  description:
    "Dokumenterte resultater med vekst, transformasjon og lønnsomhet. Nøkkeltall fra karrieren levert i roller med helhetlig kommersiellt ansvar.",
  metadataBase: new URL("https://www.mariusottesen.no"),
  openGraph: {
    title: "Resultater | Dokumenterte Resultater — Marius Ottesen",
    description:
      "Gjennomgående dokumenterte resultater med vekst, transformasjon og lønnsomhet — levert i roller med helhetlig kommersiellt ansvar.",
    url: "https://www.mariusottesen.no/resultater",
    type: "website",
    siteName: "Marius Ottesen",
    images: [
      {
        url: "https://www.mariusottesen.no/images/resultater.jpg",
        width: 1200,
        height: 630,
        alt: "Dokumenterte resultater — Marius Ottesen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resultater | Dokumenterte Resultater — Marius Ottesen",
    description:
      "Gjennomgående dokumenterte resultater med vekst, transformasjon og lønnsomhet.",
    images: ["https://www.mariusottesen.no/images/resultater.jpg"],
  },
  };
}

export default function ResultaterPage() {
  return <Page initialTab="Resultater" />;
}
