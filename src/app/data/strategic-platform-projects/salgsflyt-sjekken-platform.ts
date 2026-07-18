import type { StrategicPlatformProject } from "./types";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Kommersiell leder og AI-strateg", en: "Commercial leader and AI strategist" },
  beskrivelse: {
    no: "Utvikler virksomhetsnære løsninger og konsepter i skjæringspunktet mellom kommersiell ledelse, mennesker, arbeidsflyt, teknologi og praktisk AI.",
    en: "Develops business-oriented solutions and concepts at the intersection of commercial leadership, people, workflow, technology and practical AI.",
  },
};

export const salgsflytSjekkenPlatform: StrategicPlatformProject = {
  slug: "salgsflyt-sjekken",
  prosjektId: "smb-salgsflyt-sjekken-2026",
  detailPath: "/salgsflyt-sjekken",
  meta: {
    title: { no: "SMB Salgsflyt-sjekken | Marius Ottesen", en: "SMB Sales Flow Check | Marius Ottesen" },
    description: {
      no: "Interaktiv diagnose og AI-rapportering for salgsfriksjon på tvers av ti kommersielle dimensjoner — med PDF-rapport og adminkonsoll.",
      en: "Interactive diagnosis and AI reporting for sales friction across ten commercial dimensions — with a PDF report and admin console.",
    },
    ogImage: "/images/salgsflyt-sjekken-hero.png",
    canonicalPath: "/salgsflyt-sjekken",
  },
  teaser: {
    undertittel: {
      no: "Tilgangsstyrt diagnose og AI-rapportering for SMB-salg",
      en: "Access-controlled diagnosis and AI reporting for SMB sales",
    },
    intro: {
      no: "SMB Salgsflyt-sjekken er et interaktivt diagnoseverktøy for ledere som kartlegger friksjon og flaskehalser på tvers av ti kommersielle dimensjoner.",
      en: "SMB Sales Flow Check is an interactive diagnostic tool for leaders that maps friction and bottlenecks across ten commercial dimensions.",
    },
    blokker: {
      utfordring: {
        no: "Mange virksomheter har usynlig friksjon i salgsleddet, som ubrukte CRM-systemer, ustrukturerte tilbudsprosesser og svak leadoppfølging.",
        en: "Many organisations have invisible friction in their sales function, such as unused CRM systems, unstructured proposal processes and weak lead follow-up.",
      },
      bygget: {
        no: "En tilgangsstyrt diagnoseapp med strukturert spørsmålsflyt, automatisk scoring, dypdykk i svake områder, Gemini AI-generering av rapporter og adminkonsoll.",
        en: "An access-controlled diagnostic app with structured question flow, automatic scoring, deep dives into weak areas, Gemini AI generation of reports and an admin console.",
      },
      relevans: {
        no: "Prosjektet viser hvordan AI kan strukturere diagnose og forberede prioritering, samtidig som respondenten får umiddelbar verdi.",
        en: "The project shows how AI can structure diagnosis and prepare prioritisation while delivering immediate value to the respondent.",
      },
      status: {
        no: "Tilgangsstyrt diagnoseverktøy med scoring, AI-analyse og adminkonsoll — hele prosessen tar under ti minutter.",
        en: "Access-controlled diagnostic tool with scoring, AI analysis and admin console — the full process takes under ten minutes.",
      },
    },
    videreutvikling: {
      no: "Kan tilpasses andre selskaper, bransjer og salgsmodeller med CRM-integrasjon, bransjetilpassede diagnostikkspørsmål, pipeline-styring, oppfølgingslogikk og rapportering.",
      en: "Can be adapted for other organisations, industries and sales models with CRM integration, industry-specific diagnostic questions, pipeline management, follow-up logic and reporting.",
    },
  },
  detail: {
    statusBadge: {
      no: "Tilgangsstyrt diagnoseverktøy med AI-analyse, PDF-rapport og adminkonsoll",
      en: "Access-controlled diagnostic tool with AI analysis, PDF report and admin console",
    },
    hero: {
      verdiforslag: {
        no: "Interaktiv diagnose og AI-rapportering for å avdekke salgsfriksjon og prioritere neste steg.",
        en: "Interactive diagnosis and AI reporting to uncover sales friction and prioritise next steps.",
      },
      executiveSummary: {
        no: "SMB Salgsflyt-sjekken er utviklet for ledere og kommersielle miljøer som vil kartlegge friksjon og flaskehalser i salgsflyten — på tvers av ti kommersielle dimensjoner, med AI-støttet rapport og adminkonsoll.",
        en: "SMB Sales Flow Check is built for leaders and commercial environments that want to map friction and bottlenecks in sales flow — across ten commercial dimensions, with AI-supported reporting and an admin console.",
      },
      bildeAlt: {
        no: "SMB Salgsflyt-sjekken – interaktiv diagnose og AI-rapportering",
        en: "SMB Sales Flow Check – interactive diagnosis and AI reporting",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "Mange virksomheter har usynlig friksjon i salgsleddet: ubrukte CRM-systemer, ustrukturerte tilbudsprosesser og svak leadoppfølging. Utfordringen er å avdekke rotårsakene systematisk og synliggjøre forbedringsområder før videre prioritering.",
        en: "Many organisations have invisible friction in their sales function: unused CRM systems, unstructured proposal processes and weak lead follow-up. The challenge is to uncover root causes systematically and make improvement areas visible before further prioritisation.",
      },
    },
    logikk: {
      heading: { no: "Prosjektets modell og hovedlogikk", en: "The project's model and core logic" },
      body: {
        no: "Diagnosen kartlegger salgsfriksjon på tvers av ti kommersielle dimensjoner — fra leadfangst og CRM-bruk til oppfølging, tilbudsprosesser og AI-modenhet.",
        en: "The diagnosis maps sales friction across ten commercial dimensions — from lead capture and CRM use to follow-up, proposal processes and AI maturity.",
      },
      steps: [
        { tittel: { no: "Hovedkartlegging", en: "Main assessment" }, beskrivelse: { no: "20 flervalgsspørsmål fordelt på ti dimensjoner gir dimensjons- og totalscore.", en: "20 multiple-choice questions across ten dimensions produce dimension and total scores." } },
        { tittel: { no: "Dypdykk", en: "Deep dive" }, beskrivelse: { no: "De svakeste områdene utløser oppfølgingsspørsmål om rotårsaker, varighet og historiske feilskjær.", en: "The weakest areas trigger follow-up questions on root causes, duration and historical missteps." } },
        { tittel: { no: "AI-analyse", en: "AI analysis" }, beskrivelse: { no: "Gemini tolker score og fritekst og genererer kunderapport og intern salgsvurdering parallelt.", en: "Gemini interprets scores and free text and generates a customer report and internal sales assessment in parallel." } },
        { tittel: { no: "Oppfølging", en: "Follow-up" }, beskrivelse: { no: "Besvarelser samles med kontaktinfo, score, lead-kvalitet og anbefalt oppfølging.", en: "Responses are collected with contact details, score, lead quality and recommended follow-up." } },
      ],
    },
    bygget: {
      heading: { no: "Hva som er bygget eller utviklet", en: "What has been built or developed" },
      items: [
        { no: "Tilgangsstyrt diagnoseapp med strukturert spørsmålsflyt", en: "Access-controlled diagnostic app with structured question flow" },
        { no: "Skreddersydd PDF-rapport med konkrete tiltak", en: "Tailored PDF report with concrete actions" },
        { no: "Adminkonsoll for oppfølging", en: "Admin console for follow-up" },
      ],
    },
    moduler: {
      heading: { no: "Sentrale moduler og funksjonsområder", en: "Core modules and functional areas" },
      intro: {
        no: "Løsningen er bygget for SMB-salg, men kan tilpasses andre kommersielle miljøer.",
        en: "The solution is built for SMB sales, but can be adapted to other commercial environments.",
      },
      modules: [
        { tittel: { no: "Hovedkartlegging", en: "Main assessment" }, beskrivelse: { no: "20 flervalgsspørsmål på tvers av ti kommersielle dimensjoner.", en: "20 multiple-choice questions across ten commercial dimensions." }, bygget: true },
        { tittel: { no: "Dypdykk", en: "Deep dive" }, beskrivelse: { no: "Oppfølgingsspørsmål i de svakeste områdene om rotårsaker, varighet og historiske feilskjær.", en: "Follow-up questions in the weakest areas about root causes, duration and historical missteps." }, bygget: true },
        { tittel: { no: "Gemini AI-analyse og PDF-rapport", en: "Gemini AI analysis and PDF report" }, beskrivelse: { no: "Gemini genererer kunderapport og intern salgsvurdering, mens kunden får PDF-rapport når diagnosen er ferdig.", en: "Gemini generates a customer report and internal sales assessment, while the customer receives a PDF report when the diagnosis is complete." }, bygget: true },
        { tittel: { no: "Adminkonsoll", en: "Admin console" }, beskrivelse: { no: "Samler besvarelser med kontaktinfo, score, lead-kvalitet og anbefalt oppfølging.", en: "Collects responses with contact details, score, lead quality and recommended follow-up." }, bygget: true },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan løsningen fungerer", en: "How the solution works" },
      intro: { no: "Diagnosen gjennomføres i fire steg og tar under ti minutter.", en: "The diagnosis is completed in four steps and takes under ten minutes." },
      detaljpunkter: [
        {
          no: "Hovedkartlegging og dypdykk gir score og rotårsaksinnsikt på tvers av ti dimensjoner.",
          en: "Main assessment and deep dives provide scores and root-cause insight across ten dimensions.",
        },
        {
          no: "Gemini genererer kunderapport og intern vurdering; PDF og adminkonsoll støtter oppfølging.",
          en: "Gemini generates a customer report and internal assessment; PDF and admin console support follow-up.",
        },
      ],
    },
    relevans: {
      heading: { no: "Anvendelse og relevans", en: "Application and relevance" },
      sections: [
        { tittel: { no: "For SMB-ledere og kommersielle team", en: "For SMB leaders and commercial teams" }, tekst: { no: "Gir en strukturert diagnose av salgsfriksjon, CRM-bruk, oppfølging og tilbudsprosesser.", en: "Provides a structured diagnosis of sales friction, CRM use, follow-up and proposal processes." } },
        { tittel: { no: "For rådgivere", en: "For advisors" }, tekst: { no: "Kan gi raskere kvalifisering av potensielle kunder og et bedre grunnlag for prioritering og oppfølging.", en: "Can provide faster qualification of potential clients and a better basis for prioritisation and follow-up." } },
        { tittel: { no: "Umiddelbar verdi", en: "Immediate value" }, tekst: { no: "Respondenten får en skreddersydd PDF-rapport med konkrete tiltak ved fullført diagnose.", en: "The respondent receives a tailored PDF report with concrete actions when the diagnosis is complete." } },
      ],
    },
    anvendelsesformat: {
      heading: { no: "Mulig anvendelsesformat", en: "Possible application format" },
      steg: [
        {
          tittel: { no: "Avtale og tilgang", en: "Agreement and access" },
          beskrivelse: {
            no: "Kort avklaring av formål, målgruppe og oppfølging. Respondent får tilsendt tilgangskode til spørreundersøkelsen.",
            en: "Brief clarification of purpose, target group and follow-up. The respondent receives an access code for the survey.",
          },
        },
        {
          tittel: { no: "Diagnose", en: "Diagnosis" },
          beskrivelse: {
            no: "Respondent gjennomfører spørreundersøkelsen på tvers av ti kommersielle dimensjoner — typisk under ti minutter.",
            en: "The respondent completes the survey across ten commercial dimensions — typically in under ten minutes.",
          },
        },
        {
          tittel: { no: "Dypdykk", en: "Deep dive" },
          beskrivelse: {
            no: "Svakeste områder utløser oppfølgingsspørsmål om rotårsaker, varighet og historiske feilskjær.",
            en: "The weakest areas trigger follow-up questions on root causes, duration and historical missteps.",
          },
        },
        {
          tittel: { no: "Rapportering", en: "Reporting" },
          beskrivelse: {
            no: "AI genererer kunderapport og intern salgsvurdering parallelt — med score, lead-kvalitet og anbefalt oppfølging. Kunden får en skreddersydd PDF-rapport sendt med en gang diagnosen er fullført.",
            en: "AI generates customer report and internal sales assessment in parallel — with score, lead quality and recommended follow-up. The customer receives a tailored PDF report as soon as the diagnosis is complete.",
          },
        },
        {
          tittel: { no: "Oppfølging", en: "Follow-up" },
          beskrivelse: {
            no: "Debrief og anbefalt neste steg — for eksempel prioritering av kommersielle tiltak, CRM-forbedring eller videre arbeidsflyt.",
            en: "Debrief and recommended next step — for example prioritisation of commercial initiatives, CRM improvement or further workflow work.",
          },
        },
      ],
    },
    status: {
      heading: { no: "Status, modenhet og avgrensninger", en: "Status, maturity and limitations" },
      body: {
        no: "SMB Salgsflyt-sjekken er et tilgangsstyrt diagnoseverktøy med scoring, AI-analyse og adminkonsoll — moden for avgrenset testing, videreutvikling og relevant kommersiell anvendelse. Hele prosessen tar under ti minutter.\n\nLøsningen er et diagnose- og kvalifiseringsverktøy, ikke en CRM-implementering eller ferdig salgsstrategi. Den avdekker friksjon og modenhet, men erstatter ikke oppfølgende rådgivning, prosessdesign eller systemarbeid der det trengs.",
        en: "SMB Sales Flow Check is an access-controlled diagnostic tool with scoring, AI analysis and an admin console — mature for limited testing, further development and relevant commercial application. The full process takes under ten minutes.\n\nThe solution is a diagnostic and qualification tool, not a CRM implementation or finished sales strategy. It uncovers friction and maturity, but does not replace follow-up advisory work, process design or systems work where needed.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Videreutvikling av løsningen", en: "Further development of the solution" },
        punkter: [
          { no: "CRM-integrasjon", en: "CRM integration" },
          { no: "Bransjetilpassede diagnostikkspørsmål", en: "Industry-specific diagnostic questions" },
          { no: "Pipeline-styring", en: "Pipeline management" },
          { no: "Oppfølgingslogikk", en: "Follow-up logic" },
          { no: "Rapportering for ulike kommersielle team", en: "Reporting for different commercial teams" },
        ],
      },
      tilpasning: {
        heading: { no: "Tilpasning til selskaper, bransjer og salgsmodeller", en: "Adaptation to organisations, industries and sales models" },
        punkter: [
          { no: "Andre selskaper og bransjer", en: "Other organisations and industries" },
          { no: "Andre kommersielle miljøer", en: "Other commercial environments" },
          { no: "Ulike salgsmodeller", en: "Different sales models" },
        ],
      },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: { no: "Ta kontakt for faglig dialog om hvordan en strukturert salgsdiagnose kan gi grunnlag for prioritering, oppfølging og videre arbeidsflyt.", en: "Get in touch for professional dialogue on how a structured sales diagnosis can provide a basis for prioritisation, follow-up and further workflow." },
    },
    utvikler,
  },
};
