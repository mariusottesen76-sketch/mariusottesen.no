import type { Metadata } from "next";
import type { ResolvingMetadata } from "next";
import Page from "../page";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "CV & åpen søknad — Marius Ottesen",
    description:
      "CV, åpen søknad og executive summary for rekrutterere, headhuntere og arbeidsgivere. Rollefit, utvalgte resultater og kjernekompetanse — kommersiell leder med operasjonell erfaring fra salg, drift og gjennomføring.",
    metadataBase: new URL("https://www.mariusottesen.no"),
    openGraph: {
      title: "CV & åpen søknad — Marius Ottesen",
      description:
        "CV, åpen søknad og kort oppsummering av lederprofil, resultater og kjernekompetanse for rekrutterere, headhuntere og arbeidsgivere.",
      url: "https://www.mariusottesen.no/cv",
      type: "website",
      siteName: "Marius Ottesen",
      images: [
        {
          url: "https://www.mariusottesen.no/images/profil.jpg",
          width: 1200,
          height: 630,
          alt: "CV & åpen søknad — Marius Ottesen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "CV & åpen søknad — Marius Ottesen",
      description:
        "CV, åpen søknad og executive summary. Kommersiell leder med dokumenterte resultater og operasjonell erfaring fra salg, drift og gjennomføring.",
      images: ["https://www.mariusottesen.no/images/profil.jpg"],
    },
  };
}

export default function CVPage() {
  return <Page initialTab="CV & Åpen søknad" />;
}
