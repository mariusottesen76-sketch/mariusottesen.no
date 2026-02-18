import type { Metadata } from "next";
import Page from "../page";

export const metadata: Metadata = {
  title: "Resultater | Dokumenterte Resultater — Marius Ottesen",
  description:
    "Dokumenterte resultater med vekst, transformasjon og lønnsomhet. Nøkkeltall fra karrieren levert i roller med helhetlig kommersiellt ansvar.",
  openGraph: {
    title: "Resultater | Dokumenterte Resultater — Marius Ottesen",
    description:
      "Gjennomgående dokumenterte resultater med vekst, transformasjon og lønnsomhet — levert i roller med helhetlig kommersiellt ansvar.",
    url: "https://www.mariusottesen.no/resultater",
    type: "website",
    images: [
      {
        url: "/images/resultater.jpg",
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
    images: ["/images/resultater.jpg"],
  },
};

export default function ResultaterPage() {
  return <Page initialTab="Resultater" />;
}
