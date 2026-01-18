import type { Language } from './storage';

export interface MonumentData {
  name: { pl: string; native: string; };
  description: { pl: string; native: string; };
  facts: {
    location: { pl: string; native: string; };
    year: { pl: string; native: string; };
    style: { pl: string; native: string; };
    funFact: { pl: string; native: string; };
  };
}

export interface MonumentsPageData {
  lang: Language;
  countryName: { pl: string; native: string; };
  monuments: MonumentData[];
  ui: {
    title: { pl: string; native: string; };
    backButton: { pl: string; native: string; };
    location: { pl: string; native: string; };
    year: { pl: string; native: string; };
    style: { pl: string; native: string; };
    funFact: { pl: string; native: string; };
  }
}

export const allMonumentsData: Record<Language, MonumentsPageData> = {
  en: {
    lang: 'en',
    countryName: { pl: 'Anglia', native: 'England' },
    monuments: [
      { name: { pl: 'Stonehenge', native: 'Stonehenge' }, description: { pl: 'Prehistoryczny monument w Wiltshire, jeden z najsłynniejszych zabytków na świecie. Jego przeznaczenie do dziś pozostaje tajemnicą, ale uważa się, że pełnił funkcje ceremonialne i astronomiczne. Jego budowa rozpoczęła się około 3000 lat p.n.e.', native: 'A prehistoric monument in Wiltshire, one of the most famous landmarks in the world. Its purpose remains a mystery, but it is believed to have served ceremonial and astronomical functions. Its construction began around 3000 BC.' }, facts: { location: { pl: 'Wiltshire, Anglia', native: 'Wiltshire, England' }, year: { pl: 'ok. 3000 p.n.e.', native: 'c. 3000 BC' }, style: { pl: 'Neolit i Epoka Brązu', native: 'Neolithic & Bronze Age' }, funFact: { pl: 'Niektóre kamienie pochodzą z Walii, ponad 200 km dalej.', native: 'Some of the stones came from Wales, over 200 km away.' } } },
      { name: { pl: 'Tower of London', native: 'Tower of London' }, description: { pl: 'Historyczna twierdza w sercu Londynu, która przez wieki służyła jako pałac królewski, więzienie i mennica. Dziś jest domem dla klejnotów koronnych i słynnych kruków, których obecność ma chronić królestwo.', native: 'A historic castle in the heart of London, which over the centuries has served as a royal palace, prison, and mint. Today it is home to the Crown Jewels and the famous ravens, whose presence is said to protect the kingdom.' }, facts: { location: { pl: 'Londyn, Anglia', native: 'London, England' }, year: { pl: '1078', native: '1078' }, style: { pl: 'Normański, Średniowieczny', native: 'Norman, Medieval' }, funFact: { pl: 'Oficjalna nazwa to "Pałac i Twierdza Jego Królewskiej Mości".', native: 'Its official name is "His Majesty\'s Royal Palace and Fortress".' } } },
      { name: { pl: 'Pałac Buckingham', native: 'Buckingham Palace' }, description: { pl: 'Oficjalna londyńska rezydencja i główne miejsce pracy brytyjskich monarchów. Jest jednym z najbardziej rozpoznawalnych budynków na świecie i centralnym punktem uroczystości państwowych oraz królewskiej gościnności.', native: 'The official London residence and principal workplace of the UK\'s monarchs. It is one of the most recognizable buildings in the world and a focal point for state occasions and royal hospitality.' }, facts: { location: { pl: 'Londyn, Anglia', native: 'London, England' }, year: { pl: '1703', native: '1703' }, style: { pl: 'Neoklasycyzm', native: 'Neoclassical' }, funFact: { pl: 'Pałac posiada 775 pokoi, w tym 78 łazienek.', native: 'The palace has 775 rooms, including 78 bathrooms.' } } }
    ],
    ui: { title: { pl: 'Zabytki Anglii', native: 'Monuments of England' }, backButton: { pl: 'Powrót do Kultury', native: 'Back to Culture' }, location: { pl: 'Lokalizacja', native: 'Location' }, year: { pl: 'Rok budowy', native: 'Year Built' }, style: { pl: 'Styl', native: 'Style' }, funFact: { pl: 'Ciekawostka', native: 'Fun Fact' } }
  },
  de: {
    lang: 'de',
    countryName: { pl: 'Niemcy', native: 'Deutschland' },
    monuments: [
      { name: { pl: 'Brama Brandenburska', native: 'Brandenburger Tor' }, description: { pl: 'Symbol zjednoczenia Niemiec i Berlina. Ta monumentalna, neoklasycystyczna brama była świadkiem wielu kluczowych wydarzeń w historii Niemiec i Europy. Zwieńczona jest kwadrygą, rzeźbą przedstawiającą boginię zwycięstwa.', native: 'A symbol of German and Berlin reunification. This monumental, neoclassical gate has witnessed many key events in German and European history. It is crowned by a quadriga, a sculpture depicting the goddess of victory.' }, facts: { location: { pl: 'Berlin, Niemcy', native: 'Berlin, Germany' }, year: { pl: '1791', native: '1791' }, style: { pl: 'Neoklasycyzm', native: 'Neoclassicism' }, funFact: { pl: 'Napoleon zabrał kwadrygę do Paryża, ale wróciła do Berlina.', native: 'Napoleon took the quadriga to Paris, but it returned to Berlin.' } } },
      { name: { pl: 'Zamek Neuschwanstein', native: 'Schloss Neuschwanstein' }, description: { pl: 'Bajkowy zamek w Bawarii, zbudowany przez króla Ludwika II. Jest inspiracją dla zamku w logo Disneya. Jego romantyczna architektura i malownicze położenie w Alpach przyciągają miliony turystów rocznie.', native: 'A fairytale castle in Bavaria, built by King Ludwig II. It is the inspiration for the Disney logo castle. Its romantic architecture and picturesque location in the Alps attract millions of tourists annually.' }, facts: { location: { pl: 'Bawaria, Niemcy', native: 'Bavaria, Germany' }, year: { pl: '1886', native: '1886' }, style: { pl: 'Neoromanizm', native: 'Romanesque Revival' }, funFact: { pl: 'Król mieszkał w zamku tylko przez 172 dni.', native: 'The king only lived in the castle for a total of 172 days.' } } },
      { name: { pl: 'Katedra w Kolonii', native: 'Kölner Dom' }, description: { pl: 'Majestatyczna gotycka katedra, której budowa trwała ponad 600 lat. Jest jednym z najwspanialszych przykładów architektury gotyckiej na świecie i cudem przetrwała bombardowania II wojny światowej.', native: 'A majestic Gothic cathedral whose construction took over 600 years. It is one of the world\'s finest examples of Gothic architecture and miraculously survived the bombings of World War II.' }, facts: { location: { pl: 'Kolonia, Niemcy', native: 'Cologne, Germany' }, year: { pl: '1880 (ukończona)', native: '1880 (completed)' }, style: { pl: 'Gotyk', native: 'Gothic' }, funFact: { pl: 'Jej wieże były najwyższymi na świecie przez 4 lata.', native: 'Its spires were the tallest in the world for 4 years.' } } }
    ],
    ui: { title: { pl: 'Zabytki Niemiec', native: 'Denkmäler Deutschlands' }, backButton: { pl: 'Powrót do Kultury', native: 'Zurück zur Kultur' }, location: { pl: 'Lokalizacja', native: 'Standort' }, year: { pl: 'Rok budowy', native: 'Baujahr' }, style: { pl: 'Styl', native: 'Stil' }, funFact: { pl: 'Ciekawostka', native: 'Wissenswertes' } }
  },
  fr: {
    lang: 'fr',
    countryName: { pl: 'Francja', native: 'France' },
    monuments: [
      { name: { pl: 'Wieża Eiffla', native: 'Tour Eiffel' }, description: { pl: 'Ikona Paryża i symbol Francji. Zbudowana na Wystawę Światową w 1889 roku, początkowo była krytykowana, a dziś jest jednym z najczęściej odwiedzanych zabytków na świecie.', native: 'An icon of Paris and a symbol of France. Built for the 1889 World\'s Fair, it was initially criticized but is now one of the most visited monuments in the world.' }, facts: { location: { pl: 'Paryż, Francja', native: 'Paris, France' }, year: { pl: '1889', native: '1889' }, style: { pl: 'Strukturalizm', native: 'Structuralism' }, funFact: { pl: 'Wieża zmienia wysokość do 15 cm w zależności od temperatury.', native: 'The tower\'s height changes by up to 15 cm depending on the temperature.' } } },
      { name: { pl: 'Luwr', native: 'Musée du Louvre' }, description: { pl: 'Największe muzeum sztuki na świecie i centralny punkt orientacyjny Paryża. Jest domem dla tysięcy dzieł, w tym Mona Lisy i Wenus z Milo. Jego szklana piramida, dodana w 1989 roku, stała się nowym symbolem muzeum.', native: 'The world\'s largest art museum and a central landmark in Paris. It is home to thousands of works, including the Mona Lisa and the Venus de Milo. Its glass pyramid, added in 1989, has become a new symbol of the museum.' }, facts: { location: { pl: 'Paryż, Francja', native: 'Paris, France' }, year: { pl: '1793 (otwarcie)', native: '1793 (opened)' }, style: { pl: 'Renesans/Barok/Nowoczesny', native: 'Renaissance/Baroque/Modern' }, funFact: { pl: 'Aby zobaczyć każde dzieło przez 30 sekund, potrzebowałbyś 100 dni.', native: 'It would take 100 days to see every artwork for 30 seconds.' } } },
      { name: { pl: 'Mont Saint-Michel', native: 'Mont Saint-Michel' }, description: { pl: 'Wyspa pływowa w Normandii, zwieńczona majestatycznym opactwem. To jedno z najbardziej zapierających dech w piersiach miejsc we Francji, które w zależności od pływów staje się wyspą lub jest połączone z lądem.', native: 'A tidal island in Normandy, topped by a majestic abbey. It is one of France\'s most breathtaking sights, becoming an island or connected to the mainland depending on the tides.' }, facts: { location: { pl: 'Normandia, Francja', native: 'Normandy, France' }, year: { pl: 'VIII wiek', native: '8th century' }, style: { pl: 'Romański/Gotyk', native: 'Romanesque/Gothic' }, funFact: { pl: 'Różnica pływów może sięgać tu aż 14 metrów.', native: 'The difference between high and low tide can be up to 14 meters.' } } }
    ],
    ui: { title: { pl: 'Zabytki Francji', native: 'Monuments de France' }, backButton: { pl: 'Powrót do Kultury', native: 'Retour à la Culture' }, location: { pl: 'Lokalizacja', native: 'Lieu' }, year: { pl: 'Rok budowy', native: 'Année' }, style: { pl: 'Styl', native: 'Style' }, funFact: { pl: 'Ciekawostka', native: 'Fait Amusant' } }
  },
  it: {
    lang: 'it',
    countryName: { pl: 'Włochy', native: 'Italia' },
    monuments: [
      { name: { pl: 'Koloseum', native: 'Colosseo' }, description: { pl: 'Największy amfiteatr zbudowany w starożytnym Rzymie, symbol potęgi Imperium Rzymskiego. Miejsce walk gladiatorów i publicznych spektakli, które mogło pomieścić do 80 000 widzów.', native: 'The largest amphitheater built in ancient Rome, a symbol of the power of the Roman Empire. It was the site of gladiator contests and public spectacles and could hold up to 80,000 spectators.' }, facts: { location: { pl: 'Rzym, Włochy', native: 'Rome, Italy' }, year: { pl: '80 n.e.', native: '80 AD' }, style: { pl: 'Starożytny Rzym', native: 'Ancient Roman' }, funFact: { pl: 'W średniowieczu służyło jako forteca, a nawet kamieniołom.', native: 'In the Middle Ages, it was used as a fortress and even a quarry.' } } },
      { name: { pl: 'Krzywa Wieża w Pizie', native: 'Torre di Pisa' }, description: { pl: 'Słynna na całym świecie dzwonnica katedralna, znana z niezamierzonego przechyłu. Jej budowa trwała prawie 200 lat, a problemy ze stabilnością pojawiły się już na wczesnym etapie.', native: 'A world-famous cathedral bell tower, known for its unintended tilt. Its construction took almost 200 years, and stability problems appeared at an early stage.' }, facts: { location: { pl: 'Piza, Włochy', native: 'Pisa, Italy' }, year: { pl: '1372 (ukończona)', native: '1372 (completed)' }, style: { pl: 'Romański', native: 'Romanesque' }, funFact: { pl: 'Galileusz rzekomo używał wieży do eksperymentów ze spadkiem ciał.', native: 'Galileo is said to have used the tower for his experiments on falling objects.' } } },
      { name: { pl: 'Bazylika Świętego Piotra', native: 'Basilica di San Pietro' }, description: { pl: 'Najważniejszy kościół katolicki, znajdujący się w Watykanie. Arcydzieło architektury renesansu i baroku, nad którym pracowali najwięksi artyści, w tym Michał Anioł, który zaprojektował jej kopułę.', native: 'The most important church in Catholicism, located in the Vatican. A masterpiece of Renaissance and Baroque architecture, worked on by the greatest artists, including Michelangelo, who designed its dome.' }, facts: { location: { pl: 'Watykan', native: 'Vatican City' }, year: { pl: '1626', native: '1626' }, style: { pl: 'Renesans/Barok', native: 'Renaissance/Baroque' }, funFact: { pl: 'Jest to największy kościół na świecie.', native: 'It is the largest church in the world by interior measure.' } } }
    ],
    ui: { title: { pl: 'Zabytki Włoch', native: 'Monumenti d\'Italia' }, backButton: { pl: 'Powrót do Kultury', native: 'Torna a Cultura' }, location: { pl: 'Lokalizacja', native: 'Luogo' }, year: { pl: 'Rok budowy', native: 'Anno' }, style: { pl: 'Styl', native: 'Stile' }, funFact: { pl: 'Ciekawostka', native: 'Curiosità' } }
  },
  es: {
    lang: 'es',
    countryName: { pl: 'Hiszpania', native: 'España' },
    monuments: [
      { name: { pl: 'Sagrada Família', native: 'Sagrada Família' }, description: { pl: 'Ikona Barcelony i arcydzieło Antoniego Gaudíego. Budowa tego niezwykłego kościoła trwa od 1882 roku i wciąż nie jest ukończona. Łączy w sobie gotyk z secesją, tworząc unikalny styl.', native: 'An icon of Barcelona and a masterpiece by Antoni Gaudí. The construction of this extraordinary church has been ongoing since 1882 and is still not complete. It combines Gothic and Art Nouveau to create a unique style.' }, facts: { location: { pl: 'Barcelona, Hiszpania', native: 'Barcelona, Spain' }, year: { pl: '1882 - obecnie', native: '1882 - present' }, style: { pl: 'Modernizm', native: 'Modernisme' }, funFact: { pl: 'Fundusze na budowę pochodzą wyłącznie z darowizn i biletów.', native: 'Funding for construction comes exclusively from donations and tickets.' } } },
      { name: { pl: 'Alhambra', native: 'Alhambra' }, description: { pl: 'Spektakularny kompleks pałacowy i forteca mauretańskich władców w Granadzie. Słynie z misternych zdobień, dziedzińców z fontannami i zapierających dech w piersiach widoków na miasto.', native: 'A spectacular palace and fortress complex of the Moorish rulers in Granada. It is famous for its intricate decorations, courtyards with fountains, and breathtaking views of the city.' }, facts: { location: { pl: 'Granada, Hiszpania', native: 'Granada, Spain' }, year: { pl: 'ok. 889 / XIII w.', native: 'c. 889 / 13th cent.' }, style: { pl: 'Mauretański', native: 'Moorish' }, funFact: { pl: 'Jej nazwa po arabsku oznacza "Czerwona Twierdza".', native: 'Its name in Arabic means "The Red Fortress".' } } },
      { name: { pl: 'Akwedukt w Segowii', native: 'Acueducto de Segovia' }, description: { pl: 'Jeden z najlepiej zachowanych rzymskich akweduktów na świecie. Ta imponująca budowla z granitowych bloków została wzniesiona bez użycia zaprawy i przez wieki dostarczała wodę do miasta.', native: 'One of the best-preserved Roman aqueducts in the world. This impressive structure of granite blocks was built without mortar and supplied water to the city for centuries.' }, facts: { location: { pl: 'Segowia, Hiszpania', native: 'Segovia, Spain' }, year: { pl: 'I/II w. n.e.', native: '1st/2nd cent. AD' }, style: { pl: 'Starożytny Rzym', native: 'Ancient Roman' }, funFact: { pl: 'Legenda głosi, że zbudował go diabeł w jedną noc.', native: 'Legend has it that it was built by the devil in a single night.' } } }
    ],
    ui: { title: { pl: 'Zabytki Hiszpanii', native: 'Monumentos de España' }, backButton: { pl: 'Powrót do Kultury', native: 'Volver a Cultura' }, location: { pl: 'Lokalizacja', native: 'Ubicación' }, year: { pl: 'Rok budowy', native: 'Año' }, style: { pl: 'Styl', native: 'Estilo' }, funFact: { pl: 'Ciekawostka', native: 'Dato Curioso' } }
  },
};
