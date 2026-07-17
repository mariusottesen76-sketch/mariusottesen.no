import type { StrategicPlatformProject } from "./types";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Initiativtaker og kommersiell leder", en: "Initiator and commercial leader" },
  beskrivelse: {
    no: "Initiativtaker til AI Value Lab Oslo. Utvikler faglige arenaer og praktisk AI-forståelse i skjæringspunktet mellom kommersiell ledelse, transformasjon, teknologi og ansvarlig implementering.",
    en: "Initiator of AI Value Lab Oslo. Develops professional arenas and practical AI understanding at the intersection of commercial leadership, transformation, technology and responsible implementation.",
  },
};

export const aiValueLabOsloPlatform: StrategicPlatformProject = {
  slug: "ai-value-lab-oslo",
  prosjektId: "ai-value-lab-oslo-2026",
  detailPath: "/ai-value-lab-oslo",
  meta: {
    title: {
      no: "AI Value Lab Oslo – praktisk AI-verdi | Marius Ottesen",
      en: "AI Value Lab Oslo – practical AI value | Marius Ottesen",
    },
    description: {
      no: "Tverrfaglig initiativ for praktisk utforskning av AI-verdi, ansvarlig bruk og virksomhetsnære problemstillinger — med fokus på SMB-relevans og use case-prioritering.",
      en: "Cross-disciplinary initiative for practical exploration of AI value, responsible use and business-near challenges — with focus on SMB relevance and use case prioritisation.",
    },
    ogImage: "/images/ai-value-lab-banner.png",
    canonicalPath: "/ai-value-lab-oslo",
  },
  teaser: {
    undertittel: {
      no: "Praktisk AI-verdi gjennom reelle case",
      en: "Practical AI value through real cases",
    },
    intro: {
      no: "Tverrfaglig lærings- og utviklingsinitiativ.",
      en: "Cross-disciplinary learning and development initiative.",
    },
    blokker: {
      utfordring: {
        no: "Mange mangler struktur for å identifisere hvor AI skaper verdi.",
        en: "Many lack structure to identify where AI creates value.",
      },
      bygget: {
        no: "Arena for læring, sparring og praktisk testing av AI-konsepter.",
        en: "Arena for learning, sparring and practical testing of AI concepts.",
      },
      relevans: {
        no: "SMB-ledere, ledergrupper og samarbeidspartnere.",
        en: "SMB leaders, leadership teams and partners.",
      },
      status: {
        no: "Faglig initiativ i videre utvikling — ikke kommersiell tjeneste.",
        en: "Professional initiative under further development — not a commercial service.",
      },
    },
    videreutvikling: {
      no: "Use case-prioritering, praktiske øvelsesarenaer og governance light.",
      en: "Use case prioritisation, practical practice arenas and governance light.",
    },
  },
  detail: {
    statusBadge: {
      no: "Faglig og praktisk initiativ",
      en: "Professional and practical initiative",
    },
    hero: {
      verdiforslag: {
        no: "Hvor skaper AI faktisk verdi i virksomheten?",
        en: "Where does AI actually create value in the organisation?",
      },
      executiveSummary: {
        no: "AI Value Lab Oslo er et tverrfaglig initiativ der teknologi, forretning og praktisk utvikling møtes. Målet er å utforske hvordan AI kan forstås, testes og brukes ansvarlig i virksomhetsnære problemstillinger — ikke som konsulentselskap eller etablert kommersiell tjeneste, men som faglig lærings- og samarbeidsarena. Initiativet bruker konkrete case som læringsarena for å bygge kompetanse, prøve ut verktøy og utvikle praktisk forståelse på tvers av fagområder.",
        en: "AI Value Lab Oslo is a cross-disciplinary initiative where technology, business and practical development meet. The goal is to explore how AI can be understood, tested and used responsibly in business-near challenges — not as a consulting firm or established commercial service, but as a professional learning and collaboration arena. The initiative uses concrete cases as learning arenas to build competence, try tools and develop practical understanding across disciplines.",
      },
      bildeAlt: {
        no: "AI Value Lab Oslo – praktisk AI-verdi for virksomheter",
        en: "AI Value Lab Oslo – practical AI value for organisations",
      },
    },
    utfordring: {
      heading: { no: "Bakgrunn og problemstilling", en: "Background and problem area" },
      body: {
        no: "Mange virksomheter har interesse for AI, men mangler tid, struktur og kompetanse til å identifisere hvor teknologien faktisk kan skape verdi. Utfordringen er ofte å gå fra generell AI-nysgjerrighet til konkrete use case, prioriterte arbeidsflyter, realistiske piloter og ansvarlig implementering — uten å investere bredt før man har et felles bilde.",
        en: "Many organisations are interested in AI but lack the time, structure and competence to identify where the technology can actually create value. The challenge is often moving from general AI curiosity to concrete use cases, prioritised workflows, realistic pilots and responsible implementation — without investing broadly before there is a shared picture.",
      },
    },
    logikk: {
      heading: { no: "Arbeidsform og tilnærming", en: "Working method and approach" },
      body: {
        no: "Initiativet vurderer AI gjennom konkrete problemer, ikke bare verktøydemoer. Kjernen er ansvarlig bruk, praktisk læring og løsninger som tåler virkeligheten:",
        en: "The initiative assesses AI through concrete problems, not only tool demos. The core is responsible use, practical learning and solutions that work in reality:",
      },
      steps: [
        {
          tittel: { no: "Problemforståelse", en: "Problem understanding" },
          beskrivelse: {
            no: "Starte med virksomhetsnære problemstillinger, ikke teknologi først.",
            en: "Start with business-near challenges, not technology first.",
          },
        },
        {
          tittel: { no: "Use case-prioritering", en: "Use case prioritisation" },
          beskrivelse: {
            no: "Avklare hvor AI kan gi mest verdi og hva som bør testes først.",
            en: "Clarify where AI can deliver most value and what should be tested first.",
          },
        },
        {
          tittel: { no: "Praktisk testing", en: "Practical testing" },
          beskrivelse: {
            no: "Prøve verktøy og arbeidsformer i konkrete case og læringsarenaer.",
            en: "Try tools and working methods in concrete cases and learning arenas.",
          },
        },
        {
          tittel: { no: "Ansvarlig implementering", en: "Responsible implementation" },
          beskrivelse: {
            no: "Koble teknologi, mennesker og forretning uten å overdrive modenhet.",
            en: "Connect technology, people and business without overstating maturity.",
          },
        },
      ],
    },
    bygget: {
      heading: { no: "Hva som er etablert", en: "What has been established" },
      body: {
        no: "AI Value Lab Oslo er etablert som en arena for læring, sparring, praktisk testing og utvikling av AI-relaterte konsepter. Gruppen består av Marius Ottesen, Tatiana Hanecakova og Ole Mjelde, med komplementær erfaring innen kommersiell ledelse, finans, digitalisering, innovasjon, organisasjonsutvikling og praktisk AI-bruk. Marius var initiativtaker til etableringen.",
        en: "AI Value Lab Oslo has been established as an arena for learning, sparring, practical testing and development of AI-related concepts. The group consists of Marius Ottesen, Tatiana Hanecakova and Ole Mjelde, with complementary experience in commercial leadership, finance, digitalisation, innovation, organisational development and practical AI use. Marius was the initiator behind establishing the group.",
      },
      items: [
        { no: "Tverrfaglig lærings- og utviklingsarena", en: "Cross-disciplinary learning and development arena" },
        { no: "Praktisk utforskning gjennom reelle case", en: "Practical exploration through real cases" },
        { no: "Fokus på ansvarlig bruk og gjennomføringsevne", en: "Focus on responsible use and execution capability" },
        { no: "Kobling mellom teknologi, mennesker og forretning", en: "Connection between technology, people and business" },
      ],
    },
    moduler: {
      heading: { no: "Temaer og fagområder", en: "Themes and subject areas" },
      intro: {
        no: "Initiativet utforsker blant annet:",
        en: "The initiative explores among other areas:",
      },
      modules: [
        {
          tittel: { no: "AI-verdi og use cases", en: "AI value and use cases" },
          beskrivelse: {
            no: "Identifisere og prioritere hvor AI kan skape verdi i arbeidsprosesser.",
            en: "Identify and prioritise where AI can create value in work processes.",
          },
          bygget: true,
        },
        {
          tittel: { no: "SMB og lederperspektiv", en: "SMB and leadership perspective" },
          beskrivelse: {
            no: "Praktisk relevans for mindre og mellomstore virksomheter og ledergrupper.",
            en: "Practical relevance for small and medium-sized organisations and leadership teams.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Beslutningsstøtte og kommunikasjon", en: "Decision support and communication" },
          beskrivelse: {
            no: "Hvordan AI kan støtte prioritering, dialog og gjennomføring.",
            en: "How AI can support prioritisation, dialogue and execution.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Ansvarlig implementering", en: "Responsible implementation" },
          beskrivelse: {
            no: "Governance light, modenhet og realistiske neste steg.",
            en: "Governance light, maturity and realistic next steps.",
          },
          bygget: true,
        },
      ],
    },
    hvordan: {
      heading: { no: "Relevans for SMB, ledere og samarbeidspartnere", en: "Relevance for SMBs, leaders and partners" },
      steps: [
        {
          tittel: { no: "For SMB-ledere", en: "For SMB leaders" },
          beskrivelse: {
            no: "Forstå hvor AI faktisk kan skape verdi uten å investere bredt for tidlig.",
            en: "Understand where AI can actually create value without investing too broadly too early.",
          },
        },
        {
          tittel: { no: "For arbeidsgivere", en: "For employers" },
          beskrivelse: {
            no: "Viser evne til å bygge faglige arenaer og praktisk AI-forståelse.",
            en: "Shows ability to build professional arenas and practical AI understanding.",
          },
        },
        {
          tittel: { no: "For samarbeidspartnere", en: "For partners" },
          beskrivelse: {
            no: "Faglig sparring og utforskning av felles problemstillinger — når konteksten passer.",
            en: "Professional sparring and exploration of shared challenges — when the context fits.",
          },
        },
      ],
    },
    relevans: {
      heading: { no: "Status og avgrensninger", en: "Status and limitations" },
      body: {
        no: "Initiativet er et faglig og praktisk lærings- og utviklingsinitiativ i videre utvikling. Det skal ikke fremstilles som konsulentselskap, etablert kommersiell tjeneste, kundeprogram, formell inkubator eller dokumentert leveranseplattform.",
        en: "The initiative is a professional and practical learning and development initiative under further development. It should not be presented as a consulting firm, established commercial service, client programme, formal incubator or documented delivery platform.",
      },
    },
    status: {
      heading: { no: "Videre utvikling og samarbeidsmuligheter", en: "Further development and collaboration opportunities" },
      body: {
        no: "Videre potensial inkluderer AI Growth Sprint-spor, use case-prioritering, prosesskartlegging, praktiske øvelsesarenaer og governance light — som utviklingsretning dersom det oppstår en passende kontekst for samarbeid.",
        en: "Further potential includes AI Growth Sprint tracks, use case prioritisation, process mapping, practical practice arenas and governance light — as development direction if a suitable context for collaboration arises.",
      },
    },
    skalerbarhet: {
      heading: { no: "Tilpasning til nettverk og bransjer", en: "Adaptation to networks and industries" },
      platform: {
        heading: { no: "Mulig videreutvikling", en: "Possible further development" },
        punkter: [
          { no: "AI Growth Sprint-spor", en: "AI Growth Sprint tracks" },
          { no: "Use case-prioritering og prosesskartlegging", en: "Use case prioritisation and process mapping" },
          { no: "Praktiske øvelsesarenaer", en: "Practical practice arenas" },
          { no: "Governance light for team og virksomheter", en: "Governance light for teams and organisations" },
        ],
      },
      tilpasning: {
        heading: { no: "Målgrupper og samarbeidsformer", en: "Audiences and forms of collaboration" },
        punkter: [
          { no: "SMB-ledere og ledergrupper", en: "SMB leaders and leadership teams" },
          { no: "Fagmiljøer og nettverk", en: "Professional communities and networks" },
          { no: "Samarbeidspartnere med felles problemstillinger", en: "Partners with shared challenges" },
        ],
      },
    },
    avslutning: {
      heading: { no: "Ta kontakt om samarbeid", en: "Get in touch about collaboration" },
      body: {
        no: "Ta kontakt dersom du ønsker faglig dialog om AI Value Lab Oslo, praktisk AI-verdi eller mulig samarbeid rundt virksomhetsnære problemstillinger.",
        en: "Get in touch if you would like a professional conversation about AI Value Lab Oslo, practical AI value or possible collaboration around business-near challenges.",
      },
    },
    utvikler,
  },
};
