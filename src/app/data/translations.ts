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
  "kontakt.profil": { no: "Kommersiell Lederprofil", en: "Commercial Leadership Profile" },
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
  "dok.cv.desc": { no: "Last ned eller les min fullstendige CV", en: "Download or review my comprehensive CV" },
  "dok.cv.btn": { no: "Åpne PDF", en: "Open PDF" },
  "dok.jumpToPdf": {
    no: "Last ned eller åpne dokumenter",
    en: "Download or open documents",
  },
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
