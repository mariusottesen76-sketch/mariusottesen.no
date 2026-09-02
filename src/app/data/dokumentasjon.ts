import { Lang } from "../LanguageContext";

export const linkedinUrl = "https://www.linkedin.com/in/mariusottesen/";

/** Cache-bust når CV/søknad-PDF oppdateres (filnavn på disk: cv.pdf / soknad.pdf). */
export const CV_PDF_VERSJON = "20260625";
export const cvPdfUrl = `/pdf/cv.pdf?v=${CV_PDF_VERSJON}`;
export const soknadPdfUrl = `/pdf/soknad.pdf?v=${CV_PDF_VERSJON}`;

const data = {
  no: {
    heroSub: "Profil, dokumenter og executive summary",
    intro:
      "Her finner du min CV, åpne søknad og en kort oppsummering av lederprofil, resultater og kjernekompetanse. Siden er laget for rekrutterere, headhuntere, researchere og arbeidsgivere som raskt ønsker å forstå hvor jeg skaper mest verdi.",
    resultaterTitle: "Utvalgte resultater",
    resultater: [
      "Franzefoss: Forbedret kapasitetsutnyttelse, tydeligere styringsmodell, KPI-er og økte marginer.",
      "Norengros: Leverte 67 % salgsvekst og ledet team i nøkkelprosjekt mot mål på NOK 1 mrd.",
      "Mundipharma: Ledet team til global #1-ranking, lanserte fire nøkkelprodukter og vant EU PR-pris.",
      "Nilfisk: Snudde etablert salgssvikt til vekst, KAM for to største kunder og nylanseringer innen robotteknologi.",
    ],
    resultaterLink: "Se resultater",
    kompetanseTitle: "Kjernekompetanse",
    kompetanse: [
      "Kommersiell ledelse, salgsledelse og salgsstrategi",
      "Resultat- og personalansvar, P/L, KPI og lønnsom vekst",
      "Endringsledelse, coaching og team-/organisasjonsutvikling",
      "Samspill mellom strategi, salg, drift og gjennomføring",
      "CRM, salgsprosesser og datadrevet salgsledelse",
      "Kunde-, marked- og interessenthåndtering",
      "Digital transformasjon, AI/KI og nye arbeidsformer",
    ],
    aiTitle: "AI, data og nye arbeidsformer",
    aiText: [
      "Jeg har videreutviklet min kommersielle og strategiske lederkompetanse gjennom masterkurset <em class=\"italic\">Generative AI for Business</em> ved BI, kombinert med egne AI-prosjekter innen transformasjonsstyring, operasjonell planlegging, salgstrening, samhandling, innsiktsarbeid, beslutningsstøtte og agentiske arbeidsflyter. Dette inkluderer executive konseptplattformen <em class=\"italic\">AI Transformation & Value Realization</em>, <em class=\"italic\">Control Tower</em> og apper som <em class=\"italic\">Event Planner</em>, samt kommersielt initiativet <em class=\"italic\">Row Solutions</em> med ferdigstilt nettside for rowsolutions.no (ennå ikke offentlig publisert). Jeg har også tatt initiativ til <em class=\"italic\">AI Value Lab Oslo</em>, et tverrfaglig lærings- og utviklingsinitiativ med fokus på praktisk testing, ansvarlig bruk av AI og reell verdiskaping gjennom virksomhetsnære case.",
    ],
    aiLink: "Se AI-prosjekter",
    pdfTitle: "CV og åpen søknad",
    pdfIntro:
      "Les CV og åpen søknad (oppdatert juni 2026) direkte i viserne under. Du kan også åpne hvert dokument i egen fane for nedlasting.",
    linkedinTekst:
      "Ønsker du å besøke min LinkedIn-profil for mer informasjon, trykk på linken under:",
    ctaTitle: "Ønsker du å vurdere profilen videre?",
    ctaText:
      "Se gjerne erfaring, resultater og referanser for mer kontekst, eller ta kontakt dersom du ønsker dialog om lederroller, consulting, kommersielle muligheter, AI-prosjekter eller samarbeid.",
    ctaErfaring: "Se erfaring",
    ctaResultater: "Se resultater",
    ctaKontakt: "Ta kontakt",
  },
  en: {
    heroSub: "Profile, documents and executive summary",
    intro:
      "Here you will find my CV, open application and a concise summary of my leadership profile, results and core competencies. This page is designed for recruiters, headhunters, researchers and employers who want to quickly understand where I create the most value.",
    resultaterTitle: "Selected results",
    resultater: [
      "Franzefoss: Improved capacity utilisation, clearer governance model, KPIs and increased margins.",
      "Norengros: Delivered 67% revenue growth and led a team in a key project towards a NOK 1 billion target.",
      "Mundipharma: Led the team to a global #1 ranking, launched four key products and won the EU PR Award.",
      "Nilfisk: Turned an established sales decline into growth, KAM for two largest customers and launches in robotics technology.",
    ],
    resultaterLink: "See results",
    kompetanseTitle: "Core competencies",
    kompetanse: [
      "Commercial leadership, sales leadership and sales strategy",
      "P&L and people accountability, KPIs and profitable growth",
      "Change leadership, coaching and team/organisational development",
      "Alignment between strategy, sales, operations and execution",
      "CRM, sales processes and data-driven sales leadership",
      "Customer, market and stakeholder engagement",
      "Digital transformation, AI and new ways of working",
    ],
    aiTitle: "AI, data and new ways of working",
    aiText: [
      "I have further developed my commercial and strategic leadership competence through the <em class=\"italic\">Generative AI for Business</em> master's programme at BI, combined with my own AI projects in transformation governance, operational planning, sales training, collaboration, insight work, decision support and agentic workflows. This includes the executive concept platform <em class=\"italic\">AI Transformation & Value Realization</em>, <em class=\"italic\">Control Tower</em> and apps such as <em class=\"italic\">Event Planner</em>, as well as the commercial initiative <em class=\"italic\">Row Solutions</em> with a completed website for rowsolutions.no (not yet publicly published). I have also initiated <em class=\"italic\">AI Value Lab Oslo</em>, a cross-disciplinary learning and development initiative focused on practical testing, responsible use of AI and real value creation through business-near cases.",
    ],
    aiLink: "See AI projects",
    pdfTitle: "CV and open application",
    pdfIntro:
      "Read the CV and open application directly in the viewers below. The PDF documents are in Norwegian. You can also open each document in a new tab to download.",
    linkedinTekst:
      "Would you like to visit my LinkedIn profile for more information? Click the link below:",
    ctaTitle: "Would you like to evaluate the profile further?",
    ctaText:
      "See experience, results and references for more context, or get in touch if you would like to discuss leadership roles, consulting, commercial opportunities, AI projects or collaboration.",
    ctaErfaring: "See experience",
    ctaResultater: "See results",
    ctaKontakt: "Get in touch",
  },
};

export function getDokumentasjonData(lang: Lang) {
  return data[lang];
}

export const dokumentasjonData = data.no;
