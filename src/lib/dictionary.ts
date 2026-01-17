
import type { Language } from './storage';
import { bodyPartsDictionary } from './dictionary-body-parts.ts';
import { colorsDictionary } from './dictionary-colors.ts';
import { familyDictionary } from './dictionary-family.ts';
import { foodDictionary } from './dictionary-food.ts';
import { homeDictionary } from './dictionary-home.ts';
import { numbersDictionary } from './dictionary-numbers.ts';
import { timeDictionary } from './dictionary-time.ts';
import { workDictionary } from './dictionary-work.ts';

export interface DictionaryWord {
  word: string;
  translation: string;
  colorCode?: string;
  numeric?: string;
  isHeader?: boolean;
}

export interface DictionaryCategory {
  [category: string]: {
    title: string;
    words: DictionaryWord[];
  };
}

export interface DictionaryContent {
  [lang: string]: DictionaryCategory;
}

const languages: Language[] = ['en', 'de', 'es', 'fr', 'it'];
export const allDictionaries: DictionaryContent = {};

languages.forEach(lang => {
  allDictionaries[lang] = {
    ...(bodyPartsDictionary[lang] || {}),
    ...(colorsDictionary[lang] || {}),
    ...(familyDictionary[lang] || {}),
    ...(foodDictionary[lang] || {}),
    ...(homeDictionary[lang] || {}),
    ...(numbersDictionary[lang] || {}),
    ...(timeDictionary[lang] || {}),
    ...(workDictionary[lang] || {}),
  };
});
