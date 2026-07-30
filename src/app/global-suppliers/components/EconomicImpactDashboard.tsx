import Image from "next/image";

const impactData = [
  {
    image: "/images/esg-icon.png",
    alt: "Farmers Partnered",
    value: "15,000+",
    description: "farmers already partnered",
  },
  {
    image: "/images/money-icon.png",
    alt: "Income Boost",
    value: "+20-30%",
    description: "average income boost",
  },
  {
    image: "/images/growth-icon.png",
    alt: "Productivity Gains",
    value: "+25-40%",
    description: "productivity gains",
  },
  {
    image: "/images/farmers-targeted.png",
    alt: "Farmers Targeted",
    value: "100,000",
    description: "farmers targeted by 2030",
  },
  {
    image: "/images/retail-touchpoints.png",
    alt: "Retail Touchpoints",
    value: "50,000+",
    description: "retail touchpoints accessed",
  },
];

export default function EconomicImpactDashboard() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="mb-8 sm:mb-12 text-center font-[Georgia] text-2xl sm:text-3xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          Economic Impact Dashboard
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:grid lg:grid-cols-5">
          {impactData.map((item) => (
            <div
              key={item.alt}
              className="w-[calc(50%-8px)] sm:w-[calc(50%-16px)] lg:w-auto rounded-lg bg-[#F8F9FA] px-2 sm:px-8 py-6 sm:py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 sm:mb-8 flex justify-center">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={50}
                  height={64}
                  className="object-contain"
                />
              </div>

              <h3 className="font-[Inter] text-[20px] sm:text-3xl font-bold leading-7 sm:leading-[51px] text-[#D4A574]">
                {item.value}
              </h3>

              <p className="mt-2 sm:mt-4 font-[Inter] text-[12px] sm:text-sm leading-5 sm:leading-6 px-1 sm:px-3 text-[#666666]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}