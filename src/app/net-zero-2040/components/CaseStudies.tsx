export default function CaseStudies() {
  const studies = [
    {
      title: "Caribbean",
      description: "Solar-powered cold storage\n→ cut diesel reliance by\n70%",
      small: true,
    },
    {
      title: "India",
      description: "Farmer training reduced\nfertilizer emissions by 20%",
      small: false,
    },
    {
      title: "USA",
      description:
        "AI-powered factory\nefficiency → 15% energy\nintensity reduction",
      small: false,
    },
    {
      title: "EU",
      description: "Packaging compliance →\n€5M landfill tax avoidance",
      small: true,
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 sm:mb-14 text-center font-[Georgia] text-xl sm:text-2xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          Case Studies - Region by Region
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {studies.map((study) => (
            <div
              key={study.title}
              className="rounded-lg bg-[#F8F9FA] p-6 sm:p-9"
            >
              <h3 className="mb-6 sm:mb-8 font-[Georgia] text-lg sm:text-xl font-bold leading-8 sm:leading-10 text-[#2D5A3D]">
                {study.title}
              </h3>

              <p
                className={`whitespace-pre-line font-[Inter] leading-6 text-[#333333] ${
                  study.small ? "text-sm" : "text-base"
                }`}
              >
                {study.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}