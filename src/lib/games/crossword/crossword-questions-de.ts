import type { CrosswordPuzzle } from '../crossword-data';

export const crosswordPuzzlesDe: CrosswordPuzzle[] = [
  {
    id: 1,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Dom', answer: 'HAUS', x: 1, y: 1, direction: 'across' },
      { number: 1, clue: 'Cześć', answer: 'HALLO', x: 1, y: 1, direction: 'down' },
      { number: 2, clue: 'Woda', answer: 'WASSER', x: 3, y: 0, direction: 'down' },
      { number: 3, clue: 'Jeść', answer: 'ESSEN', x: 3, y: 3, direction: 'across' },
    ],
  },
  {
    id: 2,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Kot', answer: 'KATZE', x: 0, y: 2, direction: 'across' },
      { number: 2, clue: 'Samochód', answer: 'AUTO', x: 2, y: 0, direction: 'down' },
      { number: 3, clue: 'Jabłko', answer: 'APFEL', x: 2, y: 2, direction: 'down' },
    ],
  },
  {
    id: 3,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Słońce', answer: 'SONNE', x: 1, y: 2, direction: 'across' },
      { number: 1, clue: 'Gwiazda', answer: 'STERN', x: 1, y: 2, direction: 'down' },
      { number: 2, clue: 'Księżyc', answer: 'MOND', x: 4, y: 0, direction: 'down' },
    ],
  },
  {
    id: 4,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Książka', answer: 'BUCH', x: 1, y: 1, direction: 'across' },
      { number: 1, clue: 'Piłka', answer: 'BALL', x: 1, y: 1, direction: 'down' },
      { number: 2, clue: 'Czytać', answer: 'LESEN', x: 3, y: 0, direction: 'down' },
    ],
  },
  {
    id: 5,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Przyjaciel', answer: 'FREUND', x: 0, y: 1, direction: 'across' },
      { number: 2, clue: 'Rodzina', answer: 'FAMILIE', x: 1, y: 0, direction: 'down' },
      { number: 3, clue: 'Miłość', answer: 'LIEBE', x: 3, y: 1, direction: 'down' },
    ],
  },
];
