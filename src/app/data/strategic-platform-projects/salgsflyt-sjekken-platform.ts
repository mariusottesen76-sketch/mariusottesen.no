import type { StrategicPlatformProject } from "./types";
import {
  SMB_SALGSFLYT_EXECUTIVE_SUMMARY,
  SMB_SALGSFLYT_HERO_IMAGE,
  SMB_SALGSFLYT_MATURITY_LABEL,
  SMB_SALGSFLYT_OVERVIEW_STATUS,
} from "../../lib/smb-salgsflyt-brand";

/** 12 suksessdimensjoner i v2.0 (36 kjernespørsmål — tre per dimensjon). */
const SUKSSESSDIMENSJONER = [
  {
    tittel: { no: "Markedsposisjon og kundeprioritering", en: "Market position and customer prioritisation" },
    beskrivelse: {
      no: "Hvor tydelig virksomheten vet hvem den skal vinne, og hvordan salg og markedsføring prioriterer de riktige kundesegmentene.",
      en: "How clearly the business knows who it should win, and how sales and marketing prioritise the right customer segments.",
    },
  },
  {
    tittel: { no: "Digital synlighet og innholdsrelevans", en: "Digital visibility and content relevance" },
    beskrivelse: {
      no: "Om potensielle kunder finner dere, forstår tilbudet og opplever innhold som matcher deres behov.",
      en: "Whether potential customers find you, understand the offer and experience content that matches their needs.",
    },
  },
  {
    tittel: { no: "Digital kundereise og konvertering", en: "Digital customer journey and conversion" },
    beskrivelse: {
      no: "Fra første digitalt møte til henvendelse — tydelige steg, lav friksjon og forutsigbar overgang til dialog.",
      en: "From first digital touchpoint to enquiry — clear steps, low friction and a predictable handover to dialogue.",
    },
  },
  {
    tittel: { no: "Leadfangst og kvalifisering", en: "Lead capture and qualification" },
    beskrivelse: {
      no: "Hvordan henvendelser fanges, prioriteres og vurderes før de koster for mye salgstid.",
      en: "How enquiries are captured, prioritised and assessed before they consume too much sales time.",
    },
  },
  {
    tittel: { no: "Kundedialog og behovsavklaring", en: "Customer dialogue and needs clarification" },
    beskrivelse: {
      no: "Kvaliteten på samtaler, møter og avklaringer som gjør at tilbud og løsninger treffer faktiske behov.",
      en: "The quality of conversations, meetings and clarifications that ensure proposals and solutions match real needs.",
    },
  },
  {
    tittel: { no: "Salgsprosess og fremdrift", en: "Sales process and momentum" },
    beskrivelse: {
      no: "Om salgsmuligheter har tydelige faser, ansvarlige og realistisk fremdrift — ikke bare «pågående» i systemet.",
      en: "Whether opportunities have clear stages, owners and realistic momentum — not just marked as ongoing in a system.",
    },
  },
  {
    tittel: { no: "Tilbud og konvertering", en: "Proposals and conversion" },
    beskrivelse: {
      no: "Fra tilbud til beslutning: struktur, oppfølging og læring når muligheter stopper eller faller bort.",
      en: "From proposal to decision: structure, follow-up and learning when opportunities stall or are lost.",
    },
  },
  {
    tittel: { no: "Eksisterende kunder og videre vekst", en: "Existing customers and further growth" },
    beskrivelse: {
      no: "Oppfølging, mersalg og utvikling av kunder som allerede har valgt dere — ikke bare jakten på nye logoer.",
      en: "Follow-up, upsell and development of customers who already chose you — not only hunting for new logos.",
    },
  },
  {
    tittel: { no: "CRM, kundedata og arbeidsflyt", en: "CRM, customer data and workflow" },
    beskrivelse: {
      no: "Om kundedata og verktøy faktisk støtter daglig salgsarbeid, eller skaper ekstra administrasjon.",
      en: "Whether customer data and tools actually support daily sales work, or create extra administration.",
    },
  },
  {
    tittel: { no: "Kommersiell lederinnsikt og styring", en: "Commercial leadership insight and governance" },
    beskrivelse: {
      no: "Ledelsens oversikt over pipeline, risiko og prioriteringer — basert på informasjon teamet faktisk bruker.",
      en: "Leadership visibility into pipeline, risk and priorities — based on information the team actually uses.",
    },
  },
  {
    tittel: { no: "Kompetanse og salgsledelse", en: "Competence and sales leadership" },
    beskrivelse: {
      no: "Coaching, forventninger og utvikling av selgere og kommersielle roller i hverdagen.",
      en: "Coaching, expectations and development of salespeople and commercial roles in everyday work.",
    },
  },
  {
    tittel: { no: "Samhandling og kontinuerlig forbedring", en: "Collaboration and continuous improvement" },
    beskrivelse: {
      no: "Hvordan salg, markedsføring og leveranse lærer av erfaringer og justerer arbeidsmåter over tid.",
      en: "How sales, marketing and delivery learn from experience and adjust ways of working over time.",
    },
  },
] as const;

export const salgsflytSjekkenPlatform: StrategicPlatformProject = {
  slug: "salgsflyt-sjekken",
  prosjektId: "smb-salgsflyt-sjekken-2026",
  detailPath: "/salgsflyt-sjekken",
  meta: {
    title: {
      no: "SMB Salgsflyt-sjekken 2.0 | Kommersiell diagnose – Marius Ottesen",
      en: "SMB Sales Flow Check 2.0 | Commercial diagnosis – Marius Ottesen",
    },
    description: {
      no: "Kartlegg friksjon i salgsflyten: 12 dimensjoner, 36 spørsmål og lederrapport med prioriterte tiltak. Ca. 10–12 min. Fra Marius Ottesen Consulting.",
      en: "Map friction in your sales flow: 12 dimensions, 36 questions and a leader report with prioritised actions. About 10–12 min. From Marius Ottesen Consulting.",
    },
    ogImage: SMB_SALGSFLYT_HERO_IMAGE,
    canonicalPath: "/salgsflyt-sjekken",
  },
  teaser: {
    undertittel: {
      no: "Fra salgsfriksjon til prioriterte tiltak",
      en: "From sales friction to prioritised actions",
    },
    intro: {
      no: "Finn ut hvor salgsarbeidet lekker verdi — og hva ledelsen bør prioritere først. Kartleggingen tar ca. 10–12 minutter og gir en lederrapport med konkrete anbefalinger.",
      en: "Find where sales work leaks value — and what leadership should prioritise first. The assessment takes about 10–12 minutes and produces a leader report with concrete recommendations.",
    },
    blokker: {
      utfordring: {
        no: "Muligheter forsvinner ofte mellom synlighet, dialog, tilbud og videre kundeoppfølging — uten at ledelsen ser det tydelig nok.",
        en: "Opportunities are often lost between visibility, dialogue, proposals and follow-up — without leadership seeing it clearly enough.",
      },
      bygget: {
        no: "Du får oversikt over styrker og forbedringsområder på tvers av 12 suksessdimensjoner, med prioriterte tiltak du kan bruke videre.",
        en: "You get an overview of strengths and improvement areas across 12 success dimensions, with prioritised actions you can use going forward.",
      },
      relevans: {
        no: "Relevant for daglige ledere som vil styrke salgsflyt, kundeoppfølging og kommersiell lederinnsikt — ikke som ferdig salgsstrategi.",
        en: "Relevant for managing directors who want stronger sales flow, customer follow-up and commercial leadership insight — not as a finished sales strategy.",
      },
      status: {
        no: SMB_SALGSFLYT_OVERVIEW_STATUS.no,
        en: SMB_SALGSFLYT_OVERVIEW_STATUS.en,
      },
    },
    videreutvikling: {
      no: "",
      en: "",
    },
  },
  detail: {
    statusBadge: SMB_SALGSFLYT_MATURITY_LABEL,
    hero: {
      verdiforslag: {
        no: "Hvor lekker virksomheten verdi i salgsarbeidet?",
        en: "Where is the business leaking value in sales work?",
      },
      executiveSummary: {
        no: SMB_SALGSFLYT_EXECUTIVE_SUMMARY.no,
        en: SMB_SALGSFLYT_EXECUTIVE_SUMMARY.en,
      },
      bildeAlt: {
        no: "SMB Salgsflyt-sjekken 2.0 – lederorientert kommersiell diagnose",
        en: "SMB Sales Flow Check 2.0 – leadership-oriented commercial diagnosis",
      },
    },
    kortFortalt: {
      heading: { no: "Hva du får", en: "What you get" },
      body: {
        no: "• Oppdag friksjon og tapte muligheter i salgsflyten\n• Bedre oversikt over styrker og forbedringsområder\n• Se hva ledelsen bør prioritere først\n• Få konkrete anbefalinger til videre arbeid\n\nEtter ca. 10–12 minutter får du en lederrapport med prioriterte tiltak.",
        en: "• Discover friction and missed opportunities in the sales flow\n• Better overview of strengths and improvement areas\n• See what leadership should prioritise first\n• Get concrete recommendations for next steps\n\nAfter about 10–12 minutes you receive a leader report with prioritised actions.",
      },
    },
    utfordring: {
      heading: { no: "Hvorfor dette er viktig", en: "Why this matters" },
      body: {
        no: "Muligheter går ofte tapt i overgangene mellom synlighet, henvendelse, dialog, tilbud, beslutning og videre kundeutvikling. Salgsflyt-sjekken hjelper deg å se hvor friksjonen sitter — og hva som bør prioriteres.",
        en: "Opportunities are often lost in transitions between visibility, enquiry, dialogue, proposal, decision and further customer development. The Sales Flow Check helps you see where friction sits — and what to prioritise.",
      },
    },
    logikk: {
      heading: { no: "Hvordan kartleggingen fungerer", en: "How the assessment works" },
      body: {
        no: "Du svarer på spørsmål om virksomheten og salgsarbeidet. Kartleggingen tar normalt ca. 10–12 minutter. Noen svar kan utløse korte oppfølgingsspørsmål for å forstå utfordringen bedre.",
        en: "You answer questions about the business and sales work. The assessment usually takes about 10–12 minutes. Some answers may trigger short follow-up questions to understand the challenge better.",
      },
      steps: [
        {
          tittel: { no: "Virksomhetskontekst", en: "Business context" },
          beskrivelse: {
            no: "Seks spørsmål om virksomhet, salgsmodell og kontekst — for å tolke svarene riktig.",
            en: "Six questions on business, sales model and context — to interpret answers correctly.",
          },
        },
        {
          tittel: { no: "36 kjernespørsmål", en: "36 core questions" },
          beskrivelse: {
            no: "Atferdsbaserte spørsmål fordelt på 12 suksessdimensjoner (tre per dimensjon).",
            en: "Behaviour-based questions across 12 success dimensions (three per dimension).",
          },
        },
        {
          tittel: { no: "Adaptive dypdykk", en: "Adaptive deep dives" },
          beskrivelse: {
            no: "Inntil to områder kan utløse dypdykk med tre oppfølgingsspørsmål hver — avhengig av besvarelsene.",
            en: "Up to two areas may trigger deep dives with three follow-up questions each — depending on responses.",
          },
        },
        {
          tittel: { no: "Lederrapport", en: "Leader report" },
          beskrivelse: {
            no: "Samlet vurdering, dimensjonsinnsikt og prioriterte anbefalinger du kan ta videre i organisasjonen.",
            en: "Overall assessment, dimension insight and prioritised recommendations you can take forward in the organisation.",
          },
        },
      ],
    },
    contentSections: [
      {
        heading: {
          no: "Tolv suksessdimensjoner",
          en: "Twelve success dimensions",
        },
        body: {
          no: "Dimensjonene dekker hele kundereisen — fra marked og digital synlighet til salg, kunder og kontinuerlig forbedring. Gruppert etter faser:",
          en: "The dimensions cover the full customer journey — from market and digital visibility to sales, customers and continuous improvement. Grouped by phase:",
        },
        flowLine: {
          no: "Synlighet og etterspørsel (1–3) → Dialog og salg (4–7) → Kunder og styring (8–12)",
          en: "Visibility and demand (1–3) → Dialogue and sales (4–7) → Customers and governance (8–12)",
        },
        steps: [...SUKSSESSDIMENSJONER],
      },
    ],
    hvordan: {
      heading: { no: "Fra innsikt til handling", en: "From insight to action" },
      intro: {
        no: "Lederrapporten er ment som beslutningsstøtte — du får verdi av kartleggingen uten videre rådgivning. Ønsker du det, kan du etter eget valg booke en kostnadsfri gjennomgang på inntil 45 minutter.",
        en: "The leader report is decision support — you gain value from the assessment without further advisory work. If you wish, you may optionally book a free review of up to 45 minutes.",
      },
      detaljpunkter: [
        {
          no: "Bruk funnene internt for å prioritere forbedringstiltak.",
          en: "Use the findings internally to prioritise improvement measures.",
        },
        {
          no: "Gjennomgang med MOC er frivillig — ikke en forutsetning for å bruke rapporten.",
          en: "A review with MOC is optional — not a prerequisite for using the report.",
        },
      ],
    },
    anvendelsesformat: {
      heading: { no: "Kom i gang", en: "Get started" },
      steg: [
        {
          tittel: { no: "Be om tilgangskode", en: "Request access code" },
          beskrivelse: {
            no: "Kartleggingen er tilgangsstyrt. Ta kontakt dersom du trenger kode eller vil avklare om verktøyet passer for virksomheten din.",
            en: "The assessment is access-controlled. Contact us if you need a code or want to clarify whether the tool fits your business.",
          },
        },
        {
          tittel: { no: "Åpne Salgsflyt-sjekken", en: "Open Sales Flow Check" },
          beskrivelse: {
            no: "Når du har tilgangskode, starter du kartleggingen i nettleseren. Sett av ca. 10–12 minutter.",
            en: "When you have an access code, start the assessment in your browser. Allow about 10–12 minutes.",
          },
        },
      ],
    },
    methodDisclaimer: {
      no: "Resultatet bygger på dine svar og gir et strukturert grunnlag for å identifisere forbedringsmuligheter. Det er ikke en uavhengig revisjon.",
      en: "The result is based on your answers and provides a structured basis for identifying improvement opportunities. It is not an independent audit.",
    },
    avslutning: {
      heading: { no: "Klar til å kartlegge salgsflyten?", en: "Ready to map your sales flow?" },
      body: {
        no: "SMB Salgsflyt-sjekken 2.0 eies og utvikles av Marius Ottesen Consulting (MOC).",
        en: "SMB Sales Flow Check 2.0 is owned and developed by Marius Ottesen Consulting (MOC).",
      },
      showContactPrimary: false,
    },
  },
};
