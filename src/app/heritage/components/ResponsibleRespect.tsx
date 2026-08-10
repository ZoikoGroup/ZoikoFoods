import React from "react";

export const ResponsibleRespect = () => (
  <section className="py-12 lg:py-16 px-6 lg:px-24 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-[36px] lg:text-4xl font-bold text-[#2D5A3D] mb-6 font-['Segoe_UI'] leading-[1.3] lg:leading-snug">
        Responsible<br className="block lg:hidden" />
        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#2D5A3D_30%,#D4A574_100%)]">Respect</span>
      </h2>
      <p className="text-zinc-600 text-[20px] lg:text-xl leading-[1.8] lg:leading-9 mb-12">
        Cultural stewardship that prevents<br className="block lg:hidden" />exploitation and honors authentic<br className="block lg:hidden" />traditions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Respectful Representation', desc: <>Heritage is acknowledged and<br className="block lg:hidden" />handled responsibly throughout our<br className="block lg:hidden" />brand development and marketing<br className="block lg:hidden" />communications.</> },
          { title: 'Supplier & Partner Standards', desc: <>Clear expectations for ethical conduct<br className="block lg:hidden" />and sourcing across our supply chain<br className="block lg:hidden" />partnerships.</> },
          { title: 'Community Sensitivity', desc: <>We avoid stereotypes and celebrate real<br className="block lg:hidden" />cooking traditions with authenticity and<br className="block lg:hidden" />care.</> },
          { title: 'Continuous Improvement', desc: <>Feedback loops from partners and<br className="block lg:hidden" />markets guide our ongoing cultural<br className="block lg:hidden" />stewardship practices.</> }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 lg:p-8 rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] min-h-[280px] lg:min-h-[200px] flex flex-col justify-center">
            <h3 className="text-[22px] lg:text-[20px] font-bold mb-4 font-['Segoe_UI'] bg-clip-text text-transparent bg-[linear-gradient(90deg,#2D5A3D_30%,#D4A574_100%)]">{item.title}</h3>
            <p className="text-zinc-600 text-[17px] lg:text-[16px] leading-[1.9] lg:leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
