import Image from "next/image";

export default function CareerTracksSection() {
  const brandCareers = [
    {
      title: "Store Crew & Shift Leaders",
      description: "Front-line customer service and food preparation",
    },
    {
      title: "Store Managers",
      description: "Complete store operations and team leadership",
    },
    {
      title: "Regional Operations",
      description: "Multi-store oversight and market development",
    },
  ];

  const corporateCareers = [
    {
      title: "Supply Chain & Logistics",
      description: "Global operations and procurement management",
    },
    {
      title: "Food Innovation & R&D",
      description: "Product development and culinary innovation",
    },
    {
      title: "Corporate Finance & IR",
      description: "Financial planning and investor relations",
    },
    {
      title: "IT & Digital Platforms",
      description: "Technology infrastructure and digital innovation",
    },
    {
      title: "Global Marketing & Partnerships",
      description: "Brand strategy and strategic alliances",
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-20">
      <div className="mx-auto max-w-[1360px] px-5">
        <div className="text-center">
          <h2 className="text-[26px] font-semibold leading-10 text-[#333333] md:text-4xl">
            Two Clear Career Tracks
          </h2>

          <p className="mt-4 text-lg leading-8 text-[#666666]">
            Choose the path that matches your ambitions and expertise
          </p>
        </div>

        {/* Grid Container */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {/* Card 1: Brand-Level Tracks */}
          <div className="relative flex min-h-0 w-full flex-col rounded-2xl border-t-[6px] border-[#2D5A3D] bg-white px-5 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:min-h-[900px] md:px-10 md:pb-15 md:pt-10">
            <div className="flex justify-center">
              <Image
                src="/images/store-icon.png"
                alt="Brand Careers"
                width={64}
                height={64}
              />
            </div>

            <h3 className="mt-8 text-center text-2xl font-bold text-green-800">
              Brand-Level Careers (Noxx Chicken)
            </h3>

            <p className="mt-3 text-center text-base text-[#666666]">
              Restaurant operations and customer-facing roles
            </p>

            <div className="mt-8 space-y-5">
              {brandCareers.map((career, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-[#F8F8F8] p-5"
                >
                  <div>
                    <h4 className="text-base font-semibold text-green-800">
                      {career.title}
                    </h4>

                    <p className="mt-2 text-sm text-[#666666]">
                      {career.description}
                    </p>
                  </div>

                  <button className="rounded-full bg-green-800 px-5 py-2 text-xs font-semibold text-white">
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Group-Level Tracks */}
          <div className="relative flex min-h-0 w-full flex-col rounded-2xl border-t-[6px] border-[#2D5A3D] bg-white px-5 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:min-h-[900px] md:px-10 md:pb-15 md:pt-10">
            <div className="flex justify-center">
              <Image
                src="/images/corporate-icon.png"
                alt="Corporate Careers"
                width={64}
                height={64}
              />
            </div>

            <h3 className="mt-8 text-center text-2xl font-bold text-green-800">
              Group-Level Careers (Zoiko Foods Corp.)
            </h3>

            <p className="mt-3 text-center text-base text-[#666666]">
              Corporate functions and strategic roles
            </p>

            <div className="mt-8 space-y-5">
              {corporateCareers.map((career, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-[#F8F8F8] p-5"
                >
                  <div>
                    <h4 className="text-base font-semibold text-green-800">
                      {career.title}
                    </h4>

                    <p className="mt-2 text-sm text-[#666666]">
                      {career.description}
                    </p>
                  </div>

                  <button className="rounded-full bg-green-800 px-5 py-2 text-xs font-semibold text-white">
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}