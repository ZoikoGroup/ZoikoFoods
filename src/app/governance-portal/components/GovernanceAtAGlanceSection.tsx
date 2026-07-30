import Image from "next/image";

const cards = [
  {
    icon: "/images/lock-icon.png",
    value: "0",
    title: (
      <>
        Compliance Risk Incidents
        <br />
        reported in 2025
      </>
    ),
  },
  {
    icon: "/images/foods-icon.png",
    value: "100%",
    title: (
      <>
        ESG Commitments Tracked
        <br />
        transparency
      </>
    ),
  },
  {
    icon: "/images/esg-icon.png",
    value: "90+",
    title: (
      <>
        Countries Under Full
        <br />
        Compliance covered
      </>
    ),
  },
  {
    icon: "/images/analytics-icon.png",
    value: "Day 1",
    title: (
      <>
        Independent Oversight board-
        <br />
        level committees in place from
      </>
    ),
  },
];

export default function GovernanceAtAGlanceSection() {
  return (
    <section className="w-full bg-[#F8F9FA] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-center text-[#2D5A3D] text-2xl font-bold font-[Georgia] leading-[52px]">
          Governance at a Glance
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.10)] h-auto md:h-[288px] py-8 md:py-0 flex flex-col items-center justify-center px-6 text-center"
            >
              <Image
                src={card.icon}
                alt={card.value}
                width={54}
                height={64}
                className="mb-5"
              />

              <h3 className="text-[#D4A574] text-3xl font-bold font-['Inter'] leading-[64px]">
                {card.value}
              </h3>

              <p className="mt-4 text-[#666666] text-sm font-normal font-['Inter'] leading-6">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}