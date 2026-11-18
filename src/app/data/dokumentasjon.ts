import { Lang } from "../LanguageContext";

export const linkedinUrl = "https://www.linkedin.com/in/mariusottesen/";

/** Cache-bust når CV/søknad-PDF oppdateres (filnavn på disk: cv.pdf / soknad.pdf). */
export const CV_PDF_VERSJON = "202611048";
export const cvPdfUrl = `/pdf/cv.pdf?v=${CV_PDF_VERSJON}`;
export const soknadPdfUrl = `/pdf/soknad.pdf?v=${CV_PDF_VERSJON}`;
/** Tre sider (som CV) kun for innebygd viser — unngår feil FitH-skala for én-siders fil. */
export const soknadEmbedPdfUrl = `/pdf/soknad-embed.pdf?v=${CV_PDF_VERSJON}`;

/** Interne detaljsider for AI-seksjonen på /cv — delt NO/EN-etikett der navnet er likt. */
export const CV_AI_SECTION_LINKS = {
  atvr: {
    href: "/ai-transformation-value-realization",
    label: "AI Transformation & Value Realization",
  },
  controlTower: { href: "/control-tower", label: "Control Tower" },
  psc: { href: "/psc", label: "The Predictive Sales Coach" },
  rowSolutions: { href: "/row-solutions", label: "Row Solutions" },
  valueLab: { href: "/ai-value-lab-oslo", label: "AI Value Lab Oslo" },
  aiLaget: { href: "/ai-laget", label: "AI-laget" },
} as const;

const data = {
  no: {
    heroSub: "Profil, dokumenter og executive summary",
    intro:
      "Her finner du min CV, åpne søknad og en kort oppsummering av lederprofil, resultater og kjernekompetanse. Siden er laget for rekrutterere, headhuntere, researchere og arbeidsgivere som raskt ønsker å forstå hvor jeg skaper mest verdi.",
    mobilityLabel: "Praktisk",
    mobilityPractical:
      "Komfortabel med jobbrelatert reise ca. 1–2 dager per uke, nasjonalt og/eller internasjonalt når rollen tilsier det.",
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
      "Resultat- og personalansvar (inkl. P/L-ansvar), KPI og lønnsom vekst",
      "Endringsledelse, coaching og team-/organisasjonsutvikling",
      "Samspill mellom strategi, salg, drift og gjennomføring",
      "CRM, salgsprosesser og datadrevet salgsledelse",
      "Kunde-, marked- og interessenthåndtering",
      "Digital transformasjon, AI/KI og nye arbeidsformer",
    ],
    aiTitle: "AI, data og nye arbeidsformer",
    aiCv: {
      p1BeforeBi:
        "Jeg har videreutviklet min kommersielle og strategiske lederkompetanse gjennom masterkurset ",
      p1BiCourse: "Generative AI for Business",
      p1AfterBi:
        " ved BI og praktisk arbeid med AI-prosjekter. Arbeidet omfatter transformasjonsstyring, beslutningsstøtte, salgstrening og nye arbeidsflyter. Blant eksemplene er ",
      p1BetweenAtvrAndCt: ", ",
      p1PscPrefix: " og salgstreningsverktøyet ",
      p1End: ".",
      p2BeforeRow: "Sammen med Thomas Holm utvikler jeg ",
      p2AfterRow:
        ", et kommersielt samarbeid rettet mot SMB-bedrifter. Vi arbeider med bedre flyt fra synlighet og kundereise til salg og oppfølging, gjennom strategi, metoder, tjenester og praktisk bruk av teknologi. Den publiserte nettsiden er én del av satsingen.",
      p3BeforeValueLab: "Jeg har også tatt initiativ til ",
      p3AfterValueLab:
        ", en arena for tverrfaglig AI-læring og utforsking. I ",
      p3AfterAiLaget:
        " deltar jeg som faglig bidragsyter i et samarbeid som også formidler erfaringer gjennom podcasten «AI-laget – AI for folk flest».",
    },
    aiLink: "Se AI-prosjekter",
    fagligFordypningTitle: "Faglig fordypning",
    fagligFordypning: {
      beforeFaginnlegg: "Jeg deler erfaringer og faglige perspektiver gjennom ",
      faginnleggLink: "over 100 tekster om ledelse, strategi, salg, transformasjon og AI",
      between: ". Jeg har også skrevet ",
      afterBok:
        ", en fagbok om ledelse, mennesker, gjennomføring og teknologi. Manus er nå til faglig testlesing.",
    },
    pdfTitle: "CV og åpen søknad",
    pdfIntro:
      "Les CV og åpen søknad (oppdatert november 2026) direkte i viserne under. Du kan også åpne hvert dokument i egen fane for nedlasting.",
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
    mobilityLabel: "Practical",
    mobilityPractical:
      "Comfortable with business travel approximately 1–2 days per week, nationally and/or internationally when the role requires it.",
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
      "Results and people accountability (incl. P&L accountability), KPIs and profitable growth",
      "Change leadership, coaching and team/organisational development",
      "Alignment between strategy, sales, operations and execution",
      "CRM, sales processes and data-driven sales leadership",
      "Customer, market and stakeholder engagement",
      "Digital transformation, AI and new ways of working",
    ],
    aiTitle: "AI, data and new ways of working",
    aiCv: {
      p1BeforeBi:
        "I have further developed my commercial and strategic leadership competence through the ",
      p1BiCourse: "Generative AI for Business",
      p1AfterBi:
        " master's course at BI and practical work on AI projects. The work covers transformation governance, decision support, sales training and new workflows. Among the examples are ",
      p1BetweenAtvrAndCt: ", ",
      p1PscPrefix: " and the sales training tool ",
      p1End: ".",
      p2BeforeRow: "Together with Thomas Holm I am developing ",
      p2AfterRow:
        ", a commercial collaboration for SMB organisations. We work on better flow from visibility and customer journey to sales and follow-up, through strategy, methods, services and practical use of technology. The published website is one part of the initiative.",
      p3BeforeValueLab: "I have also initiated ",
      p3AfterValueLab:
        ", an arena for cross-disciplinary AI learning and exploration. In ",
      p3AfterAiLaget:
        " I participate as a professional contributor in a collaboration that also shares experience through the podcast «AI-laget – AI for folk flest».",
    },
    aiLink: "See AI projects",
    fagligFordypningTitle: "Professional depth",
    fagligFordypning: {
      beforeFaginnlegg: "I share experience and professional perspectives through ",
      faginnleggLink: "more than 100 texts on leadership, strategy, sales, transformation and AI",
      between: ". I have also written ",
      afterBok:
        ", a professional book on leadership, people, execution and technology. The manuscript is now in expert review.",
    },
    pdfTitle: "CV and open application",
    pdfIntro:
      "Read the CV and open application (updated November 2026) directly in the viewers below. The PDF documents are in Norwegian. You can also open each document in a new tab to download.",
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
