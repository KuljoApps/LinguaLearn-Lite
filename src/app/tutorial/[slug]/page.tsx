"use client";

import React from 'react';
import { notFound, useParams } from 'next/navigation';

import FakeAchievementsPage from '@/app/tutorial/pages/FakeAchievementsPage';
import FakeCulturePage from '@/app/tutorial/pages/FakeCulturePage';
import FakeDictionaryPage from '@/app/tutorial/pages/FakeDictionaryPage';
import FakeDictionaryColorsPage from '@/app/tutorial/pages/FakeDictionaryColorsPage';
import FakeErrorsPage from '@/app/tutorial/pages/FakeErrorsPage';
import FakeLearningPage from '@/app/tutorial/pages/FakeLearningPage';
import FakePhoneticsPage from '@/app/tutorial/pages/FakePhoneticsPage';
import FakePhoneticsBasicsPage from '@/app/tutorial/pages/FakePhoneticsBasicsPage';
import FakePhrasesPage from '@/app/tutorial/pages/FakePhrasesPage';
import FakePhrasesAirportPage from '@/app/tutorial/pages/FakePhrasesAirportPage';
import FakeSettingsPage from '@/app/tutorial/pages/FakeSettingsPage';
import FakeStatsPage from '@/app/tutorial/pages/FakeStatsPage';
import FakeTongueTwistersPage from '@/app/tutorial/pages/FakeTongueTwistersPage';
import FakeQuizDemoPage from '@/app/tutorial/pages/FakeQuizDemoPage';

const tutorialPages: { [key: string]: React.ComponentType } = {
  achievements: FakeAchievementsPage,
  culture: FakeCulturePage,
  dictionary: FakeDictionaryPage,
  'dictionary-colors': FakeDictionaryColorsPage,
  errors: FakeErrorsPage,
  learning: FakeLearningPage,
  phonetics: FakePhoneticsPage,
  'phonetics-basics': FakePhoneticsBasicsPage,
  phrases: FakePhrasesPage,
  'phrases-airport': FakePhrasesAirportPage,
  settings: FakeSettingsPage,
  stats: FakeStatsPage,
  'tongue-twisters': FakeTongueTwistersPage,
  'quiz-demo': FakeQuizDemoPage,
};

export default function TutorialSlugPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  if (!slug) {
    notFound();
  }

  const PageComponent = tutorialPages[slug];

  if (!PageComponent) {
    notFound();
  }

  return <PageComponent />;
}
