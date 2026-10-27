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
const beOmTilgangskodeCta: L = { no: "Be om tilgangskode", en: "Request access code" };

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
      no: "SMB Salgsflyt-sjekken 2.0 | Kommersiell diagnose – Marius Ottesen",
      en: "SMB Sales Flow Check 2.0 | Commercial diagnosis – Marius Ottesen",
    },
    description: {
      no: "Lederorientert diagnose for SMB: 12 suksessdimensjoner, 36 spørsmål og prioriterte tiltak. Utviklet av Marius Ottesen Consulting (MOC).",
      en: "Leadership-oriented SMB diagnosis: 12 success dimensions, 36 questions and prioritised actions. Developed by Marius Ottesen Consulting (MOC).",
    },
  },
  hero: {
    tittel: { no: "Hvor lekker virksomheten verdi i", en: "Where is the business leaking value in" },
    tittelAccent: { no: "salgsarbeidet?", en: "sales work?" },
    undertittel: {
      no: "SMB Salgsflyt-sjekken 2.0 — lederorientert diagnose av friksjon, forbedringsmuligheter og prioriterte tiltak i salgsarbeid, kundedialog og kundeoppfølging.",
      en: "SMB Sales Flow Check 2.0 — leadership-oriented diagnosis of friction, improvement opportunities and prioritised actions in sales work, customer dialogue and follow-up.",
    },
    tekst: {
      no: "Tilgangsstyrt diagnose fra Marius Ottesen Consulting (MOC), tilgjengelig på eget domene salgsflytsjekken.no. Kartleggingen bygger på 12 suksessdimensjoner, 36 atferdsbaserte spørsmål og eventuelle adaptive dypdykk — med lederrapport og konkrete første tiltak. Estimert tidsbruk ca. 10–12 minutter.",
      en: "Access-controlled diagnosis from Marius Ottesen Consulting (MOC), available on its own domain salgsflytsjekken.no. The assessment uses 12 success dimensions, 36 behaviour-based questions and optional adaptive deep dives — with a leader report and concrete first actions. Estimated time about 10–12 minutes.",
    },
    primaerCta: beOmTilgangskodeCta,
    sekundaerCta: { no: "Åpne Salgsflyt-sjekken", en: "Open Sales Flow Check" },
    tilgangNote: {
      no: "Klar for avgrenset kundebruk med tilgangskode. Ingen koder publiseres på nettsiden.",
      en: "Ready for limited customer use with an access code. No codes are published on the website.",
    },
  },
  hvem: {
    tittel: { no: "Relevans for SMB-ledere", en: "Relevance for SMB leaders" },
    tekst: {
      no: "For daglige ledere og kommersielle ledere som vil se sammenheng mellom markedsføring, salg og eksisterende kunder — og prioritere forbedring før ressurser settes inn.",
      en: "For managing directors and commercial leaders who want to see the links between marketing, sales and existing customers — and prioritise improvement before resources are committed.",
    },
    punkter: [
      { no: "Klarere prioriteringer i salgsflyt og oppfølging", en: "Clearer priorities in sales flow and follow-up" },
      { no: "Strukturert lederinnsikt på tvers av kundereisen", en: "Structured leadership insight across the customer journey" },
      { no: "Grunnlag for konkrete forbedringstiltak", en: "Foundation for concrete improvement measures" },
      { no: "Ikke en ren CRM-sjekk eller generell AI-app", en: "Not a pure CRM check or generic AI app" },
      { no: "Valgfri kostnadsfri gjennomgang (inntil 45 min) etter kartlegging", en: "Optional free review (up to 45 minutes) after the assessment" },
    ],
  },
  problem: {
    tittel: { no: "Hvorfor dette er viktig", en: "Why this matters" },
    tekst: {
      no: "Muligheter går ofte tapt i overgangene mellom digital synlighet, henvendelse, dialog, tilbud, beslutning og videre kundeutvikling — uten at ledelsen ser hvor verdien lekker ut.",
      en: "Opportunities are often lost in transitions between digital visibility, enquiry, dialogue, proposal, decision and further customer development — without leadership seeing where value leaks.",
    },
    punkter: [
      { no: "Uklare overganger mellom synlighet og henvendelse", en: "Unclear transitions between visibility and enquiry" },
      { no: "Dialog og tilbud som ikke henger sammen", en: "Dialogue and proposals that do not connect" },
      { no: "Svak oppfølging av eksisterende kunder", en: "Weak follow-up of existing customers" },
      { no: "CRM og data som ikke støtter daglig salg", en: "CRM and data that do not support daily sales" },
      { no: "Manglende felles bilde i ledergruppen", en: "No shared picture in the leadership team" },
    ],
  },
  gjennomforing: {
    tittel: { no: "Hvordan kartleggingen fungerer", en: "How the assessment works" },
    steg: [
      {
        tittel: { no: "Virksomhetskontekst", en: "Business context" },
        beskrivelse: {
          no: "Seks spørsmål om virksomhet, salgsmodell og kontekst.",
          en: "Six questions on business, sales model and context.",
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
          no: "Inntil to områder kan utløse dypdykk med tre oppfølgingsspørsmål hver.",
          en: "Up to two areas may trigger deep dives with three follow-up questions each.",
        },
      },
      {
        tittel: { no: "Lederrapport", en: "Leader report" },
        beskrivelse: {
          no: "Samlet vurdering, prioriterte friksjonsområder, mulige forklaringer og anbefalte første tiltak — med vurdering av datagrunnlag og usikkerhet.",
          en: "Overall assessment, prioritised friction areas, possible explanations and recommended first actions — with assessment of data basis and uncertainty.",
        },
      },
      {
        tittel: { no: "Frivillig gjennomgang", en: "Optional review" },
        beskrivelse: {
          no: "Kostnadsfri gjennomgang på inntil 45 minutter — ikke forutsetning for å få verdi av kartleggingen.",
          en: "Free review of up to 45 minutes — not a prerequisite for gaining value from the assessment.",
        },
      },
    ],
  },
  utvikler: {
    tittel: { no: "Hva du får", en: "What you get" },
    punkter: [
      { no: "Samlet resultat og dimensjonsvurderinger", en: "Overall result and dimension ratings" },
      { no: "Styrker og prioriterte friksjonsområder", en: "Strengths and prioritised friction areas" },
      { no: "Mulige årsaker og konkrete første tiltak", en: "Possible causes and concrete first actions" },
      { no: "Sammenheng mellom markedsføring, salg og kunder", en: "Links between marketing, sales and customers" },
      { no: "Egenvurdering — ikke uavhengig revisjon", en: "Self-assessment — not an independent audit" },
      { no: "Fortrolig rådgivergrunnlag for MOC (ikke synlig for respondenten)", en: "Confidential advisor basis for MOC (not visible to the respondent)" },
    ],
  },
  format: {
    tittel: { no: "Status og tilgang", en: "Status and access" },
    tekst: {
      no: "SMB Salgsflyt-sjekken 2.0 er tilgjengelig på eget domene (salgsflytsjekken.no) og klar for avgrenset kundebruk med tilgangskode.",
      en: "SMB Sales Flow Check 2.0 is available on its own domain (salgsflytsjekken.no) and ready for limited customer use with an access code.",
    },
    punkter: [
      { no: "Eier: Marius Ottesen Consulting (MOC)", en: "Owner: Marius Ottesen Consulting (MOC)" },
      { no: "Be om tilgangskode via kontakt", en: "Request access code via contact" },
      { no: "Åpne kartleggingen på salgsflytsjekken.no når du har kode", en: "Open the assessment at salgsflytsjekken.no when you have a code" },
      { no: "Ikke del tilgangskoder videre", en: "Do not share access codes" },
    ],
  },
  utbytte: {
    tittel: { no: "Typiske nytteområder", en: "Typical areas of value" },
    punkter: [
      { no: "Bedre oversikt over salgsflyt og kundeoppfølging", en: "Better overview of sales flow and customer follow-up" },
      { no: "Klarere prioriteringer for ledelsen", en: "Clearer priorities for leadership" },
      { no: "Strukturert innsikt før større tiltak", en: "Structured insight before major initiatives" },
      { no: "Lavere terskel enn lang tradisjonell kartlegging", en: "Lower threshold than long traditional discovery" },
      { no: "Grunnlag for forbedring — ikke ferdig salgsstrategi", en: "Foundation for improvement — not a finished sales strategy" },
    ],
  },
  avgrensning: {
    tittel: { no: "Metode og avgrensninger", en: "Method and limitations" },
    tekst: {
      no: "Kartleggingen er en egenvurdering basert på respondentens informasjon. Den er ikke objektiv revisjon, statistisk validering eller garanti for kommersiell effekt. Skill mellom dokumenterte svar, diagnostiske indikasjoner og hypoteser som bør undersøkes.",
      en: "The assessment is a self-evaluation based on the respondent's information. It is not an objective audit, statistical validation or guarantee of commercial effect. Distinguish documented answers, diagnostic indications and hypotheses that should be investigated.",
    },
  },
  consulting: {
    tittel: { no: "Kobling til portefølje og metode", en: "Link to portfolio and methods" },
    tekst: {
      no: "Løsningen kobles til erfaring og arbeidsmetoder innen kommersiell utvikling og salgsflyt på Consulting-siden og prosjektdetaljsiden /salgsflyt-sjekken.",
      en: "The solution connects to experience and methods in commercial development and sales flow on the Consulting page and project detail at /salgsflyt-sjekken.",
    },
    primaerCta: beOmTilgangskodeCta,
    sekundaerCta: { no: "Åpne Salgsflyt-sjekken", en: "Open Sales Flow Check" },
    tilgangNote: {
      no: "Løsningen er tilgangsstyrt. Kontakt MOC for tilgangskode eller faglig dialog.",
      en: "The solution is access-controlled. Contact MOC for an access code or professional dialogue.",
    },
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
