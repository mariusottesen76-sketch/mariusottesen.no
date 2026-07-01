import type { Metadata } from "next";
import type { ResolvingMetadata } from "next";
import Page from "../page";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const description =
    "Kommersiell leder med erfaring fra salgsledelse, vekst, P/L-ansvar, teamutvikling, transformasjon og praktisk AI. Se karriere, resultater og faglig portefølje.";

  return {
    title: "Erfaring og resultater | Kommersiell leder – Marius Ottesen",
    description,
    metadataBase: new URL("https://www.mariusottesen.no"),
    openGraph: {
      title: "Erfaring og resultater | Kommersiell leder – Marius Ottesen",
      description,
      url: "https://www.mariusottesen.no/erfaring",
      type: "website",
      siteName: "Marius Ottesen",
      images: [
        {
          url: "https://www.mariusottesen.no/images/resultater.jpg",
          width: 1200,
          height: 630,
          alt: "Karriere høydepunkter og profesjonell erfaring — Marius Ottesen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Erfaring og resultater | Kommersiell leder – Marius Ottesen",
      description,
      images: ["https://www.mariusottesen.no/images/resultater.jpg"],
    },
  };
}

export default function ErfaringPage() {
  return <Page initialTab="Erfaring" />;
}
