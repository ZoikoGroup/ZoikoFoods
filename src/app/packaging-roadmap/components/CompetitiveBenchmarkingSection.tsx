export default function CompetitiveBenchmarkingSection() {
    const rows = [
        {
            company: "Zoiko Foods",
            target: "2028",
            impact: "+2-3% by 2028",
            access: (
                <>
                    EU/US/APAC early
                    <br />
                    access
                </>
            ),
            premium: "+5-10%",
            highlight: true,
        },
        {
            company: "Unilever",
            target: "2029",
            impact: "+2% post-2029",
            access: "1-year delay",
            premium: "+3-7%",
        },
        {
            company: "Nestlé",
            target: "2030",
            impact: "+2-3% post-2030",
            access: "2-year delay",
            premium: "+4-6%",
        },
        {
            company: "PepsiCo",
            target: "2030",
            impact: "TBD",
            access: "2-year delay",
            premium: "+3-5%",
        },
    ];

    return (
        <section className="w-full bg-white py-12 md:py-20">

            <div className="max-w-[1200px] mx-auto px-5 md:px-0">

                <h2 className="
          text-center
          text-[#2D5A3D]
          text-2xl
          font-bold
          font-['Georgia']
          leading-8
          mb-6
          md:leading-[52px]
          md:mb-10
        ">
                    Competitive Benchmarking
                </h2>

                {/* Mobile: stacked cards (grid table below is desktop-only) */}
                <div className="md:hidden max-w-[1000px] mx-auto space-y-4">
                    {rows.map((row, index) => (
                        <div
                            key={index}
                            className={`rounded-lg p-5 ${row.highlight
                                ? "bg-gradient-to-r from-green-800/10 to-orange-300/10 border border-[#2D5A3D]/20"
                                : "bg-[#F8F9FA]"
                                }`}
                        >
                            <div className="text-[#2D5A3D] text-lg font-bold font-['Inter'] mb-4">
                                {row.company}
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-[11px] uppercase tracking-wide text-[#666666] font-['Inter'] mb-1">
                                        100% Recyclable Target
                                    </div>
                                    <div className="text-sm text-[#333333] font-['Inter'] font-semibold">
                                        {row.target}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[11px] uppercase tracking-wide text-[#666666] font-['Inter'] mb-1">
                                        EBITDA Margin Impact
                                    </div>
                                    <div className="text-sm text-[#333333] font-['Inter'] font-semibold">
                                        {row.impact}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[11px] uppercase tracking-wide text-[#666666] font-['Inter'] mb-1">
                                        Market Access Edge
                                    </div>
                                    <div className="text-sm text-[#333333] font-['Inter'] font-semibold">
                                        {row.access}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[11px] uppercase tracking-wide text-[#666666] font-['Inter'] mb-1">
                                        Consumer Premium
                                    </div>
                                    <div className="text-sm text-[#333333] font-['Inter'] font-semibold">
                                        {row.premium}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="
          hidden
          md:block
          max-w-[1000px]
          mx-auto
          bg-white
          rounded-lg
          shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)]
          overflow-hidden
        ">

                    {/* Header */}

                    <div className="
            grid
            grid-cols-5
            bg-[#2D5A3D]
            text-white
            min-h-[80px]
            items-center
          ">

                        <div className="px-4 text-base font-bold font-['Inter']">
                            Company
                        </div>

                        <div className="px-4 text-base font-bold font-['Inter']">
                            100% Recyclable
                            <br />
                            Target
                        </div>

                        <div className="px-4 text-base font-bold font-['Inter']">
                            EBITDA Margin Impact
                        </div>

                        <div className="px-4 text-base font-bold font-['Inter']">
                            Market Access Edge
                        </div>

                        <div className="px-4 text-base font-bold font-['Inter']">
                            Consumer Premium
                        </div>

                    </div>


                    {/* Rows */}

                    {rows.map((row, index) => (

                        <div
                            key={index}
                            className={`
                grid
                grid-cols-5
                min-h-[70px]
                items-center
                border-b
                border-gray-100
                ${row.highlight
                                    ? "bg-gradient-to-r from-green-800/10 to-orange-300/10"
                                    : ""
                                }
              `}
                        >

                            <div className={`
                px-4
                text-[#333333]
                font-['Inter']
                ${row.highlight
                                    ? "text-base font-bold"
                                    : "text-base font-normal"
                                }
              `}>
                                {row.company}
                            </div>


                            <div className={`
                px-4
                text-[#333333]
                text-sm
                font-['Inter']
                ${row.highlight
                                    ? "font-bold"
                                    : "font-normal"
                                }
              `}>
                                {row.target}
                            </div>


                            <div className={`
                px-4
                text-[#333333]
                text-sm
                font-['Inter']
                ${row.highlight
                                    ? "font-bold"
                                    : "font-normal"
                                }
              `}>
                                {row.impact}
                            </div>


                            <div className={`
                px-4
                text-[#333333]
                text-sm
                font-['Inter']
                ${row.highlight
                                    ? "font-bold"
                                    : "font-normal"
                                }
              `}>
                                {row.access}
                            </div>


                            <div className={`
                px-4
                text-[#333333]
                text-sm
                font-['Inter']
                ${row.highlight
                                    ? "font-bold"
                                    : "font-normal"
                                }
              `}>
                                {row.premium}
                            </div>


                        </div>

                    ))}

                </div>


                <p className="
          max-w-[780px]
          mx-auto
          mt-6
          md:mt-10
          text-center
          text-[#666666]
          text-sm
          md:text-base
          font-normal
          font-['Inter']
          leading-6
          md:leading-7
        ">
                    <i>Zoiko&apos;s earlier timeline delivers margin expansion and regulatory
                        compliance sooner — accelerating{" "}
                        <br className="hidden md:block" />
                        both growth and access.</i>
                </p>


            </div>

        </section>
    );
}