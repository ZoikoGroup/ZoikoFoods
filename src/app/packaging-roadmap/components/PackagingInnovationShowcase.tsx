import Image from "next/image";
import React from "react";

const packagingItems = [
  {
    title: "Patties",
    image: "/images/patties.png",
    description: "Biodegradable wrappers",
    benefit: "Saves $0.03/unit",
  },
  {
    title: "Beverages",
    image: "/images/beverages.png",
    description: "Plant-based bottles",
    benefit: (
      <>
        Saves $0.01/unit, avoids
        <br />
        $10M landfill costs
      </>
    ),
  },
  {
    title: "Condiments",
    image: "/images/condiments.png",
    description: "Recyclable caps/jars",
    benefit: (
      <>
        Saves $0.015/unit, boosts
        <br />
        EU shelf access
      </>
    ),
  },
  {
    title: "Teas & Coffee",
    image: "/images/tea-coffee.png",
    description: "Compostable pouches",
    benefit: (
      <>
        Saves $0.008/unit, avoids
        <br />
        EU plastic fines
      </>
    ),
  },
  {
    title: "Rice",
    image: "/images/rice.png",
    description: "Compostable sacks",
    benefit: (
      <>
        Saves $0.02/unit, smooth
        <br />
        EU/APAC exports
      </>
    ),
  },
];

export default function PackagingInnovationShowcase() {
  return (
    <section className="w-full bg-[#F8F9FA] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center text-[#2D5A3D] text-[24px] font-bold font-['Georgia'] leading-8 mb-8 md:text-[32px] md:leading-[52px] md:mb-12">
          Packaging Innovation Showcase
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 max-w-[950px] mx-auto">
          {packagingItems.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[340px] sm:w-[280px] bg-white rounded-lg shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] flex flex-col items-center pt-6 px-5 pb-6 md:pt-8 md:pb-8"
            >
              <div className="w-[86px] h-[86px] relative shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="mt-6 text-[#2D5A3D] text-[20px] font-bold font-['Georgia'] leading-tight text-center md:mt-8 md:text-[22px]">
                {item.title}
              </h3>

              <p className="mt-3 text-[#333333] text-[15px] font-normal leading-6 text-center md:mt-4 md:text-[16px]">
                {item.description}
              </p>

              <div className="mt-6 w-full max-w-[240px] sm:w-[220px] bg-[#D4A574] rounded-lg flex items-center justify-center text-center px-2 py-4 md:mt-7 md:px-0 md:py-[18px]">
                <p className="text-[#2D5A3D] text-[13.61px] font-bold font-['Inter'] leading-[23px]">
                  {item.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}