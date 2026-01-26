import type { CrosswordPuzzle } from '../crossword-data';

export const crosswordPuzzlesFr: CrosswordPuzzle[] = [
  {
    id: 1,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Dom', answer: 'MAISON', x: 0, y: 1, direction: 'across' },
      { number: 1, clue: 'Cześć', answer: 'SALUT', x: 0, y: 1, direction: 'down' },
      { number: 2, clue: 'Woda', answer: 'EAU', x: 3, y: 0, direction: 'down' },
      { number: 3, clue: 'Jeść', answer: 'MANGER', x: 0, y: 3, direction: 'across' },
    ],
  },
  {
    id: 2,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Kot', answer: 'CHAT', x: 1, y: 2, direction: 'across' },
      { number: 2, clue: 'Samochód', answer: 'VOITURE', x: 2, y: 0, direction: 'down' },
      { number: 3, clue: 'Jabłko', answer: 'POMME', x: 2, y: 2, direction: 'down' },
    ],
  },
  {
    id: 3,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Słońce', answer: 'SOLEIL', x: 0, y: 2, direction: 'across' },
      { number: 1, clue: 'Niebo', answer: 'CIEL', x: 1, y: 2, direction: 'down' },
      { number: 2, clue: 'Księżyc', answer: 'LUNE', x: 3, y: 0, direction: 'down' },
    ],
  },
  {
    id: 4,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Książka', answer: 'LIVRE', x: 1, y: 1, direction: 'across' },
      { number: 1, clue: 'Piłka', answer: 'BALLE', x: 1, y: 1, direction: 'down' },
      { number: 2, clue: 'Czytać', answer: 'LIRE', x: 3, y: 0, direction: 'down' },
    ],
  },
  {
    id: 5,
    gridSize: 6,
    clues: [
      { number: 1, clue: 'Przyjaciel', answer: 'AMI', x: 0, y: 1, direction: 'across' },
      { number: 2, clue: 'Rodzina', answer: 'FAMILLE', x: 1, y: 0, direction: 'down' },
      { number: 3, clue: 'Miłość', answer: 'AMOUR', x: 3, y: 1, direction: 'down' },
    ],
  },
];
