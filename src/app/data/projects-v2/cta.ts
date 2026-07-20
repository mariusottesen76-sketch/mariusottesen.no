import type { LocalizedString, ProjectV2Record } from "./types";
import {
  buildAccessCodeContactHref,
  buildProjectContactHref,
  CONTACT_QUERY_TEMA,
  type ContactQueryTema,
} from "../../lib/project-contact-query";

export type ProjectCtaAction = {
  href?: string;
  label: LocalizedString;
  external?: boolean;
  disabled?: boolean;
  ariaLabel?: LocalizedString;
  opensVideoModal?: boolean;
  videoPoster?: string;
};

export type ProjectCtaConfig = {
  primary: ProjectCtaAction;
  secondary?: ProjectCtaAction;
  tertiary?: ProjectCtaAction;
  note?: LocalizedString;
  demoBadge?: LocalizedString;
};

const labels = {
  explore: {
    no: "Utforsk prosjektet",
    en: "Explore project",
  },
  openSolution: {
    no: "Åpne løsningen",
    en: "Open the solution",
  },
  openPlatform: {
    no: "Åpne plattformen",
    en: "Open platform",
  },
  publishingPending: {
    no: "Publisering pågår",
    en: "Publishing in progress",
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
    en: "Contact me about potential use",
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

const openDemoNote: LocalizedString = {
  no: "Åpen konseptprototype med fiktive, sesjonsbaserte demodata. Endringer lagres ikke.",
  en: "Open concept prototype with fictional, session-based demo data. Changes are not saved.",
};

const openDemoBadge: LocalizedString = {
  no: "Åpen demo · Fiktive data · Endringer lagres ikke",
  en: "Open demo · Fictional data · Changes are not saved",
};

function isExternalProjectHref(href: string): boolean {
  return href.startsWith("http") || /\.(mov|mp4|webm|m4v)(\?|$)/i.test(href);
}

function contactHref(tema: ContactQueryTema, slug: string): string {
  return buildProjectContactHref(tema, slug);
}

function secondaryContactTema(project: ProjectV2Record): ContactQueryTema {
  if (project.slug === "ai-value-lab-oslo" || project.slug === "psc-promo-video") {
    return CONTACT_QUERY_TEMA.samarbeid;
  }
  if (project.slug === "ai-faginnlegg-hub") {
    return CONTACT_QUERY_TEMA.samarbeid;
  }
  return CONTACT_QUERY_TEMA.anvendelse;
}

function isOpenDemoPlatform(project: ProjectV2Record): boolean {
  return (
    project.category === "strategic_platform" &&
    project.accessMode === "public" &&
    Boolean(project.liveSolutionUrl)
  );
}

function isPlatformLive(project: ProjectV2Record): boolean {
  if (!project.liveSolutionUrl) return false;
  if (project.isLive === false) return false;
  return true;
}

function externalPlatformAriaLabel(project: ProjectV2Record): LocalizedString {
  return {
    no: `Åpne ${project.title.no} i ny fane`,
    en: `Open ${project.title.en} in a new tab`,
  };
}

function openPlatformAction(project: ProjectV2Record): ProjectCtaAction {
  const liveUrl = project.liveSolutionUrl!;
  return {
    href: liveUrl,
    label: project.ctaLabels?.overviewSecondary ?? project.ctaLabels?.detailPrimary ?? labels.openPlatform,
    external: true,
    ariaLabel: externalPlatformAriaLabel(project),
  };
}

function pendingPlatformAction(): ProjectCtaAction {
  return {
    label: labels.publishingPending,
    disabled: true,
  };
}

/** Primær på /prosjekter: alltid detaljside når den finnes (ikke live-løsning). */
function primaryOverviewAction(project: ProjectV2Record): ProjectCtaAction {
  if (project.playbackVideo) {
    return {
      href: project.playbackVideo.src,
      label: project.ctaLabels?.overviewPrimary ?? labels.explore,
      opensVideoModal: true,
      videoPoster: project.playbackVideo.poster,
    };
  }

  const href = project.detailDestination;
  return {
    href,
    label: project.ctaLabels?.overviewPrimary ?? labels.explore,
    external: isExternalProjectHref(href),
  };
}

function secondaryOverviewAction(project: ProjectV2Record): ProjectCtaAction {
  if (isOpenDemoPlatform(project)) {
    return isPlatformLive(project) ? openPlatformAction(project) : pendingPlatformAction();
  }

  if (project.ctaLabels?.overviewSecondary) {
    if (project.liveSolutionUrl && project.accessMode === "public") {
      return {
        href: project.liveSolutionUrl,
        label: project.ctaLabels.overviewSecondary,
        external: true,
      };
    }
    return {
      href: contactHref(secondaryContactTema(project), project.slug),
      label: project.ctaLabels.overviewSecondary,
    };
  }

  const liveUrl = project.liveSolutionUrl;

  switch (project.accessMode) {
    case "access_code":
      return { href: buildAccessCodeContactHref(project.slug), label: labels.requestAccess };
    case "closed_demo":
      return { href: contactHref(CONTACT_QUERY_TEMA.demonstrasjon, project.slug), label: labels.contactDemo };
    case "public":
      return {
        href: liveUrl ?? project.detailDestination,
        label: project.ctaLabels?.overviewSecondary ?? labels.openSolution,
        external: Boolean(liveUrl),
      };
    case "external_destination":
      return { href: contactHref(CONTACT_QUERY_TEMA.anvendelse, project.slug), label: labels.contactApplication };
    case "concept":
    case "no_live_solution":
    default:
      return { href: contactHref(CONTACT_QUERY_TEMA.anvendelse, project.slug), label: labels.contactApplication };
  }
}

function primaryDetailAction(project: ProjectV2Record): ProjectCtaAction {
  if (isOpenDemoPlatform(project)) {
    return isPlatformLive(project)
      ? {
          ...openPlatformAction(project),
          label: project.ctaLabels?.detailPrimary ?? labels.openPlatform,
        }
      : pendingPlatformAction();
  }

  const liveUrl = project.liveSolutionUrl;

  switch (project.accessMode) {
    case "access_code":
      return { href: buildAccessCodeContactHref(project.slug), label: labels.requestAccess };
    case "closed_demo":
      return { href: contactHref(CONTACT_QUERY_TEMA.demonstrasjon, project.slug), label: labels.contactDemo };
    case "public":
      return {
        href: liveUrl ?? project.detailDestination,
        label: project.ctaLabels?.detailPrimary ?? labels.openSolution,
        external: Boolean(liveUrl),
      };
    case "external_destination": {
      const href = liveUrl ?? project.detailDestination;
      return {
        href,
        label: project.externalDestinationLabel ?? project.ctaLabels?.overviewPrimary ?? labels.explore,
        external: isExternalProjectHref(href),
      };
    }
    case "concept":
    case "no_live_solution":
    default: {
      const tema =
        project.slug === "ai-value-lab-oslo" ? CONTACT_QUERY_TEMA.samarbeid : CONTACT_QUERY_TEMA.anvendelse;
      return {
        href: contactHref(tema, project.slug),
        label: project.ctaLabels?.detailPrimary ?? labels.contactApplication,
      };
    }
  }
}

function secondaryDetailAction(project: ProjectV2Record): ProjectCtaAction | undefined {
  if (isOpenDemoPlatform(project)) {
    return {
      href: contactHref(CONTACT_QUERY_TEMA.anvendelse, project.slug),
      label: project.ctaLabels?.detailSecondary ?? labels.contactApplication,
    };
  }

  const liveUrl = project.liveSolutionUrl;

  switch (project.accessMode) {
    case "access_code":
      return liveUrl
        ? { href: liveUrl, label: labels.openAccessControlled, external: true }
        : undefined;
    case "public":
      return {
        href: contactHref(CONTACT_QUERY_TEMA.anvendelse, project.slug),
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

function tertiaryDetailAction(project: ProjectV2Record): ProjectCtaAction | undefined {
  if (isOpenDemoPlatform(project)) {
    return { href: "/prosjekter", label: labels.backToProjects };
  }
  return undefined;
}

function overviewNote(project: ProjectV2Record): LocalizedString | undefined {
  if (isOpenDemoPlatform(project)) return openDemoNote;
  if (project.accessMode === "access_code") return accessCodeNote;
  if (project.category === "professional_initiative" || project.category === "video_communication") {
    return undefined;
  }
  if (project.accessMode === "concept" || project.accessMode === "no_live_solution") return conceptNote;
  return undefined;
}

function overviewDemoBadge(project: ProjectV2Record): LocalizedString | undefined {
  if (isOpenDemoPlatform(project) && isPlatformLive(project)) return openDemoBadge;
  return undefined;
}

/** CTA-er på /prosjekter — to knapper: utforsk (primær) + plattform/kontakt (sekundær). */
export function buildProjectCta(project: ProjectV2Record): ProjectCtaConfig {
  return {
    primary: primaryOverviewAction(project),
    secondary: secondaryOverviewAction(project),
    note: overviewNote(project),
    demoBadge: overviewDemoBadge(project),
  };
}

/** CTA-er på project_v2-detaljsider — plattform/kontakt primær, støttende handlinger sekundær/tertiær. */
export function buildProjectDetailCta(project: ProjectV2Record): ProjectCtaConfig {
  return {
    primary: primaryDetailAction(project),
    secondary: secondaryDetailAction(project),
    tertiary: tertiaryDetailAction(project),
    note: overviewNote(project),
    demoBadge: isOpenDemoPlatform(project) && isPlatformLive(project) ? openDemoBadge : undefined,
  };
}
