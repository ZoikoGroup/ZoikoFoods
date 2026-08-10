import React from "react";

export const WhyHeritageMatters = () => (
  <section className="py-12 lg:py-16 px-6 lg:px-24 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2">
        <h2 className="text-[32px] lg:text-4xl font-bold text-[#2D5A3D] mb-6 font-['Segoe_UI'] leading-[1.3] lg:leading-tight">Why Heritage<br className="block lg:hidden" />Matters</h2>
        <p className="text-zinc-600 text-[16px] lg:text-lg leading-[1.8] lg:leading-8 mb-8">
          Food is more than consumption — it is<br className="block lg:hidden" />
          memory, identity, and daily ritual. At Zoiko<br className="block lg:hidden" />
          Foods Corp, heritage informs how we<br className="block lg:hidden" />
          source ingredients, how we develop<br className="block lg:hidden" />
          recipes, and how we respect the cultures<br className="block lg:hidden" />
          behind the flavors we bring to market.
        </p>
        <p className="text-zinc-600 text-[16px] lg:text-lg leading-[1.8] lg:leading-8">
          Our approach is not nostalgia. It is<br className="block lg:hidden" />
          stewardship — translating cultural<br className="block lg:hidden" />
          inspiration into retail-ready, compliant,<br className="block lg:hidden" />
          consistently produced food and beverage<br className="block lg:hidden" />
          brands.
        </p>
      </div>
      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-0">
        {[
          { title: 'Respect for Origin', desc: 'Inspiration acknowledged and treated responsibly' },
          { title: 'Consistency', desc: 'Recipes engineered for repeatable flavor outcomes' },
          { title: 'Scalability', desc: 'Designed for reliable supply and distribution readiness' },
          { title: 'Governance', desc: 'Quality, traceability, and compliance embedded' }
        ].map((item, i) => (
          <div key={i} className="p-6 bg-white border border-gray-200 rounded-lg shadow-none">
            <h3 className="text-[#2D5A3D] text-[16px] lg:text-lg font-bold mb-3 font-['Segoe_UI']">{item.title}</h3>
            <p className="text-zinc-500 text-[14px] lg:text-base leading-relaxed lg:leading-6">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
