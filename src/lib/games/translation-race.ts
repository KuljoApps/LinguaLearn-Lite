import type { Language } from '../storage';
import { translationRaceWordsEn } from './translation-race/translation-race-questions-en';
import { translationRaceWordsDe } from './translation-race/translation-race-questions-de';
import { translationRaceWordsFr } from './translation-race/translation-race-questions-fr';
import { translationRaceWordsIt } from './translation-race/translation-race-questions-it';
import { translationRaceWordsEs } from './translation-race/translation-race-questions-es';

export interface TranslationPair {
  native: string;
  pl: string;
}

export const allTranslationRaceWords: Record<Language, TranslationPair[]> = {
    en: translationRaceWordsEn,
    de: translationRaceWordsDe,
    fr: translationRaceWordsFr,
    it: translationRaceWordsIt,
    es: translationRaceWordsEs,
};
