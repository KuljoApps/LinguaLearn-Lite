
export interface Question {
  id: number;
  language: 'Italian';
  word: string;
  options: string[];
  correctAnswer: string;
}

// Italian phrasal verbs (verbi frasali/sintagmatici)
export const questions: Question[] = [
  { id: 1, language: 'Italian', word: 'andare via', options: ['iść spać', 'odejść/iść sobie', 'przyjść', 'wrócić'], correctAnswer: 'odejść/iść sobie' },
  { id: 2, language: 'Italian', word: 'dare via', options: ['oddać (coś)', 'wziąć', 'sprzedać', 'pożyczyć'], correctAnswer: 'oddać (coś)' },
  { id: 3, language: 'Italian', word: 'tirare fuori', options: ['schować', 'wyciągnąć', 'wrzucić', 'zgubić'], correctAnswer: 'wyciągnąć' },
  { id: 4, language: 'Italian', word: 'mettere su', options: ['zdjąć', 'założyć (ubranie)/przytyć', 'schudnąć', 'przymierzyć'], correctAnswer: 'założyć (ubranie)/przytyć' },
  { id: 5, language: 'Italian', word: 'buttare giù', options: ['podnieść', 'przełknąć/zapisać naprędce', 'wyrzucić', 'zbudować'], correctAnswer: 'przełknąć/zapisać naprędce' },
  { id: 6, language: 'Italian', word: 'tirare su', options: ['opuścić', 'podnieść/pocieszyć', 'przewrócić', 'zepsuć'], correctAnswer: 'podnieść/pocieszyć' },
  { id: 7, language: 'Italian', word: 'portare avanti', options: ['zostawić', 'kontynuować', 'zacząć', 'skończyć'], correctAnswer: 'kontynuować' },
  { id: 8, language: 'Italian', word: 'mettere da parte', options: ['wydać', 'odkładać (na bok)', 'zgubić', 'pożyczyć'], correctAnswer: 'odkładać (na bok)' },
  { id: 9, language: 'Italian', word: 'dare indietro', options: ['zwrócić', 'wziąć', 'zatrzymać', 'sprzedać'], correctAnswer: 'zwrócić' },
  { id: 10, language: 'Italian', word: 'farcela', options: ['poddawać się', 'próbować', 'dać radę', 'unikać'], correctAnswer: 'dać radę' },
  { id: 11, language: 'Italian', word: 'venire fuori', options: ['schować się', 'wyjść na jaw/pokazać się', 'wejść do środka', 'zostać'], correctAnswer: 'wyjść na jaw/pokazać się' },
  { id: 12, language: 'Italian', word: 'mandare giù', options: ['wypluć', 'przełknąć', 'pogryźć', 'polizać'], correctAnswer: 'przełknąć' },
  { id: 13, language: 'Italian', word: 'passarla liscia', options: ['ponieść konsekwencje', 'wyjść na sucho', 'przyznać się do winy', 'zostać złapanym'], correctAnswer: 'wyjść na sucho' },
  { id: 14, language: 'Italian', word: 'mettersi insieme', options: ['zerwać', 'zaprzyjaźnić się', 'zacząć ze sobą chodzić', 'pokłócić się'], correctAnswer: 'zacząć ze sobą chodzić' },
  { id: 15, language: 'Italian', word: 'tirare tardi', options: ['iść wcześnie spać', 'późno kończyć/zasiedzieć się', 'spóźnić się', 'wstać wcześnie'], correctAnswer: 'późno kończyć/zasiedzieć się' },
  { id: 16, language: 'Italian', word: 'darci dentro', options: ['odpuścić', 'leniuchować', 'wziąć się ostro do pracy', 'robić coś powoli'], correctAnswer: 'wziąć się ostro do pracy' },
  { id: 17, language: 'Italian', word: 'farsi vivo', options: ['ukrywać się', 'dać znak życia', 'umrzeć', 'zniknąć'], correctAnswer: 'dać znak życia' },
  { id: 18, language: 'Italian', word: 'piantarla', options: ['kontynuować', 'sadzić rośliny', 'przestać/skończyć z czymś', 'zaczynać'], correctAnswer: 'przestać/skończyć z czymś' },
  { id: 19, language: 'Italian', word: 'saltare fuori', options: ['schować się', 'wyskoczyć (nagle się pojawić)', 'zniknąć', 'wejść'], correctAnswer: 'wyskoczyć (nagle się pojawić)' },
  { id: 20, language: 'Italian', word: 'stare dietro', options: ['być z przodu', 'stać z tyłu/pilnować', 'ignorować', 'prowadzić'], correctAnswer: 'stać z tyłu/pilnować' },
  { id: 21, language: 'Italian', word: 'cascarci', options: ['unikać pułapki', 'dać się nabrać', 'być ostrożnym', 'wiedzieć o wszystkim'], correctAnswer: 'dać się nabrać' },
  { id: 22, language: 'Italian', word: 'avercela con qualcuno', options: ['lubić kogoś', 'mieć do kogoś pretensje', 'podziwiać kogoś', 'ignorować kogoś'], correctAnswer: 'mieć do kogoś pretensje' },
  { id: 23, language: 'Italian', word: 'tirarsela', options: ['być skromnym', 'zadierać nosa', 'być przyjacielskim', 'ciężko pracować'], correctAnswer: 'zadierać nosa' },
  { id: 24, language: 'Italian', word: 'togliersi di mezzo', options: ['stanąć na drodze', 'usunąć się z drogi', 'pomagać', 'przeszkadzać'], correctAnswer: 'usunąć się z drogi' },
  { id: 25, language: 'Italian', word: 'andare a finire', options: ['zaczynać się', 'kończyć się (jakoś)', 'unikać', 'kontynuować'], correctAnswer: 'kończyć się (jakoś)' },
  { id: 26, language: 'Italian', word: 'fare fuori', options: ['zaprosić do środka', 'wykończyć (kogoś/coś)', 'naprawić', 'stworzyć'], correctAnswer: 'wykończyć (kogoś/coś)' },
  { id: 27, language: 'Italian', word: 'lasciar perdere', options: ['trzymać się czegoś', 'dać sobie spokój', 'kontynuować z uporem', 'zaczynać od nowa'], correctAnswer: 'dać sobie spokój' },
  { id: 28, language: 'Italian', word: 'prendersela', options: ['cieszyć się', 'brać coś do siebie/obrażać się', 'ignorować', 'śmiać się'], correctAnswer: 'brać coś do siebie/obrażać się' },
  { id: 29, language: 'Italian', word: 'sputare fuori', options: ['przełknąć', 'wypluć/wygadać się', 'trzymać w tajemnicy', 'szeptać'], correctAnswer: 'wypluć/wygadać się' },
  { id: 30, language: 'Italian', word: 'volerci', options: ['być opcjonalnym', 'być potrzebnym', 'być łatwym', 'być niemożliwym'], correctAnswer: 'być potrzebnym' },
];
