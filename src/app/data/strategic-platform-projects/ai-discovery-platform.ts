import {
  AI_DISCOVERY_CHECK_URL,
  AI_DISCOVERY_HERO_IMAGE,
  AI_DISCOVERY_PARTNER_LABEL,
  AI_DISCOVERY_PLAYBOOK_URL,
} from "../../lib/ai-discovery-brand";
import type { StrategicPlatformProject } from "./types";

const utvikler = {
  navn: { no: "Thomas Holm", en: "Thomas Holm" },
  rolle: {
    no: "Grunnlegger og faglig ansvarlig for AI Discovery",
    en: "Founder and professional lead for AI Discovery",
  },
  beskrivelse: {
    no: "Thomas Holm har utviklet AI Discovery — inkludert AI Discovery Check, analysemetoden og The AI Discovery Playbook. Row Solutions tilbyr metoden som del av sitt tjenestetilbud. Marius Ottesen er partner i Row Solutions og dokumenterer løsningen her som relatert porteføljeinnhold — ikke som utvikler, teknisk arkitekt eller produkteier.",
    en: "Thomas Holm has developed AI Discovery — including AI Discovery Check, the analysis method and The AI Discovery Playbook. Row Solutions offers the method as part of its service portfolio. Marius Ottesen is a partner in Row Solutions and documents the solution here as related portfolio content — not as developer, technical architect or product owner.",
  },
};

export const aiDiscoveryPlatform: StrategicPlatformProject = {
  slug: "ai-discovery",
  prosjektId: "ai-discovery-2026-11",
  detailPath: "/ai-discovery",
  meta: {
    title: {
      no: "AI Discovery – synlighet i AI-kundereiser | Marius Ottesen",
      en: "AI Discovery – visibility in AI customer journeys | Marius Ottesen",
    },
    description: {
      no: "Partnerløsning utviklet av Thomas Holm. Undersøker hvordan virksomheter blir funnet og forstått i ChatGPT, Claude og Perplexity — tilbudt gjennom Row Solutions.",
      en: "Partner solution developed by Thomas Holm. Explores how businesses are found and understood in ChatGPT, Claude and Perplexity — offered through Row Solutions.",
    },
    ogImage: AI_DISCOVERY_HERO_IMAGE,
    canonicalPath: "/ai-discovery",
  },
  teaser: {
    undertittel: {
      no: "Hvordan blir virksomheten funnet og forstått av AI?",
      en: "How is the business found and understood by AI?",
    },
    intro: {
      no: "AI Discovery undersøker hvordan virksomheter blir identifisert, funnet og presentert når potensielle kunder bruker AI i research- og vurderingsfasen.",
      en: "AI Discovery explores how businesses are identified, found and presented when potential customers use AI in the research and evaluation phase.",
    },
    blokker: {
      utfordring: {
        no: "Kundereisen kan starte før nettsiden besøkes. AI kan finne andre aktører, tolke informasjon annerledes eller la virksomheten stå utenfor kortlisten.",
        en: "The customer journey may start before the website is visited. AI may find other players, interpret information differently or leave the business off the shortlist.",
      },
      bygget: {
        no: "Thomas Holm har utviklet AI Discovery Check, metoden og Playbooken. Row Solutions tilbyr AI Discovery som analyse og tjeneste.",
        en: "Thomas Holm has developed AI Discovery Check, the method and the Playbook. Row Solutions offers AI Discovery as analysis and service.",
      },
      relevans: {
        no: "Gir observasjoner som kan støtte prioritering av innhold, struktur, kilder og synlighetstiltak — ikke garantert plassering i AI-svar.",
        en: "Provides observations that can support prioritisation of content, structure, sources and visibility measures — not guaranteed placement in AI answers.",
      },
      status: {
        no: AI_DISCOVERY_PARTNER_LABEL.no,
        en: AI_DISCOVERY_PARTNER_LABEL.en,
      },
    },
    videreutvikling: {
      no: "Metode, verktøy og Playbook utvikles videre av Thomas Holm og Row Solutions. Denne siden oppdateres når porteføljedokumentasjonen endres.",
      en: "Method, tool and Playbook are further developed by Thomas Holm and Row Solutions. This page is updated when portfolio documentation changes.",
    },
  },
  detail: {
    statusBadge: AI_DISCOVERY_PARTNER_LABEL,
    hero: {
      verdiforslag: {
        no: "Synlighet og forståelse i AI — før kunden lander på nettsiden.",
        en: "Visibility and perception in AI — before the customer lands on the website.",
      },
      executiveSummary: {
        no: "Det består av tre sammenhengende, men ulike deler: AI Discovery Check (konkret undersøkelsesverktøy på aidiscovery.no), analysemetoden (struktur for kartlegging og oppfølging hos Row) og The AI Discovery Playbook (faglig metodeverk). Verktøyet undersøker observasjoner i ChatGPT, Claude og Perplexity — uten å garantere synlighet, anbefaling eller korrekthet i alle svar. Utviklet av Thomas Holm og tilbudt gjennom Row Solutions.",
        en: "It consists of three related but distinct parts: AI Discovery Check (concrete investigation tool at aidiscovery.no), the analysis method (structure for mapping and follow-up at Row) and The AI Discovery Playbook (professional methodology). The tool investigates observations in ChatGPT, Claude and Perplexity — without guaranteeing visibility, recommendation or correctness in all answers. Developed by Thomas Holm and offered through Row Solutions.",
      },
      bildeAlt: {
        no: "AI Discovery – analyse av synlighet i AI-drevne kundereiser",
        en: "AI Discovery – analysis of visibility in AI-driven customer journeys",
      },
    },
    kortFortalt: {
      heading: { no: "Hva AI Discovery er", en: "What AI Discovery is" },
      body: {
        no: "AI Discovery er en analysemetode for å undersøke hvordan en virksomhet fremstår i AI-drevne research- og vurderingssituasjoner. Den ser på hva virksomheten kommuniserer, hvilke kilder som kan påvirke bildet, og hva som skjer når brukeren spør uten å nevne virksomheten ved navn. Det er én inngang i veien fra synlighet til handling hos Row Solutions — ikke hele løsningen i seg selv, og ikke et Marius Ottesen Consulting-produkt.",
        en: "AI Discovery is an analysis method for exploring how a business appears in AI-driven research and evaluation situations. It looks at what the business communicates, which sources may influence the picture, and what happens when the user asks without naming the business. It is one entry point on the path from visibility to action at Row Solutions — not the entire solution in itself, and not a Marius Ottesen Consulting product.",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen", en: "The challenge" },
      body: {
        no: "Potensielle kunder kan bruke ChatGPT, Claude, Perplexity og andre AI-grensesnitt for å forstå et problem, finne leverandører og sammenligne alternativer før de besøker nettsiden. En virksomhet kan ha god kommunikasjon og likevel ikke dukke opp i relevante situasjoner, bli misforstått eller vurderes på utdatert informasjon. Dette er observasjoner vi kan undersøke — ikke et sikkert årsaksforhold, og ikke noe AI Discovery automatisk kan «fikse».",
        en: "Potential customers may use ChatGPT, Claude, Perplexity and other AI interfaces to understand a problem, find providers and compare options before visiting the website. A business may have good communication and still not appear in relevant situations, be misunderstood or be assessed on outdated information. These are observations we can investigate — not a certain causal link, and not something AI Discovery can automatically “fix”.",
      },
    },
    logikk: {
      heading: { no: "Metodens arbeidsløype", en: "The method workflow" },
      body: {
        no: "Row Solutions beskriver en enkel sløyfe: først undersøkes hvordan virksomheten blir funnet, forstått og vurdert — deretter prioriteres hva som er verdt å gjøre, tiltak gjennomføres avgrenset, og det måles på nytt. Sløyfen er arbeidsmåte, ikke garanti for synlighet.",
        en: "Row Solutions describes a simple loop: first how the business is found, understood and assessed is investigated — then what is worth doing is prioritised, measures are implemented in a bounded way, and measurement is repeated. The loop is a way of working, not a guarantee of visibility.",
      },
    },
    bygget: {
      heading: {
        no: "Hva Thomas Holm har utviklet",
        en: "What Thomas Holm has developed",
      },
      items: [
        {
          no: "AI Discovery Check — publisert verktøy på aidiscovery.no for definerte undersøkelser i tre AI-tjenester",
          en: "AI Discovery Check — published tool at aidiscovery.no for defined investigations in three AI services",
        },
        {
          no: "AI Discovery-metoden — struktur for kartlegging, prioritering, tiltak og ny måling (tilbys hos Row Solutions)",
          en: "AI Discovery method — structure for mapping, prioritisation, measures and re-measurement (offered at Row Solutions)",
        },
        {
          no: "The AI Discovery Playbook — faglig metodeverk om den nye kundereisen og målbar AI-discovery (aidiscovery.no/playbook)",
          en: "The AI Discovery Playbook — professional methodology on the new customer journey and measurable AI discovery (aidiscovery.no/playbook)",
        },
      ],
    },
    contentSections: [
      {
        heading: {
          no: "Slik skiller delene seg",
          en: "How the parts differ",
        },
        body: {
          no: "AI Discovery Check er det konkrete analyseproduktet du kan prøve på aidiscovery.no.\n\nAI Discovery-metoden er den bredere arbeidsmåten Row Solutions bruker i kartlegging, prioritering og oppfølging.\n\nThe AI Discovery Playbook er metodeverket som forklarer begreper, kilder og avgrensninger — uten å erstatte Check eller rådgivning.\n\nIkke bland disse: Check viser observasjoner fra definerte kjøringer; Playbooken forklarer; metoden strukturerer videre arbeid.",
          en: "AI Discovery Check is the concrete analysis product you can try at aidiscovery.no.\n\nThe AI Discovery method is the broader working approach Row Solutions uses in mapping, prioritisation and follow-up.\n\nThe AI Discovery Playbook is the methodology that explains concepts, sources and limitations — without replacing Check or advisory work.\n\nDo not conflate them: Check shows observations from defined runs; the Playbook explains; the method structures further work.",
        },
      },
      {
        heading: {
          no: "Marius Ottesens tilknytning",
          en: "Marius Ottesen's connection",
        },
        body: {
          no: "Marius Ottesen er partner i Row Solutions sammen med Thomas Holm. Han dokumenterer AI Discovery i porteføljen for å vise metode- og verktøytilbud i Row-kontekst — inkludert kobling til kommersiell utvikling, synlighet og praktisk AI. Marius skal ikke fremstå som utvikler, teknisk arkitekt eller produkteier av AI Discovery. For leveranse og metode, se Row Solutions.",
          en: "Marius Ottesen is a partner in Row Solutions together with Thomas Holm. He documents AI Discovery in the portfolio to show method and tool offerings in Row context — including links to commercial development, visibility and practical AI. Marius should not be presented as developer, technical architect or product owner of AI Discovery. For delivery and method, see Row Solutions.",
        },
      },
    ],
    hvordan: {
      heading: {
        no: "Hvordan AI Discovery Check fungerer",
        en: "How AI Discovery Check works",
      },
      intro: {
        no: "Per publisert produktdokumentasjon (oktober 2026) kjører Check definerte spørsmål i ChatGPT, Claude og Perplexity:",
        en: "According to published product documentation (October 2026), Check runs defined questions in ChatGPT, Claude and Perplexity:",
      },
      detaljpunkter: [
        {
          no: "Hva AI svarer når virksomhetsnavnet er kjent («Hva tilbyr X?») — inkludert hvilke nettsider svarene er knyttet til.",
          en: "What AI answers when the business name is known (“What does X offer?”) — including which websites the answers are linked to.",
        },
        {
          no: "Om virksomheten nevnes når kunden beskriver inntil tre områder de ønsker å være kjent for — uten å oppgi navn (to kjøringer per område per AI-tjeneste).",
          en: "Whether the business is mentioned when the customer describes up to three areas they want to be known for — without giving the name (two runs per area per AI service).",
        },
        {
          no: "Forskjeller mellom AI-tjenestene, andre virksomheter som dukker opp, og relevante kilder som fremkommer.",
          en: "Differences between AI services, other businesses that appear, and relevant sources that emerge.",
        },
        {
          no: "Check bruker ingen universell synlighetsscore eller prosent, og avgjør ikke automatisk om forståelsen er korrekt. Det gir inntil 21 svar i en standardkjøring.",
          en: "Check does not use a universal visibility score or percentage, and does not automatically determine whether understanding is correct. It provides up to 21 answers in a standard run.",
        },
      ],
    },
    relevans: {
      heading: {
        no: "Relevans for virksomheter og ledere",
        en: "Relevance for businesses and leaders",
      },
      sections: [
        {
          tittel: { no: "Før direkte kontakt", en: "Before direct contact" },
          tekst: {
            no: "Kan gi bedre grunnlag for å forstå hvordan virksomheten fremstår når kunder spør AI før de tar kontakt.",
            en: "Can provide a better basis for understanding how the business appears when customers ask AI before making contact.",
          },
        },
        {
          tittel: { no: "Prioritering og oppfølging", en: "Prioritisation and follow-up" },
          tekst: {
            no: "Kan identifisere gap mellom ønsket og observert posisjon, og støtte valg om innhold, struktur og synlighetstiltak — etterfulgt av ny måling der det er relevant.",
            en: "Can identify gaps between desired and observed positioning, and support choices about content, structure and visibility measures — followed by re-measurement where relevant.",
          },
        },
        {
          tittel: { no: "Row Solutions-kontekst", en: "Row Solutions context" },
          tekst: {
            no: "Metoden inngår i Row sitt tilbud om kartlegging og kommersiell utvikling. Se også prosjektet Row Solutions i porteføljen.",
            en: "The method is part of Row's offering for mapping and commercial development. See also the Row Solutions project in the portfolio.",
          },
        },
      ],
    },
    status: {
      heading: { no: "Status, modenhet og begrensninger", en: "Status, maturity and limitations" },
      body: {
        no: "AI Discovery Check er publisert og kan prøves på aidiscovery.no. Metoden og Playbooken er live dokumentasjon. AI Discovery viser observasjoner fra definerte undersøkelser og kan ikke garantere hvordan AI-systemer vil svare i alle situasjoner eller over tid. Ingen dokumentert kundeeffekt eller omsetning er knyttet til denne porteføljesiden.",
        en: "AI Discovery Check is published and can be tried at aidiscovery.no. The method and Playbook are live documentation. AI Discovery shows observations from defined investigations and cannot guarantee how AI systems will answer in all situations or over time. No documented customer effect or revenue is linked to this portfolio page.",
      },
    },
    skalerbarhet: {
      heading: {
        no: "Videreutvikling og anvendelsesmuligheter",
        en: "Further development and application options",
      },
      platform: {
        heading: { no: "Videre utvikling", en: "Further development" },
        punkter: [
          {
            no: "Utvidet metode og Playbook-innhold hos Thomas Holm",
            en: "Expanded method and Playbook content by Thomas Holm",
          },
          {
            no: "Rådgivning, kartlegging og oppfølging gjennom Row Solutions",
            en: "Advisory work, mapping and follow-up through Row Solutions",
          },
          {
            no: "Gjentatt måling etter innholds- og strukturtiltak",
            en: "Repeated measurement after content and structure measures",
          },
        ],
      },
      tilpasning: {
        heading: { no: "Typiske bruksområder", en: "Typical use cases" },
        punkter: [
          {
            no: "SMB og kunnskapsbedrifter med synlighets- og posisjoneringsbehov",
            en: "SMEs and knowledge businesses with visibility and positioning needs",
          },
          {
            no: "Markeds- og kommunikasjonsmiljøer som vil måle AI-discovery systematisk",
            en: "Marketing and communications environments that want to measure AI discovery systematically",
          },
          {
            no: "Inngang til videre arbeid på rowsolutions.no — ikke frittstående MOC-leveranse",
            en: "Entry point to further work at rowsolutions.no — not a standalone MOC delivery",
          },
        ],
      },
    },
    avslutning: {
      heading: { no: "Neste steg", en: "Next steps" },
      body: {
        no: "Prøv AI Discovery Check, les metodebeskrivelsen hos Row Solutions, eller utforsk Row Solutions-prosjektet i porteføljen for helheten i det kommersielle samarbeidet.",
        en: "Try AI Discovery Check, read the method description at Row Solutions, or explore the Row Solutions project in the portfolio for the full commercial collaboration picture.",
      },
      showContactPrimary: false,
    },
    utvikler,
  },
  teaserCta: {
    primary: { no: "Prøv AI Discovery Check", en: "Try AI Discovery Check" },
  },
};