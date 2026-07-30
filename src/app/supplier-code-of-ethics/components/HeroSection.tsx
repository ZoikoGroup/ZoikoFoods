export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2D5A3D] to-[#D4A574]">
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[577px] top-[22px] h-44 w-44 rounded-full bg-white/5"></div>
        <div className="absolute left-[977px] top-[200px] h-64 w-64 rounded-full bg-white/10"></div>
        <div className="absolute left-[378px] top-[378px] h-32 w-32 rounded-full bg-white/5"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[384px] max-w-7xl flex-col items-center justify-center px-6 py-16 md:py-20 text-center">
        <h1
          className="w-full font-[Georgia] font-bold leading-tight text-white md:leading-snug"
          style={{
            fontSize: "clamp(2rem, 8vw, 3.5rem)",
          }}
        >
          Supplier Code of Ethics - One Standard, Applied Globally
        </h1>

        <p
          className="mt-4 max-w-4xl font-[Georgia] text-base font-normal leading-6 text-white/90 md:mt-6 md:text-xl md:leading-[32px]"
        >
          Every supplier, farmer, and distributor we work with must uphold the
          <br className="hidden md:block" />
          highest ethical standards — tailored to the laws and regulations of
          each region.
        </p>

        <button
          className="mt-6 rounded-lg bg-[#D4A574] px-6 py-3 font-[Arial] text-sm font-bold text-[#2D5A3D] transition-all duration-300 hover:opacity-90 md:mt-10 md:px-8 md:text-lg"
        >
          Download Supplier Code of Ethics (PDF)
        </button>
      </div>
    </section>
  );
}