import type { Metadata } from "next";
import type { ResolvingMetadata } from "next";
import Page from "../page";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Consulting | AI-strategi & Prosessoptimalisering — Marius Ottesen Consulting",
  description:
    "Rådgivning og implementering innen AI-strategi, prosessoptimalisering og digital transformasjon. Brobygger mellom ledelse og teknologi.",
  metadataBase: new URL("https://www.mariusottesen.no"),
  openGraph: {
    title: "Consulting | AI-strategi & Prosessoptimalisering — Marius Ottesen Consulting",
    description:
      "Rådgivning og implementering innen AI-strategi (kunstig intelligens), prosessoptimalisering og digital transformasjon. Hjelper virksomheter med å omsette AI-muligheter til konkret kommersiell verdi.",
    url: "https://www.mariusottesen.no/consulting",
    type: "website",
    siteName: "Marius Ottesen",
    images: [
      {
        url: "https://www.mariusottesen.no/images/profil.jpg",
        width: 1200,
        height: 630,
        alt: "Marius Ottesen Consulting — AI-strategi & Prosessoptimalisering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulting | AI-strategi & Prosessoptimalisering — Marius Ottesen Consulting",
    description:
      "Rådgivning og implementering innen AI-strategi, prosessoptimalisering og digital transformasjon.",
    images: ["https://www.mariusottesen.no/images/profil.jpg"],
  },
  };
}

export default function ConsultingPage() {
  return <Page initialTab="Consulting" />;
}
