export default function CTASection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 md:mb-16 text-center font-[Georgia] text-2xl md:text-3xl font-bold leading-tight md:leading-[52px] text-[#2D5A3D]">
          Every Choice Counts
        </h2>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Consumers */}
          <div className="rounded-lg bg-[#F8F9FA] p-8 md:p-12 text-center">
            <h3 className="font-[Georgia] text-xl font-bold leading-10 text-[#2D5A3D]">
              For Consumers
            </h3>

            <p className="mx-auto mt-4 md:mt-8 max-w-md font-[Inter] text-sm md:text-base font-normal leading-6 text-[#666666]">
              Learn about our packaging roadmap and sustainable practices
            </p>

            <button className="mt-8 md:mt-10 w-full sm:w-auto rounded-lg border-2 border-[#2D5A3D] px-6 md:px-8 py-3 md:py-4 font-[Arial] text-base md:text-lg font-bold text-[#2D5A3D] transition hover:bg-[#2D5A3D] hover:text-white">
              Learn About Packaging Roadmap
            </button>
          </div>

          {/* Partners / Investors */}
          <div className="rounded-lg bg-[#F8F9FA] p-8 md:p-12 text-center">
            <h3 className="font-[Georgia] text-xl font-bold leading-10 text-[#2D5A3D]">
              For Partners/Investors
            </h3>

            <p className="mx-auto mt-4 md:mt-8 max-w-md font-[Inter] text-sm md:text-base font-normal leading-6 text-[#666666]">
              Detailed ESG briefing and investment opportunities
            </p>

            <button className="mt-8 md:mt-10 w-full sm:w-auto rounded-lg border-2 border-[#2D5A3D] px-6 md:px-8 py-3 md:py-4 font-[Arial] text-base md:text-lg font-bold text-[#2D5A3D] transition hover:bg-[#2D5A3D] hover:text-white">
              Request ESG Briefing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}