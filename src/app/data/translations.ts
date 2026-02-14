import { Lang } from "../LanguageContext";

type Translations = Record<string, { no: string; en: string }>;

const translations: Translations = {
  // Tabs
  "tab.profil": { no: "Profil", en: "Profile" },
  "tab.erfaring": { no: "Erfaring", en: "Experience" },
  "tab.resultater": { no: "Resultater", en: "Results" },
  "tab.referanser": { no: "Referanser", en: "References" },
  "tab.faginnlegg": { no: "Faginnlegg", en: "Articles" },
  "tab.consulting": { no: "Consulting", en: "Consulting" },
  "tab.cv": { no: "CV & Åpen søknad", en: "CV & Application" },
  "tab.kontakt": { no: "Kontakt", en: "Contact" },

  // Profil
  "profil.vp.headline": {
    no: "Brobyggeren mellom kommersiell strategi og praktisk AI-implementering.",
    en: "Bridging the gap between commercial strategy and hands-on AI implementation.",
  },
  "profil.vp.sub": {
    no: "25+ års kommersiell ledererfaring — nå kombinert med AI-kompetanse for virksomheter som vil skape konkret verdi av ny teknologi.",
    en: "25+ years of proven commercial leadership — now coupled with AI expertise to help organisations unlock measurable value from emerging technology.",
  },
  "profil.tittel": {
    no: "Kommersiell Leder & AI-Strateg",
    en: "Commercial Executive & AI Strategist",
  },
  "profil.selskap.desc": {
    no: "Gjennom mitt eget selskap leverer jeg rådgivning og implementering innen AI-strategi, prosessoptimalisering og digital transformasjon — som brobygger mellom ledelse og teknologi. I samarbeid med et nettverk av tekniske eksperter hjelper jeg virksomheter med å omsette AI-muligheter til konkret kommersiell verdi.",
    en: "Through my consultancy I deliver advisory and implementation services spanning AI strategy, process optimisation, and digital transformation — serving as the critical link between executive leadership and technology. In partnership with a curated network of technical specialists, I help organisations convert AI opportunities into tangible commercial outcomes.",
  },
  "profil.chip.ai": { no: "AI-Strategi & Rådgivning", en: "AI Strategy & Advisory" },
  "profil.chip.prosess": { no: "Prosess-optimalisering", en: "Process Optimisation" },
  "profil.chip.digital": { no: "Digital Transformasjon", en: "Digital Transformation" },
  "profil.chip.workshops": { no: "Workshops & Opplæring", en: "Workshops & Capability Building" },
  "profil.cta.tjenester": { no: "Se fullstendig tjenestetilbud", en: "Explore full service offering" },
  "profil.operativ.title": { no: "Operativ kraft & lederskap", en: "Operational Excellence & Leadership" },
  "profil.bransje.title": { no: "Bransjeerfaring & disiplin", en: "Industry Breadth & Commercial Discipline" },
  "profil.utdanning.title": { no: "Utdanning & AI som strategisk verktøy", en: "Education & AI as a Strategic Enabler" },
  "profil.kompetanse.title": { no: "Kjernekompetanse", en: "Core Competencies" },
  "profil.kompetanse.title.1": { no: "Kjerne", en: "Core" },
  "profil.kompetanse.title.2": { no: "kompetanse", en: "Competencies" },
  "profil.styrker.title": { no: "Personlige superstyrker", en: "Signature Strengths" },
  "profil.styrker.sub": { no: "Slik beskrives min lederkraft av andre:", en: "How peers and colleagues characterise my leadership:" },
  "profil.logoer.erfaring": { no: "Erfaring fra blant annet", en: "Selected Professional Experience" },
  "profil.logoer.utdanning": { no: "Utdanning", en: "Education" },

  // Erfaring
  "erfaring.title": { no: "Karrierehøydepunkter", en: "Career Highlights" },
  "erfaring.mandat": { no: "Mandat", en: "Mandate" },
  "erfaring.strategi": { no: "Strategi", en: "Approach" },
  "erfaring.resultater": { no: "Resultater", en: "Key Outcomes" },
  "erfaring.andre": { no: "Andre erfaringer", en: "Additional Experience" },
  "erfaring.cv": { no: "Se min fullstendige CV", en: "View my full CV" },

  // Resultater
  "resultater.title": { no: "Dokumenterte Resultater", en: "Proven Track Record" },
  "resultater.sub": { no: "Nøkkeltall fra karrieren", en: "Career performance metrics" },
  "resultater.salgsvekst": { no: "Salgsvekst", en: "Revenue Growth" },
  "resultater.omsetning": { no: "Omsetningsansvar", en: "P&L Accountability" },
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

  // Consulting
  "cons.title.1": { no: "Marius Ottesen", en: "Marius Ottesen" },
  "cons.title.2": { no: "Consulting", en: "Consulting" },
  "cons.intro.1": {
    no: "Brobyggeren mellom ledelse og AI-teknologi. Jeg hjelper virksomheter med å omsette teknologiske muligheter til kommersiell verdi — uten at det krever et internt tech-team fra dag én.",
    en: "The bridge between executive leadership and AI technology. I help organisations translate technological opportunity into commercial value — without the need for an in-house tech team from day one.",
  },
  "cons.intro.2": {
    no: "I samarbeid med et nettverk av tekniske eksperter leverer jeg rådgivning og implementering som er forankret i forretningsforståelse og praktisk ledererfaring.",
    en: "In partnership with a vetted network of technical experts, I deliver advisory and implementation services anchored in business acumen and hands-on leadership experience.",
  },
  "cons.tjenester": { no: "Tjenester", en: "Service Offering" },
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
