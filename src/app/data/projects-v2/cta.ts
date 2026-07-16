import type { AccessMode, LocalizedString, ProjectV2Record } from "./types";

export type ProjectCtaConfig = {
  primary: { href: string; label: LocalizedString; external?: boolean };
  secondary: { href: string; label: LocalizedString };
  tertiary?: { href: string; label: LocalizedString; external?: boolean };
  contact?: { href: string; label: LocalizedString };
  note?: LocalizedString;
};

const labels = {
  explore: {
    no: "Utforsk prosjektet",
    en: "Explore the project",
  },
  openSolution: {
    no: "Åpne løsningen",
    en: "Open the solution",
  },
  requestAccess: {
    no: "Be om tilgangskode",
    en: "Request access code",
  },
  contactApplication: {
    no: "Ta kontakt om mulig anvendelse",
    en: "Get in touch about potential use",
  },
  contactDemo: {
    no: "Ta kontakt om demonstrasjon",
    en: "Get in touch about a demonstration",
  },
  contactDialog: {
    no: "Ta kontakt for faglig dialog",
    en: "Get in touch for professional dialogue",
  },
} as const;

const conceptNote: LocalizedString = {
  no: "Løsningen er utviklet som konseptprototype og porteføljedemonstrasjon — ikke presentert som produksjonsklart system.",
  en: "The solution is developed as a concept prototype and portfolio demonstration — not presented as a production-ready system.",
};

export function buildProjectCta(project: ProjectV2Record): ProjectCtaConfig {
  const detail = project.detailDestination;
  const contactHref = "/kontakt";
  const liveUrl = project.liveSolutionUrl;

  switch (project.accessMode) {
    case "access_code":
      return {
        primary: { href: contactHref, label: labels.requestAccess },
        secondary: { href: detail, label: labels.explore },
        tertiary: liveUrl
          ? { href: liveUrl, label: labels.openSolution, external: true }
          : undefined,
        note: conceptNote,
      };

    case "public":
      return {
        primary: {
          href: liveUrl ?? detail,
          label: labels.openSolution,
          external: Boolean(liveUrl),
        },
        secondary: { href: detail, label: labels.explore },
        contact: { href: contactHref, label: labels.contactApplication },
      };

    case "closed_demo":
      return {
        primary: { href: contactHref, label: labels.contactDemo },
        secondary: { href: detail, label: labels.explore },
        contact: { href: contactHref, label: labels.contactDialog },
      };

    case "external_destination":
      return {
        primary: {
          href: liveUrl ?? detail,
          label: project.externalDestinationLabel ?? labels.explore,
          external: Boolean(liveUrl?.startsWith("http")),
        },
        secondary: { href: detail, label: labels.explore },
        contact: { href: contactHref, label: labels.contactDialog },
      };

    case "concept":
    case "no_live_solution":
    default:
      return {
        primary: { href: contactHref, label: labels.contactApplication },
        secondary: { href: detail, label: labels.explore },
        contact: { href: contactHref, label: labels.contactDialog },
        note: conceptNote,
      };
  }
}
