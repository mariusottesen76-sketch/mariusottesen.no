export interface Referanse {
  id: string;
  navn: string;
  tittel: string;
  relasjon: string;
  dato: string;
  sorteringsDato: string; // YYYY-MM-DD for korrekt sortering
  tekst: string;
  linkedinUrl?: string;
}

export const referanserData: Referanse[] = [
  {
    id: "thomas-falch",
    navn: "Thomas Falch",
    tittel: "Markedsansvarlig Industri",
    relasjon: "Thomas rapporterte direkte til Marius",
    dato: "20. desember 2025",
    sorteringsDato: "2025-12-20",
    tekst: "Jeg trivdes godt med Marius som leder. Det var godt humør, fokus på salg og hvordan vi kunne oppnå resultater. Det var motiverende å jobbe mot felles mål og oppnå dem. Jeg fikk flere muligheter til å utvikle meg, og mine innspill ble lyttet til. Marius jobbet hardt for å forbedre salgsprestasjoner i teamet og lyktes med det.",
    linkedinUrl: "https://www.linkedin.com/in/mariusottesen/details/recommendations/",
  },
  {
    id: "agnese-daniluka",
    navn: "Agnese Daniluka",
    tittel: "Identitetsdesigner / ICF Certified Professional Coach",
    relasjon: "Agnese var klient til Marius",
    dato: "16. oktober 2025",
    sorteringsDato: "2025-10-16",
    tekst: `Jeg hadde gleden av å samarbeide med Marius da han inviterte meg til å gjennomføre utviklingsprosjektet «Du er her for mer enn et salgsbudsjett. Når du eier det – sa skjer det!» for hele det kommersielle teamet i Franzefoss Gjenvinning. Allerede fra første stund var det tydelig at Marius er en engasjert og fremtidsrettet leder som virkelig investerer i faglig utvikling og kompetansebygging hos sine medarbeidere.

Marius forstår at reelle resultater skapes når mennesker blir sett, verdsatt og motivert. Han kombinerer tydelig strategisk retning med et sterkt fokus på personlig utvikling og eierskap i teamet – noe som også reflekteres i prosjektets tittel og budskap. Dette kom tydelig til uttrykk i hvordan medarbeiderne responderte: med energi, åpenhet og ekte engasjement. En av deltakerne oppsummerte det treffende: «Dette ga meg et løft jeg trengte.» Det vitner om en sterk kultur preget av tillit, tydelig lederskap og utviklingsfokus.

Gjennom gode og faglige samtaler i forkant og underveis fikk jeg også oppleve en leder med solid teoretisk ballast og dyp forståelse for hva som skaper prestasjoner over tid. Marius evner å koble strategisk tenkning med menneskelig innsikt – en kombinasjon som gjør ham til en leder som både leverer resultater og utvikler mennesker.

Jeg håper virkelig å få muligheten til å samarbeide med Marius igjen, og kan varmt anbefale ham som en tydelig, kunnskapsrik og inspirerende leder.`,
    linkedinUrl: "https://www.linkedin.com/in/mariusottesen/details/recommendations/",
  },
  {
    id: "ramo-ridderberg",
    navn: "Ramo Ridderberg",
    tittel: "Foredragsholder, trener, mentor og autorisert styremedlem",
    relasjon: "Ramo var mentor til Marius",
    dato: "2. juni 2025",
    sorteringsDato: "2025-06-02",
    tekst: `Jeg har jobbet med Marius over en lengre periode og blitt godt kjent med ham som salgsleder. Han har en krevende oppgave med ansvar for mange selgere, og det styrer han med stort engasjement og høy arbeidskapasitet.

Marius er en entusiast som brenner for å skape resultater. Han er ikke redd for å ta tak, gjøre nødvendige endringer og stille tydelige krav for å få teamet sitt til å fungere best mulig. Det er tydelig at han bryr seg om at folk rundt ham lykkes, og han legger ned en betydelig innsats for å få det til.

En leder som står i stormen og går foran når det trengs.`,
    linkedinUrl: "https://www.linkedin.com/in/mariusottesen/details/recommendations/",
  },
  {
    id: "paal-brovold",
    navn: "Pål Brovold",
    tittel: "Salgssjef og Prosjektleder hos Alles Miljø AS",
    relasjon: "Pål rapporterte direkte til Marius",
    dato: "7. desember 2020",
    sorteringsDato: "2020-12-07",
    tekst: "Marius er en klar og tydelig leder som jeg ved mange anledninger hadde gode og produktive samtaler med. Med meget god arbeidskapasitet ble man både hørt, men også stilt krav til som arbeidstager. Marius fungerer også godt under press og klarer å omstille krav ovenfra til forståelige mål for oss som ansatte. Jeg kan bare gratulere til de som får jobbe sammen med Marius da de får en dyktig leder, god kollega og sikkert en og annen god samtale med på kjøpet.",
    linkedinUrl: "https://www.linkedin.com/in/mariusottesen/details/recommendations/",
  },
  {
    id: "christian-thorrud",
    navn: "Christian Thorrud",
    tittel: "General Manager, Owner at Craft Beverages AS",
    relasjon: "Christian rapporterte direkte til Marius",
    dato: "22. november 2015",
    sorteringsDato: "2015-11-22",
    tekst: "I was recruited to Mundipharma by Marius and had the pleasure of working with him as my closest leader. Marius is a very team oriented leader, he constantly works hard to motivate his employees and succeeds at a high level. Norspan became a huge success, and became the best-selling product in Norway among all European countries. We had great fun and at the same time worked in a very professional manner. Marius has a strategic and commercial focus. He easily adapts changing environments and enjoys the pursuit of improving processes and results. He is structured and delivers high quality work. Marius gains easily new knowledge and has a huge working capacity. I have also learned to know Marius as being a social person, who is dedicated in what he does – both inside and outside the professional arena. He is inspiring to be with, competitive, professional, honest and I can highly recommend Marius as a leader.",
    linkedinUrl: "https://www.linkedin.com/in/mariusottesen/details/recommendations/",
  },
  {
    id: "magnus-aasjord",
    navn: "Magnus Sæther Aasjord",
    tittel: "Head of Broadband & Home Network at Telenor Norge",
    relasjon: "Magnus studerte sammen med Marius",
    dato: "7. september 2015",
    sorteringsDato: "2015-09-07",
    tekst: "I enjoyed 3 years of studying with Marius at BI's executive master program. Marius was always very engaged in class-discussions, casework and other assignments where the students' contributions were necessary. What he does the best is the way he turns the theoretical fundamentals into relevant and real-life settings and practical examples – a skill that is key for transforming knowledge into what matters when striving for achieving excellent business-results. In addition, Marius is very structured, inspiring and up to date on different affairs when it comes to commerce, politics and economics. I learned a lot from being his co-student, and appreciated his cooperative skills.",
    linkedinUrl: "https://www.linkedin.com/in/mariusottesen/details/recommendations/",
  },
  {
    id: "tina-gullaksen",
    navn: "Tina Gullaksen",
    tittel: "Personal og HR ansvarlig i TBM & Anlegg AS",
    relasjon: "Tina rapporterte direkte til Marius",
    dato: "3. september 2015",
    sorteringsDato: "2015-09-03",
    tekst: "In Marius you can see what a good leader is all about! He is great at motivating his employees, providing timely and accurate feedback and in getting the best out of each individual focusing their strengths. He is very dedicated and goes \"all in\" when approaching different tasks. Not to mention his ability to provide a good working environment for his team where people around him feels well and engaged. Marius' working-capacity has always impressed me, and he has been my best manager in my career so far.",
    linkedinUrl: "https://www.linkedin.com/in/mariusottesen/details/recommendations/",
  },
];
