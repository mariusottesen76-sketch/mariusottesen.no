import type { Metadata } from "next";
import Page from "../page";

export const metadata: Metadata = {
  title: "Erfaring | Karriere høydepunkter — Marius Ottesen",
  description:
    "Karriere høydepunkter og profesjonell erfaring. 25+ års kommersiell ledererfaring fra B2B-markeder med dokumenterte resultater innen salg, transformasjon og vekst.",
  openGraph: {
    title: "Erfaring | Karriere høydepunkter — Marius Ottesen",
    description:
      "25+ års kommersiell ledererfaring fra B2B-markeder. Karriere høydepunkter med dokumenterte resultater innen salg, transformasjon og vekst.",
    url: "https://www.mariusottesen.no/erfaring",
    type: "website",
    images: [
      {
        url: "/images/resultater.jpg",
        width: 1200,
        height: 630,
        alt: "Karriere høydepunkter og profesjonell erfaring — Marius Ottesen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erfaring | Karriere høydepunkter — Marius Ottesen",
    description:
      "25+ års kommersiell ledererfaring fra B2B-markeder med dokumenterte resultater.",
    images: ["/images/resultater.jpg"],
  },
};

export default function ErfaringPage() {
  return <Page initialTab="Erfaring" />;
}
