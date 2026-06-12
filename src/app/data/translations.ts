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
    no: "Jeg tilbyr rådgivning, workshops og sparring innen kommersiell utvikling, AI-strategi, arbeidsflyt og praktisk implementering.",
    en: "I offer advisory, workshops and sparring on commercial development, AI strategy, workflow and practical implementation.",
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
  "profil.videre.resultater": { no: "Se resultater", en: "See results" },
  "profil.videre.erfaring": { no: "Se erfaring", en: "See experience" },
  "profil.videre.prosjekter": { no: "Se AI-prosjekter", en: "See AI projects" },
  "profil.videre.consulting": { no: "Se consulting", en: "See consulting" },
  "profil.videre.cv": { no: "CV & åpen søknad", en: "CV & open application" },
  "profil.videre.kontakt": { no: "Ta kontakt", en: "Get in touch" },
  "profil.chip.ai": { no: "AI-Strategi & Rådgivning", en: "AI Strategy & Advisory" },
  "profil.chip.prosess": { no: "Prosess-optimalisering", en: "Process Optimisation" },
  "profil.chip.digital": { no: "Digital Transformasjon", en: "Digital Transformation" },
  "profil.chip.workshops": { no: "Workshops & Opplæring", en: "Workshops & Capability Building" },
  "profil.cta.tjenester": { no: "Se tjenestetilbud", en: "See services" },
  "profil.kompetanse.title": { no: "Kjernekompetanse", en: "Core competencies" },
  "profil.kompetanse.title.1": { no: "Kjerne", en: "Core" },
  "profil.kompetanse.title.2": { no: "kompetanse", en: "Competencies" },
  "profil.styrker.title": { no: "Personlige superstyrker", en: "Signature strengths" },
  "profil.styrker.sub": { no: "Slik beskrives min lederkraft av andre:", en: "How peers and colleagues characterise my leadership:" },
  "profil.logoer.erfaring": { no: "Erfaring fra blant annet", en: "Selected professional experience" },
  "profil.logoer.utdanning": { no: "Utdanning", en: "Education" },
  "profil.utdanning.title": { no: "Utdanning", en: "Education" },
  "profil.ai.title": { no: "AI som praktisk lederverktøy", en: "AI as a practical leadership tool" },
  "profil.ai.link.consulting": { no: "Se consulting", en: "See consulting" },
  "profil.ai.link.prosjekter": { no: "Se AI-prosjekter", en: "See AI projects" },
  "profil.ai.link.faginnlegg": { no: "Les faginnlegg", en: "Read articles" },
  "profil.ai.link.pilot": { no: "Se pilotflater for PSCv6 og FlowSignal", en: "See pilot environments for PSCv6 and FlowSignal" },

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
    no: "Her finner du AI-prosjekter med status, relevans, modenhet og neste steg. De er viktige fordi de kobler AI til konkrete kommersielle og operative behov — fra salgstrening og virksomhetsnære case til agentiske arbeidsflyter, innsikts- og innholdsmotor og beslutningsstøtte, ikke bare teknologidemonstrasjoner.",
    en: "Here you will find AI projects with status, relevance, maturity and next steps. They matter because they connect AI to concrete commercial and operational needs — from sales training and business-near cases to agentic workflows, insight and content engines and decision support, not just technology demonstrations.",
  },
  "prosjekter.intro.1b": {
    no: "Flere prosjekter tar utgangspunkt i kundeopplevelse, smart intake, veiledet booking, digital front-end og ansvarlig bruk av AI. For deg som leder eller beslutningstaker er det sentralt hva som kan videreutvikles, tilpasses bransje og behov, og testes som pilot i din virksomhet — slik at du kan vurdere hva som faktisk kan gi verdi hos dere.",
    en: "Several projects start from customer experience, smart intake, guided booking, digital front-end and responsible use of AI. As a leader or decision-maker, what matters is what can be developed further, adapted to industry and needs, and piloted in your organisation — so you can assess what could actually create value for you.",
  },
  "prosjekter.intro.gridLead": {
    no: "Kort oversikt — klikk på navnet for å lese mer:",
    en: "Quick overview — click a name to read more:",
  },
  "prosjekter.intro.punkt.flowsignal.label": { no: "FlowSignal", en: "FlowSignal" },
  "prosjekter.intro.punkt.flowsignal.desc": {
    no: "Profilinnsikt, dagsform og teamflyt — kan tilpasses leder- og teambehov",
    en: "Profile insight, daily form and team flow — adaptable to leadership and team needs",
  },
  "prosjekter.intro.punkt.psc.label": { no: "The Predictive Sales Coach", en: "The Predictive Sales Coach" },
  "prosjekter.intro.punkt.psc.desc": {
    no: "AI-basert salgstrening og møteforberedelse — relevant for B2B og kommersielle team",
    en: "AI-based sales training and meeting preparation — relevant for B2B and commercial teams",
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
    no: "Praktisk AI-verdi gjennom reelle case — samarbeid og læring i praksis",
    en: "Practical AI value through real cases — collaboration and learning in practice",
  },
  "prosjekter.intro.punkt.faginnlegg.label": { no: "Faginnlegg", en: "Articles" },
  "prosjekter.intro.punkt.faginnlegg.desc": {
    no: "Løpende fagspor om AI, ledelse og verdiskaping — teori møter praksis",
    en: "Ongoing track on AI, leadership and value creation — where theory meets practice",
  },
  "prosjekter.intro.2": {
    no: "Hvert prosjekt beskriver hva som er bygget, hvordan det fungerer og hvorfor det er relevant — inkludert muligheter for videreutvikling og tilpasning til din virksomhet. For metode, business case og tjenester, se",
    en: "Each project describes what has been built, how it works and why it matters — including options for further development and adaptation for your organisation. For methodology, business case and services, see",
  },
  "prosjekter.intro.2.link": { no: "Consulting", en: "Consulting" },
  "prosjekter.kort.seksjon.title": { no: "Alle AI-prosjekter i detalj", en: "All AI projects in detail" },
  "prosjekter.kort.seksjon.intro": {
    no: "Her finner du hvert prosjekt med kort beskrivelse. Scroll for å lese hva som er bygget, hvordan det fungerer og hvorfor det er relevant.",
    en: "Here you will find each project with a short description. Scroll to read what has been built, how it works and why it matters.",
  },
  "prosjekter.les": { no: "Les mer", en: "Read more" },
  "prosjekter.hurtig.title": { no: "Utforsk prosjektene etter type", en: "Explore projects by type" },

  // Consulting
  "cons.brand": { no: "Marius Ottesen Consulting", en: "Marius Ottesen Consulting" },
  "cons.title.1": { no: "Finn og tett verdilekkasjer", en: "Find and close value leaks" },
  "cons.title.2": {
    no: "i salg, kundedialog, CRM, arbeidsflyt og ledelse",
    en: "in sales, customer dialogue, CRM, workflow and leadership",
  },
  "cons.intro.1": {
    no: "Jeg hjelper SMB-ledere og kommersielle team med å identifisere hvor tid, penger, kunder, kvalitet eller kapasitet lekker – og omsette innsikten til tydelige tiltak, bedre arbeidsflyt og målbar kommersiell verdi.",
    en: "I help SMB leaders and commercial teams identify where time, money, customers, quality or capacity are leaking — and turn that insight into clear initiatives, better workflow and measurable commercial value.",
  },
  "cons.tjenester.title": { no: "Tjenester og startpunkter", en: "Services and starting points" },
  "cons.tjenester.intro": {
    no: "AI kan være en del av løsningen, men startpunktet er alltid forretningsproblemet: hvor taper virksomheten tid, penger, kunder, kvalitet eller kapasitet?",
    en: "AI can be part of the solution, but the starting point is always the business problem: where is the organisation losing time, money, customers, quality or capacity?",
  },
  "cons.spesialisert.title": { no: "Flere spesialiserte pakker", en: "More specialised packages" },
  "cons.metoder.title": { no: "Metoder og prosjekter som kan inngå", en: "Methods and projects that may be included" },
  "cons.metoder.intro": {
    no: "Noen oppdrag kan støttes av egne metoder, arbeidsflyter eller prototypeprosjekter, avhengig av behov.",
    en: "Some engagements can be supported by my own methods, workflows or prototype projects, depending on need.",
  },
  "cons.pakke.hvem": { no: "Hvem passer det for?", en: "Who is it for?" },
  "cons.pakke.nummer": { no: "Pakke", en: "Package" },
  "cons.pakke.leveranse": { no: "Kort leveranse", en: "Brief deliverable" },
  "cons.pakke.lesMer": { no: "Les mer", en: "Read more" },
  "cons.pakke.for": { no: "Passer for", en: "Suited for" },
  "cons.pakke.leveranseDetalj": { no: "Leveranse", en: "Deliverable" },
  "cons.metodikk.title": { no: "AI-metodikk når det er relevant", en: "AI methodology when it is relevant" },
  "cons.metodikk.intro": {
    no: "Når AI inngår i løsningen, starter jeg med forretningsproblemet — ikke verktøyet. Metodikken under sikrer prioritering, ansvarlig bruk og målbar verdi.",
    en: "When AI is part of the solution, I start with the business problem — not the tool. The methodology below ensures prioritisation, responsible use and measurable value.",
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
    no: "Poenget er ikke å starte med verktøy, men å forstå hvor AI faktisk kan skape verdi, hva som må endres i\u00A0arbeidsflyten, og hvordan løsningen kan innføres ansvarlig.",
    en: "The point is not to start with tools, but to understand where AI can actually create value, what must change in the\u00A0workflow, and how the solution can be introduced responsibly.",
  },
  "cons.prosjekter.link": { no: "Se AI-prosjekter", en: "See AI projects" },
  "cons.dialog": { no: "Start dialogen", en: "Start the conversation" },
  "cons.dialog.intro": {
    no: "Fortell meg kort om prosjektet eller utfordringen din, så tar jeg kontakt for en uforpliktende samtale. Du mottar en kopi av forespørselen på e-post.",
    en: "Share a brief overview of your project or challenge, and I will be in touch for a no-obligation discussion. You will receive a copy of your inquiry by email.",
  },
  "cons.send": { no: "Send forespørsel", en: "Submit Inquiry" },
  "cons.sender": { no: "Sender...", en: "Submitting..." },
  "cons.sendt": { no: "Forespørsel sendt! Sjekk din e-post for bekreftelse.", en: "Inquiry submitted successfully. Please check your email for confirmation." },
  "cons.levert": { no: "Levert av Marius Ottesen Consulting", en: "Delivered by Marius Ottesen Consulting" },

  // Kontakt
  "kontakt.title": { no: "Kontakt", en: "Contact" },
  "kontakt.profil": { no: "Kommersiell lederprofil", en: "Commercial leadership profile" },
  "kontakt.profil.desc": {
    no: "Er du arbeidsgiver, rekrutterer eller headhunter? Se CV & åpen søknad for executive summary, rollefit, resultater og dokumenter – eller ta kontakt direkte for en kort avklaring.",
    en: "Are you an employer, recruiter or headhunter? See CV & open application for executive summary, role fit, results and documents — or get in touch directly for a brief clarification.",
  },
  "kontakt.ambisjon": { no: "Ambisjon & fokus", en: "Ambition & focus" },
  "kontakt.ambisjon.desc": {
    no: "Jeg er interessert i spennende muligheter der jeg kan bidra til vekst, endring og kommersiell utvikling.",
    en: "I am interested in compelling opportunities where I can contribute to growth, change and commercial development.",
  },
  "kontakt.dialog": { no: "Dialog & implementering", en: "Advisory & implementation" },
  "kontakt.dialog.desc": {
    no: "For rådgivning, AI-implementering eller prosjektsamarbeid er Consulting den naturlige inngangen — med skjema, tjenestepakker og business case.",
    en: "For advisory, AI implementation or project collaboration, Consulting is the natural entry point — with form, service packages and business case.",
  },
  "kontakt.cta": { no: "Ta gjerne kontakt via en av kanalene under.", en: "Please feel free to reach out through any of the channels below." },
  "kontakt.linkedin": { no: "Besøk min LinkedIn-profil", en: "Visit my LinkedIn profile" },
  "kontakt.link.cv": { no: "CV & åpen søknad", en: "CV & open application" },
  "kontakt.link.consulting": { no: "Consulting", en: "Consulting" },
  "kontakt.link.resultater": { no: "Resultater", en: "Results" },

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
