import React from 'react';
import Image from 'next/image';

const articles = [
  {
    category: 'Ingredients',
    title: 'Ginger in Global Cooking: From Root to Ritual',
    description: 'Exploring how ginger functions across culinary traditions, from Asian medicine to Caribbean heat, and what makes it essential in modern cooking.',
    readTime: '8 min read',
    date: 'January 18, 2026',
    image: '/images/article-ginger.jpg',
  },
  {
    category: 'Sustainability & Sourcing',
    title: 'Responsible Rice Sourcing: Standards Beyond Compliance',
    description: 'How supplier audits, traceability protocols, and ethical standards shape modern rice sourcing for retail-ready brands.',
    readTime: '10 min read',
    date: 'January 12, 2026',
    image: '/images/article-rice.jpg',
  },
  {
    category: 'From Our Kitchens',
    title: 'Consistency at Scale: Engineering Repeatable Flavor',
    description: 'The discipline behind translating home-style recipes into commercial formulations that maintain authenticity across thousands of batches.',
    readTime: '12 min read',
    date: 'January 8, 2026',
    image: '/images/article-consistency.jpg',
  },
  {
    category: 'Culinary Culture',
    title: 'Diaspora Cooking: Identity Through Everyday Meals',
    description: 'How immigrant communities preserve culinary traditions while adapting to new ingredients, markets, and everyday constraints.',
    readTime: '15 min read',
    date: 'January 5, 2026',
    image: '/images/article-diaspora.jpg',
  },
  {
    category: 'Behind the Brands',
    title: 'Coffee as Daily Ritual: Building Accessible Quality',
    description: 'The philosophy behind Zoiko Coffee\'s approach to sourcing, roasting, and packaging for everyday consumption without compromise.',
    readTime: '9 min read',
    date: 'December 28, 2025',
    image: '/images/article-coffee.jpg',
  },
  {
    category: 'Ingredients',
    title: 'The Science of Shelf Stability in Natural Products',
    description: 'Understanding how ingredient selection, processing methods, and packaging work together to preserve quality without excessive preservatives.',
    readTime: '11 min read',
    date: 'December 22, 2025',
    image: '/images/article-shelf-stability.jpg',
  },
];

const RecentArticles = () => {
  return (
    <section className="w-full bg-white py-8 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[112px]">
        
        {/* Section Title */}
        <h2 className="text-center text-green-800 text-2xl lg:text-[32px] font-normal font-['Georgia'] leading-tight lg:leading-[54.40px] mb-8 lg:mb-12">
          Recent Articles
        </h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[25px]">
          {articles.map((article, idx) => (
            <div 
              key={idx} 
              className="w-full bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-auto lg:h-full lg:min-h-[620px]"
            >
              {/* Image */}
              <div className="relative w-full h-[240px] lg:h-[320px] shrink-0 bg-gray-100">
                <Image 
                  src={article.image} 
                  alt="Article Thumbnail" 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="px-6 py-8 lg:pl-8 lg:pr-[68px] lg:pt-[38px] lg:pb-8 flex flex-col">
                {/* Category Pill */}
                <div className="w-fit px-4 py-1.5 bg-[#D5F4E6] rounded-[16px] mb-4">
                  <span className="text-green-800 text-xs font-semibold font-['Segoe_UI'] leading-5">
                    {article.category}
                  </span>
                </div>
                
                {/* Title */}
                <h3 
                  className="text-zinc-900 text-xl lg:text-2xl font-normal font-['Georgia'] leading-normal lg:leading-8 mb-[14px]"
                  dangerouslySetInnerHTML={{ __html: article.title }}
                />
                
                {/* Description */}
                <p 
                  className="text-zinc-600 text-sm lg:text-base font-normal font-['Georgia'] leading-[22px] lg:leading-6 mb-[19px] w-full lg:w-max"
                  dangerouslySetInnerHTML={{ __html: article.description }}
                />
                
                {/* Metadata & Link container */}
                <div>
                  <div className="flex items-center gap-[11px] mb-3">
                    <span className="text-gray-500 text-sm font-normal font-['Segoe_UI'] leading-6">{article.readTime}</span>
                    <span className="text-gray-500 text-sm font-normal font-['Segoe_UI'] leading-6">•</span>
                    <span className="text-gray-500 text-sm font-normal font-['Segoe_UI'] leading-6">{article.date}</span>
                  </div>
                  
                  <a href="#" className="text-green-800 text-base font-semibold font-['Segoe_UI'] leading-7 hover:underline flex items-center w-fit">
                    Read <span className="ml-1">→</span>
                  </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentArticles;
