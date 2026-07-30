export default function InvestorHero() {
  return (
    <section className="relative min-h-[520px] md:min-h-0 md:h-[399px] w-full overflow-hidden bg-[linear-gradient(67deg,#2D5A3D_0%,#D4A574_100%)]">
      {/* Background Shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="relative h-full w-full overflow-hidden">
          <div className="absolute left-[699px] top-[236px] h-60 w-60 bg-white/5"></div>
          <div className="absolute left-[967px] top-[41px] h-32 w-32 bg-white/10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center md:inset-auto md:left-1/2 md:top-[96px] md:w-[1200px] md:-translate-x-1/2 md:px-0 md:justify-start">
        <h1
          className="text-white text-[30px] leading-[44px] md:text-[36px] font-bold md:leading-[73px]"
          style={{ fontFamily: "Georgia" }}
        >
          Investor Relations - Shaping the Future of Global Foods
        </h1>

        <p
          className="mt-4 md:mt-2 text-white/90 text-[18px] leading-7 md:text-[20px] font-normal md:leading-8"
          style={{ fontFamily: "Georgia" }}
        >
          Zoiko Foods Corp. is building a next-generation, culturally authentic
          food{" "}
          <br className="hidden md:block" />
          conglomerate with Fortune-10 ambition and global scale.
        </p>

        <button
          className="mt-8 md:mt-10 h-14 w-full max-w-72 rounded-lg bg-white text-[#2D5A3D] text-[16px] md:text-[18px] font-bold transition hover:bg-gray-100"
          style={{ fontFamily: "Arial" }}
        >
          Request Investor Briefing
        </button>
      </div>
    </section>
  );
}
