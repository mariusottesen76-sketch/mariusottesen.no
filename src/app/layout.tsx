import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { isEnPath } from "./lib/locale-routes";
import { getStructuredDataGraph } from "./lib/structured-data";

const inter = Inter({ subsets: ["latin"] });

/** Default metadata for pages without their own generateMetadata (Norwegian). */
export const metadata: Metadata = {
  title: "Marius Ottesen | Kommersiell leder, transformasjon og praktisk AI",
  description:
    "Kommersiell leder med erfaring fra salgsledelse, vekst, P/L-ansvar, teamutvikling, transformasjon og praktisk AI — inkludert operasjonell ledererfaring fra salg, drift og gjennomføring.",
  keywords: [
    "Marius Ottesen",
    "kommersiell leder",
    "praktisk AI",
    "kunstig intelligens",
    "AI-prosjekter",
    "KI",
    "AI strategy",
    "commercial leader",
    "digital transformasjon",
    "salgsledelse",
    "forretningsutvikling",
    "B2B",
    "Marius Ottesen Consulting",
    "porteføljeprosjekter",
  ],
  authors: [{ name: "Marius Ottesen" }],
  creator: "Marius Ottesen",
  metadataBase: new URL("https://www.mariusottesen.no"),
  openGraph: {
    type: "website",
    locale: "nb_NO",
    alternateLocale: "en_GB",
    url: "https://www.mariusottesen.no",
    siteName: "Marius Ottesen",
    title: "Marius Ottesen | Kommersiell leder, transformasjon og praktisk AI",
    description:
      "Kommersiell leder med erfaring fra salgsledelse, vekst, P/L-ansvar, teamutvikling, transformasjon og praktisk AI — inkludert operasjonell ledererfaring fra salg, drift og gjennomføring.",
    images: [
      {
        url: "https://www.mariusottesen.no/images/profil.jpg",
        width: 1200,
        height: 630,
        alt: "Marius Ottesen — Kommersiell leder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marius Ottesen | Kommersiell leder, transformasjon og praktisk AI",
    description:
      "Kommersiell leder med erfaring fra salgsledelse, vekst, P/L-ansvar, teamutvikling, transformasjon og praktisk AI — inkludert operasjonell ledererfaring fra salg, drift og gjennomføring.",
    images: ["https://www.mariusottesen.no/images/profil.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/images/moc.logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/moc.logo.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/";
  const lang = isEnPath(pathname) ? "en" : "no";
  const jsonLd = getStructuredDataGraph(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/images/moc.logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/moc.logo.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/images/moc.logo.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/moc.logo.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} bg-slate-950 text-slate-200 min-h-screen selection:bg-indigo-500/30`}
      >
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
