import { Lang } from "../LanguageContext";
import { FLOW_SIGNAL_APP_URL } from "../lib/flowsignal-brand";
import { PSC_APP_URL, PSC_SHORT_DESCRIPTION } from "../lib/psc-brand";
import { SMB_SALGSFLYT_APP_URL } from "../lib/smb-salgsflyt-brand";

type L = { no: string; en: string };

const tilgangNoteStandard: L = {
  no: "Løsningen er tilgangsstyrt og utviklet som porteføljeprosjekt / lukket testflate. Den beskrives her for å dokumentere funksjonalitet, læring og praktisk AI-kompetanse. Tilgang vurderes kun i relevante faglige eller profesjonelle sammenhenger.",
  en: "The solution is access-controlled and developed as a portfolio project / closed test environment. It is described here to document functionality, learning and practical AI competence. Access is considered only in relevant professional contexts.",
};

const kontaktFagligCta: L = { no: "Ta kontakt for faglig dialog", en: "Contact for professional dialogue" };
const apneTilgangsstyrtCta: L = { no: "Åpne tilgangsstyrt løsning", en: "Open access-controlled solution" };
const apneLukketTestflateCta: L = { no: "Åpne lukket testflate", en: "Open closed test environment" };

export type PilotSteg = { tittel: L; beskrivelse: L };

export type PilotSide = {
  slug: "psc" | "flowsignal" | "salgsflyt-sjekken";
  meta: { title: L; description: L };
  hero: {
    tittel: L;
    tittelAccent: L;
    undertittel: L;
    tekst: L;
    primaerCta: L;
    sekundaerCta: L;
    tilgangNote: L;
  };
  hvem: { tittel: L; tekst: L; punkter: L[] };
  problem: { tittel: L; tekst: L; punkter: L[] };
  gjennomforing: { tittel: L; steg: PilotSteg[] };
  utvikler: { tittel: L; punkter: L[] };
  format: { tittel: L; tekst: L; punkter: L[] };
  utbytte: { tittel: L; punkter: L[] };
  avgrensning?: { tittel: L; tekst: L };
  consulting: { tittel: L; tekst: L; primaerCta: L; sekundaerCta: L; tilgangNote: L };
  pilotAppUrl: string;
};

const pscSide: PilotSide = {
  slug: "psc",
  meta: {
    title: {
      no: "The Predictive Sales Coach v2.0 | Marius Ottesen",
      en: "The Predictive Sales Coach v2.0 | Marius Ottesen",
    },
    description: PSC_SHORT_DESCRIPTION,
  },
  hero: {
    tittel: { no: "The Predictive Sales Coach", en: "The Predictive Sales Coach" },
    tittelAccent: { no: "v2.0", en: "v2.0" },
    undertittel: PSC_SHORT_DESCRIPTION,
    tekst: {
      no: "The Predictive Sales Coach er utviklet som et tilgangsstyrt porteføljeprosjekt og lukket testflate for salgsledere, selgere og kommersielle team som ønsker bedre forberedelse, tydeligere møtegjennomføring og mer systematisk læring etter kundedialoger. Målet er ikke å erstatte salgsledelse, men å styrke trening, refleksjon og kvalitet i salgsarbeidet.",
      en: "The Predictive Sales Coach is built as an access-controlled portfolio project and closed test environment for sales leaders, salespeople and commercial teams who want better preparation, clearer meeting execution and more systematic learning after customer dialogues. The goal is not to replace sales leadership, but to strengthen training, reflection and quality in sales work.",
    },
    primaerCta: kontaktFagligCta,
    sekundaerCta: apneTilgangsstyrtCta,
    tilgangNote: tilgangNoteStandard,
  },
  hvem: {
    tittel: { no: "Hvem løsningen er relevant for", en: "Who the solution is relevant for" },
    tekst: {
      no: "Piloten passer for B2B-selskaper med selgere, KAM-er eller rådgivere som har viktige kundemøter, men der kvaliteten på forberedelse, behovsavklaring, innvendinger, neste steg og læring varierer for mye.",
      en: "The pilot suits B2B companies with salespeople, key account managers or advisors who run important customer meetings, but where quality of preparation, needs clarification, objections, next steps and learning varies too much.",
    },
    punkter: [
      { no: "Salgsteam som ønsker bedre møteforberedelse", en: "Sales teams that want better meeting preparation" },
      { no: "Salgsledere som vil utvikle selgere mer systematisk", en: "Sales leaders who want to develop salespeople more systematically" },
      { no: "Kommersielle team som ønsker bedre behovsavklaring og verdiargumentasjon", en: "Commercial teams that want better needs clarification and value argumentation" },
      { no: "Organisasjoner som vil trene på realistiske kundescenarioer før faktiske møter", en: "Organisations that want to train on realistic customer scenarios before real meetings" },
    ],
  },
  problem: {
    tittel: { no: "Problemet piloten adresserer", en: "The problem the pilot addresses" },
    tekst: {
      no: "Mange salgsorganisasjoner måler aktivitet, pipeline og resultat, men trener for lite på selve kundedialogen. Selgere går ofte i møter med ulik forberedelse, svakere struktur enn ønskelig og lite systematisk læring i etterkant.",
      en: "Many sales organisations measure activity, pipeline and results, but train too little on the customer dialogue itself. Salespeople often enter meetings with uneven preparation, weaker structure than desired and little systematic learning afterwards.",
    },
    punkter: [
      { no: "Ulik kvalitet på møteforberedelser", en: "Uneven quality of meeting preparation" },
      { no: "Svak eller tilfeldig behovsavklaring", en: "Weak or ad hoc needs clarification" },
      { no: "Lite strukturert trening på innvendinger", en: "Little structured training on objections" },
      { no: "Varierende evne til å styre samtalen mot neste steg", en: "Varying ability to steer the conversation towards next steps" },
      { no: "For lite læring på tvers av teamet", en: "Too little learning across the team" },
    ],
  },
  gjennomforing: {
    tittel: { no: "Mulig anvendelsesformat", en: "Possible application format" },
    steg: [
      {
        tittel: { no: "Avklaring", en: "Clarification" },
        beskrivelse: {
          no: "Kort kartlegging av salgsprosess, typiske kundemøter, målgrupper og ønsket læring.",
          en: "Brief mapping of sales process, typical customer meetings, target groups and desired learning.",
        },
      },
      {
        tittel: { no: "Scenarioer", en: "Scenarios" },
        beskrivelse: {
          no: "Utvikling av 2–3 realistiske salgsscenarioer tilpasset virksomheten.",
          en: "Development of 2–3 realistic sales scenarios tailored to the organisation.",
        },
      },
      {
        tittel: { no: "Trening", en: "Training" },
        beskrivelse: {
          no: "Selgere trener individuelt gjennom AI-basert rollespill og får strukturert tilbakemelding.",
          en: "Salespeople train individually through AI-based role play and receive structured feedback.",
        },
      },
      {
        tittel: { no: "Innsikt", en: "Insight" },
        beskrivelse: {
          no: "Mønstre, styrker og utviklingsområder oppsummeres for leder eller team.",
          en: "Patterns, strengths and development areas are summarised for the leader or team.",
        },
      },
      {
        tittel: { no: "Neste steg", en: "Next steps" },
        beskrivelse: {
          no: "Anbefalt videre treningsopplegg og mulige forbedringer i møteforberedelse, salgsfase og oppfølging.",
          en: "Recommended further training setup and possible improvements in meeting preparation, sales stage and follow-up.",
        },
      },
    ],
  },
  utvikler: {
    tittel: { no: "Hva piloten kan måle og utvikle", en: "What the pilot can measure and develop" },
    punkter: [
      { no: "Forberedelse og struktur", en: "Preparation and structure" },
      { no: "Behovsavklaring", en: "Needs clarification" },
      { no: "Verdiargumentasjon", en: "Value argumentation" },
      { no: "Håndtering av innvendinger", en: "Handling objections" },
      { no: "Tilpasning til kundetype og kommunikasjon", en: "Adaptation to customer type and communication" },
      { no: "Kontroll på samtalen og neste steg", en: "Control of the conversation and next steps" },
      { no: "Læring og refleksjon etter møte", en: "Learning and reflection after meetings" },
    ],
  },
  format: {
    tittel: { no: "Mulig pilotformat", en: "Possible pilot format" },
    tekst: {
      no: "Et typisk pilotformat kan være et avgrenset testløp med 5–10 selgere over 2 uker. Omfang og innhold tilpasses virksomhetens behov, modenhet og salgsprosess.",
      en: "A typical pilot format can be a scoped test run with 5–10 salespeople over 2 weeks. Scope and content are adapted to the organisation's needs, maturity and sales process.",
    },
    punkter: [
      { no: "5–10 deltakere", en: "5–10 participants" },
      { no: "2–3 realistiske scenarioer", en: "2–3 realistic scenarios" },
      { no: "Individuell AI-basert trening", en: "Individual AI-based training" },
      { no: "Oppsummering av mønstre og læringspunkter", en: "Summary of patterns and learning points" },
      { no: "Anbefaling for videre utvikling", en: "Recommendation for further development" },
    ],
  },
  utbytte: {
    tittel: { no: "Aktuelle effektområder", en: "Relevant effect areas" },
    punkter: [
      { no: "Trening på forberedelse før kundemøter", en: "Training on preparation before customer meetings" },
      { no: "Aktuelle områder for måling og evaluering av møtekvalitet", en: "Relevant areas for measuring and evaluating meeting quality" },
      { no: "Gir grunnlag for trening på behovsavklaring", en: "Provides a basis for training in needs clarification" },
      { no: "Kan brukes til å utvikle trening på innvendinger", en: "Can be used to develop training on objections" },
      { no: "Kan støtte mer strukturert salgsledelse og coaching", en: "Can support more structured sales leadership and coaching" },
      { no: "Kan bidra til mer systematisk læring på tvers av teamet", en: "Can contribute to more systematic learning across the team" },
    ],
  },
  consulting: {
    tittel: { no: "Kobling til portefølje og metode", en: "Link to portfolio and methods" },
    tekst: {
      no: "Løsningen kobles til erfaring, arbeidsmetoder og porteføljeprosjekter innen kommersiell utvikling, salgsledelse, CRM og praktisk AI som presenteres på Consulting-siden.",
      en: "The solution connects to experience, working methods and portfolio projects in commercial development, sales leadership, CRM and practical AI presented on the Consulting page.",
    },
    primaerCta: kontaktFagligCta,
    sekundaerCta: apneTilgangsstyrtCta,
    tilgangNote: tilgangNoteStandard,
  },
  pilotAppUrl: PSC_APP_URL,
};

const flowSignalSide: PilotSide = {
  slug: "flowsignal",
  meta: {
    title: {
      no: "Team Performance & Samhandling Pilot med FlowSignal | Marius Ottesen",
      en: "Team Performance & Collaboration Pilot with FlowSignal | Marius Ottesen",
    },
    description: {
      no: "Praktisk pilotformat for team som vil styrke samhandling, dialog, energi, prioritering, lederoppfølging og kommersiell gjennomføring.",
      en: "A practical pilot format for teams that want to strengthen collaboration, dialogue, energy, prioritisation, leadership follow-up and commercial execution.",
    },
  },
  hero: {
    tittel: { no: "Team Performance & Samhandling Pilot med", en: "Team Performance & Collaboration Pilot with" },
    tittelAccent: { no: "FlowSignal", en: "FlowSignal" },
    undertittel: {
      no: "Et praktisk pilotformat for team som vil styrke samhandling, dialog, energi, prioritering og lederoppfølging.",
      en: "A practical pilot format for teams that want to strengthen collaboration, dialogue, energy, prioritisation and leadership follow-up.",
    },
    tekst: {
      no: "FlowSignal er utviklet som et tilgangsstyrt porteføljeprosjekt og lukket testflate for team, ledere og organisasjoner som ønsker bedre innsikt i hvordan mennesker jobber sammen. Målet er å styrke dialog, samhandling og gjennomføring, ikke å sette mennesker i bokser eller gjøre personprofiler til fasit.",
      en: "FlowSignal is built as an access-controlled portfolio project and closed test environment for teams, leaders and organisations that want better insight into how people work together. The goal is to strengthen dialogue, collaboration and execution — not to put people in boxes or treat personality profiles as the final answer.",
    },
    primaerCta: kontaktFagligCta,
    sekundaerCta: apneTilgangsstyrtCta,
    tilgangNote: tilgangNoteStandard,
  },
  hvem: {
    tittel: { no: "Hvem løsningen er relevant for", en: "Who the solution is relevant for" },
    tekst: {
      no: "Piloten passer for ledergrupper, kommersielle team og SMB-team som trenger bedre samspill, tydeligere ansvar, bedre dialog og mer bevissthet rundt hvordan folk jobber best sammen.",
      en: "The pilot suits leadership groups, commercial teams and SMB teams that need better collaboration, clearer accountability, better dialogue and more awareness of how people work best together.",
    },
    punkter: [
      { no: "Team som opplever friksjon i samhandling", en: "Teams experiencing friction in collaboration" },
      { no: "Ledere som ønsker bedre dialog og oppfølging", en: "Leaders who want better dialogue and follow-up" },
      { no: "Kommersielle team som trenger tydeligere rolleforståelse", en: "Commercial teams that need clearer role understanding" },
      { no: "Ledergrupper som vil styrke prioritering, energi og gjennomføring", en: "Leadership groups that want to strengthen prioritisation, energy and execution" },
      { no: "Organisasjoner som ønsker mer bevisst styrkebasert utvikling", en: "Organisations that want more conscious strength-based development" },
    ],
  },
  problem: {
    tittel: { no: "Problemet piloten adresserer", en: "The problem the pilot addresses" },
    tekst: {
      no: "Mange team har ikke mangel på kompetanse, men mister kraft i uklar kommunikasjon, ulik arbeidsstil, varierende energi, uklare forventninger og svakt samspill. Lederen ser ofte symptomene, men ikke alltid hva som faktisk skaper friksjon.",
      en: "Many teams do not lack competence, but lose momentum through unclear communication, different working styles, varying energy, unclear expectations and weak collaboration. The leader often sees the symptoms, but not always what actually creates friction.",
    },
    punkter: [
      { no: "Utydelige forventninger", en: "Unclear expectations" },
      { no: "Ulik kommunikasjonsstil", en: "Different communication styles" },
      { no: "Ubalanse i energi og prioritering", en: "Imbalance in energy and prioritisation" },
      { no: "Misforståelser mellom roller og personer", en: "Misunderstandings between roles and people" },
      { no: "For lite strukturert refleksjon i teamet", en: "Too little structured reflection in the team" },
      { no: "Svak kobling mellom innsikt og praktisk lederoppfølging", en: "Weak link between insight and practical leadership follow-up" },
    ],
  },
  gjennomforing: {
    tittel: { no: "Mulig anvendelsesformat", en: "Possible application format" },
    steg: [
      {
        tittel: { no: "Oppstart", en: "Kick-off" },
        beskrivelse: {
          no: "Avklaring av teamets mål, situasjon, utfordringer og ønsket effekt.",
          en: "Clarification of the team's goals, situation, challenges and desired effect.",
        },
      },
      {
        tittel: { no: "Kartlegging", en: "Mapping" },
        beskrivelse: {
          no: "Enkel profil-, styrke- og samhandlingskartlegging kombinert med refleksjon rundt dagsform, arbeidsstil og flyt.",
          en: "Simple profile, strength and collaboration mapping combined with reflection on daily form, working style and flow.",
        },
      },
      {
        tittel: { no: "Teamdialog", en: "Team dialogue" },
        beskrivelse: {
          no: "Workshop der teamet utforsker preferanser, styrker, friksjonspunkter og bedre samspill.",
          en: "Workshop where the team explores preferences, strengths, friction points and better collaboration.",
        },
      },
      {
        tittel: { no: "Lederinnsikt", en: "Leadership insight" },
        beskrivelse: {
          no: "Oppsummering av praktiske grep lederen kan bruke i oppfølging, dialog og prioritering.",
          en: "Summary of practical actions the leader can use in follow-up, dialogue and prioritisation.",
        },
      },
      {
        tittel: { no: "Forbedringsplan", en: "Improvement plan" },
        beskrivelse: {
          no: "Fire ukers handlingsplan med konkrete tiltak for bedre samhandling og gjennomføring.",
          en: "Four-week action plan with concrete initiatives for better collaboration and execution.",
        },
      },
    ],
  },
  utvikler: {
    tittel: { no: "Hva piloten kan utvikle", en: "What the pilot can develop" },
    punkter: [
      { no: "Bedre forståelse av arbeidsstil og preferanser", en: "Better understanding of working style and preferences" },
      { no: "Tydeligere dialog mellom leder og team", en: "Clearer dialogue between leader and team" },
      { no: "Bedre samhandling på tvers av roller", en: "Better collaboration across roles" },
      { no: "Mer bevisst bruk av styrker", en: "More conscious use of strengths" },
      { no: "Tidligere oppdagelse av friksjon og misforståelser", en: "Earlier detection of friction and misunderstandings" },
      { no: "Bedre kobling mellom energi, prioritering og prestasjon", en: "Better link between energy, prioritisation and performance" },
    ],
  },
  format: {
    tittel: { no: "Mulig pilotformat", en: "Possible pilot format" },
    tekst: {
      no: "Et typisk pilotformat kan være et avgrenset testløp med én ledergruppe eller ett kommersielt team over 2–4 uker. Omfang og innhold tilpasses teamets størrelse, modenhet og behov.",
      en: "A typical pilot format can be a scoped test run with one leadership group or one commercial team over 2–4 weeks. Scope and content are adapted to team size, maturity and needs.",
    },
    punkter: [
      { no: "4–12 deltakere", en: "4–12 participants" },
      { no: "Enkel kartlegging og refleksjon", en: "Simple mapping and reflection" },
      { no: "Samhandlingsworkshop", en: "Collaboration workshop" },
      { no: "Lederoppsummering", en: "Leadership summary" },
      { no: "Fire ukers forbedringsplan", en: "Four-week improvement plan" },
      { no: "Anbefaling for videre oppfølging", en: "Recommendation for further follow-up" },
    ],
  },
  utbytte: {
    tittel: { no: "Aktuelle effektområder", en: "Relevant effect areas" },
    punkter: [
      { no: "Kan bidra til bedre samhandling i team", en: "Can contribute to better collaboration in teams" },
      { no: "Gir grunnlag for å redusere misforståelser", en: "Provides a basis for reducing misunderstandings" },
      { no: "Kan støtte tydeligere ansvar og forventninger", en: "Can support clearer accountability and expectations" },
      { no: "Kan støtte mer strukturert lederdialog", en: "Can support more structured leadership dialogue" },
      { no: "Gjør det mulig å trene på bevisst bruk av styrker", en: "Makes it possible to train on conscious use of strengths" },
      { no: "Aktuelle områder for måling av samhandling og oppfølging", en: "Relevant areas for measuring collaboration and follow-up" },
    ],
  },
  avgrensning: {
    tittel: { no: "Viktig avgrensning", en: "Important boundary" },
    tekst: {
      no: "FlowSignal skal ikke brukes som en personlighetstest eller fasit på mennesker. Det skal brukes som et praktisk dialog- og refleksjonsverktøy for å styrke samhandling, lederoppfølging og prestasjon.",
      en: "FlowSignal must not be used as a personality test or definitive answer about people. It should be used as a practical dialogue and reflection tool to strengthen collaboration, leadership follow-up and performance.",
    },
  },
  consulting: {
    tittel: { no: "Kobling til portefølje og metode", en: "Link to portfolio and methods" },
    tekst: {
      no: "Løsningen kobles til erfaring, arbeidsmetoder og porteføljeprosjekter innen teamutvikling, lederoppfølging og kommersiell gjennomføring som presenteres på Consulting-siden.",
      en: "The solution connects to experience, working methods and portfolio projects in team development, leadership follow-up and commercial execution presented on the Consulting page.",
    },
    primaerCta: kontaktFagligCta,
    sekundaerCta: apneTilgangsstyrtCta,
    tilgangNote: tilgangNoteStandard,
  },
  pilotAppUrl: FLOW_SIGNAL_APP_URL,
};

const salgsflytSjekkenSide: PilotSide = {
  slug: "salgsflyt-sjekken",
  meta: {
    title: {
      no: "Diagnose- og kvalifiseringspilot med SMB Salgsflyt-sjekken | Marius Ottesen",
      en: "Diagnosis and qualification pilot with SMB Sales Flow Check | Marius Ottesen",
    },
    description: {
      no: "Interaktiv diagnose og AI-rapportering for kommersiell modenhet, strukturert prioritering og raskere oppfølging i salgs- og CRM-arbeidsflyt.",
      en: "Interactive diagnosis and AI reporting for commercial maturity, structured prioritisation and faster follow-up in sales and CRM workflows.",
    },
  },
  hero: {
    tittel: { no: "Diagnose- og kvalifiseringspilot med", en: "Diagnosis and qualification pilot with" },
    tittelAccent: { no: "SMB Salgsflyt-sjekken", en: "SMB Sales Flow Check" },
    undertittel: {
      no: "Interaktiv spørreundersøkelse og AI-rapportering for ledere og rådgivere som vil avdekke salgsfriksjon, kvalifisere potensielle kunder og forberede oppfølging.",
      en: "An interactive survey and AI reporting for leaders and advisors who want to uncover sales friction, qualify potential clients and prepare follow-up.",
    },
    tekst: {
      no: "SMB Salgsflyt-sjekken er utviklet som et tilgangsstyrt diagnose- og analyseverktøy for kommersielle miljøer. Målet er å gi respondenten umiddelbar verdi gjennom en skreddersydd PDF-rapport sendt med en gang diagnosen er fullført, samtidig som løsningen genererer AI-støttet innsikt for scoring, prioritering og strukturert oppfølging — uten lange kartleggingsmøter.",
      en: "SMB Sales Flow Check is built as an access-controlled diagnostic and analysis tool for commercial environments. The goal is to give the respondent immediate value through a tailored PDF report sent as soon as the diagnosis is complete, while the solution generates AI-supported insight for scoring, prioritisation and structured follow-up — without long discovery meetings.",
    },
    primaerCta: kontaktFagligCta,
    sekundaerCta: apneLukketTestflateCta,
    tilgangNote: tilgangNoteStandard,
  },
  hvem: {
    tittel: { no: "Hvem løsningen er relevant for", en: "Who the solution is relevant for" },
    tekst: {
      no: "Piloten passer for SMB-ledere, daglige ledere, rådgivere og kommersielle team som mistenker friksjon i salgsflyt, CRM-bruk, oppfølging eller tilbudsprosesser — og som vil starte med en strukturert diagnose før dypere rådgivning.",
      en: "The pilot suits SMB leaders, managing directors, advisors and commercial teams who suspect friction in sales flow, CRM use, follow-up or proposal processes — and who want to start with a structured diagnosis before deeper advisory work.",
    },
    punkter: [
      { no: "Ledere som vil avdekke usynlig salgsfriksjon", en: "Leaders who want to uncover invisible sales friction" },
      { no: "Rådgivere som trenger raskere kvalifisering av potensielle kunder", en: "Advisors who need faster qualification of potential clients" },
      { no: "Virksomheter med CRM, men lav utnyttelse og svak oppfølging", en: "Businesses with CRM but low utilisation and weak follow-up" },
      { no: "Team som vil prioritere riktige kommersielle tiltak", en: "Teams that want to prioritise the right commercial initiatives" },
      { no: "Organisasjoner som vurderer Verdilekkasje- eller CRM-forbedring", en: "Organisations considering value leak or CRM improvement work" },
    ],
  },
  problem: {
    tittel: { no: "Problemet piloten adresserer", en: "The problem the pilot addresses" },
    tekst: {
      no: "Mange virksomheter har fragmentert salgsflyt: ubrukte CRM-systemer, ustrukturerte tilbudsprosesser og svak leadoppfølging. Rotårsakene er ofte usynlige, og kvalifisering tar for lang tid før rådgiver eller selger vet om det er riktig match.",
      en: "Many organisations have fragmented sales flow: unused CRM systems, unstructured proposal processes and weak lead follow-up. Root causes are often invisible, and qualification takes too long before the advisor or salesperson knows if there is a good fit.",
    },
    punkter: [
      { no: "Usynlig friksjon på tvers av salgsleddet", en: "Invisible friction across the sales function" },
      { no: "Lang og ustrukturert kvalifisering", en: "Long and unstructured qualification" },
      { no: "CRM og oppfølging som ikke henger sammen", en: "CRM and follow-up that do not connect" },
      { no: "Manglende felles bilde før rådgivning eller tiltak", en: "No shared picture before advisory work or initiatives" },
      { no: "Tid brukt på feil leads og feil prioriteringer", en: "Time spent on wrong leads and wrong priorities" },
    ],
  },
  gjennomforing: {
    tittel: { no: "Mulig anvendelsesformat", en: "Possible application format" },
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
  utvikler: {
    tittel: { no: "Hva piloten kan avdekke og utvikle", en: "What the pilot can uncover and develop" },
    punkter: [
      { no: "Dimensjons- og totalscore for salgsmodenhet", en: "Dimension and total scores for sales maturity" },
      { no: "Prioriterte flaskehalser og rotårsaker", en: "Prioritised bottlenecks and root causes" },
      { no: "Lead-kvalitet og anbefalt oppfølging", en: "Lead quality and recommended follow-up" },
      { no: "Grunnlag for Verdilekkasje- eller CRM-arbeid", en: "Foundation for value leak or CRM work" },
      { no: "Raskere kvalifisering før dypere rådgivning", en: "Faster qualification before deeper advisory work" },
      { no: "Felles språk mellom leder, rådgiver og salg", en: "Shared language between leader, advisor and sales" },
    ],
  },
  format: {
    tittel: { no: "Mulig pilotformat", en: "Possible pilot format" },
    tekst: {
      no: "Et typisk anvendelsesformat kan være en avgrenset diagnose med én til fem respondenter, etterfulgt av kort debrief og anbefalt neste steg. Omfang tilpasses om verktøyet brukes til kommersiell modenhetskartlegging, faglig dialog eller forberedelse til videre prioritering.",
      en: "A typical application format can be a scoped diagnosis with one to five respondents, followed by a short debrief and recommended next step. Scope is adapted whether the tool is used for commercial maturity mapping, professional dialogue or preparation for further prioritisation.",
    },
    punkter: [
      { no: "1–5 respondenter med avtalt tilgangskode", en: "1–5 respondents with agreed access code" },
      { no: "Spørreundersøkelse på under ti minutter", en: "Survey completed in under ten minutes" },
      { no: "Kunderapport og intern salgsvurdering", en: "Customer report and internal sales assessment" },
      { no: "Kort debrief og prioritering av tiltak", en: "Short debrief and prioritisation of initiatives" },
      { no: "Anbefaling for videre prioritering og arbeidsflyt", en: "Recommendation for further prioritisation and workflow" },
    ],
  },
  utbytte: {
    tittel: { no: "Aktuelle effektområder", en: "Relevant effect areas" },
    punkter: [
      { no: "Skreddersydd PDF-rapport med konkrete tiltak", en: "Tailored PDF report with concrete actions" },
      { no: "Raskere avklaring av salgsmodenhet og friksjon", en: "Faster clarification of sales maturity and friction" },
      { no: "Bedre grunnlag for prioritering og oppfølging", en: "Better foundation for prioritisation and follow-up" },
      { no: "Lavere terskel enn tradisjonell kartlegging", en: "Lower threshold than traditional discovery" },
      { no: "Tydeligere kvalifisering før dypere engasjement", en: "Clearer qualification before deeper engagement" },
      { no: "Umiddelbar verdi for respondenten", en: "Immediate value for the respondent" },
    ],
  },
  avgrensning: {
    tittel: { no: "Viktig avgrensning", en: "Important boundary" },
    tekst: {
      no: "SMB Salgsflyt-sjekken er et diagnose- og kvalifiseringsverktøy — ikke en CRM-implementering eller ferdig salgsstrategi. Den avdekker friksjon og modenhet, men erstatter ikke oppfølgende rådgivning, prosessdesign eller systemarbeid der det trengs.",
      en: "SMB Sales Flow Check is a diagnostic and qualification tool — not a CRM implementation or finished sales strategy. It uncovers friction and maturity, but does not replace follow-up advisory work, process design or systems work where needed.",
    },
  },
  consulting: {
    tittel: { no: "Kobling til portefølje og metode", en: "Link to portfolio and methods" },
    tekst: {
      no: "Løsningen kobles til erfaring, arbeidsmetoder og porteføljeprosjekter innen kommersiell diagnose, CRM og arbeidsflyt som presenteres på Consulting-siden.",
      en: "The solution connects to experience, working methods and portfolio projects in commercial diagnosis, CRM and workflow presented on the Consulting page.",
    },
    primaerCta: kontaktFagligCta,
    sekundaerCta: apneLukketTestflateCta,
    tilgangNote: tilgangNoteStandard,
  },
  pilotAppUrl: SMB_SALGSFLYT_APP_URL,
};

const pilotSider: Record<PilotSide["slug"], PilotSide> = {
  psc: pscSide,
  flowsignal: flowSignalSide,
  "salgsflyt-sjekken": salgsflytSjekkenSide,
};

export function getPilotSide(slug: PilotSide["slug"]): PilotSide {
  return pilotSider[slug];
}

export function t(l: L, lang: Lang): string {
  return l[lang];
}
