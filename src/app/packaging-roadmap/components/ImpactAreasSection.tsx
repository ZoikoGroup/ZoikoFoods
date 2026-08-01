import Image from "next/image";
import React from "react";

const impactAreas = [
  {
    title: "Environmental",
    image: "/images/foods-icon.png",
    imageClasses: "w-6 h-6",
    titleClasses: "leading-tight",
    titleMargin: "mt-5",
    description: (
      <>
        40% landfill waste
        <br />
        reduction, 30% CO₂
        <br />
        footprint cut
      </>
    ),
  },
  {
    title: "Economic",
    image: "/images/money-icon.png",
    imageClasses: "w-8 h-8",
    titleClasses: "leading-tight",
    titleMargin: "mt-5",
    description: (
      <>
        $25M+ yearly savings +
        <br />
        premium brand advantage
      </>
    ),
  },
  {
    title: "Market Access",
    image: "/images/retail-touchpoints.png",
    imageClasses: "w-8 h-8",
    titleClasses: "leading-tight",
    titleMargin: "mt-5",
    description: (
      <>
        Compliant with EU bans
        <br />
        (2026 onward) 2 years
        <br />
        ahead of competitors
      </>
    ),
  },
  {
    title: (
      <>
        Circular
        <br />
        Economy
      </>
    ),
    image: "/images/farmers-targeted.png",
    imageClasses: "w-16 h-16",
    titleClasses: "leading-[38px]",
    titleMargin: "mt-[13px]",
    description: (
      <>
        Partnerships with recyclers,
        <br />
        pilot return-schemes in 2026
      </>
    ),
  },
];

export default function ImpactAreasSection() {
  return (
    <section className="w-full bg-[#F8F9FA] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center text-[#2D5A3D] text-[24px] font-bold font-['Georgia'] leading-8 mb-8 md:text-[32px] md:leading-[52px] md:mb-12">
          Impact Areas
        </h2>

        <div className="flex flex-wrap justify-center gap-5 md:gap-6 lg:gap-8">
          {impactAreas.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[280px] sm:w-[260px] h-auto min-h-[240px] pb-8 md:h-[290px] md:pb-0 bg-white rounded-lg shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] flex flex-col items-center pt-8 px-6 md:pt-10"
            >
              <div className="h-[64px] w-full flex items-center justify-center">
                <div className={`relative ${item.imageClasses} shrink-0`}>
                  <Image
                    src={item.image}
                    alt="impact icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className={`text-[#2D5A3D] text-[18px] md:text-[20px] font-bold font-['Georgia'] text-center ${item.titleMargin} ${item.titleClasses}`}>
                {item.title}
              </h3>

              <p className="mt-4 md:mt-5 text-[#333333] text-[13px] md:text-[14px] font-normal font-['Inter'] leading-[22px] md:leading-[24px] text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}