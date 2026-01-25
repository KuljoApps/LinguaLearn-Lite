
export interface IrregularVerbQuestion {
  id: number;
  verb: string; // Base form
  form2: string; // Passato prossimo (e.g., 'ho fatto')
  form3: string; // Participio passato
  translationOptions: string[];
  correctTranslation: string;
}

export const questions: IrregularVerbQuestion[] = [
  { id: 1, verb: 'essere', form2: 'sono stato/a', form3: 'stato', translationOptions: ['być', 'mieć', 'robić'], correctTranslation: 'być' },
  { id: 2, verb: 'avere', form2: 'ho avuto', form3: 'avuto', translationOptions: ['dawać', 'brać', 'mieć'], correctTranslation: 'mieć' },
  { id: 3, verb: 'fare', form2: 'ho fatto', form3: 'fatto', translationOptions: ['robić', 'mówić', 'widzieć'], correctTranslation: 'robić' },
  { id: 4, verb: 'andare', form2: 'sono andato/a', form3: 'andato', translationOptions: ['przychodzić', 'iść', 'biec'], correctTranslation: 'iść' },
  { id: 5, verb: 'venire', form2: 'sono venuto/a', form3: 'venuto', translationOptions: ['przychodzić', 'wychodzić', 'zostawać'], correctTranslation: 'przychodzić' },
  { id: 6, verb: 'dire', form2: 'ho detto', form3: 'detto', translationOptions: ['słuchać', 'pisać', 'mówić'], correctTranslation: 'mówić' },
  { id: 7, verb: 'potere', form2: 'ho potuto', form3: 'potuto', translationOptions: ['chcieć', 'móc', 'musieć'], correctTranslation: 'móc' },
  { id: 8, verb: 'volere', form2: 'ho voluto', form3: 'voluto', translationOptions: ['potrzebować', 'chcieć', 'lubić'], correctTranslation: 'chcieć' },
  { id: 9, verb: 'sapere', form2: 'ho saputo', form3: 'saputo', translationOptions: ['myśleć', 'wiedzieć', 'ignorować'], correctTranslation: 'wiedzieć' },
  { id: 10, verb: 'vedere', form2: 'ho visto', form3: 'visto', translationOptions: ['słyszeć', 'patrzeć', 'widzieć'], correctTranslation: 'widzieć' },
  { id: 11, verb: 'dare', form2: 'ho dato', form3: 'dato', translationOptions: ['brać', 'dawać', 'otrzymywać'], correctTranslation: 'dawać' },
  { id: 12, verb: 'prendere', form2: 'ho preso', form3: 'preso', translationOptions: ['dawać', 'brać', 'przynosić'], correctTranslation: 'brać' },
  { id: 13, verb: 'mettere', form2: 'ho messo', form3: 'messo', translationOptions: ['kłaść/wkładać', 'wyjmować', 'przesuwać'], correctTranslation: 'kłaść/wkładać' },
  { id: 14, verb: 'rimanere', form2: 'sono rimasto/a', form3: 'rimasto', translationOptions: ['wychodzić', 'zostawać', 'wracać'], correctTranslation: 'zostawać' },
  { id: 15, verb: 'leggere', form2: 'ho letto', form3: 'letto', translationOptions: ['pisać', 'czytać', 'słuchać'], correctTranslation: 'czytać' },
  { id: 16, verb: 'scrivere', form2: 'ho scritto', form3: 'scritto', translationOptions: ['czytać', 'pisać', 'rysować'], correctTranslation: 'pisać' },
  { id: 17, verb: 'aprire', form2: 'ho aperto', form3: 'aperto', translationOptions: ['zamykać', 'otwierać', 'pukać'], correctTranslation: 'otwierać' },
  { id: 18, verb: 'chiudere', form2: 'ho chiuso', form3: 'chiuso', translationOptions: ['otwierać', 'zamykać', 'łamać'], correctTranslation: 'zamykać' },
  { id: 19, verb: 'bere', form2: 'ho bevuto', form3: 'bevuto', translationOptions: ['jeść', 'pić', 'spać'], correctTranslation: 'pić' },
  { id: 20, verb: 'chiedere', form2: 'ho chiesto', form3: 'chiesto', translationOptions: ['odpowiadać', 'pytać/prosić', 'krzyczeć'], correctTranslation: 'pytać/prosić' },
  { id: 21, verb: 'vincere', form2: 'ho vinto', form3: 'vinto', translationOptions: ['przegrywać', 'remisować', 'wygrywać'], correctTranslation: 'wygrywać' },
  { id: 22, verb: 'perdere', form2: 'ho perso', form3: 'perso', translationOptions: ['znajdować', 'wygrywać', 'przegrywać/gubić'], correctTranslation: 'przegrywać/gubić' },
  { id: 23, verb: 'scegliere', form2: 'ho scelto', form3: 'scelto', translationOptions: ['odrzucać', 'ignorować', 'wybierać'], correctTranslation: 'wybierać' },
  { id: 24, verb: 'nascere', form2: 'sono nato/a', form3: 'nato', translationOptions: ['umierać', 'rodzić się', 'rosnąć'], correctTranslation: 'rodzić się' },
  { id: 25, verb: 'morire', form2: 'sono morto/a', form3: 'morto', translationOptions: ['żyć', 'rodzić się', 'umierać'], correctTranslation: 'umierać' },
  { id: 26, verb: 'vivere', form2: 'ho vissuto', form3: 'vissuto', translationOptions: ['umierać', 'żyć', 'przeżyć'], correctTranslation: 'żyć' },
  { id: 27, verb: 'rompere', form2: 'ho rotto', form3: 'rotto', translationOptions: ['naprawiać', 'budować', 'łamać/psuć'], correctTranslation: 'łamać/psuć' },
  { id: 28, verb: 'correre', form2: 'ho corso', form3: 'corso', translationOptions: ['chodzić', 'biec', 'stać'], correctTranslation: 'biec' },
  { id: 29, verb: 'ridere', form2: 'ho riso', form3: 'riso', translationOptions: ['śmiać się', 'płakać', 'krzyczeć'], correctTranslation: 'śmiać się' },
  { id: 30, verb: 'scendere', form2: 'sono sceso/a', form3: 'sceso', translationOptions: ['wchodzić', 'schodzić', 'wspinać się'], correctTranslation: 'schodzić' },
];
