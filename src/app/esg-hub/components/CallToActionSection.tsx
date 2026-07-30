export default function CallToActionSection() {
  return (
    <section className="bg-[#F8F9FA] py-14 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-5 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
        {/* Suppliers & Farmers */}
        <div className="bg-white rounded-lg shadow-md min-h-[16rem] sm:h-72 flex flex-col items-center justify-center text-center px-5 sm:px-10 py-8 sm:py-0">
          <h3 className="text-[#2D5A3D] text-lg sm:text-xl font-bold font-[Georgia] leading-8 sm:leading-10 mb-4 sm:mb-6">
            For Suppliers &amp; Farmers
          </h3>

          <p className="text-[#666666] text-sm font-normal font-[Inter] leading-6 mb-6 sm:mb-10">
            Join our global network of sustainable partners
          </p>

          <button className="w-full max-w-[18rem] sm:w-72 h-12 sm:h-14 rounded-lg border-2 border-[#2D5A3D] text-[#2D5A3D] text-base sm:text-lg font-bold font-[Arial] hover:bg-[#2D5A3D] hover:text-white transition">
            Join Zoiko Farmer Promise
          </button>
        </div>

        {/* Investors & Partners */}
        <div className="bg-white rounded-lg shadow-md min-h-[16rem] sm:h-72 flex flex-col items-center justify-center text-center px-5 sm:px-10 py-8 sm:py-0">
          <h3 className="text-[#2D5A3D] text-lg sm:text-xl font-bold font-[Georgia] leading-8 sm:leading-10 mb-4 sm:mb-6">
            For Investors &amp; Partners
          </h3>

          <p className="text-[#666666] text-sm sm:text-base font-normal font-[Inter] leading-6 mb-6 sm:mb-10">
            Explore investment opportunities across our ESG portfolio
          </p>

          <button className="w-full max-w-[18rem] sm:w-80 h-12 sm:h-14 rounded-lg border-2 border-[#2D5A3D] text-[#2D5A3D] text-base sm:text-lg font-bold font-[Arial] hover:bg-[#2D5A3D] hover:text-white transition">
            Request ESG Investor Briefing
          </button>
        </div>
      </div>
    </section>
  );
}