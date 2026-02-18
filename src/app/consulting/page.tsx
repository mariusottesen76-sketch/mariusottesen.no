import type { Metadata } from "next";
import Page from "../page";

export const metadata: Metadata = {
  title: "Consulting | AI-strategi & Prosessoptimalisering — Marius Ottesen Consulting",
  description:
    "Rådgivning og implementering innen AI-strategi, prosessoptimalisering og digital transformasjon. Brobygger mellom ledelse og teknologi.",
  openGraph: {
    title: "Consulting | AI-strategi & Prosessoptimalisering — Marius Ottesen Consulting",
    description:
      "Rådgivning og implementering innen AI-strategi (kunstig intelligens), prosessoptimalisering og digital transformasjon. Hjelper virksomheter med å omsette AI-muligheter til konkret kommersiell verdi.",
    url: "https://www.mariusottesen.no/consulting",
    type: "website",
    images: [
      {
        url: "/images/profil.jpg",
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
    images: ["/images/profil.jpg"],
  },
};

export default function ConsultingPage() {
  return <Page initialTab="Consulting" />;
}
