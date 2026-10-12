import type { StrategicPlatformProject } from "./types";
import { AI_READINESS_SCAN_MATURITY_LABEL } from "../../lib/ai-readiness-scan-brand";

const KJERNEOMRADER = [
  { tittel: { no: "Strategi og ledelse", en: "Strategy and leadership" }, beskrivelse: { no: "Tre scored spørsmål i dette kjerneområdet.", en: "Three scored questions in this core area." } },
  { tittel: { no: "Arbeidsflyt og kundeverdi", en: "Workflow and customer value" }, beskrivelse: { no: "Tre scored spørsmål i dette kjerneområdet.", en: "Three scored questions in this core area." } },
  { tittel: { no: "Data og systemer", en: "Data and systems" }, beskrivelse: { no: "Tre scored spørsmål i dette kjerneområdet.", en: "Three scored questions in this core area." } },
  { tittel: { no: "Kompetanse og adopsjon", en: "Competence and adoption" }, beskrivelse: { no: "Tre scored spørsmål i dette kjerneområdet.", en: "Three scored questions in this core area." } },
  { tittel: { no: "Trygg bruk og ansvar", en: "Safe use and responsibility" }, beskrivelse: { no: "Tre scored spørsmål i dette kjerneområdet.", en: "Three scored questions in this core area." } },
  { tittel: { no: "Verdi og skalering", en: "Value and scaling" }, beskrivelse: { no: "Tre scored spørsmål i dette kjerneområdet.", en: "Three scored questions in this core area." } },
] as const;

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Kommersiell leder og AI-strateg", en: "Commercial leader and AI strategist" },
  beskrivelse: {
    no: "Har utviklet AI Readiness Scan som tilgangsstyrt kartleggingsverktøy. Arbeider i skjæringspunktet mellom kommersiell ledelse, arbeidsflyt, teknologi og praktisk AI.",
    en: "Developed AI Readiness Scan as an access-controlled mapping tool. Works at the intersection of commercial leadership, workflow, technology and practical AI.",
  },
};

export const aiReadinessScanPlatform: StrategicPlatformProject = {
  slug: "ai-readiness-scan",
  prosjektId: "ai-readiness-scan-2026-06",
  detailPath: "/ai-readiness-scan",
  meta: {
    title: { no: "AI Readiness Scan | Marius Ottesen", en: "AI Readiness Scan | Marius Ottesen" },
    description: {
      no: "Tilgangsstyrt kartlegging av AI-beredskap og gjennomføringsevne — med prioriterte utviklingsområder og administrativ oppfølging.",
      en: "Access-controlled mapping of AI readiness and execution capability — with prioritised development areas and administrative follow-up.",
    },
    ogImage: "/images/ai-readiness-scan-hero.png?v=20260719",
    canonicalPath: "/ai-readiness-scan",
  },
  teaser: {
    undertittel: {
      no: "Tilgangsstyrt kartlegging av AI-modenhet, prioriteringer og neste steg",
      en: "Access-controlled mapping of AI maturity, priorities and next steps",
    },
    intro: {
      no: "AI Readiness Scan er et tilgangsstyrt kartleggingsverktøy for ledere og virksomheter som vil avklare AI-modenhet, prioriteringer og neste steg.",
      en: "AI Readiness Scan is an access-controlled mapping tool for leaders and organisations that want to clarify AI maturity, priorities and next steps.",
    },
    blokker: {
      utfordring: {
        no: "Mange virksomheter ønsker å ta i bruk AI, men mangler et felles bilde av nåsituasjonen og hva som bør komme først.",
        en: "Many organisations want to adopt AI, but lack a shared picture of the current situation and what should come first.",
      },
      bygget: {
        no: "Et tilgangsstyrt kartleggingsverktøy med strukturert spørsmålsflyt, sikker innlogging, tilgangskoder og administrativ oppfølging av virksomheter og kartlegginger.",
        en: "An access-controlled mapping tool with structured question flow, secure login, access codes and administrative follow-up of organisations and assessments.",
      },
      relevans: {
        no: "Prosjektet viser hvordan strukturert kartlegging kan gi bedre prioritering og forberedelse før virksomheten investerer bredt i AI.",
        en: "The project shows how structured mapping can improve prioritisation and preparation before the organisation invests broadly in AI.",
      },
      status: {
        no: "Tilgangsstyrt kartleggingsverktøy · klar for avgrenset kundebruk.",
        en: "Access-controlled mapping tool · ready for limited customer use.",
      },
    },
    videreutvikling: {
      no: "Kan tilpasses andre virksomheter, bransjer og modenhetsnivåer med bransjespesifikke spørsmålssett, AI-generert oppsummering, modenhetsprofiler, prioriteringsmatriser og kobling mot implementerings- og læringsløp.",
      en: "Can be adapted for other organisations, industries and maturity levels with industry-specific question sets, AI-generated summaries, maturity profiles, prioritisation matrices and links to implementation and learning tracks.",
    },
  },
  detail: {
    statusBadge: AI_READINESS_SCAN_MATURITY_LABEL,
    hero: {
      verdiforslag: {
        no: "Strukturert kartlegging av AI-modenhet, prioriteringer og neste steg.",
        en: "Structured mapping of AI maturity, priorities and next steps.",
      },
      executiveSummary: {
        no: "AI Readiness Scan er utviklet for ledere og virksomheter som vil avklare AI-modenhet, prioriteringer og neste steg — fra strategi og kompetanse til data, arbeidsprosesser og ansvarlig bruk.",
        en: "AI Readiness Scan is built for leaders and organisations that want to clarify AI maturity, priorities and next steps — from strategy and competence to data, work processes and responsible use.",
      },
      bildeAlt: {
        no: "AI Readiness Scan – kartlegging av AI-beredskap og gjennomføringsevne",
        en: "AI Readiness Scan – mapping AI readiness and execution capability",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "Mange virksomheter ønsker å ta i bruk AI, men mangler et felles bilde av nåsituasjonen og hva som bør komme først. Utfordringen er å skape struktur før man investerer i større initiativer, piloter eller teknologi.",
        en: "Many organisations want to adopt AI, but lack a shared picture of the current situation and what should come first. The challenge is to create structure before investing in larger initiatives, pilots or technology.",
      },
    },
    logikk: {
      heading: { no: "Prosjektets modell og hovedlogikk", en: "The project's model and core logic" },
      body: {
        no: "AI Readiness Scan kartlegger virksomhetens AI-beredskap gjennom 18 spørsmål fordelt på seks kjerneområder. Vurderingen omfatter strategi og ledelse, arbeidsflyt og kundeverdi, data og systemer, kompetanse og adopsjon, trygg bruk og ansvar samt verdi og skalering.",
        en: "AI Readiness Scan maps the organisation's AI readiness through 18 questions across six core areas. The assessment covers strategy and leadership, workflow and customer value, data and systems, competence and adoption, safe use and responsibility, and value and scaling.",
      },
      steps: [...KJERNEOMRADER],
      after: {
        no: "Hvert kjerneområde har tre spørsmål med fem scored svarnivåer og alternativet «Vet ikke». Dette er de seks scored kjerneområdene — ikke det samme som valgbare forbedringsområder eller rapportens åtte hoveddeler.",
        en: "Each core area has three questions with five scored response levels and a “Don't know” option. These are the six scored core areas — not the same as selectable improvement areas or the report's eight main sections.",
      },
    },
    contentSections: [
      {
        heading: { no: "Valgbare forbedringsområder", en: "Selectable improvement areas" },
        body: {
          no: "Etter de scored spørsmålene kan respondenten velge blant elleve valgbare forbedringsområder, inkludert «Vet ikke ennå». Dette er et eget lag i kartleggingen — ikke scored kjerneområder og ikke rapportmoduler.",
          en: "After the scored questions, the respondent can choose among eleven selectable improvement areas, including “Don't know yet”. This is a separate layer in the assessment — not scored core areas and not report modules.",
        },
      },
      {
        heading: { no: "Resultatrapport og analyse", en: "Results report and analysis" },
        body: {
          no: "Resultatrapporten er bygget opp av åtte hoveddeler. Analysen er regelstyrt og svarbasert, med tilpassede vurderinger og prioriteringer ut fra besvarelsene — ikke generert av en språkmodell i sanntid.",
          en: "The results report consists of eight main sections. Analysis is rule-based and response-driven, with tailored assessments and prioritisation from the answers — not generated by a language model in real time.",
        },
      },
    ],
    bygget: {
      heading: { no: "Hva som er bygget eller utviklet", en: "What has been built or developed" },
      items: [
        { no: "Strukturert spørsmålsflyt: 18 spørsmål på seks scored kjerneområder (3 per område)", en: "Structured question flow: 18 questions across six scored core areas (3 per area)" },
        { no: "Regelstyrt resultatrapport med åtte hoveddeler og tilpassede anbefalinger", en: "Rule-based results report with eight main sections and tailored recommendations" },
        { no: "Sikker innlogging, tilgangskoder og administrasjonsflate for virksomheter og kartlegginger", en: "Secure login, access codes and admin environment for organisations and assessments" },
      ],
    },
    moduler: {
      heading: { no: "Sentrale moduler og funksjonsområder", en: "Core modules and functional areas" },
      intro: {
        no: "Løsningen er bygget rundt strukturert kartlegging og administrativ oppfølging av virksomhetens AI-beredskap.",
        en: "The solution is built around structured assessment and administrative follow-up of the organisation's AI readiness.",
      },
      modules: [
        { tittel: { no: "Tilgang og innlogging", en: "Access and login" }, beskrivelse: { no: "Virksomheten får tilgang gjennom unik tilgangskode eller sikker innlogging.", en: "The organisation gains access through a unique access code or secure login." }, bygget: true },
        {
          tittel: { no: "Scored kartlegging", en: "Scored assessment" },
          beskrivelse: {
            no: "18 spørsmål fordelt på seks kjerneområder, med fem scored svarnivåer og «Vet ikke» per spørsmål.",
            en: "18 questions across six core areas, with five scored response levels and “Don't know” per question.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Valg av forbedringsområder", en: "Improvement area selection" },
          beskrivelse: {
            no: "Elleve valgbare forbedringsområder, inkludert «Vet ikke ennå» — supplement til de scored kjerneområdene.",
            en: "Eleven selectable improvement areas, including “Don't know yet” — a supplement to the scored core areas.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Resultatrapport", en: "Results report" },
          beskrivelse: {
            no: "Regelstyrt, svarbasert rapport med åtte hoveddeler og tilpassede vurderinger — ikke sanntids generativ AI-analyse.",
            en: "Rule-based, response-driven report with eight main sections and tailored assessments — not real-time generative AI analysis.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Administrativ oppfølging", en: "Administrative follow-up" },
          beskrivelse: {
            no: "Besvarelser og rapporter samles for oversikt over mønstre, prioriteringer og dialog om neste steg.",
            en: "Responses and reports are collected for an overview of patterns, priorities and dialogue on next steps.",
          },
          bygget: true,
        },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan løsningen fungerer", en: "How the solution works" },
      intro: { no: "Virksomheten får tilgang, deltakeren svarer på kartlegging, og resultatet brukes til prioritering og oppfølging.", en: "The organisation gains access, the participant completes the assessment, and the result is used for prioritisation and follow-up." },
      detaljpunkter: [
        {
          no: "Respondenten svarer på 18 spørsmål fordelt på seks kjerneområder, velger relevante forbedringsområder og får en regelstyrt rapport.",
          en: "The respondent answers 18 questions across six core areas, selects relevant improvement areas and receives a rule-based report.",
        },
        {
          no: "Administrasjonsflaten samler besvarelser og rapporter som grunnlag for prioritering og oppfølging — ikke som formell sertifisering.",
          en: "The admin environment collects responses and reports as a basis for prioritisation and follow-up — not as formal certification.",
        },
      ],
    },
    relevans: {
      heading: { no: "Anvendelse og relevans", en: "Application and relevance" },
      sections: [
        { tittel: { no: "For ledere og virksomheter", en: "For leaders and organisations" }, tekst: { no: "Gir et konkret grunnlag for videre AI-arbeid, prioritering og strukturert oppfølging.", en: "Provides a concrete basis for further AI work, prioritisation and structured follow-up." } },
        { tittel: { no: "Før større initiativer", en: "Before larger initiatives" }, tekst: { no: "Skaper struktur før virksomheten investerer i større initiativer, piloter eller teknologi.", en: "Creates structure before the organisation invests in larger initiatives, pilots or technology." } },
      ],
    },
    status: {
      heading: { no: "Status, modenhet og avgrensninger", en: "Status, maturity and limitations" },
      body: {
        no: "AI Readiness Scan er et tilgangsstyrt kartleggingsverktøy · klar for avgrenset kundebruk. Løsningen er ikke en formell sertifisering, men et strukturert grunnlag for dialog, prioritering og oppfølging.",
        en: "AI Readiness Scan is an access-controlled mapping tool · ready for limited customer use. The solution is not a formal certification, but a structured basis for dialogue, prioritisation and follow-up.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Videreutvikling av løsningen", en: "Further development of the solution" },
        punkter: [
          { no: "Bransjespesifikke spørsmålssett", en: "Industry-specific question sets" },
          { no: "AI-generert oppsummering", en: "AI-generated summaries" },
          { no: "Modenhetsprofiler", en: "Maturity profiles" },
          { no: "Prioriteringsmatriser", en: "Prioritisation matrices" },
          { no: "Kobling mot implementerings- og læringsløp", en: "Links to implementation and learning tracks" },
        ],
      },
      tilpasning: {
        heading: { no: "Tilpasning til virksomheter og modenhetsnivåer", en: "Adaptation to organisations and maturity levels" },
        punkter: [
          { no: "Andre virksomheter og bransjer", en: "Other organisations and industries" },
          { no: "Ulike modenhetsnivåer", en: "Different maturity levels" },
          { no: "Prioritering av AI-arbeid før videre tiltak", en: "Prioritisation of AI work before further initiatives" },
        ],
      },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: {
        no: "Ønsker du å avklare AI-beredskap, prioriteringer og neste steg? Ta kontakt med Marius Ottesen Consulting for en uforpliktende samtale om AI Readiness Scan, kartlegging og videre arbeid.",
        en: "Want to clarify AI readiness, priorities and next steps? Contact Marius Ottesen Consulting for a no-obligation conversation about AI Readiness Scan, assessment and further work.",
      },
      showContactPrimary: true,
      contactPrimaryLabel: {
        no: "Ta kontakt om AI Readiness Scan",
        en: "Contact me about AI Readiness Scan",
      },
    },
    utvikler,
  },
};
