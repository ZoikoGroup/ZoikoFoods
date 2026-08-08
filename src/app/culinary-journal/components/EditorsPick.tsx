import React from 'react';
import Image from 'next/image';

const EditorsPick = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[112px]">
        
        {/* Main Card Container */}
        <div className="w-full h-auto lg:h-[550px] bg-[linear-gradient(125deg,#F8F9FA_0%,#E9ECEF_100%)] rounded-xl shadow-[0px_4px_20px_0px_rgba(30,132,73,0.10)] overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Block with Gradient & Icon */}
          <div className="w-full lg:w-[591px] h-[380px] lg:h-full bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)] flex items-center justify-center shrink-0">
            <div className="relative w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center">
               <Image 
                  src="/images/redchilli.png" 
                  alt="Editor's Pick Chilli Icon" 
                  fill
                  className="object-contain"
                />
            </div>
          </div>
          
          {/* Right Content Area */}
          <div className="w-full p-8 lg:py-[49px] lg:px-[62px] flex flex-col justify-center">
            
            <h3 className="text-green-700 text-sm font-semibold font-['Segoe_UI'] uppercase leading-6 tracking-wide mb-6">
              Editor's Pick
            </h3>
            
            {/* Category Pill */}
            <div className="w-full lg:w-[495px] px-4 py-1.5 bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)] rounded-[20px] mb-[18px] flex items-center">
              <span className="text-white text-sm font-semibold font-['Segoe_UI'] leading-6">
                Culinary Culture
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-zinc-900 text-3xl lg:text-4xl font-normal font-['Georgia'] leading-[44px] lg:leading-[52px] mb-4">
              The Art of Layered Spice: <br className="hidden lg:block" />Caribbean Flavor <br className="hidden lg:block" />Philosophy
            </h2>
            
            {/* Description */}
            <p className="text-zinc-600 text-lg lg:text-xl font-normal font-['Georgia'] leading-relaxed lg:leading-8 mb-6 w-full lg:w-max">
              How traditional Caribbean cooking transforms simple <br className="hidden lg:block" />
              ingredients into complex, balanced dishes through <br className="hidden lg:block" />
              careful spice layering and cultural technique.
            </p>
            
            {/* Metadata */}
            <div className="flex items-center gap-2.5 mb-[26px]">
              <span className="text-gray-500 text-sm font-normal pr-7 font-['Segoe_UI'] leading-6">12 min read</span>
              <span className="text-gray-500 text-sm font-normal font-['Segoe_UI'] leading-6">•</span>
              <span className="text-gray-500 text-sm font-normal font-['Segoe_UI'] leading-6">January 15, 2026</span>
            </div>
            
            {/* Call to action */}
            <button className="w-fit text-green-700 text-base font-semibold font-['Segoe_UI'] leading-7 hover:underline flex items-center transition-all">
              Read Article <span className="ml-1">→</span>
            </button>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditorsPick;
