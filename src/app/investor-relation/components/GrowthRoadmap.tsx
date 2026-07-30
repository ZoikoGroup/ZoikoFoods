const roadmap = [
  {
    year: "2025",
    side: "left",
    title: "Exclusive Distributorships Launched",
    description:
      "Taj Mahal Rice + others. Expansion of Noxx Patties, Noxx Chicken & Ginger Noxx into 3 continents. Full rollout of Zoiko Kitchen in UK and USA.",
  },
  {
    year: "2026",
    side: "right",
    title: "Beverage & Café Portfolio Rollout",
    description: "Full rollout of Noxx Beverages, Café Noxx",
  },
  {
    year: "2027",
    side: "left",
    title: "Sustainability Milestone",
    description: "100% recyclable packaging achieved",
  },
  {
    year: "2030",
    side: "right",
    title: "Complete Transformation",
    description: "100% renewable energy + 100,000 farmers empowered",
  },
];

export default function GrowthRoadmap() {
  return (
    <section className="bg-[#E8ECEB] px-4 py-14 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2
          className="mb-10 text-center text-[24px] font-bold leading-[52px] text-[#2D5A3D] md:mb-16"
          style={{ fontFamily: "Georgia" }}
        >
          Growth Roadmap
        </h2>

        {/*
          Each row is followed by its own short divider segment (except the
          last row), rendered inline in normal flow so it only ever appears
          in the gap between two cards.
        */}
        <div className="mx-auto max-w-[900px]">
          <div className="flex flex-col">
            {roadmap.map((item, index) => {
              const badge = (
                <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-lg bg-[#2D5A3D] md:h-16 md:w-24">
                  <span
                    className="text-[16px] font-bold text-white"
                    style={{ fontFamily: "Inter" }}
                  >
                    {item.year}
                  </span>
                </div>
              );

              const card = (
                <div className="flex-1 rounded-lg bg-white p-5 shadow-[0px_4px_6px_rgba(0,0,0,0.10)] md:min-w-[700px] md:p-8">
                  <h3
                    className="mb-3 text-[18px] font-bold leading-7 text-[#2D5A3D] md:mb-4 md:text-[20px] md:leading-8"
                    style={{ fontFamily: "Georgia" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[15px] leading-6 text-[#333333] md:text-[16px]"
                    style={{ fontFamily: "Inter" }}
                  >
                    {item.description}
                  </p>
                </div>
              );

              const isLast = index === roadmap.length - 1;

              return (
                <div key={item.year}>
                  {/* Mobile: single alternating row. Desktop: two-column grid. */}
                  {item.side === "left" ? (
                    <>
                      <div className="flex items-center gap-4 md:hidden">
                        {badge}
                        {card}
                      </div>
                      <div className="hidden md:grid md:grid-cols-2 md:gap-8">
                        <div className="flex items-center justify-end gap-8">
                          {badge}
                          {card}
                        </div>
                        <div />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-4 md:hidden">
                        {card}
                        {badge}
                      </div>
                      <div className="hidden md:grid md:grid-cols-2 md:gap-8">
                        <div />
                        <div className="flex items-center justify-start gap-8">
                          {card}
                          {badge}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Divider segment — only between rows, never after the last one */}
                  {!isLast && (
                    <div className="relative h-10 md:h-12">
                      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#2D5A3D]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
