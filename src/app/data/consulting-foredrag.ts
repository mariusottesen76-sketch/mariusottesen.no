import { Lang } from "../LanguageContext";

export type ForedragKort = { title: string; text: string };

const data = {
  no: {
    title: "Foredrag og workshops",
    ingress:
      "Jeg holder foredrag, workshops og ledergruppesamlinger for virksomheter som ønsker praktiske perspektiver på kommersiell ledelse, salgsutvikling, transformasjon, AI og gjennomføring.",
    stotte:
      "Formatet tilpasses målgruppen – fra korte inspirasjonsforedrag til praktiske workshops, ledergruppesamlinger eller oppstartsmøter som kan lede videre til konkrete forbedringsløp.",
    kort: [
      {
        title: "Kommersiell ledelse i endring",
        text: "Hvordan skape retning, prioritering og gjennomføring når marked, teknologi og arbeidsformer endrer seg.",
      },
      {
        title: "AI som praktisk lederkompetanse",
        text: "Hvordan ledere kan bruke AI til bedre beslutningsstøtte, arbeidsflyt og kommersiell verdi – uten å starte med teknologi for teknologiens skyld.",
      },
      {
        title: "Verdilekkasjer i salg, CRM og kundedialog",
        text: "Hvor SMB-bedrifter ofte taper tid, kunder, kvalitet og kapasitet – og hvordan dette kan kartlegges og forbedres.",
      },
      {
        title: "Fra CRM-data til kommersiell handling",
        text: "Hvordan salgsledere kan bruke CRM, kundeinnsikt og bedre oppfølgingslogikk til sterkere salgsledelse.",
      },
      {
        title: "Leder som salgscoach",
        text: "Hvordan salgsledere kan gå fra aktivitetskontroll til prestasjonsutvikling, læring og bedre kundemøter.",
      },
      {
        title: "Team, samhandling og gjennomføring",
        text: "Hvordan tydeligere forventninger, styrker, dialog og lederrytme kan gi bedre prestasjon over tid.",
      },
    ] satisfies ForedragKort[],
    formaterLabel: "Mulige formater",
    formater: [
      "Inspirasjonsforedrag, 30–45 minutter",
      "Workshop, 2–3 timer",
      "Ledergruppesamling, halv dag",
      "Oppstartssamling før sprint eller utviklingsløp",
    ],
    cta: "Book en prat om foredrag eller workshop",
  },
  en: {
    title: "Talks and workshops",
    ingress:
      "I deliver talks, workshops and leadership team sessions for organisations that want practical perspectives on commercial leadership, sales development, transformation, AI and execution.",
    stotte:
      "The format is adapted to the audience — from short inspirational talks to practical workshops, leadership team sessions or kick-off meetings that can lead into concrete improvement programmes.",
    kort: [
      {
        title: "Commercial leadership in change",
        text: "How to create direction, prioritisation and execution when markets, technology and ways of working are shifting.",
      },
      {
        title: "AI as practical leadership competence",
        text: "How leaders can use AI for better decision support, workflow and commercial value — without starting with technology for its own sake.",
      },
      {
        title: "Value leaks in sales, CRM and customer dialogue",
        text: "Where SMBs often lose time, customers, quality and capacity — and how this can be mapped and improved.",
      },
      {
        title: "From CRM data to commercial action",
        text: "How sales leaders can use CRM, customer insight and better follow-up logic for stronger sales leadership.",
      },
      {
        title: "Leader as sales coach",
        text: "How sales leaders can move from activity control to performance development, learning and better customer meetings.",
      },
      {
        title: "Team, collaboration and execution",
        text: "How clearer expectations, strengths, dialogue and leadership rhythm can improve performance over time.",
      },
    ] satisfies ForedragKort[],
    formaterLabel: "Possible formats",
    formater: [
      "Inspirational talk, 30–45 minutes",
      "Workshop, 2–3 hours",
      "Leadership team session, half day",
      "Kick-off before sprint or development programme",
    ],
    cta: "Book a conversation about a talk or workshop",
  },
};

export function getConsultingForedragData(lang: Lang) {
  return data[lang];
}
