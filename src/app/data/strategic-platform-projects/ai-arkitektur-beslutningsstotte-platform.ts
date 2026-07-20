import type { StrategicPlatformProject } from "./types";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Kommersiell leder og AI-strateg", en: "Commercial leader and AI strategist" },
  beskrivelse: {
    no: "Utvikler virksomhetsnære modeller, arbeidsflyter og konsepter i skjæringspunktet mellom kommersiell ledelse, beslutningsstøtte, kunnskapsarbeid, teknologi og praktisk AI.",
    en: "Develops business-oriented models, workflows and concepts at the intersection of commercial leadership, decision support, knowledge work, technology and practical AI.",
  },
};

export const aiArkitekturBeslutningsstottePlatform: StrategicPlatformProject = {
  slug: "ai-arkitektur-beslutningsstotte",
  prosjektId: "ai-arkitektur-beslutningsstotte-2026",
  detailPath: "/ai-arkitektur-beslutningsstotte",
  meta: {
    title: {
      no: "AI-arkitektur for beslutningsstøtte | Marius Ottesen",
      en: "AI architecture for decision support | Marius Ottesen",
    },
    description: {
      no: "Arkitekturmodell og beslutningslogikk for hvordan data, analyse og AI kan støtte kommersiell prioritering — konsept, ikke produksjonssystem.",
      en: "Architecture model and decision logic for how data, analysis and AI can support commercial prioritisation — concept, not a production system.",
    },
    ogImage: "/images/ai-arkitektur-beslutningsstotte-hero.png?v=20260720",
    canonicalPath: "/ai-arkitektur-beslutningsstotte",
  },
  teaser: {
    undertittel: { no: "Data, analyse og kommersiell prioritering", en: "Data, analysis and commercial prioritisation" },
    intro: { no: "Arkitekturmodell for beslutningsstøtte.", en: "Architecture model for decision support." },
    blokker: {
      utfordring: { no: "Informasjon er spredt og vanskelig å omsette til prioritering.", en: "Information is scattered and hard to translate into prioritisation." },
      bygget: { no: "Arkitektur for gap, mønstre og handlingsalternativer.", en: "Architecture for gaps, patterns and action alternatives." },
      relevans: { no: "Pipeline, kundeinnsikt, margin og lederstøtte.", en: "Pipeline, customer insight, margin and leadership support." },
      status: { no: "Modell under utvikling — ikke ferdig system.", en: "Model under development — not a finished system." },
    },
    videreutvikling: { no: "Dashboards, scenarioanalyse og prioriteringsmotor.", en: "Dashboards, scenario analysis and prioritisation engine." },
  },
  detail: {
    statusBadge: {
      no: "Arkitekturmodell for beslutningsstøtte og prioritering",
      en: "Architecture model for decision support and prioritisation",
    },
    hero: {
      verdiforslag: {
        no: "Hvordan kan data, analyse og AI kobles til bedre prioriteringer og lederbeslutninger?",
        en: "How can data, analysis and AI be connected to better priorities and leadership decisions?",
      },
      executiveSummary: {
        no: "Prosjektet viser en modell for hvordan virksomheter kan koble data, innsikt, analyse, forretningsregler og AI tettere til prioritering og beslutninger. Arkitekturen skiller mellom rapportering av hva som har skjedd, analyse av hvorfor, og anbefaling av hva som bør prioriteres videre — med menneskelig beslutning i sentrum. Utviklet som arkitekturmodell, ikke ferdig implementert virksomhetssystem.",
        en: "The project shows a model for how organisations can connect data, insight, analysis, business rules and AI more closely to prioritisation and decisions. The architecture distinguishes between reporting what happened, analysing why, and recommending what should be prioritised next — with human decision-making at the centre. Developed as an architecture model, not a fully implemented enterprise system.",
      },
      bildeAlt: {
        no: "AI-arkitektur for beslutningsstøtte og kommersiell prioritering",
        en: "AI architecture for decision support and commercial prioritisation",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "Strategidokumenter, KPI-strukturer, salgsprosesser, anbudsdokumenter og regulatoriske krav kan skape mer kompleksitet enn fremdrift. Problemet er ofte ikke mangel på informasjon, men at informasjonen er spredt, tung å tolke og vanskelig å omsette til prioriteringer og neste handling.",
        en: "Strategy documents, KPI structures, sales processes, tender documents and regulatory requirements can create more complexity than progress. The problem is often not a lack of information, but that information is scattered, heavy to interpret and difficult to translate into priorities and next actions.",
      },
    },
    logikk: {
      heading: { no: "Arkitekturen og beslutningslogikken", en: "The architecture and decision logic" },
      body: { no: "Modellen skiller tre nivåer i beslutningsstøtten:", en: "The model distinguishes three levels in decision support:" },
      steps: [
        { tittel: { no: "Rapportering", en: "Reporting" }, beskrivelse: { no: "Hva som har skjedd — strukturert oversikt over data og status.", en: "What happened — structured overview of data and status." } },
        { tittel: { no: "Analyse", en: "Analysis" }, beskrivelse: { no: "Hvorfor det har skjedd — mønstre, gap og avvik.", en: "Why it happened — patterns, gaps and deviations." } },
        { tittel: { no: "Prioritering", en: "Prioritisation" }, beskrivelse: { no: "Hva som bør prioriteres videre — anbefalte handlinger for leder.", en: "What should be prioritised next — recommended actions for leadership." } },
      ],
      after: {
        no: "Menneskelig beslutning og effektmåling beholdes som avsluttende og lærende steg.",
        en: "Human decision and effect measurement are retained as concluding and learning steps.",
      },
    },
    bygget: {
      heading: { no: "Hva som er utviklet", en: "What has been developed" },
      items: [
        { no: "Arkitekturmodell for strukturering av kompleksitet", en: "Architecture model for structuring complexity" },
        { no: "Logikk for gap-identifisering og mønsteranalyse", en: "Logic for gap identification and pattern analysis" },
        { no: "Kobling mellom datakilder, forretningsregler og analyse", en: "Link between data sources, business rules and analysis" },
        { no: "Grunnlag for prioritering og anbefalte handlinger", en: "Basis for prioritisation and recommended actions" },
        { no: "Overføringsverdi til andre AI-prosjekter som teknisk fundament", en: "Transfer value to other AI projects as technical foundation" },
      ],
    },
    moduler: {
      heading: { no: "Sentrale komponenter", en: "Core components" },
      modules: [
        { tittel: { no: "Datakilder", en: "Data sources" }, beskrivelse: { no: "Dokumenter, prosesser, salgsdata og strategiske mål.", en: "Documents, processes, sales data and strategic goals." }, bygget: true },
        { tittel: { no: "Strukturering", en: "Structuring" }, beskrivelse: { no: "Normalisering og systematisk nedbryting av kompleksitet.", en: "Normalisation and systematic breakdown of complexity." }, bygget: true },
        { tittel: { no: "Analyse og mønstre", en: "Analysis and patterns" }, beskrivelse: { no: "Identifisering av gap, avvik og handlingsalternativer.", en: "Identification of gaps, deviations and action alternatives." }, bygget: true },
        { tittel: { no: "Lederinformasjon", en: "Leadership information" }, beskrivelse: { no: "Prioritert beslutningsgrunnlag for menneskelig vurdering.", en: "Prioritised decision foundation for human assessment." }, bygget: true },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan modellen fungerer", en: "How the model works" },
      steps: [
        { tittel: { no: "Inndata", en: "Input" }, beskrivelse: { no: "Arkitekturen tar utgangspunkt i relevante datakilder og krav.", en: "The architecture starts from relevant data sources and requirements." } },
        { tittel: { no: "Strukturere", en: "Structure" }, beskrivelse: { no: "AI strukturerer materialet og trekker ut mønstre.", en: "AI structures the material and extracts patterns." } },
        { tittel: { no: "Prioritere", en: "Prioritise" }, beskrivelse: { no: "Gap og handlingsalternativer presenteres for vurdering.", en: "Gaps and action alternatives are presented for assessment." } },
        { tittel: { no: "Beslutte", en: "Decide" }, beskrivelse: { no: "Menneskelig vurdering og beslutning i beslutningspunktet.", en: "Human assessment and decision at the decision point." } },
      ],
    },
    relevans: {
      heading: { no: "Mulige anvendelsesområder og relevans", en: "Possible application areas and relevance" },
      sections: [
        { tittel: { no: "Kommersiell prioritering", en: "Commercial prioritisation" }, tekst: { no: "Pipeline, kundeinnsikt, margin, ressursbruk og salgsledelse.", en: "Pipeline, customer insight, margin, resource use and sales leadership." } },
        { tittel: { no: "Lederstøtte", en: "Leadership support" }, tekst: { no: "Strategi, rapportering, governance og ledergruppers beslutningsarbeid.", en: "Strategy, reporting, governance and leadership team decision work." } },
      ],
    },
    status: {
      heading: { no: "Status, modenhet og avgrensninger", en: "Status, maturity and limitations" },
      body: {
        no: "Utviklet arkitekturmodell og beslutningslogikk for hvordan data, analyse og AI kan støtte kommersiell prioritering og ledelsesbeslutninger. Modell og arkitekturspor under utvikling — ikke presentert som ferdig implementert virksomhetssystem.",
        en: "Developed architecture model and decision logic for how data, analysis and AI can support commercial prioritisation and leadership decisions. Model and architecture track under development — not presented as a fully implemented enterprise system.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Videreutvikling av arkitekturen", en: "Further development of the architecture" },
        punkter: [
          { no: "Dashboards og scenarioanalyse", en: "Dashboards and scenario analysis" },
          { no: "Varslinger og prioriteringsmotor", en: "Alerts and prioritisation engine" },
          { no: "Beslutningslogg og forklarbar AI", en: "Decision log and explainable AI" },
          { no: "Rollebasert lederinformasjon", en: "Role-based leadership information" },
        ],
      },
      tilpasning: {
        heading: { no: "Tilpasning til funksjoner og bransjer", en: "Adaptation to functions and industries" },
        punkter: [
          { no: "Gap-analyse og use case-prioritering", en: "Gap analysis and use case prioritisation" },
          { no: "Salgs- og markedsoversikt", en: "Sales and market overview" },
          { no: "Lederverktøy for strategi og kommersiell styring", en: "Leadership tools for strategy and commercial governance" },
        ],
      },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: {
        no: "Ta kontakt dersom du ønsker å kartlegge hvordan AI kan brukes til bedre beslutningsstøtte, kommersiell prioritering eller lederstøtte.",
        en: "Get in touch if you would like to map how AI can be used for better decision support, commercial prioritisation or leadership support.",
      },
    },
    utvikler,
  },
};
