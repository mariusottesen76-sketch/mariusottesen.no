import { FLOW_SIGNAL_APP_URL } from "../../../lib/flowsignal-brand";
import type { ProjectV2Record } from "../types";
import { relevantVidereLinksForSlug } from "../relevant-videre-catalog";

export const flowsignalV2: ProjectV2Record = {
  id: "flowsignal-2026-05",
  slug: "flowsignal",
  category: "app_prototype",
  layoutVersion: "project_v2",
  accessMode: "access_code",
  detailLevel: "full",
  publishedAt: "2026-06-08",
  date: "2026-06-05",
  displayDate: { no: "05.06.26", en: "05.06.26" },
  title: {
    no: "FlowSignal v1.0: Profilinnsikt, dagsform og samhandling",
    en: "FlowSignal v1.0: Profile insight, daily form and collaboration",
  },
  subtitle: {
    no: "Profilinnsikt, dagsform og samhandling i hverdagen — for team og ledere",
    en: "Profile insight, daily form and collaboration in everyday work — for teams and leaders",
  },
  statusLabel: {
    no: "Lukket pilot · tilgangsstyrt arbeidsflate",
    en: "Closed pilot · access-controlled workspace",
  },
  maturityLevel: {
    no: "Lukket pilot",
    en: "Closed pilot",
  },
  overviewIntroduction: {
    no: "Gir team og ledere et praktisk språk for arbeidsstil, dagsform og samhandling — slik at 1:1-samtaler, møter og oppfølging blir mer presise. Ikke et kontroll- eller psykologisk diagnoseverktøy.",
    en: "Gives teams and leaders practical language for work style, daily form and collaboration — so 1:1 conversations, meetings and follow-up become more precise. Not a control or psychological diagnostic tool.",
  },
  overview: {
    what: {
      no: "En tilgangsstyrt arbeidsflate som samler personprofil, dagsform, dialogstøtte, samhandlingstrening, refleksjon og anbefalte neste steg for team og ledere.",
      en: "An access-controlled workspace that brings together person profile, daily form, dialogue support, collaboration training, reflection and recommended next steps for teams and leaders.",
    },
    challenge: {
      no: "Mange team har tilgang til personprofiler og utviklingsverktøy, men sliter med å bruke innsikten i møter, prioriteringer, samhandling og krevende dialoger. Profilrapporter blir ofte liggende statisk.",
      en: "Many teams have access to person profiles and development tools, but struggle to use that insight in meetings, prioritisation, collaboration and demanding dialogues. Profile reports often remain static.",
    },
    built: {
      no: "Lukket pilot: profilgrunnlag, dagsform (Fyrtårnet), dialogstøtte, refleksjon og trening — tilgang etter avtale.",
      en: "Closed pilot: profile foundation, daily form (the Lighthouse), dialogue support, reflection and training — access by agreement.",
    },
    how: {
      no: "Brukeren starter med profil og arbeidsstil, registrerer dagsform via Fyrtårnet, og bruker dialogstøtte og refleksjon til 1:1-samtaler, teammøter, onboarding og krevende dialoger.",
      en: "The user starts with profile and work style, registers daily form via the Lighthouse, and uses dialogue support and reflection for 1:1 conversations, team meetings, onboarding and demanding dialogues.",
    },
    relevance: {
      no: "Aktuelt for ledere som vil styrke samhandling og rolleforståelse i kommersielle eller tverrfaglige team — uten å erstatte HR-prosesser eller kundedialogtrening.",
      en: "Relevant for leaders who want to strengthen collaboration and role understanding in commercial or cross-functional teams — without replacing HR processes or customer dialogue training.",
    },
    status: {
      no: "Lukket pilot og tilgangsstyrt arbeidsflate for avgrenset testbruk. Enkel flytrefleksjon er foreløpig selvkartlegging, ikke en formell Talent Dynamics-profil.",
      en: "Closed pilot and access-controlled workspace for limited test use. Simple flow reflection is a preliminary self-assessment, not a formal Talent Dynamics profile.",
    },
    development: {
      no: "Videre potensial inkluderer bedre rapportimport, redigerbart profilgrunnlag, mer presise anbefalinger, lederdashboard og tydeligere team- og lederverdi.",
      en: "Further potential includes better report import, editable profile foundation, more precise recommendations, leadership dashboards and clearer team and leadership value.",
    },
    adaptation: {
      no: "Grunnmodellen kan tilpasses onboarding, lederutvikling, rolleavklaring, teamutvikling og samhandlingsstøtte i kommersielle og tverrfaglige miljøer.",
      en: "The core model can be adapted for onboarding, leadership development, role clarification, team development and collaboration support in commercial and cross-functional environments.",
    },
  },
  overviewImage: "/images/flowsignal-hjemmeside.png?v=20260717",
  detailHeroImage: "/images/flowsignal-hero.png?v=20260719",
  detailHeroObjectPosition: "center",
  needsNewDetailHero: false,
  altText: {
    no: "FlowSignal v1.0 – profilinnsikt, dagsform og samhandling",
    en: "FlowSignal v1.0 – profile insight, daily form and collaboration",
  },
  overviewImageFormat: "standard_1x3",
  detailHeroMissing: false,
  detailDestination: "/flowsignal",
  liveSolutionUrl: FLOW_SIGNAL_APP_URL,
  seo: {
    title: {
      no: "FlowSignal v1.0 | Marius Ottesen",
      en: "FlowSignal v1.0 | Marius Ottesen",
    },
    description: {
      no: "FlowSignal kobler profilinnsikt, dagsform og dialogstøtte til bedre teamoppfølging — lukket pilot med tilgangskode.",
      en: "FlowSignal links profile insight, daily form and dialogue support to better team follow-up — closed pilot with access code.",
    },
    ogImage: "/images/flowsignal-hero.png?v=20260719",
    canonicalPath: "/flowsignal",
  },
  strategicPlatformSlug: "flowsignal",
  fagPerspektivLinks: relevantVidereLinksForSlug("flowsignal"),
};
