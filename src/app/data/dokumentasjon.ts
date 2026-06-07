import { Lang } from "../LanguageContext";

export const linkedinUrl = "https://www.linkedin.com/in/mariusottesen/";

const data = {
  no: {
    heroSub: "Profil, dokumenter og executive summary",
    intro:
      "Her finner du min CV, åpne søknad og en kort oppsummering av lederprofil, resultater og kjernekompetanse. Siden er laget for rekrutterere, headhuntere, researchere og arbeidsgivere som raskt ønsker å forstå hvor jeg skaper mest verdi.",
    kortversjonTitle: "Kortversjon for rekrutterere og arbeidsgivere",
    kortversjon: [
      "Jeg er en kommersiell leder med lang erfaring fra å bygge vekst, styrke lønnsomhet og utvikle team i komplekse og kunnskapsintensive B2B-virksomheter. Jeg har ledet salg, marked og kommersiell utvikling med personal- og P/L-ansvar, og trives best i roller der strategi skal omsettes til tydelig retning, sterk gjennomføring og målbare resultater.",
      "Jeg er kjent for å skape fremdrift i organisasjoner som trenger klar retning, høy gjennomføringsevne og bedre samspill mellom strategi, salg, drift og teknologi. Lederstilen min er tydelig, involverende og relasjonssterk, med vekt på styrkebasert ledelse, tydelige forventninger og nær oppfølging.",
    ],
    rollerTitle: "Aktuell for roller innen",
    roller: [
      "Kommersiell leder",
      "Salgsdirektør",
      "CCO",
      "Daglig leder SMB",
      "Business Unit Manager",
      "Commercial transformation",
      "Commercial AI transformation",
      "Kommersiell forretningsutvikler",
    ],
    resultaterTitle: "Utvalgte resultater",
    resultater: [
      "Franzefoss: Forbedret kapasitetsutnyttelse, tydeligere styringsmodell, KPI-er og økte marginer.",
      "Norengros: Leverte 67 % salgsvekst og ledet team i nøkkelprosjekt mot mål på NOK 1 mrd.",
      "Mundipharma: Ledet team til global #1-ranking, lanserte fire nøkkelprodukter og vant EU PR-pris.",
      "Nilfisk: Snudde salgssvikt til vekst, overgikk mål og økte teammotivasjon.",
    ],
    resultaterLink: "Se resultater",
    kompetanseTitle: "Kjernekompetanse",
    kompetanse: [
      "Kommersiell ledelse og salgsstrategi",
      "Resultatansvar og lønnsom vekst",
      "Endringsledelse og organisasjonsutvikling",
      "KPI, målstyring og salgsoppfølging",
      "Teamutvikling og styrkebasert ledelse",
      "AI, data og digital kommersiell utvikling",
    ],
    aiTitle: "AI, data og nye arbeidsformer",
    aiText: [
      "Jeg har videreutviklet min kommersielle og strategiske lederkompetanse gjennom masterkurset Generative AI for Business ved BI, kombinert med egne AI-prosjekter innen salgstrening, samhandling, innsiktsarbeid, beslutningsstøtte og agentiske arbeidsflyter.",
    ],
    aiLink: "Se AI-prosjekter",
    pdfTitle: "Last ned eller åpne dokumenter",
    pdfIntro:
      "CV og åpen søknad kan leses direkte på siden, lastes ned eller deles videre ved behov.",
    linkedinTekst:
      "Ønsker du å besøke min LinkedIn-profil for mer informasjon, trykk på linken under:",
    ctaTitle: "Ønsker du å vurdere profilen videre?",
    ctaText:
      "Se gjerne erfaring, resultater og referanser for mer kontekst, eller ta kontakt dersom du ønsker dialog om lederroller, kommersielle muligheter, AI-prosjekter eller samarbeid.",
    ctaErfaring: "Se erfaring",
    ctaResultater: "Se resultater",
    ctaKontakt: "Ta kontakt",
  },
  en: {
    heroSub: "Profile, documents and executive summary",
    intro:
      "Here you will find my CV, open application and a concise summary of my leadership profile, results and core competencies. This page is designed for recruiters, headhunters, researchers and employers who want to quickly understand where I create the most value.",
    kortversjonTitle: "Short version for recruiters and employers",
    kortversjon: [
      "I am a commercial leader with extensive experience building growth, strengthening profitability and developing teams in complex, knowledge-intensive B2B organisations. I have led sales, marketing and commercial development with people and P&L accountability, and perform best in roles where strategy must translate into clear direction, strong execution and measurable results.",
      "I am known for creating momentum in organisations that need clearer direction, high execution capability and better alignment between strategy, sales, operations and technology. My leadership style is clear, engaging and relationship-oriented, with an emphasis on strengths-based leadership, explicit expectations and close follow-up.",
    ],
    rollerTitle: "Relevant for roles in",
    roller: [
      "Commercial leader",
      "Sales director",
      "CCO",
      "Managing director SMB",
      "Business Unit Manager",
      "Commercial transformation",
      "Commercial AI transformation",
      "Commercial business developer",
    ],
    resultaterTitle: "Selected results",
    resultater: [
      "Franzefoss: Improved capacity utilisation, clearer governance model, KPIs and increased margins.",
      "Norengros: Delivered 67% revenue growth and led a team in a key project towards a NOK 1 billion target.",
      "Mundipharma: Led the team to a global #1 ranking, launched four key products and won the EU PR Award.",
      "Nilfisk: Turned declining sales into growth, exceeded targets and increased team motivation.",
    ],
    resultaterLink: "See results",
    kompetanseTitle: "Core competencies",
    kompetanse: [
      "Commercial leadership and sales strategy",
      "Results accountability and profitable growth",
      "Change leadership and organisational development",
      "KPIs, target management and sales follow-up",
      "Team development and strengths-based leadership",
      "AI, data and digital commercial development",
    ],
    aiTitle: "AI, data and new ways of working",
    aiText: [
      "I have further developed my commercial and strategic leadership competence through the Generative AI for Business master's programme at BI, combined with my own AI projects in sales training, collaboration, insight work, decision support and agentic workflows.",
    ],
    aiLink: "See AI projects",
    pdfTitle: "Download or open documents",
    pdfIntro:
      "The CV and open application can be read on this page, downloaded or shared as needed.",
    linkedinTekst:
      "Would you like to visit my LinkedIn profile for more information? Click the link below:",
    ctaTitle: "Would you like to evaluate the profile further?",
    ctaText:
      "See experience, results and references for more context, or get in touch if you would like to discuss leadership roles, commercial opportunities, AI projects or collaboration.",
    ctaErfaring: "See experience",
    ctaResultater: "See results",
    ctaKontakt: "Get in touch",
  },
};

export function getDokumentasjonData(lang: Lang) {
  return data[lang];
}

export const dokumentasjonData = data.no;
