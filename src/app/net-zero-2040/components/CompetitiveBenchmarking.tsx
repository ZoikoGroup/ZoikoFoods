function CheckBadge() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-[17px] w-[17px] shrink-0"
      style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.25))" }}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="18" height="18" rx="4" fill="#00BF00" />
      <path
        d="M5.5 10.2L8.3 13L14.5 6.7"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossMark() {
  return (
    <span
      className="mr-0.5 font-[Inter] text-[15px] font-black leading-none"
      style={{ color: "#ED0000" }}
      aria-hidden="true"
    >
      ✕
    </span>
  );
}

export default function CompetitiveBenchmarking() {
  const companies = [
    {
      company: "Zoiko Foods",
      year: "2040",
      eu: { status: "check", label: "12 years early" },
      us: { status: "check", label: "Ahead of SEC" },
      apac: { status: "check", label: "Aligned" },
      scope3: { status: "check", label: "Full" },
      highlight: true,
    },
    {
      company: "Unilever",
      year: "2039",
      eu: { status: "check", label: "" },
      us: { status: "check", label: "" },
      apac: { status: "neutral", label: "Partial" },
      scope3: { status: "neutral", label: "Limited" },
    },
    {
      company: "Nestlé",
      year: "2050",
      eu: { status: "cross", label: "Delayed" },
      us: { status: "cross", label: "Behind SEC" },
      apac: { status: "cross", label: "Export risk" },
      scope3: { status: "neutral", label: "Limited" },
    },
    {
      company: "PepsiCo",
      year: "2040",
      eu: { status: "check", label: "" },
      us: { status: "check", label: "" },
      apac: { status: "neutral", label: "Partial" },
      scope3: { status: "neutral", label: "Limited" },
    },
  ];

  const StatusCell = ({ cell }: { cell: { status: string; label: string } }) => {
    if (cell.status === "check") {
      return (
        <span className="inline-flex items-center gap-2 font-[Inter] text-[14px] font-bold text-[#28A745]">
          <CheckBadge />
          {cell.label}
        </span>
      );
    }
    if (cell.status === "cross") {
      return (
        <span className="inline-flex items-center font-[Inter] text-[14px] font-bold text-[#EF4444]">
          <CrossMark />
          {cell.label}
        </span>
      );
    }
    return (
      <span className="font-[Inter] text-[14px] font-normal text-[#4B5563]">
        {cell.label}
      </span>
    );
  };

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20 xl:px-25 xl:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 sm:mb-8 text-center font-[Georgia] text-xl sm:text-2xl lg:text-[26px] font-bold leading-7 sm:leading-[1.3] text-[#2D5A3D]">
          Competitive Benchmarking
        </h2>

        <div className="overflow-x-auto max-w-full rounded-xl bg-white shadow-lg">
          <table className="min-w-[700px] w-full border-collapse">
            <thead className="bg-[#2D5A3D]">
              <tr>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-[Inter] text-sm sm:text-[15px] font-bold text-white whitespace-nowrap">
                  Company
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-[Inter] text-sm sm:text-[15px] font-bold text-white whitespace-nowrap">
                  Net Zero Year
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-[Inter] text-sm sm:text-[15px] font-bold text-white whitespace-nowrap">
                  EU Compliance
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-[Inter] text-sm sm:text-[15px] font-bold text-white whitespace-nowrap">
                  US Compliance
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-[Inter] text-sm sm:text-[15px] font-bold text-white whitespace-nowrap">
                  APAC Compliance
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-[Inter] text-sm sm:text-[15px] font-bold text-white whitespace-nowrap">
                  Scope 3 Inclusion
                </th>
              </tr>
            </thead>

            <tbody>
              {companies.map((item, idx) => (
                <tr
                  key={item.company}
                  className={
                    item.highlight
                      ? "bg-gradient-to-r from-[#E8F3EC] to-[#FBF3EA]"
                      : idx % 2 === 0
                      ? "bg-white"
                      : "bg-[#FAFAFA]"
                  }
                >
                  <td
                    className={`px-3 sm:px-6 py-4 sm:py-5 font-[Inter] text-sm sm:text-[14.5px] ${
                      item.highlight
                        ? "font-bold text-[#1F2937]"
                        : "font-normal text-[#374151]"
                    }`}
                  >
                    {item.company}
                  </td>

                  <td
                    className={`px-3 sm:px-6 py-4 sm:py-5 font-[Inter] text-sm sm:text-[14.5px] ${
                      item.highlight
                        ? "font-bold text-[#1F2937]"
                        : "font-normal text-[#374151]"
                    }`}
                  >
                    {item.year}
                  </td>

                  <td className="px-3 sm:px-6 py-4 sm:py-5">
                    <StatusCell cell={item.eu} />
                  </td>

                  <td className="px-3 sm:px-6 py-4 sm:py-5">
                    <StatusCell cell={item.us} />
                  </td>

                  <td className="px-3 sm:px-6 py-4 sm:py-5">
                    <StatusCell cell={item.apac} />
                  </td>

                  <td className="px-3 sm:px-6 py-4 sm:py-5">
                    <StatusCell cell={item.scope3} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}