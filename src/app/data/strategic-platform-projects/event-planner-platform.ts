import type { StrategicPlatformProject } from "./types";
import { EVENT_PLANNER_HERO_IMAGE } from "../../lib/event-planner-brand";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "AI-strateg, konsept- og produktutvikler", en: "AI strategist, concept and product developer" },
  beskrivelse: {
    no: "Konsept, produktlogikk, arbeidsflyter og prototype er utviklet i skjæringspunktet mellom generativ AI, brukeropplevelse og praktisk arrangementsstyring. Utviklingen har vært AI-assistert, med Google AI Studio som utviklingsmiljø og ChatGPT brukt som sparringspartner for produktstruktur, krav, QA og utviklingsprompter.",
    en: "Concept, product logic, workflows and prototype are developed at the intersection of generative AI, user experience and practical event governance. Development has been AI-assisted, with Google AI Studio as the development environment and ChatGPT used as a sparring partner for product structure, requirements, QA and development prompts.",
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
      no: "Event Planner samler deltakere, oppgaver, ansvar, program, filer og AI-assistert oppfølging i én arbeidsflate — fungerende full-stack prototype i private beta.",
      en: "Event Planner brings participants, tasks, ownership, programme, files and AI-assisted follow-up together in one workspace — working full-stack prototype in private beta.",
    },
    ogImage: EVENT_PLANNER_HERO_IMAGE,
    canonicalPath: "/event-planner",
  },
  teaser: {
    undertittel: {
      no: "AI-assistert planlegging, koordinering og gjennomføring av arrangementer",
      en: "AI-assisted planning, coordination and execution of events",
    },
    intro: {
      no: "Event Planner samler deltakere, RSVP, oppgaver, ansvar, program, filer og planleggingsbehov i én arbeidsflate — med naturlig språk, Smart Paste og flerbrukersamarbeid.",
      en: "Event Planner brings participants, RSVP, tasks, ownership, programme, files and planning needs together in one workspace — with natural language, Smart Paste and multi-user collaboration.",
    },
    blokker: {
      utfordring: {
        no: "Arrangementsplanlegging fragmenteres ofte mellom Excel, e-post, meldinger og ulike sjekklister — uten tydelig oversikt over ansvar, frister og blokkeringer.",
        en: "Event planning is often fragmented across spreadsheets, email, messages and separate checklists — without clear overview of ownership, deadlines and blockers.",
      },
      bygget: {
        no: "Fungerende full-stack prototype i private beta — med permanent datalagring, autentisering, private filer, AI-assistert registrering og rollebasert samarbeid.",
        en: "Working full-stack prototype in private beta — with persistent storage, authentication, private files, AI-assisted registration and role-based collaboration.",
      },
      relevans: {
        no: "Viser hvordan generativ AI kan integreres i operativ arbeidsflyt — med kontrollert AI, forhåndsvisning og brukerbekreftelse før lagring.",
        en: "Shows how generative AI can be integrated into operational workflow — with controlled AI, preview and user confirmation before saving.",
      },
      status: {
        no: "Fungerende full-stack prototype · Private beta — portefølje- og utviklingsprosjekt, ikke kommersielt SaaS.",
        en: "Working full-stack prototype · Private beta — portfolio and development project, not commercial SaaS.",
      },
    },
    videreutvikling: {
      no: "Videre potensial inkluderer arrangementmaler, budsjett- og kostnadsstyring, leverandør- og tilbudsoppfølging, varsler, integrasjoner, selvbetjent RSVP og rapportering etter gjennomføring.",
      en: "Further potential includes event templates, budget and cost management, supplier and quote follow-up, alerts, integrations, self-service RSVP and post-event reporting.",
    },
  },
  detail: {
    statusBadge: {
      no: "Fungerende full-stack prototype · Private beta",
      en: "Working full-stack prototype · Private beta",
    },
    hero: {
      verdiforslag: {
        no: "Planlegg. Fordel ansvar. Følg opp.",
        en: "Plan. Assign ownership. Follow up.",
      },
      executiveSummary: {
        no: "Event Planner er en AI-assistert planleggings- og gjennomføringsløsning som samler deltakere, RSVP, oppgaver, ansvar, program, filer og planleggingsbehov i én arbeidsflate. Naturlig språk, Smart Paste og intelligent import gjør det mulig å strukturere og oppdatere informasjon raskt, mens tilgangsstyring, roller og sanntidsoppdatering støtter samarbeid mellom flere arrangører.",
        en: "Event Planner is an AI-assisted planning and execution solution that brings participants, RSVP, tasks, ownership, programme, files and planning needs together in one workspace. Natural language, Smart Paste and intelligent import make it possible to structure and update information quickly, while access control, roles and real-time updates support collaboration between multiple organisers.",
      },
      bildeAlt: {
        no: "Event Planner – AI-assistert arbeidsflate for planlegging, deltakere, oppgaver og gjennomføring av arrangementer",
        en: "Event Planner – AI-assisted workspace for planning, participants, tasks and execution of events",
      },
    },
    kortFortalt: {
      heading: { no: "Kort fortalt", en: "In brief" },
      body: {
        no: "Event Planner er en AI-assistert full-stack applikasjon for planlegging og gjennomføring av private og profesjonelle arrangementer. Løsningen gir én samlet arbeidsflate for deltakere, RSVP, oppgaver, ansvar, program, filer og neste aktiviteter — med permanent datalagring, sanntidsoppdatering, flerbrukersamarbeid og kontrollert AI der brukeren forhåndsviser og godkjenner endringer før lagring. En read-only demo gjør det mulig å utforske arbeidsflyten og sentrale funksjoner uten tilgang til produksjonsdata eller mulighet til å lagre endringer.",
        en: "Event Planner is an AI-assisted full-stack application for planning and execution of private and professional events. The solution provides one shared workspace for participants, RSVP, tasks, ownership, programme, files and next activities — with persistent storage, real-time updates, multi-user collaboration and controlled AI where the user previews and approves changes before saving. A read-only demo makes it possible to explore the workflow and core features without access to production data or the ability to save changes.",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "Arrangementsplanlegging blir raskt fragmentert mellom Excel, e-post, meldinger, dokumenter og ulike sjekklister. Informasjonen finnes ofte, men det er vanskeligere å vite hva som mangler, hvem som har ansvar, hvilke frister som nærmer seg og hvilke aktiviteter som blokkerer andre.\n\nEvent Planner er utviklet for å samle denne informasjonen og gjøre planleggingen mer operativ. Målet er mindre administrasjon, tydeligere ansvar og bedre kontroll frem mot gjennomføring.",
        en: "Event planning quickly becomes fragmented across spreadsheets, email, messages, documents and separate checklists. The information often exists, but it is harder to know what is missing, who owns what, which deadlines are approaching and which activities block others.\n\nEvent Planner is built to bring this information together and make planning more operational. The goal is less administration, clearer ownership and better control towards execution.",
      },
    },
    logikk: {
      heading: { no: "AI i praksis og produktlogikk", en: "AI in practice and product logic" },
      body: {
        no: "Event Planner kombinerer deterministisk produktlogikk med generativ AI. Gemini brukes som AI-motor for naturlig språk, strukturering og arrangementsassistanse, mens regelbaserte komponenter sikrer konsistens der dataintegritet er viktig.",
        en: "Event Planner combines deterministic product logic with generative AI. Gemini is used as the AI engine for natural language, structuring and event assistance, while rule-based components ensure consistency where data integrity matters.",
      },
      steps: [
        {
          tittel: { no: "Natural-language actions", en: "Natural-language actions" },
          beskrivelse: {
            no: "Brukeren kan registrere eller oppdatere deltakere, oppgaver og program med naturlig språk.",
            en: "The user can register or update participants, tasks and programme with natural language.",
          },
        },
        {
          tittel: { no: "Smart Paste", en: "Smart Paste" },
          beskrivelse: {
            no: "Ustrukturert tekst tolkes til strukturerte forslag med forhåndsvisning før lagring.",
            en: "Unstructured text is interpreted into structured suggestions with a preview before saving.",
          },
        },
        {
          tittel: { no: "Intelligent Excel / CSV-import", en: "Intelligent Excel / CSV import" },
          beskrivelse: {
            no: "Kolonner, statusverdier, relasjoner og deltaendringer analyseres og normaliseres.",
            en: "Columns, status values, relationships and delta changes are analysed and normalised.",
          },
        },
        {
          tittel: { no: "Prioritering og planleggingsanalyse", en: "Prioritisation and planning analysis" },
          beskrivelse: {
            no: "Oppgaver, mangler, frister og avhengigheter analyseres mot arrangementets faktiske data.",
            en: "Tasks, gaps, deadlines and dependencies are analysed against the event's actual data.",
          },
        },
      ],
      after: {
        no: "AI foreslår strukturerte handlinger, mens brukeren kontrollerer og godkjenner før lagring.",
        en: "AI suggests structured actions, while the user controls and approves before saving.",
      },
    },
    datagrunnlag: {
      heading: { no: "Teknisk grunnlag", en: "Technical foundation" },
      body: {
        no: "Event Planner er utviklet med React/TypeScript og serverbasert applikasjonslogikk, deployet på Google Cloud Run. Firebase Authentication og Firestore håndterer tilgangsstyring, permanent datalagring og sanntidsoppdatering. Private filer lagres i Cloud Storage. Gemini fungerer som AI-motor, secrets håndteres separat fra klienten, og produksjonsflyten går via GitHub og Cloud Build.\n\nArkitekturen kombinerer generativ AI, deterministisk produktlogikk, sikker tilgangsstyring og human-in-the-loop — der AI foreslår strukturerte handlinger som brukeren forhåndsviser og godkjenner før lagring.",
        en: "Event Planner is developed with React/TypeScript and server-based application logic, deployed on Google Cloud Run. Firebase Authentication and Firestore handle access control, persistent data storage and real-time updates. Private files are stored in Cloud Storage. Gemini serves as the AI engine, secrets are handled separately from the client, and the production pipeline runs via GitHub and Cloud Build.\n\nThe architecture combines generative AI, deterministic product logic, secure access control and human-in-the-loop — where AI suggests structured actions that the user previews and approves before saving.",
      },
    },
    bygget: {
      heading: { no: "Hva som er bygget eller utviklet", en: "What has been built or developed" },
      items: [
        { no: "Arrangementsoversikt med nøkkeltall, planleggingsmangler og anbefalte neste aktiviteter", en: "Event overview with key metrics, planning gaps and recommended next activities" },
        { no: "Deltakere og RSVP med grupper, par/husholdninger, ledsagere, roller, allergier og deltakelsesform", en: "Participants and RSVP with groups, couples/households, companions, roles, allergies and participation mode" },
        { no: "Oppgaver og ansvar med frist, prioritet, status, kategori og avhengigheter", en: "Tasks and ownership with deadline, priority, status, category and dependencies" },
        { no: "Program og kjøreplan for planlegging og operativ bruk", en: "Programme and run sheet for planning and operational use" },
        { no: "Quick Entry og naturlig språk med forhåndsvisning og eksplisitt godkjenning", en: "Quick Entry and natural language with preview and explicit approval" },
        { no: "Smart Paste og intelligent Excel/CSV-import", en: "Smart Paste and intelligent Excel/CSV import" },
        { no: "Private filer, invitasjoner og arrangementsbilder", en: "Private files, invitations and event images" },
        { no: "Rollebasert samarbeid og sanntidslagring for flerbrukerarbeid", en: "Role-based collaboration and real-time storage for multi-user work" },
      ],
    },
    moduler: {
      heading: { no: "Sentrale moduler og funksjonsområder", en: "Core modules and functional areas" },
      intro: {
        no: "Event Planner er bygget rundt en generell arrangementsmodell som kan konfigureres per arrangementstype.",
        en: "Event Planner is built around a general event model that can be configured per event type.",
      },
      modules: [
        { tittel: { no: "Arrangement og oversikt", en: "Event and overview" }, beskrivelse: { no: "Dashboard med nøkkeltall, planleggingsmangler, nedtelling og anbefalte neste aktiviteter.", en: "Dashboard with key metrics, planning gaps, countdown and recommended next activities." }, bygget: true },
        { tittel: { no: "Deltakere og RSVP", en: "Participants and RSVP" }, beskrivelse: { no: "Deltakerregister med grupper, par/husholdninger, ledsagere, roller, allergier, sitteplass og deltakelsesform — inkludert reise og opphold der det er relevant.", en: "Participant register with groups, couples/households, companions, roles, allergies, seating and participation mode — including travel and accommodation where relevant." }, bygget: true },
        { tittel: { no: "Oppgaver og ansvar", en: "Tasks and ownership" }, beskrivelse: { no: "Oppgaver med ansvarlig, frist, prioritet, status, kategori og avhengigheter.", en: "Tasks with owner, deadline, priority, status, category and dependencies." }, bygget: true },
        { tittel: { no: "Program og kjøreplan", en: "Programme and run sheet" }, beskrivelse: { no: "Kronologisk program for planlegging og operativ bruk på arrangementsdagen.", en: "Chronological programme for planning and operational use on event day." }, bygget: true },
        { tittel: { no: "Quick Entry, Smart Paste og naturlig språk", en: "Quick Entry, Smart Paste and natural language" }, beskrivelse: { no: "Ustrukturert tekst og naturlig språk tolkes til forslag med forhåndsvisning og eksplisitt godkjenning.", en: "Unstructured text and natural language are interpreted into suggestions with preview and explicit approval." }, bygget: true },
        { tittel: { no: "Intelligent Excel / CSV-import", en: "Intelligent Excel / CSV import" }, beskrivelse: { no: "Analyse av kolonner, statusverdier, relasjoner og deltaendringer ved import.", en: "Analysis of columns, status values, relationships and delta changes on import." }, bygget: true },
        { tittel: { no: "Filer, invitasjoner og media", en: "Files, invitations and media" }, beskrivelse: { no: "Private filer, arrangementsinvitasjoner og arrangementsbilder med tilgangsstyring.", en: "Private files, event invitations and event images with access control." }, bygget: true },
        { tittel: { no: "Samarbeid og tilgang", en: "Collaboration and access" }, beskrivelse: { no: "Flerbrukerarbeid med separat applikasjonstilgang og arrangementstilgang. Nye private-beta-brukere aktiveres én gang, mens konkrete arrangementer deles gjennom sikre invitasjonslenker med roller for eier, redigerer og leser.", en: "Multi-user work with separate application access and event access. New private-beta users are activated once, while specific events are shared through secure invitation links with roles for owner, editor and reader." }, bygget: true },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan løsningen fungerer", en: "How the solution works" },
      intro: {
        no: "Brukerreisen følger fem steg fra opprettelse til gjennomføring.",
        en: "The user journey follows five steps from creation to execution.",
      },
      steps: [
        { tittel: { no: "Opprett arrangement", en: "Create event" }, beskrivelse: { no: "Navn, type, dato, sted, tema og grunnleggende rammer.", en: "Name, type, date, venue, theme and basic parameters." } },
        { tittel: { no: "Bygg arrangementsgrunnlaget", en: "Build the event foundation" }, beskrivelse: { no: "Deltakere, oppgaver, program og annen informasjon registreres manuelt, importeres eller legges inn med naturlig språk.", en: "Participants, tasks, programme and other information are entered manually, imported or added with natural language." } },
        { tittel: { no: "Fordel ansvar", en: "Assign ownership" }, beskrivelse: { no: "Oppgaver knyttes til ansvarlige med frister, prioritet og avhengigheter.", en: "Tasks are linked to owners with deadlines, priority and dependencies." } },
        { tittel: { no: "Følg opp og prioriter", en: "Follow up and prioritise" }, beskrivelse: { no: "Dashboard og AI-assistent identifiserer mangler, hastverk og blokkeringer.", en: "Dashboard and AI assistant identify gaps, urgency and blockers." } },
        { tittel: { no: "Gjennomfør", en: "Execute" }, beskrivelse: { no: "Program, oppgaver og løpende status gir operativ arbeidsflate på arrangementsdagen.", en: "Programme, tasks and ongoing status provide an operational workspace on event day." } },
      ],
    },
    relevans: {
      heading: { no: "Anvendelse og relevans", en: "Application and relevance" },
      sections: [
        { tittel: { no: "For private arrangører", en: "For private organisers" }, tekst: { no: "Kan gi bedre oversikt over deltakere, oppgaver, program og ansvar — uten parallelle regneark og meldings-tråder.", en: "Can provide better overview of participants, tasks, programme and ownership — without parallel spreadsheets and message threads." } },
        { tittel: { no: "For HR, marked og administrasjon", en: "For HR, marketing and administration" }, tekst: { no: "Relevant for firmafester, kundearrangementer, kick-offs, møter og medarbeiderarrangementer.", en: "Relevant for company parties, customer events, kick-offs, meetings and employee events." } },
        { tittel: { no: "Som AI-prosjekt i porteføljen", en: "As an AI project in the portfolio" }, tekst: { no: "Viser integrasjon av generativ AI i operativ arbeidsflyt — produktutvikling, datamodellering og praktisk gjennomføring i én løsning.", en: "Shows integration of generative AI into operational workflow — product development, data modelling and practical execution in one solution." } },
      ],
    },
    effektomrader: {
      heading: { no: "Aktuelle effektområder", en: "Relevant effect areas" },
      punkter: [
        { no: "Kan bidra til bedre oversikt over planlegging og gjennomføring", en: "Can contribute to better overview of planning and execution" },
        { no: "Kan gi tydeligere ansvar og oppfølging", en: "Can provide clearer ownership and follow-up" },
        { no: "Kan redusere manuell administrasjon og dobbeltregistrering", en: "Can reduce manual administration and duplicate entry" },
        { no: "Kan gi raskere oppdatering av informasjon på tvers av arrangører", en: "Can enable faster information updates across organisers" },
        { no: "Kan styrke kontroll på frister og avhengigheter", en: "Can strengthen control of deadlines and dependencies" },
        { no: "Kan redusere behovet for parallelle regneark og sjekklister", en: "Can reduce the need for parallel spreadsheets and checklists" },
        { no: "Kan støtte bedre koordinering mellom interne og eksterne ansvarlige", en: "Can support better coordination between internal and external owners" },
        { no: "Kan gi mer strukturert gjennomføring frem mot arrangementsdagen", en: "Can provide more structured execution towards event day" },
      ],
    },
    anvendelsesformat: {
      heading: { no: "Eksempler på arrangementstyper", en: "Examples of event types" },
      steg: [
        { tittel: { no: "Firmafester og kundearrangementer", en: "Company parties and customer events" }, beskrivelse: { no: "Grupper som Kunder, Ansatte, Partnere og Leverandører kan konfigureres per arrangement.", en: "Groups such as Customers, Employees, Partners and Suppliers can be configured per event." } },
        { tittel: { no: "Møter, kick-offs og konferanser", en: "Meetings, kick-offs and conferences" }, beskrivelse: { no: "Program, ansvar og oppfølging samles i én operativ arbeidsflate.", en: "Programme, ownership and follow-up are brought together in one operational workspace." } },
        { tittel: { no: "Private arrangementer", en: "Private events" }, beskrivelse: { no: "Bryllup, bursdager, jubileer og konfirmasjoner med tilpassbare deltakergrupper og roller.", en: "Weddings, birthdays, anniversaries and confirmations with adaptable participant groups and roles." } },
        { tittel: { no: "Foreninger og SMB", en: "Associations and SMBs" }, beskrivelse: { no: "Generell modell med konfigurerbare planleggingsprinsipper — ikke egne spesialversjoner.", en: "General model with configurable planning principles — not separate special versions." } },
      ],
    },
    status: {
      heading: { no: "Status, modenhet og avgrensninger", en: "Status, maturity and limitations" },
      body: {
        no: "Event Planner er bygget som en fungerende full-stack prototype og lukket private beta med permanent datalagring, autentisering, privat filhåndtering og rollebasert flerbrukersamarbeid. En separat read-only demo bruker fiktive data og gir innsyn i produktets arbeidsflyt uten tilgang til private arrangementer.\n\nLøsningen er fortsatt et portefølje- og utviklingsprosjekt, ikke et ferdig kommersielt SaaS-produkt med betalende kunder. Den er heller ikke utviklet som billett-, betalings- eller markedsføringsplattform.",
        en: "Event Planner is built as a working full-stack prototype and closed private beta with persistent storage, authentication, private file handling and role-based multi-user collaboration. A separate read-only demo uses fictional data and provides insight into the product workflow without access to private events.\n\nThe solution remains a portfolio and development project, not a finished commercial SaaS product with paying customers. It is also not developed as a ticketing, payment or marketing platform.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Mulig videreutvikling", en: "Possible further development" },
        punkter: [
          { no: "Ferdige maler for ulike arrangementstyper", en: "Ready-made templates for different event types" },
          { no: "Budsjett- og kostnadsstyring", en: "Budget and cost management" },
          { no: "Leverandør- og tilbudsoppfølging", en: "Supplier and quote follow-up" },
          { no: "Automatiske varsler og påminnelser", en: "Automatic alerts and reminders" },
          { no: "Kalender- og e-postintegrasjoner", en: "Calendar and email integrations" },
          { no: "Selvbetjent RSVP for inviterte deltakere", en: "Self-service RSVP for invited participants" },
          { no: "Rapportering og erfaringsoppsummering etter gjennomføring", en: "Reporting and experience summary after execution" },
        ],
      },
      tilpasning: {
        heading: { no: "Tilpasning til arrangementstyper og bransjer", en: "Adaptation to event types and industries" },
        punkter: [
          { no: "Firmafester, kundearrangementer og kick-offs", en: "Company parties, customer events and kick-offs" },
          { no: "Møter, samlinger og konferanser", en: "Meetings, gatherings and conferences" },
          { no: "Bryllup, bursdager, jubileer og konfirmasjoner", en: "Weddings, birthdays, anniversaries and confirmations" },
          { no: "Forenings- og klubbarrangementer", en: "Association and club events" },
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
        no: "Se demoen for å utforske arbeidsflyten og sentrale funksjoner, eller ta kontakt for tilgang til private beta og faglig dialog om videreutvikling.",
        en: "View the demo to explore the workflow and core features, or get in touch for access to the private beta and professional dialogue on further development.",
      },
    },
    utvikler,
  },
};
