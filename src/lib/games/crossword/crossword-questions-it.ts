import type { CrosswordPuzzle } from '../crossword-data';

export const crosswordPuzzlesIt: CrosswordPuzzle[] = [
  {
    id: 1,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Dom', answer: 'CASA', x: 1, y: 1, direction: 'across' },
      { number: 1, clue: 'Cześć', answer: 'CIAO', x: 1, y: 1, direction: 'down' },
      { number: 2, clue: 'Woda', answer: 'ACQUA', x: 3, y: 0, direction: 'down' },
      { number: 3, clue: 'Jeść', answer: 'MANGIARE', x: 0, y: 3, direction: 'across' },
    ],
  },
  {
    id: 2,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Kot', answer: 'GATTO', x: 0, y: 2, direction: 'across' },
      { number: 2, clue: 'Samochód', answer: 'MACCHINA', x: 2, y: 0, direction: 'down' },
      { number: 3, clue: 'Jabłko', answer: 'MELA', x: 2, y: 2, direction: 'down' },
    ],
  },
  {
    id: 3,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Słońce', answer: 'SOLE', x: 1, y: 2, direction: 'across' },
      { number: 1, clue: 'Niebo', answer: 'CIELO', x: 1, y: 2, direction: 'down' },
      { number: 2, clue: 'Księżyc', answer: 'LUNA', x: 3, y: 0, direction: 'down' },
    ],
  },
  {
    id: 4,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Książka', answer: 'LIBRO', x: 1, y: 1, direction: 'across' },
      { number: 1, clue: 'Piłka', answer: 'PALLA', x: 1, y: 1, direction: 'down' },
      { number: 2, clue: 'Czytać', answer: 'LEGGERE', x: 3, y: 0, direction: 'down' },
    ],
  },
  {
    id: 5,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Przyjaciel', answer: 'AMICO', x: 0, y: 1, direction: 'across' },
      { number: 2, clue: 'Rodzina', answer: 'FAMIGLIA', x: 1, y: 0, direction: 'down' },
      { number: 3, clue: 'Miłość', answer: 'AMORE', x: 3, y: 1, direction: 'down' },
    ],
  },
];
