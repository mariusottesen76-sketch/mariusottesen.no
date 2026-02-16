import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marius Ottesen | Kommersiell Leder & AI-Strateg (Kunstig Intelligens)",
  description:
    "Kommersiell leder med 25+ års erfaring fra B2B-markeder. AI-rådgiver (kunstig intelligens) som hjelper virksomheter med å omsette teknologi til konkret kommersiell verdi. Marius Ottesen Consulting — AI-strategi, prosessoptimalisering og digital transformasjon.",
  keywords: [
    "Marius Ottesen",
    "kommersiell leder",
    "AI-strateg",
    "kunstig intelligens",
    "AI-rådgiver",
    "KI",
    "AI strategy",
    "commercial leader",
    "digital transformasjon",
    "prosessoptimalisering",
    "salgsledelse",
    "B2B",
    "Marius Ottesen Consulting",
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
    title: "Marius Ottesen | Kommersiell Leder & AI-Strateg",
    description:
      "25+ års kommersiell ledererfaring — nå kombinert med AI-kompetanse (kunstig intelligens) for virksomheter som vil skape konkret verdi av ny teknologi.",
    images: [
      {
        url: "/images/profil.jpg",
        width: 1200,
        height: 630,
        alt: "Marius Ottesen — Kommersiell Leder & AI-Strateg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marius Ottesen | Kommersiell Leder & AI-Strateg",
    description:
      "25+ års kommersiell ledererfaring — nå kombinert med AI-kompetanse for virksomheter som vil skape konkret verdi av ny teknologi.",
    images: ["/images/profil.jpg"],
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
    icon: "/images/moc.logo.png",
    shortcut: "/images/moc.logo.png",
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
        {/* Favicon — MOC-logo */}
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="icon" href="/images/moc.logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/moc.logo.png" />
        <link rel="apple-touch-icon" href="/images/moc.logo.png" />
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
                  jobTitle: "Kommersiell Leder & AI-Strateg",
                  description:
                    "Kommersiell leder med 25+ års erfaring fra B2B-markeder. AI-rådgiver som hjelper virksomheter med å omsette teknologi til konkret kommersiell verdi.",
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
                    "AI Strategy",
                    "Artificial Intelligence",
                    "Kunstig intelligens",
                    "Commercial Leadership",
                    "Digital Transformation",
                    "Sales Management",
                    "Process Optimization",
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
                    "Rådgivning og implementering innen AI-strategi (kunstig intelligens), prosessoptimalisering og digital transformasjon.",
                  areaServed: "NO",
                  serviceType: [
                    "AI-strategi",
                    "Prosessoptimalisering",
                    "Digital transformasjon",
                    "Workshops og opplæring",
                  ],
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
