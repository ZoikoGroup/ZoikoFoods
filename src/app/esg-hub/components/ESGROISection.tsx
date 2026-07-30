import Image from "next/image";

const roiData = [
  {
    image: "/images/money-icon.png",
    value: "$500M+",
    lines: [
      "Projected Group Savings by",
      "2035 from renewables &",
      "packaging",
    ],
  },
  {
    image: "/images/growth-icon.png",
    value: "5-10%",
    lines: [
      "Margin Growth from",
      "sustainable products priced",
      "at premium",
    ],
  },
  {
    image: "/images/energy-icon.png",
    value: "20%",
    lines: [
      "Efficiency Gains - energy",
      "cost reduction across Foods",
      "& Comms",
    ],
  },
  {
    image: "/images/investor-value-icon.png",
    value: "Lower Cost",
    lines: [
      "Investor Value - ESG",
      "alignment → lower cost of",
      "capital, higher credit ratings",
    ],
  },
  {
    image: "/images/esg-icon.png",
    value: "30%",
    lines: [
      "Market Access - ESG-",
      "aligned operations",
      "accelerate regulatory approvals",
    ],
  },
];

function ROICard({ item }: { item: (typeof roiData)[number] }) {
  return (
    <div className="flex w-full sm:w-[266px] min-h-[240px] sm:min-h-[260px] flex-col items-center rounded-lg bg-[#F8F9FA] px-4 sm:px-5 pt-5 sm:pt-8 pb-3 sm:pb-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Image
        src={item.image}
        alt={item.value}
        width={48}
        height={48}
        className="mx-auto h-10 w-10 sm:h-12 sm:w-12 object-contain"
      />

      <h3 className="mt-3 sm:mt-5 font-[Georgia] text-lg sm:text-xl font-bold leading-7 text-[#D4A574]">
        {item.value}
      </h3>

      <div className="mt-3 sm:mt-4 flex flex-1 items-start justify-center">
        <p className="text-sm font-[Inter] leading-5 sm:leading-6 text-[#333333]">
          {item.lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < item.lines.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function ESGROISection() {
  const topRow = roiData.slice(0, 3);
  const bottomRow = roiData.slice(3);

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-16">
        <h2 className="mb-8 sm:mb-12 text-center font-[Georgia] text-xl sm:text-2xl font-bold leading-tight text-[#2D5A3D]">
          ESG ROI - Group-Wide Impact
        </h2>

        {/* Top row - 3 cards */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {topRow.map((item) => (
            <ROICard key={item.value} item={item} />
          ))}
        </div>

        {/* Bottom row - 2 cards */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-8">
          {bottomRow.map((item) => (
            <ROICard key={item.value} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}