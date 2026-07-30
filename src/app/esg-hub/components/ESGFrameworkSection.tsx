import Image from "next/image";

const frameworkItems = [
  {
    title: "Planet",
    description: "Net Zero 2040, renewable energy, circular economy",
    image: "/images/planet-icon.png",
    textSize: "text-sm",
  },
  {
    title: "People",
    description:
      "100,000+ farmers empowered, diversity & inclusion across all subsidiaries",
    image: "/images/people-icon.png",
    textSize: "text-base",
  },
  {
    title: "Governance",
    description:
      "Zero tolerance on corruption, global compliance framework",
    image: "/images/governance-icon.png",
    textSize: "text-sm",
  },
  {
    title: "Connectivity",
    description:
      "Green telecom infrastructure, digital inclusion for underserved communities",
    image: "/images/connectivity-icon.png",
    textSize: "text-sm",
  },
  {
    title: "Innovation",
    description:
      "AI, fintech, and digital platforms built with sustainability at the core",
    image: "/images/innovation-icon.png",
    textSize: "text-sm",
  },
  {
    title: "Health",
    description:
      "Access to affordable medicines, sustainable labs, nutrition-first food science",
    image: "/images/health-icon.png",
    textSize: "text-base",
  },
];

export default function ESGFrameworkSection() {
  return (
    <section className="bg-white px-6 sm:px-8 md:px-16 lg:px-40 xl:px-70 pb-16 sm:pb-20 lg:pb-30 pt-14 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 sm:mb-14 text-center font-[Georgia] text-xl sm:text-2xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          The Zoiko ESG Framework
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {frameworkItems.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-[#F8F9FA] p-5 sm:p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={64}
                height={64}
                className="mx-auto mb-5 sm:mb-8 h-12 w-12 sm:h-16 sm:w-16 object-contain"
              />

              <h3 className="font-[Georgia] text-lg sm:text-xl font-bold leading-8 sm:leading-10 text-[#2D5A3D]">
                {item.title}
              </h3>

              <p
                className={`mt-4 sm:mt-6 ${item.textSize} font-[Inter] leading-6 text-[#333333]`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}