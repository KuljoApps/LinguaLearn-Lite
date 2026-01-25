
export interface Question {
  id: number;
  language: 'Spanish';
  word: string;
  options: string[];
  correctAnswer: string;
}

// Spanish "Falsos Amigos" (False Friends)
export const questions: Question[] = [
  { id: 1, language: 'Spanish', word: 'embarazada', options: ['zawstydzona', 'zażenowana', 'zakłopotana', 'w ciąży'], correctAnswer: 'w ciąży' },
  { id: 2, language: 'Spanish', word: 'la sopa', options: ['sofa', 'kanapa', 'zupa', 'mydło'], correctAnswer: 'zupa' },
  { id: 3, language: 'Spanish', word: 'el éxito', options: ['wyjście', 'sukces', 'wypadek', 'ucieczka'], correctAnswer: 'sukces' },
  { id: 4, language: 'Spanish', word: 'actualmente', options: ['aktualnie', 'właściwie', 'faktycznie', 'obecnie'], correctAnswer: 'obecnie' },
  { id: 5, language: 'Spanish', word: 'constipado', options: ['mający zaparcie', 'przeziębiony', 'zdenerwowany', 'zmieszany'], correctAnswer: 'przeziębiony' },
  { id: 6, language: 'Spanish', word: 'largo', options: ['szeroki', 'duży', 'długi', 'krótki'], correctAnswer: 'długi' },
  { id: 7, language: 'Spanish', word: 'la firma', options: ['firma', 'podpis', 'znak', 'marka'], correctAnswer: 'podpis' },
  { id: 8, language: 'Spanish', word: 'la carpeta', options: ['dywan', 'tapeta', 'teczka', 'serwetka'], correctAnswer: 'teczka' },
  { id: 9, language: 'Spanish', word: 'el suceso', options: ['sukces', 'wydarzenie', 'proces', 'wynik'], correctAnswer: 'wydarzenie' },
  { id: 10, language: 'Spanish', word: 'el bigote', options: ['peruka', 'broda', 'wąsy', 'bokobrody'], correctAnswer: 'wąsy' },
  { id: 11, language: 'Spanish', word: 'la renta', options: ['renta/emerytura', 'dochód/czynsz', 'sprzedaż', 'rabat'], correctAnswer: 'dochód/czynsz' },
  { id: 12, language: 'Spanish', word: 'sano', options: ['święty', 'obłąkany', 'zdrowy', 'smutny'], correctAnswer: 'zdrowy' },
  { id: 13, language: 'Spanish', word: 'la tela', options: ['stół', 'talerz', 'materiał/tkanina', 'nici'], correctAnswer: 'materiał/tkanina' },
  { id: 14, language: 'Spanish', word: 'la carrera', options: ['kariera', 'wyścig/studia', 'samochód', 'droga'], correctAnswer: 'wyścig/studia' },
  { id: 15, language: 'Spanish', word: 'la lectura', options: ['lektura szkolna', 'czytanie', 'wykład', 'list'], correctAnswer: 'czytanie' },
  { id: 16, language: 'Spanish', word: 'el carácter', options: ['postać (w filmie)', 'litera', 'charakter/osobowość', 'aktor'], correctAnswer: 'charakter/osobowość' },
  { id: 17, language: 'Spanish', word: 'el dato', options: ['data (kalendarzowa)', 'prezent', 'dane/informacja', 'fakt'], correctAnswer: 'dane/informacja' },
  { id: 18, language: 'Spanish', word: 'la desgracia', options: ['hańba', 'nieszczęście', 'łaska', 'dyskrecja'], correctAnswer: 'nieszczęście' },
  { id: 19, language: 'Spanish', word: 'la fábrica', options: ['fabryka', 'materiał', 'bajka', 'fasada'], correctAnswer: 'fabryka' },
  { id: 20, language: 'Spanish', word: 'la ganga', options: ['gang', 'grupa', 'okazja (zakup)', 'kradzież'], correctAnswer: 'okazja (zakup)' },
  { id: 21, language: 'Spanish', word: 'el hito', options: ['uderzenie', 'kamień milowy', 'sukces', 'porażka'], correctAnswer: 'kamień milowy' },
  { id: 22, language: 'Spanish', word: 'el idioma', options: ['idiom', 'język', 'dialekt', 'powiedzenie'], correctAnswer: 'język' },
  { id: 23, language: 'Spanish', word: 'la jornada', options: ['wycieczka', 'dzień pracy', 'ogród', 'podróż'], correctAnswer: 'dzień pracy' },
  { id: 24, language: 'Spanish', word: 'la nota', options: ['notatka', 'banknot', 'ocena/nuta', 'wiadomość'], correctAnswer: 'ocena/nuta' },
  { id: 25, language: 'Spanish', word: 'la pala', options: ['pałac', 'piłka', 'szpadel/łopata', 'słup'], correctAnswer: 'szpadel/łopata' },
  { id: 26, language: 'Spanish', word: 'el rumor', options: ['rum', 'pogłoska/szmer', 'hałas', 'melodia'], correctAnswer: 'pogłoska/szmer' },
  { id: 27, language: 'Spanish', word: 'el tópico', options: ['temat', 'stereotyp/truizm', 'tropik', 'miejsce'], correctAnswer: 'stereotyp/truizm' },
  { id: 28, language: 'Spanish', word: 'la trampa', options: ['tramwaj', 'pułapka', 'lampa', 'droga'], correctAnswer: 'pułapka' },
  { id: 29, language: 'Spanish', word: 'el vaso', options: ['wazon', 'waza', 'szklanka', 'miska'], correctAnswer: 'szklanka' },
  { id: 30, language: 'Spanish', word: 'la cita', options: ['cytat', 'miasto', 'spotkanie/wizyta u lekarza', 'szczyt'], correctAnswer: 'spotkanie/wizyta u lekarza' },
];
