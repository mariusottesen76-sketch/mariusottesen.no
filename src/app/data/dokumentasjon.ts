import { Lang } from "../LanguageContext";

const data = {
  no: {
    tittel: "Profil og Kvalifikasjoner",
    intro: "Her finner du min CV og en åpen søknad som gir et dypere innblikk i min erfaring og hvordan jeg skaper vekst. Disse kan du lese direkte her på siden, laste ned eller printe ut ved behov.",
    linkedinTekst: "Ønsker du å besøke min LinkedIn-profil for mer informasjon, trykk på linken under:",
  },
  en: {
    tittel: "Profile & Qualifications",
    intro: "Here you will find my CV and an open application that provides deeper insight into my experience and how I drive growth. You can read these directly on the site, download, or print as needed.",
    linkedinTekst: "Would you like to visit my LinkedIn profile for more information? Click the link below:",
  },
};

export function getDokumentasjonData(lang: Lang) {
  return data[lang];
}

export const dokumentasjonData = data.no;

export const linkedinUrl = "https://www.linkedin.com/in/mariusottesen/";