import type { CrosswordPuzzle } from '../crossword-data';

export const crosswordPuzzlesEs: CrosswordPuzzle[] = [
  {
    id: 1,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Dom', answer: 'CASA', x: 1, y: 1, direction: 'across' },
      { number: 1, clue: 'Cześć', answer: 'HOLA', x: 1, y: 1, direction: 'down' },
      { number: 2, clue: 'Woda', answer: 'AGUA', x: 3, y: 0, direction: 'down' },
      { number: 3, clue: 'Jeść', answer: 'COMER', x: 0, y: 3, direction: 'across' },
    ],
  },
  {
    id: 2,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Kot', answer: 'GATO', x: 1, y: 2, direction: 'across' },
      { number: 2, clue: 'Samochód', answer: 'COCHE', x: 2, y: 0, direction: 'down' },
      { number: 3, clue: 'Jabłko', answer: 'MANZANA', x: 2, y: 2, direction: 'down' },
    ],
  },
  {
    id: 3,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Słońce', answer: 'SOL', x: 1, y: 2, direction: 'across' },
      { number: 1, clue: 'Niebo', answer: 'CIELO', x: 1, y: 2, direction: 'down' },
      { number: 2, clue: 'Księżyc', answer: 'LUNA', x: 3, y: 0, direction: 'down' },
    ],
  },
  {
    id: 4,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Książka', answer: 'LIBRO', x: 1, y: 1, direction: 'across' },
      { number: 1, clue: 'Piłka', answer: 'PELOTA', x: 1, y: 1, direction: 'down' },
      { number: 2, clue: 'Czytać', answer: 'LEER', x: 3, y: 0, direction: 'down' },
    ],
  },
  {
    id: 5,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Przyjaciel', answer: 'AMIGO', x: 0, y: 1, direction: 'across' },
      { number: 2, clue: 'Rodzina', answer: 'FAMILIA', x: 1, y: 0, direction: 'down' },
      { number: 3, clue: 'Miłość', answer: 'AMOR', x: 3, y: 1, direction: 'down' },
    ],
  },
];
