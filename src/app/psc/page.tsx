import type { Metadata } from "next";
import PilotLanding from "../components/PilotLanding";
import { getPilotSide } from "../data/pilot-pages";

const side = getPilotSide("psc");

export const metadata: Metadata = {
  title: side.meta.title.no,
  description: side.meta.description.no,
  metadataBase: new URL("https://www.mariusottesen.no"),
  openGraph: {
    title: side.meta.title.no,
    description: side.meta.description.no,
    url: "https://www.mariusottesen.no/psc",
    type: "website",
    siteName: "Marius Ottesen",
    images: [
      {
        url: "https://www.mariusottesen.no/images/profil.jpg",
        width: 1200,
        height: 630,
        alt: "Sales Meeting Performance Pilot med The Predictive Sales Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: side.meta.title.no,
    description: side.meta.description.no,
    images: ["https://www.mariusottesen.no/images/profil.jpg"],
  },
};

export default function PscPilotPage() {
  return <PilotLanding slug="psc" />;
}
