export interface IrregularVerbQuestion {
  id: number;
  verb: string; // Base form
  form2: string; // Präteritum
  form3: string; // Partizip II
  auxiliary: 'hat' | 'ist';
  translationOptions: string[];
  correctTranslation: string;
}

export const questions: IrregularVerbQuestion[] = [
  { id: 1, verb: 'sein', form2: 'war', form3: 'gewesen', auxiliary: 'ist', translationOptions: ['być', 'mieć', 'robić'], correctTranslation: 'być' },
  { id: 2, verb: 'haben', form2: 'hatte', form3: 'gehabt', auxiliary: 'hat', translationOptions: ['dawać', 'brać', 'mieć'], correctTranslation: 'mieć' },
  { id: 3, verb: 'werden', form2: 'wurde', form3: 'geworden', auxiliary: 'ist', translationOptions: ['stawać się', 'chcieć', 'móc'], correctTranslation: 'stawać się' },
  { id: 4, verb: 'gehen', form2: 'ging', form3: 'gegangen', auxiliary: 'ist', translationOptions: ['przychodzić', 'iść', 'biec'], correctTranslation: 'iść' },
  { id: 5, verb: 'kommen', form2: 'kam', form3: 'gekommen', auxiliary: 'ist', translationOptions: ['iść', 'przychodzić', 'zostawać'], correctTranslation: 'przychodzić' },
  { id: 6, verb: 'sehen', form2: 'sah', form3: 'gesehen', auxiliary: 'hat', translationOptions: ['słyszeć', 'patrzeć', 'widzieć'], correctTranslation: 'widzieć' },
  { id: 7, verb: 'geben', form2: 'gab', form3: 'gegeben', auxiliary: 'hat', translationOptions: ['brać', 'dawać', 'otrzymywać'], correctTranslation: 'dawać' },
  { id: 8, verb: 'nehmen', form2: 'nahm', form3: 'genommen', auxiliary: 'hat', translationOptions: ['dawać', 'brać', 'przynosić'], correctTranslation: 'brać' },
  { id: 9, verb: 'finden', form2: 'fand', form3: 'gefunden', auxiliary: 'hat', translationOptions: ['gubić', 'szukać', 'znajdować'], correctTranslation: 'znajdować' },
  { id: 10, verb: 'bleiben', form2: 'blieb', form3: 'geblieben', auxiliary: 'ist', translationOptions: ['iść', 'zostawać', 'przychodzić'], correctTranslation: 'zostawać' },
  { id: 11, verb: 'liegen', form2: 'lag', form3: 'gelegen', auxiliary: 'hat', translationOptions: ['stać', 'siedzieć', 'leżeć'], correctTranslation: 'leżeć' },
  { id: 12, verb: 'stehen', form2: 'stand', form3: 'gestanden', auxiliary: 'hat', translationOptions: ['leżeć', 'siedzieć', 'stać'], correctTranslation: 'stać' },
  { id: 13, verb: 'denken', form2: 'dachte', form3: 'gedacht', auxiliary: 'hat', translationOptions: ['wiedzieć', 'myśleć', 'mówić'], correctTranslation: 'myśleć' },
  { id: 14, verb: 'wissen', form2: 'wusste', form3: 'gewusst', auxiliary: 'hat', translationOptions: ['myśleć', 'wiedzieć', 'znać'], correctTranslation: 'wiedzieć' },
  { id: 15, verb: 'tun', form2: 'tat', form3: 'getan', auxiliary: 'hat', translationOptions: ['mieć', 'być', 'robić'], correctTranslation: 'robić' },
  { id: 16, verb: 'dürfen', form2: 'durfte', form3: 'gedurft', auxiliary: 'hat', translationOptions: ['musieć', 'powinien', 'móc (zezwolenie)'], correctTranslation: 'móc (zezwolenie)' },
  { id: 17, verb: 'müssen', form2: 'musste', form3: 'gemusst', auxiliary: 'hat', translationOptions: ['móc', 'musieć', 'chcieć'], correctTranslation: 'musieć' },
  { id: 18, verb: 'sollen', form2: 'sollte', form3: 'gesollt', auxiliary: 'hat', translationOptions: ['powinien', 'móc', 'musieć'], correctTranslation: 'powinien' },
  { id: 19, verb: 'wollen', form2: 'wollte', form3: 'gewollt', auxiliary: 'hat', translationOptions: ['móc', 'chcieć', 'lubić'], correctTranslation: 'chcieć' },
  { id: 20, verb: 'mögen', form2: 'mochte', form3: 'gemocht', auxiliary: 'hat', translationOptions: ['chcieć', 'lubić', 'musieć'], correctTranslation: 'lubić' },
  { id: 21, verb: 'bringen', form2: 'brachte', form3: 'gebracht', auxiliary: 'hat', translationOptions: ['zabierać', 'przynosić', 'wysyłać'], correctTranslation: 'przynosić' },
  { id: 22, verb: 'heißen', form2: 'hieß', form3: 'geheißen', auxiliary: 'hat', translationOptions: ['wołać', 'nazywać się', 'mówić'], correctTranslation: 'nazywać się' },
  { id: 23, verb: 'lassen', form2: 'ließ', form3: 'gelassen', auxiliary: 'hat', translationOptions: ['brać', 'robić', 'zostawiać, pozwalać'], correctTranslation: 'zostawiać, pozwalać' },
  { id: 24, verb: 'fahren', form2: 'fuhr', form3: 'gefahren', auxiliary: 'ist', translationOptions: ['iść', 'prowadzić', 'jechać'], correctTranslation: 'jechać' },
  { id: 25, verb: 'laufen', form2: 'lief', form3: 'gelaufen', auxiliary: 'ist', translationOptions: ['biegać, chodzić', 'stać', 'pływać'], correctTranslation: 'biegać, chodzić' },
  { id: 26, verb: 'helfen', form2: 'half', form3: 'geholfen', auxiliary: 'hat', translationOptions: ['przeszkadzać', 'pomagać', 'prosić'], correctTranslation: 'pomagać' },
  { id: 27, verb: 'schlafen', form2: 'schlief', form3: 'geschlafen', auxiliary: 'hat', translationOptions: ['budzić się', 'spać', 'odpoczywać'], correctTranslation: 'spać' },
  { id: 28, verb: 'essen', form2: 'aß', form3: 'gegessen', auxiliary: 'hat', translationOptions: ['pić', 'jeść', 'gotować'], correctTranslation: 'jeść' },
  { id: 29, verb: 'trinken', form2: 'trank', form3: 'getrunken', auxiliary: 'hat', translationOptions: ['jeść', 'pić', 'karmić'], correctTranslation: 'pić' },
  { id: 30, verb: 'lesen', form2: 'las', form3: 'gelesen', auxiliary: 'hat', translationOptions: ['pisać', 'czytać', 'słuchać'], correctTranslation: 'czytać' },
  { id: 31, verb: 'schreiben', form2: 'schrieb', form3: 'geschrieben', auxiliary: 'hat', translationOptions: ['czytać', 'pisać', 'rysować'], correctTranslation: 'pisać' },
  { id: 32, verb: 'sprechen', form2: 'sprach', form3: 'gesprochen', auxiliary: 'hat', translationOptions: ['słuchać', 'milczeć', 'mówić'], correctTranslation: 'mówić' },
  { id: 33, verb: 'verstehen', form2: 'verstand', form3: 'verstanden', auxiliary: 'hat', translationOptions: ['rozumieć', 'ignorować', 'pytać'], correctTranslation: 'rozumieć' },
  { id: 34, verb: 'treffen', form2: 'traf', form3: 'getroffen', auxiliary: 'hat', translationOptions: ['omijać', 'spotykać', 'szukać'], correctTranslation: 'spotykać' },
  { id: 35, verb: 'beginnen', form2: 'begann', form3: 'begonnen', auxiliary: 'hat', translationOptions: ['kończyć', 'zaczynać', 'kontynuować'], correctTranslation: 'zaczynać' },
  { id: 36, verb: 'gewinnen', form2: 'gewann', form3: 'gewonnen', auxiliary: 'hat', translationOptions: ['przegrywać', 'wygrywać', 'remisować'], correctTranslation: 'wygrywać' },
  { id: 37, verb: 'verlieren', form2: 'verlor', form3: 'verloren', auxiliary: 'hat', translationOptions: ['znajdować', 'wygrywać', 'przegrywać'], correctTranslation: 'przegrywać' },
  { id: 38, verb: 'sitzen', form2: 'saß', form3: 'gesessen', auxiliary: 'hat', translationOptions: ['stać', 'leżeć', 'siedzieć'], correctTranslation: 'siedzieć' },
  { id: 39, verb: 'ziehen', form2: 'zog', form3: 'gezogen', auxiliary: 'hat', translationOptions: ['pchać', 'ciągnąć', 'nosić'], correctTranslation: 'ciągnąć' },
  { id: 40, verb: 'fallen', form2: 'fiel', form3: 'gefallen', auxiliary: 'ist', translationOptions: ['wstawać', 'skakać', 'upadać'], correctTranslation: 'upadać' },
  { id: 41, verb: 'brechen', form2: 'brach', form3: 'gebrochen', auxiliary: 'hat', translationOptions: ['naprawiać', 'łamać', 'budować'], correctTranslation: 'łamać' },
  { id: 42, verb: 'entscheiden', form2: 'entschied', form3: 'entschieden', auxiliary: 'hat', translationOptions: ['wahać się', 'decydować', 'myśleć'], correctTranslation: 'decydować' },
  { id: 43, verb: 'rufen', form2: 'rief', form3: 'gerufen', auxiliary: 'hat', translationOptions: ['szeptać', 'wołać', 'milczeć'], correctTranslation: 'wołać' },
  { id: 44, verb: 'singen', form2: 'sang', form3: 'gesungen', auxiliary: 'hat', translationOptions: ['tańczyć', 'śpiewać', 'mówić'], correctTranslation: 'śpiewać' },
  { id: 45, verb: 'fliegen', form2: 'flog', form3: 'geflogen', auxiliary: 'ist', translationOptions: ['pływać', 'latać', 'biegać'], correctTranslation: 'latać' },
  { id: 46, verb: 'vergessen', form2: 'vergaß', form3: 'vergessen', auxiliary: 'hat', translationOptions: ['pamiętać', 'uczyć się', 'zapominać'], correctTranslation: 'zapominać' },
  { id: 47, verb: 'schwimmen', form2: 'schwamm', form3: 'geschwommen', auxiliary: 'ist', translationOptions: ['pływać', 'nurkować', 'biegać'], correctTranslation: 'pływać' },
  { id: 48, verb: 'springen', form2: 'sprang', form3: 'gesprungen', auxiliary: 'ist', translationOptions: ['chodzić', 'stać', 'skakać'], correctTranslation: 'skakać' },
  { id: 49, verb: 'hängen', form2: 'hing', form3: 'gehangen', auxiliary: 'hat', translationOptions: ['kłaść', 'stać', 'wisieć'], correctTranslation: 'wisieć' },
  { id: 50, verb: 'tragen', form2: 'trug', form3: 'getragen', auxiliary: 'hat', translationOptions: ['nosić', 'zdejmować', 'kłaść'], correctTranslation: 'nosić' },
  { id: 51, verb: 'kennen', form2: 'kannte', form3: 'gekannt', auxiliary: 'hat', translationOptions: ['wiedzieć', 'znać', 'rozumieć'], correctTranslation: 'znać' },
  { id: 52, verb: 'nennen', form2: 'nannte', form3: 'genannt', auxiliary: 'hat', translationOptions: ['wołać', 'nazywać', 'mówić'], correctTranslation: 'nazywać' }
];
