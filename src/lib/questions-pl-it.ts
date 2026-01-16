
export interface Question {
  id: number;
  language: 'Polish';
  word: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  { id: 1, language: 'Polish', word: 'Cześć', options: ['Arrivederci', 'Ciao', 'Grazie', 'Scusa'], correctAnswer: 'Ciao' },
  { id: 2, language: 'Polish', word: 'Do widzenia', options: ['Ciao', 'Buongiorno', 'Buonanotte', 'Arrivederci'], correctAnswer: 'Arrivederci' },
  { id: 3, language: 'Polish', word: 'Dziękuję', options: ['Prego', 'Per favore', 'Grazie', 'Scusa'], correctAnswer: 'Grazie' },
  { id: 4, language: 'Polish', word: 'Tak', options: ['Sì', 'No', 'Forse', 'Sempre'], correctAnswer: 'Sì' },
  { id: 5, language: 'Polish', word: 'Nie', options: ['Bene', 'Mai', 'Perché', 'No'], correctAnswer: 'No' },
  { id: 6, language: 'Polish', word: 'Mężczyzna', options: ['Donna', 'Uomo', 'Bambino', 'Persona'], correctAnswer: 'Uomo' },
  { id: 7, language: 'Polish', word: 'Kobieta', options: ['Uomo', 'Ragazza', 'Donna', 'Ragazzo'], correctAnswer: 'Donna' },
  { id: 8, language: 'Polish', word: 'Jeść', options: ['Bere', 'Dormire', 'Mangiare', 'Correre'], correctAnswer: 'Mangiare' },
  { id: 9, language: 'Polish', word: 'Woda', options: ['Fuoco', 'Acqua', 'Terra', 'Aria'], correctAnswer: 'Acqua' },
  { id: 10, language: 'Polish', word: 'Kot', options: ['Cane', 'Uccello', 'Pesce', 'Gatto'], correctAnswer: 'Gatto' },
  { id: 11, language: 'Polish', word: 'Pies', options: ['Gatto', 'Cane', 'Leone', 'Tigre'], correctAnswer: 'Cane' },
  { id: 12, language: 'Polish', word: 'Dom', options: ['Macchina', 'Scuola', 'Casa', 'Negozio'], correctAnswer: 'Casa' },
  { id: 13, language: 'Polish', word: 'Samochód', options: ['Bicicletta', 'Treno', 'Autobus', 'Macchina'], correctAnswer: 'Macchina' },
  { id: 14, language: 'Polish', word: 'Szkoła', options: ['Ospedale', 'Scuola', 'Università', 'Biblioteca'], correctAnswer: 'Scuola' },
  { id: 15, language: 'Polish', word: 'Książka', options: ['Film', 'Canzone', 'Libro', 'Quadro'], correctAnswer: 'Libro' },
  { id: 16, language: 'Polish', word: 'Słońce', options: ['Luna', 'Stella', 'Sole', 'Nuvola'], correctAnswer: 'Sole' },
  { id: 17, language: 'Polish', word: 'Księżyc', options: ['Sole', 'Pianeta', 'Luna', 'Cometa'], correctAnswer: 'Luna' },
  { id: 18, language: 'Polish', word: 'Miłość', options: ['Odio', 'Gioia', 'Tristezza', 'Amore'], correctAnswer: 'Amore' },
  { id: 19, language: 'Polish', word: 'Przyjaciel', options: ['Nemico', 'Vicino', 'Amico', 'Famiglia'], correctAnswer: 'Amico' },
  { id: 20, language: 'Polish', word: 'Rodzina', options: ['Amici', 'Famiglia', 'Parenti', 'Vicini'], correctAnswer: 'Famiglia' },
  { id: 21, language: 'Polish', word: 'Rano', options: ['Sera', 'Notte', 'Pomeriggio', 'Mattina'], correctAnswer: 'Mattina' },
  { id: 22, language: 'Polish', word: 'Noc', options: ['Giorno', 'Notte', 'Crepuscolo', 'Alba'], correctAnswer: 'Notte' },
  { id: 23, language: 'Polish', word: 'Dzień', options: ['Settimana', 'Mese', 'Anno', 'Giorno'], correctAnswer: 'Giorno' },
  { id: 24, language: 'Polish', word: 'Tydzień', options: ['Giorno', 'Settimana', 'Fine settimana', 'Mese'], correctAnswer: 'Settimana' },
  { id: 25, language: 'Polish', word: 'Miesiąc', options: ['Anno', 'Secolo', 'Decennio', 'Mese'], correctAnswer: 'Mese' },
  { id: 26, language: 'Polish', word: 'Rok', options: ['Mese', 'Anno', 'Giorno', 'Ora'], correctAnswer: 'Anno' },
  { id: 27, language: 'Polish', word: 'Dzisiaj', options: ['Ieri', 'Domani', 'Oggi', 'Dopodomani'], correctAnswer: 'Oggi' },
  { id: 28, language: 'Polish', word: 'Jutro', options: ['Oggi', 'Ieri', 'L\'altro ieri', 'Domani'], correctAnswer: 'Domani' },
  { id: 29, language: 'Polish', word: 'Proszę', options: ['Grazie', 'Per favore', 'Scusa', 'Prego'], correctAnswer: 'Per favore' },
  { id: 30, language: 'Polish', word: 'Jabłko', options: ['Banana', 'Arancia', 'Mela', 'Pera'], correctAnswer: 'Mela' },
];
