import Image from "next/image";

const frameworkCards = [
  {
    icon: "/images/regulatory-fines.png",
    title: (
      <>
        Ethics &
        <br />
        Integrity
      </>
    ),
    description: (
      <>
        Code of Conduct, Anti-
        <br />
        Bribery, Human Rights
      </>
    ),
  },
  {
    icon: "/images/risk-compliance.png",
    title: (
      <>
        Risk &
        <br />
        Compliance
      </>
    ),
    description: (
      <>
        Audit readiness, supply
        <br />
        chain ethics, cybersecurity
      </>
    ),
  },
  {
    icon: "/images/foods-icon.png",
    title: (
      <>
        Sustainability
        <br />
        & ESG
      </>
    ),
    description: (
      <>
        2028 Packaging, 2030
        <br />
        Renewables, farmer
        <br />
        empowerment
      </>
    ),
  },
  {
    icon: "/images/accountability.png",
    title: <>Accountability</>,
    description: (
      <>
        Whistleblower system,
        <br />
        independent oversight,
        <br />
        stakeholder engagement
      </>
    ),
  },
];

export default function GovernanceFrameworkSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-center text-[#2D5A3D] text-2xl font-bold font-[Georgia] leading-[52px]">
          Our Governance Framework
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {frameworkCards.map((card, index) => (
            <div
              key={index}
              className="h-auto md:h-80 bg-[#F8F9FA] rounded-lg flex flex-col items-center text-center px-6 py-8"
            >
              <Image
                src={card.icon}
                alt="Governance Icon"
                width={50}
                height={64}
                className="mb-8"
              />

              <h3 className="text-[#2D5A3D] text-xl font-bold font-[Georgia] leading-10">
                {card.title}
              </h3>

              <p className="mt-8 text-[#333333] text-sm font-normal font-['Inter'] leading-6">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}