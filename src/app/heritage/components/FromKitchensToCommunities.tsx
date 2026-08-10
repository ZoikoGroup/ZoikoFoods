import Image from "next/image";
import React from "react";

export const FromKitchensToCommunities = () => (
  <section className="py-12 lg:py-16 px-6 lg:px-24 bg-white border-b-[4.5px] border-[#2D5A3D]">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-[36px] lg:text-4xl font-bold text-[#2D5A3D] mb-6 lg:mb-8 font-['Segoe_UI'] leading-[1.35] lg:leading-tight">From Kitchens to<br className="block lg:hidden" />Communities</h2>
      <p className="text-zinc-600 text-[20px] lg:text-xl leading-[1.9] lg:leading-9 mb-8 lg:mb-12">
        Zoiko Foods brands are inspired by<br className="block lg:hidden" />
        everyday cooking — home kitchens,<br className="block lg:hidden" />
        street food traditions, community<br className="block lg:hidden" />
        meals, and familiar rituals. We build<br className="block lg:hidden" />
        brands that are relatable and<br className="block lg:hidden" />
        accessible, without diluting authenticity<br className="block lg:hidden" />
        or compromising operating standards.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 mb-8 lg:mb-12">
        <div className="relative h-[140px] sm:h-36 lg:h-72 rounded-lg overflow-hidden col-span-1 order-1 lg:order-2">
           <Image src="/images/kitchen-2.png" alt="Curry Dish" fill className="object-cover" unoptimized />
        </div>
        <div className="relative h-[140px] sm:h-36 lg:h-72 rounded-lg overflow-hidden col-span-1 order-2 lg:order-1">
           <Image src="/images/kitchen-1.png" alt="Kitchen Prep" fill className="object-cover" unoptimized />
        </div>
        <div className="relative h-[110px] sm:h-32 lg:h-72 rounded-lg overflow-hidden col-span-1 order-3 lg:order-3">
           <Image src="/images/kitchen-3.png" alt="Grilled Chicken" fill className="object-cover" unoptimized />
        </div>
      </div>
      <div className="bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)] rounded-[16px] p-8 lg:p-12 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[140px]">
        <span className="absolute top-4 left-6 text-[64px] lg:text-9xl text-green-300/40 lg:text-white/20 font-serif leading-none">"</span>
        <h3 className="text-[24px] lg:text-3xl font-semibold text-white relative z-10 italic leading-[1.8] lg:leading-relaxed mt-2 lg:mt-0">We scale brands— not at<br className="block lg:hidden" />the expense of culture,<br className="block lg:hidden" />but in service of it.</h3>
      </div>
    </div>
  </section>
);
