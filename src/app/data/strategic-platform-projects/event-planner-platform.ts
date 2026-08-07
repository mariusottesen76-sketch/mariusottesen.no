import type { StrategicPlatformProject } from "./types";
import { EVENT_PLANNER_HERO_IMAGE } from "../../lib/event-planner-brand";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "AI-strateg, konsept- og produktutvikler", en: "AI strategist, concept and product developer" },
  beskrivelse: {
    no: "Konsept, produktlogikk, arbeidsflyter og prototype er utviklet i skjæringspunktet mellom generativ AI, produktutvikling, brukeropplevelse og praktisk arrangementsstyring.",
    en: "Concept, product logic, workflows and prototype are developed at the intersection of generative AI, product development, user experience and practical event governance.",
  },
};

export const eventPlannerPlatform: StrategicPlatformProject = {
  slug: "event-planner",
  prosjektId: "event-planner-2026-08",
  detailPath: "/event-planner",
  meta: {
    title: {
      no: "Event Planner | AI-assistert arrangementsplanlegging | Marius Ottesen",
      en: "Event Planner | AI-assisted event planning | Marius Ottesen",
    },
    description: {
      no: "Event Planner kombinerer AI-assistert planlegging, samarbeid, Event Readiness, samtaler og økonomistyring i én arbeidsflate — fungerende full-stack prototype i private beta, med skrivebeskyttet demo.",
      en: "Event Planner combines AI-assisted planning, collaboration, Event Readiness, conversations and financial control in one workspace — working full-stack prototype in private beta, with write-protected demo.",
    },
    ogImage: EVENT_PLANNER_HERO_IMAGE,
    canonicalPath: "/event-planner",
  },
  teaser: {
    undertittel: {
      no: "AI-assistert planlegging, samarbeid og gjennomføring av arrangementer",
      en: "AI-assisted planning, collaboration and execution of events",
    },
    intro: {
      no: "Event Planner kombinerer generativ AI med strukturert prosjektlogikk for deltakere, oppgaver, program, samtaler, økonomi, dokumenter og arrangementsklarhet.",
      en: "Event Planner combines generative AI with structured project logic for participants, tasks, programme, conversations, finance, documents and event readiness.",
    },
    blokker: {
      utfordring: {
        no: "Arrangementer fragmenteres raskt mellom regneark, e-post, meldinger og parallelle sjekklister.",
        en: "Events quickly become fragmented across spreadsheets, email, messages and parallel checklists.",
      },
      bygget: {
        no: "Full-stack prototype med samarbeid, samtaler, Event Readiness, budsjett og skrivebeskyttet demo.",
        en: "Full-stack prototype with collaboration, conversations, Event Readiness, budget and write-protected demo.",
      },
      relevans: {
        no: "Viser hvordan generativ AI kan integreres i operativ arbeidsflyt — med menneskelig kontroll.",
        en: "Shows how generative AI can be integrated into operational workflow — with human control.",
      },
      status: {
        no: "Fungerende full-stack prototype · Private beta",
        en: "Working full-stack prototype · Private beta",
      },
    },
    videreutvikling: {
      no: "Videre potensial inkluderer maler, leverandør- og tilbudsoppfølging, varsler, integrasjoner, selvbetjent RSVP og rapportering etter gjennomføring.",
      en: "Further potential includes templates, supplier and quote follow-up, alerts, integrations, self-service RSVP and post-event reporting.",
    },
  },
  detail: {
    statusBadge: {
      no: "Fungerende full-stack prototype · Private beta",
      en: "Working full-stack prototype · Private beta",
    },
    hero: {
      verdiforslag: {
        no: "AI-assistert planlegging, samarbeid og gjennomføring av arrangementer",
        en: "AI-assisted planning, collaboration and execution of events",
      },
      executiveSummary: {
        no: "En full-stack arbeidsflate som kobler deltakere, oppgaver, program, samtaler, økonomi, dokumenter og proaktiv oppfølging – med AI integrert direkte i arbeidsflyten.",
        en: "A full-stack workspace that connects participants, tasks, programme, conversations, finance, documents and proactive follow-up — with AI integrated directly into the workflow.",
      },
      bildeAlt: {
        no: "Event Planner – AI-assistert arbeidsflate for planlegging, samarbeid og gjennomføring av arrangementer",
        en: "Event Planner – AI-assisted workspace for planning, collaboration and execution of events",
      },
    },
    kortFortalt: {
      heading: { no: "Hva prosjektet er", en: "What the project is" },
      body: {
        no: "Event Planner er en fungerende AI-assistert full-stack prototype for planlegging og gjennomføring av private og profesjonelle arrangementer. Løsningen samler informasjon, samarbeid og oppfølging i ett system og støtter reisen fra tidlig planlegging til arrangementsdagen.",
        en: "Event Planner is a working AI-assisted full-stack prototype for planning and execution of private and professional events. The solution brings information, collaboration and follow-up together in one system and supports the journey from early planning through event day.",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "Arrangementer blir raskt fragmentert mellom regneark, e-post, SMS, meldinger, dokumenter og separate sjekklister. Informasjonen finnes ofte, men sammenhengen mellom hva som er avtalt, hva som mangler, hvem som har ansvar, hva det koster og hva som bør skje videre blir svak.\n\nUtgangspunktet for prosjektet var derfor et enkelt spørsmål: Kan generativ AI integreres i selve arbeidsflyten og bidra til gjennomføring – ikke bare fungere som en chatbot ved siden av?",
        en: "Events quickly become fragmented across spreadsheets, email, SMS, messages, documents and separate checklists. The information often exists, but the connection between what is agreed, what is missing, who owns what, what it costs and what should happen next becomes weak.\n\nThe starting point for the project was therefore a simple question: Can generative AI be integrated into the workflow itself and contribute to execution — not just function as a chatbot on the side?",
      },
    },
    logikk: {
      heading: { no: "AI i arbeidsflyten", en: "AI in the workflow" },
      body: {
        no: "Quick Entry og Smart Paste gjør det mulig å registrere og oppdatere arrangementet med naturlig språk. AI kan tolke ustrukturerte meldinger og notater, identifisere eksisterende oppgaver, kostnader, leverandørvilkår, oppfølgingsbehov og beslutninger og foreslå strukturerte endringer.",
        en: "Quick Entry and Smart Paste make it possible to register and update the event with natural language. AI can interpret unstructured messages and notes, identify existing tasks, costs, supplier terms, follow-up needs and decisions, and suggest structured changes.",
      },
      after: {
        no: "AI foreslår – brukeren bestemmer.\n\nForslag forhåndsvises og må godkjennes før de påvirker arrangementets data – med menneskelig kontroll (human-in-the-loop).",
        en: "AI suggests — the user decides.\n\nSuggestions are previewed and must be approved before they affect the event's data — with human control (human-in-the-loop).",
      },
    },
    contentSections: [
      {
        heading: { no: "Samtale → handling", en: "Conversation → action" },
        body: {
          no: "Samarbeidsfunksjonen reduserer informasjonstap mellom SMS, e-post og andre eksterne kanaler. Meldinger kan knyttes til konkrete oppgaver og kostnader, besvares i tråder og analyseres av AI.\n\nInformasjon kan dermed omformes til forslag om oppdatert oppgave, kostnad, leverandørinformasjon, beslutningsbehov eller oppfølging – uten at AI gjør endringene på egen hånd.",
          en: "The collaboration feature reduces information loss between SMS, email and other external channels. Messages can be linked to specific tasks and cost items, answered in threads and analysed by AI.\n\nInformation can thus be transformed into suggestions for updated tasks, costs, supplier information, decision needs or follow-up — without AI making the changes on its own.",
        },
        flowLine: {
          no: "Samtale\n→ strukturert informasjon\n→ oppgave / beslutning / kostnad\n→ ansvar\n→ oppfølging",
          en: "Conversation\n→ structured information\n→ task / decision / cost\n→ ownership\n→ follow-up",
        },
      },
      {
        heading: { no: "Arrangementsklarhet og proaktiv oppfølging", en: "Event readiness and proactive follow-up" },
        body: {
          no: "Event Readiness vurderer arrangementets faktiske status på tvers av deltakere, oppgaver og ansvar, program, mat og praktiske behov, infrastruktur og logistikk, beslutninger og risiko samt budsjett og økonomi.\n\nMotoren skiller mellom datakvalitet og faktisk planleggingsdekning, tar hensyn til frister, blokkeringer og manglende ansvar og prioriterer et begrenset antall anbefalte neste aktiviteter.\n\nMålet er å flytte løsningen fra digital sjekkliste til proaktiv prosjektadministrasjon og beslutningsstøtte.",
          en: "Event Readiness assesses the event's actual status across participants, tasks and ownership, programme, food and practical needs, infrastructure and logistics, decisions and risk, and budget and finance.\n\nThe engine distinguishes between data quality and actual planning coverage, considers deadlines, blockers and missing ownership, and prioritises a limited set of recommended next activities.\n\nThe goal is to move the solution from digital checklist to proactive project administration and decision support.",
        },
        flowLine: {
          no: "Signal\n→ Konsekvens\n→ Prioritet\n→ Tiltak\n→ Ansvar\n→ Frist",
          en: "Signal\n→ Consequence\n→ Priority\n→ Action\n→ Ownership\n→ Deadline",
        },
      },
      {
        heading: { no: "Budsjett og økonomistyring", en: "Budget and financial control" },
        body: {
          no: "Budsjettmodulen følger økonomien gjennom fire nivåer: Godkjent budsjett → Prognose → Forpliktet → Faktisk.\n\nKostnadsposter kan knyttes til leverandører, oppgaver, samtaler og dokumentasjon. Event Planner beregner avvik mot budsjett og identifiserer signaler som mulig budsjettoverskridelse, manglende estimater og økonomiske usikkerheter.\n\nInformasjon fra en samtale kan foreslås som en strukturert kostnadspost, men lagres først etter brukerens godkjenning.",
          en: "The budget module tracks finance through four levels: Approved budget → Forecast → Committed → Actual.\n\nCost items can be linked to suppliers, tasks, conversations and documentation. Event Planner calculates variance against budget and identifies signals such as potential budget overrun, missing estimates and financial uncertainties.\n\nInformation from a conversation can be suggested as a structured cost item, but is only saved after user approval.",
        },
      },
      {
        heading: { no: "Tilpasset arrangementskontekst", en: "Adapted event context" },
        body: {
          no: "Event Planner skiller mellom private og virksomhetsrettede arrangementer og bruker arrangementstype som kontekst for planlegging, anbefalinger og relevante funksjoner.\n\nSamme plattform og datamodell brukes på tvers av blant annet bursdag, bryllup og konfirmasjon, samt konferanse, messe, kundearrangement, kick-off og ledersamling. Planleggingsfokus og funksjoner tilpasses konteksten, og funksjoner som Reise & opphold kan aktiveres når arrangementet krever det.",
          en: "Event Planner distinguishes between private and business-oriented events and uses event type as context for planning, recommendations and relevant features.\n\nThe same platform and data model are used across birthday, wedding and confirmation, as well as conference, trade fair, customer event, kick-off and leadership gathering. Planning focus and features are adapted to the context, and features such as Travel & accommodation can be activated when the event requires it.",
        },
      },
    ],
    datagrunnlag: {
      heading: { no: "Teknisk grunnlag", en: "Technical foundation" },
      body: {
        no: "React og TypeScript, server-side applikasjonslogikk, Google Cloud Run, Firebase Authentication, Firestore, Cloud Storage og Gemini. GitHub og Cloud Build brukes i produksjonsløpet, med privat datalagring, rollebasert tilgang og tydelig separasjon mellom offentlig demo og private arrangementer.",
        en: "React and TypeScript, server-side application logic, Google Cloud Run, Firebase Authentication, Firestore, Cloud Storage and Gemini. GitHub and Cloud Build are used in the production pipeline, with private data storage, role-based access and clear separation between public demo and private events.",
      },
    },
    bygget: {
      heading: { no: "Hva som er bygget", en: "What has been built" },
      body: {
        no: "Event Planner samler deltakere og RSVP, oppgaver og ansvar, program, dokumenter, samtaler og økonomi i én arrangementsbasert arbeidsflate. Flere brukere samarbeider i sanntid med rollebasert tilgang, mens AI-assistert registrering, analyse og proaktiv oppfølging arbeider på det samme strukturerte datagrunnlaget.",
        en: "Event Planner brings participants and RSVP, tasks and ownership, programme, documents, conversations and finance together in one event-based workspace. Multiple users collaborate in real time with role-based access, while AI-assisted registration, analysis and proactive follow-up work on the same structured data foundation.",
      },
      items: [],
    },
    moduler: {
      heading: { no: "Sentrale funksjonsområder", en: "Core functional areas" },
      modules: [
        {
          tittel: { no: "Planlegging og Event Readiness", en: "Planning and Event Readiness" },
          beskrivelse: {
            no: "Oversikt, planleggingsmangler, anbefalte neste aktiviteter og proaktiv oppfølging på tvers av deltakere, oppgaver, program og økonomi.",
            en: "Overview, planning gaps, recommended next activities and proactive follow-up across participants, tasks, programme and finance.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Samarbeid og samtaler", en: "Collaboration and conversations" },
          beskrivelse: {
            no: "Sanntidssamarbeid, trådede samtaler, kobling til oppgaver og kostnader, aktivitetsindikatorer og direktenavigasjon.",
            en: "Real-time collaboration, threaded conversations, linking to tasks and costs, activity indicators and direct navigation.",
          },
          bygget: true,
        },
        {
          tittel: { no: "AI og menneskelig kontroll", en: "AI and human control" },
          beskrivelse: {
            no: "Quick Entry, Smart Paste og AI-forslag med forhåndsvisning og eksplisitt godkjenning før lagring.",
            en: "Quick Entry, Smart Paste and AI suggestions with preview and explicit approval before saving.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Budsjett og økonomistyring", en: "Budget and financial control" },
          beskrivelse: {
            no: "Godkjent budsjett, prognose, forpliktet og faktisk – med avvik, signaler og kobling til leverandører og samtaler.",
            en: "Approved budget, forecast, committed and actual — with variance, signals and links to suppliers and conversations.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Deltakere, program og gjennomføring", en: "Participants, programme and execution" },
          beskrivelse: {
            no: "RSVP, grupper og husholdninger, behov og allergier, program og kjøreplan, oppgavefordeling og private dokumenter samlet rundt samme arrangement.",
            en: "RSVP, groups and households, needs and allergies, programme and run sheet, task allocation and private documents gathered around the same event.",
          },
          bygget: true,
        },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan løsningen fungerer", en: "How the solution works" },
      intro: {
        no: "Arrangøren bygger gradvis et strukturert datagrunnlag med deltakere, aktiviteter, økonomi og samarbeid. Dashbord og readiness-motor analyserer status og løfter frem mangler og anbefalte neste aktiviteter.\n\nAI-assistenten arbeider på toppen av det samme datagrunnlaget og kan blant annet hjelpe med spørsmål som:",
        en: "The organiser gradually builds a structured data foundation with participants, activities, finance and collaboration. Dashboard and readiness engine analyse status and surface gaps and recommended next activities.\n\nThe AI assistant works on top of the same data foundation and can help with questions such as:",
      },
      detaljpunkter: [
        { no: "Hva bør vi prioritere nå?", en: "What should we prioritise now?" },
        { no: "Hva blokkerer oss?", en: "What is blocking us?" },
        { no: "Hvem mangler ansvar?", en: "Who is missing ownership?" },
        { no: "Hvor er de største økonomiske usikkerhetene?", en: "Where are the greatest financial uncertainties?" },
        { no: "Er vi klare til arrangementet?", en: "Are we ready for the event?" },
      ],
    },
    relevans: {
      heading: { no: "Relevans", en: "Relevance" },
      body: {
        no: "Prosjektet utforsker hvordan generativ AI kan flyttes fra en separat chatbot til en integrert del av en operativ arbeidsprosess. Event Planner kombinerer generativ AI med deterministisk produktlogikk, strukturerte data, tilgangsstyring og menneskelig kontroll.\n\nCaset handler derfor ikke bare om å bygge en AI-applikasjon, men om hvordan arbeidsflyt, samarbeid, beslutninger og gjennomføring kan redesignes når AI blir en integrert del av systemet.",
        en: "The project explores how generative AI can move from a separate chatbot to an integrated part of an operational workflow. Event Planner combines generative AI with deterministic product logic, structured data, access control and human control.\n\nThe case is therefore not just about building an AI application, but about how workflow, collaboration, decisions and execution can be redesigned when AI becomes an integrated part of the system.",
      },
    },
    status: {
      heading: { no: "Status og modenhet", en: "Status and maturity" },
      body: {
        no: "Fungerende full-stack prototype · Private beta\n\nEvent Planner brukes i reell arrangementsplanlegging og har samtidig en offentlig skrivebeskyttet demo med fiktive data. Løsningen er et produkt- og porteføljeprosjekt under aktiv testing og videreutvikling – ikke et ferdig kommersielt SaaS-produkt.",
        en: "Working full-stack prototype · Private beta\n\nEvent Planner is used in real event planning and also has a public write-protected demo with fictional data. The solution is a product and portfolio project under active testing and further development — not a finished commercial SaaS product.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling", en: "Further development" },
      platform: {
        heading: { no: "Mulig videreutvikling", en: "Possible further development" },
        punkter: [
          { no: "Ferdige maler for ulike arrangementstyper", en: "Ready-made templates for different event types" },
          { no: "Leverandør- og tilbudsoppfølging", en: "Supplier and quote follow-up" },
          { no: "Automatiske varsler og påminnelser", en: "Automatic alerts and reminders" },
          { no: "Kalender- og e-postintegrasjoner", en: "Calendar and email integrations" },
          { no: "Selvbetjent RSVP for inviterte deltakere", en: "Self-service RSVP for invited participants" },
          { no: "Reise & opphold som utvidet arbeidsflate", en: "Travel & accommodation as extended workspace" },
          { no: "Rapportering og erfaringsoppsummering etter gjennomføring", en: "Reporting and experience summary after execution" },
        ],
      },
      tilpasning: {
        heading: { no: "Tilpasning til arrangementstyper", en: "Adaptation to event types" },
        punkter: [
          { no: "Private arrangementer og feiringer", en: "Private events and celebrations" },
          { no: "Konferanser, seminarer og kundearrangementer", en: "Conferences, seminars and customer events" },
          { no: "Messer og utstillinger", en: "Trade fairs and exhibitions" },
          { no: "Kick-offs, team- og ledersamlinger", en: "Kick-offs, team and leadership gatherings" },
          { no: "Workshops, kurs og lanseringer", en: "Workshops, courses and launches" },
        ],
        note: {
          no: "Tilpasning skjer gjennom konfigurerbar produktlogikk — ikke som egne spesialversjoner av appen.",
          en: "Adaptation happens through configurable product logic — not as separate special versions of the app.",
        },
      },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: {
        no: "Se demoen for å utforske arbeidsflyten og sentrale funksjoner, eller ta kontakt for tilgang til private beta.",
        en: "View the demo to explore the workflow and core features, or get in touch for access to the private beta.",
      },
    },
    utvikler,
  },
};
