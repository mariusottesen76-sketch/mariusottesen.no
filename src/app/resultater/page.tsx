import type { Metadata } from "next";
import type { ResolvingMetadata } from "next";
import Page from "../page";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const description =
    "Dokumenterte resultater fra kommersiell ledelse, salgsutvikling, vekst, transformasjon og teamutvikling – supplert med egenutviklede AI-prosjekter, apper og arbeidsflyter.";

  return {
    title: "Dokumenterte resultater og praktisk AI-kompetanse | Marius Ottesen",
    description,
    metadataBase: new URL("https://www.mariusottesen.no"),
    openGraph: {
      title: "Dokumenterte resultater og praktisk AI-kompetanse | Marius Ottesen",
      description,
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
      title: "Dokumenterte resultater og praktisk AI-kompetanse | Marius Ottesen",
      description,
      images: ["https://www.mariusottesen.no/images/resultater.jpg"],
    },
  };
}

export default function ResultaterPage() {
  return <Page initialTab="Resultater" />;
}
