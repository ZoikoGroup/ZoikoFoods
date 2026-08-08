import React from 'react';

const categories = [
  { name: 'All', active: true },
  { name: 'Ingredients', active: false },
  { name: 'Culinary Culture', active: false },
  { name: 'From Our Kitchens', active: false },
  { name: 'Sustainability & Sourcing', active: false },
  { name: 'Behind the Brands', active: false },
];

const CulinaryFilterBar = () => {
  return (
  <div className="w-full bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.05)] border-b border-gray-200 relative z-20">
    <div className="max-w-[1440px] mx-auto min-h-[96px] py-6 lg:py-0 lg:h-24 px-4 sm:px-6 lg:px-[71px] flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-0">
      
      {/* Left Filter Categories */}
      <div className="flex flex-wrap items-center gap-3 lg:gap-[10px] overflow-visible">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-4 lg:px-[18px] py-2 lg:py-[10px] rounded-3xl text-[14px] font-semibold font-['Segoe_UI'] transition-colors duration-200 ${
                cat.active
                  ? 'bg-gradient-to-r from-green-700 to-green-500 text-white'
                  : 'bg-gray-50 text-zinc-600 hover:bg-gray-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

      {/* Right Controls */}
      <div className="flex lg:flex items-center w-full lg:w-auto gap-4 lg:shrink-0 lg:pl-4">
        {/* Search Box */}
        <div className="flex-grow lg:w-52 h-10 bg-white rounded-3xl border border-zinc-200 flex items-center px-4 lg:px-5">
          <input 
            type="text" 
            placeholder="Search Articles"
            className="w-full bg-transparent outline-none text-neutral-500 text-sm font-normal font-['Segoe_UI'] placeholder:text-neutral-500"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="w-[120px] lg:w-36 h-10 bg-white rounded-3xl border border-zinc-200 flex items-center justify-between px-4 lg:px-5 cursor-pointer shrink-0">
          <span className="text-zinc-900 text-sm font-normal font-['Segoe_UI']">Latest</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
        
      </div>
    </div>
  );
};

export default CulinaryFilterBar;
