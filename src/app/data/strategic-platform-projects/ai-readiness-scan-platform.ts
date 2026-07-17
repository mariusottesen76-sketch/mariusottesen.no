import type { StrategicPlatformProject } from "./types";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Kommersiell leder og AI-strateg", en: "Commercial leader and AI strategist" },
  beskrivelse: {
    no: "Utvikler virksomhetsnære løsninger og konsepter i skjæringspunktet mellom kommersiell ledelse, mennesker, arbeidsflyt, teknologi og praktisk AI.",
    en: "Develops business-oriented solutions and concepts at the intersection of commercial leadership, people, workflow, technology and practical AI.",
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
    ogImage: "/images/ai-readiness-scan-hero.png",
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
        no: "Bygget som tilgangsstyrt kartleggingsverktøy med modenhet for avgrenset testing og videre utvikling.",
        en: "Built as an access-controlled mapping tool with maturity for limited testing and further development.",
      },
    },
    videreutvikling: {
      no: "Kan tilpasses andre virksomheter, bransjer og modenhetsnivåer med bransjespesifikke spørsmålssett, AI-generert oppsummering, modenhetsprofiler, prioriteringsmatriser og kobling mot implementerings- og læringsløp.",
      en: "Can be adapted for other organisations, industries and maturity levels with industry-specific question sets, AI-generated summaries, maturity profiles, prioritisation matrices and links to implementation and learning tracks.",
    },
  },
  detail: {
    statusBadge: {
      no: "Tilgangsstyrt kartleggingsverktøy for AI-beredskap og gjennomføringsevne",
      en: "Access-controlled mapping tool for AI readiness and execution capability",
    },
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
        no: "Kartleggingen gir et strukturert bilde av AI-modenhet på tvers av sju områder:",
        en: "The assessment provides a structured picture of AI maturity across seven areas:",
      },
      steps: [
        { tittel: { no: "Sju kartleggingsområder", en: "Seven assessment areas" }, beskrivelse: { no: "Spørsmålene dekker blant annet strategi, kompetanse, prosesser, data, risiko og ansvarlig bruk.", en: "The questions cover, among other areas, strategy, competence, processes, data, risk and responsible use." } },
      ],
      after: {
        no: "Resultatet brukes som grunnlag for dialog om neste steg og mulige forbedringsområder.",
        en: "The result is used as a basis for dialogue on next steps and possible improvement areas.",
      },
    },
    bygget: {
      heading: { no: "Hva som er bygget eller utviklet", en: "What has been built or developed" },
      items: [
        { no: "Strukturert spørsmålsflyt på tvers av sju modenhetsområder", en: "Structured question flow across seven maturity areas" },
        { no: "Sikker innlogging og tilgangskoder", en: "Secure login and access codes" },
        { no: "Administrasjonsflate for virksomheter og kartlegginger", en: "Admin environment for organisations and assessments" },
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
        { tittel: { no: "Kartlegging", en: "Assessment" }, beskrivelse: { no: "Strukturert spørsmål om strategi, kompetanse, prosesser, data, risiko og ansvarlig bruk.", en: "Structured questions about strategy, competence, processes, data, risk and responsible use." }, bygget: true },
        { tittel: { no: "Administrativ oppfølging", en: "Administrative follow-up" }, beskrivelse: { no: "Besvarelser samles for oversikt over mønstre og aktuelle prioriteringer.", en: "Responses are collected for an overview of patterns and current priorities." }, bygget: true },
        { tittel: { no: "Prioritering", en: "Prioritisation" }, beskrivelse: { no: "Resultatet brukes som grunnlag for dialog om neste steg — ikke som formell sertifisering.", en: "The result is used as a basis for dialogue on next steps — not as formal certification." }, bygget: true },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan løsningen fungerer", en: "How the solution works" },
      intro: { no: "Virksomheten får tilgang, deltakeren svarer på kartlegging, og resultatet brukes til prioritering og oppfølging.", en: "The organisation gains access, the participant completes the assessment, and the result is used for prioritisation and follow-up." },
      detaljpunkter: [
        {
          no: "Kartleggingen dekker strategi, kompetanse, prosesser, data, risiko og ansvarlig bruk.",
          en: "The assessment covers strategy, competence, processes, data, risk and responsible use.",
        },
        {
          no: "Administrasjonsflaten samler besvarelser og mønstre som grunnlag for dialog om neste steg.",
          en: "The admin environment collects responses and patterns as a basis for dialogue on next steps.",
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
        no: "AI Readiness Scan er bygget som et tilgangsstyrt kartleggingsverktøy med modenhet for avgrenset testing og videre utvikling. Løsningen er ikke en formell sertifisering, men et strukturert grunnlag for dialog, prioritering og oppfølging.",
        en: "AI Readiness Scan is built as an access-controlled mapping tool with maturity for limited testing and further development. The solution is not a formal certification, but a structured basis for dialogue, prioritisation and follow-up.",
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
      body: { no: "Ta kontakt for faglig dialog om hvordan en strukturert AI-kartlegging kan gi grunnlag for prioritering og videre arbeid.", en: "Get in touch for professional dialogue on how a structured AI assessment can provide a basis for prioritisation and further work." },
    },
    utvikler,
  },
};
