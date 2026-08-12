import React from 'react';
import CulinaryHero from './components/CulinaryHero';
import CulinaryFilterBar from './components/CulinaryFilterBar';
import EditorsPick from './components/EditorsPick';
import EditorialLanes from './components/EditorialLanes';
import RecentArticles from './components/RecentArticles';
import ExploreBrandsCTA from './components/ExploreBrandsCTA';

export const metadata = {
  title: 'Culinary Journal | Zoiko Foods Corp',
  description: 'Perspectives on food culture, ingredients, and the craft behind everyday brands.',
};

export default function CulinaryJournalPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <CulinaryHero />
      <CulinaryFilterBar />
      <EditorsPick />
      <EditorialLanes />
      <RecentArticles />
      <ExploreBrandsCTA />
    </main>
  );
}
