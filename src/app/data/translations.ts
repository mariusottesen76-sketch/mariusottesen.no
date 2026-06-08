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
  "profil.proof.title": { no: "Dette bør du merke deg", en: "What you should note" },
  "profil.videre.title": { no: "Veier videre", en: "Explore further" },
  "profil.videre.text": {
    no: "Mer kontekst finner du på resultater, erfaring, AI-prosjekter, consulting, CV og kontakt.",
    en: "More context is available on results, experience, AI projects, consulting, CV and contact.",
  },
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
  "profil.cta.tjenester": { no: "Se fullstendig tjenestetilbud", en: "See full service offering" },
  "profil.operativ.title": { no: "Operativ kraft og lederskap", en: "Operational excellence and leadership" },
  "profil.bransje.title": { no: "Bransjeerfaring og kommersiell tyngde", en: "Industry experience and commercial depth" },
  "profil.utdanning.title": { no: "Utdanning og AI som strategisk verktøy", en: "Education and AI as a strategic enabler" },
  "profil.kompetanse.title": { no: "Kjernekompetanse", en: "Core competencies" },
  "profil.kompetanse.title.1": { no: "Kjerne", en: "Core" },
  "profil.kompetanse.title.2": { no: "kompetanse", en: "Competencies" },
  "profil.styrker.title": { no: "Personlige superstyrker", en: "Signature strengths" },
  "profil.styrker.sub": { no: "Slik beskrives min lederkraft av andre:", en: "How peers and colleagues characterise my leadership:" },
  "profil.logoer.erfaring": { no: "Erfaring fra blant annet", en: "Selected professional experience" },
  "profil.logoer.utdanning": { no: "Utdanning", en: "Education" },
  "profil.ai.title": { no: "AI som praktisk lederverktøy", en: "AI as a practical leadership tool" },
  "profil.ai.link.consulting": { no: "Se consulting", en: "See consulting" },
  "profil.ai.link.prosjekter": { no: "Se AI-prosjekter", en: "See AI projects" },
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
    no: "Velg lesesti etter hvem du er. Hver sti peker til relevante temaer i innholdsfortegnelsen — ikke et smalt utvalg enkeltinnlegg.",
    en: "Choose a reading path based on who you are. Each path points to relevant topics in the table of contents — not a narrow pick of individual posts.",
  },
  "fag.lesestier.tema": { no: "Relevante temaer:", en: "Relevant topics:" },
  "fag.kort.seksjon.title": { no: "Alle innlegg i detalj", en: "All articles in detail" },
  "fag.kort.seksjon.intro": {
    no: "Her finner du hvert innlegg med kort beskrivelse. Klikk for å lese hele teksten her på siden, eller gå videre til LinkedIn.",
    en: "Here you will find each article with a short description. Click to read the full text on this page, or continue to LinkedIn.",
  },
  "fag.kat.ledelse": { no: "Strategisk Ledelse & Transformasjon", en: "Strategic Leadership & Transformation" },
  "fag.kat.ai": { no: "AI & Fremtidens Teknologiledelse", en: "AI & Next-Generation Technology Leadership" },
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
    no: "Her finner du AI-prosjekter med status, relevans, modenhet og neste steg — fra salgstrening og virksomhetsnære case til agentiske arbeidsflyter og beslutningsstøtte.",
    en: "Here you will find AI projects with status, relevance, maturity and next steps — from sales training and business-near cases to agentic workflows and decision support.",
  },
  "prosjekter.intro.2": {
    no: "Hvert prosjekt beskriver hva som er bygget, hvordan det fungerer og hvorfor det er relevant, inkludert muligheter for videreutvikling. For metode, business case og tjenester, se",
    en: "Each project describes what has been built, how it works and why it matters, including options for further development. For methodology, business case and services, see",
  },
  "prosjekter.intro.2.link": { no: "Consulting", en: "Consulting" },
  "prosjekter.les": { no: "Les mer", en: "Read more" },
  "prosjekter.hurtig.title": { no: "Utforsk prosjektene etter type", en: "Explore projects by type" },

  // Consulting
  "cons.title.1": { no: "Marius Ottesen", en: "Marius Ottesen" },
  "cons.title.2": { no: "Consulting", en: "Consulting" },
  "cons.intro.1": {
    no: "Marius Ottesen Consulting hjelper ledere og team med AI-strategi, arbeidsflyt, kommersiell utvikling og praktisk implementering — uten at du må bygge et fullt internt tech-team fra dag én.",
    en: "Marius Ottesen Consulting helps leaders and teams with AI strategy, workflow, commercial development and practical implementation — without needing a full in-house tech team from day one.",
  },
  "cons.intro.2": {
    no: "Bakgrunnen min er kommersiell ledelse med helhetlig P/L-ansvar, nasjonale salgsorganisasjoner og lang erfaring fra komplekse B2B-miljøer. Parallelt har jeg bygget praktisk AI-kompetanse gjennom Generative AI for Business ved BI og hands-on utviklingsarbeid — se",
    en: "My background is commercial leadership with full P&L accountability, national sales organisations and long experience from complex B2B environments. In parallel I have built practical AI competence through Generative AI for Business at BI and hands-on development work — see",
  },
  "cons.intro.2.link": { no: "AI-prosjekter", en: "AI Projects" },
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
  "cons.verdi.title": { no: "Fra AI-mulighet til praktisk verdi", en: "From AI opportunity to practical value" },
  "cons.verdi.text": {
    no: "Mange virksomheter vet at AI kan skape verdi, men mangler struktur for å gå fra idé til prioriterte tiltak. Jeg hjelper ledere og team med å forstå forretningsbehovet, kartlegge arbeidsflyt, vurdere risiko og lage en gjennomførbar plan.",
    en: "Many organisations know AI can create value, but lack structure to move from idea to prioritised initiatives. I help leaders and teams understand the business need, map workflows, assess risk and build a feasible plan.",
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
  "cons.pakker.title": { no: "Mulige startpunkter", en: "Possible starting points" },
  "cons.prosjekter.link": { no: "Se AI-prosjekter", en: "See AI projects" },
  "cons.prosjekter.intro": {
    no: "Egne AI-prosjekter viser hvordan arbeidsflyt, prototyper og kommersiell gjennomføring kan se ut i praksis.",
    en: "My AI projects show what workflow, prototypes and commercial execution can look like in practice.",
  },
  "cons.cta.kontakt": { no: "Ta kontakt for en uforpliktende prat", en: "Get in touch for a no-obligation chat" },
  "cons.initiatives.title": { no: "Utvalgte initiativer", en: "Selected initiatives" },
  "cons.initiatives.intro": {
    no: "Eksempler på virksomhetsnært utviklingsarbeid som kobler arbeidsflyt, kundeopplevelse og AI i praksis:",
    en: "Examples of business-near development work connecting workflow, customer experience and AI in practice:",
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
    no: "Er du arbeidsgiver eller rekrutterer? Se CV & åpen søknad for executive summary, rollefit og dokumenter — eller ta kontakt direkte.",
    en: "Are you an employer or recruiter? See CV & open application for an executive summary, role fit and documents — or get in touch directly.",
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
  "dok.cv.desc": { no: "Last ned eller les min fullstendige CV", en: "Download or review my comprehensive CV" },
  "dok.cv.btn": { no: "Åpne PDF", en: "Open PDF" },
  "dok.soknad": { no: "Åpen søknad", en: "Open application" },
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
