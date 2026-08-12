import Image from "next/image";
import React from "react";

export const OurPeopleAndPhilosophy = () => (
  <section className="py-10 lg:py-12 px-6 lg:px-24 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-[32px] font-bold mb-8 font-['Segoe_UI'] text-[#2D5A3D] text-center leading-[1.3] lg:leading-snug">
        Our People<br className="block lg:hidden" />& Philosophy
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: '/images/respect.png', title: 'Respect', desc: <>Cultures and communities are treated as<br className="block lg:hidden" />sources of value, not marketing tools.</> },
          { icon: '/images/discipline.png', title: 'Discipline', desc: <>Quality, consistency, and compliance are<br className="block lg:hidden" />non-negotiable across all operations.</> },
          { icon: '/images/accessibility.png', title: 'Accessibility', desc: <>Everyday products for everyday life; no<br className="block lg:hidden" />elitism in our approach to food.</> },
          { icon: '/images/partnership.png', title: 'Partnership', desc: <>Built to serve retailers, distributors,<br className="block lg:hidden" />foodservice partners, and households.</> },
          { icon: '/images/responsibility.png', title: 'Responsibility', desc: <>Long-term thinking across sourcing and<br className="block lg:hidden" />supply chain choices.</> }
        ].map((item, i) => (
          <div key={i} className="bg-[#F8F9FA] rounded-md px-4 py-8 flex flex-col items-center text-center min-h-[260px] lg:h-[240px] justify-center">
            <div className="mb-6">
              <Image src={item.icon} alt={item.title} width={48} height={48} className="object-contain" />
            </div>
            <h3 className="text-[18px] font-bold mb-3 font-['Segoe_UI'] bg-clip-text text-transparent bg-[linear-gradient(90deg,#2D5A3D_30%,#D4A574_100%)]">
              {item.title}
            </h3>
            <p className="text-zinc-600 text-[16px] lg:text-[14px] leading-[1.8] lg:leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
