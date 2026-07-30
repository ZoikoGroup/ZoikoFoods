export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#2D5A3D] to-[#c79a63] md:bg-gradient-to-br md:via-[#2D5A3D]">
      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[400px] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center md:min-h-[455px] md:px-6">
        <h1 className="font-[Georgia] text-3xl font-bold leading-[38px] text-white md:text-4xl md:leading-[63px]">
          {/* Mobile Text */}
          <span className="block md:hidden">
            Partnership
            <br />
            Opportunities -Driving
            <br />
            Growth Through Global
            <br />
            Collaboration
          </span>
          {/* Desktop Text */}
          <span className="hidden md:block">
            Partnership Opportunities -
            <br />
            Driving Growth Through Global Collaboration
          </span>
        </h1>

        <p className="mt-6 max-w-3xl font-[Inter] text-[17px] font-normal leading-[28px] text-white/90 md:mt-8 md:font-[Georgia] md:text-lg md:leading-8">
          {/* Mobile Text */}
          <span className="block md:hidden">
            We partner with distributors, retailers,
            <br />
            innovators, and communities to bring
            <br />
            authentic, world-class foods and
            <br />
            beverages to every market we serve.
          </span>
          {/* Desktop Text */}
          <span className="hidden md:block">
            We partner with distributors, retailers, innovators, and communities to bring
            <br />
            authentic, world-class foods and beverages to every market we serve.
          </span>
        </p>

        <button className="mt-8 rounded-md bg-[#D4A574] px-6 py-3 font-[Arial] text-[14px] font-bold text-[#2D5A3D] md:mt-10 md:px-8 md:text-sm">
          Start a Partnership Inquiry
        </button>
      </div>
    </section>
  );
}