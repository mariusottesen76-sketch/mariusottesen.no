/**
 * Levende innhold for bokprosjektet — oppdater seksjoner her etter hvert som manus og struktur modnes.
 */
import { VERDIS_KIFTET_HTML } from "../lib/verdiskiftet-display";

export type BokProsjektLang = "no" | "en";

export type BokPartChapter = { num: number; title: string };

export type BokPartBlock = {
  partLabel: string;
  partTitle: string;
  journeyText: string;
  chapters: BokPartChapter[];
};

export interface BokProsjektCopy {
  heroEyebrow: string;
  subtitle: string;
  tagline: string;
  heroIngress: string;
  statsLine: string;
  coverNote: string;
  heroCtaTestReader: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  thesisQuote: string;
  partsTitle: string;
  partsIntro: string;
  parts: BokPartBlock[];
  chaptersTitle: string;
  chaptersAccordionHint: string;
  dramaTitle: string;
  dramaParagraphs: string[];
  originTitle: string;
  originParagraphs: string[];
  statusTitle: string;
  statusParagraphs: string[];
  statusDateNote: string;
  testReaderTitle: string;
  testReaderParagraphs: string[];
  testReaderCta: string;
  closingTitle: string;
  closingIntro: string;
  linkArticles: string;
  linkProjects: string;
  linkProfile: string;
  linkContact: string;
  backToArticles: string;
}

export const BOK_ROUTE = { no: "/bok", en: "/en/book" } as const;

export const BOK_TITTEL = "VerdisKIftet" as const;

export const BOK_TESTLESER_MAILTO = {
  no: "mailto:marius.ottesen.76@gmail.com?subject=Testleser%20%E2%80%93%20VerdisKIftet&body=Hei%20Marius%2C%0A%0AJeg%20%C3%B8nsker%20%C3%A5%20melde%20interesse%20som%20testleser%20av%20VerdisKIftet.%0A%0AMin%20bakgrunn%3A%20%0A%0AHvorfor%20jeg%20%C3%B8nsker%20%C3%A5%20lese%20boka%3A%20%0A",
  en: "mailto:marius.ottesen.76@gmail.com?subject=Test%20reader%20%E2%80%93%20VerdisKIftet&body=Hi%20Marius%2C%0A%0AI%20would%20like%20to%20register%20interest%20as%20a%20test%20reader%20for%20VerdisKIftet.%0A%0AMy%20background%3A%20%0A%0AWhy%20I%20want%20to%20read%20the%20book%3A%20%0A",
} as const;

export function getBokResultatPunktHtml(
  lang: BokProsjektLang,
  link: (href: string, label: string) => string,
  bokHref: string,
  faginnleggHref: string,
  faginnleggLinkLabel: string,
): string {
  const bok = `<a href="${bokHref}">${VERDIS_KIFTET_HTML}</a>`;
  const fag = link(faginnleggHref, faginnleggLinkLabel);
  if (lang === "en") {
    return `A major professional book is nearing completion: ${bok} — complete manuscript (17 chapters in seven parts), in final editorial phase, built on the author’s leadership experience, 100+ ${fag}, four graduate and project papers, and practical development work. External review and book production follow before publication.`;
  }
  return `Et større faglig arbeid nærmer seg ferdigstilling: ${bok} – komplett manus (17 kapitler fordelt på syv deler), i avsluttende redaksjonell fase, bygget på ledererfaring, 100+ ${fag}, fire master- og prosjektarbeider og praktisk utviklingsarbeid. Ekstern vurdering og bokproduksjon følger før utgivelse.`;
}

export const BOK_OMSLAG = {
  forside: {
    src: "/images/VerdisKIftet_forside.jpg",
    alt: {
      no: "Foreløpig omslag til fagboka VerdisKIftet – Fra innsikt til nye fortrinn, av Marius Ottesen.",
      en: "Provisional cover for the book VerdisKIftet – From insight to new advantages, by Marius Ottesen.",
    },
  },
  bakside: {
    src: "/images/VerdisKIftet_BAKSIDE_24-10-2026.jpg",
    alt: {
      no: "Foreløpig bakomslag til fagboka VerdisKIftet – Fra innsikt til nye fortrinn, av Marius Ottesen.",
      en: "Provisional back cover for the book VerdisKIftet – From insight to new advantages, by Marius Ottesen.",
    },
  },
} as const;

const PARTS_NO: BokPartBlock[] = [
  {
    partLabel: "DEL I",
    partTitle: "SE OG FORSTÅ",
    journeyText:
      "Hvorfor må ledelsen forstå problemet før den velger løsning? Hvordan oppdager virksomheten endringer før de blir synlige i resultatene?",
    chapters: [
      { num: 1, title: "Se problemet før du løser det" },
      { num: 2, title: "Se før tallene blir røde" },
    ],
  },
  {
    partLabel: "DEL II",
    partTitle: "VELGE RETNING OG GRENSER",
    journeyText:
      "Hvordan prioritere når mange initiativer er viktige? Hva kreves av dømmekraft når mulighetsrommet vokser?",
    chapters: [
      { num: 3, title: "Når alt er viktig" },
      { num: 4, title: "Dømmekraft når mulighetsrommet vokser" },
    ],
  },
  {
    partLabel: "DEL III",
    partTitle: "MOBILISERE MENNESKER",
    journeyText:
      "Hvordan skape prestasjonsmiljøer der trygghet, krav, kultur, kompetanse og ledelse virker sammen?",
    chapters: [
      { num: 5, title: "Trygghet, krav og kultur" },
      { num: 6, title: "Du arver laget. Du eier utviklingen." },
    ],
  },
  {
    partLabel: "DEL IV",
    partTitle: "SKAPE KUNDEVERDI",
    journeyText:
      "Hvordan opplever kunden virksomheten som helhet? Hva skaper sammenhengende kundeopplevelser og sterkere lojalitet?",
    chapters: [
      { num: 7, title: "Kunden møter virksomheten, ikke organisasjonskartet" },
      { num: 8, title: "Fra tilfreds kunde til sterkere lojalitet" },
    ],
  },
  {
    partLabel: "DEL V",
    partTitle: "ENDRE ARBEIDET",
    journeyText:
      "Hvorfor stopper gode initiativer? Hvordan går virksomheten fra prioritering og intensjon til nye, varige arbeidsmåter?",
    chapters: [
      { num: 9, title: "Hvorfor gode initiativer stopper" },
      { num: 10, title: "Forbedre arbeidsmåten – eller tenke den på nytt?" },
      { num: 11, title: "Fra prioritering til ny praksis" },
    ],
  },
  {
    partLabel: "DEL VI",
    partTitle: "FORSTERKE MED KI",
    journeyText:
      "Hvordan bruke kunstig intelligens med utgangspunkt i reelle behov, pålitelig informasjon, ansvar og dokumentert virksomhetsverdi?",
    chapters: [
      { num: 12, title: "Start med behovet, ikke KI" },
      { num: 13, title: "Hva KI-svaret bygger på" },
      { num: 14, title: "Når KI får handle" },
      { num: 15, title: "Fra pilot til virksomhetsverdi" },
    ],
  },
  {
    partLabel: "DEL VII",
    partTitle: "LÆRE OG FORNYE",
    journeyText:
      "Hvordan utvikle evnen til å lære av erfaring og bruke denne læringen til å fornye virksomheten?",
    chapters: [
      { num: 16, title: "Bygge for å lære" },
      { num: 17, title: "Når har organisasjonen egentlig lært?" },
    ],
  },
];

const PARTS_EN: BokPartBlock[] = [
  {
    partLabel: "PART I",
    partTitle: "SEE AND UNDERSTAND",
    journeyText:
      "Why must leadership understand the problem before choosing a solution? How does the organisation notice change before it shows up in the results?",
    chapters: [
      { num: 1, title: "See the problem before you solve it" },
      { num: 2, title: "See before the figures turn red" },
    ],
  },
  {
    partLabel: "PART II",
    partTitle: "CHOOSE DIRECTION AND BOUNDARIES",
    journeyText:
      "How do you prioritise when many initiatives matter? What judgement is required when the space of possibilities grows?",
    chapters: [
      { num: 3, title: "When everything is important" },
      { num: 4, title: "Judgement when the space of possibilities grows" },
    ],
  },
  {
    partLabel: "PART III",
    partTitle: "MOBILISE PEOPLE",
    journeyText:
      "How do you build performance environments where psychological safety, demands, culture, competence and leadership work together?",
    chapters: [
      { num: 5, title: "Safety, demands and culture" },
      { num: 6, title: "You inherit the team. You own the development." },
    ],
  },
  {
    partLabel: "PART IV",
    partTitle: "CREATE CUSTOMER VALUE",
    journeyText:
      "How does the customer experience the organisation as a whole? What creates coherent customer experiences and stronger loyalty?",
    chapters: [
      { num: 7, title: "The customer meets the organisation, not the org chart" },
      { num: 8, title: "From satisfied customer to stronger loyalty" },
    ],
  },
  {
    partLabel: "PART V",
    partTitle: "CHANGE THE WORK",
    journeyText:
      "Why do good initiatives stall? How does the organisation move from prioritisation and intent to new, lasting ways of working?",
    chapters: [
      { num: 9, title: "Why good initiatives stall" },
      { num: 10, title: "Improve the way of working — or rethink it?" },
      { num: 11, title: "From prioritisation to new practice" },
    ],
  },
  {
    partLabel: "PART VI",
    partTitle: "REINFORCE WITH AI",
    journeyText:
      "How can artificial intelligence be used from real needs, reliable information, responsibility and documented business value?",
    chapters: [
      { num: 12, title: "Start with the need, not AI" },
      { num: 13, title: "What the AI answer builds on" },
      { num: 14, title: "When AI gets to act" },
      { num: 15, title: "From pilot to business value" },
    ],
  },
  {
    partLabel: "PART VII",
    partTitle: "LEARN AND RENEW",
    journeyText:
      "How do you develop the ability to learn from experience and use that learning to renew the organisation?",
    chapters: [
      { num: 16, title: "Build to learn" },
      { num: 17, title: "When has the organisation actually learned?" },
    ],
  },
];

export const BOK_PROSJEKT_COPY: Record<BokProsjektLang, BokProsjektCopy> = {
  no: {
    heroEyebrow: "Fagbok · I avsluttende redaksjonell fase",
    subtitle: "Fra innsikt til nye fortrinn",
    tagline: "Hvordan ledere skaper varige resultater når spillereglene endres.",
    heroIngress:
      "Hva skjer når virksomheter blir stadig bedre til å gjennomføre, men ikke nødvendigvis bedre til å forstå hva som bør gjøres? *VerdisKIftet* utforsker hvordan ledere kan skape varig verdi gjennom bedre forståelse, tydeligere valg, mennesker, gjennomføring og læring. Kunstig intelligens får sin plass i denne fortellingen som en forsterker av virksomhetens evne til å utvikle seg.",
    statsLine:
      "17 kapitler · 7 deler · Anslagsvis 280–330 sider (ordinært fagbokformat med god lesbarhet)",
    coverNote: "Foreløpig omslag — tittel og design er ikke endelig låst",
    heroCtaTestReader: "Interessert i å være testleser?",
    aboutTitle: "Når forståelse skal bli til varig verdi",
    aboutParagraphs: [
      "En virksomhet kan levere gode resultater og samtidig være i ferd med å miste konkurransekraft. Effektive arbeidsmåter, tydelige mål og gode rapporter forteller mye om hvordan virksomheten presterer i dag, men ikke nødvendigvis om den prioriterer det som blir viktig i morgen.",
      "*VerdisKIftet* handler om hvordan ledere kan forstå hva som virkelig skjer, ta bedre strategiske valg og skape forutsetninger for at beslutningene får betydning i menneskers arbeidshverdag.",
      "Boka undersøker sammenhengen mellom ledelse, mennesker, kunder, strategi, gjennomføring, teknologi og læring. Den bygger på en grunnleggende tanke: Varig verdi skapes ikke gjennom gode beslutninger alene, men gjennom virksomhetens evne til å omsette dem til praksis og lære av konsekvensene.",
    ],
    thesisQuote: "Forståelse må bli valg. Valg må bli praksis. Erfaring må bli læring.",
    partsTitle: "En sammenhengende reise gjennom syv deler",
    partsIntro:
      "Boka er bygget som en leserreise. Hver del utvikler et nytt spørsmål, samtidig som den bygger videre på forståelsen fra den forrige.",
    parts: PARTS_NO,
    chaptersTitle: "Bokas 17 kapitler",
    chaptersAccordionHint: "Kapitteltitler etter del — utvid for oversikt",
    dramaTitle: "Fra det første spørsmålet til det siste",
    dramaParagraphs: [
      "Boka åpner i et ledermøte. Tallene ligger på bordet, resultatene krever oppmerksomhet, og behovet for handling er tydelig. Men har ledergruppen forstått problemet før den bestemmer seg for løsningen?",
      "Gjennom de syv delene utvikles denne problemstillingen videre. Forståelse blir til strategiske valg, valg møter mennesker og arbeidsmåter, og erfaringene fra gjennomføringen blir grunnlaget for ny læring.",
      "Mot slutten vender boka tilbake til utgangspunktet. Spørsmålet er ikke bare om virksomheten har fått bedre resultater, men om den har lært nok til å utfordre sine tidligere svar, antakelser og spørsmål.",
    ],
    originTitle: "Fra over hundre faginnlegg til én sammenhengende bok",
    originParagraphs: [
      "Arbeidet begynte med faglige refleksjoner om ledelse, mennesker, strategi, kommersiell utvikling og teknologi. Gjennom mer enn hundre faginnlegg ble det etter hvert tydelig at mange av spørsmålene handlet om forskjellige sider av den samme utfordringen.",
      "Faginnleggene ble utgangspunktet, men boka er ikke en samling av dem. Erfaringer fra arbeidslivet, egne utviklingsprosjekter, fire master- og prosjektarbeider og ekstern forskning er bearbeidet til én sammenhengende fortelling.",
      "Målet har vært å skrive en fagbok som både utfordrer etablerte oppfatninger og gir ledere et bedre grunnlag for å forstå og utvikle virksomheten de har ansvar for.",
    ],
    statusTitle: "Et komplett manus – på vei mot utgivelse",
    statusParagraphs: [
      "Alle 17 kapitlene er skrevet, og boka har fått sin helhetlige form. Arbeidet er nå i den avsluttende redaksjonelle fasen, med særlig oppmerksomhet på sammenhengende bokprosa, kvalitet og leseropplevelse.",
      "Før utgivelse ønsker jeg også å invitere noen eksterne lesere til å vurdere manuset og gi ærlige, konstruktive tilbakemeldinger. Deretter følger den siste ferdigstillingen og bokproduksjonen.",
    ],
    statusDateNote: "Endelig utgivelsesdato er ikke fastsatt.",
    testReaderTitle: "Vil du bidra som testleser?",
    testReaderParagraphs: [
      "Jeg ønsker å få noen nye og kritiske blikk på manuset før boka ferdigstilles. Derfor vil jeg invitere et mindre antall lesere med relevant erfaring fra ledelse, strategi, organisasjonsutvikling, kommersiell utvikling eller teknologi.",
      "Jeg er særlig interessert i tilbakemeldinger på om argumentene er tydelige, om eksemplene treffer, og om boka gir en sammenhengende og engasjerende leseropplevelse.",
      "Hvis dette kunne vært interessant, setter jeg pris på en kort melding om din bakgrunn og hvorfor du ønsker å lese boka.",
    ],
    testReaderCta: "Meld interesse som testleser",
    closingTitle: "Videre lesning",
    closingIntro:
      "Boka står på egne ben, men deler kunnskapsgrunnlag med annet faglig arbeid på denne nettsiden.",
    linkArticles: "Faginnlegg",
    linkProjects: "Prosjekter",
    linkProfile: "Profil",
    linkContact: "Kontakt",
    backToArticles: "Tilbake til Faginnlegg",
  },
  en: {
    heroEyebrow: "Professional book · Final editorial phase",
    subtitle: "From insight to new advantages",
    tagline: "How leaders create lasting results when the rules of the game change.",
    heroIngress:
      "What happens when organisations get better at execution, but not necessarily better at understanding what should be done? *VerdisKIftet* explores how leaders can create lasting value through better understanding, clearer choices, people, execution and learning. Artificial intelligence has its place in this story as a reinforcer of the organisation’s ability to develop.",
    statsLine:
      "17 chapters · 7 parts · Approx. 280–330 pages (standard professional format with good readability)",
    coverNote: "Provisional cover — title and design are not yet final",
    heroCtaTestReader: "Interested in being a test reader?",
    aboutTitle: "When understanding must become lasting value",
    aboutParagraphs: [
      "An organisation can deliver good results and still be losing competitiveness. Effective ways of working, clear goals and good reports say much about how the organisation performs today, but not necessarily whether it prioritises what will matter tomorrow.",
      "*VerdisKIftet* is about how leaders can understand what is really happening, make better strategic choices and create conditions for decisions to matter in people’s everyday work.",
      "The book examines the links between leadership, people, customers, strategy, execution, technology and learning. It rests on a basic idea: lasting value is not created through good decisions alone, but through the organisation’s ability to turn them into practice and learn from the consequences.",
    ],
    thesisQuote: "Understanding must become choice. Choice must become practice. Experience must become learning.",
    partsTitle: "A coherent journey through seven parts",
    partsIntro:
      "The book is built as a reading journey. Each part develops a new question while building on the understanding from the previous one.",
    parts: PARTS_EN,
    chaptersTitle: "The book’s 17 chapters",
    chaptersAccordionHint: "Chapter titles by part — expand for overview",
    dramaTitle: "From the first question to the last",
    dramaParagraphs: [
      "The book opens in a leadership meeting. Figures are on the table, results demand attention, and the need for action is clear. But has the leadership team understood the problem before it decides on a solution?",
      "Through the seven parts this question develops further. Understanding becomes strategic choices, choices meet people and ways of working, and experience from execution becomes the basis for new learning.",
      "Towards the end the book returns to the starting point. The question is not only whether the organisation has improved its results, but whether it has learned enough to challenge its earlier answers, assumptions and questions.",
    ],
    originTitle: "From over a hundred articles to one coherent book",
    originParagraphs: [
      "The work began with professional reflections on leadership, people, strategy, commercial development and technology. Through more than a hundred articles it became clear that many questions were different sides of the same challenge.",
      "The articles were the starting point, but the book is not a collection of them. Experience from working life, development projects, four master’s and project theses and external research have been shaped into one coherent narrative.",
      "The aim has been to write a professional book that both challenges established views and gives leaders a stronger basis for understanding and developing the organisation they are responsible for.",
    ],
    statusTitle: "A complete manuscript — on the way to publication",
    statusParagraphs: [
      "All 17 chapters are written, and the book has found its overall form. Work is now in the final editorial phase, with particular attention to coherent book prose, quality and the reading experience.",
      "Before publication I also want to invite external readers to review the manuscript and give honest, constructive feedback. Then comes final completion and book production.",
    ],
    statusDateNote: "No publication date has been set.",
    testReaderTitle: "Would you like to contribute as a test reader?",
    testReaderParagraphs: [
      "I want fresh, critical eyes on the manuscript before the book is finished. I will invite a small number of readers with relevant experience in leadership, strategy, organisational development, commercial development or technology.",
      "I am especially interested in feedback on whether the arguments are clear, whether the examples land, and whether the book offers a coherent and engaging reading experience.",
      "If this could be of interest, I would appreciate a short message about your background and why you would like to read the book.",
    ],
    testReaderCta: "Register interest as test reader",
    closingTitle: "Further reading",
    closingIntro: "The book stands on its own, but shares a knowledge base with other professional work on this site.",
    linkArticles: "Articles",
    linkProjects: "Projects",
    linkProfile: "Profile",
    linkContact: "Contact",
    backToArticles: "Back to Articles",
  },
};
