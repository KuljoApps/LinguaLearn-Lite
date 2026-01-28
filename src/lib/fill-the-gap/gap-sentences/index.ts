import type { Language } from '@/lib/storage';
import { gapSentencesQuestionsEn } from './gap-sentences-questions-en';
import { gapSentencesQuestionsDe } from './gap-sentences-questions-de';
import { gapSentencesQuestionsFr } from './gap-sentences-questions-fr';
import { gapSentencesQuestionsEs } from './gap-sentences-questions-es';
import { gapSentencesQuestionsIt } from './gap-sentences-questions-it';

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
