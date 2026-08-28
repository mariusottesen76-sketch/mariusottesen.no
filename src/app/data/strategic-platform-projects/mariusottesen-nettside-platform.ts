import type { StrategicPlatformProject } from "./types";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Kommersiell leder og AI-strateg", en: "Commercial leader and AI strategist" },
  beskrivelse: {
    no: "Har utviklet nettsiden, innholdsarkitekturen og brukerreisen med Cursor og AI-verktøy som praktisk demonstrasjon av digital produktutvikling og AI-assistert gjennomføring.",
    en: "Has developed the website, content architecture and user journey with Cursor and AI tools as a practical demonstration of digital product development and AI-assisted execution.",
  },
};

export const mariusottesenNettsidePlatform: StrategicPlatformProject = {
  slug: "mariusottesen-nettside",
  prosjektId: "mariusottesen-no-2025",
  detailPath: "/mariusottesen-nettside",
  meta: {
    title: {
      no: "Nettsideprosjekt mariusottesen.no | Marius Ottesen",
      en: "Website project mariusottesen.no | Marius Ottesen",
    },
    description: {
      no: "Utviklings- og porteføljecase: hvordan mariusottesen.no er bygget som profilplattform, fagarkiv og digital inngang — med Next.js, Cursor og AI-assistert produktutvikling.",
      en: "Development and portfolio case: how mariusottesen.no is built as a profile platform, subject archive and digital entry point — with Next.js, Cursor and AI-assisted product development.",
    },
    ogImage: "/images/mariusottesen-nettside-hero.png?v=20260719",
    canonicalPath: "/mariusottesen-nettside",
  },
  teaser: {
    undertittel: {
      no: "Profilplattform, portefølje og fagarkiv",
      en: "Profile platform, portfolio and subject archive",
    },
    intro: {
      no: "Publisert nettside bygget med Next.js og AI-assistert arbeidsflyt i Cursor.",
      en: "Published website built with Next.js and AI-assisted workflow in Cursor.",
    },
    blokker: {
      utfordring: {
        no: "Fragmentert lederprofil på tvers av LinkedIn, CV og enkeltstående demoer.",
        en: "Fragmented leadership profile across LinkedIn, CV and one-off demos.",
      },
      bygget: {
        no: "Samlet profil-, portefølje- og fagflate med AI-prosjekter og demonstratorer.",
        en: "Unified profile, portfolio and subject surface with AI projects and demonstrators.",
      },
      relevans: {
        no: "Viser praktisk AI i produkt- og webutvikling kombinert med kommersiell ledelse.",
        en: "Shows practical AI in product and web development combined with commercial leadership.",
      },
      status: {
        no: "Publisert og løpende videreutviklet siden slutten av 2025.",
        en: "Published and under continuous development since late 2025.",
      },
    },
    videreutvikling: {
      no: "Prosjektmigrering, SEO, flere engelske sider og bedre brukerreiser.",
      en: "Project migration, SEO, more English pages and better user journeys.",
    },
  },
  detail: {
    statusBadge: {
      no: "Publisert og kontinuerlig videreutviklet profil- og porteføljeplattform",
      en: "Published and continuously developed profile and portfolio platform",
    },
    hero: {
      verdiforslag: {
        no: "Profesjonell profilplattform, prosjektportefølje og digital inngang til samarbeid.",
        en: "Professional profile platform, project portfolio and digital entry point for collaboration.",
      },
      executiveSummary: {
        no: "mariusottesen.no er bygget som en profesjonell profilplattform, prosjektportefølje, fagarkiv og digital inngang til jobbmuligheter, samarbeid og faglig dialog. Nettsiden samler lederprofil, erfaring, resultater, referanser, faginnlegg, AI-prosjekter, consulting, CV og kontakt — og viser hvordan komplekst innhold kan struktureres målgruppeorientert. Den er bygget og videreutviklet med Cursor og AI-verktøy, ikke presentert som fullskala kommersiell SaaS-plattform.",
        en: "mariusottesen.no is built as a professional profile platform, project portfolio, subject archive and digital entry point for job opportunities, collaboration and professional dialogue. The site brings together leadership profile, experience, results, references, articles, AI projects, consulting, CV and contact — and shows how complex content can be structured in an audience-oriented way. It is built and further developed with Cursor and AI tools, not presented as a full-scale commercial SaaS platform.",
      },
      bildeAlt: {
        no: "mariusottesen.no – lederprofil, portefølje og AI-demonstratorer",
        en: "mariusottesen.no – leadership profile, portfolio and AI demonstrators",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "En lederprofil med mye erfaring, dokumenterte resultater, faginnlegg og egne AI-prosjekter blir fort fragmentert på tvers av LinkedIn, CV, presentasjoner og enkeltstående demoer. Det gir et ufullstendig bilde av både kommersiell og operasjonell ledelse og praktisk AI-forståelse — og gjør det vanskelig for rekrutterere, arbeidsgivere og samarbeidspartnere å vurdere helheten.",
        en: "A leadership profile with extensive experience, documented results, articles and own AI projects easily becomes fragmented across LinkedIn, CV, presentations and one-off demos. That gives an incomplete picture of both commercial and operational leadership and practical AI understanding — and makes it difficult for recruiters, employers and partners to assess the whole.",
      },
    },
    logikk: {
      heading: { no: "Modell, tilnærming og prosjektlogikk", en: "Model, approach and project logic" },
      body: {
        no: "Innholdsarkitekturen er bygget rundt målgrupper og brukerreiser — ikke bare teknisk struktur:",
        en: "The content architecture is built around audiences and user journeys — not just technical structure:",
      },
      steps: [
        {
          tittel: { no: "Rekrutterere og headhuntere", en: "Recruiters and headhunters" },
          beskrivelse: {
            no: "Rask tilgang til profil, erfaring, resultater, referanser og CV.",
            en: "Quick access to profile, experience, results, references and CV.",
          },
        },
        {
          tittel: { no: "Potensielle arbeidsgivere", en: "Potential employers" },
          beskrivelse: {
            no: "Dokumentert leveranseevne, kommersiell tyngde og praktisk AI-kompetanse i én flate.",
            en: "Documented delivery capability, commercial depth and practical AI competence in one surface.",
          },
        },
        {
          tittel: { no: "Samarbeidspartnere og fagmiljøer", en: "Partners and professional communities" },
          beskrivelse: {
            no: "Faginnlegg, AI-prosjekter og consulting-oversikt som grunnlag for faglig dialog.",
            en: "Articles, AI projects and consulting overview as a basis for professional dialogue.",
          },
        },
        {
          tittel: { no: "Kontakt og åpen søknad", en: "Contact and open application" },
          beskrivelse: {
            no: "Tydelig kontaktflyt og CTA-er for samarbeid, dialog og henvendelser.",
            en: "Clear contact flow and CTAs for collaboration, dialogue and inquiries.",
          },
        },
      ],
    },
    bygget: {
      heading: { no: "Hva som er bygget eller utviklet", en: "What has been built or developed" },
      items: [
        { no: "Publisert nettside med norsk og engelsk innhold", en: "Published website with Norwegian and English content" },
        { no: "Lederprofil, erfaring, dokumenterte resultater, referanser, faginnlegg, AI-prosjekter, consulting, CV og kontakt", en: "Leadership profile, experience, documented results, references, articles, AI projects, consulting, CV and contact" },
        { no: "Faginnlegg med anbefalte lesestier, innholdsfortegnelse, kortoversikt og modal for hele innlegg", en: "Articles with recommended reading paths, table of contents, card overview and modal for full posts" },
        { no: "AI-prosjektside med portefølje, hurtigoversikt og detaljerte prosjektbeskrivelser", en: "AI projects page with portfolio, quick overview and detailed project descriptions" },
        { no: "Tilgangsstyrte AI-demonstratorer og landingssider for utvalgte løsninger", en: "Access-controlled AI demonstrators and landing pages for selected solutions" },
        { no: "Case-side for Row Solutions (rowsolutions.no) i porteføljen — ferdigstilt, ikke publisert", en: "Case page for Row Solutions (rowsolutions.no) in the portfolio — completed, not published" },
        { no: "Kontaktskjema med e-postintegrasjon", en: "Contact form with email integration" },
        { no: "Responsivt design, SEO, metadata og forberedt deling på LinkedIn og X", en: "Responsive design, SEO, metadata and prepared sharing on LinkedIn and X" },
      ],
    },
    moduler: {
      heading: { no: "Sentrale leveranser og funksjonsområder", en: "Core deliverables and functional areas" },
      intro: {
        no: "Nettsiden er strukturert i tydelige innholdsområder:",
        en: "The website is structured in clear content areas:",
      },
      modules: [
        {
          tittel: { no: "Profil og erfaring", en: "Profile and experience" },
          beskrivelse: { no: "Lederprofil, erfaring og dokumenterte resultater.", en: "Leadership profile, experience and documented results." },
          bygget: true,
        },
        {
          tittel: { no: "Faginnlegg", en: "Articles" },
          beskrivelse: {
            no: "Fagarkiv med lesestier, innholdsfortegnelse og modalvisning.",
            en: "Subject archive with reading paths, table of contents and modal display.",
          },
          bygget: true,
        },
        {
          tittel: { no: "AI-prosjekter", en: "AI projects" },
          beskrivelse: {
            no: "Portefølje, hurtigoversikt og project_v2-detaljsider for utvalgte prosjekter.",
            en: "Portfolio, quick overview and project_v2 detail pages for selected projects.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Demonstratorer", en: "Demonstrators" },
          beskrivelse: {
            no: "Tilgangsstyrte piloter, executive konseptplattformer og landingssider — blant annet AI Transformation & Value Realization, Control Tower, PSC, FlowSignal, Event Planner, AI Readiness Scan og SMB Salgsflyt-sjekken.",
            en: "Access-controlled pilots, executive concept platforms and landing pages — including AI Transformation & Value Realization, Control Tower, PSC, FlowSignal, Event Planner, AI Readiness Scan and SMB Sales Flow Check.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Kontakt og CV", en: "Contact and CV" },
          beskrivelse: {
            no: "Kontaktskjema, åpen søknad og nedlastbar CV.",
            en: "Contact form, open application and downloadable CV.",
          },
          bygget: true,
        },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan prosjektet eller løsningen fungerer", en: "How the project or solution works" },
      intro: {
        no: "Brukerreisen er lagt opp for å bygge tillit og dybde trinnvis:",
        en: "The user journey is designed to build trust and depth step by step:",
      },
      steps: [
        {
          tittel: { no: "Profil og leveranseevne", en: "Profile and delivery capability" },
          beskrivelse: {
            no: "Forside og profil gir rask forståelse av erfaring, resultater og kommersiell tyngde.",
            en: "Home and profile give quick understanding of experience, results and commercial depth.",
          },
        },
        {
          tittel: { no: "Faglig dybde", en: "Subject depth" },
          beskrivelse: {
            no: "Faginnlegg og resultater dokumenterer refleksjon, metode og praktisk erfaring.",
            en: "Articles and results document reflection, methodology and practical experience.",
          },
        },
        {
          tittel: { no: "Konkret gjennomføring", en: "Concrete execution" },
          beskrivelse: {
            no: "AI-prosjekter og demonstratorer viser hva som faktisk er bygget og testet.",
            en: "AI projects and demonstrators show what has actually been built and tested.",
          },
        },
        {
          tittel: { no: "Kontakt", en: "Contact" },
          beskrivelse: {
            no: "Tydelige CTA-er leder til kontaktskjema, consulting eller åpen søknad.",
            en: "Clear CTAs lead to contact form, consulting or open application.",
          },
        },
      ],
      detaljpunkter: [
        {
          no: "Nettsiden er bygget med Next.js, publisert via Vercel og GitHub, og utviklet med AI-assistert arbeidsflyt i Cursor — fra struktur og innhold til prototyping og videreutvikling.",
          en: "The site is built with Next.js, published via Vercel and GitHub, and developed with an AI-assisted workflow in Cursor — from structure and content to prototyping and further development.",
        },
      ],
    },
    relevans: {
      heading: { no: "Hvorfor prosjektet er relevant", en: "Why the project is relevant" },
      sections: [
        {
          tittel: { no: "Praktisk AI i produktutvikling", en: "Practical AI in product development" },
          tekst: {
            no: "Demonstrerer hvordan AI-verktøy og Cursor kan brukes i reell web- og produktutvikling — ikke bare som teori.",
            en: "Demonstrates how AI tools and Cursor can be used in real web and product development — not just as theory.",
          },
        },
        {
          tittel: { no: "Målgruppeorientert kommunikasjon", en: "Audience-oriented communication" },
          tekst: {
            no: "Viser evne til å strukturere komplekst innhold for rekrutterere, arbeidsgivere, ledere og fagmiljøer.",
            en: "Shows ability to structure complex content for recruiters, employers, leaders and professional communities.",
          },
        },
        {
          tittel: { no: "Porteføljebygging", en: "Portfolio building" },
          tekst: {
            no: "Kombinerer dokumentert resultathistorikk, faglig tyngde og konkrete AI-leveranser i én troverdig profesjonell flate.",
            en: "Combines documented results history, subject depth and concrete AI deliverables in one credible professional surface.",
          },
        },
      ],
    },
    status: {
      heading: { no: "Status, modenhet og avgrensninger", en: "Status, maturity and limitations" },
      body: {
        no: "Publisert og kontinuerlig videreutviklet profesjonell profil- og porteføljeplattform siden slutten av 2025. Nettsiden er live og fungerer som hovedportefølje. Den er ikke presentert som fullskala kommersiell SaaS-plattform eller generisk nettsidebygger for tredjeparter.",
        en: "Published and continuously developed professional profile and portfolio platform since late 2025. The site is live and serves as the main portfolio. It is not presented as a full-scale commercial SaaS platform or generic website builder for third parties.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Videreutvikling av løsningen", en: "Further development of the solution" },
        punkter: [
          { no: "Bedre analyse av brukerreiser og CTA-er", en: "Better analysis of user journeys and CTAs" },
          { no: "Sterkere internlenking", en: "Stronger internal linking" },
          { no: "Videre SEO-optimalisering", en: "Further SEO optimisation" },
          { no: "Flere engelske sider", en: "More English pages" },
          { no: "Tydeligere kobling mellom prosjekter, faginnlegg, erfaring og resultater", en: "Clearer links between projects, articles, experience and results" },
          { no: "Videre universell utforming og redaksjonell QA", en: "Further universal design and editorial QA" },
        ],
      },
      tilpasning: {
        heading: { no: "Overførbar metode og anvendelse", en: "Transferable method and application" },
        punkter: [
          { no: "Profesjonelle profilplattformer og lederprofiler", en: "Professional profile platforms and leadership profiles" },
          { no: "Fagporteføljer og prosjektarkiver", en: "Subject portfolios and project archives" },
          { no: "Rådgiver- og ekspertprofiler", en: "Advisor and expert profiles" },
          { no: "Virksomhetsnære kunnskapsplattformer", en: "Business-oriented knowledge platforms" },
        ],
        note: {
          no: "Metoden er dokumentert som eget arbeid — ikke presentert som allerede leverte kundeprosjekter.",
          en: "The method is documented as own work — not presented as already delivered client projects.",
        },
      },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: {
        no: "Åpne nettsiden for å se den live løsningen, eller ta kontakt for faglig dialog om porteføljen og utviklingsarbeidet.",
        en: "Open the website to see the live solution, or get in touch for professional dialogue about the portfolio and development work.",
      },
    },
    utvikler,
  },
};
