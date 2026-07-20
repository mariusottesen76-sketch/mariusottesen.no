import type { StrategicPlatformProject } from "./types";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Kommersiell leder og AI-strateg", en: "Commercial leader and AI strategist" },
  beskrivelse: {
    no: "Utvikler virksomhetsnære løsninger og konsepter i skjæringspunktet mellom kommersiell ledelse, mennesker, arbeidsflyt, teknologi og praktisk AI.",
    en: "Develops business-oriented solutions and concepts at the intersection of commercial leadership, people, workflow, technology and practical AI.",
  },
};

export const flowSignalPlatform: StrategicPlatformProject = {
  slug: "flowsignal",
  prosjektId: "flowsignal-2026-05",
  detailPath: "/flowsignal",
  meta: {
    title: { no: "FlowSignal v1.0 | Marius Ottesen", en: "FlowSignal v1.0 | Marius Ottesen" },
    description: {
      no: "AI-støttet samhandlings- og utviklingsverktøy for profilinnsikt, dagsform, dialog og praktisk teamutvikling — tilgangsstyrt lukket pilot.",
      en: "AI-supported collaboration and development tool for profile insight, daily form, dialogue and practical team development — access-controlled closed pilot.",
    },
    ogImage: "/images/flowsignal-hero.png?v=20260719",
    canonicalPath: "/flowsignal",
  },
  teaser: {
    undertittel: {
      no: "Lukket pilot og tilgangsstyrt arbeidsflate for profilinnsikt, dagsform og samhandling",
      en: "Closed pilot and access-controlled workspace for profile insight, daily form and collaboration",
    },
    intro: {
      no: "FlowSignal v1.0 er et AI-støttet samhandlings- og utviklingsverktøy for ledere, kommersielle team og organisasjoner som vil gjøre menneskelig innsikt mer praktisk anvendbart i hverdagen.",
      en: "FlowSignal v1.0 is an AI-supported collaboration and development tool for leaders, commercial teams and organisations that want to make human insight more practically useful in everyday work.",
    },
    blokker: {
      utfordring: {
        no: "Profilrapporter blir ofte liggende statisk, mens utfordringene oppstår i møter, prioriteringer, samhandling, kapasitet, rolleforståelse og krevende dialoger.",
        en: "Profile reports often remain static, while challenges arise in meetings, prioritisation, collaboration, capacity, role understanding and demanding dialogues.",
      },
      bygget: {
        no: "En lukket pilot med profilgrunnlag, Talent Dynamics-inspirert flytrefleksjon, dagsformregistrering, Fyrtårnet, dialogstøtte, trening, refleksjon og anbefalte neste steg.",
        en: "A closed pilot with profile foundation, Talent Dynamics-inspired flow reflection, daily form registration, the Lighthouse, dialogue support, training, reflection and recommended next steps.",
      },
      relevans: {
        no: "Prosjektet viser hvordan AI kan støtte ledelse, teamutvikling, onboarding, rolleforståelse og bedre dialog.",
        en: "The project shows how AI can support leadership, team development, onboarding, role understanding and better dialogue.",
      },
      status: {
        no: "Lukket pilot og tilgangsstyrt arbeidsflate for avgrenset testbruk i avtalte løp.",
        en: "Closed pilot and access-controlled workspace for limited use in agreed engagements.",
      },
    },
    videreutvikling: {
      no: "Kan tilpasses onboarding, lederutvikling, rolleavklaring, ukesplanlegging, teamutvikling, prosjektstøtte og samhandlingsstøtte i kommersielle og tverrfaglige miljøer.",
      en: "Can be adapted for onboarding, leadership development, role clarification, weekly planning, team development, project support and collaboration support in commercial and cross-functional environments.",
    },
  },
  detail: {
    statusBadge: {
      no: "Lukket pilot og tilgangsstyrt arbeidsflate for profilinnsikt, dagsform og samhandling",
      en: "Closed pilot and access-controlled workspace for profile insight, daily form and collaboration",
    },
    hero: {
      verdiforslag: {
        no: "AI-støttet samhandling og utvikling med praktisk innsikt i mennesker, dagsform og dialog.",
        en: "AI-supported collaboration and development with practical insight into people, daily form and dialogue.",
      },
      executiveSummary: {
        no: "FlowSignal v1.0 er utviklet for ledere, kommersielle team og organisasjoner som vil gjøre profilinnsikt, dagsform og dialog mer praktisk anvendbart i hverdagen — i én tilgangsstyrt arbeidsflate.",
        en: "FlowSignal v1.0 is built for leaders, commercial teams and organisations that want to make profile insight, daily form and dialogue more practically useful in everyday work — in one access-controlled workspace.",
      },
      bildeAlt: {
        no: "FlowSignal v1.0 – profilinnsikt, dagsform og samhandling",
        en: "FlowSignal v1.0 – profile insight, daily form and collaboration",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "Profilrapporter blir ofte liggende statisk, mens reelle utfordringer oppstår i møter, prioriteringer, samhandling, kapasitet, rolleforståelse og krevende dialoger. FlowSignal er utviklet for å gjøre innsikten mer levende, praktisk og situasjonsnær.",
        en: "Profile reports often remain static, while real challenges arise in meetings, prioritisation, collaboration, capacity, role understanding and demanding dialogues. FlowSignal is built to make that insight more alive, practical and situation-specific.",
      },
    },
    logikk: {
      heading: { no: "Prosjektets modell og hovedlogikk", en: "The project's model and core logic" },
      body: {
        no: "FlowSignal kombinerer tre praktiske spor for refleksjon, dialog og samhandling:",
        en: "FlowSignal combines three practical tracks for reflection, dialogue and collaboration:",
      },
      steps: [
        { tittel: { no: "Profil og arbeidsstil", en: "Profile and work style" }, beskrivelse: { no: "Et utgangspunkt for å reflektere over styrker, energidrivere, kommunikasjonsstil og samspill med andre.", en: "A starting point for reflecting on strengths, energy drivers, communication style and interaction with others." } },
        { tittel: { no: "Dagsform og handlingsrom", en: "Daily form and room to act" }, beskrivelse: { no: "Fyrtårnet brukes som modell for energi, fokus, indre ro, arbeidspress, flyt i samspill og opplevd handlingsrom.", en: "The Lighthouse is used as a model for energy, focus, inner calm, work pressure, flow in collaboration and perceived room to act." } },
        { tittel: { no: "Dialog, trening og samhandling", en: "Dialogue, training and collaboration" }, beskrivelse: { no: "Støtte for 1:1-samtaler, teammøter, rolleavklaringer, onboarding og krevende dialoger.", en: "Support for 1:1 conversations, team meetings, role clarifications, onboarding and demanding dialogues." } },
      ],
      after: {
        no: "Målet er å gi brukeren bedre språk, tydeligere valg og mer presise neste steg — ikke å forklare mennesker teoretisk.",
        en: "The goal is to give the user better language, clearer choices and more precise next steps — not to explain people theoretically.",
      },
    },
    bygget: {
      heading: { no: "Hva som er bygget eller utviklet", en: "What has been built or developed" },
      items: [
        { no: "Talent Dynamics-inspirert flytrefleksjon", en: "Talent Dynamics-inspired flow reflection" },
        { no: "Anbefalte neste steg", en: "Recommended next steps" },
        { no: "Tilgangsstyrt lukket pilotflate", en: "Access-controlled closed pilot environment" },
      ],
    },
    moduler: {
      heading: { no: "Sentrale moduler og funksjonsområder", en: "Core modules and functional areas" },
      intro: {
        no: "Plattformen er bygget for mennesker, roller, dagsform og intern samhandling — tydelig adskilt fra PSCv2.0s fokus på kundedialog og salgstrening.",
        en: "The platform is built for people, roles, daily form and internal collaboration — clearly distinct from PSCv2.0's focus on customer dialogue and sales training.",
      },
      modules: [
        { tittel: { no: "Profil og flytrefleksjon", en: "Profile and flow reflection" }, beskrivelse: { no: "Formell Talent Dynamics-rapport kan brukes som profilgrunnlag, mens andre kan starte med en enklere flytrefleksjon.", en: "A formal Talent Dynamics report can be used as a profile foundation, while others can start with a simpler flow reflection." }, bygget: true },
        { tittel: { no: "Fyrtårnet og dagsform", en: "The Lighthouse and daily form" }, beskrivelse: { no: "Refleksjon over energi, fokus, indre ro, arbeidspress, flyt i samspill og opplevd handlingsrom.", en: "Reflection on energy, focus, inner calm, work pressure, flow in collaboration and perceived room to act." }, bygget: true },
        { tittel: { no: "Dialog og samhandling", en: "Dialogue and collaboration" }, beskrivelse: { no: "Praktisk støtte for 1:1-samtaler, teammøter, rolleavklaringer, onboarding og krevende dialoger.", en: "Practical support for 1:1 conversations, team meetings, role clarifications, onboarding and demanding dialogues." }, bygget: true },
        { tittel: { no: "Refleksjon og neste steg", en: "Reflection and next steps" }, beskrivelse: { no: "Refleksjon, trening og anbefalte neste steg som gjør innsikten handlingsbar.", en: "Reflection, training and recommended next steps that make insight actionable." }, bygget: true },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan løsningen fungerer", en: "How the solution works" },
      intro: {
        no: "Brukeren arbeider med profilgrunnlag, dagsform og situasjonsnær dialog som grunnlag for refleksjon og neste steg.",
        en: "The user works with profile foundation, daily form and situation-specific dialogue as a basis for reflection and next steps.",
      },
      detaljpunkter: [
        {
          no: "Profil og Fyrtårnet gir språk for arbeidsstil, dagsform og handlingsrom.",
          en: "Profile and the Lighthouse provide language for work style, daily form and room to act.",
        },
        {
          no: "Dialogstøtte og refleksjon kobles til anbefalte neste steg i arbeidshverdagen.",
          en: "Dialogue support and reflection connect to recommended next steps in everyday work.",
        },
      ],
    },
    relevans: {
      heading: { no: "Anvendelse og relevans", en: "Application and relevance" },
      sections: [
        { tittel: { no: "For ledere og team", en: "For leaders and teams" }, tekst: { no: "Kan bidra til bedre samhandling, mer presis kommunikasjon, onboarding, rolleforståelse og lederoppfølging.", en: "Can contribute to better collaboration, more precise communication, onboarding, role understanding and leadership follow-up." } },
        { tittel: { no: "For kommersielle og tverrfaglige miljøer", en: "For commercial and cross-functional environments" }, tekst: { no: "Kobler profil, refleksjon og dagsform til konkrete anbefalinger i arbeidshverdagen.", en: "Connects profile, reflection and daily form to concrete recommendations in everyday work." } },
        { tittel: { no: "Skille mot PSCv2.0", en: "Distinction from PSCv2.0" }, tekst: { no: "FlowSignal handler primært om mennesker, roller, dagsform og intern samhandling. PSCv2.0 handler primært om salgstrening, kundemøter og kommersiell samtalepresisjon.", en: "FlowSignal is primarily about people, roles, daily form and internal collaboration. PSCv2.0 is primarily about sales training, customer meetings and commercial conversation precision." } },
      ],
    },
    effektomrader: {
      heading: { no: "Aktuelle effektområder", en: "Relevant effect areas" },
      punkter: [
        { no: "Kan bidra til bedre samhandling i team", en: "Can contribute to better collaboration in teams" },
        { no: "Gir grunnlag for å redusere misforståelser", en: "Provides a basis for reducing misunderstandings" },
        { no: "Kan støtte tydeligere ansvar og forventninger", en: "Can support clearer accountability and expectations" },
        { no: "Kan støtte mer strukturert lederdialog", en: "Can support more structured leadership dialogue" },
        { no: "Gjør det mulig å trene på bevisst bruk av styrker", en: "Makes it possible to train on conscious use of strengths" },
        { no: "Aktuelle områder for måling av samhandling og oppfølging", en: "Relevant areas for measuring collaboration and follow-up" },
      ],
    },
    anvendelsesformat: {
      heading: { no: "Mulig anvendelsesformat", en: "Possible application format" },
      steg: [
        {
          tittel: { no: "Oppstart", en: "Kick-off" },
          beskrivelse: {
            no: "Avklaring av teamets mål, situasjon, utfordringer og ønsket læring.",
            en: "Clarification of the team's goals, situation, challenges and desired learning.",
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
            no: "Fire ukers plan med konkrete grep for bedre samhandling, dialog og prioritering.",
            en: "Four-week plan with concrete actions for better collaboration, dialogue and prioritisation.",
          },
        },
      ],
    },
    status: {
      heading: { no: "Status, modenhet og avgrensninger", en: "Status, maturity and limitations" },
      body: {
        no: "FlowSignal v1.0 er en lukket pilot og tilgangsstyrt arbeidsflate for avgrenset testbruk i avtalte løp. Løsningen er fortsatt under utvikling, med særlig fokus på bedre rapportimport, redigerbart profilgrunnlag, mer presise anbefalinger og tydeligere lederverdi.\n\nFlowSignal er ikke utviklet som et kontroll-, vurderings- eller diagnoseverktøy. Det skal heller ikke brukes som en personlighetstest eller fasit på mennesker. Talent Dynamics-inspirert flytrefleksjon er en foreløpig selvkartlegging, ikke en formell Talent Dynamics-profil.",
        en: "FlowSignal v1.0 is a closed pilot and access-controlled workspace for limited use in agreed engagements. The solution is still under development, with particular focus on better report import, editable profile foundation, more precise recommendations and clearer leadership value.\n\nFlowSignal is not built as a control, assessment or diagnostic tool. Nor should it be used as a personality test or definitive answer about people. Talent Dynamics-inspired flow reflection is a preliminary self-assessment, not a formal Talent Dynamics profile.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Videreutvikling av løsningen", en: "Further development of the solution" },
        punkter: [
          { no: "Bedre rapportimport", en: "Better report import" },
          { no: "Redigerbart profilgrunnlag", en: "Editable profile foundation" },
          { no: "Mer presise anbefalinger", en: "More precise recommendations" },
          { no: "Tydeligere lederverdi", en: "Clearer leadership value" },
        ],
      },
      tilpasning: {
        heading: { no: "Tilpasning til kontekster og organisasjoner", en: "Adaptation to contexts and organisations" },
        punkter: [
          { no: "Onboarding og lederutvikling", en: "Onboarding and leadership development" },
          { no: "Rolleavklaring og ukesplanlegging", en: "Role clarification and weekly planning" },
          { no: "Teamutvikling og prosjektstøtte", en: "Team development and project support" },
          { no: "Samhandlingsstøtte i kommersielle og tverrfaglige miljøer", en: "Collaboration support in commercial and cross-functional environments" },
        ],
      },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: { no: "Ta kontakt for faglig dialog om hvordan FlowSignal kan brukes til å styrke samhandling, lederoppfølging og praktisk bruk av menneskelig innsikt.", en: "Get in touch for professional dialogue on how FlowSignal can be used to strengthen collaboration, leadership follow-up and practical use of human insight." },
    },
    utvikler,
  },
};
