const commitments = [
  {
    title: "Caribbean (Patties)",
    description: (
      <>
        Wrappers cut 80% plastic → $1M/year
        <br />
        savings + consumer loyalty uplift
      </>
    ),
    badge: "$1M/year savings",
  },
  {
    title: "India (Rice)",
    description: (
      <>
        Compostable sacks → $2.5M savings +
        <br />
        smoother EU imports
      </>
    ),
    badge: "$2.5M savings",
  },
  {
    title: "USA (Condiments)",
    description: (
      <>
        Recyclable caps cut 500 tons plastic →
        <br />
        $750K landfill fee avoidance
      </>
    ),
    badge: "$750K avoidance",
  },
];

export default function CommitmentsInActionSection() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-center text-[#2D5A3D] text-[22px] font-bold font-['Georgia'] leading-9 mb-6 md:text-[26px] md:leading-[52px]">
          Commitments in Action
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {commitments.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] rounded-lg p-6 md:p-8 flex flex-col"
            >
              <h3 className="text-[#2D5A3D] text-lg md:text-xl font-bold font-['Georgia'] leading-tight">
                {item.title}
              </h3>

              <p className="mt-4 md:mt-8 text-[#333333] text-[14px] md:text-[15px] font-normal font-['Inter'] leading-6 flex-grow">
                {item.description}
              </p>

              <div className="mt-5 inline-flex px-4 py-3 bg-[#D4A574] rounded-md items-center justify-center self-start">
                <span className="text-[#2D5A3D] text-[13.5px] font-bold font-['Inter'] leading-none">
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