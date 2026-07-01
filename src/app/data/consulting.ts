import { Lang } from "../LanguageContext";
import { AI_READINESS_SCAN_PROSJEKT_PATH } from "../lib/ai-readiness-scan-brand";
import { SMB_SALGSFLYT_PILOT_PATH } from "../lib/smb-salgsflyt-brand";

export type PakkePilotStotte = {
  tekst: string;
  lenkeHref: string;
  lenkeLabel: string;
};

const portefoljeProsjektTekst: Record<Lang, string> = {
  no: "Dette er et egenutviklet porteføljeprosjekt som viser hvordan kommersiell forståelse, arbeidsflyt og AI kan kombineres i praksis. Løsningen fungerer som en faglig demonstrator og kan være relevant som inspirasjon, referanse eller mulig utgangspunkt dersom en relevant rolle, problemstilling eller fremtidig samarbeidsmulighet oppstår.",
  en: "This is a custom portfolio project that shows how commercial understanding, workflow and AI can be combined in practice. It functions as a professional demonstrator and may be relevant as inspiration, reference or a possible starting point if a relevant role, problem area or future collaboration opportunity arises.",
};

const pscDemonstratorStotte: Record<Lang, PakkePilotStotte> = {
  no: {
    tekst: "Prosjektet viser hvordan møteforberedelse, salgstrening og refleksjon kan støttes med AI.",
    lenkeHref: "/psc",
    lenkeLabel: "Se The Predictive Sales Coach som demonstrator",
  },
  en: {
    tekst: "The project shows how meeting preparation, sales training and reflection can be supported with AI.",
    lenkeHref: "/psc",
    lenkeLabel: "See The Predictive Sales Coach as a demonstrator",
  },
};

const flowSignalDemonstratorStotte: Record<Lang, PakkePilotStotte> = {
  no: {
    tekst: "Prosjektet viser hvordan samhandling, refleksjon, trening og lederinnsikt kan struktureres i praksis.",
    lenkeHref: "/flowsignal",
    lenkeLabel: "Se FlowSignal som demonstrator",
  },
  en: {
    tekst: "The project shows how collaboration, reflection, training and leadership insight can be structured in practice.",
    lenkeHref: "/flowsignal",
    lenkeLabel: "See FlowSignal as a demonstrator",
  },
};

const prosjektLenke = (href: string): Record<Lang, PakkePilotStotte> => ({
  no: { tekst: portefoljeProsjektTekst.no, lenkeHref: href, lenkeLabel: "Se prosjektet" },
  en: { tekst: portefoljeProsjektTekst.en, lenkeHref: href, lenkeLabel: "See the project" },
});

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
      tittel: "Verdilekkasjer i salg, CRM og kundedialog",
      hvem: "Virksomheter med kunder, leads, ansatte og systemer, men der salg, CRM, kundedialog og oppfølging ikke henger godt nok sammen.",
      leveranseKort:
        "Erfaring med å analysere kundereise, salgstrakt, CRM, oppfølging og arbeidsflyt for å identifisere friksjon, forbedringsmuligheter og tydelige prioriteringer.",
      forDetalj:
        "Særlig når salg, marketing og kundeservice vokser i ulikt tempo, ved CRM-innfasing, lederbytte eller når vekst avdekker hull i kundereisen.",
      leveranseDetalj:
        "Kundereise, salgstrakt, CRM, oppfølging, arbeidsflyt, prioritering av forbedringsområder og struktur for videre gjennomføring.",
    },
    {
      id: "crm-sales",
      tittel: "CRM og salgsoppfølging",
      hvem: "B2B-virksomheter som har CRM, men ikke opplever at systemet gir tilstrekkelig verdi i oppfølging, prioritering eller salgsledelse.",
      leveranseKort:
        "Erfaring med CRM-logikk, salgsfaser, pipeline-struktur, minimumsfelter, møteforberedelse og lederoppfølging, inkludert praktisk AI-støtte der det er relevant.",
      forDetalj:
        "Særlig ved vekst i salgsteam, pipeline-prioritering, lav CRM-bruk, manglende salgslederinnsikt eller når rapportering ikke gir grunnlag for beslutninger.",
      leveranseDetalj:
        "CRM-struktur, salgsfaser, pipeline, møte- og oppfølgingsmaler, rapportering, datakvalitet og lederinnsikt.",
    },
    {
      id: "kundedialog",
      tittel: "Kundedialog, booking og smart intake",
      hvem: "Tjenestebedrifter som bruker mye tid på gjentakende spørsmål, avklaringer, booking, telefoner og e-post.",
      leveranseKort:
        "Erfaring med å kartlegge kundedialog, FAQ, bookingflyt og smart intake, samt vurdere hvor automatisering eller AI-støttet svarstruktur kan være relevant.",
      forDetalj:
        "Særlig ved høyt innkommende volum, manuell booking, mange kanaler eller når frontlinjen bruker uforholdsmessig tid på gjentakende henvendelser.",
      leveranseDetalj:
        "Kundedialog, FAQ, bookingflyt, intake, chatbot-logikk, eskaleringsregler og tydelige grenser for hva en løsning kan og ikke kan svare på.",
    },
    {
      id: "smb-lederloft",
      tittel: "Kommersiell lederrytme og gjennomføring",
      hvem: "Daglige ledere og lederteam som ønsker tydeligere prioritering, bedre kommersiell rytme, sterkere oppfølging og mer gjennomføringskraft.",
      leveranseKort:
        "Erfaring med lederintervjuer, kommersielle målbilder, KPI-strukturer, møte- og lederrytme, ansvarsavklaring og praktisk oppfølging.",
      forDetalj:
        "Særlig ved ny kommersiell retning, lederrolle eller ledergruppe som trenger tydeligere rytme, ansvar og oppfølging av prioriteringer over tid.",
      leveranseDetalj:
        "Kommersiell retning, KPI-er, møtestruktur, ansvar, prioritering, lederrytme og 90-dagers gjennomføringslogikk.",
    },
  ],
  en: [
    {
      id: "verdilekkasje",
      tittel: "Value leaks in sales, CRM and customer dialogue",
      hvem: "Businesses with customers, leads, people and systems, but where sales, CRM, customer dialogue and follow-up are not connected well enough.",
      leveranseKort:
        "Experience analysing customer journey, sales funnel, CRM, follow-up and workflow to identify friction, improvement opportunities and clear priorities.",
      forDetalj:
        "Especially when sales, marketing and customer service grow at different speeds, during CRM rollout, leadership change or when growth exposes gaps in the customer journey.",
      leveranseDetalj:
        "Customer journey, sales funnel, CRM, follow-up, workflow, prioritisation of improvement areas and structure for further execution.",
    },
    {
      id: "crm-sales",
      tittel: "CRM and sales follow-up",
      hvem: "B2B businesses that have CRM but do not experience sufficient value from the system in follow-up, prioritisation or sales leadership.",
      leveranseKort:
        "Experience with CRM logic, sales stages, pipeline structure, minimum fields, meeting preparation and leadership follow-up, including practical AI support where relevant.",
      forDetalj:
        "Especially when scaling the sales team, prioritising pipeline, CRM adoption is low, sales leadership lacks insight or reporting does not support decisions.",
      leveranseDetalj:
        "CRM structure, sales stages, pipeline, meeting and follow-up templates, reporting, data quality and leadership insight.",
    },
    {
      id: "kundedialog",
      tittel: "Customer dialogue, booking and smart intake",
      hvem: "Service businesses spending significant time on recurring questions, clarifications, booking, phone calls and email.",
      leveranseKort:
        "Experience mapping customer dialogue, FAQ, booking flow and smart intake, and assessing where automation or AI-supported response structure may be relevant.",
      forDetalj:
        "Especially with high inbound volume, manual booking, many channels or when the front line spends disproportionate time on recurring enquiries.",
      leveranseDetalj:
        "Customer dialogue, FAQ, booking flow, intake, chatbot logic, escalation rules and clear boundaries for what a solution can and cannot answer.",
    },
    {
      id: "smb-lederloft",
      tittel: "Commercial leadership rhythm and execution",
      hvem: "Managing directors and leadership teams seeking clearer prioritisation, better commercial rhythm, stronger follow-up and more execution power.",
      leveranseKort:
        "Experience with leadership interviews, commercial target pictures, KPI structures, meeting and leadership rhythm, accountability clarification and practical follow-up.",
      forDetalj:
        "Especially with a new commercial direction, leadership role or leadership team that needs clearer rhythm, accountability and follow-through on priorities over time.",
      leveranseDetalj:
        "Commercial direction, KPIs, meeting structure, accountability, prioritisation, leadership rhythm and 90-day execution logic.",
    },
  ],
};

const spesialisertePakker: Record<Lang, TjenestePakke[]> = {
  no: [
    {
      id: "sales-meeting",
      tittel: "Kvalitet i kundemøter",
      hvem: "Salgsorganisasjoner som vil styrke kvaliteten på kundemøter før, under og etter møtet.",
      leveranseKort:
        "Erfaring med å styrke kvaliteten i kundemøter gjennom møteforberedelse, spørsmål, innvendinger, etterarbeid, trening og lederoppfølging.",
      forDetalj: "Salgsorganisasjoner som vil styrke kvaliteten på kundemøter før, under og etter møtet.",
      leveranseDetalj:
        "Møteforberedelse, spørsmålsbank, innvendingsstruktur, etterarbeid, trening, rollespill og lederoppfølging.",
      pilotStotte: pscDemonstratorStotte.no,
    },
    {
      id: "team-performance",
      tittel: "Teamutvikling og samhandling",
      hvem: "Team som opplever friksjon i kommunikasjon, prioritering, energi, ansvar eller samspill.",
      leveranseKort:
        "Erfaring med teamutvikling, samhandling, preferanser, energidrivere, tydeligere ansvar og lederens oppfølgingsgrep.",
      forDetalj: "Team som opplever friksjon i kommunikasjon, prioritering, energi, ansvar eller samspill.",
      leveranseDetalj:
        "Teamkartlegging, styrkebasert dialog, samhandling, preferanser, energidrivere og lederens oppfølgingsgrep.",
      pilotStotte: flowSignalDemonstratorStotte.no,
    },
    {
      id: "leder-salgscoach",
      tittel: "Leder som salgscoach",
      hvem: "Salgsledere som ønsker å gå fra aktivitetskontroll til prestasjonsutvikling.",
      leveranseKort:
        "Erfaring med salgscoaching, 1:1-struktur, møteobservasjon, casegjennomgang og KPI-er som kombinerer aktivitet, kvalitet og fremdrift.",
      forDetalj: "Salgsledere som ønsker å gå fra aktivitetskontroll til prestasjonsutvikling.",
      leveranseDetalj:
        "1:1-struktur, coachingmodell, møteobservasjon, casegjennomgang, KPI-er og lederoppfølging i salgsteam.",
      pilotStotte: pscDemonstratorStotte.no,
    },
    {
      id: "gtm-story",
      tittel: "Go-to-market og kommersiell fortelling",
      hvem: "Startups og scaleups som har et produkt, men trenger tydeligere posisjonering, bedre pitch og mer strukturert salgsprosess.",
      leveranseKort:
        "Erfaring med målgruppeforståelse, verdiforslag, pitch, kundereise, go-to-market og kommersiell struktur.",
      forDetalj:
        "Startups og scaleups som har et produkt, men trenger tydeligere posisjonering, bedre pitch og mer strukturert salgsprosess.",
      leveranseDetalj:
        "Målgruppeforståelse, verdiforslag, pitch, kundereise, go-to-market, kanaler og kommersiell struktur.",
    },
  ],
  en: [
    {
      id: "sales-meeting",
      tittel: "Quality in customer meetings",
      hvem: "Sales organisations that want to strengthen the quality of customer meetings before, during and after the meeting.",
      leveranseKort:
        "Experience strengthening the quality of customer meetings through meeting preparation, questions, objections, follow-up work, training and leadership follow-up.",
      forDetalj: "Sales organisations that want to strengthen the quality of customer meetings before, during and after the meeting.",
      leveranseDetalj:
        "Meeting preparation, question bank, objection structure, follow-up work, training, role-play and leadership follow-up.",
      pilotStotte: pscDemonstratorStotte.en,
    },
    {
      id: "team-performance",
      tittel: "Team development and collaboration",
      hvem: "Teams experiencing friction in communication, prioritisation, energy, accountability or collaboration.",
      leveranseKort:
        "Experience with team development, collaboration, preferences, energy drivers, clearer accountability and the leader's follow-up actions.",
      forDetalj: "Teams experiencing friction in communication, prioritisation, energy, accountability or collaboration.",
      leveranseDetalj:
        "Team mapping, strength-based dialogue, collaboration, preferences, energy drivers and the leader's follow-up actions.",
      pilotStotte: flowSignalDemonstratorStotte.en,
    },
    {
      id: "leder-salgscoach",
      tittel: "Leader as sales coach",
      hvem: "Sales leaders who want to move from activity control to performance development.",
      leveranseKort:
        "Experience with sales coaching, 1:1 structure, meeting observation, case review and KPIs that combine activity, quality and progress.",
      forDetalj: "Sales leaders who want to move from activity control to performance development.",
      leveranseDetalj:
        "1:1 structure, coaching model, meeting observation, case review, KPIs and leadership follow-up in sales teams.",
      pilotStotte: pscDemonstratorStotte.en,
    },
    {
      id: "gtm-story",
      tittel: "Go-to-market and commercial narrative",
      hvem: "Startups and scaleups with a product but needing clearer positioning, a sharper pitch and a more structured sales process.",
      leveranseKort:
        "Experience with target group understanding, value proposition, pitch, customer journey, go-to-market and commercial structure.",
      forDetalj:
        "Startups and scaleups with a product but needing clearer positioning, a sharper pitch and a more structured sales process.",
      leveranseDetalj:
        "Target group understanding, value proposition, pitch, customer journey, go-to-market, channels and commercial structure.",
    },
  ],
};

const metoder: Record<Lang, MetodeKomponent[]> = {
  no: [
    {
      tittel: "The Predictive Sales Coach",
      beskrivelse: "Salgstrening, møteforberedelse og salgslederinnsikt",
      pilotStotte: prosjektLenke("/psc").no,
    },
    {
      tittel: "FlowSignal",
      beskrivelse: "Samhandling, teamutvikling, dagsform og dialog",
      pilotStotte: prosjektLenke("/flowsignal").no,
    },
    {
      tittel: "SMB Salgsflyt-sjekken",
      beskrivelse: "Interaktiv demonstrator for strukturert innsikt i salgsmodenhet",
      pilotStotte: prosjektLenke(SMB_SALGSFLYT_PILOT_PATH).no,
    },
    {
      tittel: "AI Readiness Scan",
      beskrivelse: "Modenhet, prioritering og grunnlag for AI-arbeid",
      pilotStotte: prosjektLenke(AI_READINESS_SCAN_PROSJEKT_PATH).no,
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
      pilotStotte: prosjektLenke("/psc").en,
    },
    {
      tittel: "FlowSignal",
      beskrivelse: "Collaboration, team development, daily form and dialogue",
      pilotStotte: prosjektLenke("/flowsignal").en,
    },
    {
      tittel: "SMB Sales Flow Check",
      beskrivelse: "Interactive demonstrator for structured insight into sales maturity",
      pilotStotte: prosjektLenke(SMB_SALGSFLYT_PILOT_PATH).en,
    },
    {
      tittel: "AI Readiness Scan",
      beskrivelse: "Maturity, prioritisation and a basis for AI work",
      pilotStotte: prosjektLenke(AI_READINESS_SCAN_PROSJEKT_PATH).en,
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
