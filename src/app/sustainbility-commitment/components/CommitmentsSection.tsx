export default function CommitmentsSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-12 md:px-32">
        <h2 className="mb-10 text-center font-[Georgia] text-2xl md:text-3xl font-bold leading-tight text-[#2D5A3D] md:mb-14">
          Key Commitments
        </h2>

        <div className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-2 justify-items-center">
          {/* Nutrition & Responsibility */}
          <div className="flex flex-col w-full max-w-[365px] md:w-[365px] h-auto md:h-[513px] rounded-xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="font-[Georgia] text-xl font-bold text-[#2D5A3D]">
              Nutrition & Responsibility
            </h3>

            <div className="mt-6 rounded-lg bg-[#F8F9FA] p-5">
              <p className="font-[Inter] text-base font-bold leading-7 text-[#333333]">
                Develop healthier, heritage-inspired products
              </p>
            </div>

            <p className="mt-6 font-[Inter] text-sm leading-6">
              <span className="font-bold text-[#2D5A3D]">Zoiko</span>
              <span className="font-normal text-[#666666]">
                {" "}
                vs industry average: 70% consumer demand for healthy, sustainable foods
              </span>
            </p>

            <div className="mt-6 rounded-lg bg-[#D4A574]/90 px-5 py-4">
              <p className="font-[Inter] text-sm font-bold text-[#2D5A3D]">
                +5-10% premium pricing elasticity
              </p>
            </div>
          </div>

          {/* Packaging */}
          <div className="flex flex-col w-full max-w-[365px] md:w-[365px] h-auto md:h-[513px] rounded-xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="font-[Georgia] text-xl font-bold text-[#2D5A3D]">
              Packaging
            </h3>

            <div className="mt-6 rounded-lg bg-[#F8F9FA] p-5">
              <p className="font-[Inter] text-base font-bold leading-7 text-[#333333]">
                100% recyclable/compostable by 2028
              </p>
            </div>

            <p className="mt-6 font-[Inter] text-sm leading-6">
              <span className="font-bold text-[#2D5A3D]">Zoiko (2028)</span>
              <span className="font-normal text-[#666666]">
                {" "}
                vs Nestlé (2030) vs Unilever (2029)
              </span>
            </p>

            <div className="mt-6 rounded-lg bg-[#D4A574]/90 px-5 py-4">
              <p className="font-[Inter] text-sm font-bold text-[#2D5A3D]">
                ROI: $25M annual savings projected by 2028
              </p>
            </div>
          </div>

          {/* Farmers & Communities */}
          <div className="flex flex-col w-full max-w-[365px] md:w-[365px] h-auto md:h-[513px] rounded-xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="font-[Georgia] text-xl font-bold text-[#2D5A3D]">
              Farmers & Communities
            </h3>

            <div className="mt-6 rounded-lg bg-[#F8F9FA] p-5">
              <p className="font-[Inter] text-base font-bold leading-7 text-[#333333]">
                Empower 100,000 farmers by 2030
              </p>
            </div>

            <p className="mt-6 font-[Inter] text-sm leading-6">
              <span className="font-bold text-[#2D5A3D]">
                Zoiko (100k by 2030)
              </span>
              <span className="font-normal text-[#666666]">
                {" "}
                vs Unilever (300k by 2030)
              </span>
            </p>

            <div className="mt-6 rounded-r-lg rounded-l-sm border-l-4 border-[#2D5A3D] bg-[#F9F6F0] px-5 py-4">
              <p className="font-[Inter] text-sm font-bold text-[#2D5A3D]">
                Differentiator: Zoiko focuses on cultural authenticity + profit-sharing models
              </p>
            </div>
          </div>

          {/* Energy & Carbon */}
          <div className="flex flex-col w-full max-w-[365px] md:w-[365px] h-auto md:h-[513px] rounded-xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="font-[Georgia] text-xl font-bold text-[#2D5A3D]">
              Energy & Carbon
            </h3>

            <div className="mt-6 rounded-lg bg-[#F8F9FA] p-5">
              <p className="font-[Inter] text-base font-bold leading-7 text-[#333333]">
                100% renewable energy by 2030; Net Zero by 2040
              </p>
            </div>

            <p className="mt-6 font-[Inter] text-sm leading-6">
              <span className="font-bold text-[#2D5A3D]">
                Zoiko (2030/2040)
              </span>
              <span className="font-normal text-[#666666]">
                {" "}
                vs PepsiCo (2030/2040) vs Nestlé (2050)
              </span>
            </p>

            <div className="mt-6 rounded-lg bg-[#D4A574]/90 px-5 py-4">
              <p className="font-[Inter] text-sm font-bold text-[#2D5A3D]">
                ROI: 20% cost reduction in plant energy by 2030
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}