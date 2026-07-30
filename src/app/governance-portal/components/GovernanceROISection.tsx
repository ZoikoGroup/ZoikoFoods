import Image from "next/image";

const roiCards = [
  {
    icon: "/images/reduced-risk.png",
    title: "Reduced Risk",
    description: (
      <>
        Compliance-first operations
        <br />
        → lower regulatory delays
        <br />
        entering new markets
      </>
    ),
  },
  {
    icon: "/images/money-icon.png",
    title: (
      <>
        Investor
        <br />
        Confidence
      </>
    ),
    description: (
      <>
        Transparent governance →
        <br />
        stronger access to growth
        <br />
        capital
      </>
    ),
  },
  {
    icon: "/images/esg-icon.png",
    title: "Market Access",
    description: (
      <>
        Certification alignment
        <br />
        accelerates
        <br />
        licensing/approvals across
        <br />
        jurisdictions
      </>
    ),
  },
  {
    icon: "/images/growth-icon.png",
    title: (
      <>
        Operational
        <br />
        Efficiency
      </>
    ),
    description: (
      <>
        Board-level oversight
        <br />
        reduces inefficiencies in
        <br />
        procurement &amp; distribution
      </>
    ),
  },
];

export default function GovernanceROISection() {
  return (
    <section className="w-full bg-[#F8F9FA] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-center text-[#2D5A3D] text-2xl font-bold font-[Georgia] leading-[52px]">
          ROI of Governance
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {roiCards.map((card, index) => (
            <div
              key={index}
              className="h-auto md:h-80 bg-white rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.10)] flex flex-col items-center text-center px-6 py-8"
            >
              <Image
                src={card.icon}
                alt="ROI Icon"
                width={48}
                height={56}
                className="mb-6"
              />

              <h3 className="text-[#2D5A3D] text-xl font-bold font-[Georgia] leading-10">
                {card.title}
              </h3>

              <p
                className="mt-6 text-[#333333] text-sm font-normal font-['Inter'] leading-6"
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}