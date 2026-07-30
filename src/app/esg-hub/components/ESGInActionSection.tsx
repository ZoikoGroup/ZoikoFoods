const actionItems = [
  {
    category: "Foods",
    title: "Jamaican Farmers Integration",
    lines: ["Integrated into pattie exports - supply", "chain savings + community uplift"],
  },
  {
    category: "Healthcare",
    title: "Green Chemistry Pilot",
    lines: ["Reducing lab waste by 20% through", "sustainable chemistry practices"],
  },
  {
    category: "Financial Services",
    title: "Zoiko Remit",
    lines: ["Enabling cross-border transfers with 90%", "less paper use"],
  },
  {
    category: "Communications",
    title: "Renewable Towers in Africa",
    lines: [
      "Reducing diesel reliance with solar-powered",
      " telecommunications infrastructure",
    ],
  },
];

function ActionCard({ item }: { item: (typeof actionItems)[number] }) {
  return (
    <div className="w-full sm:w-[490px] rounded-lg bg-white p-5 sm:p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-center font-[Georgia] text-base sm:text-lg font-bold leading-6 sm:leading-7 text-[#2D5A3D]">
        {item.category}
      </h3>

      <h4 className="mt-2 sm:mt-3 text-center font-[Georgia] text-xl sm:text-2xl font-bold leading-7 sm:leading-8 text-[#D4A574]">
        {item.title}
      </h4>

      <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base font-[Inter] leading-6 sm:leading-7 text-[#333333]">
        {item.lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < item.lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );
}

export default function ESGInActionSection() {
  return (
    <section className="bg-[#F8F9FA] py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12">
        <h2 className="mb-6 sm:mb-10 text-center font-[Georgia] text-xl sm:text-2xl font-bold leading-tight text-[#2D5A3D]">
          ESG in Action
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {actionItems.map((item) => (
            <ActionCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}