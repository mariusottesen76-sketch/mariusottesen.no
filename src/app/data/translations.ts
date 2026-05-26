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
  "profil.vp.headline": {
    no: "Brobygger mellom kommersiell strategi og konkret AI-implementering",
    en: "Bridge between commercial strategy and hands-on AI implementation",
  },
  "profil.vp.sub": {
    no: "Erfaring fra nasjonal kommersiell ledelse og anvendbar AI-kompetanse — for virksomheter som vil identifisere kjerneprosesser, styrke beslutningsgrunnlaget og realisere målbar verdi av ny teknologi.",
    en: "National commercial leadership experience and applied AI expertise — for organisations that want to identify core processes, elevate executive decision-making, and realise measurable value from new technology.",
  },
  "profil.tittel": {
    no: "Kommersiell leder | Vekst, transformasjon & AI",
    en: "Commercial leader | Growth, transformation & AI",
  },
  "profil.selskap.desc": {
    no: "Jeg leverer rådgivning og implementering innen AI-strategi, prosessoptimalisering og digital transformasjon — mellom ledelse, forretning og teknologi. I samarbeid med et nettverk av tekniske eksperter omsetter vi AI-muligheter til konkret kommersiell verdi.",
    en: "I deliver advisory and implementation across AI strategy, process optimisation, and digital transformation — connecting leadership, business, and technology. With a curated network of technical specialists, we convert AI opportunities into tangible commercial outcomes.",
  },
  "profil.chip.ai": { no: "AI-Strategi & Rådgivning", en: "AI Strategy & Advisory" },
  "profil.chip.prosess": { no: "Prosess-optimalisering", en: "Process Optimisation" },
  "profil.chip.digital": { no: "Digital Transformasjon", en: "Digital Transformation" },
  "profil.chip.workshops": { no: "Workshops & Opplæring", en: "Workshops & Capability Building" },
  "profil.cta.tjenester": { no: "Se fullstendig tjenestetilbud", en: "Explore full service offering" },
  "profil.operativ.title": { no: "Operativ kraft & lederskap", en: "Operational Excellence & Leadership" },
  "profil.bransje.title": { no: "Bransjeerfaring & kommersiell tyngde", en: "Industry Experience & Commercial Depth" },
  "profil.utdanning.title": { no: "Utdanning & AI som strategisk verktøy", en: "Education & AI as a Strategic Enabler" },
  "profil.kompetanse.title": { no: "Kjernekompetanse", en: "Core Competencies" },
  "profil.kompetanse.title.1": { no: "Kjerne", en: "Core" },
  "profil.kompetanse.title.2": { no: "kompetanse", en: "Competencies" },
  "profil.styrker.title": { no: "Personlige superstyrker", en: "Signature Strengths" },
  "profil.styrker.sub": { no: "Slik beskrives min lederkraft av andre:", en: "How peers and colleagues characterise my leadership:" },
  "profil.logoer.erfaring": { no: "Erfaring fra blant annet", en: "Selected Professional Experience" },
  "profil.logoer.utdanning": { no: "Utdanning", en: "Education" },
  "profil.ai.title": { no: "Praktisk AI & verdiskaping", en: "Practical AI & value creation" },
  "profil.ai.reise.title": { no: "Hele AI-reisen", en: "The full AI journey" },

  // Erfaring
  "erfaring.title": { no: "Karriere høydepunkter", en: "Career Highlights" },
  "erfaring.mandat": { no: "Mandat", en: "Mandate" },
  "erfaring.strategi": { no: "Strategi", en: "Approach" },
  "erfaring.resultater": { no: "Resultater", en: "Key Outcomes" },
  "erfaring.andre": { no: "Andre erfaringer", en: "Additional Experience" },
  "erfaring.cv": { no: "Se min fullstendige CV", en: "View my full CV" },

  // Resultater
  "resultater.title": { no: "Dokumenterte Resultater", en: "Proven Track Record" },
  "resultater.sub": { no: "Nøkkeltall fra karrieren", en: "Career performance metrics" },
  "resultater.salgsvekst": { no: "Salgsvekst", en: "Revenue Growth" },
  "resultater.omsetning": { no: "Bidrag til selskapets mål", en: "Contribution to company target" },
  "resultater.ranking": { no: "Global Ranking", en: "Global Ranking" },
  "resultater.intro": {
    no: "Gjennomgående dokumenterte resultater med vekst, transformasjon og lønnsomhet — levert i roller med helhetlig kommersiellt ansvar.",
    en: "A consistent record of delivering growth, transformation, and profitability — in roles carrying full commercial P&L responsibility.",
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
    no: "I krysningen mellom teknologi, kommersiell strategi og menneskelig ledelse ligger nøkkelen til moderne vekst.",
    en: "At the intersection of technology, commercial strategy, and people-centric leadership lies the key to sustainable growth.",
  },
  "fag.intro.2": {
    no: "For meg er formidling av fag en av de mest effektive metodene for egen læring; ved å strukturere og lære bort komplekse emner, tvinges man til å se nye sammenhenger.",
    en: "I regard knowledge sharing as one of the most powerful vehicles for continuous learning — structuring and articulating complex topics compels you to uncover new connections and sharper insights.",
  },
  "fag.intro.3": {
    no: "Under finner du mine egenforfattede faginnlegg som gir innsikt innen strategisk ledelse, transformasjon og AI.",
    en: "Below you will find my authored articles providing insights into strategic leadership, transformation, and AI.",
  },
  "fag.kat.ledelse": { no: "Strategisk Ledelse & Transformasjon", en: "Strategic Leadership & Transformation" },
  "fag.kat.ai": { no: "AI & Fremtidens Teknologiledelse", en: "AI & Next-Generation Technology Leadership" },
  "fag.toc.title": { no: "Innholdsfortegnelse", en: "Table of Contents" },
  "fag.toc.title.1": { no: "Innholds", en: "Table of" },
  "fag.toc.title.2": { no: "fortegnelse", en: "Contents" },
  "fag.les": { no: "Les hele innlegget", en: "Read full article" },
  "fag.nye": { no: "Nye innlegg under utarbeidelse...", en: "New articles in progress..." },
  "fag.linkedin": { no: "Les på LinkedIn", en: "Read on LinkedIn" },
  "fag.cta": { no: "Trenger din bedrift hjelp med å sette dette i system?", en: "Does your organisation need help turning these insights into action?" },
  "fag.cta.link": { no: "Gå til Consulting", en: "Explore Consulting Services" },

  // Prosjekter
  "prosjekter.title.1": { no: "AI-prosjekter &", en: "AI Projects &" },
  "prosjekter.title.2": { no: "Utvikling", en: "Development" },
  "prosjekter.intro.1": {
    no: "Her samler jeg AI-prosjekter der teknologi kobles til kommersiell verdi, beslutningsstøtte og mer operativ gjennomføring. Fra salgstrening og virksomhetsnære case til agentiske arbeidsflyter – dette er prosjekter bygget for å gjøre AI nyttig i praksis.",
    en: "A collection of hands-on projects where AI and development meet commercial impact. From prototypes to production — ideas put into practice.",
  },
  "prosjekter.intro.2": {
    no: "Fellesnevneren er ikke teknologi alene, men hvordan AI kan brukes til å strukturere kompleksitet, styrke prioriteringer og flytte arbeid fra analyse til handling. Dette er der strategi blir arbeidsflyt.",
    en: "Each project is tied to real challenges: better sales training, smarter decision support, or more effective processes. This is where strategy becomes code.",
  },
  "prosjekter.les": { no: "Les mer", en: "Read more" },

  // Consulting
  "cons.title.1": { no: "Marius Ottesen", en: "Marius Ottesen" },
  "cons.title.2": { no: "Consulting", en: "Consulting" },
  "cons.intro.1": {
    no: "Brobygger mellom kommersiell ledelse og praktisk AI. Jeg hjelper virksomheter å omsette teknologiske muligheter til målbar verdi i kjerneprosesser, uten at du må bygge et fullt internt tech-team fra dag én.",
    en: "A bridge between commercial leadership and practical AI. I help organisations translate technological opportunity into measurable value in core processes, without needing a full in-house tech team from day one.",
  },
  "cons.intro.2": {
    no: "Bakgrunnen min er kommersiell ledelse med helhetlig P/L-ansvar, nasjonale salgsorganisasjoner og lang erfaring fra komplekse B2B-miljøer. Parallelt har jeg bygget praktisk AI-kompetanse gjennom Generative AI for Business ved BI og konkret utviklingsarbeid, inkludert agentløsninger, AI-assistert beslutningsstøtte, innholds- og innsiktsmotor, nettsider og kommersielle prototyper som Predictive Sales Coach.",
    en: "My background is commercial leadership with full P&L accountability, national sales organisations, and long experience from complex B2B environments. In parallel I have built practical AI competence through Generative AI for Business at BI and hands-on development work, including agent-based solutions, AI-assisted decision support, content and insights engines, websites, and commercial prototypes such as Predictive Sales Coach.",
  },
  "cons.intro.3": {
    no: "Jeg ser at AI skaper verdi når virksomheter går fra verktøybruk til arbeidsflytdesign. Legger man AI oppå dagens prosesser, blir gevinstene som regel inkrementelle. Redesigner man arbeidsflyt, roller og beslutningspunkter, kan de bli strukturelle. Det gjelder særlig i kommersielle prosesser der marked, salg og kundeteam ofte sitter på mye av dataene som trengs.",
    en: "I see AI creating value when organisations move from tool use to workflow design. Layer AI onto existing processes and gains are usually incremental. Redesign workflows, roles, and decision points, and they can become structural. This is especially true in commercial processes where marketing, sales, and customer teams often hold much of the data required.",
  },
  "cons.intro.4": {
    no: "Typiske områder er B2B-salg og go-to-market, vekst og retention, samt service og kundebehandling. Her finnes det ofte arbeidsflyter med høy gjennomførbarhet og høy verdi. Min jobb er å koble marked, kunde, salgsprosess, organisasjon og teknologi, og vurdere realistisk hva som faktisk kan leveres.",
    en: "Typical areas include B2B sales and go-to-market, growth and retention, and service and customer care. These are often high-feasibility, high-value workflows. My role is to connect market, customer, sales process, organisation, and technology, and assess realistically what can actually deliver.",
  },
  "cons.intro.5": {
    no: "I oppdrag jobber jeg hands-on med use case-identifisering, prioritering, business case, forankring og oppfølging. Jeg tar også del i utvikling og implementering der det er naturlig, og supplerer med spesialister når prosjektet krever det. Samtidig holder jeg den kommersielle retningen, adopsjonen og kvaliteten i gjennomføringen. Det inkluderer governance, læring i organisasjonen og støtte til ledere og team når AI skal inn i drift, ikke bare i pilot.",
    en: "In engagements I work hands-on on use case identification, prioritisation, business case, anchoring, and follow-up. I also take part in development and implementation where that makes sense, and bring in specialists when the project requires it. At the same time I hold the commercial direction, adoption, and quality of execution. That includes governance, organisational learning, and support for leaders and teams when AI must move into operations, not just pilot.",
  },
  "cons.formula.title": { no: "Business case-formel for AI-verdi", en: "Business case formula for AI value" },
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
  "cons.formula.closing": {
    no: "Teknisk potensial er ikke nok. Verdien avhenger også av adopsjon, tillit og kontroll på build- og driftskostnader.",
    en: "Technical potential is not enough. Value also depends on adoption, trust, and control of build and run costs.",
  },
  "cons.tjenester": { no: "Tjenester", en: "Service Offering" },
  "cons.initiatives.title": { no: "Utvalgte initiativer", en: "Selected initiatives" },
  "cons.initiatives.intro": {
    no: "Eksempler på pågående arbeid og virksomhetsnære utviklingsinitiativer inkluderer:",
    en: "Examples of current work and business-near development initiatives include:",
  },
  "cons.initiatives.avl.title": { no: "AI Value Lab Oslo", en: "AI Value Lab Oslo" },
  "cons.initiatives.avl.text": {
    no: "Utvikling og testing av AI-drevne konsepter, prototyper og virksomhetsnære anvendelser med fokus på reell verdiskaping og implementering.",
    en: "Development and testing of AI-driven concepts, prototypes, and business-near applications with a focus on real value creation and implementation.",
  },
  "cons.initiatives.stk.title": { no: "Skøyenåsen Tannklinikk", en: "Skøyenåsen Tannklinikk" },
  "cons.initiatives.stk.text": {
    no: "Utviklingsarbeid knyttet til modernisering av pasientreisen, inkludert booking, oppfølging, kundeopplevelse, forbedring av arbeidsflyt og vurdering av relevante AI- og digitale muligheter.",
    en: "Development-oriented work related to modernization of the patient journey, including booking, follow-up, customer experience, workflow improvement, and assessment of relevant AI and digital opportunities.",
  },
  "cons.kjenner": { no: "Kjenner du deg igjen?", en: "Does this resonate?" },
  "cons.prosess": { no: "Slik jobber vi sammen", en: "Our Engagement Model" },
  "cons.dialog": { no: "Start Dialogen", en: "Start the Conversation" },
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
  "kontakt.profil": { no: "Kommersiell Lederprofil", en: "Commercial Leadership Profile" },
  "kontakt.profil.desc": {
    no: "Er du en potensiell arbeidsgiver eller rekrutterer på jakt etter en kommersiell leder som kombinerer strategisk tyngde med operativ gjennomføringsevne?",
    en: "Are you an employer or executive recruiter seeking a commercial leader who combines strategic acuity with operational execution capability?",
  },
  "kontakt.ambisjon": { no: "Ambisjon & Fokus", en: "Ambition & Focus" },
  "kontakt.ambisjon.desc": {
    no: "Jeg er alltid interessert i å høre om spennende muligheter der jeg kan bidra til vekst, endring og digital transformasjon.",
    en: "I am always open to exploring compelling opportunities where I can drive growth, lead change, and accelerate digital transformation.",
  },
  "kontakt.dialog": { no: "Dialog & Implementering", en: "Advisory & Implementation" },
  "kontakt.dialog.desc": {
    no: "Ønsker du en uforpliktende prat om kommersielle utfordringer, digital transformasjon eller hvordan AI praktisk kan implementeres i din virksomhet?",
    en: "Interested in a no-obligation discussion about commercial challenges, digital transformation, or the practical implementation of AI in your organisation?",
  },
  "kontakt.cta": { no: "Ta gjerne kontakt via en av kanalene under.", en: "Please feel free to reach out through any of the channels below." },
  "kontakt.linkedin": { no: "Besøk min LinkedIn-profil", en: "Visit my LinkedIn Profile" },

  // Dokumentasjon
  "dok.title.1": { no: "CV & Åpen", en: "CV & Open" },
  "dok.title.2": { no: "Søknad", en: "Application" },
  "dok.cv": { no: "Min CV", en: "My CV" },
  "dok.cv.desc": { no: "Last ned eller les min fullstendige CV", en: "Download or review my comprehensive CV" },
  "dok.cv.btn": { no: "Åpne PDF", en: "Open PDF" },
  "dok.soknad": { no: "Åpen Søknad", en: "Open Application" },
  "dok.soknad.desc": { no: "Les min åpne søknad for kommersielle lederroller", en: "Read my open application for senior commercial leadership roles" },
  "dok.linkedin": { no: "Besøk min LinkedIn-profil", en: "Visit my LinkedIn Profile" },

  // Footer
  "footer.linkedin": { no: "Følg meg på LinkedIn for daglig AI-innsikt", en: "Follow me on LinkedIn for daily AI insights" },
};

export function getTranslation(key: string, lang: Lang): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang];
}

export default translations;
