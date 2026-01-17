
export interface Question {
  id: number;
  language: 'French';
  word: string;
  options: string[];
  correctAnswer: string;
}

// This file now contains "Faux Amis" (False Friends)
export const questions: Question[] = [
  { id: 1, language: 'French', word: 'actuellement', options: ['aktualnie', 'obecnie', 'rzeczywiście', 'praktycznie'], correctAnswer: 'obecnie' },
  { id: 2, language: 'French', word: 'la librairie', options: ['biblioteka', 'czytelnia', 'księgarnia', 'archiwum'], correctAnswer: 'księgarnia' },
  { id: 3, language: 'French', word: 'un stage', options: ['staż (pracy)', 'etap', 'praktyka/staż zawodowy', 'kurs'], correctAnswer: 'praktyka/staż zawodowy' },
  { id: 4, language: 'French', word: 'un magasin', options: ['magazyn', 'sklep', 'czasopismo', 'garaż'], correctAnswer: 'sklep' },
  { id: 5, language: 'French', word: 'la cave', options: ['kawa', 'jaskinia', 'piwnica', 'kawiarnia'], correctAnswer: 'piwnica' },
  { id: 6, language: 'French', word: 'sympathique', options: ['współczujący', 'patetyczny', 'miły/przyjazny', 'przystojny'], correctAnswer: 'miły/przyjazny' },
  { id: 7, language: 'French', word: 'la location', options: ['lokacja/miejsce', 'wynajem', 'rezerwacja', 'przeprowadzka'], correctAnswer: 'wynajem' },
  { id: 8, language: 'French', word: 'la lecture', options: ['lektura szkolna', 'czytanie', 'wykład', 'list'], correctAnswer: 'czytanie' },
  { id: 9, language: 'French', word: 'la rentrée', options: ['renta', 'emerytura', 'powrót (do szkoły/pracy)', 'dochód'], correctAnswer: 'powrót (do szkoły/pracy)' },
  { id: 10, language: 'French', word: 'un car', options: ['samochód', 'wagon', 'autobus/autokar', 'wózek'], correctAnswer: 'autobus/autokar' },
  { id: 11, language: 'French', word: 'un parent', options: ['rodzic', 'krewny', 'para', 'partner'], correctAnswer: 'krewny' },
  { id: 12, language: 'French', word: 'la figure', options: ['figura/sylwetka', 'twarz', 'postać', 'diagram'], correctAnswer: 'twarz' },
  { id: 13, language: 'French', word: 'blesser', options: ['błogosławić', 'obrażać', 'ranić', 'całować'], correctAnswer: 'ranić' },
  { id: 14, language: 'French', word: 'la pension', options: ['pensja/wynagrodzenie', 'emerytura/pensjonat', 'napięcie', 'stypendium'], correctAnswer: 'emerytura/pensjonat' },
  { id: 15, language: 'French', word: 'un relief', options: ['relief/ulga', 'rzeźba terenu', 'zabytek', 'pomoc'], correctAnswer: 'rzeźba terenu' },
  { id: 16, language: 'French', word: 'finalement', options: ['finalnie', 'w końcu/ostatecznie', 'formalnie', 'początkowo'], correctAnswer: 'w końcu/ostatecznie' },
  { id: 17, language: 'French', word: 'une affaire', options: ['afera/skandal', 'sprawa/interes', 'romans', 'wydarzenie'], correctAnswer: 'sprawa/interes' },
  { id: 18, language: 'French', word: 'un billion', options: ['bilion', 'miliard', 'milion', 'trylion'], correctAnswer: 'miliard' },
  { id: 19, language: 'French', word: 'la communication', options: ['komunikacja (transport)', 'komunia', 'łączność/porozumienie', 'informacja'], correctAnswer: 'łączność/porozumienie' },
  { id: 20, language: 'French', word: 'un crayon', options: ['kredka', 'długopis', 'ołówek', 'mazak'], correctAnswer: 'ołówek' },
  { id: 21, language: 'French', word: 'une evidence', options: ['ewidencja', 'dowód', 'oczywistość', 'ślad'], correctAnswer: 'oczywistość' },
  { id: 22, language: 'French', word: 'la physionomie', options: ['fizjonomia/wygląd twarzy', 'budowa ciała', 'fizyka', 'kondycja fizyczna'], correctAnswer: 'fizjonomia/wygląd twarzy' },
  { id: 23, language: 'French', word: 'prétendre', options: ['udawać', 'twierdzić/utrzymywać, że', 'preferować', 'obiecywać'], correctAnswer: 'twierdzić/utrzymywać, że' },
  { id: 24, language: 'French', word: 'le raisin', options: ['rodzynki', 'agrest', 'porzeczki', 'winogrona'], correctAnswer: 'winogrona' },
  { id: 25, language: 'French', word: 'rester', options: ['aresztować', 'odpoczywać', 'zostawać', 'rezygnować'], correctAnswer: 'zostawać' },
  { id: 26, language: 'French', word: 'la table', options: ['tablica', 'tabletka', 'stół', 'tabela'], correctAnswer: 'stół' },
  { id: 27, language: 'French', word: 'le tissu', options: ['chusteczka', 'materiał/tkanina', 'ręcznik', 'obrus'], correctAnswer: 'materiał/tkanina' },
  { id: 28, language: 'French', word: 'la veste', options: ['kamizelka', 'marynarka/żakiet', 'bluza', 'sweter'], correctAnswer: 'marynarka/żakiet' },
  { id: 29, language: 'French', word: 'la sollicitude', options: ['samotność', 'solidarność', 'troska/opiekuńczość', 'prośba'], correctAnswer: 'troska/opiekuńczość' },
  { id: 30, language: 'French', word: 'la réclamation', options: ['reklama', 'reklamacja/skarga', 'ogłoszenie', 'rekomendacja'], correctAnswer: 'reklamacja/skarga' },
];
