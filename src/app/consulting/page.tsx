import type { Metadata } from "next";
import type { ResolvingMetadata } from "next";
import Page from "../page";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Kommersiell utvikling, arbeidsflyt og praktisk AI | Marius Ottesen Consulting",
  description:
    "Relevant erfaring, arbeidsmetoder og porteføljeprosjekter innen kommersiell ledelse, salgsutvikling, CRM, arbeidsflyt, transformasjon og praktisk AI.",
  metadataBase: new URL("https://www.mariusottesen.no"),
  openGraph: {
    title: "Kommersiell utvikling, arbeidsflyt og praktisk AI | Marius Ottesen Consulting",
    description:
      "Relevant erfaring, arbeidsmetoder og porteføljeprosjekter innen kommersiell ledelse, salgsutvikling, CRM, arbeidsflyt, transformasjon og praktisk AI.",
    url: "https://www.mariusottesen.no/consulting",
    type: "website",
    siteName: "Marius Ottesen",
    images: [
      {
        url: "https://www.mariusottesen.no/images/profil.jpg",
        width: 1200,
        height: 630,
        alt: "Marius Ottesen Consulting — kommersiell utvikling, arbeidsflyt og praktisk AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kommersiell utvikling, arbeidsflyt og praktisk AI | Marius Ottesen Consulting",
    description:
      "Relevant erfaring, arbeidsmetoder og porteføljeprosjekter innen kommersiell ledelse, salgsutvikling, CRM, arbeidsflyt, transformasjon og praktisk AI.",
    images: ["https://www.mariusottesen.no/images/profil.jpg"],
  },
  };
}

export default function ConsultingPage() {
  return <Page initialTab="Consulting" />;
}
