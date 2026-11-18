import type { Metadata } from "next";
import AppShell from "../../AppShell";
import { HREFLANG_EN, HREFLANG_NB, REFERANSER_LOCALE, SITE } from "../../lib/locale-routes";

export const metadata: Metadata = {
  title: "Endorsements & Recommendations — Marius Ottesen",
  description:
    "Testimonials from colleagues and team members who have worked alongside Marius Ottesen — published on LinkedIn.",
  metadataBase: new URL(SITE),
  alternates: {
    canonical: `${SITE}${REFERANSER_LOCALE.en}`,
    languages: {
      [HREFLANG_NB]: `${SITE}${REFERANSER_LOCALE.no}`,
      [HREFLANG_EN]: `${SITE}${REFERANSER_LOCALE.en}`,
    },
  },
  openGraph: {
    title: "Endorsements & Recommendations — Marius Ottesen",
    description:
      "What colleagues say about my leadership. Testimonials from people who have worked directly with me.",
    url: `${SITE}${REFERANSER_LOCALE.en}`,
    type: "website",
    siteName: "Marius Ottesen",
    locale: "en_GB",
    images: [
      {
        url: `${SITE}/images/profil.jpg`,
        width: 1200,
        height: 630,
        alt: "Endorsements & Recommendations — Marius Ottesen",
      },
    ],
  },
};

export default function EnReferencesPage() {
  return <AppShell initialTab="Referanser" initialLang="en" />;
}