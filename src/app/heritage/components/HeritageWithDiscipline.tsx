import Link from "next/link";
import React from "react";

export const HeritageWithDiscipline = () => (
  <section className="py-12 lg:py-16 px-6 lg:px-24 bg-gray-50 border-b-[4.5px] border-[#2D5A3D]">
    <div className="max-w-7xl mx-auto bg-white rounded-xl p-6 lg:p-12 relative">
      <h2 className="text-[36px] lg:text-4xl font-bold text-[#2D5A3D] mb-6 font-['Segoe_UI'] leading-[1.3] lg:leading-snug">
        Heritage<br className="block lg:hidden" />
        with <span className="text-transparent bg-clip-text bg-[linear-gradient(115deg,#2D5A3D_0%,#D4A574_100%)]">Discipline</span>
      </h2>
      <p className="text-zinc-600 text-[16px] lg:text-base leading-[1.8] lg:leading-relaxed mb-12">
        Cultural inspiration guided by<br className="block lg:hidden" />operational excellence and institutional<br className="block lg:hidden" />accountability.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16">
        {[
          { title: <>Respectful Sourcing</>, desc: <>Supplier standards and<br className="block lg:hidden" />responsible selection<br className="block lg:hidden" />practices that honor origin<br className="block lg:hidden" />while ensuring quality and<br className="block lg:hidden" />compliance.</> },
          { title: <>Modern Food<br className="block lg:hidden" />Safety</>, desc: <>Recipes and processes<br className="block lg:hidden" />aligned to applicable food<br className="block lg:hidden" />safety expectations across<br className="block lg:hidden" />all operating markets.</> },
          { title: <>Consistency at<br className="block lg:hidden" />Scale</>, desc: <>Controlled formulation<br className="block lg:hidden" />and repeatable<br className="block lg:hidden" />manufacturing outcomes<br className="block lg:hidden" />that maintain flavor<br className="block lg:hidden" />authenticity.</> },
          { title: <>Traceability<br className="block lg:hidden" />Readiness</>, desc: <>Documentation discipline<br className="block lg:hidden" />supporting recall readiness<br className="block lg:hidden" />and accountability<br className="block lg:hidden" />throughout the supply<br className="block lg:hidden" />chain.</> }
        ].map((item, i) => (
          <div key={i} className="bg-[#F8F9FA] border-l-[4.5px] border-[#2D5A3D] p-5 lg:p-6 flex flex-col h-[260px] lg:h-full rounded-md">
            <h3 className="text-[#2D5A3D] text-[18px] lg:text-[15px] font-bold mb-4 lg:mb-3 font-['Segoe_UI'] leading-[1.4] lg:leading-snug">{item.title}</h3>
            <p className="text-zinc-600 text-[15px] lg:text-[13px] leading-[1.9] lg:leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/governance-portal" className="inline-block text-[#2D5A3D] font-bold text-[15px] hover:opacity-80 transition-opacity">
          Our Quality & Compliance Framework
        </Link>
      </div>
    </div>
  </section>
);
