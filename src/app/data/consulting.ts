import { Lang } from "../LanguageContext";
import { AI_READINESS_SCAN_PROSJEKT_PATH } from "../lib/ai-readiness-scan-brand";
import { EVENT_PLANNER_PILOT_PATH } from "../lib/event-planner-brand";
import { PSC_SHORT_DESCRIPTION } from "../lib/psc-brand";
import { SMB_SALGSFLYT_PILOT_PATH } from "../lib/smb-salgsflyt-brand";

export type PakkePilotStotte = {
  tekst: string;
  lenkeHref: string;
  lenkeLabel: string;
};

const portefoljeProsjektTekst: Record<Lang, string> = {
  no: "Dette er et egenutviklet porteføljeprosjekt som viser hvordan kommersiell forståelse, arbeidsflyt og AI kan kombineres i praksis — også der operativ gjennomføring er viktig. Løsningen fungerer som en faglig demonstrator og kan være relevant som inspirasjon, referanse eller mulig utgangspunkt dersom en relevant rolle, problemstilling eller fremtidig samarbeidsmulighet oppstår.",
  en: "This is a custom portfolio project that shows how commercial understanding, workflow and AI can be combined in practice — including where operational execution matters. It functions as a professional demonstrator and may be relevant as inspiration, reference or a possible starting point if a relevant role, problem area or future collaboration opportunity arises.",
};

const pscDemonstratorStotte: Record<Lang, PakkePilotStotte> = {
  no: {
    tekst: "Prosjektet viser hvordan møteforberedelse, salgstrening og refleksjon kan støttes med AI.",
    lenkeHref: "/psc",
    lenkeLabel: "Se AI-basert salgstrening og kundesimulering",
  },
  en: {
    tekst: "The project shows how meeting preparation, sales training and reflection can be supported with AI.",
    lenkeHref: "/psc",
    lenkeLabel: "See AI-based sales training and customer simulation",
  },
};

const pscProsjektLenke: Record<Lang, PakkePilotStotte> = {
  no: {
    tekst: portefoljeProsjektTekst.no,
    lenkeHref: "/psc",
    lenkeLabel: "Utforsk The Predictive Sales Coach",
  },
  en: {
    tekst: portefoljeProsjektTekst.en,
    lenkeHref: "/psc",
    lenkeLabel: "Explore The Predictive Sales Coach",
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

const salgsflytDemonstratorStotte: Record<Lang, PakkePilotStotte> = {
  no: {
    tekst: "Prosjektet viser hvordan salgsmodenhet, friksjon og prioriteringer kan kartlegges strukturert.",
    lenkeHref: SMB_SALGSFLYT_PILOT_PATH,
    lenkeLabel: "Se SMB Salgsflyt-sjekken",
  },
  en: {
    tekst: "The project shows how sales maturity, friction and priorities can be mapped in a structured way.",
    lenkeHref: SMB_SALGSFLYT_PILOT_PATH,
    lenkeLabel: "See SMB Sales Flow Check",
  },
};

const skoyenasenDemonstratorStotte: Record<Lang, PakkePilotStotte> = {
  no: {
    tekst: "Caset viser hvordan kundedialog, intake, booking og ansvarlig AI-avgrensning kan utformes i praksis.",
    lenkeHref: "/skoyenasen-tannklinikk",
    lenkeLabel: "Se Skøyenåsen Tannklinikk-case",
  },
  en: {
    tekst: "The case shows how customer dialogue, intake, booking and responsible AI boundaries can be designed in practice.",
    lenkeHref: "/skoyenasen-tannklinikk",
    lenkeLabel: "See Skøyenåsen Dental Clinic case",
  },
};

const eventPlannerDemonstratorStotte: Record<Lang, PakkePilotStotte> = {
  no: {
    tekst: "Prosjektet viser hvordan planlegging, deltakere, oppgaver, program og oppfølging kan samles i én arbeidsflate.",
    lenkeHref: EVENT_PLANNER_PILOT_PATH,
    lenkeLabel: "Se Event Planner",
  },
  en: {
    tekst: "The project shows how planning, participants, tasks, programme and follow-up can be brought together in one workspace.",
    lenkeHref: EVENT_PLANNER_PILOT_PATH,
    lenkeLabel: "See Event Planner",
  },
};

const readinessScanDemonstratorStotte: Record<Lang, PakkePilotStotte> = {
  no: {
    tekst: "Prosjektet viser hvordan AI-modenhet, prioriteringer og beslutningsgrunnlag kan struktureres for ledergrupper.",
    lenkeHref: AI_READINESS_SCAN_PROSJEKT_PATH,
    lenkeLabel: "Se AI Readiness Scan",
  },
  en: {
    tekst: "The project shows how AI maturity, priorities and decision basis can be structured for leadership teams.",
    lenkeHref: AI_READINESS_SCAN_PROSJEKT_PATH,
    lenkeLabel: "See AI Readiness Scan",
  },
};

const prosjektLenke = (href: string): Record<Lang, PakkePilotStotte> => ({
  no: { tekst: portefoljeProsjektTekst.no, lenkeHref: href, lenkeLabel: "Se prosjektet" },
  en: { tekst: portefoljeProsjektTekst.en, lenkeHref: href, lenkeLabel: "See the project" },
});

export type FagArtikkelLink = {
  href: string;
  label: string;
};

export type TjenestePakke = {
  id: string;
  tittel: string;
  hvem: string;
  leveranseKort: string;
  forDetalj: string;
  leveranseDetalj: string;
  pilotStotte?: PakkePilotStotte;
  fagArtikkelLink?: FagArtikkelLink;
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
        "Særlig når salg, marketing og kundeservice vokser i ulikt tempo, ved CRM-innføring, utfordringer med CRM-adopsjon, lederbytte eller når vekst avdekker hull i kundereisen.",
      leveranseDetalj:
        "Kundereise, salgstrakt, CRM, oppfølging, arbeidsflyt, prioritering av forbedringsområder og struktur for videre gjennomføring.",
      pilotStotte: salgsflytDemonstratorStotte.no,
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
        "CRM-struktur, salgsfaser, pipeline, møte- og oppfølgingsmaler, rapportering, datakvalitet, lederinnsikt og datadrevet salgsledelse.",
      fagArtikkelLink: {
        href: "/faginnlegg/crm-mer-enn-et-systemprosjekt-2026-09",
        label: "Les CRM er mer enn et systemprosjekt →",
      },
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
      pilotStotte: skoyenasenDemonstratorStotte.no,
    },
    {
      id: "smb-lederloft",
      tittel: "Kommersiell og operasjonell lederrytme og gjennomføring",
      hvem: "Daglige ledere og lederteam som ønsker tydeligere prioritering, bedre samspill mellom salg og drift, sterkere oppfølging og mer gjennomføringskraft.",
      leveranseKort:
        "Erfaring med lederintervjuer, kommersielle målbilder, KPI-strukturer, møte- og lederrytme, ansvarsavklaring og praktisk oppfølging på tvers av salg, drift og kommersiell utvikling.",
      forDetalj:
        "Særlig ved ny kommersiell retning, lederrolle eller ledergruppe som trenger tydeligere rytme, ansvar og oppfølging av prioriteringer over tid.",
      leveranseDetalj:
        "Kommersiell retning, KPI-er, møtestruktur, ansvar, prioritering, lederrytme og 90-dagers gjennomføringslogikk.",
      fagArtikkelLink: {
        href: "/faginnlegg/fra-data-til-beslutning-2026-09",
        label: "Les Fra data til beslutning →",
      },
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
        "Especially when sales, marketing and customer service grow at different speeds, during CRM rollout, CRM adoption challenges, leadership change or when growth exposes gaps in the customer journey.",
      leveranseDetalj:
        "Customer journey, sales funnel, CRM, follow-up, workflow, prioritisation of improvement areas and structure for further execution.",
      pilotStotte: salgsflytDemonstratorStotte.en,
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
        "CRM structure, sales stages, pipeline, meeting and follow-up templates, reporting, data quality, leadership insight and data-driven sales leadership.",
      fagArtikkelLink: {
        href: "/faginnlegg/crm-mer-enn-et-systemprosjekt-2026-09",
        label: "Read CRM is more than a system project →",
      },
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
      pilotStotte: skoyenasenDemonstratorStotte.en,
    },
    {
      id: "smb-lederloft",
      tittel: "Commercial and operational leadership rhythm and execution",
      hvem: "Managing directors and leadership teams seeking clearer prioritisation, better alignment between sales and operations, stronger follow-up and more execution power.",
      leveranseKort:
        "Experience with leadership interviews, commercial target pictures, KPI structures, meeting and leadership rhythm, accountability clarification and practical follow-up across sales, operations and commercial development.",
      forDetalj:
        "Especially with a new commercial direction, leadership role or leadership team that needs clearer rhythm, accountability and follow-through on priorities over time.",
      leveranseDetalj:
        "Commercial direction, KPIs, meeting structure, accountability, prioritisation, leadership rhythm and 90-day execution logic.",
      fagArtikkelLink: {
        href: "/faginnlegg/fra-data-til-beslutning-2026-09",
        label: "Read From data to decision →",
      },
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
      fagArtikkelLink: {
        href: "/faginnlegg/salgsledelse-i-praksis-2026-08",
        label: "Les Salgsledelse i praksis →",
      },
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
    {
      id: "operasjonell-planlegging",
      tittel: "Operasjonell planlegging og oppfølging",
      hvem: "Virksomheter og team som planlegger arrangementer, prosjekter eller leveranser på tvers av regneark, meldinger, e-post og ulike sjekklister.",
      leveranseKort:
        "Erfaring med å strukturere planlegging, ansvar, prioritering, oppfølging og samhandling — inkludert hvor AI-assistanse kan redusere fragmentering og styrke gjennomføring.",
      forDetalj:
        "Særlig når flere personer bidrar, frister nærmer seg, ansvar er uklart eller informasjonen finnes, men ikke er operativt samlet.",
      leveranseDetalj:
        "Planleggingsmodell, deltakere og oppgaver, ansvar, program, prioritering, oppfølging og AI-støttet registrering der det gir verdi.",
      pilotStotte: eventPlannerDemonstratorStotte.no,
    },
    {
      id: "ai-modenhet",
      tittel: "AI-modenhet, prioritering og beslutningsgrunnlag",
      hvem: "Ledergrupper som vil forstå hvor virksomheten bør starte med AI, hva som bør prioriteres og hvordan modenhet og risiko bør vurderes.",
      leveranseKort:
        "Erfaring med strukturert kartlegging av AI-modenhet, prioriteringer, gap, tiltak og lederinnsikt som grunnlag for videre AI-arbeid.",
      forDetalj:
        "Særlig ved ny AI-retning, uklar prioritering, mange idéer men lite struktur, eller behov for felles beslutningsgrunnlag i ledergruppen.",
      leveranseDetalj:
        "Modenhetsvurdering, prioritering, gap-analyse, tiltak, risiko, ansvar og grunnlag for neste steg i AI-arbeid.",
      pilotStotte: readinessScanDemonstratorStotte.no,
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
      fagArtikkelLink: {
        href: "/faginnlegg/salgsledelse-i-praksis-2026-08",
        label: "Read Sales leadership in practice →",
      },
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
    {
      id: "operasjonell-planlegging",
      tittel: "Operational planning and follow-up",
      hvem: "Businesses and teams planning events, projects or deliveries across spreadsheets, messages, email and separate checklists.",
      leveranseKort:
        "Experience structuring planning, ownership, prioritisation, follow-up and collaboration — including where AI assistance can reduce fragmentation and strengthen execution.",
      forDetalj:
        "Especially when several people contribute, deadlines are approaching, ownership is unclear or the information exists but is not operationally consolidated.",
      leveranseDetalj:
        "Planning model, participants and tasks, ownership, programme, prioritisation, follow-up and AI-supported registration where it adds value.",
      pilotStotte: eventPlannerDemonstratorStotte.en,
    },
    {
      id: "ai-modenhet",
      tittel: "AI maturity, prioritisation and decision basis",
      hvem: "Leadership teams that want to understand where the organisation should start with AI, what to prioritise and how maturity and risk should be assessed.",
      leveranseKort:
        "Experience with structured mapping of AI maturity, priorities, gaps, actions and leadership insight as a basis for further AI work.",
      forDetalj:
        "Especially with a new AI direction, unclear prioritisation, many ideas but little structure, or a need for shared decision basis in the leadership team.",
      leveranseDetalj:
        "Maturity assessment, prioritisation, gap analysis, actions, risk, ownership and basis for the next step in AI work.",
      pilotStotte: readinessScanDemonstratorStotte.en,
    },
  ],
};

const metoder: Record<Lang, MetodeKomponent[]> = {
  no: [
    {
      tittel: "AI Transformation & Value Realization",
      beskrivelse: "Executive plattform for prioritering, transformasjonsstyring og målbar forretningseffekt",
      pilotStotte: prosjektLenke("/ai-transformation-value-realization").no,
    },
    {
      tittel: "Control Tower",
      beskrivelse: "Beslutnings- og gjennomføringsplattform for operativ og kommersiell prioritering",
      pilotStotte: prosjektLenke("/prosjekter#control-tower").no,
    },
    {
      tittel: "The Predictive Sales Coach",
      beskrivelse: PSC_SHORT_DESCRIPTION.no,
      pilotStotte: pscProsjektLenke.no,
    },
    {
      tittel: "FlowSignal",
      beskrivelse: "Samhandling, teamutvikling, dagsform og dialog",
      pilotStotte: prosjektLenke("/flowsignal").no,
    },
    {
      tittel: "Event Planner",
      beskrivelse: "Planlegging, deltakere, oppgaver, program og oppfølging av arrangementer",
      pilotStotte: prosjektLenke(EVENT_PLANNER_PILOT_PATH).no,
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
      tittel: "AI Transformation & Value Realization",
      beskrivelse: "Executive platform for prioritisation, transformation governance and measurable business impact",
      pilotStotte: prosjektLenke("/ai-transformation-value-realization").en,
    },
    {
      tittel: "Control Tower",
      beskrivelse: "Decision and execution platform for operational and commercial prioritisation",
      pilotStotte: prosjektLenke("/prosjekter#control-tower").en,
    },
    {
      tittel: "The Predictive Sales Coach",
      beskrivelse: PSC_SHORT_DESCRIPTION.en,
      pilotStotte: pscProsjektLenke.en,
    },
    {
      tittel: "FlowSignal",
      beskrivelse: "Collaboration, team development, daily form and dialogue",
      pilotStotte: prosjektLenke("/flowsignal").en,
    },
    {
      tittel: "Event Planner",
      beskrivelse: "Planning, participants, tasks, programme and follow-up for events",
      pilotStotte: prosjektLenke(EVENT_PLANNER_PILOT_PATH).en,
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
