const resources = [
  {
    title: "Guides",
    description:
      "How to apply, compliance requirements, sustainability training",
  },
  {
    title: "Video Library",
    description: "Training videos, farmer success stories",
  },
  {
    title: "Templates",
    description: "Contract examples, fair pricing models",
  },
  {
    title: "Sustainability",
    description: "2028 packaging, 2030 renewables guidance",
  },
];

export default function FarmerResourcesHub() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="mb-8 sm:mb-12 text-center font-[Georgia] text-2xl sm:text-3xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          Farmer Resources Hub
        </h2>

        {/* Mobile & Tablet Grid */}
        <div className="grid grid-cols-2 auto-rows-fr gap-4 lg:hidden">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-lg bg-[#F8F9FA] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
            >
              <h3 className="font-[Georgia] text-[16px] sm:text-xl font-bold leading-6 sm:leading-8 text-[#2D5A3D]">
                {resource.title}
              </h3>
              <p className="mt-2 font-[Inter] text-[12px] sm:text-sm leading-5 sm:leading-6 text-[#333333]">
                {resource.description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="rounded-lg bg-[#F8F9FA] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-[Georgia] text-2xl font-bold leading-10 text-[#2D5A3D]">
                {resource.title}
              </h3>
              <p className="mt-6 font-[Inter] text-sm leading-6 text-[#333333]">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}