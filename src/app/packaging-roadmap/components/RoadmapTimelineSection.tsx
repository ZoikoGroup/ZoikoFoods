export default function RoadmapTimelineSection() {
  const roadmap = [
    {
      year: "2025",
      title: "Biodegradable Launch",
      description:
        "Biodegradable pattie wrappers, plant-based bottles (pilot scale, +2% consumer uptake)",
      badge: "Pilot Scale",
    },
    {
      year: "2026",
      title: "50% Milestone",
      description:
        "50% recyclable milestone → $8M savings, EU regulatory compliance",
      badge: "$8M Savings",
    },
    {
      year: "2027",
      title: "Scale Renewable Sourcing",
      description:
        "Scale renewable sourcing → $15M savings, premium positioning uplift",
      badge: "$15M Savings",
    },
    {
      year: "2028",
      title: "100% Achievement",
      description:
        "100% recyclable/compostable → $25M+ annual savings, global first-mover advantage",
      badge: "$25M+ Annual",
    },
  ];

  return (
    <section className="bg-white pt-12 pb-12 md:pt-35 md:pb-30">
      <div className="mx-auto max-w-[1200px] px-5 md:h-[550px]">
        <h2 className="mb-8 text-center font-['Georgia'] text-[24px] font-bold leading-8 text-[#2D5A3D] md:mb-14 md:text-[32px] md:leading-[52px]">
          Roadmap Timeline
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {roadmap.map((item) => (
            <div key={item.year} className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2D5A3D]">
                <span className="text-xl font-bold leading-10 text-white">
                  {item.year}
                </span>
              </div>

              <div className="mt-6 flex h-auto w-full flex-col items-center rounded-lg bg-[#F8F9FA] px-6 pt-8 pb-8 text-center md:h-[250px] md:pb-0">
                <h3 className="font-['Georgia'] text-xl font-bold leading-7 text-[#2D5A3D] md:text-2xl md:leading-8">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#333333] md:mt-8 md:text-base">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-[#D4A574] px-6 py-3 flex items-center justify-center">
                <span className="text-[#2D5A3D] text-[13.61px] font-bold font-['Inter'] leading-[23px]">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}