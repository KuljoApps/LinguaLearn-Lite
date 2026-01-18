import type { Language } from './storage';

export interface AlphabetLetter {
  letter: string;
  phonetic: string;
}

export interface AlphabetData {
  lang: Language;
  alphabet: AlphabetLetter[];
  ui: {
    title: string;
    backButton: string;
  };
}

export const allAlphabetData: Record<Language, AlphabetData> = {
  en: {
    lang: 'en',
    ui: { title: 'Alphabet', backButton: 'Back to Phonetics' },
    alphabet: [
      { letter: 'A', phonetic: '[eɪ]' }, { letter: 'B', phonetic: '[biː]' }, { letter: 'C', phonetic: '[siː]' },
      { letter: 'D', phonetic: '[diː]' }, { letter: 'E', phonetic: '[iː]' }, { letter: 'F', phonetic: '[ɛf]' },
      { letter: 'G', phonetic: '[dʒiː]' }, { letter: 'H', phonetic: '[eɪtʃ]' }, { letter: 'I', phonetic: '[aɪ]' },
      { letter: 'J', phonetic: '[dʒeɪ]' }, { letter: 'K', phonetic: '[keɪ]' }, { letter: 'L', phonetic: '[ɛl]' },
      { letter: 'M', phonetic: '[ɛm]' }, { letter: 'N', phonetic: '[ɛn]' }, { letter: 'O', phonetic: '[oʊ]' },
      { letter: 'P', phonetic: '[piː]' }, { letter: 'Q', phonetic: '[kjuː]' }, { letter: 'R', phonetic: '[ɑːr]' },
      { letter: 'S', phonetic: '[ɛs]' }, { letter: 'T', phonetic: '[tiː]' }, { letter: 'U', phonetic: '[juː]' },
      { letter: 'V', phonetic: '[viː]' }, { letter: 'W', phonetic: '[ˈdʌbəl.juː]' }, { letter: 'X', phonetic: '[ɛks]' },
      { letter: 'Y', phonetic: '[waɪ]' }, { letter: 'Z', phonetic: '[ziː/zɛd]' },
    ],
  },
  de: {
    lang: 'de',
    ui: { title: 'Alphabet', backButton: 'Zurück zur Phonetik' },
    alphabet: [
      { letter: 'A', phonetic: '[aː]' }, { letter: 'B', phonetic: '[beː]' }, { letter: 'C', phonetic: '[tseː]' },
      { letter: 'D', phonetic: '[deː]' }, { letter: 'E', phonetic: '[eː]' }, { letter: 'F', phonetic: '[ɛf]' },
      { letter: 'G', phonetic: '[geː]' }, { letter: 'H', phonetic: '[haː]' }, { letter: 'I', phonetic: '[iː]' },
      { letter: 'J', phonetic: '[jɔt]' }, { letter: 'K', phonetic: '[kaː]' }, { letter: 'L', phonetic: '[ɛl]' },
      { letter: 'M', phonetic: '[ɛm]' }, { letter: 'N', phonetic: '[ɛn]' }, { letter: 'O', phonetic: '[oː]' },
      { letter: 'P', phonetic: '[peː]' }, { letter: 'Q', phonetic: '[kuː]' }, { letter: 'R', phonetic: '[ɛɐ̯]' },
      { letter: 'S', phonetic: '[ɛs]' }, { letter: 'T', phonetic: '[teː]' }, { letter: 'U', phonetic: '[uː]' },
      { letter: 'V', phonetic: '[faʊ]' }, { letter: 'W', phonetic: '[veː]' }, { letter: 'X', phonetic: '[ɪks]' },
      { letter: 'Y', phonetic: '[ˈʏpsilɔn]' }, { letter: 'Z', phonetic: '[tsɛt]' }, { letter: 'Ä', phonetic: '[ɛː]' },
      { letter: 'Ö', phonetic: '[øː]' }, { letter: 'Ü', phonetic: '[yː]' }, { letter: 'ẞ', phonetic: '[ɛsˈtsɛt]' },
    ],
  },
  es: {
    lang: 'es',
    ui: { title: 'Alfabeto', backButton: 'Volver a Fonética' },
    alphabet: [
      { letter: 'A', phonetic: '[a]' }, { letter: 'B', phonetic: '[be]' }, { letter: 'C', phonetic: '[θe/se]' },
      { letter: 'D', phonetic: '[de]' }, { letter: 'E', phonetic: '[e]' }, { letter: 'F', phonetic: '[ˈefe]' },
      { letter: 'G', phonetic: '[xe]' }, { letter: 'H', phonetic: '[ˈatʃe]' }, { letter: 'I', phonetic: '[i]' },
      { letter: 'J', phonetic: '[ˈxota]' }, { letter: 'K', phonetic: '[ka]' }, { letter: 'L', phonetic: '[ˈele]' },
      { letter: 'M', phonetic: '[ˈeme]' }, { letter: 'N', phonetic: '[ˈene]' }, { letter: 'Ñ', phonetic: '[ˈeɲe]' },
      { letter: 'O', phonetic: '[o]' }, { letter: 'P', phonetic: '[pe]' }, { letter: 'Q', phonetic: '[ku]' },
      { letter: 'R', phonetic: '[ˈere]' }, { letter: 'S', phonetic: '[ˈese]' }, { letter: 'T', phonetic: '[te]' },
      { letter: 'U', phonetic: '[u]' }, { letter: 'V', phonetic: '[ˈuβe]' }, { letter: 'W', phonetic: '[uβe ˈðoβle]' },
      { letter: 'X', phonetic: '[ˈekis]' }, { letter: 'Y', phonetic: '[je]' }, { letter: 'Z', phonetic: '[ˈθeta/ˈseta]' },
    ],
  },
  fr: {
    lang: 'fr',
    ui: { title: 'Alphabet', backButton: 'Retour à la Phonétique' },
    alphabet: [
      { letter: 'A', phonetic: '[a]' }, { letter: 'B', phonetic: '[be]' }, { letter: 'C', phonetic: '[se]' },
      { letter: 'D', phonetic: '[de]' }, { letter: 'E', phonetic: '[ə]' }, { letter: 'F', phonetic: '[ɛf]' },
      { letter: 'G', phonetic: '[ʒe]' }, { letter: 'H', phonetic: '[aʃ]' }, { letter: 'I', phonetic: '[i]' },
      { letter: 'J', phonetic: '[ʒi]' }, { letter: 'K', phonetic: '[ka]' }, { letter: 'L', phonetic: '[ɛl]' },
      { letter: 'M', phonetic: '[ɛm]' }, { letter: 'N', phonetic: '[ɛn]' }, { letter: 'O', phonetic: '[o]' },
      { letter: 'P', phonetic: '[pe]' }, { letter: 'Q', phonetic: '[ky]' }, { letter: 'R', phonetic: '[ɛʁ]' },
      { letter: 'S', phonetic: '[ɛs]' }, { letter: 'T', phonetic: '[te]' }, { letter: 'U', phonetic: '[y]' },
      { letter: 'V', phonetic: '[ve]' }, { letter: 'W', phonetic: '[dublə ve]' }, { letter: 'X', phonetic: '[iks]' },
      { letter: 'Y', phonetic: '[igʁɛk]' }, { letter: 'Z', phonetic: '[zɛd]' },
    ],
  },
  it: {
    lang: 'it',
    ui: { title: 'Alfabeto', backButton: 'Torna a Fonetica' },
    alphabet: [
      { letter: 'A', phonetic: '[a]' }, { letter: 'B', phonetic: '[bi]' }, { letter: 'C', phonetic: '[tʃi]' },
      { letter: 'D', phonetic: '[di]' }, { letter: 'E', phonetic: '[e]' }, { letter: 'F', phonetic: '[ˈɛffe]' },
      { letter: 'G', phonetic: '[dʒi]' }, { letter: 'H', phonetic: '[ˈakka]' }, { letter: 'I', phonetic: '[i]' },
      { letter: 'L', phonetic: '[ˈɛlle]' }, { letter: 'M', phonetic: '[ˈɛmme]' }, { letter: 'N', phonetic: '[ˈɛnne]' },
      { letter: 'O', phonetic: '[o]' }, { letter: 'P', phonetic: '[pi]' }, { letter: 'Q', phonetic: '[ku]' },
      { letter: 'R', phonetic: '[ˈɛrre]' }, { letter: 'S', phonetic: '[ˈɛsse]' }, { letter: 'T', phonetic: '[ti]' },
      { letter: 'U', phonetic: '[u]' }, { letter: 'V', phonetic: '[vi/vu]' }, { letter: 'Z', phonetic: '[ˈdzɛːta]' },
    ],
  },
};
