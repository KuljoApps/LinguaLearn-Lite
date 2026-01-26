import type { CrosswordPuzzle } from '../crossword-data';

export const crosswordPuzzlesEn: CrosswordPuzzle[] = [
  {
    id: 1,
    gridSize: 7,
    clues: [
      { number: 1, clue: 'Dom', answer: 'HOUSE', x: 1, y: 1, direction: 'across' },
      { number: 2, clue: 'Cześć', answer: 'HELLO', x: 1, y: 1, direction: 'down' },
      { number: 3, clue: 'Woda', answer: 'WATER', x: 3, y: 0, direction: 'down' },
      { number: 4, clue: 'Jeść', answer: 'EAT', x: 3, y: 3, direction: 'across' },
      { number: 5, clue: 'Biegać', answer: 'RUN', x: 5, y: 1, direction: 'down' },
    ],
  },
  {
    id: 2,
    gridSize: 7,
    clues: [
      { number: 1, clue: 'Kot', answer: 'CAT', x: 1, y: 2, direction: 'across' },
      { number: 2, clue: 'Samochód', answer: 'CAR', x: 2, y: 0, direction: 'down' },
      { number: 3, clue: 'Jabłko', answer: 'APPLE', x: 2, y: 2, direction: 'down' },
      { number: 4, clue: 'Czytać', answer: 'READ', x: 0, y: 4, direction: 'across' },
      { number: 5, clue: 'Piłka', answer: 'BALL', x: 4, y: 4, direction: 'across' },
    ],
  },
  {
    id: 3,
    gridSize: 7,
    clues: [
      { number: 1, clue: 'Słońce', answer: 'SUN', x: 1, y: 2, direction: 'across' },
      { number: 2, clue: 'Niebo', answer: 'SKY', x: 1, y: 2, direction: 'down' },
      { number: 3, clue: 'Księżyc', answer: 'MOON', x: 3, y: 0, direction: 'down' },
      { number: 4, clue: 'Gwiazda', answer: 'STAR', x: 1, y: 4, direction: 'across' },
      { number: 5, clue: 'Dzień', answer: 'DAY', x: 5, y: 2, direction: 'down' },
      { number: 6, clue: 'Noc', answer: 'NIGHT', x: 0, y: 6, direction: 'across' },
    ],
  },
  {
    id: 4,
    gridSize: 8,
    clues: [
      { number: 1, clue: 'Książka', answer: 'BOOK', x: 1, y: 1, direction: 'across' },
      { number: 2, clue: 'Szkoła', answer: 'SCHOOL', x: 0, y: 3, direction: 'across' },
      { number: 3, clue: 'Nauczyciel', answer: 'TEACHER', x: 2, y: 1, direction: 'down' },
      { number: 4, clue: 'Uczeń', answer: 'PUPIL', x: 4, y: 3, direction: 'down' },
      { number: 5, clue: 'Klasa', answer: 'CLASS', x: 2, y: 5, direction: 'across' },
    ],
  },
  {
    id: 5,
    gridSize: 8,
    clues: [
      { number: 1, clue: 'Przyjaciel', answer: 'FRIEND', x: 0, y: 1, direction: 'across' },
      { number: 2, clue: 'Rodzina', answer: 'FAMILY', x: 1, y: 0, direction: 'down' },
      { number: 3, clue: 'Miłość', answer: 'LOVE', x: 3, y: 1, direction: 'down' },
      { number: 4, clue: 'Szczęście', answer: 'HAPPY', x: 0, y: 3, direction: 'across' },
      { number: 5, clue: 'Smutek', answer: 'SAD', x: 5, y: 3, direction: 'down' },
      { number: 6, clue: 'Czas', answer: 'TIME', x: 3, y: 5, direction: 'across'},
    ],
  },
];
