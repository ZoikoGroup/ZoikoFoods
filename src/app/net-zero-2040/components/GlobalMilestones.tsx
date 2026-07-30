export default function GlobalMilestones() {
  const milestones = [
    {
      year: "2025",
      description: "Carbon baseline mapped",
    },
    {
      year: "2026",
      description: "50% renewable energy adoption in Foods division",
    },
    {
      year: "2028",
      description: "Packaging milestone achieved (100% recyclable)",
    },
    {
      year: "2030",
      description: "100% renewable operations",
    },
    {
      year: "2035",
      description: "50% supply chain partners decarbonized",
    },
    {
      year: "2040",
      description: "Net Zero achieved",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-8">
        <h2 className="mb-10 sm:mb-16 text-center font-[Georgia] text-xl sm:text-2xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          Global Milestones
        </h2>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((item) => (
            <div
              key={item.year}
              className="flex flex-col items-center text-center"
            >
              {/* Year Circle */}
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#2D5A3D]">
                <span className="font-[Inter] text-base sm:text-xl font-bold leading-8 sm:leading-10 text-white">
                  {item.year}
                </span>
              </div>

              {/* Card */}
              <div className="mt-4 sm:mt-6 flex h-auto min-h-[100px] sm:min-h-[128px] w-full items-center justify-center rounded-lg bg-[#F8F9FA] px-4 sm:px-8 py-4 sm:py-0">
                <p className="font-[Inter] text-sm sm:text-base font-medium leading-5 sm:leading-6 text-[#333333]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}