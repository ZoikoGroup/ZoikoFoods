export default function NetZeroRoadmapCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#2D5A3D] to-[#D4A574] py-12 sm:py-16 lg:py-20">
      {/* Background Shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[30%] sm:left-[40%] top-8 h-24 w-24 sm:h-36 sm:w-36 lg:h-44 lg:w-44 rounded-full bg-white/5"></div>
        <div className="absolute right-8 sm:right-32 top-32 sm:top-40 h-32 w-32 sm:h-48 sm:w-48 lg:h-64 lg:w-64 rounded-full bg-white/10"></div>
        <div className="absolute bottom-12 left-16 sm:left-64 h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32 rounded-full bg-white/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <h2 className="font-[Georgia] text-2xl sm:text-3xl lg:text-4xl font-bold leading-8 sm:leading-[46px] lg:leading-[58px] text-white">
          The Net Zero 2040 Roadmap
          <br />
          10 Years Ahead, Region by Region
        </h2>

        <p className="mt-6 sm:mt-8 max-w-3xl font-[Georgia] text-base sm:text-lg lg:text-xl font-normal leading-6 sm:leading-7 lg:leading-8 text-white/90">
          Our Net Zero 2040 roadmap outlines measurable milestones to reduce
          emissions, improve energy efficiency, accelerate renewable energy
          adoption, and create sustainable value across every region where we
          operate.
        </p>

        <button className="mt-8 sm:mt-10 rounded-lg bg-[#D4A574] px-6 sm:px-10 py-3 sm:py-4 font-[Arial] text-sm sm:text-base lg:text-lg font-bold text-[#2D5A3D] transition hover:opacity-90">
          Download Net Zero 2040 Roadmap (PDF)
        </button>
      </div>
    </section>
  );
}