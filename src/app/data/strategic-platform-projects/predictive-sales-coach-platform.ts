import type { StrategicPlatformProject } from "./types";
import { PSC_SEO_DESCRIPTION, PSC_SEO_TITLE, PSC_SHORT_DESCRIPTION } from "../../lib/psc-brand";

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
    title: PSC_SEO_TITLE,
    description: PSC_SEO_DESCRIPTION,
    ogImage: "/images/predictive-sales-coach-hero.png?v=20260719b",
    canonicalPath: "/psc",
  },
  teaser: {
    undertittel: {
      no: "Lukket pilot og tilgangsstyrt trenings-, evaluerings- og lederinnsiktsplattform for B2B-salg",
      en: "Closed pilot and access-controlled training, evaluation and leadership insight platform for B2B sales",
    },
    intro: PSC_SHORT_DESCRIPTION,
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
      verdiforslag: PSC_SHORT_DESCRIPTION,
      executiveSummary: {
        no: "Utviklet for selgere, salgsledere og kommersielle team — som tilgangsstyrt lukket pilot for trenings-, simulerings- og evalueringsbruk, ikke som CRM-system, salgsprognoseverktøy eller ferdig kommersielt produkt.",
        en: "Built for sales reps, sales leaders and commercial teams — as an access-controlled closed pilot for training, simulation and evaluation use, not as a CRM system, sales forecasting tool or finished commercial product.",
      },
      bildeAlt: {
        no: "The Predictive Sales Coach v2.0 – AI-basert salgstrening og møteforberedelse",
        en: "The Predictive Sales Coach v2.0 – AI-based sales training and meeting preparation",
      },
    },
    kortFortalt: {
      heading: { no: "Kort fortalt", en: "In brief" },
      body: {
        no: "The Predictive Sales Coach v2.0 er en AI-basert trenings- og evalueringsplattform for B2B-kundedialog. Brukeren setter opp et scenario, gjennomfører en simulert kundesamtale og mottar strukturert feedback, score og læringspunkter. Dagens løsning er ikke et CRM-system, et salgsprognoseverktøy eller en motor for lead scoring og kundeprioritering.",
        en: "The Predictive Sales Coach v2.0 is an AI-based training and evaluation platform for B2B customer dialogue. The user sets up a scenario, runs a simulated customer conversation and receives structured feedback, scores and learning points. The current solution is not a CRM system, a sales forecasting tool or an engine for lead scoring and customer prioritisation.",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "Mange salgsorganisasjoner måler aktivitet, pipeline og resultat, men trener for lite på selve kundedialogen. Selgere går ofte i møter med ulik forberedelse, svakere struktur enn ønskelig og lite systematisk læring i etterkant.",
        en: "Many sales organisations measure activity, pipeline and results, but train too little on the customer dialogue itself. Salespeople often enter meetings with uneven preparation, weaker structure than desired and little systematic learning afterwards.",
      },
    },
    logikk: {
      heading: { no: "Prosjektets modell og hovedlogikk", en: "The project's model and core logic" },
      body: {
        no: "PSCv2.0 skiller tydelig mellom trening før kundemøtet og evaluering etterpå. Modellen følger en praktisk læringssløyfe for simulert B2B-kundedialog:",
        en: "PSCv2.0 clearly separates training before the customer meeting and evaluation afterwards. The model follows a practical learning loop for simulated B2B customer dialogue:",
      },
      predictiveForklaring: {
        heading: { no: "Hva betyr «Predictive»?", en: "What does «Predictive» mean?" },
        body: {
          no: "«Predictive» viser til at selgeren kan forberede seg på mulige kundereaksjoner, innvendinger og samtaleforløp før møtet. Det betyr ikke at dagens løsning predikerer pipeline, salgssannsynlighet eller økonomiske resultater.",
          en: "«Predictive» means the salesperson can prepare for possible customer reactions, objections and conversation flows before the meeting. It does not mean the current solution predicts pipeline, win probability or financial results.",
        },
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
        no: "Målet er å gi grunnlag for evaluering av samtalen, trening på utviklingsområder og forberedelse til neste kundemøte — ikke å score pipeline, prioritere leads eller forutsi salgsresultater.",
        en: "The goal is to provide a basis for evaluating the conversation, training on development areas and preparing for the next customer meeting — not to score pipeline, prioritise leads or predict sales results.",
      },
    },
    datagrunnlag: {
      heading: { no: "Datagrunnlag og integrasjoner", en: "Data foundation and integrations" },
      body: {
        no: "I dagens versjon bygger simuleringen på scenarioinformasjonen brukeren legger inn, valgte kunde- og kommunikasjonsprofiler og dialogen som gjennomføres i løsningen. PSC leser ikke live-data fra CRM, e-post, Teams eller kalender. CRM-kobling, talegrensesnitt og mer avansert analyse er mulige videreutviklingsspor, men er ikke en del av dagens løsning.",
        en: "In the current version, the simulation is based on scenario information entered by the user, selected customer and communication profiles, and the dialogue conducted in the solution. PSC does not read live data from CRM, email, Teams or calendar. CRM integration, voice interface and more advanced analysis are possible further development tracks, but are not part of the current solution.",
      },
    },
    bygget: {
      heading: { no: "Hva som er bygget eller utviklet", en: "What has been built or developed" },
      items: [
        { no: "DISC-inspirert selvkartlegging og kommunikasjonstilpasning", en: "DISC-inspired self-assessment and communication adaptation" },
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
      detaljpunkter: [
        {
          no: "Scenario-oppsett knytter kundetype, bransje, salgsfase og møteutfall til simulert kundedialog.",
          en: "Scenario setup links customer type, industry, sales phase and meeting outcome to simulated customer dialogue.",
        },
        {
          no: "Scorecard og strukturert feedback gir grunnlag for oppfølging, arkiv og lederinnsikt.",
          en: "Scorecard and structured feedback provide a basis for follow-up, archive and leadership insight.",
        },
      ],
    },
    relevans: {
      heading: { no: "Anvendelse og relevans", en: "Application and relevance" },
      sections: [
        {
          tittel: { no: "For selgere og salgsteam", en: "For sales reps and sales teams" },
          tekst: {
            no: "Kan støtte mer strukturert trening før viktige kundemøter, trening på behovsavklaring, verdiargumentasjon og håndtering av innvendinger.",
            en: "Can support more structured training before important customer meetings, practice in needs clarification, value argumentation and handling of objections.",
          },
        },
        {
          tittel: { no: "For salgsledere", en: "For sales leaders" },
          tekst: {
            no: "Kan gi grunnlag for mer presis coaching, systematisk læring på tvers av teamet og tydeligere innsikt i utviklingsområder.",
            en: "Can provide a basis for more precise coaching, systematic learning across the team and clearer insight into development areas.",
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
    effektomrader: {
      heading: { no: "Aktuelle effektområder", en: "Relevant effect areas" },
      punkter: [
        { no: "Trening på forberedelse før kundemøter", en: "Training on preparation before customer meetings" },
        { no: "Aktuelle områder for måling og evaluering av møtekvalitet", en: "Relevant areas for measuring and evaluating meeting quality" },
        { no: "Gir grunnlag for trening på behovsavklaring", en: "Provides a basis for training in needs clarification" },
        { no: "Kan brukes til å utvikle trening på innvendinger", en: "Can be used to develop training on objections" },
        { no: "Kan støtte mer strukturert salgsledelse og coaching", en: "Can support more structured sales leadership and coaching" },
        { no: "Kan bidra til mer systematisk læring på tvers av teamet", en: "Can contribute to more systematic learning across the team" },
      ],
    },
    anvendelsesformat: {
      heading: { no: "Mulig anvendelsesformat", en: "Possible application format" },
      steg: [
        {
          tittel: { no: "Avklaring", en: "Clarification" },
          beskrivelse: {
            no: "Kort kartlegging av salgsprosess, typiske kundemøter, målgrupper og ønsket læring.",
            en: "Brief mapping of sales process, typical customer meetings, target groups and desired learning.",
          },
        },
        {
          tittel: { no: "Scenarioer", en: "Scenarios" },
          beskrivelse: {
            no: "Utvikling av 2–3 realistiske salgsscenarioer tilpasset virksomheten.",
            en: "Development of 2–3 realistic sales scenarios tailored to the organisation.",
          },
        },
        {
          tittel: { no: "Trening", en: "Training" },
          beskrivelse: {
            no: "Selgere trener individuelt gjennom AI-basert rollespill og får strukturert tilbakemelding.",
            en: "Salespeople train individually through AI-based role play and receive structured feedback.",
          },
        },
        {
          tittel: { no: "Innsikt", en: "Insight" },
          beskrivelse: {
            no: "Mønstre, styrker og utviklingsområder oppsummeres for leder eller team.",
            en: "Patterns, strengths and development areas are summarised for the leader or team.",
          },
        },
        {
          tittel: { no: "Neste steg", en: "Next steps" },
          beskrivelse: {
            no: "Anbefalt videre treningsopplegg og mulige forbedringer i møteforberedelse, salgsfase og oppfølging.",
            en: "Recommended further training setup and possible improvements in meeting preparation, sales stage and follow-up.",
          },
        },
      ],
    },
    status: {
      heading: { no: "Status, modenhet og avgrensninger", en: "Status, maturity and limitations" },
      body: {
        no: "PSCv2.0 er en lukket pilot og tilgangsstyrt trenings-, simulerings-, evaluerings- og lederinnsiktsplattform — ikke et CRM-system, salgsprognoseverktøy, lead scoring-verktøy eller ferdig kommersielt produkt.\n\nLøsningen er tekstbasert for å trene presisjon i formuleringer, spørsmål, aktiv lytting og kundetilpasning. Speech-to-text og tale kan være aktuelle videreutviklingsspor, men tekstformatet er bevisst valgt i dagens versjon.\n\nTilgang vurderes kun i relevante faglige eller profesjonelle sammenhenger.",
        en: "PSCv2.0 is a closed pilot and access-controlled training, simulation, evaluation and leadership insight platform — not a CRM system, sales forecasting tool, lead scoring tool or finished commercial product.\n\nThe solution is text-based to train precision in wording, questions, active listening and customer adaptation. Speech-to-text and voice may be relevant further development tracks, but the text format is deliberately chosen in the current version.\n\nAccess is considered only in relevant professional contexts.",
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
    faq: {
      heading: { no: "Ofte stilte spørsmål", en: "Frequently asked questions" },
      items: [
        {
          question: { no: "Hva er The Predictive Sales Coach?", en: "What is The Predictive Sales Coach?" },
          answer: {
            no: "The Predictive Sales Coach er en AI-basert trenings- og evalueringsplattform for B2B-kundedialog. Brukeren kan forberede og gjennomføre simulerte kundesamtaler og motta strukturert feedback og læringspunkter.",
            en: "The Predictive Sales Coach is an AI-based training and evaluation platform for B2B customer dialogue. Users can prepare for and run simulated customer conversations and receive structured feedback and learning points.",
          },
        },
        {
          question: {
            no: "Hva betyr «Predictive» i prosjektets navn?",
            en: "What does «Predictive» mean in the project name?",
          },
          answer: {
            no: "Begrepet viser til forberedelse på mulige kundereaksjoner, innvendinger og samtaleforløp før et møte. Dagens løsning predikerer ikke pipeline, salgssannsynlighet eller økonomiske resultater.",
            en: "The term refers to preparing for possible customer reactions, objections and conversation flows before a meeting. The current solution does not predict pipeline, win probability or financial results.",
          },
        },
        {
          question: {
            no: "Er PSC et CRM- eller salgsprognoseverktøy?",
            en: "Is PSC a CRM or sales forecasting tool?",
          },
          answer: {
            no: "Nei. PSC er utviklet for trening, møteforberedelse og evaluering av kundedialog. CRM-integrasjon og mer avansert analyse kan være mulige videreutviklingsspor, men er ikke en del av dagens løsning.",
            en: "No. PSC is built for training, meeting preparation and evaluation of customer dialogue. CRM integration and more advanced analysis may be possible further development tracks, but are not part of the current solution.",
          },
        },
        {
          question: {
            no: "Hvilke data bruker dagens løsning?",
            en: "What data does the current solution use?",
          },
          answer: {
            no: "Løsningen bruker informasjonen brukeren legger inn i scenarioet, valgte profiler og dialogen som gjennomføres i simuleringen. Den leser ikke live-data fra CRM, e-post, Teams eller kalender.",
            en: "The solution uses information the user enters in the scenario, selected profiles and the dialogue conducted in the simulation. It does not read live data from CRM, email, Teams or calendar.",
          },
        },
        {
          question: {
            no: "Hva er bygget, og hva er mulig videreutvikling?",
            en: "What is built, and what is possible further development?",
          },
          answer: {
            no: "Dagens løsning inkluderer scenariooppsett, AI-basert kundesimulering, strukturert feedback, scorecard og lederorientert innsikt. Mulig videreutvikling omfatter blant annet talegrensesnitt, integrasjoner, mer avansert analyse og tilpasning til flere roller og bransjer.",
            en: "The current solution includes scenario setup, AI-based customer simulation, structured feedback, scorecard and leadership-oriented insight. Possible further development includes voice interfaces, integrations, more advanced analysis and adaptation to more roles and industries.",
          },
        },
      ],
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
