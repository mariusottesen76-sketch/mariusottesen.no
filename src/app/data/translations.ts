import { Lang } from "../LanguageContext";

type Translations = Record<string, { no: string; en: string }>;

const translations: Translations = {
  // Tabs
  "tab.profil": { no: "Profil", en: "Profile" },
  "tab.erfaring": { no: "Erfaring", en: "Experience" },
  "tab.resultater": { no: "Resultater", en: "Results" },
  "tab.referanser": { no: "Referanser", en: "References" },
  "tab.faginnlegg": { no: "Innsikt", en: "Insights" },
  "tab.bok": { no: "Bok", en: "Book" },
  "tab.prosjekter": { no: "AI & prosjekter", en: "AI & Projects" },
  "prosjekter.back": { no: "Tilbake til AI, prosjekter & utvikling", en: "Back to AI, Projects & Development" },
  "tab.consulting": { no: "Consulting", en: "Consulting" },
  "tab.cv": { no: "CV & Åpen søknad", en: "CV & Application" },
  "tab.kontakt": { no: "Kontakt", en: "Contact" },

  // Profil
  "profil.tittel": {
    no: "Kommersiell leder | Vekst, transformasjon og praktisk AI-forståelse",
    en: "Commercial leader | Growth, transformation and practical AI understanding",
  },
  "profil.direkte.label": { no: "Direkte kontakt", en: "Direct contact" },
  "profil.row.case": { no: "Case: Row Solutions", en: "Case: Row Solutions" },
  "profil.row.live": { no: "rowsolutions.no", en: "rowsolutions.no" },
  "profil.selskap.desc": {
    no: "Marius Ottesen Consulting samler erfaring, metoder og porteføljeprosjekter innen kommersiell utvikling, AI, arbeidsflyt og lederstøtte — relevant for lederroller, rekruttering og mulig fremtidig samarbeid.\n\nRow Solutions er aktivt kommersielt rådgivningssamarbeid med Thomas Holm og Gunnar Gundersen for SMB — med offentlig tilgjengelig nettside på rowsolutions.no. AI-laget er faglig samarbeid og podcast om praktisk AI.",
    en: "Marius Ottesen Consulting brings together experience, methods and portfolio projects in commercial development, AI, workflow and leadership support — relevant for leadership roles, recruitment and possible future collaboration.\n\nRow Solutions is active commercial advisory collaboration with Thomas Holm and Gunnar Gundersen for SMEs — with a publicly available website at rowsolutions.no. AI-laget is professional collaboration and a podcast on practical AI.",
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
  "profil.videre.groupB.prosjekter": { no: "AI, prosjekter & utvikling", en: "AI, Projects & Development" },
  "profil.videre.groupB.kontakt": { no: "Ta kontakt", en: "Get in touch" },
  "profil.videre.groupC.title": { no: "For faglig fordypning og samarbeid", en: "For professional insight and collaboration" },
  "profil.videre.groupC.intro": {
    no: "Utforsk faglige perspektiver, prosjekter og mulige samarbeidsflater.",
    en: "Explore perspectives, projects and potential areas for collaboration.",
  },
  "profil.videre.groupC.faginnlegg": { no: "Innsikt", en: "Insights" },
  "profil.videre.groupC.bok": { no: "VerdisKIftet", en: "VerdisKIftet" },
  "profil.videre.groupC.prosjekter": { no: "AI, prosjekter & utvikling", en: "AI, Projects & Development" },
  "profil.videre.groupC.kontakt": { no: "Ta kontakt", en: "Get in touch" },
  "profil.videre.resultater": { no: "Se dokumenterte resultater", en: "See documented results" },
  "profil.videre.erfaring": { no: "Se erfaring", en: "See experience" },
  "profil.videre.prosjekter": { no: "Se AI, prosjekter & utvikling", en: "See AI, Projects & Development" },
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
  "profil.ai.link.prosjekter": { no: "Se AI, prosjekter & utvikling", en: "See AI, Projects & Development" },
  "profil.ai.link.faginnlegg": { no: "Les faginnlegg", en: "Read articles" },
  "profil.bok.titleSuffix": {
    no: " – fagbok av Marius Ottesen",
    en: " – a professional book by Marius Ottesen",
  },
  "profil.bok.body": {
    no: "Jeg har skrevet VerdisKIftet – Fra innsikt til nye fortrinn, en fagbok om hvordan ledere og virksomheter kan omsette innsikt til strategiske valg, mobilisere mennesker og skape varige resultater. Manuskriptet (17 kapitler i syv deler) er i hovedsak ferdigskrevet og er til faglig testlesing. Boka bygger på faginnlegg, ledererfaring og masterarbeid — ikke en samling artikler, men én sammenhengende fortelling. Den er ikke publisert.",
    en: "I have written VerdisKIftet – From insight to new advantages, a professional book on how leaders and organisations turn insight into strategic choices, mobilise people and create lasting results. The manuscript (17 chapters in seven parts) is largely complete and undergoing expert review. It builds on articles, leadership experience and graduate work — one coherent narrative, not a collection of posts. It is not published.",
  },
  "profil.bok.link": { no: "Les om VerdisKIftet", en: "About VerdisKIftet" },

  // Erfaring
  "erfaring.title": { no: "Karriere høydepunkter", en: "Career Highlights" },
  "erfaring.mandat": { no: "Mandat", en: "Mandate" },
  "erfaring.strategi": { no: "Strategi", en: "Approach" },
  "erfaring.resultater": { no: "Resultater", en: "Results" },
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
    en: "Testimonials from colleagues and team members who have worked alongside me — published on LinkedIn. Quotes are shown in the original language (Norwegian).",
  },
  "ref.imageAlt": {
    no: "Referanser og anbefalinger fra kollegaer",
    en: "References and recommendations from colleagues",
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
  "ref.videre.faginnlegg": { no: "Faglig fordypning", en: "Professional depth" },
  "ref.videre.bok": { no: "VerdisKIftet", en: "VerdisKIftet" },

  // Faginnlegg
  "fag.title.1": { no: "Innsikt &", en: "Insight &" },
  "fag.title.2": { no: "faglig fordypning", en: "professional depth" },
  "fag.intro.1": {
    no: "Faginnlegg om kommersiell ledelse, transformasjon og praktisk AI (kunstig intelligens/KI) — strukturert som faglig formidling, ikke som salgsmateriell. Innholdet inngår også i kunnskapsgrunnlaget for fagboka VerdisKIftet (ferdigskrevet manus, faglig testlesing).",
    en: "Articles on commercial leadership, transformation and practical AI — structured as professional communication, not sales material. The body of work also informs VerdisKIftet (manuscript completed, expert review).",
  },
  "fag.bok.eyebrow": {
    no: "Ferdigskrevet manus – til faglig testlesing",
    en: "Manuscript completed — expert review",
  },
  "fag.bok.subtitle": { no: "Fra innsikt til nye fortrinn", en: "From insight to new advantages" },
  "fag.bok.tagline": {
    no: "Hvordan ledere skaper varige resultater når spillereglene endres",
    en: "How leaders create lasting results when the rules of the game change",
  },
  "fag.bok.body.1": {
    no: "VerdisKIftet utforsker hvordan virksomheter kan levere gode resultater og samtidig risikere å miste konkurransekraft. Boka undersøker hvordan forståelse blir til strategiske valg, hvordan ledere mobiliserer mennesker, og hvordan gjennomføring, læring og utvikling skaper nye fortrinn.",
    en: "VerdisKIftet explores how organisations can deliver good results while still risking loss of competitiveness. It examines how understanding becomes strategic choices, how leaders mobilise people, and how execution, learning and development create new advantages.",
  },
  "fag.bok.body.2": {
    no: "Den kobler strategisk ledelse, mennesker, kundeverdi og organisatorisk utvikling med praktisk gjennomføring. Kunstig intelligens behandles som en viktig forsterker av virksomhetens muligheter, ikke som bokas eneste tema.",
    en: "It connects strategic leadership, people, customer value and organisational development with practical execution. Artificial intelligence is treated as an important amplifier of the organisation’s opportunities — not the book’s only theme.",
  },
  "fag.bok.background": {
    no: "Boka bygger på mer enn 25 års leder- og arbeidserfaring, videreutdanning, faglige refleksjoner og praktiske utviklingsprosjekter, inkludert arbeid med kunstig intelligens.",
    en: "The book builds on more than 25 years of leadership and work experience, graduate education, professional reflections and practical development projects, including work with artificial intelligence.",
  },
  "fag.bok.manuscript": {
    no: "17 kapitler fordelt på syv deler. Manus er i hovedsak ferdigskrevet og er nå til faglig testlesing.",
    en: "17 chapters across seven parts. The manuscript is largely complete and undergoing expert review.",
  },
  "fag.bok.factsLine": {
    no: "25+ års ledererfaring · 100+ faglige tekster · fire master- og prosjektarbeider · utviklings- og KI-prosjekter",
    en: "25+ years of leadership experience · 100+ professional texts · four graduate and project theses · development and AI projects",
  },
  "fag.bok.proof.1.heading": { no: "25+ års leder- og arbeidserfaring", en: "25+ years of leadership and work experience" },
  "fag.bok.proof.1.secondary": { no: "", en: "" },
  "fag.bok.proof.2.heading": { no: "100+ faginnlegg og refleksjoner", en: "100+ articles and reflections" },
  "fag.bok.proof.2.secondary": { no: "", en: "" },
  "fag.bok.proof.3.heading": { no: "Fire master- og prosjektarbeider", en: "Four master’s and project theses" },
  "fag.bok.proof.3.secondary": { no: "", en: "" },
  "fag.bok.proof.4.heading": {
    no: "Praktiske utviklings- og KI-prosjekter",
    en: "Practical development and AI projects",
  },
  "fag.bok.proof.4.secondary": { no: "", en: "" },
  "fag.bok.cta": { no: "Utforsk VerdisKIftet", en: "Explore VerdisKIftet" },
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
  "fag.lesestier.title": {
    no: "Faginnlegg – anbefalte lesestier",
    en: "Articles – recommended reading paths",
  },
  "fag.lesestier.intro": {
    no: "Her finner du mine faginnlegg om ledelse, kommersiell utvikling, strategi, transformasjon og kunstig intelligens. Innleggene er organisert i anbefalte lesestier for ulike målgrupper, med en samlet innholdsoversikt lenger ned på siden.",
    en: "Here you will find my articles on leadership, commercial development, strategy, transformation and artificial intelligence. They are organised into recommended reading paths for different audiences, with a full table of contents further down the page.",
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
  "fag.artikkel.tilbake": { no: "Tilbake til Innsikt", en: "Back to Insights" },
  "fag.artikkel.norwegianOnly": { no: "", en: "Norwegian only" },
  "fag.artikkel.enNotAvailable": {
    no: "",
    en: "English version is not available. This article is shown in Norwegian.",
  },
  "fag.artikkel.relevant": { no: "Relevant videre", en: "Further reading" },
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
  "prosjekter.title.1": { no: "AI, prosjekter", en: "AI, Projects" },
  "prosjekter.title.2": { no: "& utvikling", en: "& Development" },
  "prosjekter.intro.1": {
    no: "Her viser jeg hvordan jeg omsetter kommersiell ledererfaring og strategisk forståelse til konkrete initiativer, digitale løsninger og praktisk AI. Porteføljen dokumenterer arbeid med forretningsutvikling, beslutningsstøtte, salgsprosesser og gjennomføring, fra idé og prototype til publiserte løsninger.",
    en: "Here I show how I translate commercial leadership experience and strategic understanding into concrete initiatives, digital solutions and practical AI. The portfolio documents work on business development, decision support, sales processes and execution — from idea and prototype to published solutions.",
  },
  "prosjekter.featured.commercial.heading": { no: "Utvalgt kommersielt initiativ", en: "Featured commercial initiative" },
  "prosjekter.featured.commercial.caseNote": {
    no: "Se også utvalgt initiativ øverst på siden.",
    en: "See also the featured initiative at the top of the page.",
  },
  "prosjekter.featured.row.title": {
    no: "Row Solutions – bedre kommersiell flyt fra synlighet til salg og oppfølging",
    en: "Row Solutions – better commercial flow from visibility to sales and follow-up",
  },
  "prosjekter.featured.row.subtitle": {
    no: "Retning. Kraft. Fremdrift. Resultat.",
    en: "Direction. Power. Momentum. Results.",
  },
  "prosjekter.featured.row.intro": {
    no: "Aktivt kommersielt rådgivningssamarbeid mellom Marius Ottesen, Thomas Holm og Gunnar Gundersen — med tjenester, metoder og publisert nettsted på rowsolutions.no.",
    en: "Active commercial advisory collaboration between Marius Ottesen, Thomas Holm and Gunnar Gundersen — with services, methods and a published website at rowsolutions.no.",
  },
  "prosjekter.featured.row.status": {
    no: "Publisert nettside og aktivt kommersielt samarbeid",
    en: "Published website and active commercial collaboration",
  },
  "prosjekter.featured.row.box.what.label": { no: "Hva Row Solutions er", en: "What Row Solutions is" },
  "prosjekter.featured.row.box.what.body": {
    no: "Aktivt rådgivningssamarbeid for SMB med Marius Ottesen, Thomas Holm og Gunnar Gundersen. Publisert plattform på rowsolutions.no for tjenester, metoder og kontakt.",
    en: "Active advisory collaboration for SMEs with Marius Ottesen, Thomas Holm and Gunnar Gundersen. Published platform at rowsolutions.no for services, methods and contact.",
  },
  "prosjekter.featured.row.box.challenge.label": { no: "Utfordringene vi adresserer", en: "Challenges we address" },
  "prosjekter.featured.row.box.challenge.body": {
    no: "Svikt i synlighet, leadhåndtering, tilbudsoppfølging, kundedialog, arbeidsflyt og prioritering.",
    en: "Gaps in visibility, lead handling, proposal follow-up, customer dialogue, workflow and prioritisation.",
  },
  "prosjekter.featured.row.box.areas.label": { no: "Tjenesteområder", en: "Service areas" },
  "prosjekter.featured.row.box.areas.body": {
    no: "Posisjonering og synlighet, salg og kundeoppfølging, arbeidsflyt og praktisk AI, samt forretningsutvikling.",
    en: "Positioning and visibility, sales and customer follow-up, workflow and practical AI, and business development.",
  },
  "prosjekter.featured.row.box.delivery.label": { no: "Hvordan vi leverer", en: "How we deliver" },
  "prosjekter.featured.row.box.delivery.body": {
    no: "Kartlegging, workshops, ledersparring, kurs, webinarer, AI-trening, sprint/pilot og implementering.",
    en: "Mapping, workshops, leadership sparring, courses, webinars, AI training, sprint/pilot and implementation.",
  },
  "prosjekter.featured.row.box.developed.label": { no: "Hva vi har utviklet", en: "What we have developed" },
  "prosjekter.featured.row.box.developed.body": {
    no: "Publisert rowsolutions.no med tjenestestruktur, metoder og kontaktflate.",
    en: "Published rowsolutions.no with service structure, methods and contact surface.",
  },
  "prosjekter.featured.row.box.marius.label": { no: "Marius Ottesens bidrag", en: "Marius Ottesen’s contribution" },
  "prosjekter.featured.row.box.marius.body": {
    no: "Utvikling av rowsolutions.no fra idé til publisert løsning, inkludert informasjonsarkitektur, innhold, design og teknisk implementering.",
    en: "Development of rowsolutions.no from idea to published solution, including information architecture, content, design and technical implementation.",
  },
  "prosjekter.featured.row.imageAlt": {
    no: "Row Solutions – kommersielt initiativ",
    en: "Row Solutions – commercial initiative",
  },
  "prosjekter.fordypning.title": { no: "Mer faglig fordypning", en: "Further professional reading" },
  "prosjekter.fordypning.innsikt.title": { no: "Innsikt og faginnlegg", en: "Insights and articles" },
  "prosjekter.fordypning.innsikt.desc": {
    no: "Artikler og refleksjoner om kommersiell ledelse, strategi, transformasjon, mennesker og praktisk AI.",
    en: "Articles and reflections on commercial leadership, strategy, transformation, people and practical AI.",
  },
  "prosjekter.fordypning.innsikt.cta": { no: "Gå til innsikt →", en: "Go to insights →" },
  "prosjekter.fordypning.bok.subtitle": { no: "Fra innsikt til nye fortrinn", en: "From insight to new advantages" },
  "prosjekter.fordypning.bok.desc": {
    no: "Fagbok skrevet av Marius Ottesen. Manus består av 17 kapitler fordelt på syv deler og er nå til faglig testlesing.",
    en: "Professional book written by Marius Ottesen. The manuscript has 17 chapters across seven parts and is now undergoing expert review.",
  },
  "prosjekter.fordypning.bok.cta": { no: "Les om boka →", en: "About the book →" },
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
  "prosjekter.intro.punkt.ai-discovery.label": { no: "AI Discovery", en: "AI Discovery" },
  "prosjekter.intro.punkt.ai-discovery.desc": {
    no: "Synlighet og forståelse i ChatGPT, Claude og Perplexity — utviklet av Thomas Holm",
    en: "Visibility and understanding in ChatGPT, Claude and Perplexity — developed by Thomas Holm",
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
  "prosjekter.intro.punkt.salgsflyt.label": { no: "SMB Salgsflyt-sjekken 2.0", en: "SMB Sales Flow Check 2.0" },
  "prosjekter.intro.punkt.salgsflyt.desc": {
    no: "Lederorientert diagnose med 12 suksessdimensjoner, 36 spørsmål og prioriterte tiltak for bedre salgsflyt",
    en: "Leadership-oriented diagnosis with 12 success dimensions, 36 questions and prioritised actions for better sales flow",
  },
  "prosjekter.intro.punkt.event-planner.label": { no: "Event Planner", en: "Event Planner" },
  "prosjekter.intro.punkt.event-planner.desc": {
    no: "AI-assistert planlegging, samarbeid og gjennomføring — med Event Readiness, samtaler, budsjett, human-in-the-loop og read-only demo",
    en: "AI-assisted planning, collaboration and execution — with Event Readiness, conversations, budget, human-in-the-loop and read-only demo",
  },
  "prosjekter.intro.punkt.bilagsassistent.label": { no: "Bilagsassistent", en: "Receipt Assistant" },
  "prosjekter.intro.punkt.bilagsassistent.desc": {
    no: "Automatisert innhenting, kontroll og strukturering av kvitteringer og bilag for små virksomheter",
    en: "Automated collection, review and structuring of receipts and vouchers for small businesses",
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
    no: "Aktivt kommersielt rådgivningssamarbeid med publisert plattform på rowsolutions.no — dokumentert som utviklingscase her.",
    en: "Active commercial advisory collaboration with published platform at rowsolutions.no — documented here as a development case.",
  },
  "prosjekter.intro.punkt.ai-laget.label": { no: "AI-laget", en: "AI-laget" },
  "prosjekter.intro.punkt.ai-laget.desc": {
    no: "Faglig samarbeid om praktisk AI, erfaringsdeling og formidling, med tilknytning til podcasten AI-laget.",
    en: "Professional collaboration on practical AI, experience sharing and communication, with links to the AI-laget podcast.",
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
    no: "Praktisk AI-læring og utforsking av virksomhetsnære problemstillinger",
    en: "Practical AI learning and exploration of business-near challenges",
  },
  "prosjekter.intro.punkt.faginnlegg.label": { no: "Faginnlegg", en: "Articles" },
  "prosjekter.intro.punkt.faginnlegg.desc": {
    no: "Løpende fagspor om AI, ledelse og verdiskaping — teori møter praksis",
    en: "Ongoing track on AI, leadership and value creation — where theory meets practice",
  },
  "prosjekter.intro.punkt.faginnlegg.bookPrefix": {
    no: "Parallelt finnes fagboka VerdisKIftet – ferdigskrevet manus med 17 kapitler (faglig testlesing). Se",
    en: "In parallel, VerdisKIftet — a completed manuscript with 17 chapters (expert review). See",
  },
  "prosjekter.intro.punkt.faginnlegg.bookLink": {
    no: "VerdisKIftet",
    en: "VerdisKIftet",
  },
  "prosjekter.intro.2": {
    no: "Siden fungerer som en portefølje for arbeidsgivere, rekrutterere og beslutningstakere som ønsker å se praktisk AI-forståelse, digital transformasjon, produktutvikling og kommersiell og operasjonell gjennomføringsevne i praksis.",
    en: "This page serves as a portfolio for employers, recruiters and decision-makers who want to see practical AI understanding, digital transformation, product development and commercial and operational execution capability in practice.",
  },
  "prosjekter.intro.moc": {
    no: "Prosjektene viser hvordan jeg kombinerer kommersiell ledererfaring, strategi og praktisk AI-utvikling. Gjennom Marius Ottesen Consulting bistår jeg virksomheter med å vurdere muligheter, prioritere tiltak og utvikle arbeidsmåter som skaper verdi.",
    en: "The projects show how I combine commercial leadership experience, strategy and practical AI development. Through Marius Ottesen Consulting I help organisations assess opportunities, prioritise initiatives and develop ways of working that create value.",
  },
  "prosjekter.videreutdanning.title": {
    no: "Fra videreutdanning til bygde løsninger",
    en: "From further education to built solutions",
  },
  "prosjekter.videreutdanning.para1": {
    no: "I 2026 fullførte jeg masterkurset Generative AI for Business ved Handelshøyskolen BI med karakter A. Parallelt har jeg utviklet kommersielle initiativer, konkrete AI-løsninger og faglige arbeidsmodeller.",
    en: "In 2026 I completed the master's course Generative AI for Business at BI Norwegian Business School with grade A. In parallel I have developed commercial initiatives, concrete AI solutions and professional working models.",
  },
  "prosjekter.videreutdanning.para2": {
    no: "Porteføljen omfatter blant annet Row Solutions, AI-plattformer, salgs- og kundeverktøy, AI Value Lab Oslo og AI-laget. Prosjektene har ulik modenhet — fra konsept og prototype til publiserte løsninger og aktivt faglig samarbeid.",
    en: "The portfolio includes Row Solutions, AI platforms, sales and customer tools, AI Value Lab Oslo and AI-laget. Projects vary in maturity — from concept and prototype to published solutions and active professional collaboration.",
  },
  "prosjekter.kort.seksjon.title": { no: "Portefølje", en: "Portfolio" },
  "prosjekter.kort.seksjon.intro": {
    no: "Utforsk prosjektene og se hva som er utviklet, hvordan løsningene fungerer og hvilken praktisk verdi de kan ha. Detaljsidene gir mer informasjon om funksjonalitet, modenhet og videreutvikling.",
    en: "Explore the projects and see what has been developed, how the solutions work and what practical value they can offer. Detail pages provide more on functionality, maturity and further development.",
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
    no: "Her finner du erfaring, metoder og porteføljeprosjekter innen kommersiell ledelse, B2B-salg, salgsutvikling, salgscoaching, CRM, salgsprosesser, arbeidsflyt, transformasjon og praktisk AI — med operasjonell erfaring fra salg og drift. Målgruppe er særlig norske B2B- og SMB-virksomheter som vil forbedre salg, ledelse og gjennomføring. Sidens innhold viser typiske problemstillinger og hvor jeg kan bidra i lederrolle, rekruttering eller mulig samarbeid; kontaktskjemaet nederst er korteste vei til dialog.",
    en: "Here you will find experience, methods and portfolio projects in commercial leadership, B2B sales, sales development, sales coaching, CRM, sales processes, workflow, transformation and practical AI — with operational experience from sales and operations. The primary audience is B2B and SME organisations in Norway seeking stronger sales, leadership and execution. The content shows typical problem areas and where I can contribute in a leadership role, recruitment or possible collaboration; the contact form at the bottom is the shortest path to a conversation.",
  },
  "cons.intro.2": {
    no: "",
    en: "",
  },
  "cons.tjenester.title": { no: "Kompetanseområder og arbeidsmetoder", en: "Competence areas and working methods" },
  "cons.tjenester.intro": {
    no: "AI kan være en del av løsningen, men utgangspunktet er alltid forretningsproblemet: hvor taper virksomheten tid, kunder, kapasitet, kvalitet eller kommersiell og operasjonell kraft?",
    en: "AI can be part of the solution, but the starting point is always the business problem: where is the organisation losing time, customers, capacity, quality or commercial and operational momentum?",
  },
  "cons.spesialisert.title": { no: "Flere aktuelle kompetanseområder", en: "Further relevant competence areas" },
  "cons.metoder.title": { no: "Metoder og porteføljeprosjekter", en: "Methods and portfolio projects" },
  "cons.metoder.intro": {
    no: "Utvalgte temaer er dokumentert gjennom egne metoder og porteføljeprosjekter — med lenker der du vil se konkret anvendelse.",
    en: "Selected themes are documented through my own methods and portfolio projects — with links where you want to see concrete application.",
  },
  "cons.pakke.hvem": { no: "Typiske problemstillinger", en: "Typical problem areas" },
  "cons.pakke.nummer": { no: "Fokusområde", en: "Focus area" },
  "cons.pakke.leveranse": { no: "Relevant erfaring og metodikk", en: "Relevant experience and methodology" },
  "cons.pakke.lesMer": { no: "Les mer", en: "Read more" },
  "cons.pakke.for": { no: "Når dette ofte er relevant", en: "When this is often relevant" },
  "cons.pakke.leveranseDetalj": { no: "Hva erfaringen dekker", en: "What the experience covers" },
  "cons.pakke.praktiskAnvendelse": { no: "Praktisk anvendelse", en: "Practical application" },
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
  "cons.prosjekter.link": { no: "Se porteføljen", en: "See the portfolio" },
  "cons.fagligFordypning.prefix": { no: "Se også", en: "See also" },
  "cons.fagligFordypning.faginnlegg": { no: "faginnlegg", en: "articles" },
  "cons.fagligFordypning.and": { no: "og", en: "and" },
  "cons.fagligFordypning.bok": { no: "VerdisKIftet", en: "VerdisKIftet" },
  "cons.fagligFordypning.suffix": {
    no: "for mer om perspektivene bak arbeidet med ledelse, kommersiell utvikling, transformasjon og praktisk AI.",
    en: "for more on the perspectives behind work on leadership, commercial development, transformation and practical AI.",
  },
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
    no: "Nettsiden samler dokumenterte resultater, erfaring, AI-prosjekter,",
    en: "The website brings together documented results, experience, AI projects,",
  },
  "kontakt.link.faginnlegg": { no: "Over 100 faginnlegg", en: "over 100 articles" },
  "kontakt.link.bok": { no: "VerdisKIftet", en: "VerdisKIftet" },
  "kontakt.profil.bokMid": { no: " og fagboka ", en: " and the book " },
  "kontakt.profil.bokSuffix": {
    no: ", som nå er til faglig testlesing.",
    en: ", which is now in expert review.",
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
  "kontakt.link.prosjekter": { no: "Se AI, prosjekter & utvikling", en: "See AI, Projects & Development" },
  "kontakt.link.skjema": { no: "Åpne kontaktskjema", en: "Open contact form" },

  // Dokumentasjon
  "dok.title.1": { no: "CV & Åpen", en: "CV & Open" },
  "dok.title.2": { no: "Søknad", en: "Application" },
  "dok.cv": { no: "Min CV", en: "My CV" },
  "dok.cv.desc": { no: "Last ned eller les min fullstendige CV (oppdatert juni 2026)", en: "Download or review my comprehensive CV (updated June 2026)" },
  "dok.cv.btn": { no: "Åpne PDF", en: "Open PDF (Norwegian)" },
  "dok.cv.viewerTitle": { no: "CV Marius Ottesen — PDF", en: "Marius Ottesen CV — PDF" },
  "dok.cv.viewerHint": {
    no: "Bla mellom CV-sidene i viseren, eller åpne PDF i egen fane for nedlasting.",
    en: "Scroll through the CV pages in the viewer, or open the PDF in a new tab to download.",
  },
  "dok.cv.openNewTab": { no: "Åpne CV i ny fane", en: "Open CV in new tab (Norwegian PDF)" },
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
  "dok.soknad.openNewTab": { no: "Åpne søknad i ny fane", en: "Open application in new tab (Norwegian PDF)" },
  "dok.linkedin": { no: "Besøk min LinkedIn-profil", en: "Visit my LinkedIn Profile" },
  "dok.fagFordypning.intro": {
    no: "For ytterligere faglig fordypning kan du også se mine",
    en: "For further professional depth, you can also see my",
  },
  "dok.fagFordypning.faginnlegg": { no: "100+ faglige tekster", en: "100+ professional texts" },
  "dok.fagFordypning.and": { no: "og", en: "and" },
  "dok.fagFordypning.bok": { no: "VerdisKIftet", en: "VerdisKIftet" },
  "dok.fagFordypning.outro": {
    no: ": fagbok med ferdigskrevet manus (17 kapitler i syv deler), til faglig testlesing — bygget på erfaring, masterarbeid, faglige tekster og praktiske utviklingsprosjekter.",
    en: ": a professional book with a completed manuscript (17 chapters in seven parts), undergoing expert review — built on experience, graduate work, professional writing and practical development projects.",
  },

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
