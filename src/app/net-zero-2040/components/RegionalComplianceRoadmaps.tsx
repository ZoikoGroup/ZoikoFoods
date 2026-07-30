export default function RegionalComplianceRoadmaps() {
  const roadmaps = [
    {
      region: "European Union",
      frameworks:
        "EU Green Deal (Net Zero 2050), EU ETS (Emissions Trading Scheme), Packaging & Waste Directive.",
      advantage: "Compliant 12 years earlier than EU mandate.",
      roi: "Avoids €50M+ in carbon penalties and landfill fines.",
    },
    {
      region: "Asia-Pacific",
      frameworks:
        "India National Action Plan on Climate Change, China's ETS, ASEAN Plastics Pact.",
      advantage:
        "2028 packaging milestone ensures compliance with India/EU export packaging laws.",
      roi: "$30M+ savings from import/export readiness.",
    },
    {
      region: "United States",
      frameworks:
        "SEC climate disclosure rules, California & New York carbon taxes.",
      advantage:
        "100% renewable by 2030 → faster entry into regulated states.",
      roi: "$40M+ tax avoidance + $10M/year energy cost savings.",
    },
    {
      region: "Africa",
      frameworks:
        "African Union Climate Strategy, national carbon tax regimes (South Africa, Nigeria emerging).",
      advantage:
        "Early renewable adoption + agritech farmer empowerment programs.",
      roi: "Builds supply resilience while reducing volatility.",
    },
    {
      region: "Latin America",
      frameworks:
        "Mexico General Climate Law, Colombia Climate Change Law, Brazil National Plan for Carbon Neutrality.",
      advantage:
        "Net Zero aligned to secure government tenders + retail distribution.",
      roi: "Opens ESG-driven retail channels worth $100M+.",
      centered: true,
    },
  ];

  const Card = ({ item }: { item: { region: string; frameworks: string; advantage: string; roi: string; centered?: boolean } }) => (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="bg-[#2D5A3D] py-3 sm:py-4">
        <h3 className="text-center font-[Inter] text-lg sm:text-xl font-bold leading-7 sm:leading-8 text-white">
          {item.region}
        </h3>
      </div>        <div className="space-y-4 sm:space-y-5 p-4 sm:p-6">
        <p className="font-[Inter] text-sm sm:text-base leading-5 sm:leading-6 text-[#333333]">
          <span className="font-bold text-[#2D5A3D]">Frameworks:</span>{" "}
          {item.frameworks}
        </p>

        <p className="font-[Inter] text-sm sm:text-base leading-5 sm:leading-6 text-[#333333]">
          <span className="font-bold text-[#2D5A3D]">Zoiko Advantage:</span>{" "}
          {item.advantage}
        </p>

        <p className="font-[Inter] text-sm sm:text-base leading-5 sm:leading-6 text-[#333333]">
          <span className="font-bold text-[#2D5A3D]">ROI:</span> {item.roi}
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 sm:mb-14 text-center font-[Georgia] text-xl sm:text-2xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          Regional Compliance
          <br />
          Roadmaps
        </h2>

        {/*
          Single grid for all 5 cards. The 5th card spans both columns
          and is centered via a flex wrapper + md:w-1/2, so it inherits
          the EXACT same column width as the 4 cards above it instead of
          an arbitrary hardcoded max-width.
        */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">
          {roadmaps
            .filter((item) => !item.centered)
            .map((item) => (
              <Card key={item.region} item={item} />
            ))}

          {roadmaps
            .filter((item) => item.centered)
            .map((item) => (
              <div key={item.region} className="md:col-span-2 flex justify-center">
                <div className="w-full md:w-1/2">
                  <Card item={item} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}