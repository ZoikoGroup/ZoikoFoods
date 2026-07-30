export default function CurrentOpportunitiesSection() {
  const jobs = [
    {
      title: "Regional Operations Manager",
      brand: "Noxx Chicken",
      location: "📍 Manchester, UK",
      type: "Full-time",
      category: "Management",
      description:
        "Lead operations across 8-12 Noxx Chicken locations, driving performance, training teams, and supporting franchise partners.",
      featured: false,
    },
    {
      title: "Supply Chain Analyst",
      brand: "Zoiko Foods",
      location: "📍 Sacramento, CA",
      type: "Full-time",
      category: "Corporate",
      description:
        "Optimize global supply chain operations, manage vendor relationships, and support expansion into new markets.",
      featured: false,
    },
    {
      title: "Food Innovation Scientist",
      brand: "Zoiko Foods",
      location: "📍 London, UK",
      type: "Full-time",
      category: "R&D",
      description:
        "Drive new product development for our FMCG lines, working with global flavor profiles and sustainable ingredients.",
      featured: true,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1360px] px-5">
        {/* Heading */}
        <h2 className="text-center text-[24px] font-semibold leading-10 text-[#333333] md:text-3xl">
          Current Opportunities
        </h2>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-4 md:mt-10 md:gap-5">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-xs font-semibold text-[#333333] md:text-base">
              Brand:
            </span>
            <div className="flex h-8 w-28 items-center rounded-md border-2 border-[#E0E0E0] bg-white px-2 text-[10px] text-[#333333] md:h-10 md:w-44 md:px-4 md:text-sm">
              All Brands
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-xs font-semibold text-[#333333] md:text-base">
              Role Type:
            </span>
            <div className="flex h-8 w-28 items-center rounded-md border-2 border-[#E0E0E0] bg-white px-2 text-[10px] text-[#333333] md:h-10 md:w-40 md:px-4 md:text-sm">
              All Types
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-xs font-semibold text-[#333333] md:text-base">
              Location:
            </span>
            <div className="flex h-8 w-28 items-center rounded-md border-2 border-[#E0E0E0] bg-white px-2 text-[10px] text-[#333333] md:h-10 md:w-40 md:px-4 md:text-sm">
              All Locations
            </div>
          </div>
        </div>

        {/* Job Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`relative rounded-xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.10)] ${
                job.featured ? "border-t-4 border-[#2D5A3D]" : ""
              }`}
            >
              {job.featured && (
                <div className="absolute right-5 top-4 rounded-full bg-[#315C3E] px-4 py-1 text-xs font-semibold text-white">
                  Featured
                </div>
              )}

              <h3 className="text-[18px] font-bold text-[#2D5A3D] md:text-2xl">
                {job.title}
              </h3>

              <div className="mt-3 inline-block rounded-full bg-[#F3F4F6] px-3 py-1 text-[10px] text-[#666666] md:mt-4 md:px-4 md:text-xs">
                {job.brand}
              </div>

              <div className="mt-3 flex flex-wrap gap-3 text-xs md:mt-4 md:gap-4 md:text-sm">
                <span className="font-semibold text-[#666666]">
                  {job.location}
                </span>
                <span className="text-[#666666]">{job.type}</span>
                <span className="text-[#666666]">{job.category}</span>
              </div>

              <p className="mt-4 min-h-0 text-sm leading-5 text-[#555555] md:mt-6 md:min-h-[72px] md:text-base md:leading-6">
                {job.description}
              </p>

              <div className="mt-6 flex gap-3 md:mt-8 md:gap-4">
                <button className="rounded-md bg-[#2D5A3D] px-4 py-2 text-sm font-semibold text-white md:px-6 md:py-3 md:text-base">
                  Apply Now
                </button>

                <button className="rounded-md border-2 border-[#2D5A3D] px-4 py-2 text-sm font-semibold text-[#2D5A3D] md:px-6 md:py-3 md:text-base">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}