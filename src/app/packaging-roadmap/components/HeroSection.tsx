export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[linear-gradient(105deg,#228B22_0%,#2D5A3D_35%,#D4A574_100%)] md:h-[424px] md:bg-[linear-gradient(145deg,#228B22_0%,#2D5A3D_50%,#D4A574_100%)]"
    >
      <div className="flex flex-col items-center justify-center px-6 py-14 text-center md:absolute md:inset-0 md:px-8 md:py-0">
        <h1 className="text-white font-['Georgia'] text-[26px] font-bold leading-[34px] md:text-[48px] md:leading-[61px]">
          The 2028 Packaging Roadmap
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          Setting the Pace for Global FMCG
        </h1>

        <p className="mt-6 max-w-[1169px] text-[15px] font-['Georgia'] font-normal leading-6 text-white/90 md:mt-8 md:text-[20px] md:leading-8">
          Zoiko Foods will achieve 100% recyclable and compostable packaging
          two years
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          ahead of Unilever and Nestlé — making us the first major global foods
          player to deliver on this promise.
        </p>

        <button className="mt-8 rounded-lg bg-[#D4A574] px-8 py-3.5 font-['Georgia'] text-[15px] font-bold text-white md:hidden">
          Explore the Roadmap
        </button>
      </div>
    </section>
  );
}