const movies = [
  {
    id: 980489,
    language: 'en',
    title: 'Gran Turismo',
    releasedate: '2023-08-09',
    overview:
      'En gejmer från arbetarklassen, en misslyckad före detta racerförare och en idealistisk motorsportschef riskerar allt för att ta sig an den tuffaste sporten i världen.',
    poster: 'https://image.tmdb.org/t/p/w500/2cExvbCum8TPacO8SSaLmE41Yn8.jpg',
    background:
      'https://image.tmdb.org/t/p/original/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg',
  },
  {
    id: 565770,
    language: 'en',
    title: 'Blue Beetle',
    releasedate: '2023-08-16',
    overview:
      'Nyutexaminerade Jaime Reyes återvänder hem med höga ambitioner inför framtiden, bara för att upptäcka att hemmet inte är riktigt som han lämnade det. Medan han söker efter sin plats i världen, ingriper ödet när Jaime oväntat hamnar i besittning av en urgammal artefakt av utomjordisk bioteknik: Skarabén. När Skarabén plötsligt väljer Jaime som sin symbiotiska värd, blir han utrustad med en otrolig rustning som har extraordinära och oförutsägbara krafter. Detta förändrar för alltid hans öde när han blir superhjälten Blue Beetle.',
    poster: 'https://image.tmdb.org/t/p/w500/xzXdyFygjKsnWFQviUAM9lAhSU4.jpg',
    background:
      'https://image.tmdb.org/t/p/original/1syW9SNna38rSl9fnXwc9fP7POW.jpg',
  },
  {
    id: 678512,
    language: 'en',
    title: 'Sound of Freedom',
    releasedate: '2023-07-03',
    overview:
      'Sound of Freedom bygger på en sann historia om en amerikansk agent som ständigt sätter sitt liv på spel för att krossa traffickingligor specialiserade på barn. Men det svåraste är inte att sätta dit ligorna, det svåraste är att finna och rädda deras unga offer. Med mottot ”Guds barn är inte till salu” gör han och hans män ännu ett tillslag och lyckas rädda en liten mexikansk pojke. Efter att ha fått reda på att även pojkens syster kidnappats brister hans hjärta. Han kan inte släppa det. Vetskapen förtär honom inifrån. Han måste finna henne, till varje pris. Ett löfte som för honom och hans män på en farligare resa än någonsin – in i Columbias gerillaterritorier…',
    poster: 'https://image.tmdb.org/t/p/w500/aOi75Op88EeZkkvwDY51ALbs4DM.jpg',
    background:
      'https://image.tmdb.org/t/p/original/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg',
  },
  {
    id: 968051,
    language: 'en',
    title: 'The Nun II',
    releasedate: '2023-09-06',
    overview:
      'Frankrike år 1956. En präst mördas. En ondska sprider sig. Syster Irene hamnar återigen öga mot öga med Valak, demonnunnan.',
    poster: 'https://image.tmdb.org/t/p/w500/4VlM5oZkXRGCjB02N5k6vPFVKiV.jpg',
    background:
      'https://image.tmdb.org/t/p/original/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg',
  },
  {
    id: 615656,
    language: 'en',
    title: 'Meg 2: The Trench',
    releasedate: '2023-08-02',
    overview:
      'Jonas Taylor leder ett djärvt forskarlag på en utforskande dykning till de djupaste delarna av havet. Deras resa utvecklas till kaos när hänsynslös gruvdrift hotar deras uppdrag och tvingar dem in i en strid för överlevnad. Konfronterade med kolossala megalodoner och obevekliga miljöförstörare måste forskarna överlista och fly från sina skoningslösa motståndare i en kamp mot klockan.',
    poster: 'https://image.tmdb.org/t/p/w500/7b2CXmMMg1gRrkhuh6dJkPp3ZbS.jpg',
    background:
      'https://image.tmdb.org/t/p/original/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg',
  },
  {
    id: 385687,
    language: 'en',
    title: 'Fast X',
    releasedate: '2023-05-17',
    overview:
      'Efter alla uppdrag och mot omöjliga odds har Dom Toretto och hans familj varit smartare, modigare och mer drivna än alla sina fiender. Nu kommer de att möta sin dödligaste motståndare hittills. Ett skrämmande hot, som drivs av blodshämnd, träder fram ur det förflutnas skuggor, fast besluten att slita sönder familjen och förgöra allt - och alla - som Dom älskar, för alltid.',
    poster: 'https://image.tmdb.org/t/p/w500/dYhbTNtz9ix8F95YeiG8H6KsDGn.jpg',
    background:
      'https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
  },
  {
    id: 762430,
    language: 'en',
    title: 'Retribution',
    releasedate: '2023-08-23',
    overview:
      'Matt Turner är en framgångsrik affärsman baserad i Berlin som jonglerar en finanskarriär med familjeansvar. När Matt en morgon kör sina barn till skolan, får han ett telefonsamtal som säger att det finns en bomb under hans säte och om han inte genomför ett antal uppgifter så kommer den att detonera. Instängd i sin bil och jagad genom staden måste Matt följa främlingens allt farligare instruktioner i en kapplöpning mot tiden för att skydda sin familj och lösa mysteriet.',
    poster: 'https://image.tmdb.org/t/p/w500/4HKxm2p16bZ8dIPZ17RTDuN8jE8.jpg',
    background:
      'https://image.tmdb.org/t/p/original/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg',
  },
  {
    id: 820609,
    language: 'en',
    title: 'No One Will Save You',
    releasedate: '2023-09-22',
    overview:
      'Brynn Adams är en kreativ och talangfull ung kvinna som har blivit utstött från samhället. Ensam men hoppfull finner hon tröst i det hem där hon växte upp, tills hon en natt vaknar av underliga ljud från utomjordiska inkräktare. En actionfylld kamp mellan Brynn och utomjordiska varelser bryter ut och hotar hennes framtid. Samtidigt tvingar de henne att ta itu med sitt förflutna.',
    poster: 'https://image.tmdb.org/t/p/w500/ehGIDAMaYy6Eg0o8ga0oqflDjqW.jpg',
    background:
      'https://image.tmdb.org/t/p/original/zYlgqIpqJ1VAbvFhRhktAzIybVs.jpg',
  },
  {
    id: 1008042,
    language: 'en',
    title: 'Talk to Me',
    releasedate: '2023-07-26',
    overview:
      'Ett kompisgäng har listat ut hur man frammanar de döda med hjälp av en balsamerad hand. Adrenalinkicken varje gång de lyckas blir snabbt beroendeframkallande, men när försöken går för långt så släpps okontrollerbara övernaturliga krafter loss, och gränsen till de dödas värld börjar suddas ut.',
    poster: 'https://image.tmdb.org/t/p/w500/kFUTnBapLPe7EZIkfQkiC4hIidK.jpg',
    background:
      'https://image.tmdb.org/t/p/original/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg',
  },
  {
    id: 346698,
    language: 'en',
    title: 'Barbie',
    releasedate: '2023-07-19',
    overview:
      'Barbie och Ken njuter av livet i färgglada och till synes perfekta Barbieland, men när de får en chans att komma till den verkliga världen så upptäcker de snart glädjen och farorna med att leva bland människorna.',
    poster: 'https://image.tmdb.org/t/p/w500/2mMsr04cQWXA7rZ0Q4WVJtYxLsW.jpg',
    background:
      'https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
  },
  {
    id: 1172009,
    language: 'en',
    title: 'The Black Book',
    releasedate: '2023-09-22',
    overview:
      'När hans son blir oskyldigt anklagad för kidnappning tar en förtvivlad diakon lagen i egna händer och börjar bekämpa ett gäng korrupta poliser för att få rättvisa.',
    poster: 'https://image.tmdb.org/t/p/w500/kn28W24slBLyGr8ZIZnxNE5YZrY.jpg',
    background:
      'https://image.tmdb.org/t/p/original/9WxqnP9c29wXd03sALSpxpTx8fk.jpg',
  },
  {
    id: 951491,
    language: 'en',
    title: 'Saw X',
    releasedate: '2023-09-26',
    overview:
      'En sjuk och desperat John Kramer reser till Mexiko för en riskabel och experimentell medicinsk behandling i hopp om att hitta ett botemedel mot sin cancer. Han upptäcker dock att hela operationen är en bluff för att lura de mest utsatta. Bedragarna blir nu själva offer när de utsätts för Jigsaws brutala, blodiga och grymma spel.',
    poster: 'https://image.tmdb.org/t/p/w500/ao4KOELwVY0xCTxjHlPPSK07Zam.jpg',
    background:
      'https://image.tmdb.org/t/p/original/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg',
  },
  {
    id: 976573,
    language: 'en',
    title: 'Elementärt',
    releasedate: '2023-06-14',
    overview:
      "Det udda paret Brinnie och Vadar bor i en stad där eld-, vatten-, jord- och luftinvånare lever tillsammans. Den eldfängda unga tjejen och den mer avslappnade 'ta-dagen-som-den-kommer'-killen kommer snart att upptäcka något elementärt: att de faktiskt har massor gemensamt och att det kan uppstå magi mellan motsatser.",
    poster: 'https://image.tmdb.org/t/p/w500/bt0vgv9mkxVIg75x3zuYswrb1v6.jpg',
    background:
      'https://image.tmdb.org/t/p/original/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg',
  },
  {
    id: 820525,
    language: 'en',
    title: 'After Everything',
    releasedate: '2023-09-13',
    overview:
      'Hardin kämpar för att ta sig vidare. Drabbad av skrivkramp och det hjärtekrossande uppbrottet med Tessa reser han till Portugal på jakt efter en kvinna som han har gjort orätt mot i det förflutna - och för att hitta sig själv. I hopp om att vinna tillbaka Tessa inser Hardin att han måste ändra på sig själv innan han kan göra det slutgiltiga åtagandet.',
    poster: 'https://image.tmdb.org/t/p/w500/afPrxdEVh9uoSSIc0RVKMXPRHWm.jpg',
    background:
      'https://image.tmdb.org/t/p/original/jkKVLzLWjSvTnc84VzeljhSy6j8.jpg',
  },
  {
    id: 852436,
    language: 'fr',
    title: 'Seule : Les dossiers Silvercloud',
    releasedate: '2023-03-08',
    overview: '',
    poster: 'https://image.tmdb.org/t/p/w500/10jnexUGgWFrwXTwmX73EVO9UpZ.jpg',
    background:
      'https://image.tmdb.org/t/p/original/5xUJBgds96m6Xi2EtUpSzbw24D7.jpg',
  },
  {
    id: 1171541,
    language: 'en',
    title: 'Sniper: G.R.I.T. - Global Response & Intelligence Team',
    releasedate: '2023-09-26',
    overview: '',
    poster: 'https://image.tmdb.org/t/p/w500/gcd5TJwXLWeQ2Dn0aRxI8OJIIxK.jpg',
    background:
      'https://image.tmdb.org/t/p/original/1DBo2V4KyBWXuagt4JOR2jZJMHB.jpg',
  },
  {
    id: 1034587,
    language: 'te',
    title: 'అమిగోస్',
    releasedate: '2023-02-10',
    overview: '',
    poster: 'https://image.tmdb.org/t/p/w500/mhPhEvh2ffBdbgiSIjrlkqAGwNH.jpg',
    background:
      'https://image.tmdb.org/t/p/original/2wUJGxE43jhTKpNMVbWEC2WNJjH.jpg',
  },
  {
    id: 1002338,
    language: 'is',
    title: 'Operation Napoleon',
    releasedate: '2023-01-26',
    overview:
      'Glaciären Vatnajökull är en av Europas största och täcker drygt tio procent av Island. Men när temperaturen stiger globalt påverkar det även denna mäktiga ismassa. När snö och is smälter bort kommer saker som legat begravda länge upp i ljuset. Bilder av ett stridsflygplan dolt sedan andra världskrigets dagar hamnar hos den unga advokaten Kristin. Innan hon vet ordet av drar upptäckten in Kristin i en konspiration med förgreningar från Island till Amerika. Dess rötter sträcker sig bakåt i tiden till Nazityskland. Såväl skrupelfria brottssyndikat som CIA och nazister korsar Kristins väg innan allt är över. Alla vill de veta vad som döljer sig bakom kodnamnet ”Operation Napoleon”.',
    poster: 'https://image.tmdb.org/t/p/w500/8Ceucf7RZqXEJP6I9Jv3NMey1jK.jpg',
    background:
      'https://image.tmdb.org/t/p/original/oghHR3X0hIcvs7xqyoFjA0GAZWn.jpg',
  },
  {
    id: 575264,
    language: 'en',
    title: 'Mission: Impossible - Dead Reckoning Part One',
    releasedate: '2023-07-08',
    overview:
      'Ethan Hunt och hans IMF-team ger sig ut på sitt farligaste uppdrag hittills: att spåra upp ett nytt fruktansvärt vapen som hotar hela mänskligheten, innan det hamnar i orätta händer. När makten över framtiden och världens öde står på spel, och när mörka krafter från Ethans förflutna närmar sig, börjar en dödlig jakt runt hela världen. Konfronterad av en mystisk, allsmäktig fiende tvingas Ethan inse att inget kan vara viktigare än hans uppdrag - inte ens de människor vars liv han bryr sig mest om.',
    poster: 'https://image.tmdb.org/t/p/w500/lxeui0El3rlH8pqTydaGnsD5knj.jpg',
    background:
      'https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg',
  },
  {
    id: 717930,
    language: 'en',
    title: 'Kandahar',
    releasedate: '2023-05-25',
    overview:
      'Efter att ha avslöjat ett hemligt uppdrag måste en CIA-agent och hans översättare fly från specialstyrkor i Afghanistan.',
    poster: 'https://image.tmdb.org/t/p/w500/lCanGgsqF4xD2WA5NF8PWeT3IXd.jpg',
    background:
      'https://image.tmdb.org/t/p/original/c6Splshb8lb2Q9OvUfhpqXl7uP0.jpg',
  },
];
