const divisions = [
  {
    title: "Zoiko Foods",
    lines: [
      "Packaging, farmers, supply chain ethics. Leading with 100%",
      "recyclable packaging by 2028 and farmer empowerment",
      "programs across 90+ countries.",
    ],
  },
  {
    title: "Zoiko Financial Services",
    lines: [
      "Green finance, paperless transactions, inclusive fintech.",
      "Democratizing financial services while reducing environmental",
      "impact.",
    ],
  },
  {
    title: "Zoiko Healthcare",
    lines: [
      "Sustainable chemistry, fair pricing, access to care. Pioneering",
      "green chemistry adoption and ensuring affordable",
      "healthcare access globally.",
    ],
  },
  {
    title: "Zoiko Tech",
    lines: [
      "AI for ESG reporting, SME carbon reduction. Leveraging",
      "technology to drive sustainability across our ecosystem.",
    ],
  },
  {
    title: "Zoiko Communications",
    lines: [
      "Renewable-powered telecom, e-waste management.",
      "Building the world's most sustainable communications",
      "infrastructure.",
    ],
  },
  {
    title: "Zoiko Agro",
    lines: [
      "Regenerative agriculture, biodiversity protection.",
      "Transforming farming practices for environmental restoration.",
    ],
  },
  {
    title: "Zoiko Media",
    lines: [
      "Responsible media, cultural storytelling for sustainability. Using",
      "media to drive positive environmental and social change.",
    ],
  },
];

function DivisionCard({ division }: { division: (typeof divisions)[number] }) {
  return (
    <div className="flex w-full sm:w-[542px] min-h-[150px] sm:min-h-[179px] flex-col overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="bg-[#2D5A3D] px-4 sm:px-5 py-2 sm:py-3">
        <h3 className="text-center font-[Inter] text-sm sm:text-base font-bold text-white">
          {division.title}
        </h3>
      </div>

      <div className="flex flex-1 items-start border-t border-[#F8F9FA] px-4 sm:px-5 py-3 sm:py-4">
        <p className="text-xs sm:text-sm font-[Inter] leading-5 sm:leading-6 text-[#333333]">
          {division.lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < division.lines.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function DivisionDeepDiveSection() {
  const gridDivisions = divisions.slice(0, 6);
  const lastDivision = divisions[6];

  return (
    <section className="bg-[#F8F9FA] py-14 sm:py-17">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-6">
        <h2 className="mb-6 sm:mb-10 text-center font-[Georgia] text-lg sm:text-xl md:text-2xl pb-2 sm:pb-3 font-bold leading-tight text-[#2D5A3D]">
          Division Deep-Dive
        </h2>

        {/* Cards in responsive grid */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-x-10 sm:gap-y-10">
          {gridDivisions.map((division) => (
            <DivisionCard key={division.title} division={division} />
          ))}
        </div>

        {/* Last card - centered */}
        <div className="mt-4 sm:mt-10 flex justify-center">
          <DivisionCard division={lastDivision} />
        </div>
      </div>
    </section>
  );
}