import type { Metadata } from "next";
import type { ResolvingMetadata } from "next";
import Page from "../page";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Resultater | Dokumenterte resultater — Marius Ottesen",
    description:
      "Dokumenterte resultater med vekst, snuoperasjoner, teamutvikling og kommersiell transformasjon. Nøkkeltall: 67 % salgsvekst, NOK 1 mrd. vekstmål og global #1-ranking.",
    metadataBase: new URL("https://www.mariusottesen.no"),
    openGraph: {
      title: "Resultater | Dokumenterte resultater — Marius Ottesen",
      description:
        "Gjennomgående dokumenterte resultater fra vekst, snuoperasjoner, teamutvikling og kommersiell transformasjon — levert i roller med salgsledelse, KPI-styring og helhetlig kommersielt ansvar.",
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
      title: "Resultater | Dokumenterte resultater — Marius Ottesen",
      description:
        "67 % salgsvekst, bidrag til NOK 1 mrd. vekstmål og global #1-ranking — dokumenterte resultater fra kommersiell ledelse.",
      images: ["https://www.mariusottesen.no/images/resultater.jpg"],
    },
  };
}

export default function ResultaterPage() {
  return <Page initialTab="Resultater" />;
}
