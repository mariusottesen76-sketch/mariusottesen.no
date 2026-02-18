import type { Metadata } from "next";
import Page from "../page";

export const metadata: Metadata = {
  title: "CV & Åpen søknad — Marius Ottesen",
  description:
    "Fullstendig CV og åpen søknad. Kommersiell leder med 25+ års erfaring fra B2B-markeder. AI-strateg som kombinerer kommersiell ledererfaring med AI-kompetanse.",
  openGraph: {
    title: "CV & Åpen søknad — Marius Ottesen",
    description:
      "Fullstendig CV og åpen søknad. Kommersiell leder med 25+ års erfaring fra B2B-markeder, nå kombinert med AI-kompetanse.",
    url: "https://www.mariusottesen.no/cv",
    type: "website",
    images: [
      {
        url: "/images/profil.jpg",
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
    images: ["/images/profil.jpg"],
  },
};

export default function CVPage() {
  return <Page initialTab="CV & Åpen søknad" />;
}
