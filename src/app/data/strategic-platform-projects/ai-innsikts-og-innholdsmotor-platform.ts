import type { StrategicPlatformProject } from "./types";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Kommersiell leder og AI-strateg", en: "Commercial leader and AI strategist" },
  beskrivelse: {
    no: "Utvikler virksomhetsnære modeller, arbeidsflyter og koncepter i skjæringspunktet mellom kommersiell ledelse, beslutningsstøtte, kunnskapsarbeid, teknologi og praktisk AI.",
    en: "Develops business-oriented models, workflows and concepts at the intersection of commercial leadership, decision support, knowledge work, technology and practical AI.",
  },
};

export const aiInnsiktsOgInnholdsmotorPlatform: StrategicPlatformProject = {
  slug: "ai-innsikts-og-innholdsmotor",
  prosjektId: "ai-assistert-innsikts-og-innholdsagent-2026",
  detailPath: "/ai-innsikts-og-innholdsmotor",
  meta: {
    title: {
      no: "AI-assistert innsikts- og innholdsmotor | Marius Ottesen",
      en: "AI-assisted insight and content engine | Marius Ottesen",
    },
    description: {
      no: "Modell og arbeidsflyt for AI-assistert innsiktsarbeid og innholdsutvikling — med redaksjonell kontroll, ikke autonom publisering.",
      en: "Model and workflow for AI-assisted insight work and content development — with editorial control, not autonomous publishing.",
    },
    ogImage: "/images/ai-assistert-arbeidsflyt.jfif",
    canonicalPath: "/ai-innsikts-og-innholdsmotor",
  },
  teaser: {
    undertittel: { no: "Innsikt, kunnskap og redaksjonell arbeidsflyt", en: "Insight, knowledge and editorial workflow" },
    intro: { no: "Modell for AI-assistert innsikts- og innholdsarbeid.", en: "Model for AI-assisted insight and content work." },
    blokker: {
      utfordring: { no: "Kunnskap blir fragmentert og vanskelig å omsette.", en: "Knowledge becomes fragmented and hard to translate." },
      bygget: { no: "Arbeidsflyt for rangering, vinkel og redaksjonelle utkast.", en: "Workflow for ranking, angle and editorial drafts." },
      relevans: { no: "Kunnskapsarbeid, lederkommunikasjon og faglig synlighet.", en: "Knowledge work, leadership communication and professional visibility." },
      status: { no: "Modell — ikke autonom publiseringsmotor.", en: "Model — not an autonomous publishing engine." },
    },
    videreutvikling: { no: "Rangering, kunnskapsbank og godkjenningsflyt.", en: "Ranking, knowledge base and approval flows." },
  },
  detail: {
    statusBadge: {
      no: "Modell og arbeidsflyt for AI-assistert innsiktsarbeid",
      en: "Model and workflow for AI-assisted insight work",
    },
    hero: {
      verdiforslag: {
        no: "Hvordan kan AI strukturere kunnskap og utvikle bedre innsikt og kommunikasjon?",
        en: "How can AI structure knowledge and develop better insight and communication?",
      },
      executiveSummary: {
        no: "Prosjektet er en strukturert arbeidsflyt for å samle, vurdere, rangere og bearbeide innsikt til bedre faglig innhold, lederkommunikasjon og beslutningsgrunnlag. Kjernen er innsiktsstruktur, kunnskapsarbeid og redaksjonell flyt — ikke automatisk tekstproduksjon. Løsningen er utviklet som modell og praktisk demonstrasjon med menneskelig redaktørkontroll.",
        en: "The project is a structured workflow to collect, assess, rank and process insight into better professional content, leadership communication and decision foundations. The core is insight structure, knowledge work and editorial flow — not automatic text production. The solution is developed as a model and practical demonstration with human editorial control.",
      },
      bildeAlt: {
        no: "AI-assistert innsikts- og innholdsmotor – modell og arbeidsflyt",
        en: "AI-assisted insight and content engine – model and workflow",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "Mange ledere, rådgivere og fagpersoner samler store mengder innsikt, rapporter, artikler, møtenotater og refleksjoner. Utfordringen er at kunnskapen ofte blir fragmentert, vanskelig å hente opp igjen og krevende å omsette til konkret kommunikasjon eller handling.",
        en: "Many leaders, advisers and professionals collect large volumes of insight, reports, articles, meeting notes and reflections. The challenge is that knowledge often becomes fragmented, hard to retrieve and demanding to translate into concrete communication or action.",
      },
    },
    logikk: {
      heading: { no: "Modellen og arbeidsflyten", en: "The model and workflow" },
      body: { no: "Innsiktsmotoren følger en redaksjonell arbeidsflyt i fem steg:", en: "The insight engine follows an editorial workflow in five steps:" },
      steps: [
        { tittel: { no: "Innsamling", en: "Collection" }, beskrivelse: { no: "Kilder og innsikt samles fra kunnskapsbank og eksterne kilder.", en: "Sources and insight are collected from knowledge base and external sources." } },
        { tittel: { no: "Vurdering", en: "Assessment" }, beskrivelse: { no: "Relevans og kvalitet vurderes og kategoriseres.", en: "Relevance and quality are assessed and categorised." } },
        { tittel: { no: "Vinkling", en: "Angle" }, beskrivelse: { no: "Mulige vinklinger og hovedbudskap identifiseres.", en: "Possible angles and core messages are identified." } },
        { tittel: { no: "Utkast", en: "Draft" }, beskrivelse: { no: "Strukturert utkast bygges som grunnlag for redaksjonell bearbeiding.", en: "Structured draft is built as a basis for editorial processing." } },
        { tittel: { no: "Redaktørkontroll", en: "Editorial control" }, beskrivelse: { no: "Menneskelig kvalitetssikring, tilpasning og godkjenning.", en: "Human quality assurance, adaptation and approval." } },
      ],
    },
    bygget: {
      heading: { no: "Hva som er utviklet", en: "What has been developed" },
      items: [
        { no: "Modell for innsiktsinnsamling og kategorisering", en: "Model for insight collection and categorisation" },
        { no: "Rangering av relevante kilder", en: "Ranking of relevant sources" },
        { no: "Forslag til hovedvinkel, overskrifter og utkast", en: "Suggestions for core angle, headlines and drafts" },
        { no: "Støtte for redaksjonell bearbeiding og publisering", en: "Support for editorial processing and publishing" },
        { no: "Grunnmotor for videre agentisk utvikling", en: "Core engine for further agentic development" },
      ],
    },
    moduler: {
      heading: { no: "Sentrale steg og komponenter", en: "Core steps and components" },
      modules: [
        { tittel: { no: "Kildeinnsikt", en: "Source insight" }, beskrivelse: { no: "Kobling mot eksisterende kunnskapsbank.", en: "Link to existing knowledge base." }, bygget: true },
        { tittel: { no: "Relevansvurdering", en: "Relevance assessment" }, beskrivelse: { no: "Rangering og scoring av kilder.", en: "Ranking and scoring of sources." }, bygget: true },
        { tittel: { no: "Utkastsgenerering", en: "Draft generation" }, beskrivelse: { no: "Strukturert utkast til redaksjonell viderebearbeiding.", en: "Structured draft for editorial further processing." }, bygget: true },
        { tittel: { no: "Redaksjonell QA", en: "Editorial QA" }, beskrivelse: { no: "Menneskelig kontroll før publisering eller deling.", en: "Human control before publishing or sharing." }, bygget: true },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan arbeidsflyten fungerer", en: "How the workflow works" },
      steps: [
        { tittel: { no: "Start", en: "Start" }, beskrivelse: { no: "Brukeren velger tema, problemstilling eller kilde.", en: "The user chooses topic, question or source." } },
        { tittel: { no: "Søk og vurder", en: "Search and assess" }, beskrivelse: { no: "Modellen søker i kunnskapsgrunnlag og vurderer relevans.", en: "The model searches the knowledge base and assesses relevance." } },
        { tittel: { no: "Bygg utkast", en: "Build draft" }, beskrivelse: { no: "Strukturert utkast foreslås for redaksjonell bearbeiding.", en: "Structured draft is suggested for editorial processing." } },
        { tittel: { no: "Tilpass og publiser", en: "Adapt and publish" }, beskrivelse: { no: "Redaktør tilpasser målgruppe, kanal og formål.", en: "Editor adapts audience, channel and purpose." } },
      ],
    },
    relevans: {
      heading: { no: "Mulige anvendelsesområder og relevans", en: "Possible application areas and relevance" },
      sections: [
        { tittel: { no: "Kunnskapsarbeid", en: "Knowledge work" }, tekst: { no: "Faginnhold, lederkommunikasjon, markedsinnsikt og intern læring.", en: "Professional content, leadership communication, market insight and internal learning." } },
        { tittel: { no: "For arbeidsgivere", en: "For employers" }, tekst: { no: "Viser hvordan AI kan strukturere faglig arbeid og gjøre innsikt mer operativ — uten autonom publisering.", en: "Shows how AI can structure professional work and make insight more operational — without autonomous publishing." } },
      ],
    },
    status: {
      heading: { no: "Status, modenhet og avgrensninger", en: "Status, maturity and limitations" },
      body: {
        no: "Utviklet modell og praktisk arbeidsflyt for AI-assistert innsiktsarbeid og innholdsutvikling med menneskelig redaktørkontroll. Ikke presentert som autonom publiseringsmotor eller implementert kundesystem.",
        en: "Developed model and practical workflow for AI-assisted insight work and content development with human editorial control. Not presented as an autonomous publishing engine or implemented client system.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Videreutvikling av modellen", en: "Further development of the model" },
        punkter: [
          { no: "Automatisert kildeinnhenting", en: "Automated source collection" },
          { no: "Bedre rangering og scoring", en: "Better ranking and scoring" },
          { no: "Redaksjonell kalender og godkjenningsflyt", en: "Editorial calendar and approval flows" },
          { no: "Flere innholdsformater", en: "More content formats" },
        ],
      },
      tilpasning: {
        heading: { no: "Tilpasning til funksjoner og bransjer", en: "Adaptation to functions and industries" },
        punkter: [
          { no: "Thought leadership og budskapsutvikling", en: "Thought leadership and messaging development" },
          { no: "Intern kunnskapsbase og fagmiljøer", en: "Internal knowledge base and professional communities" },
          { no: "Ledelse, salg, HR og profesjonelle tjenesteselskaper", en: "Leadership, sales, HR and professional services firms" },
        ],
      },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: {
        no: "Ta kontakt dersom du ønsker å diskutere hvordan AI kan gjøre kunnskapsbanker, faginnhold og lederkommunikasjon mer operativt.",
        en: "Get in touch if you would like to discuss how AI can make knowledge bases, professional content and leadership communication more operational.",
      },
    },
    utvikler,
  },
};
