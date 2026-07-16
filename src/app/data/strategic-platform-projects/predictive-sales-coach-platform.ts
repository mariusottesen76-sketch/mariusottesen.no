import type { StrategicPlatformProject } from "./types";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Kommersiell leder og AI-strateg", en: "Commercial leader and AI strategist" },
  beskrivelse: {
    no: "Utvikler virksomhetsnære løsninger og konsepter i skjæringspunktet mellom kommersiell ledelse, mennesker, arbeidsflyt, teknologi og praktisk AI.",
    en: "Develops business-oriented solutions and concepts at the intersection of commercial leadership, people, workflow, technology and practical AI.",
  },
};

export const predictiveSalesCoachPlatform: StrategicPlatformProject = {
  slug: "predictive-sales-coach",
  prosjektId: "predictive-sales-coach-2026",
  detailPath: "/psc",
  meta: {
    title: {
      no: "The Predictive Sales Coach v2.0 | Marius Ottesen",
      en: "The Predictive Sales Coach v2.0 | Marius Ottesen",
    },
    description: {
      no: "AI-basert salgstrening og møteforberedelse med realistiske kundesimuleringer, scorecard, DISC-inspirert kommunikasjon og lederinnsikt — tilgangsstyrt lukket pilot.",
      en: "AI-based sales training and meeting preparation with realistic customer simulations, scorecard, DISC-inspired communication and leadership insight — access-controlled closed pilot.",
    },
    ogImage: "/images/predictive-sales-coach-hero.png",
    canonicalPath: "/psc",
  },
  teaser: {
    undertittel: {
      no: "Lukket pilot og tilgangsstyrt trenings-, evaluerings- og lederinnsiktsplattform for B2B-salg",
      en: "Closed pilot and access-controlled training, evaluation and leadership insight platform for B2B sales",
    },
    intro: {
      no: "The Predictive Sales Coach v2.0 er en AI-basert salgstrenings- og analyseplattform for selgere, salgsledere og kommersielle team som vil trene mer målrettet før viktige kundemøter.",
      en: "The Predictive Sales Coach v2.0 is an AI-based sales training and analysis platform for sales reps, sales leaders and commercial teams who want to train more purposefully before important customer meetings.",
    },
    blokker: {
      utfordring: {
        no: "Mange selgere trener for lite før viktige kundemøter. Forberedelser blir ofte generelle, kundeinnsikt brukes ujevnt, og salgsledere mangler strukturert innsikt i hvilke ferdigheter teamet faktisk må utvikle.",
        en: "Many sales reps train too little before important customer meetings. Preparation is often generic, customer insight is used unevenly, and sales leaders lack structured insight into which skills the team actually needs to develop.",
      },
      bygget: {
        no: "Det er utviklet en AI-basert plattform med scenario-oppsett, kundetype, bransje, salgsfase, simulert kundedialog, strukturert evaluering, scorecard, arkiv og grunnlag for lederinnsikt.",
        en: "An AI-based platform has been developed with scenario setup, customer type, industry, sales phase, simulated customer dialogue, structured evaluation, scorecard, archive and a foundation for leadership insight.",
      },
      relevans: {
        no: "Prosjektet viser hvordan AI kan støtte salgstrening, møteforberedelse, onboarding og mer presis coaching før viktige kundemøter.",
        en: "The project shows how AI can support sales training, meeting preparation, onboarding and more precise coaching before important customer meetings.",
      },
      status: {
        no: "Lukket pilot og tilgangsstyrt trenings-, evaluerings- og lederinnsiktsplattform. Løsningen er tekstbasert i dagens versjon.",
        en: "Closed pilot and access-controlled training, evaluation and leadership insight platform. The solution is text-based in the current version.",
      },
    },
    videreutvikling: {
      no: "Videre potensial inkluderer talegrensesnitt, flere scenarioer, teamrapporter og CRM-kobling. Grunnmodellen kan tilpasses andre bransjer og profesjonelle samtalesituasjoner.",
      en: "Further potential includes voice interfaces, more scenarios, team reports and CRM integration. The core model can be adapted for other industries and professional conversation situations.",
    },
  },
  detail: {
    statusBadge: {
      no: "Lukket pilot og tilgangsstyrt trenings-, evaluerings- og lederinnsiktsplattform",
      en: "Closed pilot and access-controlled training, evaluation and leadership insight platform",
    },
    hero: {
      verdiforslag: {
        no: "AI-basert salgstrening og møteforberedelse for B2B-salg, med realistiske kundesimuleringer og strukturert feedback.",
        en: "AI-based sales training and meeting preparation for B2B sales, with realistic customer simulations and structured feedback.",
      },
      executiveSummary: {
        no: "The Predictive Sales Coach v2.0 er utviklet for selgere, salgsledere og kommersielle team som ønsker å trene mer målrettet før viktige kundemøter. Løsningen kombinerer scenario-oppsett, simulert kundedialog, DISC-inspirert kommunikasjon, scorecard og grunnlag for lederinnsikt — som tilgangsstyrt lukket pilot, ikke som ferdig kommersielt produkt.",
        en: "The Predictive Sales Coach v2.0 is built for sales reps, sales leaders and commercial teams who want to train more purposefully before important customer meetings. The solution combines scenario setup, simulated customer dialogue, DISC-inspired communication, scorecard and a foundation for leadership insight — as an access-controlled closed pilot, not as a finished commercial product.",
      },
      bildeAlt: {
        no: "The Predictive Sales Coach v2.0 – AI-basert salgstrening og møteforberedelse",
        en: "The Predictive Sales Coach v2.0 – AI-based sales training and meeting preparation",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "Mange selgere trener for lite før viktige kundemøter. Forberedelser blir ofte generelle, kundeinnsikt brukes ujevnt, og salgsledere mangler strukturert innsikt i hvilke ferdigheter teamet faktisk må utvikle.\n\nMange salgsorganisasjoner måler aktivitet, pipeline og resultat, men trener for lite på selve kundedialogen. Selgere går ofte i møter med ulik forberedelse, svakere struktur enn ønskelig og lite systematisk læring i etterkant.",
        en: "Many sales reps train too little before important customer meetings. Preparation is often generic, customer insight is used unevenly, and sales leaders lack structured insight into which skills the team actually needs to develop.\n\nMany sales organisations measure activity, pipeline and results, but train too little on the customer dialogue itself. Salespeople often enter meetings with uneven preparation, weaker structure than desired and little systematic learning afterwards.",
      },
    },
    logikk: {
      heading: { no: "Prosjektets modell og hovedlogikk", en: "The project's model and core logic" },
      body: {
        no: "PSCv2.0 skiller tydelig mellom trening før kundemøtet og evaluering etterpå. Modellen følger en praktisk læringssløyfe:",
        en: "PSCv2.0 clearly separates training before the customer meeting and evaluation afterwards. The model follows a practical learning loop:",
      },
      steps: [
        {
          tittel: { no: "Scenario-oppsett", en: "Scenario setup" },
          beskrivelse: {
            no: "Kundetype, bransje, salgsfase, holdning, vanskelighetsgrad og møteutfall defineres.",
            en: "Customer type, industry, sales phase, attitude, difficulty level and meeting outcome are defined.",
          },
        },
        {
          tittel: { no: "Simulert kundedialog", en: "Simulated customer dialogue" },
          beskrivelse: {
            no: "AI simulerer kunden, utfordrer selgeren og responderer på samtalens utvikling.",
            en: "AI simulates the customer, challenges the seller and responds to how the conversation develops.",
          },
        },
        {
          tittel: { no: "Strukturert evaluering", en: "Structured evaluation" },
          beskrivelse: {
            no: "Scorecard og feedback på salgsfase, kommunikasjon, verdiargumentasjon og innvendinger.",
            en: "Scorecard and feedback on sales phase, communication, value argumentation and objections.",
          },
        },
        {
          tittel: { no: "Lederinnsikt", en: "Leadership insight" },
          beskrivelse: {
            no: "Mønstre, styrker og utviklingsområder kan oppsummeres for leder eller team.",
            en: "Patterns, strengths and development areas can be summarised for the leader or team.",
          },
        },
      ],
      after: {
        no: "Målet er ikke bare å evaluere én samtale, men å vise hva som fungerte, hva som bør trenes videre på, og hvordan neste kundemøte kan gjennomføres bedre.",
        en: "The goal is not only to evaluate one conversation, but to show what worked, what should be practised further, and how the next customer meeting can be conducted better.",
      },
    },
    bygget: {
      heading: { no: "Hva som er bygget eller utviklet", en: "What has been built or developed" },
      items: [
        { no: "Scenario-oppsett med kundetype, bransje og salgsfase", en: "Scenario setup with customer type, industry and sales phase" },
        { no: "Simulert kundedialog med AI", en: "Simulated customer dialogue with AI" },
        { no: "DISC-inspirert selvkartlegging og kommunikasjonstilpasning", en: "DISC-inspired self-assessment and communication adaptation" },
        { no: "Scorecard og strukturert feedback", en: "Scorecard and structured feedback" },
        { no: "Arkiv og historikk over treningsøkter", en: "Archive and history of training sessions" },
        { no: "Grunnlag for lederinnsikt og oppsummering", en: "Foundation for leadership insight and summarisation" },
        { no: "Tilgangsstyrt innlogging og lukket testflate", en: "Access-controlled login and closed test environment" },
      ],
    },
    moduler: {
      heading: { no: "Sentrale moduler og funksjonsområder", en: "Core modules and functional areas" },
      intro: {
        no: "Plattformen er bygget rundt B2B-salgstrening, møteforberedelse og evaluering — med tydelig skille mot intern team- og profilinnsikt (FlowSignal).",
        en: "The platform is built around B2B sales training, meeting preparation and evaluation — clearly distinct from internal team and profile insight (FlowSignal).",
      },
      modules: [
        {
          tittel: { no: "Møteforberedelse og scenario", en: "Meeting preparation and scenario" },
          beskrivelse: {
            no: "Oppsett av realistiske kundescenarioer basert på det som selges, kundens rolle, bransje, salgsfase og ønsket møteutfall.",
            en: "Setup of realistic customer scenarios based on what is being sold, the customer's role, industry, sales phase and desired meeting outcome.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Kundesimulering", en: "Customer simulation" },
          beskrivelse: {
            no: "AI simulerer kunden med oppfølgingsspørsmål, innvendinger og respons på samtalens utvikling.",
            en: "AI simulates the customer with follow-up questions, objections and responses to how the conversation develops.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Evaluering og scorecard", en: "Evaluation and scorecard" },
          beskrivelse: {
            no: "Strukturert feedback på salgsfaseforståelse, verdiargumentasjon, spørreteknikk, innvendingshåndtering og kontroll på samtalen.",
            en: "Structured feedback on sales phase understanding, value argumentation, questioning technique, objection handling and control of the conversation.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Lederinnsikt", en: "Leadership insight" },
          beskrivelse: {
            no: "Oppsummering av mønstre, styrker og utviklingsområder som grunnlag for coaching og oppfølging.",
            en: "Summary of patterns, strengths and development areas as a basis for coaching and follow-up.",
          },
          bygget: true,
        },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan løsningen fungerer", en: "How the solution works" },
      intro: {
        no: "Brukeren setter opp et scenario, trener på kundedialogen, og mottar evaluering og læringspunkter etter økten.",
        en: "The user sets up a scenario, trains on the customer dialogue, and receives evaluation and learning points after the session.",
      },
      steps: [
        {
          tittel: { no: "Oppsett", en: "Setup" },
          beskrivelse: {
            no: "Definer kundetype, bransje, salgsfase, holdning, vanskelighetsgrad og mål for møtet.",
            en: "Define customer type, industry, sales phase, attitude, difficulty level and meeting goals.",
          },
        },
        {
          tittel: { no: "Trening", en: "Training" },
          beskrivelse: {
            no: "Gjennomfør simulert kundedialog med AI som utfordrer og responderer realistisk.",
            en: "Run simulated customer dialogue with AI that challenges and responds realistically.",
          },
        },
        {
          tittel: { no: "Evaluering", en: "Evaluation" },
          beskrivelse: {
            no: "Motta scorecard og strukturert feedback på hva som fungerte og hva som bør trenes videre.",
            en: "Receive scorecard and structured feedback on what worked and what should be practised further.",
          },
        },
        {
          tittel: { no: "Oppfølging", en: "Follow-up" },
          beskrivelse: {
            no: "Arkiver økten og bruk innsikt til neste møteforberedelse eller lederdialog.",
            en: "Archive the session and use insight for the next meeting preparation or leadership dialogue.",
          },
        },
      ],
    },
    relevans: {
      heading: { no: "Anvendelse og relevans", en: "Application and relevance" },
      sections: [
        {
          tittel: { no: "For selgere og salgsteam", en: "For sales reps and sales teams" },
          tekst: {
            no: "Mer strukturert trening før viktige kundemøter, bedre behovsavklaring, verdiargumentasjon og håndtering av innvendinger.",
            en: "More structured training before important customer meetings, better needs clarification, value argumentation and handling of objections.",
          },
        },
        {
          tittel: { no: "For salgsledere", en: "For sales leaders" },
          tekst: {
            no: "Grunnlag for mer presis coaching, systematisk læring på tvers av teamet og tydeligere innsikt i utviklingsområder.",
            en: "A basis for more precise coaching, systematic learning across the team and clearer insight into development areas.",
          },
        },
        {
          tittel: { no: "Skille mot FlowSignal", en: "Distinction from FlowSignal" },
          tekst: {
            no: "PSCv2.0 handler primært om kundedialog, salgsfaser og kommersiell samtalepresisjon. FlowSignal handler primært om mennesker, roller, dagsform og intern samhandling.",
            en: "PSCv2.0 is primarily about customer dialogue, sales phases and commercial conversation precision. FlowSignal is primarily about people, roles, daily form and internal collaboration.",
          },
        },
      ],
    },
    status: {
      heading: { no: "Status, modenhet og avgrensninger", en: "Status, maturity and limitations" },
      body: {
        no: "PSCv2.0 er en lukket pilot og tilgangsstyrt trenings-, evaluerings- og lederinnsiktsplattform — ikke presentert som ferdig kommersielt produkt.\n\nLøsningen er tekstbasert for å trene presisjon i formuleringer, spørsmål, aktiv lytting og kundetilpasning. Speech-to-text og tale kan være aktuelle videreutviklingsspor, men tekstformatet er bevisst valgt i dagens versjon.\n\nTilgang vurderes kun i relevante faglige eller profesjonelle sammenhenger.",
        en: "PSCv2.0 is a closed pilot and access-controlled training, evaluation and leadership insight platform — not presented as a finished commercial product.\n\nThe solution is text-based to train precision in wording, questions, active listening and customer adaptation. Speech-to-text and voice may be relevant further development tracks, but the text format is deliberately chosen in the current version.\n\nAccess is considered only in relevant professional contexts.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Videreutvikling av løsningen", en: "Further development of the solution" },
        punkter: [
          { no: "Talegrensesnitt og speech-to-text", en: "Voice interface and speech-to-text" },
          { no: "Flere scenarioer og bransjeoppsett", en: "More scenarios and industry setups" },
          { no: "Teamrapporter og lederdashboard", en: "Team reports and leadership dashboard" },
          { no: "CRM-kobling og historikk", en: "CRM integration and history" },
          { no: "Mer avansert scorecard og analyse", en: "More advanced scorecard and analysis" },
        ],
      },
      tilpasning: {
        heading: { no: "Tilpasning til funksjoner og bransjer", en: "Adaptation to functions and industries" },
        punkter: [
          { no: "Forhandlingstrening og rådgivningssamtaler", en: "Negotiation training and advisory conversations" },
          { no: "Kundeservice og krevende samtaler", en: "Customer service and difficult conversations" },
          { no: "Onboarding og intervjutrening", en: "Onboarding and interview training" },
          { no: "Andre B2B-salgssituasjoner der presisjon og tilpasning er avgjørende", en: "Other B2B sales situations where precision and adaptation are critical" },
        ],
      },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: {
        no: "Be om tilgangskode for å teste den tilgangsstyrte løsningen, eller ta kontakt for faglig dialog om hvordan modellen kan brukes i salgsorganisasjoner.",
        en: "Request an access code to test the access-controlled solution, or get in touch for professional dialogue on how the model can be used in sales organisations.",
      },
    },
    utvikler,
  },
};
