/**
 * Levende innhold for bokprosjektet — oppdater seksjoner her etter hvert som manus og struktur modnes.
 */
export type BokProsjektLang = "no" | "en";

export interface BokProsjektCopy {
  eyebrow: string;
  subtitle: string;
  tagline: string;
  coverNote: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  journeyTitle: string;
  journeyIntro: string;
  journeySteps: string[];
  aiTitle: string;
  aiParagraphs: string[];
  audienceTitle: string;
  audienceParagraph: string;
  evidenceTitle: string;
  evidenceParagraphs: string[];
  authorTitle: string;
  authorParagraphs: string[];
  statusTitle: string;
  statusParagraphs: string[];
  exploreArticlesLink: string;
  backToArticles: string;
}

export const BOK_ROUTE = { no: "/bok", en: "/en/book" } as const;

/** Offentlig tittel — samme på norsk og engelsk. */
export const BOK_TITTEL = "VerdisKIftet" as const;

/** Resultater / MOC: ett punkt, HTML-lenker via callback. */
export function getBokResultatPunktHtml(
  lang: BokProsjektLang,
  link: (href: string, label: string) => string,
  bokHref: string,
  faginnleggHref: string,
  faginnleggLinkLabel: string,
): string {
  const bok = link(bokHref, BOK_TITTEL);
  const fag = link(faginnleggHref, faginnleggLinkLabel);
  if (lang === "en") {
    return `A major professional book is nearing completion: ${bok} — in development with a coherent, locked manuscript (17 chapters in seven parts), built on 25+ years of leadership and work experience, 100+ ${fag}, four graduate and project papers, and practical development and AI projects. Editorial quality assurance and book production continue.`;
  }
  return `Et større faglig arbeid nærmer seg ferdigstilling: ${bok} – fagbok under utvikling med samlet, faglig låst manus (17 kapitler fordelt på syv deler), bygget på 25+ års leder- og arbeidserfaring, 100+ ${fag}, fire master- og prosjektarbeider og praktiske utviklings- og KI-prosjekter. Redaksjonell kvalitetssikring og bokproduksjon pågår.`;
}

/** Foreløpige omslag — filer i public/images (ikke dupliser eller gi nye navn). */
export const BOK_OMSLAG = {
  forside: {
    src: "/images/VerdisKIftet_forside.jpg",
    alt: {
      no: "Foreløpig omslag til fagboka VerdisKIftet – Fra innsikt til nye fortrinn, av Marius Ottesen.",
      en: "Provisional cover for the book VerdisKIftet – From insight to new advantages, by Marius Ottesen.",
    },
  },
  bakside: {
    src: "/images/VerdisKIftet_bakside.jpg",
    alt: {
      no: "Foreløpig bakomslag til fagboka VerdisKIftet – Fra innsikt til nye fortrinn, av Marius Ottesen.",
      en: "Provisional back cover for the book VerdisKIftet – From insight to new advantages, by Marius Ottesen.",
    },
  },
} as const;

export const BOK_PROSJEKT_COPY: Record<BokProsjektLang, BokProsjektCopy> = {
  no: {
    eyebrow: "Bokprosjekt · under utvikling",
    subtitle: "Fra innsikt til nye fortrinn",
    tagline: "Hvordan ledere skaper varige resultater når spillereglene endres",
    coverNote: "Foreløpig omslag — tittel og design er ikke endelig låst",
    aboutTitle: "Når gode resultater ikke forteller hele historien",
    aboutParagraphs: [
      "En virksomhet kan nå målene sine, gjennomføre strategien og lykkes med digitaliseringen, og likevel være i ferd med å miste konkurransekraft. Resultatene forteller hvordan virksomheten presterer innenfor rammene den har valgt. De forteller ikke nødvendigvis om rammene fortsatt er de riktige.",
      "Dette dilemmaet blir stadig mer relevant. Kundebehov endres, nye konkurrenter utfordrer etablerte forretningsmodeller, og kunstig intelligens utvider mulighetene for hvordan vi kan arbeide og skape verdi. Samtidig må virksomheter levere resultater, utvikle medarbeidere og prioritere mellom flere gode initiativer.",
      "*VerdisKIftet* handler om ledelse i dette spenningsfeltet. Boka undersøker hvordan vi kan forstå virksomheten bedre, gjøre tydeligere valg og omsette dem til praksis gjennom mennesker, samhandling og arbeidsmåter. Og ikke minst hvordan erfaringene fra det vi gjør, kan gjøre organisasjonen bedre rustet til å møte neste endring.",
    ],
    journeyTitle: "Fra innsikt til nye fortrinn",
    journeyIntro:
      "Boka følger en sammenhengende reise fra forståelse til handling og læring.\n\nDen begynner med lederens evne til å se bak resultatene og oppdage endringer som ennå ikke har blitt tydelige. Deretter handler det om å velge retning, prioritere og mobilisere menneskene som skal gjennomføre valgene.\n\nVidere undersøkes hvordan virksomheten skaper verdi i møtet med kundene, og hvorfor nye strategier og gode initiativer må få konsekvenser for det daglige arbeidet. Kunstig intelligens får en sentral plass som en mulighet til å støtte, forbedre eller tenke arbeidsmåtene på nytt.\n\nReisen avsluttes med et spørsmål som går gjennom hele boka: Hvordan sørger vi for at erfaringene fra det vi gjør, også forandrer måten organisasjonen arbeider på?",
    journeySteps: ["SE", "VELGE", "MOBILISERE", "SKAPE VERDI", "ENDRE", "FORSTERKE", "LÆRE"],
    aiTitle: "Når KI utvider mulighetene",
    aiParagraphs: [
      "Kunstig intelligens er en vesentlig del av boka, men ikke dens eneste tema. Teknologien kan gi bedre tilgang til informasjon, støtte beslutninger og endre hvordan oppgaver utføres. Samtidig stiller den nye krav til kunnskap, organisering, ansvar og ledelse.",
      "Det avgjørende er derfor ikke bare hvilke nye løsninger virksomheten kan ta i bruk. Det er også hvilke problemer den forsøker å løse, hvilke arbeidsmåter som bør endres, og hvordan nye muligheter kan bli til resultater som varer.",
      "Boka ser på KI som en del av en større ledelsesutfordring: Å forstå hva virksomheten trenger, mobilisere menneskene som skal skape endringen, og lære av det som skjer når nye løsninger møter arbeidshverdagen.",
    ],
    audienceTitle: "For ledere som skal skape resultater og utvikle virksomheten videre",
    audienceParagraph:
      "Boka henvender seg til ledere og nøkkelpersoner som har ansvar for å skape resultater gjennom mennesker, kunder, beslutninger og arbeidsmåter.\n\nDen er skrevet for dem som skal levere i dag, samtidig som de må utvikle virksomhetens evne til å lykkes i morgen. Det gjelder enten ansvaret omfatter en hel virksomhet, et forretningsområde, et team eller en viktig endringsprosess.\n\nAmbisjonen er å gi leseren nye perspektiver på utfordringer fra egen arbeidshverdag og et bedre grunnlag for å forstå, prioritere, gjennomføre og lære. Boka presenterer ikke én universell oppskrift, men undersøker hva som gjør ulike valg og tiltak relevante i forskjellige situasjoner.",
    evidenceTitle: "Fra erfaring og forskning til én sammenhengende bok",
    evidenceParagraphs: [
      "Boka bygger på et omfattende faglig grunnlag utviklet gjennom mer enn 25 års leder- og arbeidserfaring, over 100 publiserte faginnlegg og refleksjoner, fire master- og prosjektarbeider, praktiske utviklingsprosjekter og relevant forskning.",
      "Gjennom arbeid med blant annet kommersiell ledelse, mennesker, strategi, kunder, gjennomføring og KI har jeg stadig vendt tilbake til spørsmålene om hvorfor noen valg skaper verdi, hvorfor gode initiativer kan stoppe opp, og hvordan virksomheter utvikler evnen til å lære og fornye seg.",
      "Faginnleggene og erfaringene har vært råstoff for bokarbeidet. De er ikke samlet som enkeltstående artikler, men bearbeidet til én fortellende fagbok med et gjennomgående argument og en bevisst leserreise.",
    ],
    authorTitle: "Om forfatteren",
    authorParagraphs: [
      "Marius Ottesen er utdannet siviløkonom og har bred erfaring fra kommersiell ledelse, salg og virksomhetsutvikling på tvers av flere bransjer. Han har arbeidet med strategiske prioriteringer, medarbeiderutvikling, kundearbeid og gjennomføring, og har de senere årene utviklet og prøvd ut KI-løsninger for ulike arbeidsprosesser.",
      "Han har en Master of Science in Business Administration fra USA, Executive Master of Management fra Handelshøyskolen BI og masterkurset *Generative AI for Business*. I arbeidet sitt kombinerer han praktisk ledererfaring med forskning, læring og interesse for nye måter å utvikle virksomheter på.",
    ],
    statusTitle: "Boka er under utvikling",
    statusParagraphs: [
      "*VerdisKIftet* består av et samlet arbeidsmanus med 17 kapitler fordelt på syv deler. Kapitlene er faglig låste arbeidsmanus, mens arbeidet med kildekontroll, redaksjonell kvalitetssikring, bokproduksjon og utgivelsesforberedelser fortsetter.",
      "Tittel og omslag er foreløpige. Utgivelsesdato er ikke fastsatt.",
    ],
    exploreArticlesLink: "Utforsk faginnleggene",
    backToArticles: "Tilbake til Faginnlegg",
  },
  en: {
    eyebrow: "Book project · work in progress",
    subtitle: "From insight to new advantages",
    tagline: "How leaders create lasting results when the rules of the game change",
    coverNote: "Provisional cover — title and design are not yet final",
    aboutTitle: "When good results do not tell the whole story",
    aboutParagraphs: [
      "An organisation can hit its targets, execute its strategy and succeed with digitalisation, and still be losing competitiveness. Results show how the organisation performs within the frames it has chosen. They do not necessarily show whether those frames are still the right ones.",
      "This dilemma is becoming more relevant. Customer needs change, new competitors challenge established business models, and artificial intelligence expands how we can work and create value. At the same time, organisations must deliver results, develop people and prioritise among many good initiatives.",
      "*VerdisKIftet* is about leadership in this tension. The book explores how we can understand the organisation better, make clearer choices and turn them into practice through people, collaboration and ways of working — and how experience from what we do can prepare the organisation for the next change.",
    ],
    journeyTitle: "From insight to new advantages",
    journeyIntro:
      "The book follows a coherent journey from understanding to action and learning.\n\nIt begins with the leader’s ability to see beyond results and notice changes that are not yet visible. Then it is about choosing direction, prioritising and mobilising the people who will execute those choices.\n\nNext it examines how the organisation creates value in meeting customers, and why new strategies and good initiatives must change everyday work. Artificial intelligence has a central place as a way to support, improve or rethink ways of working.\n\nThe journey ends with a question that runs through the book: How do we ensure that experience from what we do also changes how the organisation works?",
    journeySteps: ["SEE", "CHOOSE", "MOBILISE", "CREATE VALUE", "CHANGE", "REINFORCE", "LEARN"],
    aiTitle: "When AI expands the possibilities",
    aiParagraphs: [
      "Artificial intelligence is an important part of the book, but not its only theme. The technology can improve access to information, support decisions and change how tasks are performed. At the same time it places new demands on knowledge, organisation, responsibility and leadership.",
      "What matters is not only which new solutions the organisation can adopt, but which problems it is trying to solve, which ways of working should change, and how new possibilities become results that last.",
      "The book treats AI as part of a broader leadership challenge: understanding what the organisation needs, mobilising the people who will create change, and learning from what happens when new solutions meet everyday work.",
    ],
    audienceTitle: "For leaders who must deliver results and develop the organisation",
    audienceParagraph:
      "The book is written for leaders and key people responsible for results through people, customers, decisions and ways of working.\n\nIt is for those who must deliver today while building the organisation’s ability to succeed tomorrow — whether that responsibility covers the whole company, a business area, a team or an important change process.\n\nThe aim is to give readers new perspectives on challenges from their own working life and a stronger basis to understand, prioritise, execute and learn. The book does not offer one universal recipe, but explores what makes different choices and actions relevant in different situations.",
    evidenceTitle: "From experience and research to one coherent book",
    evidenceParagraphs: [
      "The book draws on more than 25 years of leadership and work experience, over 100 published articles and reflections, four master’s and project theses, practical development projects and relevant research.",
      "Through work in commercial leadership, people, strategy, customers, execution and AI, I have kept returning to why some choices create value, why good initiatives stall, and how organisations develop the ability to learn and renew.",
      "Articles and experience have been raw material for the book. They are not republished as standalone pieces, but shaped into one narrative professional book with a clear argument and reading journey.",
    ],
    authorTitle: "About the author",
    authorParagraphs: [
      "Marius Ottesen is a business graduate with broad experience in commercial leadership, sales and business development across several industries. He has worked with strategic priorities, people development, customer work and execution, and in recent years has developed and tested AI solutions for different work processes.",
      "He holds a Master of Science in Business Administration from the USA, an Executive Master of Management from BI Norwegian Business School and the master’s course *Generative AI for Business*. In his work he combines practical leadership experience with research, learning and interest in new ways to develop organisations.",
    ],
    statusTitle: "The book is in development",
    statusParagraphs: [
      "*VerdisKIftet* consists of a single working manuscript with 17 chapters in seven parts. Chapters are locked as working manuscripts; source control, editorial quality assurance, book production and publication preparation continue.",
      "Title and cover are provisional. No publication date has been set.",
    ],
    exploreArticlesLink: "Explore the articles",
    backToArticles: "Back to Articles",
  },
};
