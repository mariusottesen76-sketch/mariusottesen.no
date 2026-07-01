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
  "profil.videre.title": { no: "Veier videre", en: "Explore further" },
  "profil.videre.intro": {
    no: "Se erfaring, dokumenterte resultater og relevante prosjekter. Ta gjerne kontakt dersom du vurderer meg for en aktuell lederrolle, ønsker en rekrutteringsdialog, vil diskutere en faglig problemstilling eller ønsker å utforske et mulig fremtidig samarbeid.",
    en: "See experience, documented results and relevant projects. Feel free to get in touch if you are considering me for a current leadership role, want a recruitment dialogue, wish to discuss a professional topic or want to explore possible future collaboration.",
  },
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
  "fag.intro.why": {
    no: "For meg er formidling av fag en av de mest effektive metodene for egen læring; ved å strukturere og lære bort komplekse emner, tvinges man til å se nye sammenhenger.",
    en: "I regard knowledge sharing as one of the most powerful vehicles for continuous learning — structuring and articulating complex topics compels you to uncover new connections and sharper insights.",
  },
  "fag.intro.why.bridge": {
    no: "Innleggene bygger derfor på det jeg faktisk jobber med. Det er kommersiell ledelse, transformasjon og praktisk AI der det skal omsettes til arbeidsflyt, beslutninger og gjennomføring.",
    en: "The articles therefore build on what I actually work with. That is commercial leadership, transformation and practical AI where it must translate into workflow, decisions and execution.",
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
    no: "Her finner du hvert innlegg med kort beskrivelse. Klikk for å lese hele teksten her på siden, eller ",
    en: "Here you will find each article with a short description. Click to read the full text on this page, or ",
  },
  "fag.kort.seksjon.intro.linkedin": {
    no: "gå videre til LinkedIn.",
    en: "continue to LinkedIn.",
  },
  "fag.kat.ledelse": { no: "Strategisk ledelse & transformasjon", en: "Strategic leadership & transformation" },
  "fag.kat.ai": { no: "AI & fremtidens teknologiledelse", en: "AI & next-generation technology leadership" },
  "fag.toc.title": { no: "Innholdsfortegnelse", en: "Table of Contents" },
  "fag.toc.title.1": { no: "Innholds", en: "Table of" },
  "fag.toc.title.2": { no: "fortegnelse", en: "Contents" },
  "fag.toc.sort.label": { no: "Sorter innlegg", en: "Sort posts" },
  "fag.les": { no: "Les hele innlegget", en: "Read full article" },
  "fag.nye": { no: "Nye innlegg under utarbeidelse...", en: "New articles in progress..." },
  "fag.linkedin": { no: "Les på LinkedIn", en: "Read on LinkedIn" },
  "fag.cta": { no: "Trenger din bedrift hjelp med å sette dette i system?", en: "Does your organisation need help turning these insights into action?" },
  "fag.cta.link": { no: "Gå til Consulting", en: "Explore Consulting Services" },

  // Prosjekter
  "prosjekter.title.1": { no: "AI-prosjekter &", en: "AI Projects &" },
  "prosjekter.title.2": { no: "Utvikling", en: "Development" },
  "prosjekter.intro.1": {
    no: "Her finner du AI-prosjekter, apper, casearbeid og arbeidsflyter som kobler AI til konkrete kommersielle og operative behov.",
    en: "Here you will find AI projects, apps, case work and workflows that connect AI to concrete commercial and operational needs.",
  },
  "prosjekter.intro.1b": {
    no: "Prosjektene viser hva som faktisk er bygget, hvordan løsningene fungerer og hvilken praktisk relevans de kan ha innen salg, kundeopplevelse, ledelse, arbeidsflyt, beslutningsstøtte og ansvarlig AI-bruk.",
    en: "The projects show what has actually been built, how the solutions work and what practical relevance they can have in sales, customer experience, leadership, workflow, decision support and responsible use of AI.",
  },
  "prosjekter.intro.gridLead": {
    no: "Kort oversikt — klikk på navnet for å lese mer:",
    en: "Quick overview — click a name to read more:",
  },
  "prosjekter.intro.punkt.readiness-scan.label": { no: "AI Readiness Scan", en: "AI Readiness Scan" },
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
    no: "AI-basert salgstrening og møteforberedelse — relevant for B2B og kommersielle team",
    en: "AI-based sales training and meeting preparation — relevant for B2B and commercial teams",
  },
  "prosjekter.intro.punkt.salgsflyt.label": { no: "SMB Salgsflyt-sjekken", en: "SMB Sales Flow Check" },
  "prosjekter.intro.punkt.salgsflyt.desc": {
    no: "Interaktiv SMB-diagnose med AI-rapportering, strukturert innsikt og oppfølgingslogikk",
    en: "Interactive SMB diagnosis with AI reporting, structured insight and follow-up logic",
  },
  "prosjekter.intro.punkt.psc-video.label": { no: "Promovideo PSC", en: "PSC promo video" },
  "prosjekter.intro.punkt.psc-video.desc": {
    no: "GenAI til konseptformidling og kommersiell posisjonering — kan brukes i egen profilering",
    en: "GenAI for concept communication and commercial positioning — transferable to your own branding",
  },
  "prosjekter.intro.punkt.strategisk.label": { no: "Strategisk AI-implementering", en: "Strategic AI implementation" },
  "prosjekter.intro.punkt.strategisk.desc": {
    no: "Fra case til gjennomførbar plan (BI) — modell for ansvarlig implementering",
    en: "From case to executable plan (BI) — a model for responsible implementation",
  },
  "prosjekter.intro.punkt.tannklinikk.label": { no: "Skøyenåsen Tannklinikk", en: "Skøyenåsen Dental Clinic" },
  "prosjekter.intro.punkt.tannklinikk.desc": {
    no: "Chatbot og booking på 6 språk — enklere booking, flere henvendelser og sterkere pasientreise",
    en: "Chatbot and booking in 6 languages — simpler booking, more inquiries and a stronger patient journey",
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
    no: "Prioritering, gap og mønstre — relevant for strategi og kommersiell styring",
    en: "Prioritisation, gaps and patterns — relevant for strategy and commercial governance",
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
    no: "Siden fungerer som en portefølje for arbeidsgivere, rekrutterere og beslutningstakere som ønsker å se praktisk AI-forståelse, produktutvikling og kommersiell gjennomføringsevne i praksis.",
    en: "This page serves as a portfolio for employers, recruiters and decision-makers who want to see practical AI understanding, product development and commercial execution capability in practice.",
  },
  "prosjekter.kort.seksjon.title": { no: "Alle AI-prosjekter i detalj", en: "All AI projects in detail" },
  "prosjekter.kort.seksjon.intro": {
    no: "Her finner du hvert prosjekt med kort beskrivelse. Scroll for å lese hva som er bygget, hvordan det fungerer og hvorfor det er relevant.",
    en: "Here you will find each project with a short description. Scroll to read what has been built, how it works and why it matters.",
  },
  "prosjekter.les": { no: "Les mer", en: "Read more" },
  "prosjekter.hurtig.title": { no: "Utforsk prosjektene etter type", en: "Explore projects by type" },

  // Consulting
  "cons.brand": { no: "Marius Ottesen Consulting", en: "Marius Ottesen Consulting" },
  "cons.title.1": {
    no: "Kommersiell utvikling, arbeidsflyt og praktisk AI",
    en: "Commercial development, workflow and practical AI",
  },
  "cons.title.2": {
    no: "Relevant erfaring, arbeidsmetoder og mulige bidragsområder",
    en: "Relevant experience, working methods and possible areas of contribution",
  },
  "cons.intro.1": {
    no: "Denne siden samler erfaring, metoder og egenutviklede prosjekter innen kommersiell ledelse, salgsutvikling, CRM, arbeidsflyt, transformasjon og praktisk bruk av AI.",
    en: "This page brings together experience, methods and custom projects in commercial leadership, sales development, CRM, workflow, transformation and practical use of AI.",
  },
  "cons.intro.2": {
    no: "Innholdet viser problemstillinger jeg har erfaring med og områder jeg kan bidra innenfor i en relevant lederrolle, rekrutteringsdialog eller et mulig fremtidig samarbeid.",
    en: "The content shows problem areas I have experience with and areas where I can contribute within a relevant leadership role, recruitment dialogue or possible future collaboration.",
  },
  "cons.tjenester.title": { no: "Kompetanseområder og arbeidsmetoder", en: "Competence areas and working methods" },
  "cons.tjenester.intro": {
    no: "AI kan være en del av løsningen, men utgangspunktet er alltid forretningsproblemet: hvor taper virksomheten tid, kunder, kapasitet, kvalitet eller kommersiell kraft?",
    en: "AI can be part of the solution, but the starting point is always the business problem: where is the organisation losing time, customers, capacity, quality or commercial momentum?",
  },
  "cons.spesialisert.title": { no: "Flere aktuelle kompetanseområder", en: "Further relevant competence areas" },
  "cons.metoder.title": { no: "Metoder og porteføljeprosjekter", en: "Methods and portfolio projects" },
  "cons.metoder.intro": {
    no: "Noen av temaene på denne siden er dokumentert gjennom egne metoder, arbeidsflyter og porteføljeprosjekter. De viser hvordan kommersiell forståelse, ledelse, brukerbehov og AI kan kombineres i praksis.",
    en: "Some of the themes on this page are documented through my own methods, workflows and portfolio projects. They show how commercial understanding, leadership, user needs and AI can be combined in practice.",
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
    no: "Bruk gjerne skjemaet dersom du ønsker å komme i dialog. Henvendelser vurderes ut fra relevans for aktuelle lederroller, rekrutteringsprosesser, faglige problemstillinger eller mulige fremtidige sammenhenger.",
    en: "Please use the form if you would like to start a conversation. Inquiries are assessed based on relevance for current leadership roles, recruitment processes, professional topics or possible future contexts.",
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
    no: "Jeg har erfaring fra kommersiell ledelse, nasjonal salgsledelse, P/L-ansvar, teamutvikling, endring, CRM, arbeidsflyt og praktisk AI. Nettsiden samler dokumenterte resultater, erfaring, AI-prosjekter og faglig porteføljearbeid.",
    en: "I have experience in commercial leadership, national sales leadership, P&L accountability, team development, change, CRM, workflow and practical AI. The website brings together documented results, experience, AI projects and professional portfolio work.",
  },
  "kontakt.dialog": { no: "Komme i dialog", en: "Start a conversation" },
  "kontakt.dialog.desc": {
    no: "Bruk gjerne skjemaet dersom du ønsker å komme i dialog. Henvendelser vurderes ut fra relevans for aktuelle lederroller, rekrutteringsprosesser, faglige problemstillinger eller mulige fremtidige sammenhenger.",
    en: "Please use the form if you would like to start a conversation. Inquiries are assessed based on relevance for current leadership roles, recruitment processes, professional topics or possible future contexts.",
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
