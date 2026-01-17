
export interface Question {
  id: number;
  language: 'Italian';
  word: string;
  options: string[];
  correctAnswer: string;
}

// Italian "Falsi Amici" (False Friends)
export const questions: Question[] = [
  { id: 1, language: 'Italian', word: 'caldo', options: ['zimno', 'ciepło', 'gorąco', 'chłodno'], correctAnswer: 'gorąco' },
  { id: 2, language: 'Italian', word: 'camera', options: ['kamera', 'aparat', 'pokój', 'korytarz'], correctAnswer: 'pokój' },
  { id: 3, language: 'Italian', word: 'confetti', options: ['konfetti', 'cukierki', 'lukrowane migdały', 'ciastka'], correctAnswer: 'lukrowane migdały' },
  { id: 4, language: 'Italian', word: 'morbido', options: ['mroczny', 'chorobliwy', 'twardy', 'miękki'], correctAnswer: 'miękki' },
  { id: 5, language: 'Italian', word: 'salire', options: ['solić', 'wchodzić na górę', 'sprzedawać', 'wychodzić'], correctAnswer: 'wchodzić na górę' },
  { id: 6, language: 'Italian', word: 'attualmente', options: ['aktualnie', 'właściwie', 'faktycznie', 'obecnie'], correctAnswer: 'obecnie' },
  { id: 7, language: 'Italian', word: 'libreria', options: ['biblioteka', 'księgarnia', 'czytelnia', 'archiwum'], correctAnswer: 'księgarnia' },
  { id: 8, language: 'Italian', word: 'firma', options: ['firma', 'spółka', 'podpis', 'fabryka'], correctAnswer: 'podpis' },
  { id: 9, language: 'Italian', word: 'cantina', options: ['kantyna', 'stołówka', 'piwnica', 'bar'], correctAnswer: 'piwnica' },
  { id: 10, language: 'Italian', word: 'patente', options: ['patent', 'wynalazek', 'prawo jazdy', 'pozwolenie'], correctAnswer: 'prawo jazdy' },
  { id: 11, language: 'Italian', word: 'stipendio', options: ['stypendium', 'pensja', 'zasiłek', 'nagroda'], correctAnswer: 'pensja' },
  { id: 12, language: 'Italian', word: 'sega', options: ['saga', 'opowieść', 'piła', 'krzesło'], correctAnswer: 'piła' },
  { id: 13, language: 'Italian', word: 'divano', options: ['dywan', 'sofa/kanapa', 'zasłona', 'podłoga'], correctAnswer: 'sofa/kanapa' },
  { id: 14, language: 'Italian', word: 'gomma', options: ['guma/opona', 'klej', 'pianka', 'plastik'], correctAnswer: 'guma/opona' },
  { id: 15, language: 'Italian', word: 'rumore', options: ['rumieniec', 'plotka', 'hałas', 'melodia'], correctAnswer: 'hałas' },
  { id: 16, language: 'Italian', word: 'baro', options: ['bar', 'pub', 'oszust (w grach)', 'kelner'], correctAnswer: 'oszust (w grach)' },
  { id: 17, language: 'Italian', word: 'data', options: ['prezent', 'dane', 'data (kalendarzowa)', 'fakt'], correctAnswer: 'data (kalendarzowa)' },
  { id: 18, language: 'Italian', word: 'seccatura', options: ['sekator', 'suszarka', 'utrapienie/kłopot', 'nuda'], correctAnswer: 'utrapienie/kłopot' },
  { id: 19, language: 'Italian', word: 'gaz', options: ['gaza', 'bandaż', 'gaz', 'paliwo'], correctAnswer: 'gaz' },
  { id: 20, language: 'Italian', word: 'pasta', options: ['pasta do zębów', 'makaron/ciasto', 'klej', 'smar'], correctAnswer: 'makaron/ciasto' },
  { id: 21, language: 'Italian', word: 'magazzino', options: ['magazyn (czasopismo)', 'magazyn (skład)', 'sklep', 'garaż'], correctAnswer: 'magazyn (skład)' },
  { id: 22, language: 'Italian', word: 'curriculum', options: ['program nauczania', 'życiorys', 'kurs', 'wykład'], correctAnswer: 'życiorys' },
  { id: 23, language: 'Italian', word: 'studio', options: ['studio nagraniowe', 'gabinet/pracownia', 'mieszkanie', 'szkoła'], correctAnswer: 'gabinet/pracownia' },
  { id: 24, language: 'Italian', word: 'stampa', options: ['stempel', 'pieczątka', 'prasa/druk', 'obraz'], correctAnswer: 'prasa/druk' },
  { id: 25, language: 'Italian', word: 'lampione', options: ['lampion', 'lampa', 'latarnia uliczna', 'żyrandol'], correctAnswer: 'latarnia uliczna' },
  { id: 26, language: 'Italian', word: 'conservatorio', options: ['oranżeria', 'konserwatorium muzyczne', 'muzeum', 'ogród zimowy'], correctAnswer: 'konserwatorium muzyczne' },
  { id: 27, language: 'Italian', word: 'palestra', options: ['palestra (sąd)', 'siłownia', 'arena', 'boisko'], correctAnswer: 'siłownia' },
  { id: 28, language: 'Italian', word: 'parenti', options: ['rodzice', 'para', 'partnerzy', 'krewni'], correctAnswer: 'krewni' },
  { id: 29, language: 'Italian', word: 'semestre', options: ['semestr', 'półrocze', 'kwartał', 'trymestr'], correctAnswer: 'semestr' },
  { id: 30, language: 'Italian', word: 'confettura', options: ['konfetti', 'konfitura', 'dżem', 'marmolada'], correctAnswer: 'dżem' },
];
