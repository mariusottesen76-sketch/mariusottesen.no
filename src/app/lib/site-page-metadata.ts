import type { Metadata } from "next";
import { SITE, localePairForPage, type SitePageKey } from "./locale-routes";

type PageMeta = {
  title: string;
  description: string;
  ogImage: string;
  ogImageAlt: string;
};

const PAGE_META: Record<SitePageKey, Record<"no" | "en", PageMeta>> = {
  home: {
    no: {
      title: "Marius Ottesen | Kommersiell leder, transformasjon og praktisk AI",
      description:
        "Kommersiell leder med erfaring fra salgsledelse, vekst, P/L-ansvar, teamutvikling, transformasjon og praktisk AI — inkludert operasjonell ledererfaring fra salg, drift og gjennomføring.",
      ogImage: `${SITE}/images/profil.jpg`,
      ogImageAlt: "Marius Ottesen — Kommersiell leder",
    },
    en: {
      title: "Marius Ottesen | Commercial leader, transformation and practical AI",
      description:
        "Commercial leader with experience in sales leadership, growth, P&L accountability, team development, transformation and practical AI — including operational leadership from sales, operations and execution.",
      ogImage: `${SITE}/images/profil.jpg`,
      ogImageAlt: "Marius Ottesen — Commercial leader",
    },
  },
  experience: {
    no: {
      title: "Erfaring og resultater | Kommersiell leder – Marius Ottesen",
      description:
        "Kommersiell leder med erfaring fra salgsledelse, vekst, P/L-ansvar, teamutvikling, transformasjon og praktisk AI — inkludert operasjonell ledererfaring fra salg og drift.",
      ogImage: `${SITE}/images/resultater.jpg`,
      ogImageAlt: "Karriere høydepunkter og profesjonell erfaring — Marius Ottesen",
    },
    en: {
      title: "Experience | Commercial leader – Marius Ottesen",
      description:
        "Career highlights from commercial leadership, sales management, growth, P&L accountability, team development and practical AI — including operational experience from sales and operations.",
      ogImage: `${SITE}/images/resultater.jpg`,
      ogImageAlt: "Career highlights and professional experience — Marius Ottesen",
    },
  },
  results: {
    no: {
      title: "Dokumenterte resultater og praktisk AI-kompetanse | Marius Ottesen",
      description:
        "Dokumenterte resultater fra kommersiell ledelse, salgsutvikling, vekst, transformasjon og teamutvikling — supplert med egenutviklede AI-prosjekter, apper, plattformer og arbeidsflyter.",
      ogImage: `${SITE}/images/resultater.jpg`,
      ogImageAlt: "Dokumenterte resultater — Marius Ottesen",
    },
    en: {
      title: "Documented results and practical AI competence | Marius Ottesen",
      description:
        "Documented results from commercial leadership, sales development, growth, transformation and team development — supplemented by custom AI projects, apps, platforms and workflows.",
      ogImage: `${SITE}/images/resultater.jpg`,
      ogImageAlt: "Documented results — Marius Ottesen",
    },
  },
  consulting: {
    no: {
      title: "Kommersiell utvikling, drift, arbeidsflyt og praktisk AI | Marius Ottesen Consulting",
      description:
        "Relevant erfaring, arbeidsmetoder og porteføljeprosjekter innen kommersiell ledelse, salgsutvikling, CRM, arbeidsflyt, transformasjon og praktisk AI.",
      ogImage: `${SITE}/images/profil.jpg`,
      ogImageAlt: "Marius Ottesen Consulting",
    },
    en: {
      title: "Commercial development, operations, workflow and practical AI | Marius Ottesen Consulting",
      description:
        "Relevant experience, working methods and portfolio projects in commercial leadership, sales development, CRM, workflow, transformation and practical AI.",
      ogImage: `${SITE}/images/profil.jpg`,
      ogImageAlt: "Marius Ottesen Consulting",
    },
  },
  cv: {
    no: {
      title: "CV & åpen søknad — Marius Ottesen",
      description:
        "CV, åpen søknad og executive summary for rekrutterere, headhuntere og arbeidsgivere. Rollefit, utvalgte resultater og kjernekompetanse.",
      ogImage: `${SITE}/images/profil.jpg`,
      ogImageAlt: "CV & åpen søknad — Marius Ottesen",
    },
    en: {
      title: "CV & open application — Marius Ottesen",
      description:
        "CV, open application and executive summary for recruiters, headhunters and employers. Role fit, selected results and core competencies.",
      ogImage: `${SITE}/images/profil.jpg`,
      ogImageAlt: "CV & open application — Marius Ottesen",
    },
  },
  contact: {
    no: {
      title: "Kontakt | Kommersiell leder og AI-profil – Marius Ottesen",
      description:
        "Ta kontakt med Marius Ottesen om aktuelle lederroller, rekrutteringsdialog, kommersiell transformasjon, praktisk AI eller faglige problemstillinger.",
      ogImage: `${SITE}/images/kontakt.jpg`,
      ogImageAlt: "Kontakt — Marius Ottesen",
    },
    en: {
      title: "Contact | Commercial leader and AI profile – Marius Ottesen",
      description:
        "Contact Marius Ottesen about leadership roles, recruitment dialogue, commercial transformation, practical AI or professional questions.",
      ogImage: `${SITE}/images/kontakt.jpg`,
      ogImageAlt: "Contact — Marius Ottesen",
    },
  },
};

export function buildSitePageMetadata(page: SitePageKey, lang: "no" | "en"): Metadata {
  const meta = PAGE_META[page][lang];
  const pair = localePairForPage(page);
  const canonical = `${SITE}${lang === "en" ? pair.en : pair.no}`;
  const noUrl = `${SITE}${pair.no}`;
  const enUrl = `${SITE}${pair.en}`;

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(SITE),
    alternates: {
      canonical,
      languages: {
        no: noUrl,
        en: enUrl,
        "x-default": noUrl,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      type: "website",
      siteName: "Marius Ottesen",
      locale: lang === "en" ? "en_GB" : "nb_NO",
      alternateLocale: lang === "en" ? ["nb_NO"] : ["en_GB"],
      images: [
        {
          url: meta.ogImage,
          width: 1200,
          height: 630,
          alt: meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage],
    },
  };
}
