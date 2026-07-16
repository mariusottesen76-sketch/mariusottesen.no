import type { LocalizedString, ProjectV2Record } from "./types";
import { buildAccessCodeContactHref } from "../../lib/project-contact-query";

export type ProjectCtaAction = {
  href: string;
  label: LocalizedString;
  external?: boolean;
};

export type ProjectCtaConfig = {
  primary: ProjectCtaAction;
  secondary?: ProjectCtaAction;
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
  openAccessControlled: {
    no: "Åpne tilgangsstyrt løsning",
    en: "Open access-controlled solution",
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
  backToProjects: {
    no: "Tilbake til AI-prosjekter",
    en: "Back to AI projects",
  },
  contactShort: {
    no: "Ta kontakt",
    en: "Contact",
  },
} as const;

const conceptNote: LocalizedString = {
  no: "Løsningen er utviklet som konseptprototype og porteføljedemonstrasjon — ikke presentert som produksjonsklart system.",
  en: "The solution is developed as a concept prototype and portfolio demonstration — not presented as a production-ready system.",
};

const accessCodeNote: LocalizedString = {
  no: "Løsningen er tilgangsstyrt og utviklet som porteføljeprosjekt / lukket testflate — ikke presentert som ferdig kommersielt produkt.",
  en: "The solution is access-controlled and developed as a portfolio project / closed test environment — not presented as a finished commercial product.",
};

const defaultContactHref = "/kontakt";

function secondaryOverviewAction(project: ProjectV2Record): ProjectCtaAction {
  const accessContactHref = buildAccessCodeContactHref(project.slug);
  const liveUrl = project.liveSolutionUrl;

  switch (project.accessMode) {
    case "access_code":
      return { href: accessContactHref, label: labels.requestAccess };
    case "closed_demo":
      return { href: defaultContactHref, label: labels.contactDemo };
    case "public":
      return {
        href: liveUrl ?? project.detailDestination,
        label: project.ctaLabels?.overviewSecondary ?? labels.openSolution,
        external: Boolean(liveUrl),
      };
    case "external_destination":
      return {
        href: liveUrl ?? project.detailDestination,
        label: project.externalDestinationLabel ?? labels.explore,
        external: Boolean(liveUrl?.startsWith("http")),
      };
    case "concept":
    case "no_live_solution":
    default:
      return { href: defaultContactHref, label: labels.contactApplication };
  }
}

function primaryDetailAction(project: ProjectV2Record): ProjectCtaAction {
  const accessContactHref = buildAccessCodeContactHref(project.slug);
  const liveUrl = project.liveSolutionUrl;

  switch (project.accessMode) {
    case "access_code":
      return { href: accessContactHref, label: labels.requestAccess };
    case "closed_demo":
      return { href: defaultContactHref, label: labels.contactDemo };
    case "public":
      return {
        href: liveUrl ?? project.detailDestination,
        label: project.ctaLabels?.detailPrimary ?? labels.openSolution,
        external: Boolean(liveUrl),
      };
    case "external_destination":
      return {
        href: liveUrl ?? project.detailDestination,
        label: project.externalDestinationLabel ?? labels.explore,
        external: Boolean(liveUrl?.startsWith("http")),
      };
    case "concept":
    case "no_live_solution":
    default:
      return { href: defaultContactHref, label: labels.contactApplication };
  }
}

function secondaryDetailAction(project: ProjectV2Record): ProjectCtaAction | undefined {
  const liveUrl = project.liveSolutionUrl;

  switch (project.accessMode) {
    case "access_code":
      return liveUrl
        ? { href: liveUrl, label: labels.openAccessControlled, external: true }
        : undefined;
    case "public":
      return {
        href: defaultContactHref,
        label: project.ctaLabels?.detailSecondary ?? labels.contactApplication,
      };
    case "closed_demo":
    case "concept":
    case "no_live_solution":
      return { href: "/prosjekter", label: labels.backToProjects };
    case "external_destination":
      return { href: "/prosjekter", label: labels.backToProjects };
    default:
      return { href: "/prosjekter", label: labels.backToProjects };
  }
}

function overviewNote(project: ProjectV2Record): LocalizedString | undefined {
  if (project.accessMode === "access_code") return accessCodeNote;
  if (project.accessMode === "concept" || project.accessMode === "no_live_solution") return conceptNote;
  return undefined;
}

/** CTA-er på /prosjekter — to knapper: utforsk (primær) + kontakt/tilgang (sekundær). */
export function buildProjectCta(project: ProjectV2Record): ProjectCtaConfig {
  return {
    primary: { href: project.detailDestination, label: labels.explore },
    secondary: secondaryOverviewAction(project),
    note: overviewNote(project),
  };
}

/** CTA-er på project_v2-detaljsider — kontakt/tilgang/løsning primær, støttende handling sekundær. */
export function buildProjectDetailCta(project: ProjectV2Record): ProjectCtaConfig {
  return {
    primary: primaryDetailAction(project),
    secondary: secondaryDetailAction(project),
    note: overviewNote(project),
  };
}
