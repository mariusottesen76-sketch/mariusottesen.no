import type { StrategicPlatformProject } from "./types";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Kommersiell leder og AI-strateg", en: "Commercial leader and AI strategist" },
  beskrivelse: {
    no: "Utvikler virksomhetsnære koncepter, arbeidsflyter og digitale løsninger i skjæringspunktet mellom kommersiell ledelse, mennesker, teknologi og praktisk AI.",
    en: "Develops business-oriented concepts, workflows and digital solutions at the intersection of commercial leadership, people, technology and practical AI.",
  },
};

export const strategiskAiImplementeringPlatform: StrategicPlatformProject = {
  slug: "strategisk-ai-implementering",
  prosjektId: "prosjektoppgave-strategisk-implementering-2026",
  detailPath: "/strategisk-ai-implementering",
  meta: {
    title: {
      no: "Strategisk AI-implementering | Marius Ottesen",
      en: "Strategic AI implementation | Marius Ottesen",
    },
    description: {
      no: "Prosjektoppgave fra Generative AI for Business ved BI: fra AI-mulighet til gjennomførbar implementeringsplan med behovsanalyse, governance og ansvarlig gjennomføring.",
      en: "Master's project from Generative AI for Business at BI: from AI opportunity to executable implementation plan with needs analysis, governance and responsible execution.",
    },
    ogImage: "/images/prosjektoppgave-strategisk-implementering.png",
    canonicalPath: "/strategisk-ai-implementering",
  },
  teaser: {
    undertittel: {
      no: "Fra generell AI-mulighet til gjennomførbar implementeringsplan",
      en: "From general AI opportunity to executable implementation plan",
    },
    intro: {
      no: "Prosjektoppgave fra masterkurset Generative AI for Business ved BI, med Skøyenåsen Tannklinikk som casegrunnlag.",
      en: "Master's project from Generative AI for Business at BI, with Skøyenåsen Dental Clinic as the case basis.",
    },
    blokker: {
      utfordring: {
        no: "Mange virksomheter mangler struktur for å gå fra AI-idé til gjennomføring.",
        en: "Many organisations lack structure for moving from AI idea to execution.",
      },
      bygget: {
        no: "Helhetlig implementeringsplan med behovsanalyse, løsningsdesign, roadmap, teknologi og governance.",
        en: "Comprehensive implementation plan with needs analysis, solution design, roadmap, technology and governance.",
      },
      relevans: {
        no: "Viser ansvarlig og forretningsnær AI-implementering med akademisk forankring.",
        en: "Shows responsible and business-near AI implementation with academic grounding.",
      },
      status: {
        no: "Fullført prosjektoppgave og implementeringscase — konseptene er ikke produksjonssatte.",
        en: "Completed master's project and implementation case — concepts are not production-deployed.",
      },
    },
    videreutvikling: {
      no: "Workshop-format, implementeringskart, use case-prioritering og governance-rammeverk.",
      en: "Workshop formats, implementation maps, use case prioritisation and governance frameworks.",
    },
  },
  detail: {
    statusBadge: {
      no: "Fullført prosjektoppgave og praktisk implementeringscase",
      en: "Completed master's project and practical implementation case",
    },
    hero: {
      verdiforslag: {
        no: "Fra AI-mulighet til strukturert og gjennomførbar implementeringsplan.",
        en: "From AI opportunity to structured and executable implementation plan.",
      },
      executiveSummary: {
        no: "Dette prosjektet er en prosjektoppgave fra masterkurset Generative AI for Business ved Handelshøyskolen BI. Arbeidet viser hvordan en virksomhet kan gå fra generell AI-interesse til en konkret og gjennomførbar implementeringsplan — med kobling mellom forretningsbehov, brukerbehov, teknologi, risiko, personvern og organisatorisk gjennomføring. Skøyenåsen Tannklinikk brukes som casegrunnlag for å teste metoden, men fokus på detaljsiden er implementeringslogikk, metode og overførbar læring — ikke den konkrete pasientløsningen.",
        en: "This project is a master's assignment from Generative AI for Business at BI Norwegian Business School. The work shows how an organisation can move from general AI interest to a concrete and executable implementation plan — linking business needs, user needs, technology, risk, privacy and organisational execution. Skøyenåsen Dental Clinic is used as the case basis to test the method, but the detail page focus is implementation logic, methodology and transferable learning — not the concrete patient solution.",
      },
      bildeAlt: {
        no: "Strategisk AI-implementering – prosjektoppgave og implementeringscase",
        en: "Strategic AI implementation – master's project and implementation case",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "Mange virksomheter er nysgjerrige på AI, men mangler struktur for å gå fra idé til gjennomføring. Utfordringen er ofte å vite hvor AI faktisk skaper verdi, hvilke bruksområder som bør prioriteres, og hvordan risiko, tillit, personvern og ansvar bør håndteres — uten at arbeidet blir et teknologiprosjekt løsrevet fra drift og brukerbehov.",
        en: "Many organisations are curious about AI but lack structure for moving from idea to execution. The challenge is often knowing where AI actually creates value, which use areas should be prioritised, and how risk, trust, privacy and responsibility should be managed — without the work becoming a technology project detached from operations and user needs.",
      },
    },
    logikk: {
      heading: { no: "Modell, tilnærming og prosjektlogikk", en: "Model, approach and project logic" },
      body: {
        no: "Implementeringsmodellen går fra identifisering av relevante AI-muligheter til konkret gjennomføringsplan i seks sammenhengende faser:",
        en: "The implementation model moves from identifying relevant AI opportunities to a concrete execution plan in six connected phases:",
      },
      steps: [
        {
          tittel: { no: "Mulighets- og behovsavklaring", en: "Opportunity and needs clarification" },
          beskrivelse: {
            no: "Kartlegging av forretningsbehov, kundereise, brukerbehov og hvor AI kan skape verdi uten å svekke kvalitet eller menneskelig kontroll.",
            en: "Mapping of business needs, customer journey, user needs and where AI can create value without weakening quality or human control.",
          },
        },
        {
          tittel: { no: "Use case-prioritering", en: "Use case prioritisation" },
          beskrivelse: {
            no: "Vurdering av hvilke AI-bruksområder som bør prioriteres ut fra verdi, gjennomførbarhet, risiko og organisatorisk modenhet.",
            en: "Assessment of which AI use areas should be prioritised based on value, feasibility, risk and organisational maturity.",
          },
        },
        {
          tittel: { no: "Løsningsdesign og arkitektur", en: "Solution design and architecture" },
          beskrivelse: {
            no: "Beskrivelse av teknologi, dataflyt, integrasjoner og avgrensninger — inkludert human-in-the-loop og eskalering til mennesker.",
            en: "Description of technology, data flow, integrations and boundaries — including human-in-the-loop and escalation to people.",
          },
        },
        {
          tittel: { no: "Governance, personvern og risiko", en: "Governance, privacy and risk" },
          beskrivelse: {
            no: "Rammeverk for ansvarlig bruk, personvern, sikkerhet og tydelige avgrensninger mot høy-risiko automatisering.",
            en: "Framework for responsible use, privacy, security and clear boundaries against high-risk automation.",
          },
        },
        {
          tittel: { no: "Roadmap og gjennomføring", en: "Roadmap and execution" },
          beskrivelse: {
            no: "Realistisk plan for faser, roller, avhengigheter og organisatorisk forankring — fra pilot til videre skalering.",
            en: "Realistic plan for phases, roles, dependencies and organisational anchoring — from pilot to further scaling.",
          },
        },
        {
          tittel: { no: "Casegrunnlag", en: "Case basis" },
          beskrivelse: {
            no: "Skøyenåsen Tannklinikk brukes som konkret virksomhetskontekst for å teste metoden. Den operative pasientløsningen er dokumentert som eget prosjekt.",
            en: "Skøyenåsen Dental Clinic is used as a concrete business context to test the method. The operational patient solution is documented as a separate project.",
          },
        },
      ],
      after: {
        no: "Metodikken er akademisk forankret gjennom Generative AI for Business ved BI og kombinerer kommersiell forståelse, brukerreise, governance og praktisk AI-implementering.",
        en: "The methodology is academically grounded through Generative AI for Business at BI and combines commercial understanding, user journey, governance and practical AI implementation.",
      },
    },
    bygget: {
      heading: { no: "Hva som er bygget eller utviklet", en: "What has been built or developed" },
      body: {
        no: "Prosjektet leverer en helhetlig implementeringsplan — ikke en produksjonssatt plattform. Som del av arbeidet ble digitale konsepter utviklet for å teste løsningslogikken:",
        en: "The project delivers a comprehensive implementation plan — not a production-deployed platform. As part of the work, digital concepts were developed to test the solution logic:",
      },
      items: [
        { no: "Behovsanalyse og forretningsforankring", en: "Needs analysis and business anchoring" },
        { no: "Løsningsdesign med teknologi og arkitektur", en: "Solution design with technology and architecture" },
        { no: "Roadmap og faseinndelt gjennomføringsplan", en: "Roadmap and phased execution plan" },
        { no: "Governance-rammeverk, personvern og risikovurdering", en: "Governance framework, privacy and risk assessment" },
        { no: "Human-in-the-loop og ansvarlig implementering", en: "Human-in-the-loop and responsible implementation" },
        { no: "Digitale konsepter for front-end, chatbot, tekst- og taleinput, flerspråklig støtte, behovsavklaring og bookinglogikk", en: "Digital concepts for front-end, chatbot, text and voice input, multilingual support, needs clarification and booking logic" },
      ],
    },
    moduler: {
      heading: { no: "Sentrale leveranser og funksjonsområder", en: "Core deliverables and functional areas" },
      intro: {
        no: "Prosjektoppgaven strukturerer implementeringsarbeidet i tydelige leveranseområder:",
        en: "The master's project structures the implementation work in clear delivery areas:",
      },
      modules: [
        {
          tittel: { no: "Forretnings- og brukerforståelse", en: "Business and user understanding" },
          beskrivelse: {
            no: "Kartlegging av forretningsbehov, kundereise og brukerbehov som grunnlag for AI-prioritering.",
            en: "Mapping of business needs, customer journey and user needs as a basis for AI prioritisation.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Behovsanalyse og prioritering", en: "Needs analysis and prioritisation" },
          beskrivelse: {
            no: "Strukturert vurdering av AI-muligheter, verdi og risiko før valg av løsningsretning.",
            en: "Structured assessment of AI opportunities, value and risk before choosing solution direction.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Løsningsdesign og teknologi", en: "Solution design and technology" },
          beskrivelse: {
            no: "Beskrivelse av teknologi, arkitektur og integrasjonsbehov med tydelige avgrensninger.",
            en: "Description of technology, architecture and integration needs with clear boundaries.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Governance og personvern", en: "Governance and privacy" },
          beskrivelse: {
            no: "Rammeverk for ansvarlig bruk, personvern, sikkerhet og menneskelig kontroll.",
            en: "Framework for responsible use, privacy, security and human control.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Roadmap og organisering", en: "Roadmap and organisation" },
          beskrivelse: {
            no: "Faseplan, roller og gjennomføringslogikk for virksomheten.",
            en: "Phase plan, roles and execution logic for the organisation.",
          },
          bygget: true,
        },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan prosjektet eller løsningen fungerer", en: "How the project or solution works" },
      intro: {
        no: "Implementeringsmodellen brukes slik i praksis — uavhengig av bransje:",
        en: "The implementation model is used in practice as follows — regardless of industry:",
      },
      steps: [
        {
          tittel: { no: "Identifiser muligheter", en: "Identify opportunities" },
          beskrivelse: {
            no: "Kartlegg hvor AI kan skape verdi i virksomhetens kjerneprosesser og brukerreiser.",
            en: "Map where AI can create value in the organisation's core processes and user journeys.",
          },
        },
        {
          tittel: { no: "Prioriter og avgrens", en: "Prioritise and scope" },
          beskrivelse: {
            no: "Velg bruksområder med tydelig verdi, håndterbar risiko og realistisk gjennomførbarhet.",
            en: "Choose use areas with clear value, manageable risk and realistic feasibility.",
          },
        },
        {
          tittel: { no: "Design løsning og governance", en: "Design solution and governance" },
          beskrivelse: {
            no: "Beskriv teknologi, dataflyt, personvern og human-in-the-loop før utvikling.",
            en: "Describe technology, data flow, privacy and human-in-the-loop before development.",
          },
        },
        {
          tittel: { no: "Planlegg gjennomføring", en: "Plan execution" },
          beskrivelse: {
            no: "Lag roadmap med faser, roller og kontrollpunkter for ansvarlig implementering.",
            en: "Create a roadmap with phases, roles and control points for responsible implementation.",
          },
        },
      ],
    },
    relevans: {
      heading: { no: "Hvorfor prosjektet er relevant", en: "Why the project is relevant" },
      sections: [
        {
          tittel: { no: "For ledere og virksomheter", en: "For leaders and organisations" },
          tekst: {
            no: "Gir et praktisk rammeverk for å gå fra AI-interesse til gjennomførbar plan — med fokus på verdi, risiko og ansvarlig bruk.",
            en: "Provides a practical framework for moving from AI interest to executable plan — with focus on value, risk and responsible use.",
          },
        },
        {
          tittel: { no: "For arbeidsgivere og rekrutterere", en: "For employers and recruiters" },
          tekst: {
            no: "Dokumenterer kombinasjonen av kommersiell forståelse, brukerreise, governance og praktisk AI-implementering — med akademisk forankring fra BI.",
            en: "Documents the combination of commercial understanding, user journey, governance and practical AI implementation — with academic grounding from BI.",
          },
        },
        {
          tittel: { no: "Overførbar læring", en: "Transferable learning" },
          tekst: {
            no: "Metodikken kan brukes som utgangspunkt for workshop, implementeringskart og lederdialog i andre virksomheter — uten å kreve identisk bransjekontekst.",
            en: "The methodology can be used as a starting point for workshops, implementation maps and leadership dialogue in other organisations — without requiring an identical industry context.",
          },
        },
      ],
    },
    status: {
      heading: { no: "Status, modenhet og avgrensninger", en: "Status, maturity and limitations" },
      body: {
        no: "Fullført prosjektoppgave og praktisk implementeringscase med utviklet løsnings- og gjennomføringslogikk. Digitale konsepter i oppgaven er utviklet for å teste metoden — ikke presentert som produksjonssatte løsninger. Prosjektet er ikke en medisinsk, klinisk eller journalnær pasientløsning.",
        en: "Completed master's project and practical implementation case with developed solution and execution logic. Digital concepts in the assignment were developed to test the method — not presented as production-deployed solutions. The project is not a medical, clinical or journal-adjacent patient solution.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Videreutvikling av løsningen", en: "Further development of the solution" },
        punkter: [
          { no: "Workshop-format for leder- og teamdialog", en: "Workshop format for leadership and team dialogue" },
          { no: "Implementeringskart og faseplaner", en: "Implementation maps and phase plans" },
          { no: "AI-use-case-prioritering", en: "AI use case prioritisation" },
          { no: "Governance-rammeverk tilpasset modenhetsnivå", en: "Governance frameworks adapted to maturity level" },
          { no: "Konkrete gjennomføringsplaner for transformasjonsprosjekter", en: "Concrete execution plans for transformation projects" },
        ],
      },
      tilpasning: {
        heading: { no: "Tilpasning til funksjoner og bransjer", en: "Adaptation to functions and industries" },
        punkter: [
          { no: "Andre virksomheter og modenhetsnivåer", en: "Other organisations and maturity levels" },
          { no: "Servicebedrifter med manuelle henvendelser", en: "Service businesses with manual inquiries" },
          { no: "SMB-er som vil strukturere AI-arbeid før større investeringer", en: "SMBs that want to structure AI work before larger investments" },
        ],
      },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: {
        no: "Ta kontakt dersom du ønsker å diskutere hvordan et konkret AI-case kan utvikles fra idé til praktisk og ansvarlig implementeringsplan.",
        en: "Get in touch if you would like to discuss how a concrete AI case can be developed from idea to practical and responsible implementation plan.",
      },
    },
    utvikler,
  },
};
