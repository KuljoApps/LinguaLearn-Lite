import type { Language } from './storage';

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

export const allPhrases: PhrasesContent = {
  en: {
    restaurant: {
      title: 'Restaurant',
      phrases: [
        { phrase: 'A table for two, please.', translation: 'Stolik dla dwojga, proszę.' },
        { phrase: 'Can I see the menu, please?', translation: 'Czy mogę zobaczyć menu?' },
        { phrase: 'I would like to order...', translation: 'Chciałbym/Chciałabym zamówić...' },
        { phrase: 'The bill, please.', translation: 'Rachunek, proszę.' },
        { phrase: 'I\'m a vegetarian.', translation: 'Jestem wegetarianinem/wegetarianką.' },
        { phrase: 'Is this dish spicy?', translation: 'Czy to danie jest ostre?' },
      ]
    },
    airport: {
        title: 'Airport',
        phrases: [
            { phrase: 'Where is gate B25?', translation: 'Gdzie jest bramka B25?' },
            { phrase: 'My flight is delayed.', translation: 'Mój lot jest opóźniony.' },
            { phrase: 'I have one bag to check in.', translation: 'Mam jedną torbę do nadania.' },
            { phrase: 'Where can I find the arrivals hall?', translation: 'Gdzie znajdę halę przylotów?' },
        ]
    },
    shop: {
        title: 'Shop',
        phrases: [
            { phrase: 'How much is this?', translation: 'Ile to kosztuje?' },
            { phrase: 'Do you have this in a smaller/larger size?', translation: 'Czy macie to w mniejszym/większym rozmiarze?' },
            { phrase: 'I\'m just looking, thanks.', translation: 'Tylko się rozglądam, dziękuję.' },
            { phrase: 'Can I pay by card?', translation: 'Czy mogę zapłacić kartą?' },
        ]
    },
    station: {
        title: 'Station',
        phrases: [
            { phrase: 'A one-way ticket to London, please.', translation: 'Poproszę bilet w jedną stronę do Londynu.' },
            { phrase: 'Which platform does the train leave from?', translation: 'Z którego peronu odjeżdża pociąg?' },
            { phrase: 'Is this seat taken?', translation: 'Czy to miejsce jest zajęte?' },
        ]
    },
    party: {
        title: 'Party',
        phrases: [
            { phrase: 'Thanks for inviting me.', translation: 'Dziękuję za zaproszenie.' },
            { phrase: 'This is delicious!', translation: 'To jest pyszne!' },
            { phrase: 'Cheers!', translation: 'Na zdrowie!' },
            { phrase: 'Do you want to dance?', translation: 'Chcesz zatańczyć?' },
        ]
    },
    emergency: {
        title: 'Emergency',
        phrases: [
            { phrase: 'Help!', translation: 'Pomocy!' },
            { phrase: 'Call an ambulance!', translation: 'Wezwij karetkę!' },
            { phrase: 'I\'ve lost my wallet.', translation: 'Zgubiłem/am portfel.' },
            { phrase: 'I need a doctor.', translation: 'Potrzebuję lekarza.' },
        ]
    },
  },
  de: {
    restaurant: {
      title: 'Im Restaurant',
      phrases: [
        { phrase: 'Einen Tisch für zwei, bitte.', translation: 'Stolik dla dwojga, proszę.' },
        { phrase: 'Könnte ich bitte die Speisekarte haben?', translation: 'Czy mogę prosić o kartę dań?' },
        { phrase: 'Ich möchte bestellen...', translation: 'Chciałbym/Chciałabym zamówić...' },
        { phrase: 'Die Rechnung, bitte.', translation: 'Rachunek, proszę.' },
        { phrase: 'Ich bin Vegetarier/in.', translation: 'Jestem wegetarianinem/wegetarianką.' },
        { phrase: 'Ist dieses Gericht scharf?', translation: 'Czy to danie jest ostre?' },
      ]
    },
    airport: {
        title: 'Am Flughafen',
        phrases: [
            { phrase: 'Wo ist das Gate B25?', translation: 'Gdzie jest bramka B25?' },
            { phrase: 'Mein Flug hat Verspätung.', translation: 'Mój lot jest opóźniony.' },
            { phrase: 'Ich habe einen Koffer zum Aufgeben.', translation: 'Mam jedną torbę do nadania.' },
            { phrase: 'Wo finde ich die Ankunftshalle?', translation: 'Gdzie znajdę halę przylotów?' },
        ]
    },
    shop: {
        title: 'Im Geschäft',
        phrases: [
            { phrase: 'Wie viel kostet das?', translation: 'Ile to kosztuje?' },
            { phrase: 'Haben Sie das in einer kleineren/größeren Größe?', translation: 'Czy macie to w mniejszym/większym rozmiarze?' },
            { phrase: 'Ich schaue nur, danke.', translation: 'Tylko się rozglądam, dziękuję.' },
            { phrase: 'Kann ich mit Karte bezahlen?', translation: 'Czy mogę zapłacić kartą?' },
        ]
    },
    station: {
        title: 'Am Bahnhof',
        phrases: [
            { phrase: 'Eine einfache Fahrt nach Berlin, bitte.', translation: 'Poproszę bilet w jedną stronę do Berlina.' },
            { phrase: 'Von welchem Gleis fährt der Zug ab?', translation: 'Z którego peronu odjeżdża pociąg?' },
            { phrase: 'Ist dieser Platz besetzt?', translation: 'Czy to miejsce jest zajęte?' },
        ]
    },
    party: {
        title: 'Auf einer Party',
        phrases: [
            { phrase: 'Danke für die Einladung.', translation: 'Dziękuję za zaproszenie.' },
            { phrase: 'Das ist köstlich!', translation: 'To jest pyszne!' },
            { phrase: 'Prost!', translation: 'Na zdrowie!' },
            { phrase: 'Möchtest du tanzen?', translation: 'Chcesz zatańczyć?' },
        ]
    },
    emergency: {
        title: 'Notfall',
        phrases: [
            { phrase: 'Hilfe!', translation: 'Pomocy!' },
            { phrase: 'Rufen Sie einen Krankenwagen!', translation: 'Wezwij karetkę!' },
            { phrase: 'Ich habe meine Brieftasche verloren.', translation: 'Zgubiłem/am portfel.' },
            { phrase: 'Ich brauche einen Arzt.', translation: 'Potrzebuję lekarza.' },
        ]
    },
  },
  fr: {
    restaurant: {
      title: 'Au Restaurant',
      phrases: [
        { phrase: 'Une table pour deux, s\'il vous plaît.', translation: 'Stolik dla dwojga, proszę.' },
        { phrase: 'Je peux voir le menu, s\'il vous plaît?', translation: 'Czy mogę zobaczyć menu?' },
        { phrase: 'Je voudrais commander...', translation: 'Chciałbym/Chciałabym zamówić...' },
        { phrase: 'L\'addition, s\'il vous plaît.', translation: 'Rachunek, proszę.' },
        { phrase: 'Je suis végétarien(ne).', translation: 'Jestem wegetarianinem/wegetarianką.' },
        { phrase: 'Est-ce que ce plat est épicé?', translation: 'Czy to danie jest ostre?' },
      ]
    },
    airport: {
        title: 'À l\'Aéroport',
        phrases: [
            { phrase: 'Où est la porte d\'embarquement B25?', translation: 'Gdzie jest bramka B25?' },
            { phrase: 'Mon vol est en retard.', translation: 'Mój lot jest opóźniony.' },
            { phrase: 'J\'ai une valise à enregistrer.', translation: 'Mam jedną torbę do nadania.' },
            { phrase: 'Où se trouve le hall des arrivées?', translation: 'Gdzie znajdę halę przylotów?' },
        ]
    },
    shop: {
        title: 'Au Magasin',
        phrases: [
            { phrase: 'Combien ça coûte?', translation: 'Ile to kosztuje?' },
            { phrase: 'Vous avez ça dans une taille plus petite/grande?', translation: 'Czy macie to w mniejszym/większym rozmiarze?' },
            { phrase: 'Je regarde juste, merci.', translation: 'Tylko się rozglądam, dziękuję.' },
            { phrase: 'Je peux payer par carte?', translation: 'Czy mogę zapłacić kartą?' },
        ]
    },
    station: {
        title: 'À la Gare',
        phrases: [
            { phrase: 'Un aller simple pour Paris, s\'il vous plaît.', translation: 'Poproszę bilet w jedną stronę do Paryża.' },
            { phrase: 'De quel quai part le train?', translation: 'Z którego peronu odjeżdża pociąg?' },
            { phrase: 'Est-ce que cette place est prise?', translation: 'Czy to miejsce jest zajęte?' },
        ]
    },
    party: {
        title: 'À une Fête',
        phrases: [
            { phrase: 'Merci pour l\'invitation.', translation: 'Dziękuję za zaproszenie.' },
            { phrase: 'C\'est délicieux!', translation: 'To jest pyszne!' },
            { phrase: 'Santé!', translation: 'Na zdrowie!' },
            { phrase: 'Tu veux danser?', translation: 'Chcesz zatańczyć?' },
        ]
    },
    emergency: {
        title: 'Urgence',
        phrases: [
            { phrase: 'Au secours!', translation: 'Pomocy!' },
            { phrase: 'Appelez une ambulance!', translation: 'Wezwij karetkę!' },
            { phrase: 'J\'ai perdu mon portefeuille.', translation: 'Zgubiłem/am portfel.' },
            { phrase: 'J\'ai besoin d\'un médecin.', translation: 'Potrzebuję lekarza.' },
        ]
    },
  },
  es: {
    restaurant: {
      title: 'En el Restaurante',
      phrases: [
        { phrase: 'Una mesa para dos, por favor.', translation: 'Stolik dla dwojga, proszę.' },
        { phrase: '¿Puedo ver el menú, por favor?', translation: 'Czy mogę zobaczyć menu?' },
        { phrase: 'Quisiera pedir...', translation: 'Chciałbym/Chciałabym zamówić...' },
        { phrase: 'La cuenta, por favor.', translation: 'Rachunek, proszę.' },
        { phrase: 'Soy vegetariano/a.', translation: 'Jestem wegetarianinem/wegetarianką.' },
        { phrase: '¿Este plato es picante?', translation: 'Czy to danie jest ostre?' },
      ]
    },
    airport: {
        title: 'En el Aeropuerto',
        phrases: [
            { phrase: '¿Dónde está la puerta de embarque B25?', translation: 'Gdzie jest bramka B25?' },
            { phrase: 'Mi vuelo está retrasado.', translation: 'Mój lot jest opóźniony.' },
            { phrase: 'Tengo una maleta para facturar.', translation: 'Mam jedną torbę do nadania.' },
            { phrase: '¿Dónde puedo encontrar la sala de llegadas?', translation: 'Gdzie znajdę halę przylotów?' },
        ]
    },
    shop: {
        title: 'En la Tienda',
        phrases: [
            { phrase: '¿Cuánto cuesta esto?', translation: 'Ile to kosztuje?' },
            { phrase: '¿Tiene esto en una talla más pequeña/grande?', translation: 'Czy macie to w mniejszym/większym rozmiarze?' },
            { phrase: 'Solo estoy mirando, gracias.', translation: 'Tylko się rozglądam, dziękuję.' },
            { phrase: '¿Puedo pagar con tarjeta?', translation: 'Czy mogę zapłacić kartą?' },
        ]
    },
    station: {
        title: 'En la Estación',
        phrases: [
            { phrase: 'Un billete de ida a Madrid, por favor.', translation: 'Poproszę bilet w jedną stronę do Madrytu.' },
            { phrase: '¿De qué andén sale el tren?', translation: 'Z którego peronu odjeżdża pociąg?' },
            { phrase: '¿Está ocupado este asiento?', translation: 'Czy to miejsce jest zajęte?' },
        ]
    },
    party: {
        title: 'En una Fiesta',
        phrases: [
            { phrase: 'Gracias por invitarme.', translation: 'Dziękuję za zaproszenie.' },
            { phrase: '¡Esto está delicioso!', translation: 'To jest pyszne!' },
            { phrase: '¡Salud!', translation: 'Na zdrowie!' },
            { phrase: '¿Quieres bailar?', translation: 'Chcesz zatańczyć?' },
        ]
    },
    emergency: {
        title: 'Emergencia',
        phrases: [
            { phrase: '¡Socorro!', translation: 'Pomocy!' },
            { phrase: '¡Llame a una ambulancia!', translation: 'Wezwij karetkę!' },
            { phrase: 'He perdido mi cartera.', translation: 'Zgubiłem/am portfel.' },
            { phrase: 'Necesito un médico.', translation: 'Potrzebuję lekarza.' },
        ]
    },
  },
  it: {
    restaurant: {
      title: 'Al Ristorante',
      phrases: [
        { phrase: 'Un tavolo per due, per favore.', translation: 'Stolik dla dwojga, proszę.' },
        { phrase: 'Posso vedere il menu, per favore?', translation: 'Czy mogę zobaczyć menu?' },
        { phrase: 'Vorrei ordinare...', translation: 'Chciałbym/Chciałabym zamówić...' },
        { phrase: 'Il conto, per favore.', translation: 'Rachunek, proszę.' },
        { phrase: 'Sono vegetariano/a.', translation: 'Jestem wegetarianinem/wegetarianką.' },
        { phrase: 'Questo piatto è piccante?', translation: 'Czy to danie jest ostre?' },
      ]
    },
    airport: {
        title: 'All\'Aeroporto',
        phrases: [
            { phrase: 'Dov\'è il gate B25?', translation: 'Gdzie jest bramka B25?' },
            { phrase: 'Il mio volo è in ritardo.', translation: 'Mój lot jest opóźniony.' },
            { phrase: 'Ho una valigia da imbarcare.', translation: 'Mam jedną torbę do nadania.' },
            { phrase: 'Dove posso trovare la sala arrivi?', translation: 'Gdzie znajdę halę przylotów?' },
        ]
    },
    shop: {
        title: 'In Negozio',
        phrases: [
            { phrase: 'Quanto costa questo?', translation: 'Ile to kosztuje?' },
            { phrase: 'Ce l\'ha in una taglia più piccola/grande?', translation: 'Czy macie to w mniejszym/większym rozmiarze?' },
            { phrase: 'Sto solo guardando, grazie.', translation: 'Tylko się rozglądam, dziękuję.' },
            { phrase: 'Posso pagare con la carta?', translation: 'Czy mogę zapłacić kartą?' },
        ]
    },
    station: {
        title: 'Alla Stazione',
        phrases: [
            { phrase: 'Un biglietto di sola andata per Roma, per favore.', translation: 'Poproszę bilet w jedną stronę do Rzymu.' },
            { phrase: 'Da quale binario parte il treno?', translation: 'Z którego peronu odjeżdża pociąg?' },
            { phrase: 'È occupato questo posto?', translation: 'Czy to miejsce jest zajęte?' },
        ]
    },
    party: {
        title: 'A una Festa',
        phrases: [
            { phrase: 'Grazie per l\'invito.', translation: 'Dziękuję za zaproszenie.' },
            { phrase: 'È delizioso!', translation: 'To jest pyszne!' },
            { phrase: 'Salute! / Cin cin!', translation: 'Na zdrowie!' },
            { phrase: 'Vuoi ballare?', translation: 'Chcesz zatańczyć?' },
        ]
    },
    emergency: {
        title: 'Emergenza',
        phrases: [
            { phrase: 'Aiuto!', translation: 'Pomocy!' },
            { phrase: 'Chiami un\'ambulanza!', translation: 'Wezwij karetkę!' },
            { phrase: 'Ho perso il portafoglio.', translation: 'Zgubiłem/am portfel.' },
            { phrase: 'Ho bisogno di un medico.', translation: 'Potrzebuję lekarza.' },
        ]
    },
  },
};
