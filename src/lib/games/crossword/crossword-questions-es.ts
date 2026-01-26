import type { CrosswordPuzzle } from '../crossword-data';

export const crosswordPuzzlesEs: CrosswordPuzzle[] = [
  {
    id: 1,
    gridSize: 7,
    clues: [
      { number: 1, clue: 'Dom', answer: 'CASA', x: 1, y: 1, direction: 'across' },
      { number: 2, clue: 'Cześć', answer: 'HOLA', x: 1, y: 1, direction: 'down' },
      { number: 3, clue: 'Woda', answer: 'AGUA', x: 3, y: 0, direction: 'down' },
      { number: 4, clue: 'Jeść', answer: 'COMER', x: 0, y: 3, direction: 'across' },
      { number: 5, clue: 'Biegać', answer: 'CORRER', x: 4, y: 3, direction: 'down' },
    ],
  },
  {
    id: 2,
    gridSize: 7,
    clues: [
      { number: 1, clue: 'Kot', answer: 'GATO', x: 1, y: 2, direction: 'across' },
      { number: 2, clue: 'Samochód', answer: 'COCHE', x: 2, y: 0, direction: 'down' },
      { number: 3, clue: 'Jabłko', answer: 'MANZANA', x: 2, y: 2, direction: 'down' },
      { number: 4, clue: 'Czytać', answer: 'LEER', x: 0, y: 4, direction: 'across' },
    ],
  },
  {
    id: 3,
    gridSize: 7,
    clues: [
      { number: 1, clue: 'Słońce', answer: 'SOL', x: 1, y: 2, direction: 'across' },
      { number: 2, clue: 'Niebo', answer: 'CIELO', x: 1, y: 2, direction: 'down' },
      { number: 3, clue: 'Księżyc', answer: 'LUNA', x: 3, y: 0, direction: 'down' },
      { number: 4, clue: 'Gwiazda', answer: 'ESTRELLA', x: 1, y: 4, direction: 'across' },
      { number: 5, clue: 'Dzień', answer: 'DIA', x: 5, y: 2, direction: 'down' },
    ],
  },
  {
    id: 4,
    gridSize: 8,
    clues: [
      { number: 1, clue: 'Książka', answer: 'LIBRO', x: 1, y: 1, direction: 'across' },
      { number: 2, clue: 'Szkoła', answer: 'ESCUELA', x: 0, y: 3, direction: 'across' },
      { number: 3, clue: 'Nauczyciel', answer: 'PROFESOR', x: 2, y: 1, direction: 'down' },
      { number: 4, clue: 'Uczeń', answer: 'ALUMNO', x: 4, y: 3, direction: 'down' },
    ],
  },
  {
    id: 5,
    gridSize: 8,
    clues: [
      { number: 1, clue: 'Przyjaciel', answer: 'AMIGO', x: 0, y: 1, direction: 'across' },
      { number: 2, clue: 'Rodzina', answer: 'FAMILIA', x: 1, y: 0, direction: 'down' },
      { number: 3, clue: 'Miłość', answer: 'AMOR', x: 3, y: 1, direction: 'down' },
      { number: 4, clue: 'Szczęście', answer: 'FELIZ', x: 0, y: 3, direction: 'across' },
      { number: 5, clue: 'Smutek', answer: 'TRISTE', x: 5, y: 3, direction: 'down' },
    ],
  },
];
