import type { Metadata } from "next";
import type { ResolvingMetadata } from "next";
import Page from "../page";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Consulting | Verdilekkasjer, salg, CRM og kommersiell utvikling — Marius Ottesen Consulting",
  description:
    "Jeg hjelper SMB-ledere og kommersielle team med å finne og tette verdilekkasjer i salg, kundedialog, CRM, arbeidsflyt og ledelse.",
  metadataBase: new URL("https://www.mariusottesen.no"),
  openGraph: {
    title: "Consulting | Verdilekkasjer, salg, CRM og kommersiell utvikling — Marius Ottesen Consulting",
    description:
      "Kartlegging og forbedring av salg, CRM, kundedialog, oppfølging, arbeidsflyt og ledelse for SMB. AI som virkemiddel når det gir verdi.",
    url: "https://www.mariusottesen.no/consulting",
    type: "website",
    siteName: "Marius Ottesen",
    images: [
      {
        url: "https://www.mariusottesen.no/images/profil.jpg",
        width: 1200,
        height: 630,
        alt: "Marius Ottesen Consulting — verdilekkasjer, salg, CRM og kommersiell utvikling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulting | Verdilekkasjer, salg, CRM og kommersiell utvikling — Marius Ottesen Consulting",
    description:
      "Kartlegging og forbedring av salg, CRM, kundedialog, oppfølging, arbeidsflyt og ledelse for SMB.",
    images: ["https://www.mariusottesen.no/images/profil.jpg"],
  },
  };
}

export default function ConsultingPage() {
  return <Page initialTab="Consulting" />;
}
