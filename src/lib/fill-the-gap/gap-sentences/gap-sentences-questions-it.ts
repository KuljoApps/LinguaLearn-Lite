import type { GapSentenceSet } from '.';

export const gapSentencesQuestionsIt: GapSentenceSet[] = [
  {
    id: 1,
    title: 'Una giornata al parco',
    sentence1: {
      text: ['Il sole splendeva e gli uccelli cantavano ', ' tra gli alberi.'],
      options: ['forte', 'piano', 'tristemente', 'velocemente'],
      correctAnswer: 'forte',
    },
    sentence2: {
      text: ['I bambini giocavano sulle altalene, e le loro risate riempivano l\'aria ', '.'],
      options: ['fredda', 'calda', 'buia', 'vuota'],
      correctAnswer: 'calda',
    },
    sentence3: {
      text: ['La gente si rilassava sulle coperte, godendosi il ', ' tempo.'],
      options: ['brutto', 'piovoso', 'bel', 'tempestoso'],
      correctAnswer: 'bel',
    },
  },
  {
    id: 2,
    title: 'Routine mattutina',
    sentence1: {
      text: ['Mi ', ' sempre alle 7 del mattino al suono della sveglia.'],
      options: ['dormo', 'sveglio', 'alzo', 'corico'],
      correctAnswer: 'sveglio',
    },
    sentence2: {
      text: ['Poi vado in cucina a prepararmi una ', ' tazza di caffè.'],
      options: ['fredda', 'debole', 'buona', 'blu'],
      correctAnswer: 'buona',
    },
    sentence3: {
        text: ['Prima di andare al lavoro, leggo sempre le ', ' sul mio telefono.'],
        options: ['libri', 'notizie', 'poesie', 'email'],
        correctAnswer: 'notizie',
    },
  },
  {
    id: 3,
    title: 'Fare la spesa',
    sentence1: {
      text: ['Dobbiamo comprare delle ', ' fresche per l\'insalata, come pomodori e cetrioli.'],
      options: ['carni', 'verdure', 'frutta', 'dolci'],
      correctAnswer: 'verdure',
    },
    sentence2: {
      text: ['Oh, ho quasi ', ' di comprare il latte; è la cosa più importante sulla lista!'],
      options: ['ricordato', 'dimenticato', 'comprato', 'visto'],
      correctAnswer: 'dimenticato',
    },
    sentence3: {
        text: ['Non dimenticare di prendere una borsa ', ' per trasportare tutto.'],
        options: ['di carta', 'di plastica', 'riutilizzabile', 'piccola'],
        correctAnswer: 'riutilizzabile',
    },
  },
  {
    id: 4,
    title: 'Cucinare la cena',
    sentence1: {
      text: ['Per prima cosa, devi ', ' finemente le cipolle e l\'aglio.'],
      options: ['tritare', 'bollire', 'infornare', 'friggere'],
      correctAnswer: 'tritare',
    },
    sentence2: {
      text: ['Poi, aggiungi la salsa nella pentola e ', ' di tanto in tanto.'],
      options: ['congela', 'brucia', 'mescola', 'bevi'],
      correctAnswer: 'mescola',
    },
    sentence3: {
        text: ['Lascia sobbollire per 10 minuti per far ', ' i sapori.'],
        options: ['separare', 'svanire', 'amalgamare', 'raffreddare'],
        correctAnswer: 'amalgamare',
    },
  },
  {
    id: 5,
    title: 'Una giornata di pioggia',
    sentence1: {
      text: ['La pioggia cadeva ', ' contro i vetri delle finestre.'],
      options: ['dolcemente', 'fortemente', 'silenziosamente', 'raramente'],
      correctAnswer: 'fortemente',
    },
    sentence2: {
      text: ['Era una giornata perfetta per restare in casa a leggere un ', ' libro.'],
      options: ['noioso', 'bel', 'corto', 'rumoroso'],
      correctAnswer: 'bel',
    },
    sentence3: {
        text: ['Una tazza di tè caldo era la ', ' perfetta per il pomeriggio accogliente.'],
        options: ['nemica', 'compagna', 'distrazione', 'sfida'],
        correctAnswer: 'compagna',
    },
  },
  {
    id: 6,
    title: 'Andare al cinema',
    sentence1: {
      text: ['Abbiamo comprato due ', ' per lo spettacolo delle 20:00 del nuovo film di fantascienza.'],
      options: ['popcorn', 'bevande', 'biglietti', 'posti'],
      correctAnswer: 'biglietti',
    },
    sentence2: {
      text: ['Il film era così ', ' che non riuscivo a staccare gli occhi dallo schermo.'],
      options: ['noioso', 'lungo', 'avvincente', 'triste'],
      correctAnswer: 'avvincente',
    },
    sentence3: {
        text: ['Gli effetti sonori erano incredibili e rendevano l\'esperienza ', '.'],
        options: ['silenziosa', 'confusa', 'immersiva', 'piatta'],
        correctAnswer: 'immersiva',
    },
  },
  {
    id: 7,
    title: 'Pianificare un viaggio',
    sentence1: {
      text: ['Devo ', ' un volo per Madrid per le mie vacanze il mese prossimo.'],
      options: ['cancellare', 'guidare', 'prenotare', 'perdere'],
      correctAnswer: 'prenotare',
    },
    sentence2: {
      text: ['Dovrei anche preparare una valigia con tutti i vestiti ', ' per il viaggio.'],
      options: ['sporchi', 'necessari', 'vecchi', 'pesanti'],
      correctAnswer: 'necessari',
    },
    sentence3: {
        text: ['Dovrò anche trovare un buon ', ' vicino al centro della città.'],
        options: ['ristorante', 'parco', 'hotel', 'negozio'],
        correctAnswer: 'hotel',
    },
  },
  {
    id: 8,
    title: 'In palestra',
    sentence1: {
      text: ['Gli piace sollevare ', ' pesanti per aumentare la sua forza muscolare.'],
      options: ['libri', 'pesi', 'piume', 'cuscini'],
      correctAnswer: 'pesi',
    },
    sentence2: {
      text: ['Dopo di che, di solito corre per 30 minuti sul ', ' per migliorare il suo cardio.'],
      options: ['divano', 'tapis roulant', 'letto', 'pavimento'],
      correctAnswer: 'tapis roulant',
    },
    sentence3: {
        text: ['È importante fare ', ' correttamente prima di iniziare qualsiasi allenamento.'],
        options: ['colazione', 'una doccia', 'stretching', 'una pausa'],
        correctAnswer: 'stretching',
    },
  },
  {
    id: 9,
    title: 'Un cane domestico',
    sentence1: {
      text: ['Il cane amichevole scodinzola con la ', ' ogni volta che vede il suo padrone.'],
      options: ['testa', 'zampe', 'coda', 'orecchie'],
      correctAnswer: 'coda',
    },
    sentence2: {
      text: ['Adora giocare a ', ' la palla rossa nel parco.'],
      options: ['dormire', 'riportare', 'nascondere', 'leggere'],
      correctAnswer: 'riportare',
    },
    sentence3: {
        text: ['Ogni sera, fanno una lunga ', ' nel quartiere.'],
        options: ['dormita', 'festa', 'passeggiata', 'corsa'],
        correctAnswer: 'passeggiata',
    },
  },
  {
    id: 10,
    title: 'Leggere un libro',
    sentence1: {
      text: ['Ha girato con attenzione la ', ' successiva per vedere cosa sarebbe successo.'],
      options: ['pagina', 'angolo', 'copertina', 'capitolo'],
      correctAnswer: 'pagina',
    },
    sentence2: {
      text: ['Era così facile perdersi nell\'affascinante ', ' del romanzo.'],
      options: ['immagini', 'indice', 'storia', 'prezzo'],
      correctAnswer: 'storia',
    },
    sentence3: {
        text: ['Lo stile di scrittura dell\'autore era sia ', ' che facile da seguire.'],
        options: ['confusionario', 'noioso', 'elegante', 'semplice'],
        correctAnswer: 'elegante',
    },
  },
];
