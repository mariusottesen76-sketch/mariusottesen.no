import type { Metadata } from "next";
import Page from "../page";

export const metadata: Metadata = {
  title: "Faginnlegg | Innsikt & Tankeledelse — Marius Ottesen",
  description:
    "Innsikt og tankeledelse innen strategisk ledelse, transformasjon og AI. Faginnlegg som gir perspektiver på moderne ledelse, teknologi og kommersiell vekst.",
  openGraph: {
    title: "Faginnlegg | Innsikt & Tankeledelse — Marius Ottesen",
    description:
      "I krysningen mellom teknologi, kommersiell strategi og menneskelig ledelse ligger nøkkelen til moderne vekst. Faginnlegg innen strategisk ledelse, transformasjon og AI.",
    url: "https://www.mariusottesen.no/faginnlegg",
    type: "website",
    images: [
      {
        url: "/images/blogg.jpg",
        width: 1200,
        height: 630,
        alt: "Innsikt og tankeledelse — Marius Ottesen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faginnlegg | Innsikt & Tankeledelse — Marius Ottesen",
    description:
      "I krysningen mellom teknologi, kommersiell strategi og menneskelig ledelse ligger nøkkelen til moderne vekst.",
    images: ["/images/blogg.jpg"],
  },
};

export default function FaginnleggPage() {
  return <Page initialTab="Faginnlegg" />;
}
