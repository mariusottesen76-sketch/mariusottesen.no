import type { StrategicPlatformProject } from "./types";
import {
  SMB_SALGSFLYT_HERO_IMAGE,
  SMB_SALGSFLYT_MATURITY_LABEL,
  SMB_SALGSFLYT_OWNER_LABEL,
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

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Kommersiell leder · Marius Ottesen Consulting", en: "Commercial leader · Marius Ottesen Consulting" },
  beskrivelse: {
    no: "Har utviklet SMB Salgsflyt-sjekken 2.0 som tilgangsstyrt diagnoseverktøy for SMB-ledere. Løsningen eies og videreutvikles av Marius Ottesen Consulting (MOC).",
    en: "Developed SMB Sales Flow Check 2.0 as an access-controlled diagnostic tool for SMB leaders. The solution is owned and further developed by Marius Ottesen Consulting (MOC).",
  },
};

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
      no: "Lederorientert diagnose for SMB: 12 suksessdimensjoner, 36 spørsmål og prioriterte tiltak for bedre salgsflyt, kundedialog og kundeoppfølging. Utviklet av Marius Ottesen Consulting.",
      en: "Leadership-oriented SMB diagnosis: 12 success dimensions, 36 questions and prioritised actions for better sales flow, customer dialogue and follow-up. Developed by Marius Ottesen Consulting.",
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
      no: "En lederorientert diagnose av hvor virksomheten mister fremdrift og kommersielle muligheter — med 12 suksessdimensjoner, 36 spørsmål og konkrete anbefalinger for bedre salgsflyt.",
      en: "A leadership-oriented diagnosis of where the organisation loses momentum and commercial opportunity — with 12 success dimensions, 36 questions and concrete recommendations for better sales flow.",
    },
    blokker: {
      utfordring: {
        no: "Mange SMB-er opplever at muligheter forsvinner i overgangene mellom synlighet, dialog, tilbud og videre kundeutvikling — uten at ledelsen ser hvor friksjonen sitter.",
        en: "Many SMEs lose opportunities in the transitions between visibility, dialogue, proposals and further customer development — without leadership seeing where friction sits.",
      },
      bygget: {
        no: "v2.0 er deployert som tilgangsstyrt diagnose hos MOC: virksomhetskontekst, 36 atferdsbaserte spørsmål, adaptive dypdykk, strukturert scoring og lederrapport med prioriterte tiltak.",
        en: "v2.0 is deployed as an access-controlled MOC diagnosis: business context, 36 behaviour-based questions, adaptive deep dives, structured scoring and a leader report with prioritised actions.",
      },
      relevans: {
        no: "Gir SMB-ledere strukturert innsikt i salgsflyt, kundedialog, digital kundereise og kundeoppfølging — som grunnlag for prioritering, ikke som ferdig salgsstrategi.",
        en: "Gives SMB leaders structured insight into sales flow, customer dialogue, digital customer journey and follow-up — as a basis for prioritisation, not as a finished sales strategy.",
      },
      status: {
        no: SMB_SALGSFLYT_MATURITY_LABEL.no,
        en: SMB_SALGSFLYT_MATURITY_LABEL.en,
      },
    },
    videreutvikling: {
      no: "Videre modenhet kan inkludere bransjetilpasning, CRM-koblinger, utvidet rapportering og støtte for oppfølging etter gjennomgang — etter avtale med MOC.",
      en: "Further maturity may include industry adaptation, CRM connections, extended reporting and support for follow-up after review — by agreement with MOC.",
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
        no: "SMB Salgsflyt-sjekken 2.0 hjelper små og mellomstore virksomheter med å identifisere friksjon, forbedringsmuligheter og prioriterte tiltak i salgsarbeid, kundedialog, digital kundereise og kundeoppfølging. Dette er en lederorientert kommersiell diagnose — utviklet og eid av Marius Ottesen Consulting (MOC) — ikke en ren CRM-sjekk eller generell AI-app.",
        en: "SMB Sales Flow Check 2.0 helps small and medium-sized businesses identify friction, improvement opportunities and prioritised actions in sales work, customer dialogue, digital customer journey and customer follow-up. It is a leadership-oriented commercial diagnosis — developed and owned by Marius Ottesen Consulting (MOC) — not a pure CRM check or generic AI app.",
      },
      bildeAlt: {
        no: "SMB Salgsflyt-sjekken 2.0 – lederorientert kommersiell diagnose",
        en: "SMB Sales Flow Check 2.0 – leadership-oriented commercial diagnosis",
      },
    },
    kortFortalt: {
      heading: { no: "Hva du får", en: "What you get" },
      body: {
        no: "Et samlet resultat med styrker og svakheter, prioriterte friksjonsområder, mulige forklaringer og konkrete første tiltak — presentert i en lederrapport etter gjennomført kartlegging. AI støtter analyse og rapportstruktur, men hovedverdien er den kommersielle diagnosen og prioriteringene den gir.",
        en: "An overall result with strengths and weaknesses, prioritised friction areas, possible explanations and concrete first actions — presented in a leader report after the assessment. AI supports analysis and report structure, but the main value is the commercial diagnosis and prioritisation it provides.",
      },
    },
    utfordring: {
      heading: { no: "Hvorfor dette er viktig", en: "Why this matters" },
      body: {
        no: "Salgsarbeid stopper sjelden i én enkelt aktivitet. Muligheter går ofte tapt i overgangene:\n\n• fra digital synlighet til faktisk henvendelse\n• fra henvendelse til kvalifisert dialog\n• fra dialog til tilbud\n• fra tilbud til beslutning\n• fra leveranse til videre kundeutvikling\n\nNår disse overgangene er uklare, bruker teamet mye tid uten at ledelsen ser hvor verdien lekker ut. SMB Salgsflyt-sjekken 2.0 er laget for å gjøre disse lekkasjene synlige og prioriterbare.",
        en: "Sales work rarely fails in a single activity. Opportunities are often lost in transitions:\n\n• from digital visibility to actual enquiry\n• from enquiry to qualified dialogue\n• from dialogue to proposal\n• from proposal to decision\n• from delivery to further customer development\n\nWhen these transitions are unclear, teams spend time without leadership seeing where value leaks. SMB Sales Flow Check 2.0 is designed to make those leaks visible and prioritisable.",
      },
    },
    logikk: {
      heading: { no: "Hvordan kartleggingen fungerer", en: "How the assessment works" },
      body: {
        no: "Kartleggingen følger en fast, men adaptiv flyt. Estimert tidsbruk på forsiden er om lag 10–12 minutter — avhengig av svar og om adaptive dypdykk utløses.",
        en: "The assessment follows a fixed but adaptive flow. Estimated time on the landing page is about 10–12 minutes — depending on answers and whether adaptive deep dives are triggered.",
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
          tittel: { no: "Scoring og lederrapport", en: "Scoring and leader report" },
          beskrivelse: {
            no: "Strukturert scoring med vurdering av datagrunnlag og usikkerhet, samlet resultat, dimensjonsvurderinger og prioriterte anbefalinger.",
            en: "Structured scoring with assessment of data basis and uncertainty, overall result, dimension ratings and prioritised recommendations.",
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
    bygget: {
      heading: { no: "Hva som er utviklet i v2.0", en: "What has been developed in v2.0" },
      items: [
        { no: "Tilgangsstyrt diagnoseflyt med invitasjon og tilgangskode", en: "Access-controlled diagnostic flow with invitation and access code" },
        { no: "12 dimensjoner · 36 kjernespørsmål · seks kontekstspørsmål", en: "12 dimensions · 36 core questions · six context questions" },
        { no: "Adaptive dypdykk og strukturert scoring med usikkerhetsvurdering", en: "Adaptive deep dives and structured scoring with uncertainty assessment" },
        { no: "Lederrapport med prioriterte friksjonsområder og første tiltak", en: "Leader report with prioritised friction areas and first actions" },
        { no: "Separat, fortrolig rådgivergrunnlag for MOC (ikke synlig for respondenten)", en: "Separate confidential advisor basis for MOC (not visible to the respondent)" },
      ],
    },
    moduler: {
      heading: { no: "Faser i kundereisen", en: "Phases of the customer journey" },
      intro: {
        no: "Dimensjonene er organisert slik at ledere kan se sammenheng mellom markedsføring, salg og eksisterende kunder.",
        en: "Dimensions are organised so leaders can see the links between marketing, sales and existing customers.",
      },
      modules: [
        {
          tittel: { no: "Synlighet og etterspørsel", en: "Visibility and demand" },
          beskrivelse: { no: "Markedsposisjon, digital synlighet og konvertering til henvendelse.", en: "Market position, digital visibility and conversion to enquiry." },
          bygget: true,
        },
        {
          tittel: { no: "Dialog og salg", en: "Dialogue and sales" },
          beskrivelse: { no: "Leadkvalifisering, kundedialog, salgsprosess og tilbud.", en: "Lead qualification, customer dialogue, sales process and proposals." },
          bygget: true,
        },
        {
          tittel: { no: "Kunder og styring", en: "Customers and governance" },
          beskrivelse: { no: "Eksisterende kunder, CRM og data, lederinnsikt, kompetanse og forbedring.", en: "Existing customers, CRM and data, leadership insight, competence and improvement." },
          bygget: true,
        },
      ],
    },
    hvordan: {
      heading: { no: "Fra innsikt til handling", en: "From insight to action" },
      intro: {
        no: "Resultatene er ment som beslutningsstøtte for ledelsen — ikke som en automatisk salgsplan. Du får verdi av kartleggingen også uten videre rådgivning, men kan etter eget ønske booke en kostnadsfri gjennomgang på inntil 45 minutter for å diskutere funn og prioriteter.",
        en: "Results are intended as decision support for leadership — not as an automatic sales plan. You gain value from the assessment without further advisory work, but may optionally book a free review of up to 45 minutes to discuss findings and priorities.",
      },
      detaljpunkter: [
        {
          no: "Lederrapporten oppsummerer styrker, friksjon og anbefalte første tiltak.",
          en: "The leader report summarises strengths, friction and recommended first actions.",
        },
        {
          no: "Gjennomgangen er frivillig og kostnadsfri (inntil 45 min) — for avklaring, ikke som forutsetning for å bruke funnene.",
          en: "The review is optional and free (up to 45 minutes) — for clarification, not as a prerequisite for using the findings.",
        },
      ],
    },
    relevans: {
      heading: { no: "Relevans for SMB-ledere", en: "Relevance for SMB leaders" },
      sections: [
        {
          tittel: { no: "Kommersiell diagnose", en: "Commercial diagnosis" },
          tekst: {
            no: "Gir et felles bilde av salgsflyt, kundedialog og oppfølging — uten å erstatte CRM, salgsledelse eller implementeringsprosjekter.",
            en: "Provides a shared picture of sales flow, customer dialogue and follow-up — without replacing CRM, sales leadership or implementation projects.",
          },
        },
        {
          tittel: { no: "Prioritering", en: "Prioritisation" },
          tekst: {
            no: "Hjelper ledelsen å velge hvor forbedring gir størst effekt før ressurser settes inn.",
            en: "Helps leadership choose where improvement has the greatest impact before resources are committed.",
          },
        },
        {
          tittel: { no: "Eier og utvikler", en: "Owner and developer" },
          tekst: {
            no: SMB_SALGSFLYT_OWNER_LABEL.no + " — ikke Row Solutions eller andre partnere som produkteier.",
            en: SMB_SALGSFLYT_OWNER_LABEL.en + " — not Row Solutions or other partners as product owner.",
          },
        },
      ],
    },
    anvendelsesformat: {
      heading: { no: "Kontakt og tilgang", en: "Contact and access" },
      steg: [
        {
          tittel: { no: "Avgrenset kundebruk", en: "Limited customer use" },
          beskrivelse: {
            no: "Løsningen er tilgangsstyrt og klar for avgrenset kundebruk etter avtale. v2.0 kjører i eget Cloud Run-miljø; eieren gjennomfører egne funksjonstester parallelt med utrulling.",
            en: "The solution is access-controlled and ready for limited customer use by agreement. v2.0 runs in a dedicated Cloud Run environment; the owner runs own functional tests in parallel with rollout.",
          },
        },
        {
          tittel: { no: "Tilgangskode", en: "Access code" },
          beskrivelse: {
            no: "Løsningen er tilgangsstyrt. Be om tilgangskode via kontaktskjemaet dersom du er invitert eller ønsker dialog om pilotdeltakelse.",
            en: "The solution is access-controlled. Request an access code via the contact form if you are invited or wish to discuss pilot participation.",
          },
        },
        {
          tittel: { no: "Pilotversjon", en: "Pilot version" },
          beskrivelse: {
            no: "Når du har kode, åpner du pilotversjonen i nettleseren. Ikke del koder eller administrative adresser videre.",
            en: "When you have a code, open the pilot version in your browser. Do not share codes or administrative addresses further.",
          },
        },
      ],
    },
    status: {
      heading: { no: "Status, metode og avgrensninger", en: "Status, method and limitations" },
      body: {
        no: `${SMB_SALGSFLYT_MATURITY_LABEL.no}\n\nv2.0 er deployert i separat Cloud Run-miljø. Eieren gjennomfører egne funksjonstester før bredere bruk.\n\nKartleggingen er en egenvurdering basert på informasjon respondenten oppgir. Den er ikke en uavhengig revisjon, objektiv kontroll eller garanti for kommersiell effekt. Skill mellom dokumenterte svar, diagnostiske indikasjoner og hypoteser som bør undersøkes nærmere.\n\nTidligere versjoner (v1.0) er urørt som historikk; v2.0 er gjeldende versjon for avgrenset kundebruk.`,
        en: `${SMB_SALGSFLYT_MATURITY_LABEL.en}\n\nv2.0 is deployed in a separate Cloud Run environment. The owner runs own functional tests before broader use.\n\nThe assessment is a self-evaluation based on information the respondent provides. It is not an independent audit, objective control or guarantee of commercial effect. Distinguish documented answers, diagnostic indications and hypotheses that should be investigated further.\n\nEarlier versions (v1.0) remain unchanged as history; v2.0 is the current version for limited customer use.`,
      },
    },
    skalerbarhet: {
      heading: { no: "Mulig videreutvikling", en: "Possible further development" },
      platform: {
        heading: { no: "Modenhet etter pilot", en: "Maturity after pilot" },
        punkter: [
          { no: "Bransjetilpassede spørsmål og referanser", en: "Industry-adapted questions and benchmarks" },
          { no: "CRM- og datakilder for rikere datagrunnlag", en: "CRM and data sources for a richer evidence base" },
          { no: "Oppfølgingsmaler og handlingsplaner", en: "Follow-up templates and action plans" },
          { no: "Rapportering for ledergrupper og rådgivere", en: "Reporting for leadership teams and advisors" },
        ],
      },
      tilpasning: {
        heading: { no: "Anvendelse", en: "Application" },
        punkter: [
          { no: "Andre SMB-er og salgsmodeller", en: "Other SMEs and sales models" },
          { no: "Kommersielle team med hybrid salg", en: "Commercial teams with hybrid sales" },
          { no: "Rådgivere som ønsker strukturert forberedelse", en: "Advisors seeking structured preparation" },
        ],
      },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: {
        no: "Ønsker du å kartlegge hvor virksomheten mister fremdrift i salgsarbeidet? Ta kontakt med Marius Ottesen Consulting om SMB Salgsflyt-sjekken 2.0, tilgang til piloten eller mulig samarbeid om salgsutvikling.",
        en: "Want to map where your organisation loses momentum in sales work? Contact Marius Ottesen Consulting about SMB Sales Flow Check 2.0, access to the pilot or possible collaboration on sales development.",
      },
      showContactPrimary: true,
      contactPrimaryLabel: {
        no: "Be om tilgangskode eller dialog om pilot",
        en: "Request access code or pilot dialogue",
      },
    },
    utvikler,
  },
};
