import { AI_LAGET_HERO_IMAGE } from "../../lib/ai-laget-brand";
import type { StrategicPlatformProject } from "./types";
import { AI_LAGET_PODCAST_LISTEN } from "./ai-laget-podcast";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Faglig deltaker og bidragsyter", en: "Professional participant and contributor" },
  beskrivelse: {
    no: "Bidrar med kommersiell ledelse, strategi, implementering og praktisk AI i et faglig samarbeid — ikke som grunnlegger, eier eller produsent av AI-laget.",
    en: "Contributes commercial leadership, strategy, implementation and practical AI in a professional collaboration — not as founder, owner or producer of AI-laget.",
  },
};

export const aiLagetPlatform: StrategicPlatformProject = {
  slug: "ai-laget",
  prosjektId: "ai-laget-2026",
  detailPath: "/ai-laget",
  meta: {
    title: {
      no: "AI-laget – faglig samarbeid og podcast | Marius Ottesen",
      en: "AI-laget – collaboration and podcast on practical AI | Marius Ottesen",
    },
    description: {
      no: "Faglig arena for praktisk utforsking, læring og formidling av kunstig intelligens. Deltakelse dokumentert sammen med Thomas Holm og Gunnar Gundersen.",
      en: "Professional arena for practical exploration, learning and communication about artificial intelligence. Participation documented together with Thomas Holm and Gunnar Gundersen.",
    },
    ogImage: AI_LAGET_HERO_IMAGE,
    canonicalPath: "/ai-laget",
  },
  teaser: {
    undertittel: {
      no: "Fra AI-prat til praktisk utforsking, læring og erfaringsdeling.",
      en: "From AI talk to practical exploration, learning and experience sharing.",
    },
    intro: {
      no: "Faglig samarbeid og formidlingsarena — ikke en app eller produksjonsplattform.",
      en: "Professional collaboration and communication arena — not an app or production platform.",
    },
    blokker: {
      utfordring: {
        no: "AI blir ofte diskutert abstrakt uten praktisk forankring.",
        en: "AI is often discussed abstractly without practical grounding.",
      },
      bygget: {
        no: "Podcast, nettsted og faglig utforsking i regi av AI-laget — med tilknytning til Row Solutions.",
        en: "Podcast, website and professional exploration under AI-laget — linked to Row Solutions.",
      },
      relevans: {
        no: "Viser samarbeid, formidling og praktisk teknologiforståelse.",
        en: "Shows collaboration, communication and practical technology understanding.",
      },
      status: {
        no: "Aktivt faglig initiativ — ikke MOC-produkt.",
        en: "Active professional initiative — not an MOC product.",
      },
    },
    videreutvikling: {
      no: "Flere praktiske case og dokumentert læring over tid.",
      en: "More practical cases and documented learning over time.",
    },
  },
  detail: {
    statusBadge: {
      no: "Faglig samarbeid og formidling",
      en: "Professional collaboration and communication",
    },
    hero: {
      verdiforslag: {
        no: "Gjøre AI mer forståelig og anvendbar gjennom erfaring og formidling.",
        en: "Making AI more understandable and applicable through experience and communication.",
      },
      executiveSummary: {
        no: "AI-laget er en faglig arena for å utforske, teste og dele erfaringer med kunstig intelligens. Marius Ottesen deltar i samarbeidet med Thomas Holm og Gunnar Gundersen, med særlig interesse for hvordan AI kan brukes i ledelse, forretningsutvikling og praktisk gjennomføring.\n\nGjennom faglige aktiviteter og podcasten «AI-laget – AI for folk flest» formidles konkrete erfaringer, muligheter og utfordringer ved bruk av AI. Dette er et faglig samarbeidsinitiativ, ikke en kommersiell tjeneste fra Marius Ottesen Consulting.",
        en: "AI-laget is a professional arena for exploring, testing and sharing experience with artificial intelligence. Marius Ottesen takes part in the collaboration with Thomas Holm and Gunnar Gundersen, with particular interest in how AI can be used in leadership, business development and practical execution.\n\nThrough professional activities and the podcast «AI-laget – AI for folk flest», concrete experience, opportunities and challenges in using AI are communicated. This is a professional collaboration initiative, not a commercial service from Marius Ottesen Consulting.",
      },
      bildeAlt: {
        no: "AI-laget – Praktisk AI i hverdagen",
        en: "AI-laget – Practical AI in everyday life",
      },
    },
    kortFortalt: {
      heading: { no: "Hva AI-laget er", en: "What AI-laget is" },
      body: {
        no: "Et faglig samarbeid og en arena for praktisk AI-utforsking — podcast, prosjekter og formidling rettet mot folk som vil forstå og prøve AI, ikke bare høre om den.",
        en: "A professional collaboration and arena for practical AI exploration — podcast, projects and communication aimed at people who want to understand and try AI, not only hear about it.",
      },
    },
    utfordring: {
      heading: { no: "Formål", en: "Purpose" },
      body: {
        no: "Målet er å gjøre AI mer forståelig og anvendbar gjennom erfaring, testing og formidling — med ærlighet om både det som fungerer og det som ikke fungerer.",
        en: "The goal is to make AI more understandable and applicable through experience, testing and communication — with honesty about both what works and what does not.",
      },
      followUp: {
        body: {
          no: "Offisielle kilder for deltakere og initiativets profil:",
          en: "Official sources for participants and the initiative's profile:",
        },
        link: {
          href: "https://www.ai-laget.no/oss/",
          label: { no: "Les om laget på ai-laget.no →", en: "Read about the team at ai-laget.no →" },
          external: true,
        },
      },
    },
    podcastListen: AI_LAGET_PODCAST_LISTEN,
    logikk: {
      heading: { no: "Aktiviteter", en: "Activities" },
      body: {
        no: "Initiativet dokumenterer blant annet:",
        en: "The initiative documents among other things:",
      },
      steps: [
        {
          tittel: { no: "Podcast", en: "Podcast" },
          beskrivelse: {
            no: "«AI-laget – AI for folk flest» — podcast med Thomas Holm og Gunnar Gundersen som programverter.",
            en: "«AI-laget – AI for folk flest» — podcast with Thomas Holm and Gunnar Gundersen as hosts.",
          },
        },
        {
          tittel: { no: "Faglig utforsking", en: "Professional exploration" },
          beskrivelse: {
            no: "Testing av verktøy, prosjekter og arbeidsformer — delt i podcast og på nett.",
            en: "Testing tools, projects and working methods — shared in the podcast and online.",
          },
        },
        {
          tittel: { no: "Samarbeid med Row Solutions", en: "Collaboration with Row Solutions" },
          beskrivelse: {
            no: "AI-laget presenteres også i Row Solutions sitt fagmiljø — som relatert, men eget initiativ.",
            en: "AI-laget is also presented in the Row Solutions professional environment — as related but separate initiative.",
          },
        },
      ],
    },
    contentSections: [
      {
        heading: { no: "Deltakere", en: "Participants" },
        body: {
          no: "Marius Ottesen, Thomas Holm og Gunnar Gundersen — basert på opplysningene på ai-laget.no og rowsolutions.no/ai-laget. Roller og bidrag varierer; Marius er faglig deltaker, ikke presentert som initiativets grunnlegger eller produsent.",
          en: "Marius Ottesen, Thomas Holm and Gunnar Gundersen — based on information on ai-laget.no and rowsolutions.no/ai-laget. Roles and contributions vary; Marius is a professional participant, not presented as the initiative's founder or producer.",
        },
      },
      {
        heading: { no: "Marius' rolle", en: "Marius' role" },
        body: {
          no: "Faglig bidragsyter med særlig relevans for kommersiell ledelse, strategi, implementering og praktisk AI — inkludert erfaring fra salg, verktøybygging og formidling. Deltakelsen viser evne til samarbeid på tvers av fag, ikke eierskap til hele initiativet.",
          en: "Professional contributor with particular relevance for commercial leadership, strategy, implementation and practical AI — including experience from sales, tool-building and communication. Participation shows ability to collaborate across disciplines, not ownership of the whole initiative.",
        },
      },
    ],
    hvordan: {
      heading: { no: "Hvordan initiativet presenteres", en: "How the initiative is presented" },
      intro: {
        no: "Offisielle lenker for videre lesing:",
        en: "Official links for further reading:",
      },
      steps: [
        {
          tittel: { no: "ai-laget.no", en: "ai-laget.no" },
          beskrivelse: {
            no: "Nettsted, podcast og teampresentasjon.",
            en: "Website, podcast and team presentation.",
          },
        },
        {
          tittel: { no: "Row Solutions / AI-laget", en: "Row Solutions / AI-laget" },
          beskrivelse: {
            no: "Tilknytning presentert i Row sitt fagmiljø.",
            en: "Connection presented in Row's professional environment.",
          },
        },
      ],
    },
    relevans: {
      heading: { no: "Relevans", en: "Relevance" },
      body: {
        no: "For arbeidsgivere, kunder og samarbeidspartnere viser deltakelsen faglig utvikling, teknologiforståelse, praktisk utprøving og evne til samarbeid og formidling — uten å blande AI-laget, MOC, Row Solutions og Marius Ottesen til én entitet.",
        en: "For employers, clients and partners, participation shows professional development, technology understanding, practical experimentation and ability to collaborate and communicate — without merging AI-laget, MOC, Row Solutions and Marius Ottesen into one entity.",
      },
    },
    status: {
      heading: { no: "Status", en: "Status" },
      body: {
        no: "Aktivt faglig initiativ med publisert nettsted og podcast. Ingen dokumenterte kundegevinster eller omsetning er knyttet til deltakelsen på denne siden.",
        en: "Active professional initiative with published website and podcast. No documented customer gains or revenue are linked to participation on this page.",
      },
    },
    avslutning: {
      heading: { no: "Utforsk videre", en: "Explore further" },
      body: {
        no: "Se offisielle sider for podcast, team og prosjekter — eller utforsk Row Solutions for det kommersielle samarbeidet.",
        en: "See official pages for podcast, team and projects — or explore Row Solutions for the commercial collaboration.",
      },
      secondaryLabel: {
        no: "AI-laget hos Row Solutions",
        en: "AI-laget at Row Solutions",
      },
    },
    utvikler,
  },
  teaserCta: {
    primary: { no: "Åpne ai-laget.no", en: "Open ai-laget.no" },
  },
};