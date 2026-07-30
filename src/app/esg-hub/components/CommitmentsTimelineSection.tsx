const timelineData = [
  {
    year: "2025",
    lines: [
      "ESG Hub launch,",
      "supplier code of",
      "ethics across all",
      "subsidiaries",
    ],
  },
  {
    year: "2026",
    lines: [
      "External ESG",
      "verification across",
      "Foods, Healthcare,",
      "Tech",
    ],
  },
  {
    year: "2027",
    lines: [
      "50% recyclable",
      "packaging (Foods),",
      "30% sustainable",
      "chemistry",
      "(Healthcare)",
    ],
  },
  {
    year: "2028",
    lines: ["100% recyclable", "packaging (Foods)"],
  },
  {
    year: "2030",
    lines: [
      "Renewable energy",
      "(Foods + Comms),",
      "100,000 farmers",
      "empowered",
    ],
  },
  {
    year: "2035",
    lines: ["Net Zero Tech", "operations"],
  },
  {
    year: "2040",
    lines: ["Group-wide Carbon", "Neutrality"],
  },
];

function TimelineItem({ item }: { item: (typeof timelineData)[number] }) {
  return (
    <div className="flex w-[180px] flex-col items-center sm:w-[200px]">
      {/* Year Circle */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2D5A3D] sm:h-16 sm:w-16">
        <span className="font-[Inter] text-xs font-bold text-white sm:text-sm">
          {item.year}
        </span>
      </div>

      {/* Description Card */}
      <div className="mt-3 flex w-full min-h-[130px] items-start justify-center rounded-xl bg-white p-3 pt-4 text-center shadow-sm sm:mt-5 sm:min-h-[160px] sm:p-4 sm:pt-5">
        <p className="text-xs font-[Inter] font-medium leading-5 text-[#333333] sm:text-sm sm:leading-6">
          {item.lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < item.lines.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function CommitmentsTimelineSection() {
  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 md:px-16">
        <h2 className="mb-8 text-center font-[Georgia] text-lg font-bold leading-tight text-[#2D5A3D] sm:mb-12 sm:text-xl md:text-2xl sm:pb-2">
          Group-Wide Commitments Timeline
        </h2>

        {/* Single row - all items in one flex container */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {timelineData.map((item) => (
            <TimelineItem key={item.year} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}