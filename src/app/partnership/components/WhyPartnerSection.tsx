import Image from "next/image";

const partnerBenefits = [
  {
    image: "/images/esg-icon.png",
    title: "Global Reach",
    description: (
      <>
        90+ countries served, 10
        <br />
        international hubs
      </>
    ),
  },
  {
    image: "/images/proven-execution.png",
    title: "Proven Scale",
    description: (
      <>
        120,000 MT moved
        <br />
        annually, 8,000+ containers
        <br />
        shipped
      </>
    ),
  },
  {
    image: "/images/cultural-differentiation.png",
    title: "Cultural Edge",
    description: (
      <>
        Caribbean, African, Indian,
        <br />
        and European heritage
        <br />
        brands that resonate
        <br />
        globally
      </>
    ),
  },
  {
    image: "/images/sustainability-edge.png",
    title: (
      <>
        Sustainability
        <br />
        Advantage
      </>
    ),
    description: (
      <>
        100% recyclable packaging
        <br />
        by 2028, ahead of industry
        <br />
        leaders
      </>
    ),
  },
];

export default function WhyPartnerSection() {
  return (
    <section className="bg-[#F8F9FA] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <h2 className="mb-10 text-center font-[Georgia] text-[22px] font-bold text-[#2D5A3D] sm:text-2xl md:mb-12">
          Why Partner With Zoiko
        </h2>

        <div className="grid grid-cols-1 gap-5 px-12 sm:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-4">

          {partnerBenefits.map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 text-center shadow-sm md:p-8 md:shadow-md"
            >
              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src={item.image}
                  alt="partner benefit"
                  width={80}
                  height={80}
                  className="h-[60px] w-[60px] object-contain"
                />
              </div>
              
              {/* Title (Fixed Height for Alignment) */}
              <div className="mt-6 flex h-[64px] items-center justify-center">
                <h3 className="font-[Georgia] text-[22px] font-bold leading-tight text-[#2D5A3D] md:text-xl">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-3 font-[Inter] text-[15px] leading-6 text-[#333333] md:text-base">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* Mobile Only Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <button className="rounded-md border border-[#2D5A3D] px-6 py-2.5 font-[Inter] text-[13px] font-bold text-[#2D5A3D] transition hover:bg-[#2D5A3D] hover:text-white">
            See Our Global Footprint
          </button>
        </div>
      </div>
    </section>
  );
}