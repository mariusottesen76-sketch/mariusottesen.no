import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marius Ottesen | Kommersiell leder, transformasjon og praktisk AI",
  description:
    "Kommersiell leder med erfaring fra salgsledelse, vekst, P/L-ansvar, teamutvikling, transformasjon og praktisk AI — inkludert operasjonell ledererfaring fra salg, drift og gjennomføring. Aktuell for lederroller innen kommersiell ledelse, salgsledelse og forretningsutvikling.",
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
  alternates: {
    languages: {
      "no": "https://www.mariusottesen.no",
      "en": "https://www.mariusottesen.no",
    },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    alternateLocale: "en_GB",
    url: "https://www.mariusottesen.no",
    siteName: "Marius Ottesen",
    // Default verdier - kan overstyres av child routes
    title: "Marius Ottesen | Kommersiell leder, transformasjon og praktisk AI",
    description:
      "Kommersiell leder med erfaring fra salgsledelse, vekst, P/L-ansvar, teamutvikling, transformasjon og praktisk AI — inkludert operasjonell ledererfaring fra salg, drift og gjennomføring. Aktuell for lederroller innen kommersiell ledelse, salgsledelse og forretningsutvikling.",
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
    // Default verdier - kan overstyres av child routes
    title: "Marius Ottesen | Kommersiell leder, transformasjon og praktisk AI",
    description:
      "Kommersiell leder med erfaring fra salgsledelse, vekst, P/L-ansvar, teamutvikling, transformasjon og praktisk AI — inkludert operasjonell ledererfaring fra salg, drift og gjennomføring. Aktuell for lederroller innen kommersiell ledelse, salgsledelse og forretningsutvikling.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" suppressHydrationWarning>
      <head>
        {/* Favicon — MOC-logo (flere fallbacks for maksimal kompatibilitet) */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/images/moc.logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/moc.logo.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/images/moc.logo.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/moc.logo.png" sizes="180x180" />
        {/* hreflang — signaliserer begge språkversjoner til søkemotorer */}
        <link rel="alternate" hrefLang="no" href="https://www.mariusottesen.no" />
        <link rel="alternate" hrefLang="en" href="https://www.mariusottesen.no" />
        <link rel="alternate" hrefLang="x-default" href="https://www.mariusottesen.no" />
        {/* Structured Data — JSON-LD for Person + Organisation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Marius Ottesen",
                  url: "https://www.mariusottesen.no",
                  jobTitle: "Kommersiell leder",
                  description:
                    "Kommersiell leder med erfaring fra salgsledelse, vekst, P/L-ansvar, teamutvikling, transformasjon og praktisk AI — inkludert operasjonell ledererfaring fra salg, drift og gjennomføring. Aktuell for lederroller innen kommersiell ledelse, salgsledelse og forretningsutvikling.",
                  image: "https://www.mariusottesen.no/images/profil.jpg",
                  sameAs: [
                    "https://www.linkedin.com/in/mariusottesen/",
                  ],
                  worksFor: {
                    "@type": "Organization",
                    name: "Marius Ottesen Consulting",
                    url: "https://www.mariusottesen.no",
                    taxID: "937102801",
                  },
                  knowsAbout: [
                    "Commercial Leadership",
                    "Sales Management",
                    "Digital Transformation",
                    "Artificial Intelligence",
                    "Business Development",
                    "Team Development",
                    "B2B Markets",
                  ],
                  alumniOf: [
                    {
                      "@type": "EducationalOrganization",
                      name: "BI Norwegian Business School",
                    },
                    {
                      "@type": "EducationalOrganization",
                      name: "University of Utah",
                    },
                  ],
                },
                {
                  "@type": "Organization",
                  name: "Marius Ottesen Consulting",
                  url: "https://www.mariusottesen.no",
                  logo: "https://www.mariusottesen.no/images/ikon.png",
                  taxID: "937102801",
                  founder: {
                    "@type": "Person",
                    name: "Marius Ottesen",
                  },
                  description:
                    "Faglig plattform som samler erfaring, metoder og porteføljeprosjekter innen kommersiell utvikling, AI, arbeidsflyt og lederstøtte.",
                  areaServed: "NO",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-200 min-h-screen selection:bg-indigo-500/30`}>
        {/* Svak indigo gradient for dybde */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
