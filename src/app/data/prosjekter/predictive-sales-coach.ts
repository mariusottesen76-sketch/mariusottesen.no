import { PSC_APP_URL } from "../../lib/psc-brand";
import { prosjektKontaktLenke } from "../../lib/prosjekt-lenker";

const pscAppLink = `<a href="${PSC_APP_URL}" target="_blank" rel="noopener noreferrer" aria-label="Åpne The Predictive Sales Coach v2.0" class="psc-app-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">The Predictive Sales Coach <span class="psc-v">v2.0</span></a>`;

export interface ProsjektType {
  id: string;
  tittel: { no: string; en: string };
  teaser: { no: string; en: string };
  bildeUrl: string;
  /**
   * natural – bilde i egen høyde, minimalt med tomrom (anbefalt for landskap og høye infografikker).
   * cover – fyller rammen 4:3, kan beskjæres (kun for motiver som tåler kutt).
   * @deprecated Bruk bildeRamme; bildePortrett=true tilsvarer natural.
   */
  bildePortrett?: boolean;
  bildeRamme?: "natural" | "cover";
  dato: string;
  visningsDato: string;
  innhold: { no: string; en: string };
  /** Kort undertekst under prosjektbildet (språkversjoner). */
  bildeHint?: { no: string; en: string };
  /** Valgfrie ekstra bilder (f.eks. QR) som vises i tekstkolonnen. */
  ekstraBilder?: { src: string; alt: { no: string; en: string } }[];
  /** Bilder rett under hovedbildet i venstre kolonne (klikkbare for zoom). */
  bilderUnderHovedbilde?: { src: string; alt: { no: string; en: string } }[];
  /** Valgfri knapp som bytter til en hovedfane (SPA), f.eks. Faginnlegg. */
  navigasjonsCta?: {
    tab: string;
    label: { no: string; en: string };
    /** Valgfri tekst over knappelenken – unngår duplikat i brødtekst. */
    beskrivelse?: { no: string; en: string };
  };
  /** Innebygd video (f.eks. Google Drive /preview-URL). Når satt, vises iframe i stedet for statisk bilde i listen. */
  videoEmbedUrl?: string;
  /** Lokal videofil (f.eks. /images/clip.mp4). Når satt, spilles den av med HTML5 video. */
  videoUrl?: string;
  /** Styrer videorammens proporsjoner – portrett (9:16) fyller kolonnebredden. */
  videoFormat?: "portrait" | "landscape";
}

export const predictiveSalesCoach: ProsjektType = {
  id: "predictive-sales-coach-2026",
  tittel: {
    no: "The Predictive Sales Coach v2.0: AI-basert salgstrening og møteforberedelse",
    en: "The Predictive Sales Coach v2.0: AI-based sales training and meeting preparation",
  },
  teaser: {
    no: "The Predictive Sales Coach (PSCv2.0) er en AI-basert salgstrenings- og analyseplattform for B2B-salg, møteforberedelse og mer presis kundedialog.",
    en: "The Predictive Sales Coach (PSCv2.0) is an AI-based sales training and analysis platform for B2B sales, meeting preparation and more precise customer dialogue.",
  },
  bildeUrl: "/images/sales-coach-new2.jpg",
  bildeRamme: "cover",
  dato: "2026-05-25",
  visningsDato: "25.05.26",
  bildeHint: {
    no: "Klikk på bildet for å se The Predictive Sales Coach i større format.",
    en: "Click the image to view The Predictive Sales Coach in a larger format.",
  },
  bilderUnderHovedbilde: [
    {
      src: "/images/psc-v6-hurtigoppsett.png?v=20260519",
      alt: {
        no: "PSCv2.0 hurtigoppsett – DISC-profil, salgsfase, kundens holdning og vanskelighetsgrad",
        en: "PSCv2.0 quick setup – DISC profile, sales phase, customer attitude and difficulty level",
      },
    },
    {
      src: "/images/QR-PSCv6.png?v=20260531",
      alt: {
        no: "QR-kode – skann for tilgang til The Predictive Sales Coach (PSCv2.0)",
        en: "QR code – scan for access to The Predictive Sales Coach (PSCv2.0)",
      },
    },
  ],
  innhold: {
    no: `<strong>Hva prosjektet er</strong>

PSCv2.0 er utviklet for selgere, salgsledere og kommersielle team som ønsker å trene mer målrettet før viktige kundemøter.

Løsningen kombinerer realistiske kundesimuleringer, DISC-inspirert kommunikasjon, salgsfaser, scenario-oppsett, evaluering og lederinnsikt. Målet er å flytte salgstrening nærmere virkelige kundesituasjoner.

<strong>Problemet prosjektet adresserer</strong>

Mange selgere trener for lite før viktige kundemøter. Forberedelser blir ofte generelle, kundeinnsikt brukes ujevnt, og salgsledere mangler strukturert innsikt i hvilke ferdigheter teamet faktisk må utvikle.

PSCv2.0 adresserer dette ved å gjøre møteforberedelse, rollespill, refleksjon og feedback mer konkret, repeterbart og målbart.

<strong>Hva som er bygget eller utviklet</strong>

Det er utviklet en AI-basert salgstreningsplattform med scenario-oppsett, kundetype, bransje, salgsfase, kundens holdning, vanskelighetsgrad, mål for møtet, simulert kundedialog og strukturert evaluering.

Løsningen inkluderer også DISC-inspirert selvkartlegging, støtte for ulike kundetyper, fasebasert feedback, scorecard, arkiv og grunnlag for lederinnsikt.

<strong>Hvordan det fungerer</strong>

Brukeren setter opp et realistisk kundescenario basert på hva som selges, kundens rolle, bransje, salgsfase, holdning, vanskelighetsgrad og ønsket møteutfall.

Deretter trener selgeren på kundedialogen. AI-en simulerer kunden, utfordrer selgeren, stiller oppfølgingsspørsmål og responderer på hvordan samtalen utvikler seg.

Etter økten får brukeren strukturert feedback på blant annet salgsfaseforståelse, DISC-tilpasning, verdiargumentasjon, spørreteknikk, innvendingshåndtering og kontroll på samtalen.

Målet er ikke bare å evaluere én samtale, men å vise hva som fungerte, hva som bør trenes videre på, og hvordan neste kundemøte kan gjennomføres bedre.

<strong>Hvorfor dette er relevant</strong>

PSCv2.0 er relevant for arbeidsgivere, salgsledere og kommersielle team som ønsker mer strukturert salgstrening, bedre møteforberedelser og mer presis coaching.

For arbeidsgivere viser prosjektet hvordan AI kan brukes til ferdighetsutvikling, onboarding, salgsledelse og kompetansekartlegging. For kunder viser det hvordan AI kan styrke prestasjon før møtet, ikke bare analysere resultatet etterpå.

<strong>Status og modenhet</strong>

PSCv2.0 er en lukket pilot og fungerer som en strukturert trenings-, evaluerings- og lederinnsiktsplattform.

Løsningen er tekstbasert for å trene presisjon i formuleringer, spørsmål, aktiv lytting og kundetilpasning. Speech-to-text og tale kan være aktuelle videreutviklingsspor, men tekstformatet er bevisst valgt i dagens versjon.

<strong>Mulig videreutvikling</strong>

PSCv2.0 er bygget for salgstrening, men grunnmodellen kan brukes i flere profesjonelle samtalesituasjoner.

Videre potensial inkluderer forhandlingstrening, intervjutrening, lederdialoger, kundeservice, rådgivning, vanskelige samtaler og andre situasjoner der trygghet, presisjon og tilpasning er avgjørende.

<strong>Hvordan PSCv2.0 skiller seg fra FlowSignal</strong>

PSCv2.0 handler primært om kundedialog, salgsfaser og kommersiell gjennomføring. FlowSignal handler primært om team, dagsform, rolleforståelse og intern samhandling.

Der PSCv2.0 trener selgeren på konkrete kundemøter, hjelper FlowSignal team å forstå hvordan mennesker samarbeider bedre i hverdagen.

<strong>Neste steg</strong>

Pilotflaten er tilgangsstyrt og brukes i avtalte testløp. ${prosjektKontaktLenke("no")} dersom du ønsker tilgang eller vil diskutere en mulig pilot. Når tilgang er avtalt, kan ${pscAppLink} brukes som del av et avgrenset testløp, workshop eller kommersielt utviklingsarbeid.`,
    en: `<strong>What the project is</strong>

PSCv2.0 is built for sales reps, sales leaders and commercial teams who want to train more purposefully before important customer meetings.

The solution combines realistic customer simulations, DISC-inspired communication, sales phases, scenario setup, evaluation and leadership insight. The goal is to move sales training closer to real customer situations.

<strong>The problem the project addresses</strong>

Many sales reps train too little before important customer meetings. Preparation is often generic, customer insight is used unevenly, and sales leaders lack structured insight into which skills the team actually needs to develop.

PSCv2.0 addresses this by making meeting preparation, role play, reflection and feedback more concrete, repeatable and measurable.

<strong>What has been built or developed</strong>

An AI-based sales training platform has been developed with scenario setup, customer type, industry, sales phase, customer attitude, difficulty level, meeting goals, simulated customer dialogue and structured evaluation.

The solution also includes DISC-inspired self-assessment, support for different customer types, phase-based feedback, scorecard, archive and a foundation for leadership insight.

<strong>How it works</strong>

The user sets up a realistic customer scenario based on what is being sold, the customer's role, industry, sales phase, attitude, difficulty level and desired meeting outcome.

The seller then trains on the customer dialogue. The AI simulates the customer, challenges the seller, asks follow-up questions and responds to how the conversation develops.

After the session, the user receives structured feedback on areas including sales phase understanding, DISC adaptation, value argumentation, questioning technique, objection handling and control of the conversation.

The goal is not only to evaluate one conversation, but to show what worked, what should be practised further, and how the next customer meeting can be conducted better.

<strong>Why this is relevant</strong>

PSCv2.0 is relevant for employers, sales leaders and commercial teams that want more structured sales training, better meeting preparation and more precise coaching.

For employers, the project shows how AI can be used for skills development, onboarding, sales leadership and competence mapping. For customers, it shows how AI can strengthen performance before the meeting, not only analyse results afterwards.

<strong>Status and maturity</strong>

PSCv2.0 is a closed pilot and functions as a structured training, evaluation and leadership insight platform.

The solution is text-based to train precision in wording, questions, active listening and customer adaptation. Speech-to-text and voice may be relevant further development tracks, but the text format is deliberately chosen in the current version.

<strong>Possible further development</strong>

PSCv2.0 is built for sales training, but the core model can be used in more professional conversation situations.

Further potential includes negotiation training, interview training, leadership dialogues, customer service, advisory conversations, difficult conversations and other situations where confidence, precision and adaptation are critical.

<strong>How PSCv2.0 differs from FlowSignal</strong>

PSCv2.0 is primarily about customer dialogue, sales phases and commercial execution. FlowSignal is primarily about teams, daily form, role understanding and internal collaboration.

Where PSCv2.0 trains the seller on concrete customer meetings, FlowSignal helps teams understand how people collaborate better in everyday work.

<strong>Next steps</strong>

The pilot environment is access-controlled and used in agreed test runs. ${prosjektKontaktLenke("en")} if you want access or to discuss a possible pilot. Once access is agreed, ${pscAppLink} can be used as part of a scoped test run, workshop or commercial development engagement.`,
  },
};
