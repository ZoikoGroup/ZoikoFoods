import Link from "next/link";
import React from "react";

export const FromRootsToBrands = () => (
  <section className="py-12 lg:py-16 px-6 lg:px-24 bg-gradient-to-b from-gray-200 to-zinc-200">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-[28px] lg:text-4xl font-bold text-[#2D5A3D] mb-4 font-['Segoe_UI'] leading-[1.3] whitespace-nowrap">
        From Roots to <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2D5A3D_30%,#D4A574_100%)]">Brands</span>
      </h2>
      <p className="text-zinc-600 text-[16px] lg:text-xl mb-10 leading-[1.8]">
        Explore the brands built on these<br className="block lg:hidden" />principles.
      </p>
      
      <div className="flex flex-wrap justify-center gap-3 mb-12 px-4 lg:px-0">
        {['NoxxChicken', 'Zoiko Kitchen', 'GingerNoxx', 'AquaNoxx', 'Zoiko Coffee', 'Zoiko Essentials'].map((brand, i) => (
          <div key={i} className="bg-white rounded-[8px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] py-3 px-5 text-center text-[#0F4C81] lg:text-[#1e442d] font-bold text-[14px] lg:text-base">
            {brand}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
         <Link href="/our-brands" className="py-4 w-[200px] lg:w-[240px] bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_60%,#D4A574_100%)] text-white rounded-md font-semibold text-[15px] hover:opacity-90 transition-opacity">
            Explore Our Brands
         </Link>
         <Link href="/our-brands/private-label" className="py-4 w-[240px] lg:w-[240px] border border-[#0F4C81] lg:border-[#2D5A3D] text-[#0F4C81] lg:text-[#1e442d] rounded-md font-semibold text-[15px] hover:bg-[#2D5A3D] hover:text-white transition-colors bg-white/50">
            Private-Label Solutions
         </Link>
      </div>
    </div>
  </section>
);
