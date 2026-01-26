import type { CrosswordPuzzle } from '../crossword-data';

export const crosswordPuzzlesFr: CrosswordPuzzle[] = [
  {
    id: 1,
    gridSize: 7,
    clues: [
      { number: 1, clue: 'Dom', answer: 'MAISON', x: 0, y: 1, direction: 'across' },
      { number: 2, clue: 'Cześć', answer: 'SALUT', x: 0, y: 1, direction: 'down' },
      { number: 3, clue: 'Woda', answer: 'EAU', x: 3, y: 0, direction: 'down' },
      { number: 4, clue: 'Jeść', answer: 'MANGER', x: 0, y: 3, direction: 'across' },
      { number: 5, clue: 'Biegać', answer: 'COURIR', x: 4, y: 3, direction: 'down' },
    ],
  },
  {
    id: 2,
    gridSize: 7,
    clues: [
      { number: 1, clue: 'Kot', answer: 'CHAT', x: 1, y: 2, direction: 'across' },
      { number: 2, clue: 'Samochód', answer: 'VOITURE', x: 2, y: 0, direction: 'down' },
      { number: 3, clue: 'Jabłko', answer: 'POMME', x: 2, y: 2, direction: 'down' },
      { number: 4, clue: 'Czytać', answer: 'LIRE', x: 0, y: 4, direction: 'across' },
    ],
  },
  {
    id: 3,
    gridSize: 7,
    clues: [
      { number: 1, clue: 'Słońce', answer: 'SOLEIL', x: 0, y: 2, direction: 'across' },
      { number: 2, clue: 'Niebo', answer: 'CIEL', x: 1, y: 2, direction: 'down' },
      { number: 3, clue: 'Księżyc', answer: 'LUNE', x: 3, y: 0, direction: 'down' },
      { number: 4, clue: 'Gwiazda', answer: 'ETOILE', x: 1, y: 4, direction: 'across' },
    ],
  },
  {
    id: 4,
    gridSize: 8,
    clues: [
      { number: 1, clue: 'Książka', answer: 'LIVRE', x: 1, y: 1, direction: 'across' },
      { number: 2, clue: 'Szkoła', answer: 'ECOLE', x: 0, y: 3, direction: 'across' },
      { number: 3, clue: 'Nauczyciel', answer: 'PROF', x: 2, y: 1, direction: 'down' },
      { number: 4, clue: 'Uczeń', answer: 'ELEVE', x: 4, y: 3, direction: 'down' },
    ],
  },
  {
    id: 5,
    gridSize: 8,
    clues: [
      { number: 1, clue: 'Przyjaciel', answer: 'AMI', x: 0, y: 1, direction: 'across' },
      { number: 2, clue: 'Rodzina', answer: 'FAMILLE', x: 1, y: 0, direction: 'down' },
      { number: 3, clue: 'Miłość', answer: 'AMOUR', x: 3, y: 1, direction: 'down' },
      { number: 4, clue: 'Szczęście', answer: 'BONHEUR', x: 0, y: 3, direction: 'across' },
      { number: 5, clue: 'Smutek', answer: 'TRISTE', x: 5, y: 3, direction: 'down' },
    ],
  },
];
