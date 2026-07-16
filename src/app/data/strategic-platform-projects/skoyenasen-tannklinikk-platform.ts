import type { StrategicPlatformProject } from "./types";

const utvikler = {
  navn: { no: "Marius Ottesen", en: "Marius Ottesen" },
  rolle: { no: "Kommersiell leder og AI-strateg", en: "Commercial leader and AI strategist" },
  beskrivelse: {
    no: "Utvikler virksomhetsnære koncepter, arbeidsflyter og digitale løsninger i skjæringspunktet mellom kommersiell ledelse, mennesker, teknologi og praktisk AI.",
    en: "Develops business-oriented concepts, workflows and digital solutions at the intersection of commercial leadership, people, technology and practical AI.",
  },
};

export const skoyenasenTannklinikkPlatform: StrategicPlatformProject = {
  slug: "skoyenasen-tannklinikk",
  prosjektId: "skoyenasen-tannklinikk-2026",
  detailPath: "/skoyenasen-tannklinikk",
  meta: {
    title: {
      no: "Skøyenåsen Tannklinikk – AI-case | Marius Ottesen",
      en: "Skøyenåsen Dental Clinic – AI case | Marius Ottesen",
    },
    description: {
      no: "Utviklet case og prototype for digital pasientreise med chatbot, behovsavklaring og booking på seks språk — ikke produksjonssatt pasientløsning.",
      en: "Developed case and prototype for digital patient journey with chatbot, needs clarification and booking in six languages — not a production-deployed patient solution.",
    },
    ogImage: "/images/skoyenasen-tk.gif",
    canonicalPath: "/skoyenasen-tannklinikk",
  },
  teaser: {
    undertittel: {
      no: "AI i pasientreise, intake og booking",
      en: "AI in patient journey, intake and booking",
    },
    intro: {
      no: "Konkret AI-case for pasientreise, chatbot og booking på seks språk.",
      en: "Concrete AI case for patient journey, chatbot and booking in six languages.",
    },
    blokker: {
      utfordring: {
        no: "Manuelle og fragmenterte kundereiser med mange kanaler og uklar behovsavklaring.",
        en: "Manual and fragmented customer journeys with many channels and unclear needs clarification.",
      },
      bygget: {
        no: "Chatbot, smart intake og veiledet booking i digital front-end på seks språk.",
        en: "Chatbot, smart intake and guided booking in digital front-end in six languages.",
      },
      relevans: {
        no: "Viser praktisk AI-implementering i service- og helseorientert virksomhet med håndterbar governance.",
        en: "Shows practical AI implementation in service- and health-oriented organisation with manageable governance.",
      },
      status: {
        no: "Utviklet case, konsept og prototype — ikke produksjonssatt.",
        en: "Developed case, concept and prototype — not production-deployed.",
      },
    },
    videreutvikling: {
      no: "Videre testing, bookingintegrasjon, kvalitetssikring og administrativ oppfølging.",
      en: "Further testing, booking integration, quality assurance and administrative follow-up.",
    },
  },
  detail: {
    statusBadge: {
      no: "Utviklet case, konsept og prototype — ikke produksjonssatt",
      en: "Developed case, concept and prototype — not production-deployed",
    },
    hero: {
      verdiforslag: {
        no: "Tryggere og mer strukturert digital pasientreise fra første kontakt til booking.",
        en: "Safer and more structured digital patient journey from first contact to booking.",
      },
      executiveSummary: {
        no: "Skøyenåsen Tannklinikk er et konkret AI-case for pasientreise, første kontakt, informasjon, behovsavklaring og booking. Prosjektet kobler kundeopplevelse, smart intake, veiledet booking, chatbot og digital front-end på seks språk — med ansvarlig bruk av AI, menneskelig kontroll og tydelige avgrensninger. Løsningen er utviklet som case og prototype, ikke som produksjonssatt pasientsystem, og erstatter ikke tannlege eller helsepersonell.",
        en: "Skøyenåsen Dental Clinic is a concrete AI case for patient journey, first contact, information, needs clarification and booking. The project connects customer experience, smart intake, guided booking, chatbot and digital front-end in six languages — with responsible use of AI, human control and clear boundaries. The solution is developed as a case and prototype, not as a production-deployed patient system, and does not replace dentists or healthcare personnel.",
      },
      bildeAlt: {
        no: "Skøyenåsen Tannklinikk – AI i pasientreise, intake og booking",
        en: "Skøyenåsen Dental Clinic – AI in patient journey, intake and booking",
      },
    },
    utfordring: {
      heading: { no: "Utfordringen prosjektet adresserer", en: "The challenge the project addresses" },
      body: {
        no: "Mange mindre virksomheter har manuelle, fragmenterte eller uklare kundereiser. Henvendelser kommer gjennom flere kanaler, behov må avklares manuelt, booking kan bli unøyaktig, og pasienter eller kunder faller av underveis. I helsetjenester er tillit, presisjon og menneskelig kontroll særlig viktig — samtidig som enklere booking og bedre informasjon er avgjørende for pasientopplevelse og kapasitetsutnyttelse.",
        en: "Many smaller organisations have manual, fragmented or unclear customer journeys. Inquiries come through multiple channels, needs must be clarified manually, booking can become inaccurate, and patients or customers drop off along the way. In healthcare services, trust, precision and human control are especially important — while simpler booking and better information are critical for patient experience and capacity utilisation.",
      },
    },
    logikk: {
      heading: { no: "Modell, tilnærming og prosjektlogikk", en: "Model, approach and project logic" },
      body: {
        no: "Løsningslogikken tar utgangspunkt i pasientreisen fra første kontakt — med tydelig avgrensning mot journalnære eller kliniske vurderinger:",
        en: "The solution logic starts from the patient journey at first contact — with a clear boundary against journal-adjacent or clinical judgements:",
      },
      steps: [
        {
          tittel: { no: "Første kontakt og informasjon", en: "First contact and information" },
          beskrivelse: {
            no: "Pasienten møter en digital front-end med tydelig informasjon og veiledning på eget språk.",
            en: "The patient meets a digital front-end with clear information and guidance in their own language.",
          },
        },
        {
          tittel: { no: "Strukturering av henvendelser", en: "Structuring inquiries" },
          beskrivelse: {
            no: "AI støtter strukturering og avklaring av henvendelser — ikke medisinsk diagnostikk eller klinisk beslutning.",
            en: "AI supports structuring and clarification of inquiries — not medical diagnosis or clinical decision-making.",
          },
        },
        {
          tittel: { no: "Behovsavklaring", en: "Needs clarification" },
          beskrivelse: {
            no: "Smart intake avklarer behov og gjør booking mer relevant før menneskelig oppfølging ved behov.",
            en: "Smart intake clarifies needs and makes booking more relevant before human follow-up when needed.",
          },
        },
        {
          tittel: { no: "Bookinglogikk", en: "Booking logic" },
          beskrivelse: {
            no: "Veiledet booking forenkler timebestilling uten å erstatte resepsjon eller klinisk team.",
            en: "Guided booking simplifies appointment booking without replacing reception or clinical staff.",
          },
        },
        {
          tittel: { no: "Menneskelig kontroll og eskalering", en: "Human control and escalation" },
          beskrivelse: {
            no: "Kliniske vurderinger og sensitive henvendelser eskaleres til ansatte. Human-in-the-loop er innebygd.",
            en: "Clinical judgements and sensitive inquiries are escalated to staff. Human-in-the-loop is built in.",
          },
        },
      ],
    },
    bygget: {
      heading: { no: "Hva som er bygget eller utviklet", en: "What has been built or developed" },
      body: {
        no: "Prosjektet er utviklet som case, konsept og prototype — med fokus på front-end, pasientdialog og praktisk flyt:",
        en: "The project is developed as a case, concept and prototype — focused on front-end, patient dialogue and practical flow:",
      },
      items: [
        { no: "Digital front-end for pasientreisen", en: "Digital front-end for the patient journey" },
        { no: "Chatbot med veiledning og informasjon", en: "Chatbot with guidance and information" },
        { no: "Smart intake og behovsavklaring", en: "Smart intake and needs clarification" },
        { no: "Veiledet bookinglogikk", en: "Guided booking logic" },
        { no: "Flerspråklig støtte på seks språk", en: "Multilingual support in six languages" },
        { no: "Struktur for eskalering til ansatte og administrativ oppfølging", en: "Structure for escalation to staff and administrative follow-up" },
      ],
    },
    moduler: {
      heading: { no: "Sentrale leveranser og funksjonsområder", en: "Core deliverables and functional areas" },
      intro: {
        no: "Funksjonsområdene er bevisst avgrenset til trygg digital pasientreise — ikke klinisk behandling:",
        en: "The functional areas are deliberately scoped to safe digital patient journey — not clinical treatment:",
      },
      modules: [
        {
          tittel: { no: "Pasientdialog og chatbot", en: "Patient dialogue and chatbot" },
          beskrivelse: {
            no: "Veiledning, informasjon og strukturering av henvendelser på pasientens språk.",
            en: "Guidance, information and structuring of inquiries in the patient's language.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Behovsavklaring (intake)", en: "Needs clarification (intake)" },
          beskrivelse: {
            no: "Avklaring av behov før booking eller eskalering til mennesker.",
            en: "Clarification of needs before booking or escalation to people.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Booking", en: "Booking" },
          beskrivelse: {
            no: "Veiledet bookingflyt for enklere timebestilling.",
            en: "Guided booking flow for simpler appointment booking.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Sikkerhet og personvern", en: "Security and privacy" },
          beskrivelse: {
            no: "Avgrensninger mot sensitive kliniske data og journalnære prosesser.",
            en: "Boundaries against sensitive clinical data and journal-adjacent processes.",
          },
          bygget: true,
        },
        {
          tittel: { no: "Eskalering og menneskelig kontroll", en: "Escalation and human control" },
          beskrivelse: {
            no: "Overføring til resepsjon og klinisk team ved behov.",
            en: "Transfer to reception and clinical team when needed.",
          },
          bygget: true,
        },
      ],
    },
    hvordan: {
      heading: { no: "Hvordan prosjektet eller løsningen fungerer", en: "How the project or solution works" },
      intro: {
        no: "Pasientreisen støttes slik i den første delen av kontakten:",
        en: "The patient journey is supported as follows in the first part of contact:",
      },
      steps: [
        {
          tittel: { no: "Kontakt", en: "Contact" },
          beskrivelse: {
            no: "Pasienten starter digital dialog eller chatbot på eget språk.",
            en: "The patient starts digital dialogue or chatbot in their own language.",
          },
        },
        {
          tittel: { no: "Veiledning", en: "Guidance" },
          beskrivelse: {
            no: "AI gir informasjon og strukturerer henvendelsen — uten medisinsk diagnostikk.",
            en: "AI provides information and structures the inquiry — without medical diagnosis.",
          },
        },
        {
          tittel: { no: "Avklaring", en: "Clarification" },
          beskrivelse: {
            no: "Behov avklares gjennom smart intake før booking eller eskalering.",
            en: "Needs are clarified through smart intake before booking or escalation.",
          },
        },
        {
          tittel: { no: "Booking eller eskalering", en: "Booking or escalation" },
          beskrivelse: {
            no: "Pasienten booker enklere, eller henvendelsen overføres til ansatte ved behov.",
            en: "The patient books more easily, or the inquiry is transferred to staff when needed.",
          },
        },
      ],
      detaljpunkter: [
        {
          no: "Resepsjon og klinisk team avlastes fra repetitive henvendelser — uten å miste det personlige preget som er en viktig del av klinikkens styrke.",
          en: "Reception and clinical staff are relieved from repetitive inquiries — without losing the personal touch that is a key strength of the clinic.",
        },
      ],
    },
    relevans: {
      heading: { no: "Hvorfor prosjektet er relevant", en: "Why the project is relevant" },
      sections: [
        {
          tittel: { no: "For service- og helseorienterte virksomheter", en: "For service- and health-oriented organisations" },
          tekst: {
            no: "Viser hvordan AI kan brukes i områder med tydelig forretningsverdi, god brukeropplevelse og håndterbar governance — uten høy-risiko automatisering.",
            en: "Shows how AI can be used in areas with clear business value, good user experience and manageable governance — without high-risk automation.",
          },
        },
        {
          tittel: { no: "For arbeidsgivere", en: "For employers" },
          tekst: {
            no: "Demonstrerer praktisk AI-implementering i en reell virksomhetskontekst, med ansvarlig avgrensning og fokus på pasientreise — ikke klinisk beslutningsstøtte.",
            en: "Demonstrates practical AI implementation in a real business context, with responsible scoping and focus on patient journey — not clinical decision support.",
          },
        },
        {
          tittel: { no: "Overførbar logikk", en: "Transferable logic" },
          tekst: {
            no: "Lignende logikk kan overføres til klinikker, servicebedrifter og SMB-er med mange manuelle henvendelser — som utgangspunkt for videre utvikling, ikke som ferdig produkt.",
            en: "Similar logic can be transferred to clinics, service businesses and SMBs with many manual inquiries — as a starting point for further development, not as a finished product.",
          },
        },
      ],
    },
    status: {
      heading: { no: "Status, modenhet og avgrensninger", en: "Status, maturity and limitations" },
      body: {
        no: "Utviklet case, konsept og prototype for en tryggere og mer strukturert digital pasientreise. Løsningen er ikke produksjonssatt, bruker ikke reelle pasientdata og er ikke presentert som medisinsk diagnostikk, automatisert klinisk beslutning eller erstatning for tannlege eller helsepersonell. Ingen dokumentert helseeffekt er påstått.",
        en: "Developed case, concept and prototype for a safer and more structured digital patient journey. The solution is not production-deployed, does not use real patient data and is not presented as medical diagnosis, automated clinical decision-making or replacement for dentists or healthcare personnel. No documented health effect is claimed.",
      },
    },
    skalerbarhet: {
      heading: { no: "Videreutvikling og skalerbar anvendelse", en: "Further development and scalable application" },
      platform: {
        heading: { no: "Videreutvikling av løsningen", en: "Further development of the solution" },
        punkter: [
          { no: "Videre testing og kvalitetssikring", en: "Further testing and quality assurance" },
          { no: "Bookingintegrasjon", en: "Booking integration" },
          { no: "Rolle- og tilgangsstyring", en: "Role and access management" },
          { no: "Flerspråklig støtte og administrativ oppfølging", en: "Multilingual support and administrative follow-up" },
          { no: "Pilotering med tydelige kontrollpunkter", en: "Piloting with clear control points" },
        ],
      },
      tilpasning: {
        heading: { no: "Tilpasning til funksjoner og bransjer", en: "Adaptation to functions and industries" },
        punkter: [
          { no: "Andre klinikker og tannhelsesektor", en: "Other clinics and dental care sector" },
          { no: "Servicebedrifter med manuelle henvendelser", en: "Service businesses with manual inquiries" },
          { no: "Beauty, rådgivning og konsulentintensive tjenester", en: "Beauty, advisory and consultation-intensive services" },
        ],
      },
    },
    avslutning: {
      heading: { no: "Utforsk prosjektet videre", en: "Explore the project further" },
      body: {
        no: "Ta kontakt dersom du ønsker å diskutere hvordan AI kan forbedre kundereise, intake, booking eller oppfølging i en service- eller helseorientert virksomhet.",
        en: "Get in touch if you would like to discuss how AI can improve customer journey, intake, booking or follow-up in a service- or health-oriented organisation.",
      },
    },
    utvikler,
  },
};
