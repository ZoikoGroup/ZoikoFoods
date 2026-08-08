import React from 'react';
import Image from 'next/image';

const lanes = [
  {
    title: 'Ingredients',
    description: 'Origin, handling, flavor principles, an culinary relevance.',
    icon: '/images/lane-ingredients.png',
    tags: ['Ginger', 'Spices', 'Grains'],
  },
  {
    title: 'Culinary Culture',
    description: 'Food as identity, ritual, and everyday community practice.',
    icon: '/images/lane-culinary-culture.png',
    tags: ['Caribbean', 'Diaspora', 'Traditions'],
  },
  {
    title: 'From Our Kitchens',
    description: 'Process thinking, formulation principles, and cooking methods.',
    icon: '/images/lane-from-our-kitchens.png',
    tags: ['Technique', 'Process', 'Craft'],
  },
  {
    title: 'Sustainability & Sourcing',
    description: 'Sourcing discipline, supplier standards, waste reduction principles.',
    icon: '/images/lane-sustainability.png',
    tags: ['Sourcing', 'Ethics', 'Standards'],
  },
  {
    title: 'Behind the Brands',
    description: 'Philosophy, craft, and operating standards.',
    icon: '/images/lane-behind-the-brands.png',
    tags: ['Philosophy', 'Quality', 'Standards'],
  },
];

const EditorialLanes = () => {
  return (
    <section className="w-full bg-[#F8F9FA] py-[64px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[112px]">
        
        {/* Section Title */}
        <h2 className="text-center text-green-800 text-2xl lg:text-[32px] font-normal font-['Georgia'] leading-tight lg:leading-[54.40px] mb-[36px]">
          Editorial Lanes
        </h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
          {lanes.map((lane, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border-t-4 border-green-800 px-8 py-9 h-[320px] flex flex-col"
            >
              {/* Icon */}
              <div className="relative w-12 h-12 mb-[22px]">
                <Image 
                  src={lane.icon} 
                  alt={`${lane.title} icon`} 
                  fill
                  className="object-contain object-left"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-green-800 text-lg lg:text-xl font-semibold font-['Segoe_UI'] leading-7 lg:leading-9 mb-[2px]">
                {lane.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-sm lg:text-base font-normal font-['Georgia'] leading-5 lg:leading-6 mb-[20px] line-clamp-2">
                {lane.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-[9px] mb-auto">
                {lane.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className="px-3 py-1 bg-[#D5F4E6] rounded-2xl text-green-800 text-[10px] lg:text-xs font-normal font-['Segoe_UI'] leading-4 lg:leading-5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Link */}
              <div className="mt-4">
                <a href="#" className="text-green-800 text-xs lg:text-sm font-semibold font-['Segoe_UI'] leading-5 lg:leading-6 hover:underline flex items-center w-fit">
                  View Lane <span className="ml-1">→</span>
                </a>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EditorialLanes;
