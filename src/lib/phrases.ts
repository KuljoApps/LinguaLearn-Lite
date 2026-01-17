
import type { Language } from './storage';
import { airportPhrases } from './phrases-airport.ts';
import { emergencyPhrases } from './phrases-emergency.ts';
import { hotelPhrases } from './phrases-hotel.ts';
import { partyPhrases } from './phrases-party.ts';
import { restaurantPhrases } from './phrases-restaurant.ts';
import { shopPhrases } from './phrases-shop.ts';
import { stationPhrases } from './phrases-station.ts';
import { weatherPhrases } from './phrases-weather.ts';

export interface Phrase {
  phrase: string;
  translation: string;
}

export interface PhraseCategory {
  [category: string]: {
    title: string;
    phrases: Phrase[];
  };
}

export interface PhrasesContent {
  [lang: string]: PhraseCategory;
}

const languages: Language[] = ['en', 'de', 'es', 'fr', 'it'];
export const allPhrases: PhrasesContent = {};

languages.forEach(lang => {
  allPhrases[lang] = {
    ...(airportPhrases[lang] || {}),
    ...(emergencyPhrases[lang] || {}),
    ...(hotelPhrases[lang] || {}),
    ...(partyPhrases[lang] || {}),
    ...(restaurantPhrases[lang] || {}),
    ...(shopPhrases[lang] || {}),
    ...(stationPhrases[lang] || {}),
    ...(weatherPhrases[lang] || {}),
  };
});
