export default function ROISection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 md:mb-14 text-center font-[Georgia] text-[22px] sm:text-2xl md:text-3xl font-bold leading-tight text-[#2D5A3D] whitespace-nowrap">
          The ROI of Commitments
        </h2>

        {/* Top Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Operational Savings */}
          <div className="-mx-6 bg-[#F8F9FA] px-6 py-6 md:mx-0 md:rounded-xl md:p-10">
            <h3 className="mb-6 md:mb-8 text-center font-[Georgia] text-xl font-bold text-[#2D5A3D]">
              Operational Savings
            </h3>

            <div className="mb-6 md:mb-8 flex h-[120px] flex-row items-center gap-4 md:gap-6 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <h4 className="w-[90px] md:w-[110px] flex-shrink-0 font-[Inter] text-[26px] md:text-[28px] font-bold text-[#D4A574]">
                $25M+
              </h4>

              <p className="font-[Inter] text-sm leading-6 text-[#333333]">
                Packaging innovation annually
              </p>
            </div>

            <div className="flex h-[120px] flex-row items-center gap-4 md:gap-6 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <h4 className="w-[90px] md:w-[110px] flex-shrink-0 font-[Inter] text-[26px] md:text-[28px] font-bold text-[#D4A574]">
                $50M+
              </h4>

              <p className="font-[Inter] text-sm leading-6 text-[#333333]">
                Renewable energy by 2030
              </p>
            </div>
          </div>

          {/* Revenue Growth */}
          <div className="-mx-6 bg-[#F8F9FA] px-6 py-6 md:mx-0 md:rounded-xl md:p-10">
            <h3 className="mb-6 md:mb-8 text-center font-[Georgia] text-xl font-bold text-[#2D5A3D]">
              Revenue Growth
            </h3>

            <div className="mb-6 md:mb-8 flex h-[120px] flex-row items-center gap-4 md:gap-6 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <h4 className="w-[90px] md:w-[110px] flex-shrink-0 font-[Inter] text-[26px] md:text-[28px] font-bold leading-tight text-[#D4A574]">
                5-10%
              </h4>

              <p className="font-[Inter] text-sm leading-6 pr-2 md:pr-10 text-[#333333]">
                Premium pricing power from sustainable brand positioning
              </p>
            </div>

            <div className="flex h-[120px] flex-row items-center gap-4 md:gap-6 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <h4 className="w-[90px] md:w-[110px] flex-shrink-0 font-[Inter] text-[26px] md:text-[28px] font-bold text-[#D4A574]">
                15%
              </h4>

              <p className="font-[Inter] text-sm pr-2 md:pr-10 leading-6 text-[#333333]">
                Reduced raw material volatility through farmer empowerment
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="mt-10 md:mt-12 rounded-lg bg-[#2D5A3D] px-6 py-8 md:py-10 text-center">
          <h3 className="font-[Inter] text-4xl md:text-5xl font-bold leading-tight md:leading-[76.8px] text-white">
            30%
          </h3>

          <p className="mt-2 font-[Inter] text-sm md:text-base leading-6 text-white">
            ESG-aligned companies enter new regions faster (fewer regulatory
            delays)
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <button className="w-full sm:w-auto rounded-lg border-2 border-[#2D5A3D] px-6 md:px-10 py-3 md:py-4 font-[Arial] text-base md:text-lg font-bold text-[#2D5A3D] transition hover:bg-[#2D5A3D] hover:text-white">
            View ESG ROI Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}