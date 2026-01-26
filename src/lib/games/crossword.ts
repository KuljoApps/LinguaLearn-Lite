import type { Language } from '../storage';
import { crosswordPuzzlesEn } from './crossword/crossword-questions-en';
import { crosswordPuzzlesDe } from './crossword/crossword-questions-de';
import { crosswordPuzzlesFr } from './crossword/crossword-questions-fr';
import { crosswordPuzzlesIt } from './crossword/crossword-questions-it';
import { crosswordPuzzlesEs } from './crossword/crossword-questions-es';
import type { CrosswordPuzzle, CrosswordClue } from './crossword/crossword-data';

export type { CrosswordPuzzle, CrosswordClue };

export const allCrosswordPuzzles: Record<Language, CrosswordPuzzle[]> = {
    en: crosswordPuzzlesEn,
    de: crosswordPuzzlesDe,
    fr: crosswordPuzzlesFr,
    it: crosswordPuzzlesIt,
    es: crosswordPuzzlesEs,
};
