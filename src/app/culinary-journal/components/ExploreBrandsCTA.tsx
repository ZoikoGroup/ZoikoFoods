import React from 'react';

const ExploreBrandsCTA = () => {
  return (
    <section className="w-full bg-[linear-gradient(79deg,#F8F9FA_0%,#E9ECEF_100%)] py-12 lg:py-20 flex justify-center">
      <div className="max-w-[815px] w-full px-6 flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-center text-green-800 text-2xl lg:text-[32px] font-normal font-['Georgia'] leading-[40px] lg:leading-[54.40px] mb-6 lg:mb-10">
          Explore the Brand <br className="block lg:hidden" />Behind These Stories
        </h2>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button className="w-[224px] h-12 lg:h-16 bg-green-800 rounded-sm flex items-center justify-center text-white text-sm lg:text-base font-semibold font-['Segoe_UI'] leading-6 lg:leading-7 transition-colors hover:bg-green-900">
            Explore Our Brand
          </button>
          
          <button className="w-[256px] h-12 lg:h-16 bg-white rounded-sm border border-green-800 flex items-center justify-center text-green-800 text-sm lg:text-base font-semibold font-['Segoe_UI'] leading-6 lg:leading-7 transition-colors hover:bg-gray-50">
            Our Sourcing Standard
          </button>
        </div>

      </div>
    </section>
  );
};

export default ExploreBrandsCTA;
