import type { Metadata } from "next";
import type { ResolvingMetadata } from "next";
import Page from "../page";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "CV & Åpen søknad — Marius Ottesen",
  description:
    "Fullstendig CV og åpen søknad. Kommersiell leder med 25+ års erfaring fra B2B-markeder. AI-strateg som kombinerer kommersiell ledererfaring med AI-kompetanse.",
  metadataBase: new URL("https://www.mariusottesen.no"),
  openGraph: {
    title: "CV & Åpen søknad — Marius Ottesen",
    description:
      "Fullstendig CV og åpen søknad. Kommersiell leder med 25+ års erfaring fra B2B-markeder, nå kombinert med AI-kompetanse.",
    url: "https://www.mariusottesen.no/cv",
    type: "website",
    siteName: "Marius Ottesen",
    images: [
      {
        url: "https://www.mariusottesen.no/images/profil.jpg",
        width: 1200,
        height: 630,
        alt: "CV & Åpen søknad — Marius Ottesen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV & Åpen søknad — Marius Ottesen",
    description:
      "Fullstendig CV og åpen søknad. Kommersiell leder med 25+ års erfaring fra B2B-markeder.",
    images: ["https://www.mariusottesen.no/images/profil.jpg"],
  },
  };
}

export default function CVPage() {
  return <Page initialTab="CV & Åpen søknad" />;
}
