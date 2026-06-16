import type { Metadata } from "next";
import PilotLanding from "../components/PilotLanding";
import { getPilotSide } from "../data/pilot-pages";

const side = getPilotSide("salgsflyt-sjekken");

export const metadata: Metadata = {
  title: side.meta.title.no,
  description: side.meta.description.no,
  metadataBase: new URL("https://www.mariusottesen.no"),
  openGraph: {
    title: side.meta.title.no,
    description: side.meta.description.no,
    url: "https://www.mariusottesen.no/salgsflyt-sjekken",
    type: "website",
    siteName: "Marius Ottesen",
    images: [
      {
        url: "https://www.mariusottesen.no/images/smb-salgsflyt-sjekken.png",
        width: 1200,
        height: 630,
        alt: "Diagnose- og kvalifiseringspilot med SMB Salgsflyt-sjekken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: side.meta.title.no,
    description: side.meta.description.no,
    images: ["https://www.mariusottesen.no/images/smb-salgsflyt-sjekken.png"],
  },
};

export default function SalgsflytSjekkenPilotPage() {
  return <PilotLanding slug="salgsflyt-sjekken" />;
}
