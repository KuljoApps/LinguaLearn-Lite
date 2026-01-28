import type { Language } from '@/lib/storage';
import { gapSentencesQuestionsEn } from './questions-en';
import { gapSentencesQuestionsDe } from './questions-de';
import { gapSentencesQuestionsFr } from './questions-fr';
import { gapSentencesQuestionsEs } from './questions-es';
import { gapSentencesQuestionsIt } from './questions-it';

export interface Gap {
  text: string[]; // [part1, part2]
  options: string[];
  correctAnswer: string;
}

export interface GapSentenceSet {
  id: number;
  title: string;
  sentence1: Gap;
  sentence2: Gap;
}

export const allGapSentenceQuestions: Record<Language, GapSentenceSet[]> = {
  en: gapSentencesQuestionsEn,
  de: gapSentencesQuestionsDe,
  fr: gapSentencesQuestionsFr,
  es: gapSentencesQuestionsEs,
  it: gapSentencesQuestionsIt,
};
