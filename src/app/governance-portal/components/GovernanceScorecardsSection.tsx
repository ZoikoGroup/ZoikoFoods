const scorecards = [
  {
    value: "Zoiko = AA+",
    title: "ESG Commitment Score",
    description: "Target = AAA (2027)",
  },
  {
    value: "100%",
    title: "Supplier Ethics Compliance",
    description: "contracts tied to Code of Ethics",
  },
  {
    value: "On Track",
    title: "Sustainability Targets",
    description: (
      <>
        2028 Packaging &amp; 2030
        <br />
        Renewables
      </>
    ),
  },
  {
    value: "0",
    title: "Risk Incidents",
    description: (
      <>
        major cases reported since
        <br />
        founding
      </>
    ),
  },
];

export default function GovernanceScorecardsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-center text-[#2D5A3D] text-2xl font-bold font-[Georgia] leading-[52px]">
          Governance Scorecards
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {scorecards.map((card, index) => (
            <div
              key={index}
              className="h-auto md:h-48 py-6 md:py-0 bg-[#F8F9FA] rounded-lg flex flex-col items-center justify-center text-center px-6"
            >
              <h3 className="text-[#D4A574] text-2xl font-bold font-['Inter'] leading-10">
                {card.value}
              </h3>

              <h4 className="mt-5 text-[#2D5A3D] text-lg font-bold font-[Georgia] leading-6">
                {card.title}
              </h4>

              <p className="mt-5 text-[#666666] text-sm font-normal font-['Inter'] leading-6">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}