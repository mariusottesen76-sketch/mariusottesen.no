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
        no: "En full-stack arbeidsflate som kobler deltakere, oppgaver, program, samtaler, økonomi og dokumenter — med AI-forslag som må godkjennes før lagring.",
        en: "A full-stack workspace that connects participants, tasks, programme, conversations, finance and documents — with AI suggestions that must be approved before saving.",
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
        no: "Quick Entry, Smart Paste og samtaleanalyse lar arrangøren registrere informasjon med naturlig språk. AI tolker ustrukturert innhold og foreslår strukturerte handlinger — for eksempel kan en bestilling foreslås som kostnadspost med riktig økonomisk status.\n\nFlyten er: ustrukturert informasjon → AI-forslag → oppgave, beslutning eller kostnad → forhåndsvisning → eksplisitt godkjenning → lagring.",
        en: "Quick Entry, Smart Paste and conversation analysis let the organiser register information in natural language. AI interprets unstructured content and suggests structured actions — for example, an order can be suggested as a cost item with the correct financial status.\n\nThe flow is: unstructured information → AI suggestion → task, decision or cost → preview → explicit approval → saved.",
      },
      after: {
        no: "AI foreslår — brukeren bestemmer.",
        en: "AI suggests — the user decides.",
      },
    },
    contentSections: [
      {
        heading: { no: "Samtale → handling", en: "Conversation → action" },
        body: {
          no: "Samarbeidsfunksjonen samler dialog som ellers forsvinner i SMS og e-post. Meldinger kan knyttes til oppgaver og kostnader, besvares i tråder og analyseres av AI — uten at endringer skjer uten godkjenning.",
          en: "The collaboration feature gathers dialogue that would otherwise be lost in SMS and email. Messages can be linked to tasks and costs, answered in threads and analysed by AI — without changes happening without approval.",
        },
        flowLine: {
          no: "Samtale\n→ strukturert informasjon\n→ oppgave / beslutning / kostnad\n→ ansvar\n→ oppfølging",
          en: "Conversation\n→ structured information\n→ task / decision / cost\n→ ownership\n→ follow-up",
        },
      },
      {
        heading: { no: "Arrangementsklarhet", en: "Event readiness" },
        body: {
          no: "Event Readiness vurderer status på tvers av deltakere, oppgaver, program, logistikk, beslutninger, risiko og økonomi. Motoren skiller datakvalitet fra planleggingsdekning, veier inn frister og blokkeringer, og prioriterer anbefalte neste aktiviteter.",
          en: "Event Readiness assesses status across participants, tasks, programme, logistics, decisions, risk and finance. The engine distinguishes data quality from planning coverage, weighs in deadlines and blockers, and prioritises recommended next activities.",
        },
        flowLine: {
          no: "Signal\n→ Konsekvens\n→ Prioritet\n→ Tiltak\n→ Ansvar\n→ Frist",
          en: "Signal\n→ Consequence\n→ Priority\n→ Action\n→ Ownership\n→ Deadline",
        },
      },
      {
        heading: { no: "Budsjett og økonomistyring", en: "Budget and financial control" },
        body: {
          no: "Budsjettmodulen følger økonomien gjennom fire nivåer: Godkjent budsjett → Prognose → Forpliktet → Faktisk.\n\nKostnadsposter knyttes til leverandører, oppgaver og samtaler. Quick Entry og samtaleanalyse kan foreslå nye poster, som først lagres etter godkjenning. Avvik og økonomiske signaler beregnes mot budsjett.",
          en: "The budget module tracks finance through four levels: Approved budget → Forecast → Committed → Actual.\n\nCost items are linked to suppliers, tasks and conversations. Quick Entry and conversation analysis can suggest new items, which are only saved after approval. Variance and financial signals are calculated against budget.",
        },
      },
      {
        heading: { no: "Tilpasset arrangementskontekst", en: "Adapted event context" },
        body: {
          no: "Event Planner bruker arrangementstype som kontekst — samme plattform støtter private feiringer og profesjonelle virksomhetsarrangementer som konferanse, messe, kundearrangement og kick-off. Reise & opphold aktiveres valgfritt når arrangementet krever det.",
          en: "Event Planner uses event type as context — the same platform supports private celebrations and professional business events such as conference, trade fair, customer event and kick-off. Travel & accommodation is activated optionally when the event requires it.",
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
        no: "Event Planner samler deltakere og RSVP, oppgaver, program, dokumenter, samtaler og økonomi i én arbeidsflate. Flere brukere samarbeider i sanntid med rollebasert tilgang.",
        en: "Event Planner brings participants and RSVP, tasks, programme, documents, conversations and finance together in one workspace. Multiple users collaborate in real time with role-based access.",
      },
      items: [],
    },
    moduler: {
      heading: { no: "Sentrale funksjonsområder", en: "Core functional areas" },
      modules: [
        {
          tittel: { no: "Planlegging og Event Readiness", en: "Planning and Event Readiness" },
          beskrivelse: {
            no: "Oversikt, planleggingsmangler og anbefalte neste aktiviteter på tvers av deltakere, oppgaver, program og økonomi.",
            en: "Overview, planning gaps and recommended next activities across participants, tasks, programme and finance.",
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
            no: "Quick Entry, Smart Paste og samtaleanalyse med forhåndsvisning før lagring.",
            en: "Quick Entry, Smart Paste and conversation analysis with preview before saving.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Budsjett og økonomistyring", en: "Budget and financial control" },
          beskrivelse: {
            no: "Godkjent budsjett, prognose, forpliktet og faktisk — med avvik, signaler og kobling til leverandører og samtaler.",
            en: "Approved budget, forecast, committed and actual — with variance, signals and links to suppliers and conversations.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Reise & opphold", en: "Travel & accommodation" },
          beskrivelse: {
            no: "Valgfri arbeidsflate for reisebehov, ankomst og avreise, hotell, transfer og ansvar for relevante deltakere.",
            en: "Optional workspace for travel needs, arrival and departure, hotel, transfer and ownership for relevant participants.",
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
        no: "Arrangøren bygger gradvis et datagrunnlag med deltakere, aktiviteter, økonomi og samarbeid. Readiness-motoren løfter frem mangler og anbefalte neste steg. AI-assistenten kan blant annet svare på:",
        en: "The organiser gradually builds a data foundation with participants, activities, finance and collaboration. The readiness engine surfaces gaps and recommended next steps. The AI assistant can among other things answer:",
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
        no: "Prosjektet utforsker hvordan generativ AI kan integreres i operativ arbeidsflyt — ikke som chatbot ved siden av, men som del av planlegging, samarbeid, beslutninger og gjennomføring.",
        en: "The project explores how generative AI can be integrated into operational workflow — not as a chatbot on the side, but as part of planning, collaboration, decisions and execution.",
      },
    },
    status: {
      heading: { no: "Status og modenhet", en: "Status and maturity" },
      body: {
        no: "Fungerende full-stack prototype · Private beta\n\nEvent Planner brukes i reell arrangementsplanlegging og har en offentlig skrivebeskyttet demo basert på fiktivt virksomhetscase. Løsningen er under aktiv testing og videreutvikling — ikke et ferdig kommersielt SaaS-produkt.",
        en: "Working full-stack prototype · Private beta\n\nEvent Planner is used in real event planning and has a public write-protected demo based on a fictional business event case. The solution is under active testing and further development — not a finished commercial SaaS product.",
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
