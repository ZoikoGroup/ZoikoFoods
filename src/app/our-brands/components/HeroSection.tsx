import React from "react";

const stats = [
  { value: "6", label: "Core Brands" },
  { value: "12+", label: "Markets Served" },
  { value: "100%", label: "Authentic Caribbean" },
];

export default function HeroSection() {
  return (
    <section
      className="border-b border-solid px-6 py-12 text-center sm:px-10 lg:px-20 lg:py-20"
      style={{
        borderColor: "rgba(212,175,55,0.2)",
        backgroundImage:
          "linear-gradient(135deg, rgba(45,80,22,0.05) 0%, rgba(212,175,55,0.05) 100%)",
      }}
    >
      <div className="mx-auto max-w-4xl">
        <h1
          className="mx-auto mb-[42px] bg-clip-text text-[40px] font-extrabold leading-[1.1] tracking-tight text-transparent lg:text-[64px] lg:leading-[102.4px]"
          style={{
            backgroundImage: "linear-gradient(123deg, rgb(26,51,9) 0%, rgb(45,80,22) 100%)",
          }}
        >
          <span className="lg:hidden">
            Our Brand
            <br />
            Portfolio
          </span>
          <span className="hidden lg:inline">Our Brand Portfolio</span>
        </h1>
        <p className="mx-auto mb-[45px] max-w-2xl text-[20.8px] leading-[35.36px] text-[#2C2C2C]">
          Authentic Caribbean food brands bringing flavor, culture, and wellness to communities
          across the globe
        </p>

        <div className="grid grid-cols-2 gap-y-8 lg:flex lg:items-start lg:justify-center lg:gap-16">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={idx === 2 ? "col-span-2" : undefined}
            >
              <p
                className="bg-clip-text text-[40px] font-extrabold leading-[64px] text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, rgb(34,139,34) 0%, rgb(45,90,61) 50%, rgb(212,165,116) 100%), linear-gradient(120deg, rgb(184,148,30) 0%, rgb(212,175,55) 100%)",
                }}
              >
                {stat.value}
              </p>
              <p className="mt-[6px] text-[15.2px] font-semibold leading-[24.32px] text-[#8B8B8B]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
