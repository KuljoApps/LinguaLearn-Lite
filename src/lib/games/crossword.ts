import type { Language } from '../storage';
import { crosswordPuzzlesEn } from './crossword/crossword-questions-en';
import { crosswordPuzzlesDe } from './crossword/crossword-questions-de';
import { crosswordPuzzlesFr } from './crossword/crossword-questions-fr';
import { crosswordPuzzlesIt } from './crossword/crossword-questions-it';
import { crosswordPuzzlesEs } from './crossword/crossword-questions-es';

export interface CrosswordClue {
  number: number;
  clue: string;
  answer: string;
  options: string[];
  x: number;
  y: number;
  direction: 'across' | 'down';
}

export interface CrosswordPuzzle {
  id: number;
  gridSize: number;
  gridHeight?: number;
  clues: CrosswordClue[];
}

export const allCrosswordPuzzles: Record<Language, CrosswordPuzzle[]> = {
    en: crosswordPuzzlesEn,
    de: crosswordPuzzlesDe,
    fr: crosswordPuzzlesFr,
    it: crosswordPuzzlesIt,
    es: crosswordPuzzlesEs,
};
