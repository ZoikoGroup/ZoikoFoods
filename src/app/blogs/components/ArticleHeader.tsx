import React from 'react';

const ArticleHeader = () => {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#F0FDF4_0%,#FFFFFF_100%)]">
      <div className="max-w-[900px] mx-auto px-6 py-16 lg:py-20">
        {/* Category Pill */}
        <div className="mx-auto w-fit px-6 py-2 bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)] rounded-[50px] mb-8">
          <span className="text-white text-xs font-semibold font-inter uppercase tracking-[1px]">
            Recipes
          </span>
        </div>

        {/* Title */}
        <h1 className="text-center text-zinc-900 text-4xl lg:text-[56px] font-bold font-inter leading-tight lg:leading-[67.2px] tracking-tight mb-8">
          The Art of Making Perfect Homemade Pasta
        </h1>

        {/* Description */}
        <p className="text-center text-zinc-600 text-lg lg:text-xl font-normal font-inter leading-relaxed lg:leading-[33.28px] max-w-[870px] mx-auto mb-8 lg:mb-0">
          Discover the secrets to creating restaurant-quality pasta in your own kitchen with simple techniques and time-tested methods.
        </p>

        {/* Meta Row */}
        <div className="border-t border-[rgba(5,150,105,0.2)] pt-8 mt-8 flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-4">
          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] rounded-full bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)] flex items-center justify-center shrink-0">
              <span className="text-white text-base font-bold font-inter">CM</span>
            </div>
            <div>
              <p className="text-zinc-900 text-base font-bold font-inter leading-[27.2px]">
                Chef Maria Rodriguez
              </p>
              <p className="text-gray-500 text-sm font-normal font-inter leading-[23.12px]">
                Executive Chef
              </p>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <span className="text-gray-500 text-sm font-normal font-inter leading-[25.84px] flex items-center gap-1.5">
              <img src="/images/calendar-icon.png" alt="Date" className="h-[14px] w-[14px] object-contain" /> January 25, 2026
            </span>
            <span className="text-gray-500 text-sm font-normal font-inter leading-[25.84px] flex items-center gap-1.5">
              <img src="/images/clock-icon.png" alt="Time" className="h-[14px] w-[14px] object-contain" /> 8 min read
            </span>
            <span className="text-gray-500 text-sm font-normal font-inter leading-[25.84px] flex items-center gap-1.5">
              <img src="/images/eye-icon.png" alt="Views" className="h-[14px] w-[14px] object-contain" /> 12.4k views
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleHeader;
