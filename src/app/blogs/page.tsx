import React from 'react';
import ArticleHeader from './components/ArticleHeader';
import FeaturedImage from './components/FeaturedImage';
import ArticleContent from './components/ArticleContent';
import RelatedPosts from './components/RelatedPosts';
import CommentsSection from './components/CommentsSection';
import ArticleNewsletter from './components/ArticleNewsletter';

export const metadata = {
  title: 'The Art of Making Perfect Homemade Pasta | Zoiko Culinary Journal',
  description:
    'Discover the secrets to creating restaurant-quality pasta in your own kitchen with simple techniques and time-tested methods.',
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <ArticleHeader />
      <FeaturedImage />
      <ArticleContent />
      <RelatedPosts />
      <CommentsSection />
      <ArticleNewsletter />
    </main>
  );
}
