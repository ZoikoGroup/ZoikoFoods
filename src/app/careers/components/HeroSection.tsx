export default function HeroSection() {
  return (
    <section className="relative flex min-h-[480px] w-full flex-col items-center justify-center bg-gradient-to-br from-[#2D5A3D] to-[#D4A574] px-5 py-12 text-center md:min-h-[350px] md:bg-gradient-to-r md:from-[#267A2B] md:to-[#CDA272] md:py-0">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl font-bold leading-[1.4] text-white md:font-sans md:text-5xl md:leading-[57.6px]">
          Shape the Future of <br className="md:hidden" /> Food With Us
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[600px] text-sm leading-7 text-white/90 md:mt-6 md:text-lg md:leading-8">
          Zoiko Foods is a global food company <br className="md:hidden" />
          with bold ambitions — join our <br className="md:hidden" />
          journey from startup scale-up to global <br className="md:hidden" />
          powerhouse.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 md:mt-10 md:flex-row md:gap-4">
          <button className="w-full max-w-[288px] rounded-none bg-white px-6 py-3 text-sm font-semibold text-[#315C3E] transition hover:bg-gray-100 md:rounded-md md:text-base md:text-[#267A2B]">
            Noxx Chicken Careers
          </button>

          <button className="w-full max-w-[288px] rounded-none bg-[#D4A574] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C29668] md:rounded-md md:bg-[#FF8C00] md:text-base md:text-[#267A2B] md:hover:bg-[#f59e0b]">
            Zoiko Foods Corporate Careers
          </button>
        </div>
      </div>
    </section>
  );
}