"use client";

import Image from "next/image";

const benefits = [
  {
    image: "/images/growth-icon.png",
    value: "+25-40%",
    description: "Average Partner Growth: sales uplift within 24 months",
  },
  {
    image: "/images/retail-touchpoints.png",
    value: "50,000+",
    description: "Retail Expansion: access to retail touchpoints across 5 continents",
  },
  {
    image: "/images/supplier-code.png",
    value: "First-Mover",
    description: "Exclusive Rights: advantage in key emerging markets",
  },
  {
    image: "/images/innovation-icon.png",
    value: "Innovation",
    description: "Co-development in beverages, food tech, and eco-packaging",
  },
];

export default function ROIBenefitsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="mb-12 text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D]">
          ROI & Benefits
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 px-12 sm:grid-cols-2 md:gap-6 md:px-0 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="mx-auto flex h-auto min-h-[250px] w-full max-w-[266px] flex-col items-center justify-start rounded-lg bg-[#F8F9FA] p-6 text-center md:h-[272px] md:p-8"
            >
              {/* Image */}
              <div className="relative mb-6 h-[64px] w-[49px]">
                <Image
                  src={item.image}
                  alt={item.value}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Value */}
              <h3 className="mb-3 font-[Inter] text-[24px] font-bold text-[#D4A574] md:mb-4 md:text-3xl">
                {item.value}
              </h3>

              {/* Description */}
              <p className="font-[Inter] text-[14px] leading-[22px] text-[#666666] md:leading-[22px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Only Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <button className="rounded-md border border-[#2D5A3D] px-6 py-2.5 font-[Inter] text-[13px] font-bold text-[#2D5A3D] transition hover:bg-[#2D5A3D] hover:text-white">
            Download Partnership Deck
          </button>
        </div>
      </div>
    </section>
  );
}