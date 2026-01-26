import type { CrosswordPuzzle } from '../crossword-data';

export const crosswordPuzzlesEn: CrosswordPuzzle[] = [
  {
    id: 1,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Dom', answer: 'HOUSE', x: 1, y: 1, direction: 'across' },
      { number: 1, clue: 'Cześć', answer: 'HELLO', x: 1, y: 1, direction: 'down' },
      { number: 2, clue: 'Woda', answer: 'WATER', x: 3, y: 0, direction: 'down' },
      { number: 3, clue: 'Jeść', answer: 'EAT', x: 3, y: 3, direction: 'across' },
    ],
  },
  {
    id: 2,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Kot', answer: 'CAT', x: 1, y: 2, direction: 'across' },
      { number: 2, clue: 'Samochód', answer: 'CAR', x: 2, y: 0, direction: 'down' },
      { number: 3, clue: 'Jabłko', answer: 'APPLE', x: 2, y: 2, direction: 'down' },
    ],
  },
  {
    id: 3,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Słońce', answer: 'SUN', x: 1, y: 2, direction: 'across' },
      { number: 1, clue: 'Niebo', answer: 'SKY', x: 1, y: 2, direction: 'down' },
      { number: 2, clue: 'Księżyc', answer: 'MOON', x: 3, y: 0, direction: 'down' },
    ],
  },
  {
    id: 4,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Książka', answer: 'BOOK', x: 1, y: 1, direction: 'across' },
      { number: 1, clue: 'Piłka', answer: 'BALL', x: 1, y: 1, direction: 'down' },
      { number: 2, clue: 'Czytać', answer: 'READ', x: 3, y: 0, direction: 'down' },
    ],
  },
  {
    id: 5,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Przyjaciel', answer: 'FRIEND', x: 0, y: 1, direction: 'across' },
      { number: 2, clue: 'Rodzina', answer: 'FAMILY', x: 1, y: 0, direction: 'down' },
      { number: 3, clue: 'Miłość', answer: 'LOVE', x: 3, y: 1, direction: 'down' },
    ],
  },
];
