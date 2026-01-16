
export interface Question {
  id: number;
  language: 'Italian';
  word: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  { id: 1, language: 'Italian', word: 'Ciao', options: ['Do widzenia', 'Cześć', 'Dziękuję', 'Przepraszam'], correctAnswer: 'Cześć' },
  { id: 2, language: 'Italian', word: 'Arrivederci', options: ['Cześć', 'Dzień dobry', 'Dobranoc', 'Do widzenia'], correctAnswer: 'Do widzenia' },
  { id: 3, language: 'Italian', word: 'Grazie', options: ['Proszę', 'Nie ma za co', 'Dziękuję', 'Przepraszam'], correctAnswer: 'Dziękuję' },
  { id: 4, language: 'Italian', word: 'Sì', options: ['Tak', 'Nie', 'Może', 'Zawsze'], correctAnswer: 'Tak' },
  { id: 5, language: 'Italian', word: 'No', options: ['Dobrze', 'Nigdy', 'Dlaczego', 'Nie'], correctAnswer: 'Nie' },
  { id: 6, language: 'Italian', word: 'Uomo', options: ['Kobieta', 'Mężczyzna', 'Dziecko', 'Osoba'], correctAnswer: 'Mężczyzna' },
  { id: 7, language: 'Italian', word: 'Donna', options: ['Mężczyzna', 'Dziewczyna', 'Kobieta', 'Chłopiec'], correctAnswer: 'Kobieta' },
  { id: 8, language: 'Italian', word: 'Mangiare', options: ['Pić', 'Spać', 'Jeść', 'Biegać'], correctAnswer: 'Jeść' },
  { id: 9, language: 'Italian', word: 'Acqua', options: ['Ogień', 'Woda', 'Ziemia', 'Powietrze'], correctAnswer: 'Woda' },
  { id: 10, language: 'Italian', word: 'Gatto', options: ['Pies', 'Ptak', 'Ryba', 'Kot'], correctAnswer: 'Kot' },
  { id: 11, language: 'Italian', word: 'Cane', options: ['Kot', 'Pies', 'Lew', 'Tygrys'], correctAnswer: 'Pies' },
  { id: 12, language: 'Italian', word: 'Casa', options: ['Samochód', 'Szkoła', 'Dom', 'Sklep'], correctAnswer: 'Dom' },
  { id: 13, language: 'Italian', word: 'Macchina', options: ['Rower', 'Pociąg', 'Autobus', 'Samochód'], correctAnswer: 'Samochód' },
  { id: 14, language: 'Italian', word: 'Scuola', options: ['Szpital', 'Szkoła', 'Uniwersytet', 'Biblioteka'], correctAnswer: 'Szkoła' },
  { id: 15, language: 'Italian', word: 'Libro', options: ['Film', 'Piosenka', 'Książka', 'Obraz'], correctAnswer: 'Książka' },
  { id: 16, language: 'Italian', word: 'Sole', options: ['Księżyc', 'Gwiazda', 'Słońce', 'Chmura'], correctAnswer: 'Słońce' },
  { id: 17, language: 'Italian', word: 'Luna', options: ['Słońce', 'Planeta', 'Księżyc', 'Kometa'], correctAnswer: 'Księżyc' },
  { id: 18, language: 'Italian', word: 'Amore', options: ['Nienawiść', 'Radość', 'Smutek', 'Miłość'], correctAnswer: 'Miłość' },
  { id: 19, language: 'Italian', word: 'Amico', options: ['Wróg', 'Sąsiad', 'Przyjaciel', 'Rodzina'], correctAnswer: 'Przyjaciel' },
  { id: 20, language: 'Italian', word: 'Famiglia', options: ['Znajomi', 'Rodzina', 'Krewni', 'Sąsiedzi'], correctAnswer: 'Rodzina' },
  { id: 21, language: 'Italian', word: 'Mattina', options: ['Wieczór', 'Noc', 'Popołudnie', 'Rano'], correctAnswer: 'Rano' },
  { id: 22, language: 'Italian', word: 'Notte', options: ['Dzień', 'Noc', 'Zmierzch', 'Świt'], correctAnswer: 'Noc' },
  { id: 23, language: 'Italian', word: 'Giorno', options: ['Tydzień', 'Miesiąc', 'Rok', 'Dzień'], correctAnswer: 'Dzień' },
  { id: 24, language: 'Italian', word: 'Settimana', options: ['Dzień', 'Tydzień', 'Weekend', 'Miesiąc'], correctAnswer: 'Tydzień' },
  { id: 25, language: 'Italian', word: 'Mese', options: ['Rok', 'Wiek', 'Dekada', 'Miesiąc'], correctAnswer: 'Miesiąc' },
  { id: 26, language: 'Italian', word: 'Anno', options: ['Miesiąc', 'Rok', 'Dzień', 'Godzina'], correctAnswer: 'Rok' },
  { id: 27, language: 'Italian', word: 'Oggi', options: ['Wczoraj', 'Jutro', 'Dzisiaj', 'Pojutrze'], correctAnswer: 'Dzisiaj' },
  { id: 28, language: 'Italian', word: 'Domani', options: ['Dzisiaj', 'Wczoraj', 'Przedwczoraj', 'Jutro'], correctAnswer: 'Jutro' },
  { id: 29, language: 'Italian', word: 'Per favore', options: ['Dziękuję', 'Proszę', 'Przepraszam', 'Nie ma za co'], correctAnswer: 'Proszę' },
  { id: 30, language: 'Italian', word: 'Mela', options: ['Banan', 'Pomarańcza', 'Jabłko', 'Gruszka'], correctAnswer: 'Jabłko' },
];
