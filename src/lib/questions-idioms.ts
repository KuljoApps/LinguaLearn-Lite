export interface Question {
  id: number;
  language: 'English';
  word: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  { id: 1, language: 'English', word: 'Bite the bullet', options: ['Zacisnąć zęby', 'Zjeść nabój', 'Strzelać ślepakami', 'Ugryźć w język'], correctAnswer: 'Zacisnąć zęby' },
  { id: 2, language: 'English', word: 'Break a leg', options: ['Złamać nogę', 'Połamania nóg', 'Skręcić kostkę', 'Iść na spacer'], correctAnswer: 'Połamania nóg' },
  { id: 3, language: 'English', word: 'Hit the sack', options: ['Uderzyć w worek', 'Pójść spać', 'Dostać w kość', 'Zacząć pracę'], correctAnswer: 'Pójść spać' },
  { id: 4, language: 'English', word: 'Once in a blue moon', options: ['Raz na ruski rok', 'Pod osłoną nocy', 'Każdej pełni', 'Nigdy'], correctAnswer: 'Raz na ruski rok' },
  { id: 5, language: 'English', word: 'A piece of cake', options: ['Kawałek ciasta', 'Bułka z masłem', 'Słodka niespodzianka', 'Deser'], correctAnswer: 'Bułka z masłem' },
  { id: 6, language: 'English', word: 'Let the cat out of the bag', options: ['Wypuścić kota z worka', 'Puścić farbę', 'Nakrzyczeć na kogoś', 'Mieć kota w worku'], correctAnswer: 'Puścić farbę' },
  { id: 7, language: 'English', word: 'Spill the beans', options: ['Rozsypać fasolki', 'Wygadać się', 'Zrobić bałagan', 'Ugotować zupę'], correctAnswer: 'Wygadać się' },
  { id: 8, language: 'English', word: 'The ball is in your court', options: ['Piłka jest po twojej stronie', 'Teraz twoja kolej', 'Grać w tenisa', 'Zostać na lodzie'], correctAnswer: 'Teraz twoja kolej' },
  { id: 9, language: 'English', word: 'To feel under the weather', options: ['Czuć się źle', 'Obserwować pogodę', 'Być na zewnątrz', 'Zmarznąć'], correctAnswer: 'Czuć się źle' },
  { id: 10, language: 'English', word: 'When pigs fly', options: ['Gdy świnie zaczną latać', 'W odległej przyszłości', 'Na święty nigdy', 'Jutro'], correctAnswer: 'Na święty nigdy' },
];
