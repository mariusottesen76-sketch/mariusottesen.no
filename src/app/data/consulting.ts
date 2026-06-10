import { Lang } from "../LanguageContext";

export type PakkePilotStotte = {
  tekst: string;
  lenkeHref: string;
  lenkeLabel: string;
};

const pscPilotStotte: Record<Lang, PakkePilotStotte> = {
  no: {
    tekst:
      "The Predictive Sales Coach kan brukes som trenings- og analysekomponent i Sales Meeting Performance Sprint og Leder som salgscoach.",
    lenkeHref: "/psc",
    lenkeLabel: "Se PSC-pilot",
  },
  en: {
    tekst:
      "The Predictive Sales Coach can be used as a training and analysis component in Sales Meeting Performance Sprint and Leader as sales coach.",
    lenkeHref: "/psc",
    lenkeLabel: "See PSC pilot",
  },
};

const flowSignalPilotStotte: Record<Lang, PakkePilotStotte> = {
  no: {
    tekst:
      "FlowSignal kan brukes som refleksjons- og samhandlingskomponent i Team Performance & Samhandling Sprint og SMB lederløft.",
    lenkeHref: "/flowsignal",
    lenkeLabel: "Se FlowSignal-pilot",
  },
  en: {
    tekst:
      "FlowSignal can be used as a reflection and collaboration component in Team Performance & Collaboration Sprint and SMB leadership lift.",
    lenkeHref: "/flowsignal",
    lenkeLabel: "See FlowSignal pilot",
  },
};

export type TjenestePakke = {
  id: string;
  tittel: string;
  hvem: string;
  leveranseKort: string;
  forDetalj: string;
  leveranseDetalj: string;
  pilotStotte?: PakkePilotStotte;
};

export type MetodeKomponent = {
  tittel: string;
  beskrivelse: string;
  pilotStotte?: PakkePilotStotte;
};

const hovedpakker: Record<Lang, TjenestePakke[]> = {
  no: [
    {
      id: "verdilekkasje",
      tittel: "Verdilekkasje Sprint",
      hvem: "Virksomheter med kunder, leads, ansatte og systemer, men som mister verdi fordi salg, CRM, marketing, kundedialog og oppfølging ikke henger godt nok sammen.",
      leveranseKort:
        "Kartlegging av kundereise, salgstrakt, CRM, oppfølging og arbeidsflyt, med prioritert liste over 3–5 verdilekkasjer og anbefalt første tiltak.",
      forDetalj:
        "For virksomheter som har kunder, leads, ansatte og systemer, men mister verdi fordi salg, CRM, marketing, kundedialog og oppfølging ikke henger godt nok sammen.",
      leveranseDetalj:
        "Kartlegging av kundereise, salgstrakt, CRM, oppfølging og arbeidsflyt, prioritert liste over 3–5 verdilekkasjer, anbefalt første tiltak, enkel business case og 30/60/90-dagers forbedringsplan.",
    },
    {
      id: "crm-sales",
      tittel: "CRM & Sales Follow-up Sprint",
      hvem: "B2B-virksomheter som har CRM, men ikke får nok verdi ut av systemet.",
      leveranseKort:
        "Forbedret CRM-logikk, minimumsfelter, salgsfaser, pipeline-struktur og møte- og oppfølgingsmaler, med mulig AI-støtte der det gir verdi.",
      forDetalj: "For B2B-virksomheter som har CRM, men ikke får nok verdi ut av systemet.",
      leveranseDetalj:
        "Forbedret CRM-logikk, minimumsfelter, salgsfaser, pipeline-struktur, møte- og oppfølgingsmaler, samt mulig AI-støtte for møtenotater, oppfølgingsforslag og lederrapportering.",
    },
    {
      id: "kundedialog",
      tittel: "Kundedialog & Booking Sprint",
      hvem: "Tjenestebedrifter som bruker mye tid på gjentakende spørsmål, booking, avklaringer, telefoner og e-post.",
      leveranseKort:
        "Kartlegging av kundedialog, FAQ, bookingflyt og smart intake, med chatbot eller AI-assistert svarstruktur og tydelige eskaleringsregler.",
      forDetalj:
        "For tjenestebedrifter som bruker mye tid på gjentakende spørsmål, booking, avklaringer, telefoner og e-post.",
      leveranseDetalj:
        "Kartlegging av kundedialog, FAQ, bookingflyt, smart intake, chatbot eller AI-assistert svarstruktur, eskaleringsregler og tydelige grenser for hva løsningen kan og ikke kan svare på.",
    },
    {
      id: "smb-lederloft",
      tittel: "SMB lederløft",
      hvem: "Daglige ledere og lederteam som trenger bedre kommersiell rytme, tydeligere mål, bedre prioritering og mer strukturert oppfølging.",
      leveranseKort:
        "Lederintervjuer, kommersiell målbilde-workshop, KPI-er som brukes, møte- og lederrytme og 90-dagers handlingsplan.",
      forDetalj:
        "For daglige ledere og lederteam som trenger bedre kommersiell rytme, tydeligere mål, bedre prioritering og mer strukturert oppfølging.",
      leveranseDetalj:
        "Lederintervjuer, kommersiell målbilde-workshop, KPI-er som faktisk brukes, møte- og lederrytme, ansvarsavklaring og 90-dagers handlingsplan.",
      pilotStotte: flowSignalPilotStotte.no,
    },
  ],
  en: [
    {
      id: "verdilekkasje",
      tittel: "Value Leak Sprint",
      hvem: "Businesses with customers, leads, people and systems, but losing value because sales, CRM, marketing, customer dialogue and follow-up are not connected well enough.",
      leveranseKort:
        "Mapping of customer journey, sales funnel, CRM, follow-up and workflow, with a prioritised list of 3–5 value leaks and a recommended first initiative.",
      forDetalj:
        "For businesses that have customers, leads, people and systems, but lose value because sales, CRM, marketing, customer dialogue and follow-up are not connected well enough.",
      leveranseDetalj:
        "Mapping of customer journey, sales funnel, CRM, follow-up and workflow, prioritised list of 3–5 value leaks, recommended first initiative, simple business case and 30/60/90-day improvement plan.",
    },
    {
      id: "crm-sales",
      tittel: "CRM & Sales Follow-up Sprint",
      hvem: "B2B businesses that have CRM but are not getting enough value from the system.",
      leveranseKort:
        "Improved CRM logic, minimum fields, sales stages, pipeline structure and meeting and follow-up templates, with optional AI support where it adds value.",
      forDetalj: "For B2B businesses that have CRM but are not getting enough value from the system.",
      leveranseDetalj:
        "Improved CRM logic, minimum fields, sales stages, pipeline structure, meeting and follow-up templates, plus optional AI support for meeting notes, follow-up suggestions and leadership reporting.",
    },
    {
      id: "kundedialog",
      tittel: "Customer Dialogue & Booking Sprint",
      hvem: "Service businesses spending too much time on recurring questions, booking, clarifications, phone calls and email.",
      leveranseKort:
        "Mapping of customer dialogue, FAQ, booking flow and smart intake, with chatbot or AI-assisted response structure and clear escalation rules.",
      forDetalj:
        "For service businesses spending too much time on recurring questions, booking, clarifications, phone calls and email.",
      leveranseDetalj:
        "Mapping of customer dialogue, FAQ, booking flow, smart intake, chatbot or AI-assisted response structure, escalation rules and clear boundaries for what the solution can and cannot answer.",
    },
    {
      id: "smb-lederloft",
      tittel: "SMB leadership lift",
      hvem: "Managing directors and leadership teams who need better commercial rhythm, clearer goals, sharper prioritisation and more structured follow-up.",
      leveranseKort:
        "Leadership interviews, commercial target picture workshop, KPIs that are actually used, meeting and leadership rhythm and a 90-day action plan.",
      forDetalj:
        "For managing directors and leadership teams who need better commercial rhythm, clearer goals, sharper prioritisation and more structured follow-up.",
      leveranseDetalj:
        "Leadership interviews, commercial target picture workshop, KPIs that are actually used, meeting and leadership rhythm, accountability clarification and a 90-day action plan.",
      pilotStotte: flowSignalPilotStotte.en,
    },
  ],
};

const spesialisertePakker: Record<Lang, TjenestePakke[]> = {
  no: [
    {
      id: "sales-meeting",
      tittel: "Sales Meeting Performance Sprint",
      hvem: "Salgsorganisasjoner som vil løfte kvaliteten på kundemøter før, under og etter møtet.",
      leveranseKort:
        "Møteforberedelse, spørsmålsbank, innvendingsstruktur, etterarbeid og AI-støttet møtebrief, med mulig bruk av The Predictive Sales Coach som trenings- og analysekomponent.",
      forDetalj:
        "For salgsorganisasjoner som vil løfte kvaliteten på kundemøter før, under og etter møtet. The Predictive Sales Coach kan brukes som trenings- og analysekomponent.",
      leveranseDetalj:
        "Møteforberedelsesmal, spørsmålsbank, innvendingsstruktur, etterarbeidsmal, AI-støttet møtebrief og rollespill/trening for selgere.",
      pilotStotte: pscPilotStotte.no,
    },
    {
      id: "team-performance",
      tittel: "Team Performance & Samhandling Sprint",
      hvem: "Team som opplever friksjon i kommunikasjon, prioritering, energi, ansvar eller samspill.",
      leveranseKort:
        "Teamkartlegging, styrkebasert dialog og samhandlingsworkshop, med mulig bruk av FlowSignal som refleksjons- og samhandlingskomponent.",
      forDetalj:
        "For team som opplever friksjon i kommunikasjon, prioritering, energi, ansvar eller samspill. FlowSignal kan brukes som refleksjons- og samhandlingskomponent.",
      leveranseDetalj:
        "Teamkartlegging, styrkebasert dialog, samhandlingsworkshop, avklaring av preferanser og energidrivere, lederens oppfølgingsgrep og fire ukers forbedringsplan.",
      pilotStotte: flowSignalPilotStotte.no,
    },
    {
      id: "leder-salgscoach",
      tittel: "Leder som salgscoach",
      hvem: "Salgsledere som ønsker å gå fra aktivitetskontroll til prestasjonsutvikling.",
      leveranseKort:
        "Analyse av dagens salgsledelse, 1:1-struktur, coachingmodell og KPI-er som kombinerer aktivitet, kvalitet og fremdrift.",
      forDetalj: "For salgsledere som ønsker å gå fra aktivitetskontroll til prestasjonsutvikling.",
      leveranseDetalj:
        "Analyse av dagens salgsledelse, 1:1-struktur, coachingmodell, møteobservasjon eller casegjennomgang, KPI-er som kombinerer aktivitet, kvalitet og fremdrift, samt mandagsmøte-opplegg for teamutvikling.",
      pilotStotte: pscPilotStotte.no,
    },
    {
      id: "gtm-story",
      tittel: "GTM & Story Sprint",
      hvem: "Startups og scaleups som har et produkt, men trenger tydeligere posisjonering, bedre pitch og mer strukturert salgsprosess.",
      leveranseKort:
        "Målgruppe- og problemspissing, verdiforslag, pitch, kundereise, første salgsprosess og enkel CRM-/leadstruktur.",
      forDetalj:
        "For startups og scaleups som har et produkt, men trenger tydeligere posisjonering, bedre pitch, skarpere målgruppe og mer strukturert salgsprosess.",
      leveranseDetalj:
        "Målgruppe- og problemspissing, verdiforslag, pitch, kundereise, første salgsprosess, kanalplan og enkel CRM-/leadstruktur.",
    },
  ],
  en: [
    {
      id: "sales-meeting",
      tittel: "Sales Meeting Performance Sprint",
      hvem: "Sales organisations that want to raise the quality of customer meetings before, during and after the meeting.",
      leveranseKort:
        "Meeting preparation, question bank, objection structure, follow-up work and AI-supported meeting brief, with optional use of The Predictive Sales Coach as a training and analysis component.",
      forDetalj:
        "For sales organisations that want to raise the quality of customer meetings before, during and after the meeting. The Predictive Sales Coach can be used as a training and analysis component.",
      leveranseDetalj:
        "Meeting preparation template, question bank, objection structure, follow-up template, AI-supported meeting brief and role-play/training for salespeople.",
      pilotStotte: pscPilotStotte.en,
    },
    {
      id: "team-performance",
      tittel: "Team Performance & Collaboration Sprint",
      hvem: "Teams experiencing friction in communication, prioritisation, energy, accountability or collaboration.",
      leveranseKort:
        "Team mapping, strength-based dialogue and collaboration workshop, with optional use of FlowSignal as a reflection and collaboration component.",
      forDetalj:
        "For teams experiencing friction in communication, prioritisation, energy, accountability or collaboration. FlowSignal can be used as a reflection and collaboration component.",
      leveranseDetalj:
        "Team mapping, strength-based dialogue, collaboration workshop, clarification of preferences and energy drivers, leader follow-up actions and a four-week improvement plan.",
      pilotStotte: flowSignalPilotStotte.en,
    },
    {
      id: "leder-salgscoach",
      tittel: "Leader as sales coach",
      hvem: "Sales leaders who want to move from activity control to performance development.",
      leveranseKort:
        "Analysis of current sales leadership, 1:1 structure, coaching model and KPIs that combine activity, quality and progress.",
      forDetalj: "For sales leaders who want to move from activity control to performance development.",
      leveranseDetalj:
        "Analysis of current sales leadership, 1:1 structure, coaching model, meeting observation or case review, KPIs that combine activity, quality and progress, plus Monday meeting setup for team development.",
      pilotStotte: pscPilotStotte.en,
    },
    {
      id: "gtm-story",
      tittel: "GTM & Story Sprint",
      hvem: "Startups and scaleups with a product but needing clearer positioning, a sharper pitch and a more structured sales process.",
      leveranseKort:
        "Target group and problem sharpening, value proposition, pitch, customer journey, first sales process and simple CRM/lead structure.",
      forDetalj:
        "For startups and scaleups with a product but needing clearer positioning, a sharper pitch, sharper target group and a more structured sales process.",
      leveranseDetalj:
        "Target group and problem sharpening, value proposition, pitch, customer journey, first sales process, channel plan and simple CRM/lead structure.",
    },
  ],
};

const metoder: Record<Lang, MetodeKomponent[]> = {
  no: [
    {
      tittel: "The Predictive Sales Coach",
      beskrivelse: "Salgstrening, møteforberedelse og salgslederinnsikt",
      pilotStotte: pscPilotStotte.no,
    },
    {
      tittel: "FlowSignal",
      beskrivelse: "Samhandling, teamutvikling, dagsform og dialog",
      pilotStotte: flowSignalPilotStotte.no,
    },
    {
      tittel: "AI Value Lab Oslo",
      beskrivelse: "Use case-prioritering, læring og praktisk AI-verdi",
    },
    {
      tittel: "Skøyenåsen Tannklinikk-case",
      beskrivelse: "Kundedialog, intake, booking og ansvarlig AI-avgrensning",
    },
  ],
  en: [
    {
      tittel: "The Predictive Sales Coach",
      beskrivelse: "Sales training, meeting preparation and sales leadership insight",
      pilotStotte: pscPilotStotte.en,
    },
    {
      tittel: "FlowSignal",
      beskrivelse: "Collaboration, team development, daily form and dialogue",
      pilotStotte: flowSignalPilotStotte.en,
    },
    {
      tittel: "AI Value Lab Oslo",
      beskrivelse: "Use case prioritisation, learning and practical AI value",
    },
    {
      tittel: "Skøyenåsen Tannklinikk case",
      beskrivelse: "Customer dialogue, intake, booking and responsible AI boundaries",
    },
  ],
};

export function getHovedpakker(lang: Lang): TjenestePakke[] {
  return hovedpakker[lang];
}

export function getSpesialisertePakker(lang: Lang): TjenestePakke[] {
  return spesialisertePakker[lang];
}

export function getConsultingMetoder(lang: Lang): MetodeKomponent[] {
  return metoder[lang];
}
