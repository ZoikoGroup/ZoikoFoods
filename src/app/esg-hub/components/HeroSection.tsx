export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-10 bg-[linear-gradient(100deg,#2D5A3D_0%,#1A4D2A_33%,#D4A574_67%,#8B4513_100%)]">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 py-8 sm:py-10 text-center lg:py-12">
        {/* Heading */}
        <h1 className="font-[Georgia] text-2xl sm:text-3xl md:text-4xl font-bold pb-2 sm:pb-3 text-white lg:text-4xl lg:leading-[55px]">
          Zoiko ESG Hub - One Group,
          <br />
          One Planet, One Future
        </h1>

        {/* Description */}
        <p className="mt-3 sm:mt-4 max-w-2xl font-[Georgia] text-sm sm:text-base leading-7 sm:leading-9 pb-3 sm:pb-4 text-white/90 md:text-lg">
          From foods to fintech, from healthcare to communications, Zoiko
          integrates sustainability, ethics, and innovation across every
          business line.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col items-center gap-4 sm:gap-8 sm:flex-row">
          <button className="w-full sm:w-auto rounded-lg bg-[#D4A574] px-6 sm:px-12 py-3 sm:py-4 font-[Arial] text-sm sm:text-base font-bold text-white transition duration-300 hover:bg-[#c2925c]">
            Explore Group ESG Strategy
          </button>

          <button className="w-full sm:w-auto rounded-lg border-2 border-white px-6 sm:px-12 py-3 sm:py-4 font-[Arial] text-sm sm:text-base font-bold text-white transition duration-300 hover:bg-white hover:text-[#1E5A43]">
            View ESG ROI Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}