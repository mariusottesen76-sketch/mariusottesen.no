import type { StrategicPlatformProject } from "./types";
import { AI_READINESS_SCAN_MATURITY_LABEL } from "../../lib/ai-readiness-scan-brand";

/** Seks dimensjoner i hovedkartleggingen (3 scored spørsmål per dimensjon — uten spørsmålstekst på nettsiden). */
const HOVEDKARTLEGGING_DIMENSJONER = [
  {
    tittel: { no: "Strategi og forankring", en: "Strategy and anchoring" },
    beskrivelse: {
      no: "Kartlegger forankring i strategi og prioriteringer, ledelsens engasjement og eierskap, samt tid, kapasitet og ressurser til AI-arbeid.",
      en: "Maps anchoring in strategy and priorities, leadership engagement and ownership, and time, capacity and resources for AI work.",
    },
  },
  {
    tittel: { no: "Kompetanse og kultur", en: "Competence and culture" },
    beskrivelse: {
      no: "Kartlegger grunnleggende AI-forståelse, kultur for eksperimentering og læring, samt strukturert opplæring og retningslinjer i arbeidshverdagen.",
      en: "Maps basic AI literacy, a culture of experimentation and learning, and structured training and guidelines in everyday work.",
    },
  },
  {
    tittel: { no: "Data og teknologi", en: "Data and technology" },
    beskrivelse: {
      no: "Kartlegger tilgjengelighet og struktur i data for AI, datakvalitet og aktualitet, samt oversikt over systemer og integrasjonsmuligheter.",
      en: "Maps availability and structure of data for AI, data quality and freshness, and overview of systems and integration options.",
    },
  },
  {
    tittel: { no: "Prosesser og bruk", en: "Processes and use" },
    beskrivelse: {
      no: "Kartlegger identifiserte arbeidsprosesser der AI kan skape verdi, faktisk verktøybruk i dag, og rutiner for å teste nye bruksområder før bred utrulling.",
      en: "Maps identified work processes where AI can create value, actual tool use today, and routines for testing new use cases before broad rollout.",
    },
  },
  {
    tittel: { no: "Styring, etikk og sikkerhet", en: "Governance, ethics and security" },
    beskrivelse: {
      no: "Kartlegger retningslinjer for sikkerhet, personvern og data, bevissthet om risiko (konfidensialitet, opphavsrett, feilinformasjon), samt menneskelig kontroll og kvalitetssikring.",
      en: "Maps guidelines for security, privacy and data, awareness of risks (confidentiality, copyright, misinformation), and human oversight and quality assurance.",
    },
  },
  {
    tittel: { no: "Verdi og gevinster", en: "Value and benefits" },
    beskrivelse: {
      no: "Kartlegger definerte mål med AI, måling eller evaluering av effekt fra verktøy og piloter, samt opplevd reell forbedring eller konkurransefortrinn.",
      en: "Maps defined goals for AI, measurement or evaluation of effects from tools and pilots, and perceived real improvement or competitive advantage.",
    },
  },
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
      no: "Avklar AI-modenhet og prioriteringer før større investeringer — tilgangsstyrt kartlegging med lederrapport.",
      en: "Clarify AI maturity and priorities before major investments — access-controlled assessment with leadership report.",
    },
    ogImage: "/images/ai-readiness-scan-hero.png?v=20260719",
    canonicalPath: "/ai-readiness-scan",
  },
  teaser: {
    undertittel: {
      no: "Avklar forutsetninger og prioriteringer før større AI-investeringer",
      en: "Clarify prerequisites and priorities before major AI investments",
    },
    intro: {
      no: "For ledere som vil vite om virksomheten er rustet til AI — og hva som bør styrkes før neste store satsing.",
      en: "For leaders who want to know if the organisation is ready for AI — and what to strengthen before the next major initiative.",
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
        no: "Felless bilde av AI-forutsetninger — før verktøy, piloter og transformasjon.",
        en: "Shared picture of AI prerequisites — before tools, pilots and transformation.",
      },
      executiveSummary: {
        no: "Du får en regelstyrt rapport på tvers av strategi, kompetanse, data, prosesser, styring og verdi — som grunnlag for prioriteringsmøter, ikke som sertifisering eller revisjon.",
        en: "You receive a rule-based report across strategy, competence, data, processes, governance and value — as a basis for prioritisation meetings, not as certification or audit.",
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
        no: "Kartleggingen starter med kontekstspørsmål, deretter hovedkartlegging med 18 scored spørsmål på seks dimensjoner, valg av forbedringsområder og regelstyrt rapport. Dimensjonene under beskriver hovedkartleggingen — ikke valgbare forbedringsområder eller rapportens åtte hoveddeler.",
        en: "The assessment starts with context questions, then the main assessment with 18 scored questions across six dimensions, improvement area selection and a rule-based report. The dimensions below describe the main assessment — not selectable improvement areas or the report's eight main sections.",
      },
    },
    contentSections: [
      {
        heading: {
          no: "Del 2: Hovedkartleggingen (18 spørsmål fordelt på 6 dimensjoner)",
          en: "Part 2: Main assessment (18 questions across 6 dimensions)",
        },
        body: {
          no: "Kartleggingen består av 18 spørsmål fordelt med nøyaktig 3 spørsmål per dimensjon. Hvert spørsmål besvares på en skala fra 1 til 5, pluss et nøytralt svaralternativ for «Vet ikke / Uavklart».\n\nOppsummering: Totalt antall scoringsspørsmål: 18 · Dimensjoner: 6 (3 spørsmål per dimensjon) · Svarskala: 1–5 samt «Vet ikke / Uavklart» · Kontekstspørsmål i oppstarten: 5",
          en: "The assessment consists of 18 questions with exactly 3 questions per dimension. Each question is answered on a scale from 1 to 5, plus a neutral option for “Don't know / Unclear”.\n\nSummary: Total scored questions: 18 · Dimensions: 6 (3 questions per dimension) · Response scale: 1–5 plus “Don't know / Unclear” · Context questions at the start: 5",
        },
        steps: [...HOVEDKARTLEGGING_DIMENSJONER],
      },
      {
        heading: { no: "Valgbare forbedringsområder", en: "Selectable improvement areas" },
        body: {
          no: "Når hovedkartleggingen er ferdig, kan respondenten merke av hvilke utviklingsområder virksomheten vil prioritere videre — inntil elleve temaer. Dette er et eget, ikke-scoret lag: det supplerer dimensjonsscorene med egen prioritering, og skal ikke forveksles med de seks dimensjonene eller modulene i resultatrapporten.",
          en: "When the main assessment is complete, the respondent can mark which development areas the organisation wants to prioritise next — up to eleven themes. This is a separate, non-scored layer: it supplements dimension scores with explicit priorities, and should not be confused with the six dimensions or the modules in the results report.",
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
        { no: "Strukturert spørsmålsflyt: 5 kontekstspørsmål og 18 scored spørsmål på seks dimensjoner (3 per dimensjon)", en: "Structured question flow: 5 context questions and 18 scored questions across six dimensions (3 per dimension)" },
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
            no: "18 spørsmål fordelt på seks dimensjoner, med skala 1–5 og «Vet ikke / Uavklart» per spørsmål.",
            en: "18 questions across six dimensions, with a 1–5 scale and “Don't know / Unclear” per question.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Valg av forbedringsområder", en: "Improvement area selection" },
          beskrivelse: {
            no: "Inntil elleve selvvalgte utviklingsområder etter hovedkartleggingen — uten egen score, som supplement til dimensjonsvurderingen.",
            en: "Up to eleven self-selected development areas after the main assessment — without their own score, as a supplement to the dimension assessment.",
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
          no: "Respondenten svarer på kontekst og hovedkartlegging (18 scored spørsmål på seks dimensjoner), velger relevante forbedringsområder og får en regelstyrt rapport.",
          en: "The respondent answers context and main assessment questions (18 scored questions across six dimensions), selects relevant improvement areas and receives a rule-based report.",
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
        no: "Med tilgangskode kan du gjennomføre kartleggingen og få en rapport til bruk i ledermøter. Uten kode kan du be om tilgang eller ta kontakt om hvordan verktøyet kan brukes i din virksomhet.",
        en: "With an access code you can complete the assessment and receive a report for leadership meetings. Without a code you can request access or get in touch about how the tool can be used in your organisation.",
      },
      showContactPrimary: false,
    },
    utvikler,
  },
};
