import Image from "next/image";

const items = [
  {
    icon: "/images/fraud-reduction.png",
    title: "Fraud Reduction",
    description:
      "Strong systems cut financial fraud by 40–50% (industry benchmark)",
  },
  {
    icon: "/images/regulatory-fines.png",
    title: "Regulatory Fines Avoided",
    description:
      "Potential $20–50M in penalties avoided annually across markets",
  },
  {
    icon: "/images/reputation-preservation.png",
    title: "Reputation Preservation",
    description:
      "Companies with active whistleblower programs see 30% higher consumer trust scores",
  },
  {
    icon: "/images/investor-value.png",
    title: "Investor Value",
    description:
      "Improved ESG & governance scores → lower cost of capital, access to green funds",
  },
];

export default function ROIRiskMitigation() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-8 text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D] md:mb-12">
          ROI & Risk Mitigation
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex min-h-80 flex-col items-center rounded-lg bg-[#F8F9FA] px-6 pb-8 text-center"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                className="mt-8 h-16 w-16 object-contain"
              />

              <h3 className="mt-6 font-[Georgia] text-xl font-bold leading-8 text-[#2D5A3D]">
                {item.title}
              </h3>

              <p className="mt-4 font-[Inter] text-base leading-6 text-[#333333]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
