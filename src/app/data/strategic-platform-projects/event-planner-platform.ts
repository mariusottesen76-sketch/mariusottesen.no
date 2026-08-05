import type { StrategicPlatformProject } from "./types";

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
      no: "Event Planner samler deltakere, oppgaver, ansvar, program og AI-assistert oppfølging i én arbeidsflate for private og profesjonelle arrangementer.",
      en: "Event Planner brings participants, tasks, ownership, programme and AI-assisted follow-up together in one workspace for private and professional events.",
    },
    ogImage: "/images/event-planner-hero.png?v=20260804f",
    canonicalPath: "/event-planner",
  },
  teaser: {
    undertittel: {
      no: "AI-assistert planlegging, koordinering og oppfølging av arrangementer",
      en: "AI-assisted planning, coordination and follow-up for events",
    },
    intro: {
      no: "Event Planner samler deltakere, oppgaver, ansvar, program, dokumenter og løpende beslutninger i én felles arbeidsflate — med AI-assistanse for strukturering, import og prioritering.",
      en: "Event Planner brings participants, tasks, ownership, programme, documents and ongoing decisions together in one shared workspace — with AI assistance for structuring, import and prioritisation.",
    },
    blokker: {
      utfordring: {
        no: "Arrangementsplanlegging fragmenteres ofte mellom Excel, e-post, meldinger og ulike sjekklister — uten tydelig oversikt over ansvar, frister og blokkeringer.",
        en: "Event planning is often fragmented across spreadsheets, email, messages and separate checklists — without clear overview of ownership, deadlines and blockers.",
      },
      bygget: {
        no: "Fungerende v1-prototype med dashboard, deltakere og RSVP, oppgaver og ansvar, program, Smart Paste, Excel/CSV-import, AI-prioritering og samarbeid i sanntid.",
        en: "Working v1 prototype with dashboard, participants and RSVP, tasks and ownership, programme, Smart Paste, Excel/CSV import, AI prioritisation and real-time collaboration.",
      },
      relevans: {
        no: "Viser hvordan generativ AI kan integreres i operativ arbeidsflyt — fra ustrukturert informasjon til strukturerte data og prioritering.",
        en: "Shows how generative AI can be integrated into operational workflow — from unstructured information to structured data and prioritisation.",
      },
      status: {
        no: "Ferdig bygget v1 · Fungerende prototype — ikke presentert som kommersielt SaaS-produkt.",
        en: "Built v1 · Working prototype — not presented as a commercial SaaS product.",
      },
    },
    videreutvikling: {
      no: "Videre potensial inkluderer arrangementmaler, budsjettstyring, leverandør- og tilbudsoppfølging, varsler, integrasjoner og rapportering etter gjennomføring.",
      en: "Further potential includes event templates, budget management, supplier and quote follow-up, alerts, integrations and post-event reporting.",
    },
  },
  detail: {
    statusBadge: {
      no: "Ferdig bygget v1 · Fungerende prototype",
      en: "Built v1 · Working prototype",
    },
    hero: {
      verdiforslag: {
        no: "Planlegg. Fordel ansvar. Følg opp.",
        en: "Plan. Assign ownership. Follow up.",
      },
      executiveSummary: {
        no: "Event Planner er utviklet for å redusere fragmenteringen som ofte oppstår når arrangementer planlegges gjennom regneark, meldinger, e-post, notater og separate sjekklister. Løsningen kombinerer strukturert arrangementsstyring med AI-assistert registrering, analyse og prioritering — slik at flere arrangører kan arbeide i samme arrangement og følge status i sanntid.",
        en: "Event Planner is built to reduce the fragmentation that often arises when events are planned through spreadsheets, messages, email, notes and separate checklists. The solution combines structured event governance with AI-assisted registration, analysis and prioritisation — so multiple organisers can work on the same event and follow status in real time.",
      },
      bildeAlt: {
        no: "Event Planner – AI-assistert arbeidsflate for planlegging, deltakere, oppgaver og gjennomføring av arrangementer",
        en: "Event Planner – AI-assisted workspace for planning, participants, tasks and execution of events",
      },
    },
    kortFortalt: {
      heading: { no: "Kort fortalt", en: "In brief" },
      body: {
        no: "Event Planner er en AI-assistert planleggings- og gjennomføringsløsning for private og profesjonelle arrangementer. Plattformen gir arrangører én samlet arbeidsflate for deltakere, RSVP, oppgaver, ansvar, program, dokumenter og neste aktiviteter.",
        en: "Event Planner is an AI-assisted planning and execution solution for private and professional events. The platform gives organisers one shared workspace for participants, RSVP, tasks, ownership, programme, documents and next activities.",
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
        no: "Event Planner kombinerer deterministisk produktlogikk med generativ AI. Gemini brukes som AI-motor for naturlig språk, strukturering og arrangementsassistanse, mens regelbaserte komponenter sikrer konsistens der dataintegritet er viktig — blant annet for RSVP-normalisering, beregninger, avhengigheter og prioritering.",
        en: "Event Planner combines deterministic product logic with generative AI. Gemini is used as the AI engine for natural language, structuring and event assistance, while rule-based components ensure consistency where data integrity matters — including RSVP normalisation, calculations, dependencies and prioritisation.",
      },
      steps: [
        {
          tittel: { no: "Natural-language actions", en: "Natural-language actions" },
          beskrivelse: {
            no: "Brukeren kan skrive hva som skal endres fremfor å navigere gjennom mange skjemaer.",
            en: "The user can write what should change rather than navigating through many forms.",
          },
        },
        {
          tittel: { no: "Smart Paste", en: "Smart Paste" },
          beskrivelse: {
            no: "Ustrukturert tekst fra e-post, dokumenter eller meldinger tolkes og struktureres med forhåndsvisning før lagring.",
            en: "Unstructured text from email, documents or messages is interpreted and structured with a preview before saving.",
          },
        },
        {
          tittel: { no: "Intelligent regnearkimport", en: "Intelligent spreadsheet import" },
          beskrivelse: {
            no: "AI og regelbasert logikk forstår kolonner, statusverdier, relasjoner og deltaoppdateringer ved ny import.",
            en: "AI and rule-based logic understand columns, status values, relationships and delta updates on re-import.",
          },
        },
        {
          tittel: { no: "Prioritering og planleggingsanalyse", en: "Prioritisation and planning analysis" },
          beskrivelse: {
            no: "Oppgaver og planleggingsgap analyseres med utgangspunkt i risiko, frist, avhengighet og konsekvens — forankret i arrangementets faktiske data.",
            en: "Tasks and planning gaps are analysed based on risk, deadline, dependency and consequence — grounded in the event's actual data.",
          },
        },
      ],
    },
    datagrunnlag: {
      heading: { no: "Teknisk grunnlag", en: "Technical foundation" },
      body: {
        no: "Event Planner er utviklet som en AI-assistert full-stack applikasjon med React/TypeScript, Firebase Authentication og Firestore for tilgangsstyring, datalagring og sanntidssamarbeid. Hele løsningen er ikke presentert som ren generativ AI — arkitekturen kombinerer deterministisk produktlogikk med generativ AI der det gir verdi.",
        en: "Event Planner is developed as an AI-assisted full-stack application with React/TypeScript, Firebase Authentication and Firestore for access control, data storage and real-time collaboration. The solution is not presented as pure generative AI — the architecture combines deterministic product logic with generative AI where it adds value.",
      },
    },
    bygget: {
      heading: { no: "Hva som er bygget eller utviklet", en: "What has been built or developed" },
      items: [
        { no: "Arrangementsoversikt med nøkkeltall, planleggingsmangler og anbefalte neste aktiviteter", en: "Event overview with key metrics, planning gaps and recommended next activities" },
        { no: "Oppgaver og ansvar med frist, prioritet, status, kategori og avhengigheter", en: "Tasks and ownership with deadline, priority, status, category and dependencies" },
        { no: "Deltakere og RSVP med grupper, roller, allergier, sitteplass og praktiske behov", en: "Participants and RSVP with groups, roles, allergies, seating and practical needs" },
        { no: "Smart Paste, naturlig språk og intelligent Excel/CSV-import", en: "Smart Paste, natural language and intelligent Excel/CSV import" },
        { no: "Program, kjøreplan og arrangementsmodus for operativ bruk", en: "Programme, run sheet and event mode for operational use" },
        { no: "AI-assistert prioritering og samarbeid med roller for eier, redaktør og leser", en: "AI-assisted prioritisation and collaboration with owner, editor and reader roles" },
      ],
    },
    moduler: {
      heading: { no: "Sentrale moduler og funksjonsområder", en: "Core modules and functional areas" },
      intro: {
        no: "Event Planner v1 er bygget rundt en generell arrangementsmodell som kan konfigureres per arrangementstype og organisasjon.",
        en: "Event Planner v1 is built around a general event model that can be configured per event type and organisation.",
      },
      modules: [
        { tittel: { no: "Arrangement og oversikt", en: "Event and overview" }, beskrivelse: { no: "Dashboard med arrangementsinformasjon, nedtelling, nøkkeltall og anbefalte neste aktiviteter.", en: "Dashboard with event information, countdown, key metrics and recommended next activities." }, bygget: true },
        { tittel: { no: "Deltakere og RSVP", en: "Participants and RSVP" }, beskrivelse: { no: "Strukturert deltakerregister med RSVP, grupper, roller, allergier og praktiske behov.", en: "Structured participant register with RSVP, groups, roles, allergies and practical needs." }, bygget: true },
        { tittel: { no: "Oppgaver og ansvar", en: "Tasks and ownership" }, beskrivelse: { no: "Oppgaver med ansvarlig, frist, prioritet, status, kategori og avhengigheter.", en: "Tasks with owner, deadline, priority, status, category and dependencies." }, bygget: true },
        { tittel: { no: "Program og kjøreplan", en: "Programme and run sheet" }, beskrivelse: { no: "Kronologisk program med tidspunkt, aktivitet, ansvarlig og lokasjon — inkludert arrangementsmodus.", en: "Chronological programme with time, activity, owner and location — including event mode." }, bygget: true },
        { tittel: { no: "Smart Paste og naturlig språk", en: "Smart Paste and natural language" }, beskrivelse: { no: "Ustrukturert tekst tolkes og vises i forhåndsvisning før lagring.", en: "Unstructured text is interpreted and shown in preview before saving." }, bygget: true },
        { tittel: { no: "Intelligent Excel / CSV-import", en: "Intelligent Excel / CSV import" }, beskrivelse: { no: "Automatisk analyse av ark, kolonner og RSVP-statuser med deltaoppdatering.", en: "Automatic analysis of sheets, columns and RSVP statuses with delta updates." }, bygget: true },
        { tittel: { no: "AI-assistert prioritering", en: "AI-assisted prioritisation" }, beskrivelse: { no: "Analyse av oppgaver, frister, avhengigheter og planleggingsmangler.", en: "Analysis of tasks, deadlines, dependencies and planning gaps." }, bygget: true },
        { tittel: { no: "Samarbeid og sanntidsoppdatering", en: "Collaboration and real-time updates" }, beskrivelse: { no: "Flerbrukerarbeid med roller og sentral lagring i Firestore.", en: "Multi-user work with roles and central storage in Firestore." }, bygget: true },
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
        no: "Event Planner er bygget som en fungerende full-stack prototype med reelle arbeidsflyter for arrangementsopprettelse, deltakerhåndtering, oppgaver, ansvar, program, AI-assistert registrering, prioritering og samarbeid. Løsningen er utviklet og testet med realistiske arrangementsdata og flerbrukerarkitektur.\n\nEvent Planner er ikke utviklet som billettsystem, markedsføringsplattform eller erstatning for profesjonelle arrangører. AI-assistenten støtter planlegging og beslutninger, men større endringer skal fortsatt kunne kontrolleres og godkjennes av brukeren. Løsningen er ikke presentert som kommersielt SaaS-produkt med betalende kunder.",
        en: "Event Planner is built as a working full-stack prototype with real workflows for event creation, participant management, tasks, ownership, programme, AI-assisted registration, prioritisation and collaboration. The solution is developed and tested with realistic event data and multi-user architecture.\n\nEvent Planner is not developed as a ticketing system, marketing platform or replacement for professional event organisers. The AI assistant supports planning and decisions, but larger changes should still be controllable and approved by the user. The solution is not presented as a commercial SaaS product with paying customers.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Mulig videreutvikling", en: "Possible further development" },
        punkter: [
          { no: "Ferdige maler for ulike arrangementstyper", en: "Ready-made templates for different event types" },
          { no: "Utvidet budsjett- og kostnadsstyring", en: "Extended budget and cost management" },
          { no: "Leverandør- og tilbudsoppfølging", en: "Supplier and quote follow-up" },
          { no: "Automatiske varsler og påminnelser", en: "Automatic alerts and reminders" },
          { no: "Kalender- og e-postintegrasjoner", en: "Calendar and email integrations" },
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
        no: "Ta kontakt for faglig dialog om hvordan Event Planner kan videreutvikles, testes eller tilpasses relevante arrangementsbehov.",
        en: "Get in touch for professional dialogue on how Event Planner can be developed further, tested or adapted to relevant event needs.",
      },
    },
    utvikler,
  },
};
