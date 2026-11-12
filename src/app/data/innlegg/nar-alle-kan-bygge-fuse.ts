import type { FaginnleggInnlegg } from "../../lib/faginnlegg-types";
import { BOK_ROUTE } from "../bok-prosjekt-innhold";

const linkClass =
  "text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors";

const bokHref = BOK_ROUTE.no;
const bokHrefEn = BOK_ROUTE.en;

export const narAlleKanByggeFuse: FaginnleggInnlegg = {
  id: "nar-alle-kan-bygge-fuse-2026-11",
  tittel: {
    no: "Når alle kan bygge, hva bør vi bygge?",
    en: "When everyone can build, what should we build?",
  },
  undertittel: {
    no: "Refleksjoner fra Fuse: «Kan alt bygges med AI?»",
    en: "Reflections from Fuse: «Can everything be built with AI?»",
  },
  teaser: {
    no: "Etter Fuse-arrangementet om AI og produktutvikling: fra idé til løsning på dager, prioriteringer som betyr noe, og forskjellen på prototype og produkt — med paralleller til VerdisKIftet.",
    en: "After the Fuse event on AI and product development: from idea to solution in days, priorities that matter, and the gap between prototype and product — with parallels to VerdisKIftet.",
  },
  metaDescription: {
    no: "Faginnlegg 12.11.26: Fuse, AI-utvikling, kommersiell verdi, prioritering og forvaltning — og kobling til bokprosjektet VerdisKIftet.",
    en: "Article 12 Nov 2026: Fuse, AI development, commercial value, prioritisation and stewardship — and links to the VerdisKIftet book project.",
  },
  dato: "2026-11-12",
  visningsDato: "12.11.26",
  kategori: "AI / KI",
  bildeUrl: "/images/fuse.png",
  bildeVersjon: "20261112",
  bildeModalBred: true,
  bildeAlt: {
    no: "Fuse-arrangement om AI og produktutvikling — Marius Ottesen reflekterer over verdi og prioritering",
    en: "Fuse event on AI and product development — Marius Ottesen on value and prioritisation",
  },
  link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
  hasTags: {
    no: "#KunstigIntelligens #Innovasjon #Produktutvikling #Ledelse #VerdisKIftet",
    en: "#ArtificialIntelligence #Innovation #ProductDevelopment #Leadership #VerdisKIftet",
  },
  innhold: {
    no: `Det var et av spørsmålene jeg satt igjen med etter et interessant arrangement hos Fuse i går, der temaet var «Kan alt bygges med AI?».

Vi fikk høre om hvordan AI endrer utviklingen av digitale produkter, automatisering og forretningsmodeller. Ikke minst hvor raskt man nå kan gå fra en idé til en fungerende løsning.

Jeg kjenner meg igjen i mye av dette. Jeg utvikler selv flere AI-støttede løsninger og erfarer hvor mye som har endret seg på kort tid. Det som tidligere krevde betydelige utviklingsressurser, kan nå i mange tilfeller løses på dager eller uker.

I møte med kunder er det imidlertid sjelden teknologien i seg selv som er utgangspunktet. Det handler gjerne om å skape vekst, forbedre kundereiser, effektivisere arbeidsprosesser eller få mer ut av ressursene man allerede har.

Og nettopp derfor er det interessant å forstå hva som nå er teknisk mulig.

<h2>Tre ting jeg særlig tar med meg</h2>

<strong>1. Fra eksperimentering til verdi.</strong>
Mange virksomheter tester AI og opplever økt individuell produktivitet. Men hvordan omsetter vi dette til bedre resultater for virksomheten som helhet? Det krever mer enn tilgang til gode verktøy. Se også <a href="/faginnlegg/fra-pilot-til-skalering-01" class="${linkClass}">fra pilot til skalering</a>.

<strong>2. Raskere utvikling krever bedre prioriteringer.</strong>
Når stadig flere kan utvikle egne løsninger, øker også behovet for å forstå hvilke problemer som faktisk er verdt å løse. Det er lett å bli imponert over hva teknologien får til, men løser vi de riktige utfordringene?

<strong>3. Det er forskjell på å bygge og å forvalte.</strong>
En fungerende prototype er ikke nødvendigvis et ferdig produkt. Sikkerhet, datakvalitet, integrasjoner og vedlikehold krever fortsatt kompetanse og oppfølging. De siste 20 prosentene kan være de mest krevende.

Et annet interessant perspektiv var hvordan skillet mellom teknologer, forretningsutviklere og andre fagmiljøer blir mindre tydelig. Flere kan bidra direkte i utviklingen, men behovet for samarbeid og fagkompetanse forsvinner ikke.

Takk til Fuse for et hyggelig, interessant og lærerikt arrangement!

💥 Det var også interessant å høre hvor mye av dette som går igjen i min egen bok, <a href="${bokHref}" class="${linkClass}">«VerdisKIftet – Fra innsikt til nye fortrinn»</a>.

Boken handler om hvordan vi som ledere kan skape varige resultater når spillereglene endres. Strategi, mennesker, kunder, teknologi og gjennomføring står sentralt. KI er en viktig del av dette, men langt fra hele historien.

Mange av refleksjonene fra arrangementet bekrefter problemstillinger jeg har arbeidet med gjennom det siste året. Ikke minst at teknologiske muligheter alene ikke skaper verdi. Det avgjørende er hva vi velger å gjøre med dem.

Jeg har nå fått fire testlesere som har sagt ja til å lese manus og gi tilbakemeldinger. Det setter jeg stor pris på!

Dersom flere kunne tenke seg å lese og gi konstruktive innspill, er det bare å sende meg en personlig melding — eller melde interesse via <a href="${bokHref}#bok-testleser" class="${linkClass}">bokprosjektsiden</a>.`,
    en: `That was one of the questions I was left with after an interesting event at Fuse yesterday, on the theme «Can everything be built with AI?».

We heard how AI is changing the development of digital products, automation and business models — not least how quickly you can now move from an idea to a working solution.

I recognise much of this. I develop several AI-supported solutions myself and see how much has shifted in a short time. What used to require substantial development resources can often now be solved in days or weeks.

In customer conversations, however, technology alone is rarely the starting point. It is usually about growth, better customer journeys, more efficient workflows, or getting more from the resources you already have.

That is why it matters to understand what is technically possible now.

<h2>Three takeaways in particular</h2>

<strong>1. From experimentation to value.</strong>
Many organisations test AI and see higher individual productivity. But how do we turn that into better results for the organisation as a whole? That takes more than access to good tools. See also <a href="/en/articles/fra-pilot-til-skalering-01" class="${linkClass}">from pilot to scale</a>.

<strong>2. Faster development needs better prioritisation.</strong>
When more people can build their own solutions, the need grows to understand which problems are actually worth solving. It is easy to be impressed by what technology can do — but are we solving the right challenges?

<strong>3. Building is not the same as stewardship.</strong>
A working prototype is not necessarily a finished product. Security, data quality, integrations and maintenance still require skill and follow-through. The last 20 per cent can be the hardest.

Another interesting angle was how the line between technologists, business developers and other disciplines is becoming less clear. More people can contribute directly to development — but the need for collaboration and professional judgment does not go away.

Thank you to Fuse for a friendly, interesting and instructive event!

💥 It was striking how much of this echoes my own book, <a href="${bokHrefEn}" class="${linkClass}">«VerdisKIftet – From insight to new advantages»</a>.

The book is about how leaders create lasting results when the rules of the game change. Strategy, people, customers, technology and execution are central. AI is an important part of that story — but far from all of it.

Many reflections from the event confirm themes I have worked on over the past year — especially that technological possibility alone does not create value. What matters is what we choose to do with it.

Four test readers have now agreed to read the manuscript and give feedback. I am genuinely grateful!

If others would like to read and offer constructive input, feel free to send me a direct message — or register interest on the <a href="${bokHrefEn}#bok-testleser" class="${linkClass}">book project page</a>.`,
  },
};
