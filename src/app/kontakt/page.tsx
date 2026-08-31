import type { Metadata } from "next";
import type { ResolvingMetadata } from "next";
import Page from "../page";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const description =
    "Ta kontakt med Marius Ottesen om aktuelle lederroller, rekrutteringsdialog, kommersiell transformasjon, praktisk AI eller faglige problemstillinger.";

  return {
    title: "Kontakt | Kommersiell leder og AI-profil – Marius Ottesen",
    description,
    metadataBase: new URL("https://www.mariusottesen.no"),
    alternates: { canonical: "https://www.mariusottesen.no/kontakt" },
    openGraph: {
      title: "Kontakt | Kommersiell leder og AI-profil – Marius Ottesen",
      description,
      url: "https://www.mariusottesen.no/kontakt",
      type: "website",
      siteName: "Marius Ottesen",
      images: [
        {
          url: "https://www.mariusottesen.no/images/kontakt.jpg",
          width: 1200,
          height: 630,
          alt: "Kontakt — Marius Ottesen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Kontakt | Kommersiell leder og AI-profil – Marius Ottesen",
      description,
      images: ["https://www.mariusottesen.no/images/kontakt.jpg"],
    },
  };
}

export default function KontaktPage() {
  return <Page initialTab="Kontakt" />;
}
