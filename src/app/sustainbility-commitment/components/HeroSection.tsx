export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#228B22] via-[#2D5A3D] to-[#D4A574]">
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[455px] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        
        {/* Mobile Heading */}
        <h1 className="md:hidden font-[Georgia] text-3xl font-bold leading-[48px] text-white">
          Our Sustainability<br />
          Commitments -<br />
          Feeding the Future,<br />
          Protecting the Planet
        </h1>

        {/* Desktop Heading */}
        <h1 className="hidden md:block font-[Georgia] md:text-4xl md:leading-[63px] lg:text-5xl font-bold text-white">
          Our Sustainability<br />
          Commitments - Feeding the<br />
          Future, Protecting the Planet
        </h1>

        {/* Mobile Paragraph */}
        <p className="md:hidden mt-8 max-w-2xl font-[Georgia] text-base leading-8 text-white/90">
          Zoiko Foods is a startup, but we operate<br />
          with commitments that outperform<br />
          industry leaders — measured, time-bound,<br />
          and ROI-driven.
        </p>

        {/* Desktop Paragraph */}
        <p className="hidden md:block mt-8 max-w-3xl font-[Georgia] md:text-lg lg:text-xl leading-8 text-white/90">
          Zoiko Foods is a startup, but we operate with commitments that outperform<br />
          industry leaders — measured, time-bound, and ROI-driven.
        </p>

        <button className="mt-10 rounded-lg bg-[#D4A574] px-8 py-3 md:py-4 font-[Arial] text-base md:text-lg font-bold text-[#2D5A3D] transition duration-300 hover:scale-105 hover:bg-[#c9975d]">
          Explore Zoiko ESG Hub
        </button>
      </div>
    </section>
  );
}