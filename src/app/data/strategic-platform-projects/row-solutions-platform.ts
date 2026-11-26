import { ROW_SOLUTIONS_HERO_IMAGE } from "../../lib/row-solutions-brand";
import type { StrategicPlatformProject } from "./types";

const ROW_METHOD_AI_DISCOVERY = "https://rowsolutions.no/metoder/ai-discovery";
const ROW_METHOD_AI_READINESS = "https://rowsolutions.no/metoder/ai-readiness-scan";
const ROW_METHOD_FRA_INNSIKT = "https://rowsolutions.no/metoder/fra-innsikt-til-resultater";
const ROW_METHOD_PSC = "https://rowsolutions.no/metoder/predictive-sales-coach";
const ROW_METHOD_SALGSFLYT = "https://rowsolutions.no/metoder/smb-salgsflyt-sjekken";

export const rowSolutionsPlatform: StrategicPlatformProject = {
  slug: "row-solutions",
  prosjektId: "row-solutions-2026",
  detailPath: "/row-solutions",
  meta: {
    title: {
      no: "Row Solutions | Marius Ottesen",
      en: "Row Solutions | Marius Ottesen",
    },
    description: {
      no: "Row Solutions — aktivt kommersielt rådgivningssamarbeid for SMB med Marius Ottesen, Thomas Holm og Gunnar Gundersen. Publisert plattform på rowsolutions.no. Denne siden dokumenterer Marius' porteføljebidrag — felles markedsnavn, ikke eget registrert AS.",
      en: "Row Solutions — active commercial advisory collaboration for SMEs with Marius Ottesen, Thomas Holm and Gunnar Gundersen. Published platform at rowsolutions.no. This page documents Marius' portfolio contribution — shared brand name, not a separately registered company.",
    },
    ogImage: ROW_SOLUTIONS_HERO_IMAGE,
    canonicalPath: "/row-solutions",
  },
  teaser: {
    undertittel: {
      no: "Retning. Kraft. Fremdrift. Resultat.",
      en: "Direction. Power. Momentum. Results.",
    },
    intro: {
      no: "Kommersielt samarbeid — ikke bare et nettsideprosjekt.",
      en: "Commercial collaboration — not just a website project.",
    },
    blokker: {
      utfordring: {
        no: "SMB-ledere opplever friksjon mellom synlighet, salg, kundedialog og oppfølging — uten én tydelig struktur.",
        en: "SMB leaders experience friction between visibility, sales, customer dialogue and follow-up — without one clear structure.",
      },
      bygget: {
        no: "Strategi, tjenestestruktur, metoder, verktøy og publisert nettside.",
        en: "Strategy, service structure, methods, tools and published website.",
      },
      relevans: {
        no: "Viser kommersiell utvikling, transformasjon og AI-assistert gjennomføringsevne.",
        en: "Shows commercial development, transformation and AI-assisted execution capability.",
      },
      status: {
        no: "Publisert nettside og aktivt kommersielt samarbeid — rowsolutions.no er live.",
        en: "Published website and active commercial collaboration — rowsolutions.no is live.",
      },
    },
    videreutvikling: {
      no: "Faginnhold, case, konverteringsanalyse, AI Discovery, SEO/AEO og CRM-integrasjon.",
      en: "Professional content, cases, conversion analysis, AI Discovery, SEO/AEO and CRM integration.",
    },
  },
  detail: {
    statusBadge: {
      no: "Publisert nettside og aktivt kommersielt samarbeid",
      en: "Published website and active commercial collaboration",
    },
    hero: {
      verdiforslag: {
        no: "Retning. Kraft. Fremdrift. Resultat.",
        en: "Direction. Power. Momentum. Results.",
      },
      executiveSummary: {
        no: "Row Solutions er et aktivt kommersielt rådgivningssamarbeid med Marius Ottesen, Thomas Holm og Gunnar Gundersen — et felles markedsnavn, ikke et eget registrert AS. rowsolutions.no er offentlig publisert og videreutvikles med tjenester, metoder og kontakt.\n\nDenne siden på mariusottesen.no dokumenterer mitt bidrag til posisjonering, informasjonsarkitektur, innhold og teknisk utvikling — fra idé til publisert løsning.",
        en: "Row Solutions is an active commercial advisory collaboration with Marius Ottesen, Thomas Holm and Gunnar Gundersen — a shared brand name, not a separately registered company. rowsolutions.no is publicly published and continues to evolve with services, methods and contact.\n\nThis page on mariusottesen.no documents my contribution to positioning, information architecture, content and technical development — from idea to published solution.",
      },
      bildeAlt: {
        no: "Row Solutions – bedre kommersiell flyt fra synlighet til salg og oppfølging",
        en: "Row Solutions – better commercial flow from visibility to sales and follow-up",
      },
    },
    kortFortalt: {
      heading: { no: "Hva Row Solutions er", en: "What Row Solutions is" },
      body: {
        no: "Row Solutions består av Marius Ottesen, Thomas Holm og Gunnar Gundersen. Vi kombinerer erfaring innen kommersiell utvikling, B2B-salg, markedsføring, kommunikasjon, teknologi og praktisk AI.\n\nVi hjelper virksomheter med å skape bedre sammenheng mellom strategi, mennesker, kunder og gjennomføring. Row Solutions er et felles markedsnavn, ikke et eget registrert AS — med offentlig publisert og videreutviklet nettsted på rowsolutions.no. Denne siden dokumenterer Marius' bidrag til utviklingen.\n\nMarius Ottesen Consulting (MOC) er Marius' egen konsulentvirksomhet — adskilt fra Row Solutions.",
        en: "Row Solutions consists of Marius Ottesen, Thomas Holm and Gunnar Gundersen. We combine experience in commercial development, B2B sales, marketing, communication, technology and practical AI.\n\nWe help organisations create better alignment between strategy, people, customers and execution. Row Solutions is a shared brand name, not a separately registered company — with a publicly published, continuously evolving website at rowsolutions.no. This page documents Marius' contribution to the development.\n\nMarius Ottesen Consulting (MOC) is Marius' own consulting business — separate from Row Solutions.",
      },
      link: {
        href: "https://rowsolutions.no",
        label: { no: "Besøk Row Solutions →", en: "Visit Row Solutions →" },
        external: true,
      },
    },
    utfordring: {
      heading: { no: "Kundeutfordringer", en: "Customer challenges" },
      body: {
        no: "Row Solutions er strukturert rundt fire områder som ofte henger sammen, men som mange virksomheter jobber med separat:\n\n1. Synlighet og posisjonering — hvordan virksomheten forstås, finnes og skiller seg ut.\n2. Salg og kundeoppfølging — fra første kontakt til oppfølging og neste handling.\n3. Arbeidsflyt og praktisk AI — struktur, verktøy og kapasitet i hverdagen uten at teknologi blir målet i seg selv.\n4. Forretningsutvikling og gjennomføring — prioritering, retning og evne til å omsette beslutninger til fremdrift.",
        en: "Row Solutions is structured around four areas that are often connected, but that many organisations work on separately:\n\n1. Visibility and positioning — how the organisation is understood, found and differentiated.\n2. Sales and customer follow-up — from first contact to follow-up and next action.\n3. Workflow and practical AI — structure, tools and capacity in day-to-day work without technology becoming the goal in itself.\n4. Business development and execution — prioritisation, direction and ability to turn decisions into momentum.",
      },
    },
    logikk: {
      heading: { no: "Arbeidsprinsipp", en: "Working principle" },
      body: {
        no: "Vi starter med å forstå kundens situasjon og utfordringer. Deretter handler arbeidet om å velge retning, prioritere tiltak, mobilisere ressurser og sikre gjennomføring.\n\nAI og teknologi brukes der det styrker arbeidsprosesser, beslutninger og verdiskaping.",
        en: "We start by understanding the customer's situation and challenges. The work then focuses on choosing direction, prioritising initiatives, mobilising resources and securing execution.\n\nAI and technology are used where they strengthen work processes, decisions and value creation.",
      },
      steps: [],
    },
    contentSections: [
      {
        heading: { no: "Tjenester og leveranseformer", en: "Services and delivery formats" },
        body: {
          no: "Arbeidet leveres gjennom seks leveranseformer, i tråd med tjenestestrukturen på rowsolutions.no:\n\n• Kartlegging og analyse\n• Workshop og ledersparring\n• Kurs, webinar og fagdag\n• Praktisk AI-trening\n• Sprint og pilot\n• Implementering og forbedring",
          en: "Work is delivered through six delivery formats, aligned with the service structure on rowsolutions.no:\n\n• Mapping and analysis\n• Workshop and leadership sparring\n• Course, webinar and professional day\n• Practical AI training\n• Sprint and pilot\n• Implementation and improvement",
        },
      },
      {
        heading: { no: "Metoder og verktøy", en: "Methods and tools" },
        body: {
          no: "Row Solutions tilbyr digitale kartleggings- og treningsverktøy som hjelper virksomheter med å forstå utfordringer, prioritere tiltak og utvikle bedre arbeidsmåter. Rådgivningsrammeverket «Fra innsikt til resultater» er beskrevet på rowsolutions.no/metoder.\n\nPredictive Sales Coach og SMB Salgsflyt-sjekken er utviklet av Marius Ottesen gjennom MOC. Verktøyene kan inngå i relevant rådgivning via Row Solutions, men eies av MOC — ikke av Row Solutions.",
          en: "Row Solutions offers digital mapping and training tools that help organisations understand challenges, prioritise initiatives and develop better ways of working. The advisory framework «From insight to results» is described on rowsolutions.no/metoder.\n\nPredictive Sales Coach and the SMB Sales Flow Check were developed by Marius Ottesen through MOC. The tools can form part of relevant advisory work via Row Solutions, but are owned by MOC — not by Row Solutions.",
        },
        toolLinks: [
          {
            href: ROW_METHOD_FRA_INNSIKT,
            name: { no: "Fra innsikt til resultater", en: "From insight to results" },
            description: {
              no: "Felles rådgivningsrammeverk i Row Solutions — brukt og videreutviklet i praktisk rådgivning.",
              en: "Shared advisory framework in Row Solutions — used and evolved in practical advisory work.",
            },
            external: true,
          },
          {
            href: ROW_METHOD_AI_DISCOVERY,
            name: { no: "AI Discovery", en: "AI Discovery" },
            description: {
              no: "Kartlegger hvordan virksomheten blir funnet, forstått og omtalt i AI-baserte søk.",
              en: "Maps how the organisation is found, understood and discussed in AI-based search.",
            },
            external: true,
          },
          {
            href: ROW_METHOD_AI_READINESS,
            name: { no: "AI Readiness Scan", en: "AI Readiness Scan" },
            description: {
              no: "Vurderer virksomhetens KI-modenhet og gir grunnlag for prioritering og videre utvikling.",
              en: "Assesses the organisation's AI maturity and provides a basis for prioritisation and further development.",
            },
            external: true,
          },
          {
            href: ROW_METHOD_PSC,
            name: { no: "Predictive Sales Coach", en: "Predictive Sales Coach" },
            description: {
              no: "Støtter praktisk salgstrening, kundedialog og møteforberedelser. Utviklet av Marius Ottesen gjennom MOC.",
              en: "Supports practical sales training, customer dialogue and meeting preparation. Developed by Marius Ottesen through MOC.",
            },
            external: true,
          },
          {
            href: ROW_METHOD_SALGSFLYT,
            name: { no: "SMB Salgsflyt-sjekken", en: "SMB Sales Flow Check" },
            description: {
              no: "Kartlegger friksjon i salgsprosesser, CRM og kundeoppfølging. Utviklet og eid av MOC.",
              en: "Maps friction in sales processes, CRM and customer follow-up. Developed and owned by MOC.",
            },
            external: true,
          },
        ],
      },
      {
        heading: { no: "Min rolle i utviklingen", en: "My role in the development" },
        body: {
          no: "Jeg har utviklet nettstedet rowsolutions.no fra idé og struktur til publisert løsning. Arbeidet omfatter informasjonsarkitektur, design, innholdsorganisering og teknisk implementering. Jeg har også det redaksjonelle og tekniske ansvaret for nettstedet, inkludert løpende oppdateringer, kvalitetssikring og videreutvikling.\n\nJeg bruker Cursor og generativ KI som støtte i arbeidet, men står selv ansvarlig for prioriteringer, innhold og den endelige løsningen.",
          en: "I developed the website rowsolutions.no from idea and structure to a published solution. The work covers information architecture, design, content organisation and technical implementation. I also hold editorial and technical responsibility for the website, including ongoing updates, quality assurance and further development.\n\nI use Cursor and generative AI as support in the work, but remain personally responsible for priorities, content and the final solution.",
        },
      },
      {
        heading: { no: "Row-teamet", en: "The Row team" },
        body: {
          no: "Marius Ottesen — Medgründer. Kommersiell utvikling, salgsutvikling og AI. Erfaring fra B2B-salg, salgsledelse, forretningsutvikling, CRM og praktisk bruk av AI i kommersielle prosesser.\n\nThomas Holm — Medgründer. Marked, synlighet og AI. Markedsføring, kommunikasjon, posisjonering, innhold, digital synlighet og AI Discovery.\n\nGunnar Gundersen — Partner. Forretningsutvikling, medier, innhold og AI i praksis. Kommersiell produktutvikling, medier, partnerskap og anvendelse av AI i arbeidshverdagen.",
          en: "Marius Ottesen — Co-founder. Commercial development, sales development and AI. Experience from B2B sales, sales leadership, business development, CRM and practical use of AI in commercial processes.\n\nThomas Holm — Co-founder. Marketing, visibility and AI. Marketing, communication, positioning, content, digital visibility and AI Discovery.\n\nGunnar Gundersen — Partner. Business development, media, content and AI in practice. Commercial product development, media, partnerships and application of AI in day-to-day work.",
        },
      },
      {
        heading: { no: "AI-laget", en: "AI-laget" },
        body: {
          no: "Row Solutions er et eget kommersielt rådgivningssamarbeid. AI-laget er en relatert podcast og praktisk arena for AI for folk flest — eget faglig samarbeid om utforsking, erfaring og formidling (ikke det samme som Rows kommersielle kjerne). Her utforskes hvordan teknologien kan brukes i praksis, med erfaringer fra egne prosjekter og samtaler med mennesker som tar AI i bruk.",
          en: "Row Solutions is a separate commercial advisory collaboration. AI-laget is a related podcast and practical arena for AI for everyday people — a separate professional collaboration for exploration, experience and communication (not the same as Row's commercial core). Here we explore how the technology can be used in practice, with experience from our own projects and conversations with people putting AI to work.",
        },
        link: {
          href: "https://rowsolutions.no/ai-laget",
          label: { no: "Utforsk AI-laget →", en: "Explore AI-laget →" },
          external: true,
        },
      },
    ],
    hvordan: {
      heading: { no: "Fra idé til digital plattform", en: "From idea to digital platform" },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: {
        no: "Besøk rowsolutions.no for tjenester, metoder og kontakt — eller gå direkte til tjenester og metoder på nettstedet. Ta gjerne kontakt dersom du vil diskutere kommersiell utvikling eller digital plattformbygging.",
        en: "Visit rowsolutions.no for services, methods and contact — or go directly to services and methods on the site. Feel free to get in touch if you would like to discuss commercial development or digital platform work.",
      },
    },
  },
};