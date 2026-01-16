
export interface Question {
  id: number;
  language: 'Italian';
  word: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  { id: 1, language: 'Italian', word: 'In bocca al lupo', options: ['W paszczy lwa', 'Powodzenia', 'Smacznego', 'Uważaj na siebie'], correctAnswer: 'Powodzenia' },
  { id: 2, language: 'Italian', word: 'Acqua in bocca', options: ['Woda w ustach', 'Trzymaj język za zębami', 'Być spragnionym', 'Mówić niewyraźnie'], correctAnswer: 'Trzymaj język za zębami' },
  { id: 3, language: 'Italian', word: 'Non vedere l\'ora', options: ['Nie widzieć godziny', 'Nie móc się doczekać', 'Spóźniać się', 'Być ślepym'], correctAnswer: 'Nie móc się doczekać' },
  { id: 4, language: 'Italian', word: 'Avere un chiodo fisso', options: ['Mieć wbity gwóźdź', 'Mieć obsesję', 'Być upartym', 'Remontować dom'], correctAnswer: 'Mieć obsesję' },
  { id: 5, language: 'Italian', word: 'Costare un occhio della testa', options: ['Kosztować oko', 'Być bardzo drogim', 'Być tanim', 'Płacić gotówką'], correctAnswer: 'Być bardzo drogim' },
  { id: 6, language: 'Italian', word: 'Essere al verde', options: ['Być zielonym', 'Być spłukanym', 'Być w ogrodzie', 'Być niedoświadczonym'], correctAnswer: 'Być spłukanym' },
  { id: 7, language: 'Italian', word: 'Piovere sul bagnato', options: ['Padać na mokre', 'Nieszczęścia chodzą parami', 'Lać wodę', 'Mieć pecha'], correctAnswer: 'Nieszczęścia chodzą parami' },
  { id: 8, language: 'Italian', word: 'Fare la scarpetta', options: ['Robić bucik', 'Zbierać resztki sosu chlebem', 'Kupować buty', 'Tańczyć'], correctAnswer: 'Zbierać resztki sosu chlebem' },
  { id: 9, language: 'Italian', word: 'Prendere due piccioni con una fava', options: ['Złapać dwa gołębie jedną fasolą', 'Upiec dwie pieczenie na jednym ogniu', 'Polować na ptaki', 'Jeść fasolę'], correctAnswer: 'Upiec dwie pieczenie na jednym ogniu' },
  { id: 10, language: 'Italian', word: 'Avere le mani in pasta', options: ['Mieć ręce w cieście', 'Maczać w czymś palce', 'Piec ciasto', 'Być zajętym'], correctAnswer: 'Maczać w czymś palce' },
  { id: 11, language: 'Italian', word: 'Conoscerci come le proprie tasche', options: ['Znać jak własną kieszeń', 'Mieć puste kieszenie', 'Kupować spodnie', 'Być biednym'], correctAnswer: 'Znać jak własną kieszeń' },
  { id: 12, language: 'Italian', word: 'Avere la testa tra le nuvole', options: ['Mieć głowę w chmurach', 'Marzyć na jawie', 'Być rozproszonym', 'Latać samolotem'], correctAnswer: 'Marzyć na jawie' },
  { id: 13, language: 'Italian', word: 'Mangiare la foglia', options: ['Zjeść liść', 'Zorientować się w porę', 'Być na diecie', 'Pracować w ogrodzie'], correctAnswer: 'Zorientować się w porę' },
  { id: 14, language: 'Italian', word: 'Avere un diavolo per capello', options: ['Mieć diabła za włos', 'Być wściekłym', 'Mieć złą fryzurę', 'Bać się duchów'], correctAnswer: 'Być wściekłym' },
  { id: 15, language: 'Italian', word: 'Dormire come un ghiro', options: ['Spać jak suseł', 'Być śpiochem', 'Zaspać', 'Mieć bezsenność'], correctAnswer: 'Spać jak suseł' },
  { id: 16, language: 'Italian', word: 'Essere in gamba', options: ['Być w nodze', 'Być zdolnym / w formie', 'Mieć długie nogi', 'Dobrze biegać'], correctAnswer: 'Być zdolnym / w formie' },
  { id: 17, language: 'Italian', word: 'Cadere dalle nuvole', options: ['Spadać z chmur', 'Być bardzo zdziwionym', 'Śnić', 'Latać'], correctAnswer: 'Być bardzo zdziwionym' },
  { id: 18, language: 'Italian', word: 'Rompere il ghiaccio', options: ['Łamać lód', 'Przełamać pierwsze lody', 'Pić drinki', 'Zimno'], correctAnswer: 'Przełamać pierwsze lody' },
  { id: 19, language: 'Italian', word: 'Tagliare la corda', options: ['Przeciąć linę', 'Zmyć się / Urwać się', 'Wspinać się', 'Wiązać sznurówki'], correctAnswer: 'Zmyć się / Urwać się' },
  { id: 20, language: 'Italian', word: 'Gettare la spugna', options: ['Rzucić gąbkę', 'Poddawać się', 'Myć naczynia', 'Brać prysznic'], correctAnswer: 'Poddawać się' },
  { id: 21, language: 'Italian', word: 'Avere fegato', options: ['Mieć wątrobę', 'Mieć odwagę', 'Jeść wątróbkę', 'Być chorym'], correctAnswer: 'Mieć odwagę' },
  { id: 22, language: 'Italian', word: 'Sputare il rospo', options: ['Wypluć ropuchę', 'Wygadać się / Wyznać prawdę', 'Zjeść żabę', 'Milczeć'], correctAnswer: 'Wygadać się / Wyznać prawdę' },
  { id: 23, language: 'Italian', word: 'Tutto fa brodo', options: ['Wszystko robi rosół', 'Wszystko się przyda', 'Gotować zupę', 'Być oszczędnym'], correctAnswer: 'Wszystko się przyda' },
  { id: 24, language: 'Italian', word: 'Non avere peli sulla lingua', options: ['Nie mieć włosów na języku', 'Mówić prosto z mostu', 'Kłamać', 'Być nieśmiałym'], correctAnswer: 'Mówić prosto z mostu' },
  { id: 25, language: 'Italian', word: 'Andare a tutta birra', options: ['Iść na pełnym piwie', 'Iść na całego / Jechać na maksa', 'Pić piwo', 'Być pijanym'], correctAnswer: 'Iść na całego / Jechać na maksa' },
  { id: 26, language: 'Italian', word: 'Salvare capra e cavoli', options: ['Ocalić kozę i kapustę', 'Upiec dwie pieczenie na jednym ogniu', 'Mieć ciastko i zjeść ciastko', 'Pracować w gospodarstwie'], correctAnswer: 'Mieć ciastko i zjeść ciastko' },
  { id: 27, language: 'Italian', word: 'Essere un pezzo di pane', options: ['Być kawałkiem chleba', 'Być dobrym jak chleb', 'Być piekarzem', 'Jeść chleb'], correctAnswer: 'Być dobrym jak chleb' },
  { id: 28, language: 'Italian', word: 'Cascare a fagiolo', options: ['Spadać na fasolę', 'Pojawić się w idealnym momencie', 'Gotować fasolę', 'Mieć szczęście'], correctAnswer: 'Pojawić się w idealnym momencie' },
  { id: 29, language: 'Italian', word: 'Rendere pan per focaccia', options: ['Odpłacić chlebem za focaccię', 'Odpłacić pięknym za nadobne', 'Dzielić się jedzeniem', 'Być wdzięcznym'], correctAnswer: 'Odpłacić pięknym za nadobne' },
  { id: 30, language: 'Italian', word: 'Avere la luna storta', options: ['Mieć krzywy księżyc', 'Mieć zły humor / Wstać lewą nogą', 'Patrzeć w niebo', 'Być romantycznym'], correctAnswer: 'Mieć zły humor / Wstać lewą nogą' },
];
