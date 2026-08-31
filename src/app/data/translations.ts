import { Lang } from "../LanguageContext";

type Translations = Record<string, { no: string; en: string }>;

const translations: Translations = {
  // Tabs
  "tab.profil": { no: "Profil", en: "Profile" },
  "tab.erfaring": { no: "Erfaring", en: "Experience" },
  "tab.resultater": { no: "Resultater", en: "Results" },
  "tab.referanser": { no: "Referanser", en: "References" },
  "tab.faginnlegg": { no: "Faginnlegg", en: "Articles" },
  "tab.prosjekter": { no: "AI-prosjekter", en: "AI Projects" },
  "tab.consulting": { no: "Consulting", en: "Consulting" },
  "tab.cv": { no: "CV & Åpen søknad", en: "CV & Application" },
  "tab.kontakt": { no: "Kontakt", en: "Contact" },

  // Profil
  "profil.tittel": {
    no: "Kommersiell leder | Vekst, transformasjon og praktisk AI-forståelse",
    en: "Commercial leader | Growth, transformation and practical AI understanding",
  },
  "profil.selskap.desc": {
    no: "Marius Ottesen Consulting er en faglig plattform som samler erfaring, metoder og porteføljeprosjekter innen kommersiell utvikling, AI, arbeidsflyt og lederstøtte. Siden viser relevante problemstillinger, arbeidsmetoder og områder jeg kan bidra innenfor i en relevant lederrolle, rekrutteringsdialog eller mulig fremtidig samarbeid.",
    en: "Marius Ottesen Consulting is a professional platform that brings together experience, methods and portfolio projects in commercial development, AI, workflow and leadership support. The site shows relevant problem areas, working methods and areas where I can contribute within a relevant leadership role, recruitment dialogue or possible future collaboration.",
  },
  "profil.roller.title": { no: "Aktuell for roller innen", en: "Relevant for roles in" },
  "profil.proof.title": {
    no: "Dokumentert verdi i korte trekk",
    en: "Documented value at a glance",
  },
  "profil.lederprofil.title": {
    no: "Lederprofil og kommersiell tyngde",
    en: "Leadership profile and commercial depth",
  },
  "profil.videre.title": { no: "Veier videre", en: "Paths forward" },
  "profil.videre.intro": {
    no: "Velg det sporet som er mest relevant for deg:",
    en: "Choose the path that is most relevant to you:",
  },
  "profil.videre.groupA.title": { no: "For rekrutterere og arbeidsgivere", en: "For recruiters and employers" },
  "profil.videre.groupA.intro": {
    no: "Se lederprofil, erfaring, dokumenterte resultater og referanser.",
    en: "Review my leadership profile, experience, documented results and references.",
  },
  "profil.videre.groupA.cv": { no: "CV og lederprofil", en: "CV and leadership profile" },
  "profil.videre.groupA.erfaring": { no: "Erfaring", en: "Experience" },
  "profil.videre.groupA.resultater": { no: "Dokumenterte resultater", en: "Documented results" },
  "profil.videre.groupA.referanser": { no: "Referanser", en: "References" },
  "profil.videre.groupB.title": { no: "For virksomheter og ledere", en: "For businesses and leaders" },
  "profil.videre.groupB.intro": {
    no: "Se hvilke problemstillinger jeg kan bidra til å løse, og hvilke arbeidsmetoder og prosjekter som viser hvordan.",
    en: "See the challenges I can help solve, and the working methods and projects that show how.",
  },
  "profil.videre.groupB.consulting": { no: "Consulting", en: "Consulting" },
  "profil.videre.groupB.prosjekter": { no: "AI-prosjekter og demonstratorer", en: "AI projects and demonstrators" },
  "profil.videre.groupB.kontakt": { no: "Ta kontakt", en: "Get in touch" },
  "profil.videre.groupC.title": { no: "For faglig fordypning og samarbeid", en: "For professional insight and collaboration" },
  "profil.videre.groupC.intro": {
    no: "Utforsk faglige perspektiver, prosjekter og mulige samarbeidsflater.",
    en: "Explore perspectives, projects and potential areas for collaboration.",
  },
  "profil.videre.groupC.faginnlegg": { no: "Faginnlegg", en: "Articles" },
  "profil.videre.groupC.prosjekter": { no: "AI-prosjekter og demonstratorer", en: "AI projects and demonstrators" },
  "profil.videre.groupC.kontakt": { no: "Ta kontakt", en: "Get in touch" },
  "profil.videre.resultater": { no: "Se dokumenterte resultater", en: "See documented results" },
  "profil.videre.erfaring": { no: "Se erfaring", en: "See experience" },
  "profil.videre.prosjekter": { no: "Se AI-prosjekter og demonstratorer", en: "See AI projects and demonstrators" },
  "profil.videre.consulting": { no: "Se kompetanseområder og portefølje", en: "See competence areas and portfolio" },
  "profil.videre.cv": { no: "Se CV og lederprofil", en: "See CV and leadership profile" },
  "profil.videre.kontakt": { no: "Ta kontakt", en: "Get in touch" },
  "profil.chip.ai": { no: "AI-Strategi & Rådgivning", en: "AI Strategy & Advisory" },
  "profil.chip.prosess": { no: "Prosess-optimalisering", en: "Process Optimisation" },
  "profil.chip.digital": { no: "Digital Transformasjon", en: "Digital Transformation" },
  "profil.chip.workshops": { no: "Workshops & Opplæring", en: "Workshops & Capability Building" },
  "profil.cta.tjenester": { no: "Se kompetanseområder og portefølje", en: "See competence areas and portfolio" },
  "profil.kompetanse.title": { no: "Kjernekompetanse", en: "Core competencies" },
  "profil.kompetanse.title.1": { no: "Kjerne", en: "Core" },
  "profil.kompetanse.title.2": { no: "kompetanse", en: "Competencies" },
  "profil.kompetanse.sub": {
    no: "Dette er kompetanseområdene jeg særlig bygger lederprofilen min på:",
    en: "These are the core capabilities that underpin my leadership profile:",
  },
  "profil.styrker.title": { no: "Personlige superstyrker", en: "Signature strengths" },
  "profil.styrker.sub": { no: "Slik beskrives min lederkraft av andre:", en: "How peers and colleagues characterise my leadership:" },
  "profil.logoer.erfaring": { no: "Erfaring og faglige plattformer", en: "Experience and professional platforms" },
  "profil.logoer.utdanning": { no: "Utdanning", en: "Education" },
  "profil.utdanning.title": { no: "Utdanning", en: "Education" },
  "profil.ai.title": { no: "AI som praktisk lederverktøy", en: "AI as a practical leadership tool" },
  "profil.ai.link.consulting": { no: "Se kompetanseområder og portefølje", en: "See competence areas and portfolio" },
  "profil.ai.link.prosjekter": { no: "Se AI-prosjekter og demonstratorer", en: "See AI projects and demonstrators" },
  "profil.ai.link.faginnlegg": { no: "Les faginnlegg", en: "Read articles" },

  // Erfaring
  "erfaring.title": { no: "Karriere høydepunkter", en: "Career Highlights" },
  "erfaring.mandat": { no: "Mandat", en: "Mandate" },
  "erfaring.strategi": { no: "Strategi", en: "Approach" },
  "erfaring.resultater": { no: "Resultater", en: "Key Outcomes" },
  "erfaring.andre": { no: "Andre erfaringer", en: "Additional Experience" },
  "erfaring.cv": { no: "Se min fullstendige CV", en: "View my full CV" },

  // Resultater
  "resultater.title": { no: "Dokumenterte resultater", en: "Documented results" },
  "resultater.sub": { no: "Nøkkeltall fra karrieren", en: "Career performance metrics" },
  "resultater.salgsvekst": { no: "Salgsvekst", en: "Revenue growth" },
  "resultater.omsetning": { no: "Vekstmål", en: "Growth target" },
  "resultater.ranking": { no: "Global ranking", en: "Global ranking" },
  "resultater.intro": {
    no: "Dokumenterte resultater fra vekst, snuoperasjoner, teamutvikling og kommersiell transformasjon.",
    en: "Documented results from growth, turnarounds, team development and commercial transformation.",
  },
  "resultater.intro.cv": {
    no: "For rollefit, kjernekompetanse og executive summary, se",
    en: "For role fit, core competencies and an executive summary, see",
  },

  // Referanser
  "ref.title": { no: "Referanser & Anbefalinger", en: "Endorsements & Recommendations" },
  "ref.sub": { no: "Hva andre sier om mitt lederskap", en: "What colleagues say about my leadership" },
  "ref.intro": {
    no: "Tilbakemeldinger fra kollegaer og medarbeidere som har jobbet direkte med meg — publisert på LinkedIn.",
    en: "Testimonials from colleagues and team members who have worked alongside me — published on LinkedIn.",
  },
  "ref.linkedin": { no: "Se alle anbefalinger på LinkedIn", en: "View all recommendations on LinkedIn" },
  "ref.videre.title": { no: "Veien videre", en: "Next steps" },
  "ref.videre.intro": {
    no: "For et mer komplett bilde av lederprofil, erfaring og dokumenterte resultater:",
    en: "For a broader view of my leadership profile, experience and documented results:",
  },
  "ref.videre.erfaring": { no: "Se erfaring", en: "See experience" },
  "ref.videre.resultater": { no: "Se dokumenterte resultater", en: "See documented results" },
  "ref.videre.cv": { no: "Se CV og lederprofil", en: "See CV and leadership profile" },
  "ref.videre.kontakt": { no: "Ta kontakt", en: "Get in touch" },

  // Faginnlegg
  "fag.title.1": { no: "Innsikt &", en: "Insight &" },
  "fag.title.2": { no: "Tankeledelse", en: "Thought Leadership" },
  "fag.intro.1": {
    no: "Faginnlegg om kommersiell ledelse, transformasjon og praktisk AI — strukturert som tankeledelse, ikke som salgsmateriell.",
    en: "Articles on commercial leadership, transformation and practical AI — structured as thought leadership, not sales material.",
  },
  "fag.intro.2": {
    no: "Under finner du anbefalte lesestier og innholdsfortegnelse etter tema. Alle innlegg er nærmere beskrevet lenger ned på siden — med ingress, bilde og mulighet til å lese hele teksten.",
    en: "Below you will find recommended reading paths and a table of contents by topic. Every article is described in more detail further down the page — with a teaser, image and option to read the full text.",
  },
  "fag.formidling.title": {
    no: "Faglig formidling som arbeidsmetode",
    en: "Professional communication as a working method",
  },
  "fag.formidling.body": {
    no: "Fagkompetanse, læring og formidling har alltid vært viktige deler av hvordan jeg utvikler mennesker, team og virksomheter. Jeg har tidligere arbeidet med kursutvikling, salgs- og ledertrening og utvikling av team, og bruker samme tilnærming i arbeidet med AI, transformasjon og kommersiell og operasjonell utvikling.\n\nFor meg er formidling en av de mest effektive metodene for egen læring: Når komplekse temaer må struktureres, forklares og gjøres anvendbare for andre, blir også nye sammenhenger og forbedringsmuligheter tydeligere.\n\nInnleggene er ment som refleksjoner og praktiske perspektiver for ledere og virksomheter som arbeider med vekst, endring, teknologi og gjennomføring.",
    en: "Subject expertise, learning and communication have always been important parts of how I develop people, teams and organisations. I have previously worked on course development, sales and leadership training and team development, and apply the same approach in work on AI, transformation and commercial and operational development.\n\nFor me, communication is one of the most effective methods for my own learning: when complex topics must be structured, explained and made applicable for others, new connections and improvement opportunities also become clearer.\n\nThe articles are intended as reflections and practical perspectives for leaders and organisations working with growth, change, technology and execution.",
  },
  "fag.formidling.kilde.lead": {
    no: "Underbygget av ledererfaring, videreutdanning og bygde AI-prosjekter har jeg også tatt initiativ til",
    en: "Supported by leadership experience, further education and built AI projects, I have also initiated",
  },
  "fag.formidling.kilde.valueLab": { no: "AI Value Lab Oslo", en: "AI Value Lab Oslo" },
  "fag.formidling.kilde.mid1": {
    no: "— et tverrfaglig initiativ for praktisk AI-verdi, læring og virksomhetsnære problemstillinger.",
    en: "— a cross-disciplinary initiative for practical AI value, learning and business-oriented problem areas.",
  },
  "fag.formidling.link.prosjekter": {
    no: "Se AI-prosjekter og portefølje",
    en: "See AI projects and portfolio",
  },
  "fag.formidling.link.erfaring": {
    no: "Se erfaring og lederprofil",
    en: "See experience and leadership profile",
  },
  "fag.formidling.link.resultater": {
    no: "Se dokumenterte resultater",
    en: "See documented results",
  },
  "fag.intro.scroll": {
    no: "Hopp til alle innlegg i detalj",
    en: "Jump to all articles in detail",
  },
  "fag.lesestier.title": { no: "Anbefalte lesestier", en: "Recommended reading paths" },
  "fag.lesestier.intro": {
    no: "Start her hvis du vil lese innleggene ut fra rolle, behov eller interessefelt.",
    en: "Start here if you want to read the articles based on role, need or area of interest.",
  },
  "fag.kort.seksjon.title": { no: "Alle innlegg i detalj", en: "All articles in detail" },
  "fag.kort.seksjon.intro.lead": {
    no: "Her finner du hvert innlegg med kort beskrivelse. Les hele teksten direkte på siden, eller ",
    en: "Here you will find each article with a short description. Read the full text directly on this page, or ",
  },
  "fag.kort.seksjon.intro.linkedin": {
    no: "se mine nyeste innlegg og diskusjoner på LinkedIn.",
    en: "see my latest posts and discussions on LinkedIn.",
  },
  "fag.kat.ledelse": { no: "Strategisk ledelse & transformasjon", en: "Strategic leadership & transformation" },
  "fag.kat.ai": { no: "AI & fremtidens teknologiledelse", en: "AI & next-generation technology leadership" },
  "fag.toc.title": { no: "Innholdsfortegnelse", en: "Table of Contents" },
  "fag.toc.title.1": { no: "Innholds", en: "Table of" },
  "fag.toc.title.2": { no: "fortegnelse", en: "Contents" },
  "fag.toc.sort.label": { no: "Sorter innlegg", en: "Sort posts" },
  "fag.les": { no: "Les hele innlegget →", en: "Read full article →" },
  "fag.lukk": { no: "Lukk innlegget ↑", en: "Close article ↑" },
  "fag.artikkel.tilbake": { no: "Tilbake til Faginnlegg", en: "Back to Articles" },
  "fag.artikkel.relevant": { no: "Relevant videre", en: "Relevant next steps" },
  "fag.nye": { no: "Nye innlegg under utarbeidelse...", en: "New articles in progress..." },
  "fag.linkedin.discussion": {
    no: "Følg diskusjonen og se flere perspektiver på LinkedIn →",
    en: "Follow the discussion and explore more perspectives on LinkedIn →",
  },
  "fag.linkedin.feed": {
    no: "Se mine nyeste innlegg og diskusjoner på LinkedIn →",
    en: "See my latest posts and discussions on LinkedIn →",
  },
  "fag.cta": {
    no: "Vil du diskutere et relatert tema, er du velkommen til å ta kontakt.",
    en: "If you would like to discuss a related topic, feel free to get in touch.",
  },
  "fag.cta.link": { no: "Gå til kontakt", en: "Go to contact" },

  // Prosjekter
  "prosjekter.title.1": { no: "AI-prosjekter &", en: "AI Projects &" },
  "prosjekter.title.2": { no: "Utvikling", en: "Development" },
  "prosjekter.intro.1": {
    no: "Her finner du AI-prosjekter, apper, nettsider, casearbeid og arbeidsflyter i skjæringspunktet mellom AI, digital transformasjon og konkrete kommersielle, operative og arrangementsrelaterte behov.",
    en: "Here you will find AI projects, apps, websites, case work and workflows at the intersection of AI, digital transformation and concrete commercial, operational and event-related needs.",
  },
  "prosjekter.intro.scroll": {
    no: "Bla ned for å utforske prosjektene.",
    en: "Scroll down to explore the projects.",
  },
  "prosjekter.intro.1b": {
    no: "Prosjektene viser hva som faktisk er bygget, hvordan løsningene fungerer og hvilken praktisk relevans de kan ha innen kommersiell utvikling, salg, drift og operasjonell styring, arrangementsplanlegging, kundeopplevelse, ledelse, arbeidsflyt, beslutningsstøtte og ansvarlig AI-bruk.",
    en: "The projects show what has actually been built, how the solutions work and what practical relevance they can have in commercial development, sales, operations and operational governance, event planning, customer experience, leadership, workflow, decision support and responsible use of AI.",
  },
  "prosjekter.intro.gridLead": {
    no: "Kort oversikt — klikk på navnet for å lese mer:",
    en: "Quick overview — click a name to read more:",
  },
  "prosjekter.intro.punkt.readiness-scan.label": { no: "AI Readiness Scan", en: "AI Readiness Scan" },
  "prosjekter.intro.punkt.control-tower.label": { no: "Control Tower", en: "Control Tower" },
  "prosjekter.intro.punkt.control-tower.desc": {
    no: "Beslutnings- og gjennomføringsplattform for operativ og kommersiell prioritering",
    en: "Decision and execution platform for operational and commercial prioritisation",
  },
  "prosjekter.intro.punkt.ai-transformation.label": {
    no: "AI Transformation & Value Realization",
    en: "AI Transformation & Value Realization",
  },
  "prosjekter.intro.punkt.ai-transformation.desc": {
    no: "Executive konseptplattform for prioritering, transformasjonsstyring og målbar forretningseffekt",
    en: "Executive concept platform for prioritisation, transformation governance and measurable business impact",
  },
  "prosjekter.intro.punkt.readiness-scan.desc": {
    no: "AI-modenhet, prioriteringer og konkret grunnlag for videre AI-arbeid",
    en: "AI maturity, priorities and a concrete basis for further AI work",
  },
  "prosjekter.intro.punkt.flowsignal.label": { no: "FlowSignal", en: "FlowSignal" },
  "prosjekter.intro.punkt.flowsignal.desc": {
    no: "Profilinnsikt, dagsform og teamflyt — kan tilpasses leder- og teambehov",
    en: "Profile insight, daily form and team flow — adaptable to leadership and team needs",
  },
  "prosjekter.intro.punkt.psc.label": { no: "The Predictive Sales Coach v2.0", en: "The Predictive Sales Coach v2.0" },
  "prosjekter.intro.punkt.psc.desc": {
    no: "AI-basert salgstrening og møteforberedelse for B2B-salg, med realistiske kundesimuleringer, strukturert feedback og salgslederinnsikt.",
    en: "AI-based sales training and meeting preparation for B2B sales, with realistic customer simulations, structured feedback and sales leadership insight.",
  },
  "prosjekter.intro.punkt.salgsflyt.label": { no: "SMB Salgsflyt-sjekken", en: "SMB Sales Flow Check" },
  "prosjekter.intro.punkt.salgsflyt.desc": {
    no: "Interaktiv SMB-diagnose med AI-rapportering, strukturert innsikt og oppfølgingslogikk",
    en: "Interactive SMB diagnosis with AI reporting, structured insight and follow-up logic",
  },
  "prosjekter.intro.punkt.event-planner.label": { no: "Event Planner", en: "Event Planner" },
  "prosjekter.intro.punkt.event-planner.desc": {
    no: "AI-assistert planlegging, samarbeid og gjennomføring — med Event Readiness, samtaler, budsjett, human-in-the-loop og read-only demo",
    en: "AI-assisted planning, collaboration and execution — with Event Readiness, conversations, budget, human-in-the-loop and read-only demo",
  },
  "prosjekter.intro.punkt.psc-video.label": { no: "Promovideo PSC", en: "PSC promo video" },
  "prosjekter.intro.punkt.psc-video.desc": {
    no: "GenAI til konseptformidling og kommersiell posisjonering — kan brukes i egen profilering",
    en: "GenAI for concept communication and commercial positioning — transferable to your own branding",
  },
  "prosjekter.intro.punkt.strategisk.label": { no: "Strategisk AI-implementering", en: "Strategic AI implementation" },
  "prosjekter.intro.punkt.nettside.label": { no: "Nettside for mariusottesen.no", en: "Website for mariusottesen.no" },
  "prosjekter.intro.punkt.nettside.desc": {
    no: "Nettside for lederprofil, portefølje, faginnlegg og tilgangsstyrte AI-demonstratorer",
    en: "Website for leadership profile, portfolio, articles and access-controlled AI demonstrators",
  },
  "prosjekter.intro.punkt.row-solutions.label": { no: "Row Solutions", en: "Row Solutions" },
  "prosjekter.intro.punkt.row-solutions.desc": {
    no: "Ferdigstilt nettside for rowsolutions.no — posisjonering, tjenestestruktur og AI-assistert utvikling, ennå ikke publisert",
    en: "Completed website for rowsolutions.no — positioning, service structure and AI-assisted development, not yet published",
  },
  "prosjekter.intro.punkt.strategisk.desc": {
    no: "Fra case til gjennomførbar plan (BI) — modell for ansvarlig implementering",
    en: "From case to executable plan (BI) — a model for responsible implementation",
  },
  "prosjekter.intro.punkt.tannklinikk.label": { no: "Skøyenåsen Tannklinikk", en: "Skøyenåsen Dental Clinic" },
  "prosjekter.intro.punkt.tannklinikk.desc": {
    no: "Case og prototype for pasientreise, chatbot og booking på 6 språk — ikke produksjonssatt",
    en: "Case and prototype for patient journey, chatbot and booking in 6 languages — not production-deployed",
  },
  "prosjekter.intro.punkt.agent.label": { no: "Agentisk arbeidsflyt", en: "Agentic workflow" },
  "prosjekter.intro.punkt.agent.desc": {
    no: "Fra innsikt til kommersiell handling — kan skaleres til salg, drift og prioritering",
    en: "From insight to commercial action — scalable to sales, operations and prioritisation",
  },
  "prosjekter.intro.punkt.innhold.label": { no: "Innsikts- og innholdsmotor", en: "Insight and content engine" },
  "prosjekter.intro.punkt.innhold.desc": {
    no: "Kunnskap til tydeligere budskap og innhold — tilpassbart for ledelse og kommunikasjon",
    en: "Knowledge into clearer messaging and content — adaptable for leadership and communication",
  },
  "prosjekter.intro.punkt.beslutning.label": { no: "AI-arkitektur for beslutningsstøtte", en: "AI architecture for decision support" },
  "prosjekter.intro.punkt.beslutning.desc": {
    no: "Prioritering, gap og mønstre — relevant for strategi, drift og kommersiell styring",
    en: "Prioritisation, gaps and patterns — relevant for strategy, operations and commercial governance",
  },
  "prosjekter.intro.punkt.value-lab.label": { no: "AI Value Lab Oslo", en: "AI Value Lab Oslo" },
  "prosjekter.intro.punkt.value-lab.desc": {
    no: "Praktisk AI-læring, erfaringsutveksling og utforsking av reelle problemstillinger",
    en: "Practical AI learning, experience sharing and exploration of real problem areas",
  },
  "prosjekter.intro.punkt.faginnlegg.label": { no: "Faginnlegg", en: "Articles" },
  "prosjekter.intro.punkt.faginnlegg.desc": {
    no: "Løpende fagspor om AI, ledelse og verdiskaping — teori møter praksis",
    en: "Ongoing track on AI, leadership and value creation — where theory meets practice",
  },
  "prosjekter.intro.2": {
    no: "Siden fungerer som en portefølje for arbeidsgivere, rekrutterere og beslutningstakere som ønsker å se praktisk AI-forståelse, digital transformasjon, produktutvikling og kommersiell og operasjonell gjennomføringsevne i praksis.",
    en: "This page serves as a portfolio for employers, recruiters and decision-makers who want to see practical AI understanding, digital transformation, product development and commercial and operational execution capability in practice.",
  },
  "prosjekter.videreutdanning.title": {
    no: "Fra videreutdanning til bygde løsninger",
    en: "From further education to built solutions",
  },
  "prosjekter.videreutdanning.para1": {
    no: "I 2026 fullførte jeg masterkurset Generative AI for Business ved BI med karakter A. Parallelt har jeg bygget og publisert flere virksomhetsnære AI-prosjekter som utforsker hvordan AI kan brukes til transformasjonsstyring, AI-beredskap, operativ prioritering, salgsflyt, kundedialog, teamutvikling, arrangementsplanlegging, arbeidsflyt og kommersiell gjennomføring — inkludert executive-plattformene AI Transformation & Value Realization og Control Tower, samt apper som Event Planner.",
    en: "In 2026 I completed the master's course Generative AI for Business at BI Norwegian Business School with grade A. In parallel I have built and published several business-oriented AI projects exploring how AI can be used for transformation governance, AI readiness, operational prioritisation, sales flow, customer dialogue, team development, event planning, workflow and commercial execution — including the executive platforms AI Transformation & Value Realization and Control Tower, and apps such as Event Planner.",
  },
  "prosjekter.videreutdanning.para2": {
    no: "Arbeidet omfatter blant annet beslutnings- og gjennomføringsplattformer for operativ og kommersiell styring, AI-assistert planlegging og oppfølging av arrangementer, AI-støttet pasientreise, intake og booking for tannklinikk, AI-arkitektur for beslutningsstøtte og prioritering, samt en AI-assistert innsikts- og innholdsmotor som gjør kunnskap og markedssignaler mer anvendbare.",
    en: "The work includes, among other things, decision and execution platforms for operational and commercial governance, AI-assisted planning and follow-up for events, AI-supported patient journey, intake and booking for a dental clinic, AI architecture for decision support and prioritisation, and an AI-assisted insight and content engine that makes knowledge and market signals more actionable.",
  },
  "prosjekter.videreutdanning.para3.lead": {
    no: "Jeg har også tatt initiativ til",
    en: "I have also initiated",
  },
  "prosjekter.videreutdanning.valueLab": { no: "AI Value Lab Oslo", en: "AI Value Lab Oslo" },
  "prosjekter.videreutdanning.para3.tail": {
    no: ", med mål om å utforske praktisk AI-verdi, læring og virksomhetsnære problemstillinger sammen med andre. Prosjektene nedenfor viser konkrete løsninger, modeller og arbeidsflyter som kobler forretning, drift, brukerbehov, teknologi og gjennomføring i praksis.",
    en: ", with the aim of exploring practical AI value, learning and business-oriented problem areas together with others. The projects below show concrete solutions, models and workflows that connect business, operations, user needs, technology and execution in practice.",
  },
  "prosjekter.kort.seksjon.title": { no: "AI-prosjekter – kort forklart", en: "AI projects – briefly explained" },
  "prosjekter.kort.seksjon.intro": {
    no: "Kort oversikt over hva som er utviklet, hvordan det fungerer og hvorfor det er relevant. Prosjektene er gruppert etter type og sortert etter strategisk relevans og modenhet — lederorienterte plattformer først, deretter apper, case, modeller og faglige initiativer.",
    en: "Brief overview of what has been built, how it works and why it matters. Projects are grouped by type and ordered by strategic relevance and maturity — leadership-oriented platforms first, then apps, cases, models and professional initiatives.",
  },
  "prosjekter.les": { no: "Les mer", en: "Read more" },
  "prosjekter.hurtig.title": { no: "Utforsk prosjektene etter type", en: "Explore projects by type" },

  // Consulting
  "cons.brand": { no: "Marius Ottesen Consulting", en: "Marius Ottesen Consulting" },
  "cons.title.1": {
    no: "Kommersiell utvikling, drift, arbeidsflyt og praktisk AI",
    en: "Commercial development, operations, workflow and practical AI",
  },
  "cons.title.2": {
    no: "Relevant erfaring, arbeidsmetoder og mulige bidragsområder",
    en: "Relevant experience, working methods and possible areas of contribution",
  },
  "cons.intro.1": {
    no: "Denne siden samler erfaring, metoder og egenutviklede prosjekter innen kommersiell ledelse, salgsutvikling, CRM, arbeidsflyt, transformasjon og praktisk bruk av AI — med operasjonell erfaring fra salg, drift og gjennomføring.",
    en: "This page brings together experience, methods and custom projects in commercial leadership, sales development, CRM, workflow, transformation and practical use of AI — with operational experience from sales, operations and execution.",
  },
  "cons.intro.2": {
    no: "Innholdet viser problemstillinger jeg har erfaring med og områder jeg kan bidra innenfor i en relevant lederrolle, rekrutteringsdialog eller et mulig fremtidig samarbeid.",
    en: "The content shows problem areas I have experience with and areas where I can contribute within a relevant leadership role, recruitment dialogue or possible future collaboration.",
  },
  "cons.tjenester.title": { no: "Kompetanseområder og arbeidsmetoder", en: "Competence areas and working methods" },
  "cons.tjenester.intro": {
    no: "AI kan være en del av løsningen, men utgangspunktet er alltid forretningsproblemet: hvor taper virksomheten tid, kunder, kapasitet, kvalitet eller kommersiell og operasjonell kraft?",
    en: "AI can be part of the solution, but the starting point is always the business problem: where is the organisation losing time, customers, capacity, quality or commercial and operational momentum?",
  },
  "cons.spesialisert.title": { no: "Flere aktuelle kompetanseområder", en: "Further relevant competence areas" },
  "cons.metoder.title": { no: "Metoder og porteføljeprosjekter", en: "Methods and portfolio projects" },
  "cons.metoder.intro": {
    no: "Noen av temaene på denne siden er dokumentert gjennom egne metoder, arbeidsflyter og porteføljeprosjekter. De viser hvordan kommersiell forståelse, ledelse, brukerbehov og AI kan kombineres i praksis — også der operativ gjennomføring er viktig.",
    en: "Some of the themes on this page are documented through my own methods, workflows and portfolio projects. They show how commercial understanding, leadership, user needs and AI can be combined in practice — including where operational execution matters.",
  },
  "cons.pakke.hvem": { no: "Typiske problemstillinger", en: "Typical problem areas" },
  "cons.pakke.nummer": { no: "Fokusområde", en: "Focus area" },
  "cons.pakke.leveranse": { no: "Relevant erfaring og metodikk", en: "Relevant experience and methodology" },
  "cons.pakke.lesMer": { no: "Les mer", en: "Read more" },
  "cons.pakke.for": { no: "Når dette ofte er relevant", en: "When this is often relevant" },
  "cons.pakke.leveranseDetalj": { no: "Hva erfaringen dekker", en: "What the experience covers" },
  "cons.metodikk.title": { no: "Rammeverk for ansvarlig AI-prioritering", en: "Framework for responsible AI prioritisation" },
  "cons.metodikk.intro": {
    no: "Når AI vurderes i en kommersiell eller operativ kontekst, starter arbeidet med problemforståelse og arbeidsflyt, ikke med teknologi alene. Rammeverket under viser hvordan jeg vurderer relevans, ansvarlighet og mulig verdi.",
    en: "When AI is assessed in a commercial or operational context, the work starts with problem understanding and workflow, not technology alone. The framework below shows how I assess relevance, responsibility and potential value.",
  },
  "cons.formula.title": { no: "Business case for AI-verdi", en: "Business case for AI value" },
  "cons.formula.line": {
    no: "Annual net value = Baseline × AI delta × Adoption × Confidence − Build & run cost",
    en: "Annual net value = Baseline × AI delta × Adoption × Confidence − Build & run cost",
  },
  "cons.formula.baseline": {
    no: "Baseline er dagens kostnad eller behov i prosessen.",
    en: "Baseline is what the process costs or requires today.",
  },
  "cons.formula.delta": {
    no: "AI delta er forbedringen AI faktisk kan gi.",
    en: "AI delta is the improvement AI can actually deliver.",
  },
  "cons.formula.adoption": {
    no: "Adoption handler om i hvilken grad løsningen tas i bruk.",
    en: "Adoption is the extent to which the solution is put into use.",
  },
  "cons.formula.confidence": {
    no: "Confidence er tilliten brukerne har til kvaliteten.",
    en: "Confidence is the trust users have in the quality.",
  },
  "cons.formula.cost": {
    no: "Build & run cost er kostnaden ved å bygge, drifte og skalere.",
    en: "Build & run cost is the cost of building, operating, and scaling.",
  },
  "cons.formula.summary": {
    no: "AI-verdi skapes ikke bare av teknologien. Den avhenger av hvor stort problemet er, hvor mye AI faktisk forbedrer prosessen, hvor godt løsningen tas i bruk, hvor høy tilliten er, og hva det koster å bygge, drifte og skalere.",
    en: "AI value is not created by technology alone. It depends on how large the problem is, how much AI actually improves the process, how well the solution is adopted, how high trust is, and what it costs to build, operate and scale.",
  },
  "cons.formula.closing": {
    no: "Teknisk potensial er ikke nok. Verdien avhenger også av adopsjon, tillit og kontroll på build- og driftskostnader.",
    en: "Technical potential is not enough. Value also depends on adoption, trust, and control of build and run costs.",
  },
  "cons.aiReise.title": { no: "Hele AI-reisen", en: "The full AI journey" },
  "cons.aiReise.forklaring": {
    no: "Poenget er å forstå hvor AI kan bidra i en arbeidsflyt, hvilke forutsetninger som må være på plass og hvordan løsningen kan brukes ansvarlig og med menneskelig kontroll.",
    en: "The point is to understand where AI can contribute in a workflow, what prerequisites must be in place and how the solution can be used responsibly with human control.",
  },
  "cons.prosjekter.link": { no: "Se AI-prosjekter", en: "See AI projects" },
  "cons.dialog": { no: "Kontakt og videre dialog", en: "Contact and further dialogue" },
  "cons.dialog.intro": {
    no: "Bruk gjerne skjemaet dersom du ønsker å komme i dialog. Henvendelser vurderes ut fra relevans for aktuelle lederroller, rekrutteringsprosesser, faglige problemstillinger, paneldebatter, innlegg, sparring eller mulige fremtidige sammenhenger.",
    en: "Please use the form if you would like to start a conversation. Inquiries are assessed based on relevance for leadership opportunities, recruitment processes, professional topics, panel discussions, talks, sparring or potential future opportunities.",
  },
  "cons.send": { no: "Send melding", en: "Send message" },
  "cons.sender": { no: "Sender...", en: "Sending..." },
  "cons.sendt": { no: "Melding sendt! Sjekk din e-post for bekreftelse.", en: "Message sent! Please check your email for confirmation." },
  "cons.levert": {
    no: "Faglig plattform og portefølje – Marius Ottesen Consulting",
    en: "Professional platform and portfolio – Marius Ottesen Consulting",
  },

  // Kontakt
  "kontakt.title": { no: "Ta kontakt", en: "Get in touch" },
  "kontakt.intro": {
    no: "Denne nettsiden er først og fremst laget for arbeidsgivere, rekrutterere og beslutningstakere som ønsker å forstå min erfaring innen kommersiell ledelse, salgsutvikling, transformasjon og praktisk AI.\n\nTa gjerne kontakt dersom du vurderer meg for en aktuell lederrolle, ønsker en rekrutteringsdialog, vil diskutere en faglig problemstilling eller ønsker å utforske et mulig fremtidig samarbeid.",
    en: "This website is primarily for employers, recruiters and decision-makers who want to understand my experience in commercial leadership, sales development, transformation and practical AI.\n\nFeel free to get in touch if you are considering me for a current leadership role, want a recruitment dialogue, wish to discuss a professional topic or want to explore possible future collaboration.",
  },
  "kontakt.profil": { no: "Erfaring og profil", en: "Experience and profile" },
  "kontakt.profil.desc": {
    no: "Jeg har erfaring fra kommersiell ledelse, nasjonal salgsledelse, P/L-ansvar, teamutvikling, endring, CRM, arbeidsflyt og praktisk AI — inkludert operasjonell ledererfaring fra salg og drift. Nettsiden samler dokumenterte resultater, erfaring, AI-prosjekter og faglig porteføljearbeid.",
    en: "I have experience in commercial leadership, national sales leadership, P&L accountability, team development, change, CRM, workflow and practical AI — including operational leadership experience from sales and operations. The website brings together documented results, experience, AI projects and professional portfolio work.",
  },
  "kontakt.dialog": { no: "Komme i dialog", en: "Start a conversation" },
  "kontakt.dialog.desc": {
    no: "Bruk gjerne skjemaet dersom du ønsker å komme i dialog. Henvendelser vurderes ut fra relevans for aktuelle lederroller, rekrutteringsprosesser, faglige problemstillinger, paneldebatter, innlegg, sparring eller mulige fremtidige sammenhenger.",
    en: "Please use the form if you would like to start a conversation. Inquiries are assessed based on relevance for leadership opportunities, recruitment processes, professional topics, panel discussions, talks, sparring or potential future opportunities.",
  },
  "kontakt.cta": {
    no: "Du er også velkommen til å ta kontakt direkte på e-post eller LinkedIn.",
    en: "You are also welcome to get in touch directly by email or LinkedIn.",
  },
  "kontakt.linkedin": { no: "Besøk min LinkedIn-profil", en: "Visit my LinkedIn profile" },
  "kontakt.link.cv": { no: "Se CV og lederprofil", en: "See CV and leadership profile" },
  "kontakt.link.erfaring": { no: "Se erfaring", en: "See experience" },
  "kontakt.link.resultater": { no: "Se dokumenterte resultater", en: "See documented results" },
  "kontakt.link.prosjekter": { no: "Se AI-prosjekter og portefølje", en: "See AI projects and portfolio" },
  "kontakt.link.skjema": { no: "Åpne kontaktskjema", en: "Open contact form" },

  // Dokumentasjon
  "dok.title.1": { no: "CV & Åpen", en: "CV & Open" },
  "dok.title.2": { no: "Søknad", en: "Application" },
  "dok.cv": { no: "Min CV", en: "My CV" },
  "dok.cv.desc": { no: "Last ned eller les min fullstendige CV (oppdatert juni 2026)", en: "Download or review my comprehensive CV (updated June 2026)" },
  "dok.cv.btn": { no: "Åpne PDF", en: "Open PDF" },
  "dok.cv.viewerTitle": { no: "CV Marius Ottesen — PDF", en: "Marius Ottesen CV — PDF" },
  "dok.cv.viewerHint": {
    no: "Bla mellom CV-sidene i viseren, eller åpne PDF i egen fane for nedlasting.",
    en: "Scroll through the CV pages in the viewer, or open the PDF in a new tab to download.",
  },
  "dok.cv.openNewTab": { no: "Åpne CV i ny fane", en: "Open CV in new tab" },
  "dok.jumpToPdf": {
    no: "Gå til CV og åpen søknad",
    en: "Go to CV and open application",
  },
  "dok.pdf.placeholder": {
    no: "Dokumentet vises når du scroller hit.",
    en: "The document appears when you scroll here.",
  },
  "dok.soknad": { no: "Åpen søknad", en: "Open application" },
  "dok.soknad.desc": { no: "Les min åpne søknad for kommersielle lederroller", en: "Read my open application for senior commercial leadership roles" },
  "dok.soknad.viewerTitle": { no: "Åpen søknad Marius Ottesen — PDF", en: "Marius Ottesen open application — PDF" },
  "dok.soknad.viewerHint": {
    no: "Bla mellom sidene i viseren, eller åpne PDF i egen fane for nedlasting.",
    en: "Scroll through the pages in the viewer, or open the PDF in a new tab to download.",
  },
  "dok.soknad.openNewTab": { no: "Åpne søknad i ny fane", en: "Open application in new tab" },
  "dok.linkedin": { no: "Besøk min LinkedIn-profil", en: "Visit my LinkedIn Profile" },

  // Footer
  "footer.linkedin": {
    no: "Følg meg på LinkedIn for innlegg om ledelse, kommersiell utvikling, transformasjon og praktisk AI.",
    en: "Follow me on LinkedIn for posts on leadership, commercial development, transformation and practical AI.",
  },
};

export function getTranslation(key: string, lang: Lang): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang];
}

export default translations;
