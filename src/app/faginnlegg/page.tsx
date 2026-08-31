import type { Metadata } from "next";
import type { ResolvingMetadata } from "next";
import Page from "../page";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Returnerer metadata som eksplisitt overstyrer parent metadata
  const ogDescription = "I krysningen mellom teknologi, kommersiell strategi og menneskelig ledelse ligger nøkkelen til moderne vekst. Faginnlegg innen strategisk ledelse, transformasjon og AI.";
  
  return {
    title: "Faginnlegg | Innsikt & Tankeledelse — Marius Ottesen",
    description: ogDescription,
    metadataBase: new URL("https://www.mariusottesen.no"),
    alternates: { canonical: "https://www.mariusottesen.no/faginnlegg" },
    openGraph: {
      title: "Faginnlegg | Innsikt & Tankeledelse — Marius Ottesen",
      description: ogDescription,
      url: "https://www.mariusottesen.no/faginnlegg",
      type: "website",
      locale: "nb_NO",
      siteName: "Marius Ottesen",
      images: [
        {
          url: "https://www.mariusottesen.no/images/blogg.jpg",
          width: 1200,
          height: 630,
          alt: "Innsikt og tankeledelse — Marius Ottesen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Faginnlegg | Innsikt & Tankeledelse — Marius Ottesen",
      description:
        "I krysningen mellom teknologi, kommersiell strategi og menneskelig ledelse ligger nøkkelen til moderne vekst.",
      images: ["https://www.mariusottesen.no/images/blogg.jpg"],
    },
  };
}

export default function FaginnleggPage() {
  return <Page initialTab="Faginnlegg" />;
}
