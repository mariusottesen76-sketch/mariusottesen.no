import { Lang } from "../LanguageContext";
import { FLOW_SIGNAL_APP_URL } from "../lib/flowsignal-brand";
import { PSC_APP_URL } from "../lib/psc-brand";

type L = { no: string; en: string };

export type PilotSteg = { tittel: L; beskrivelse: L };

export type PilotSide = {
  slug: "psc" | "flowsignal";
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
      no: "Sales Meeting Performance Pilot med The Predictive Sales Coach | Marius Ottesen",
      en: "Sales Meeting Performance Pilot with The Predictive Sales Coach | Marius Ottesen",
    },
    description: {
      no: "AI-basert salgstrening og møteforberedelse for salgsorganisasjoner som vil styrke kundedialog, behovsavklaring, salgsledelse og læring.",
      en: "AI-based sales training and meeting preparation for sales organisations that want to strengthen customer dialogue, needs clarification, sales leadership and learning.",
    },
  },
  hero: {
    tittel: { no: "Sales Meeting Performance Pilot med", en: "Sales Meeting Performance Pilot with" },
    tittelAccent: { no: "The Predictive Sales Coach", en: "The Predictive Sales Coach" },
    undertittel: {
      no: "AI-basert salgstrening og møteforberedelse for salgsorganisasjoner som vil øke kvaliteten på kundedialog, behovsavklaring og læring.",
      en: "AI-based sales training and meeting preparation for sales organisations that want to raise the quality of customer dialogue, needs clarification and learning.",
    },
    tekst: {
      no: "The Predictive Sales Coach er utviklet som en praktisk pilotflate for salgsledere, selgere og kommersielle team som ønsker bedre forberedelse, tydeligere møtegjennomføring og mer systematisk læring etter kundedialoger. Målet er ikke å erstatte salgsledelse, men å styrke trening, refleksjon og kvalitet i salgsarbeidet.",
      en: "The Predictive Sales Coach is built as a practical pilot environment for sales leaders, salespeople and commercial teams who want better preparation, clearer meeting execution and more systematic learning after customer dialogues. The goal is not to replace sales leadership, but to strengthen training, reflection and quality in sales work.",
    },
    primaerCta: { no: "Be om pilot / tilgang", en: "Request pilot access" },
    sekundaerCta: { no: "Åpne PSCv6 pilotflate", en: "Open PSCv6 pilot environment" },
    tilgangNote: {
      no: "Pilotflaten er tilgangsstyrt og brukes i avtalte testløp. Ta kontakt dersom du ønsker tilgang eller vil diskutere en mulig pilot.",
      en: "The pilot environment is access-controlled and used in agreed test runs. Get in touch if you want access or to discuss a possible pilot.",
    },
  },
  hvem: {
    tittel: { no: "Hvem passer piloten for?", en: "Who is the pilot for?" },
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
    tittel: { no: "Slik kan en pilot gjennomføres", en: "How a pilot can be run" },
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
    tittel: { no: "Hva kunden får ut av det", en: "What the client gains" },
    punkter: [
      { no: "Bedre forberedte selgere", en: "Better prepared salespeople" },
      { no: "Høyere kvalitet i kundemøter", en: "Higher quality in customer meetings" },
      { no: "Mer presis behovsavklaring", en: "More precise needs clarification" },
      { no: "Bedre håndtering av innvendinger", en: "Better handling of objections" },
      { no: "Sterkere salgsledelse og coaching", en: "Stronger sales leadership and coaching" },
      { no: "Mer systematisk læring på tvers av teamet", en: "More systematic learning across the team" },
    ],
  },
  consulting: {
    tittel: { no: "Kobling til consulting", en: "Link to consulting" },
    tekst: {
      no: "Piloten kan brukes som en del av Sales Meeting Performance Sprint, Leder som salgscoach eller et bredere arbeid med CRM, salgsoppfølging og kommersiell gjennomføring.",
      en: "The pilot can be used as part of Sales Meeting Performance Sprint, Leader as sales coach, or broader work on CRM, sales follow-up and commercial execution.",
    },
    primaerCta: { no: "Ta kontakt om pilot", en: "Contact about pilot" },
    sekundaerCta: { no: "Åpne PSCv6 pilotflate", en: "Open PSCv6 pilot environment" },
    tilgangNote: {
      no: "Pilotflaten er tilgangsstyrt og brukes i avtalte testløp. Ta kontakt dersom du ønsker tilgang eller vil diskutere en mulig pilot.",
      en: "The pilot environment is access-controlled and used in agreed test runs. Get in touch if you want access or to discuss a possible pilot.",
    },
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
      no: "FlowSignal er utviklet som en praktisk pilotflate for team, ledere og organisasjoner som ønsker bedre innsikt i hvordan mennesker jobber sammen. Målet er å styrke dialog, samhandling og gjennomføring, ikke å sette mennesker i bokser eller gjøre personprofiler til fasit.",
      en: "FlowSignal is built as a practical pilot environment for teams, leaders and organisations that want better insight into how people work together. The goal is to strengthen dialogue, collaboration and execution — not to put people in boxes or treat personality profiles as the final answer.",
    },
    primaerCta: { no: "Be om samhandlingspilot", en: "Request collaboration pilot" },
    sekundaerCta: { no: "Åpne FlowSignal pilotflate", en: "Open FlowSignal pilot environment" },
    tilgangNote: {
      no: "Pilotflaten er tilgangsstyrt og brukes i avtalte testløp. Ta kontakt dersom du ønsker tilgang eller vil diskutere en mulig pilot.",
      en: "The pilot environment is access-controlled and used in agreed test runs. Get in touch if you want access or to discuss a possible pilot.",
    },
  },
  hvem: {
    tittel: { no: "Hvem passer piloten for?", en: "Who is the pilot for?" },
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
    tittel: { no: "Slik kan en pilot gjennomføres", en: "How a pilot can be run" },
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
    tittel: { no: "Hva kunden får ut av det", en: "What the client gains" },
    punkter: [
      { no: "Bedre samarbeid", en: "Better collaboration" },
      { no: "Mindre misforståelser", en: "Fewer misunderstandings" },
      { no: "Tydeligere ansvar og forventninger", en: "Clearer accountability and expectations" },
      { no: "Bedre lederdialog", en: "Better leadership dialogue" },
      { no: "Mer bevisst bruk av styrker", en: "More conscious use of strengths" },
      { no: "Større trygghet og bedre gjennomføring", en: "Greater confidence and better execution" },
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
    tittel: { no: "Kobling til consulting", en: "Link to consulting" },
    tekst: {
      no: "Piloten kan brukes som en del av Team Performance & Samhandling Sprint, SMB lederløft eller et bredere arbeid med ledelse, teamutvikling og kommersiell gjennomføring.",
      en: "The pilot can be used as part of Team Performance & Collaboration Sprint, SMB leadership lift, or broader work on leadership, team development and commercial execution.",
    },
    primaerCta: { no: "Ta kontakt om samhandlingspilot", en: "Contact about collaboration pilot" },
    sekundaerCta: { no: "Åpne FlowSignal pilotflate", en: "Open FlowSignal pilot environment" },
    tilgangNote: {
      no: "Pilotflaten er tilgangsstyrt og brukes i avtalte testløp. Ta kontakt dersom du ønsker tilgang eller vil diskutere en mulig pilot.",
      en: "The pilot environment is access-controlled and used in agreed test runs. Get in touch if you want access or to discuss a possible pilot.",
    },
  },
  pilotAppUrl: FLOW_SIGNAL_APP_URL,
};

const pilotSider: Record<PilotSide["slug"], PilotSide> = {
  psc: pscSide,
  flowsignal: flowSignalSide,
};

export function getPilotSide(slug: PilotSide["slug"]): PilotSide {
  return pilotSider[slug];
}

export function t(l: L, lang: Lang): string {
  return l[lang];
}
