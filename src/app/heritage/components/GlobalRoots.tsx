import Image from "next/image";
import React from "react";

export const GlobalRoots = () => (
  <section className="py-12 lg:py-16 px-8 lg:px-24 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-[32px] lg:text-4xl font-bold text-[#2D5A3D] mb-10 lg:mb-12 font-['Segoe_UI'] leading-[1.3] lg:leading-tight">Global Roots,<br className="block lg:hidden" />Multiple Influences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: '/images/caribbean-icon.png', title: 'Caribbean Influence', desc: <>Bold flavor layering, warmth, balance,<br className="block lg:hidden" />and community-centered cooking</> },
          { icon: '/images/african-icon.png', title: 'African & Diaspora Roots', desc: <>Resilience, spice mastery, and food as<br className="block lg:hidden" />identity and gathering</> },
          { icon: '/images/asian-icon.png', title: 'Asian Craft & Precision', desc: <>Balance, process discipline, and<br className="block lg:hidden" />ingredient respect</> },
          { icon: '/images/european-icon.png', title: 'European Structure', desc: <>Consistency, quality systems, and<br className="block lg:hidden" />culinary refinement</> },
        ].map((item, i) => (
          <div key={i} className="rounded-lg shadow-md overflow-hidden bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)] text-white p-8 h-[250px] lg:h-[230px] flex flex-col justify-end relative">
            <div className="absolute top-8 left-8 lg:top-8 lg:left-8">
              <Image src={item.icon} alt={item.title} width={48} height={48} className="object-contain lg:w-[32px] lg:h-[32px]" />
            </div>
            <h3 className="text-[20px] lg:text-xl font-bold mb-4 font-['Segoe_UI']">{item.title}</h3>
            <p className="text-[15px] lg:text-base opacity-90 leading-relaxed lg:leading-6">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
