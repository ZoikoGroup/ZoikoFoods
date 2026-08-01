import Image from "next/image";
import React from "react";

export default function WhyPackagingMattersSection() {
  const cards = [
    {
      image: "/images/people-icon.png",
      title: "Consumers",
      points: [
        "70% prefer sustainable packaging",
        "5-10% premium pricing elasticity",
        "30% lower churn among eco-conscious buyers",
      ],
    },
    {
      image: "/images/financial-roi.png",
      title: "Financial ROI",
      points: [
        "$0.02/unit cost savings by 2028",
        "$25M+ annual savings, +2-3% EBITDA margin expansion",
        "Landfill tax avoidance → $5M/year (EU + US)",
      ],
    },
    {
      image: "/images/regulatory-fines.png",
      title: "Regulatory Edge",
      points: [
        "EU single-use plastic bans (2025-2030)",
        "US state-level plastic taxes (California, NY)",
        "APAC import/export compliance requirements",
      ],
      note: (
        <>
          <i>Zoiko ready by 2028 → competitors
          face 1-2 years of restricted access</i>
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-8 text-center font-['Georgia'] text-[24px] font-bold text-[#2D5A3D] md:mb-14 md:text-[32px]">
          Why Packaging Matters
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg bg-white p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.10)] md:p-8"
            >
              <div className="mb-6 md:mb-8">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={48}
                  height={56}
                  className="object-contain"
                />
              </div>

              <h3 className="mb-6 whitespace-nowrap font-['Georgia'] text-2xl font-bold leading-9 text-[#2D5A3D] md:mb-8 md:whitespace-normal md:text-3xl md:leading-10">
                {card.title}
              </h3>

              <ul className="space-y-3">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-4 text-[15px] font-normal leading-6 text-[#222222] md:text-[17px] md:leading-7"
                  >
                    <div className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2D5A3D] md:mt-[11px]"></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {card.note && (
                <div className="mt-8 rounded-lg bg-[#D4A574]/10 px-5 py-4 md:mt-10 md:px-6 md:py-5">
                  <p className="text-[14px] font-bold leading-relaxed text-[#D4A574] md:text-[16px]">
                    {card.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}