const scorecards = [
  {
    title: "Foods vs Industry Leaders",
    zoiko: "Zoiko: AA+ → AAA target",
    competitors: ["Nestlé: A-", "Unilever: AA", "PepsiCo: A"],
  },
  {
    title: "Healthcare vs Pharma Giants",
    zoiko: "Zoiko: A+ target",
    competitors: ["Pfizer: A", "GSK: A-"],
  },
  {
    title: "Financial vs Fintech Leaders",
    zoiko: "Zoiko: AA target",
    competitors: ["PayPal: A", "Wise: A-"],
  },
];

export default function ESGScorecardsSection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-6">
        <h2 className="mb-8 sm:mb-14 text-center font-[Georgia] text-xl sm:text-2xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          ESG Scorecards - Benchmarks vs Industry
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {scorecards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg bg-[#F8F9FA] p-5 sm:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-6 sm:mb-10 text-center font-[Georgia] text-lg sm:text-xl font-bold px-4 sm:px-14 leading-8 sm:leading-10 text-[#2D5A3D]">
                {card.title}
              </h3>

              <div className="mb-3 sm:mb-4 rounded-lg bg-[#2D5A3D] px-3 sm:px-4 py-2 sm:py-3">
                <p className="font-[Inter] text-sm sm:text-base font-bold text-white">
                  {card.zoiko}
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {card.competitors.map((company) => (
                  <div
                    key={company}
                    className="rounded-lg bg-white px-3 sm:px-4 py-2 sm:py-3"
                  >
                    <p className="font-[Inter] text-sm sm:text-base font-medium text-[#333333]">
                      {company}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 sm:mt-12 text-center font-[Inter] text-sm sm:text-base leading-6 sm:leading-7 text-[#666666]">
          <i>Zoiko outperforming in packaging, farmer empowerment, and fintech
          inclusion.</i>
        </p>
      </div>
    </section>
  );
}