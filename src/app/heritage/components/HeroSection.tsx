import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroSection = () => (
  <section className="relative w-full overflow-hidden min-h-[905px] bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_55%,#D4A574_100%)] flex flex-col lg:flex-row items-start lg:items-center py-24 lg:py-0 px-6 lg:px-24">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between z-10 relative">
      <div className="w-full lg:w-1/2 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Segoe_UI'] leading-normal lg:leading-tight mb-8">
          Rooted in Culture.<br />Built for the World.
        </h1>
        <p className="text-[17px] md:text-2xl font-normal font-['Segoe_UI'] leading-relaxed lg:leading-[1.6] tracking-wide lg:tracking-normal mb-8 opacity-95">
          Zoiko Foods Corp was created to<br className="block lg:hidden" />
          honor global food traditions —<br className="block lg:hidden" />
          while building modern, scalable<br className="block lg:hidden" />
          food brands for everyday life.
        </p>

        <div className="flex flex-col gap-6 py-6 border-y border-white/20 mb-8 lg:max-w-xl">
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 mt-0.5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">✓</span>
            <span className="text-[14px] lg:text-base font-normal font-['Segoe_UI'] leading-snug">Cultural respect in formulation and<br className="block lg:hidden" />sourcing</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 mt-0.5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">✓</span>
            <span className="text-[14px] lg:text-base font-normal font-['Segoe_UI'] leading-snug">Quality and compliance-first operating<br className="block lg:hidden" />discipline</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 mt-0.5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">✓</span>
            <span className="text-[14px] lg:text-base font-normal font-['Segoe_UI'] leading-snug">Built to serve retail, foodservice, and export<br className="block lg:hidden" />markets</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start">
          <Link href="/our-brands" className="px-6 py-[10px] bg-white text-[#0A3D62] rounded-sm font-semibold hover:bg-gray-100 transition-colors w-max text-center text-[14px]">
            Explore Our Brands
          </Link>
          <Link href="/governance-portal" className="px-6 py-[10px] border border-white text-white rounded-sm font-semibold hover:bg-white/10 transition-colors w-max text-center text-[14px]">
            Our Quality & Compliance Framework
          </Link>
        </div>
        <p className="mt-8 text-[13px] opacity-90 italic leading-snug">Heritage is our foundation — discipline is our<br className="block lg:hidden" />standard.</p>
      </div>
      <div className="w-full h-[380px] lg:w-[660px] lg:h-[610px] bg-white/10 backdrop-blur-[5px] rounded-[16px] relative border border-white/20 overflow-hidden mt-10 lg:mt-0 shrink-0">
         <Image 
            src="/images/globe-icon.png" 
            alt="Globe Icon" 
            width={64} 
            height={64} 
            className="opacity-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[100px] lg:h-[100px]"
         />
      </div>
    </div>
  </section>
);
