import type { StrategicPlatformProject } from "./types";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Kommersiell leder og AI-strateg", en: "Commercial leader and AI strategist" },
  beskrivelse: {
    no: "Utvikler virksomhetsnære modeller, arbeidsflyter og konsepter i skjæringspunktet mellom kommersiell ledelse, beslutningsstøtte, kunnskapsarbeid, teknologi og praktisk AI.",
    en: "Develops business-oriented models, workflows and concepts at the intersection of commercial leadership, decision support, knowledge work, technology and practical AI.",
  },
};

export const agentiskArbeidsflytPlatform: StrategicPlatformProject = {
  slug: "agentisk-arbeidsflyt",
  prosjektId: "ai-assistert-innsikts-og-opportunity-agent-2026",
  detailPath: "/agentisk-arbeidsflyt",
  meta: {
    title: {
      no: "Agentisk arbeidsflyt – konseptmodell | Marius Ottesen",
      en: "Agentic workflow – concept model | Marius Ottesen",
    },
    description: {
      no: "Konsept og demonstrert arbeidsflyt for hvordan AI kan strukturere veien fra innsikt til prioritert kommersiell handling — med human-in-the-loop.",
      en: "Concept and demonstrated workflow for how AI can structure the path from insight to prioritised commercial action — with human-in-the-loop.",
    },
    ogImage: "/images/agentisk-arbeidsflyt-hero.png?v=20260720",
    canonicalPath: "/agentisk-arbeidsflyt",
  },
  teaser: {
    undertittel: {
      no: "Fra innsikt til prioritert kommersiell handling",
      en: "From insight to prioritised commercial action",
    },
    intro: { no: "Konsept og demonstrert agentisk arbeidsflyt.", en: "Concept and demonstrated agentic workflow." },
    blokker: {
      utfordring: { no: "Innsikt oversettes for sakte til prioritering og handling.", en: "Insight is translated too slowly into prioritisation and action." },
      bygget: { no: "Demonstrert arbeidsflyt fra input til neste prioriterte steg.", en: "Demonstrated workflow from input to next prioritised step." },
      relevans: { no: "Kommersiell relevans innen salg, prioritering og oppfølging.", en: "Commercial relevance in sales, prioritisation and follow-up." },
      status: { no: "Konsept — ikke autonom agent i produksjon.", en: "Concept — not an autonomous agent in production." },
    },
    videreutvikling: { no: "Agentroller, beslutningsregler og læringssløyfer.", en: "Agent roles, decision rules and learning loops." },
  },
  detail: {
    statusBadge: {
      no: "Konsept og demonstrert agentisk arbeidsflyt",
      en: "Concept and demonstrated agentic workflow",
    },
    hero: {
      verdiforslag: {
        no: "Hvordan kan AI koordinere steg fra input til neste handling?",
        en: "How can AI coordinate steps from input to next action?",
      },
      executiveSummary: {
        no: "Prosjektet viser hvordan AI kan brukes i en strukturert arbeidsflyt som går fra input og innsikt til vurdering, prioritering, forslag til handling og menneskelig kvalitetssikring. Arbeidsflyten er utviklet som konsept og praktisk demonstrasjon — ikke som autonom agent i produksjon. Hovedspørsmålet er hvordan AI kan koordinere steg fra input til neste prioriterte handling, med human-in-the-loop hele veien.",
        en: "The project shows how AI can be used in a structured workflow from input and insight to assessment, prioritisation, suggested action and human quality assurance. The workflow is developed as a concept and practical demonstration — not as an autonomous agent in production. The main question is how AI can coordinate steps from input to next prioritised action, with human-in-the-loop throughout.",
      },
      bildeAlt: {
        no: "Agentisk arbeidsflyt – fra innsikt til kommersiell handling",
        en: "Agentic workflow – from insight to commercial action",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "Mange virksomheter har store mengder innsikt, CRM-data, markedsinformasjon, møtenotater og strategiske vurderinger. Problemet er at innsikten ofte blir liggende passivt og ikke raskt nok oversettes til prioriteringer, salgsoppfølging eller lederbeslutninger.",
        en: "Many organisations hold large volumes of insight, CRM data, market information, meeting notes and strategic assessments. The problem is that insight often remains passive and is not translated quickly enough into priorities, sales follow-up or leadership decisions.",
      },
    },
    logikk: {
      heading: { no: "Modellen og arbeidsflyten", en: "The model and workflow" },
      body: {
        no: "Arbeidsflyten er bygget rundt seks sammenhengende steg — fra mottak av input til læring og oppfølging:",
        en: "The workflow is built around six connected steps — from receiving input to learning and follow-up:",
      },
      steps: [
        { tittel: { no: "Input og kontekst", en: "Input and context" }, beskrivelse: { no: "Innhenting eller mottak av input og relevante datakilder.", en: "Collection or receipt of input and relevant data sources." } },
        { tittel: { no: "Klassifisering", en: "Classification" }, beskrivelse: { no: "Tolkning og klassifisering av oppgavetype og informasjon.", en: "Interpretation and classification of task type and information." } },
        { tittel: { no: "Vurdering og prioritering", en: "Assessment and prioritisation" }, beskrivelse: { no: "Vurdering av relevans og valg av riktig arbeidsflyt.", en: "Assessment of relevance and selection of the right workflow." } },
        { tittel: { no: "Forslag til handling", en: "Suggested action" }, beskrivelse: { no: "Utkast til neste konkrete handling basert på strukturert innsikt.", en: "Draft of next concrete action based on structured insight." } },
        { tittel: { no: "Kvalitetssikring", en: "Quality assurance" }, beskrivelse: { no: "Human-in-the-loop før noe settes i gang.", en: "Human-in-the-loop before anything is executed." } },
        { tittel: { no: "Oppfølging", en: "Follow-up" }, beskrivelse: { no: "Læring og justering basert på resultat og tilbakemelding.", en: "Learning and adjustment based on result and feedback." } },
      ],
    },
    bygget: {
      heading: { no: "Hva som er utviklet", en: "What has been developed" },
      body: {
        no: "Prosjektet er utviklet som konsept og praktisk demonstrasjon — ikke som ferdig produksjonsapp:",
        en: "The project is developed as a concept and practical demonstration — not as a finished production app:",
      },
      items: [
        { no: "Arbeidsflytmodell fra innsikt til prioritert handling", en: "Workflow model from insight to prioritised action" },
        { no: "Oppgaveforståelse og workflow-routing", en: "Task understanding and workflow routing" },
        { no: "Strukturering av innsikt og kontekst", en: "Structuring of insight and context" },
        { no: "Støtte for innholdsarbeid og opportunity discovery", en: "Support for content work and opportunity discovery" },
        { no: "Forslag til kontaktstrategi og outreach-utkast", en: "Suggestions for contact strategy and outreach drafts" },
      ],
    },
    moduler: {
      heading: { no: "Sentrale steg og komponenter", en: "Core steps and components" },
      intro: { no: "Arbeidsflyten skiller mellom ulike oppgavetyper:", en: "The workflow distinguishes between different task types:" },
      modules: [
        { tittel: { no: "Innholdsutvikling", en: "Content development" }, beskrivelse: { no: "Strukturering og utkast til faglig innhold.", en: "Structuring and drafts for professional content." }, bygget: true },
        { tittel: { no: "Markedsinnsikt", en: "Market insight" }, beskrivelse: { no: "Prioritering og vurdering av markedssignaler.", en: "Prioritisation and assessment of market signals." }, bygget: true },
        { tittel: { no: "Target-prioritering", en: "Target prioritisation" }, beskrivelse: { no: "Vurdering og rangering av relevante selskaper.", en: "Assessment and ranking of relevant companies." }, bygget: true },
        { tittel: { no: "Kontaktstrategi", en: "Contact strategy" }, beskrivelse: { no: "Forslag til neste kommersielle steg.", en: "Suggestions for next commercial step." }, bygget: true },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan arbeidsflyten fungerer", en: "How the workflow works" },
      steps: [
        { tittel: { no: "Tolke input", en: "Interpret input" }, beskrivelse: { no: "Arbeidsflyten klassifiserer hvilken type oppgave som skal løses.", en: "The workflow classifies what type of task should be solved." } },
        { tittel: { no: "Hente kontekst", en: "Retrieve context" }, beskrivelse: { no: "Relevant innsikt hentes og struktureres.", en: "Relevant insight is retrieved and structured." } },
        { tittel: { no: "Foreslå handling", en: "Suggest action" }, beskrivelse: { no: "Neste prioriterte steg foreslås som utkast.", en: "Next prioritised step is suggested as a draft." } },
        { tittel: { no: "Kvalitetssikre", en: "Quality assure" }, beskrivelse: { no: "Menneskelig vurdering før gjennomføring.", en: "Human assessment before execution." } },
      ],
    },
    relevans: {
      heading: { no: "Mulige anvendelsesområder og relevans", en: "Possible application areas and relevance" },
      sections: [
        { tittel: { no: "Kommersiell utvikling", en: "Commercial development" }, tekst: { no: "Salgsoppfølging, kundeinnsikt, markedsprioritering og møteforberedelse.", en: "Sales follow-up, customer insight, market prioritisation and meeting preparation." } },
        { tittel: { no: "For arbeidsgivere", en: "For employers" }, tekst: { no: "Viser evne til å bygge arbeidsflyter som kobler strategi, innsikt og gjennomføring — uten å fremstille autonom AI.", en: "Shows ability to build workflows connecting strategy, insight and execution — without presenting autonomous AI." } },
      ],
    },
    status: {
      heading: { no: "Status, modenhet og avgrensninger", en: "Status, maturity and limitations" },
      body: {
        no: "Utviklet konsept og demonstrert agentisk arbeidsflyt for å strukturere veien fra innsikt til prioritert handling. Løsningen er ikke presentert som autonom agent i produksjon eller implementert kundesystem.",
        en: "Developed concept and demonstrated agentic workflow to structure the path from insight to prioritised action. The solution is not presented as an autonomous agent in production or an implemented client system.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Videreutvikling av arbeidsflyten", en: "Further development of the workflow" },
        punkter: [
          { no: "Flere datakilder", en: "More data sources" },
          { no: "Tydeligere agentroller", en: "Clearer agent roles" },
          { no: "Beslutningsregler og kvalitetskontroll", en: "Decision rules and quality control" },
          { no: "Historikk og læringssløyfer", en: "History and learning loops" },
        ],
      },
      tilpasning: {
        heading: { no: "Tilpasning til funksjoner og bransjer", en: "Adaptation to functions and industries" },
        punkter: [
          { no: "Salgslederstøtte og oppfølgingsmotorer", en: "Sales leadership support and follow-up engines" },
          { no: "Markedsprioritering og rekrutteringsdialog", en: "Market prioritisation and recruitment dialogue" },
          { no: "Konsulenter, gründere og kommersielle team", en: "Consultants, founders and commercial teams" },
        ],
      },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: {
        no: "Ta kontakt dersom du ønsker å diskutere hvordan agentiske arbeidsflyter kan brukes i kommersiell utvikling, salgsoppfølging eller kunnskapsarbeid.",
        en: "Get in touch if you would like to discuss how agentic workflows can be used in commercial development, sales follow-up or knowledge work.",
      },
    },
    utvikler,
  },
};
