import React from 'react';
import Image from 'next/image';

const CulinaryHero = () => {
  return (
    <section className="w-full relative bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_65%,#D4A574_100%)] lg:bg-[linear-gradient(125deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)] overflow-hidden">
      <div className="max-w-[1440px] mx-auto min-h-[560px] relative px-6 lg:px-[112px] py-16 lg:py-[80px] flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-[600px] flex flex-col z-10 pt-4 lg:pt-0">
          <h1 className="text-white text-[40px] lg:text-6xl font-normal font-['Georgia'] leading-tight lg:leading-[67.20px] mb-8">
            The Zoiko<br />Culinary Journal
          </h1>
          <p className="text-white text-xl lg:text-2xl font-normal font-['Segoe_UI'] leading-snug lg:leading-9 mb-[26px]">
            Perspectives on food culture,<br className="block lg:hidden" />
            <span className="hidden lg:inline"> ingredients, and<br /></span>
            <span className="lg:hidden"> ingredients, and the craft behind<br /></span>
            everyday brands.
          </p>
          <p className="text-white text-sm lg:text-base font-normal font-['Georgia'] italic leading-relaxed lg:leading-7 pr-4 lg:pr-0">
            Curated insights from the kitchens, cultures,<br className="block lg:hidden" />
            <span className="lg:hidden"> and people that shape Zoiko Foods.</span>
            <span className="hidden lg:inline"> and people that<br />shape Zoiko Foods.</span>
          </p>
        </div>

        {/* Right Glassmorphism Box Area */}
        <div className="w-full lg:w-[677px] h-[300px] lg:h-[384px] mt-12 lg:mt-0 relative bg-[linear-gradient(115deg,rgba(21,128,61,0.1)_0%,rgba(34,197,94,0.05)_100%)] rounded-xl flex items-center justify-center backdrop-blur-[2px]">
            {/* 
              Book Icon Placeholder Image
              Save your PNG icon as `journal-book-icon.png` in the `public` folder.
            */}
            <div className="relative w-16 h-16 lg:w-[72px] lg:h-[72px] flex items-center justify-center">
                <Image 
                  src="/images/journal-book-icon.png" 
                  alt="Culinary Journal Book Icon" 
                  fill
                  className="object-contain"
                />
            </div>
        </div>

      </div>
    </section>
  );
};

export default CulinaryHero;
