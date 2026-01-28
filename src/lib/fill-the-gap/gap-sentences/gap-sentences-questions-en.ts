import type { GapSentenceSet } from '.';

export const gapSentencesQuestionsEn: GapSentenceSet[] = [
  {
    id: 1,
    title: 'A Day at the Park',
    sentence1: {
      text: ['The sun was shining brightly, and the birds were singing ', ' in the trees.'],
      options: ['loudly', 'quietly', 'sadly', 'quickly'],
      correctAnswer: 'loudly',
    },
    sentence2: {
      text: ['Children were playing on the swings, their laughter filling the ', ' air.'],
      options: ['cold', 'warm', 'dark', 'empty'],
      correctAnswer: 'warm',
    },
    sentence3: {
      text: ['People were relaxing on blankets, enjoying the ', ' weather.'],
      options: ['awful', 'rainy', 'lovely', 'stormy'],
      correctAnswer: 'lovely',
    },
  },
  {
    id: 2,
    title: 'Morning Routine',
    sentence1: {
      text: ['I always ', ' up at 7 AM to the sound of my alarm clock.'],
      options: ['sleep', 'wake', 'stand', 'eat'],
      correctAnswer: 'wake',
    },
    sentence2: {
      text: ['Then, I go to the kitchen to make a ', ' cup of coffee.'],
      options: ['cold', 'weak', 'strong', 'blue'],
      correctAnswer: 'strong',
    },
    sentence3: {
        text: ['Before leaving for work, I always read the ', ' on my phone.'],
        options: ['books', 'messages', 'news', 'emails'],
        correctAnswer: 'news',
    },
  },
  {
    id: 3,
    title: 'Grocery Shopping',
    sentence1: {
      text: ['We need to buy some fresh ', ' for the salad, like tomatoes and cucumbers.'],
      options: ['meat', 'vegetables', 'fruits', 'sweets'],
      correctAnswer: 'vegetables',
    },
    sentence2: {
      text: ['Oh, I almost ', ' to buy milk; it\'s the most important thing on the list!'],
      options: ['remembered', 'forgot', 'bought', 'saw'],
      correctAnswer: 'forgot',
    },
    sentence3: {
        text: ['Don\'t forget to grab a reusable ', ' to carry everything.'],
        options: ['box', 'bottle', 'bag', 'cup'],
        correctAnswer: 'bag',
    },
  },
  {
    id: 4,
    title: 'Cooking Dinner',
    sentence1: {
      text: ['First, you need to finely ', ' the onions and garlic.'],
      options: ['chop', 'boil', 'bake', 'fry'],
      correctAnswer: 'chop',
    },
    sentence2: {
      text: ['Then, add the sauce to the pot and ', ' it occasionally.'],
      options: ['freeze', 'burn', 'stir', 'drink'],
      correctAnswer: 'stir',
    },
    sentence3: {
        text: ['Let it simmer for 10 minutes to allow the flavors to ', '.'],
        options: ['separate', 'disappear', 'blend', 'cool'],
        correctAnswer: 'blend',
    },
  },
  {
    id: 5,
    title: 'A Rainy Day',
    sentence1: {
      text: ['The rain was falling ', ' against the window panes.'],
      options: ['gently', 'heavily', 'silently', 'rarely'],
      correctAnswer: 'heavily',
    },
    sentence2: {
      text: ['It was a perfect day to stay inside and read a ', ' book.'],
      options: ['boring', 'good', 'short', 'loud'],
      correctAnswer: 'good',
    },
    sentence3: {
        text: ['A warm cup of tea was the perfect ', ' for the cozy afternoon.'],
        options: ['enemy', 'problem', 'companion', 'task'],
        correctAnswer: 'companion',
    },
  },
  {
    id: 6,
    title: 'Going to the Movies',
    sentence1: {
      text: ['We bought two ', ' for the 8 PM showing of the new sci-fi film.'],
      options: ['popcorn', 'drinks', 'tickets', 'seats'],
      correctAnswer: 'tickets',
    },
    sentence2: {
      text: ['The movie was so ', ' that I couldn\'t take my eyes off the screen.'],
      options: ['boring', 'long', 'exciting', 'sad'],
      correctAnswer: 'exciting',
    },
    sentence3: {
        text: ['The sound effects were incredible and made the experience ', '.'],
        options: ['quiet', 'confusing', 'immersive', 'dull'],
        correctAnswer: 'immersive',
    },
  },
  {
    id: 7,
    title: 'Planning a Trip',
    sentence1: {
      text: ['I need to ', ' a flight to Madrid for my vacation next month.'],
      options: ['cancel', 'drive', 'book', 'miss'],
      correctAnswer: 'book',
    },
    sentence2: {
      text: ['I should also pack a suitcase with all the ', ' clothes for the trip.'],
      options: ['dirty', 'necessary', 'old', 'heavy'],
      correctAnswer: 'necessary',
    },
    sentence3: {
        text: ['I\'ll also need to find a good ', ' near the city center.'],
        options: ['restaurant', 'park', 'hotel', 'shop'],
        correctAnswer: 'hotel',
    },
  },
  {
    id: 8,
    title: 'At the Gym',
    sentence1: {
      text: ['He likes to lift heavy ', ' to build his muscle strength.'],
      options: ['books', 'weights', 'feathers', 'pillows'],
      correctAnswer: 'weights',
    },
    sentence2: {
      text: ['After that, she usually runs for 30 minutes on the ', ' to improve her cardio.'],
      options: ['sofa', 'treadmill', 'bed', 'floor'],
      correctAnswer: 'treadmill',
    },
    sentence3: {
        text: ['It\'s important to ', ' properly before starting any workout.'],
        options: ['eat', 'sleep', 'stretch', 'sit'],
        correctAnswer: 'stretch',
    },
  },
  {
    id: 9,
    title: 'A Pet Dog',
    sentence1: {
      text: ['The friendly dog wags its ', ' whenever it sees its owner.'],
      options: ['head', 'paws', 'tail', 'ears'],
      correctAnswer: 'tail',
    },
    sentence2: {
      text: ['It loves to play ', ' in the park with a red ball.'],
      options: ['sleep', 'fetch', 'hide', 'read'],
      correctAnswer: 'fetch',
    },
    sentence3: {
        text: ['Every evening, they go for a long ', ' around the neighborhood.'],
        options: ['drive', 'sleep', 'walk', 'run'],
        correctAnswer: 'walk',
    },
  },
  {
    id: 10,
    title: 'Reading a Book',
    sentence1: {
      text: ['She carefully turned the next ', ' to see what would happen.'],
      options: ['page', 'corner', 'cover', 'chapter'],
      correctAnswer: 'page',
    },
    sentence2: {
      text: ['It was so easy to get lost in the fascinating ', ' of the novel.'],
      options: ['pictures', 'index', 'story', 'price'],
      correctAnswer: 'story',
    },
    sentence3: {
        text: ['The author\'s writing style was both ', ' and easy to follow.'],
        options: ['confusing', 'boring', 'elegant', 'simple'],
        correctAnswer: 'elegant',
    },
  },
];
