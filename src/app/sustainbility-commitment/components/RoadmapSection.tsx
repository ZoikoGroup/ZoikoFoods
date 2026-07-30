const roadmap = [
  {
    year: "2025",
    title: "Circular Packaging\nPilots",
    note: "Zoiko launches ahead of\nschedule",
  },
  {
    year: "2026",
    title: "50% Recyclable\nPackaging\nMilestone",
    note: "Zoiko 2 years ahead of\nNestlé",
  },
  {
    year: "2028",
    title: "100% Recyclable\nPackaging",
    note: "Zoiko outpacing\nUnilever's 2029 pledge",
  },
  {
    year: "2030",
    title: "Renewable\nOperations +\n100,000 Farmers\nEmpowered",
    note: "Aligns with PepsiCo's\nenergy goal, ahead of\nNestlé's 2050 Net Zero",
  },
  {
    year: "2040",
    title: "Net Zero\nAchievement",
    note: "10 years faster than\nNestlé's 2050 pledge",
  },
];

export default function RoadmapSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-12 md:px-6">
        <h2 className="mb-16 text-center font-[Georgia] text-[22px] sm:text-2xl font-bold leading-[52px] text-[#2D5A3D] whitespace-nowrap">
          Commitment Roadmap
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          {roadmap.map((item) => (
            <div key={item.year} className="flex flex-col items-center">
              <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#2D5A3D]">
                <span className="font-[Inter] text-lg md:text-xl font-bold text-white">
                  {item.year}
                </span>
              </div>

              <div className="mt-6 w-full rounded-lg bg-white p-5 md:p-8 shadow-md">
                <h3 className="whitespace-pre-line text-center font-[Georgia] text-lg md:text-xl font-bold leading-7 md:leading-8 text-[#2D5A3D]">
                  {item.title}
                </h3>

                <div className="mt-6 md:mt-8 rounded-lg bg-[#D4A574] p-3 md:p-4">
                  <p className="whitespace-pre-line text-center font-[Inter] text-xs md:text-sm font-bold leading-5 md:leading-6 text-[#2D5A3D]">
                    {item.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}