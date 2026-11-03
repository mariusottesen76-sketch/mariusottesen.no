import type { FaginnleggInnlegg } from "../../lib/faginnlegg-types";
import { BOK_ROUTE } from "../bok-prosjekt-innhold";

const linkClass =
  "text-indigo-300 underline underline-offset-2 decoration-indigo-500/70 hover:text-indigo-200 transition-colors";

const ctaButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-5 py-3 text-sm font-bold uppercase tracking-widest text-indigo-200 hover:bg-indigo-500/20 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 no-underline decoration-transparent";

const bokHref = BOK_ROUTE.no;
const bokHrefEn = BOK_ROUTE.en;

export const femtiArSkrevetBok: FaginnleggInnlegg = {
  id: "femti-ar-skrevet-bok-2026-11",
  tittel: {
    no: "Femti år – og et nytt kapittel",
    en: "Fifty years — and a new chapter",
  },
  undertittel: {
    no: "50-årsdag og fagboka VerdisKIftet – Fra innsikt til nye fortrinn",
    en: "50th birthday and the book VerdisKIftet – From insight to new advantages",
  },
  teaser: {
    no: "50 år, et komplett bokmanus og neste kapittel: VerdisKIftet er en fortellende fagbok om ledelse, strategi, mennesker og gjennomføring — i avsluttende redaksjonell fase.",
    en: "Fifty years, a complete book manuscript and the next chapter: VerdisKIftet is a narrative professional book on leadership, strategy, people and execution — in final editorial phase.",
  },
  metaDescription: {
    no: "Lederinnlegg 04.11.26: 50 år, bokprosjektet VerdisKIftet (17 kapitler, 7 deler), hovedtese og invitasjon til testlesere.",
    en: "Leadership post 4 Nov 2026: turning 50, the VerdisKIftet book project (17 chapters, 7 parts), core thesis and invitation to test readers.",
  },
  dato: "2026-11-04",
  visningsDato: "04.11.26",
  kategori: "Strategi og virksomhetsutvikling",
  bildeUrl: "/images/50-skrevet-bok.png",
  bildeVersjon: "20261104",
  bildeModalBred: true,
  bildeAlt: {
    no: "50 år og skrevet bok — lederinnlegg om VerdisKIftet og nytt kapittel, Marius Ottesen.",
    en: "50 years and a written book — leadership post on VerdisKIftet and a new chapter, Marius Ottesen.",
  },
  link: "https://www.linkedin.com/in/mariusottesen/recent-activity/all/",
  hasTags: {
    no: "#Ledelse #Strategi #Transformasjon #Fagbok #VerdisKIftet",
    en: "#Leadership #Strategy #Transformation #ProfessionalBook #VerdisKIftet",
  },
  innhold: {
    no: `I dag fyller jeg 50 år! 🎉

Det er en milepæl i seg selv. Et halvt århundre med opplevelser, relasjoner og resultater jeg er stolt av. Og erfaringer som har lært meg mye om mennesker, ledelse og meg selv.

Jeg vil også dele noe jeg har arbeidet mye med det siste året, men fortalt lite om.

💥 <strong>Jeg har skrevet en bok</strong> 💥

Gjennom mer enn 25 år i arbeidslivet har jeg erfart hvordan strategi, mennesker, kunder og gjennomføring henger sammen. Jeg har studert til siviløkonom i USA, videreutdannet meg gjennom Executive Master of Management ved BI og nylig gjennomført Generative AI for Business. Jeg har også utviklet konsepter og løsninger der teori er prøvd mot praksis.

Det siste året har jeg skrevet over hundre faginnlegg, hovedsakelig om strategisk ledelse og transformasjon, og AI og fremtidens teknologiledelse. Underveis begynte jeg å se sammenhenger mellom spørsmål jeg tidligere hadde utforsket hver for seg.

Hvorfor skaper noen strategier varige resultater, mens andre stopper i gode intensjoner? Hvorfor kan gode tall skjule utfordringer som først blir synlige senere? Og hvordan blir innsikt til endret praksis?

Det ble starten på <strong>VerdisKIftet – Fra innsikt til nye fortrinn</strong>.

En fortellende fagbok om hvordan ledere skaper varige resultater når spillereglene endres. Ikke en samling tidligere innlegg, men én sammenhengende historie bygget på ledererfaring, faglig fordypning og utviklingsarbeid.

Bokas hovedargument er:

<strong>Forståelse må bli valg. Valg må bli praksis. Erfaring må bli læring.</strong>

Leseren følger reisen fra å se og forstå, velge retning og mobilisere mennesker, til å skape kundeverdi, endre arbeidsmåter, forsterke med KI og lære av erfaringene. KI åpner nye muligheter, men verdien avhenger av hvordan teknologien brukes sammen med menneskelig dømmekraft, ledelse og gjennomføring.

Alle 17 kapitlene er skrevet. Boka har fått sin helhetlige form, med syv deler og rundt 70 000 ord — anslagsvis 280–330 sider (ordinært fagbokformat med god lesbarhet). Nå gjenstår siste redaksjonelle gjennomgang og eksterne vurderinger før veien videre mot utgivelse. Tittel og omslag er foreløpige.

Fortellingen begynner i et ledermøte der resultatene utfordres og behovet for handling er tydelig. Mot slutten vender vi tilbake til den samme situasjonen, men med et nytt perspektiv. Har organisasjonen lært nok til å utfordre ikke bare svarene, men også spørsmålene den opprinnelig stilte?

👉 Jeg søker noen få kritiske testlesere med erfaring fra ledelse, strategi, organisasjonsutvikling eller teknologi. Vil du utfordre resonnementene og gi ærlige innspill, send meg gjerne en melding.

<a href="${bokHref}#bok-testleser" class="${ctaButtonClass}">Meld interesse som testleser</a>

👇 Mer informasjon om boka finner du på <a href="${bokHref}" class="${linkClass}">bokprosjektsiden</a> — med de syv delene og kapitteloversikten.

Og når vi først snakker om alder og nye kapitler:

Tanten min fylte nylig 100 år. Følger jeg hennes eksempel, er jeg bare halvveis. Jeg hadde aldri trodd at jeg skulle skrive en bok, og det minner meg om hvor mye som fortsatt kan skje. Jeg har mye igjen å lære og iverksette, og er fortsatt sulten på nye utfordringer.

50 år, altså. Det får være starten på neste kapittel!`,
    en: `Today I turn 50! 🎉

That is a milestone in itself. Half a century of experiences, relationships and results I am proud of — and lessons about people, leadership and myself.

I also want to share something I have worked on intensively over the past year, but spoken little about.

💥 <strong>I have written a book</strong> 💥

Over more than 25 years in working life I have seen how strategy, people, customers and execution connect. I studied business administration in the USA, continued with an Executive Master of Management at BI and recently completed Generative AI for Business. I have also developed concepts and solutions where theory has been tested against practice.

Over the past year I have written more than a hundred articles, mainly on strategic leadership and transformation, and on AI and the leadership of future technology. Along the way I began to see links between questions I had explored separately before.

Why do some strategies create lasting results while others stop at good intentions? Why can good figures hide challenges that only become visible later? And how does insight become changed practice?

That was the start of <strong>VerdisKIftet – From insight to new advantages</strong>.

A narrative professional book on how leaders create lasting results when the rules of the game change. Not a collection of earlier posts, but one coherent story built on leadership experience, professional depth and development work.

The book’s main argument is:

<strong>Understanding must become choice. Choice must become practice. Experience must become learning.</strong>

The reader follows the journey from seeing and understanding, choosing direction and mobilising people, to creating customer value, changing ways of working, reinforcing with AI and learning from experience. AI opens new possibilities, but the value depends on how technology is used together with human judgement, leadership and execution.

All 17 chapters are written. The book has found its overall form, with seven parts and around 70,000 words — approximately 280–330 pages (standard professional book format with good readability). What remains is final editorial review and external assessment before the path towards publication. Title and cover are provisional.

The story opens in a leadership meeting where results are challenged and the need for action is clear. Towards the end we return to the same situation, but with a new perspective. Has the organisation learned enough to challenge not only the answers, but also the questions it originally asked?

👉 I am looking for a few critical test readers with experience in leadership, strategy, organisational development or technology. If you would like to challenge the arguments and give honest input, please get in touch.

<a href="${bokHrefEn}#bok-testleser" class="${ctaButtonClass}">Register interest as test reader</a>

👇 More information about the book is on the <a href="${bokHrefEn}" class="${linkClass}">book project page</a> — including the seven parts and chapter overview.

And since we are talking about age and new chapters:

My aunt recently turned 100. If I follow her example, I am only halfway. I never thought I would write a book, and it reminds me how much can still happen. I still have much to learn and implement, and I remain hungry for new challenges.

Fifty years, then. Let it be the start of the next chapter!`,
  },
};
