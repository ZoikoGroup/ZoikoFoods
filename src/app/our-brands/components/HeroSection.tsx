"use client";

export default function HeroSection() {
  return (
    <>
      <style>{`
        .hero-bg {
          background: linear-gradient(135deg, #2D5A3D 0%, #D4A574 100%);
        }
        @media (min-width: 1024px) {
          .hero-bg {
            background: linear-gradient(114deg, #228B22 0%, #2D5A3D 50%, #D4A574 100%);
          }
        }
      `}</style>
      <section className="relative w-full overflow-hidden hero-bg">
        <div className="mx-auto max-w-[1440px] min-h-[424px] lg:h-[424px] flex flex-col items-start lg:items-center justify-center px-6 py-12 lg:py-0">
          
          {/* Heading */}
          <h1
            className="w-full text-left lg:text-center text-white font-bold text-3xl lg:text-[43px] leading-tight lg:leading-[61px]"
            style={{ fontFamily: "Georgia" }}
          >
            A Global House of Food Brands Built for Everyday Life
          </h1>

          {/* Description */}
          <p
            className="mt-6 w-full text-left lg:text-center text-white/90 text-base lg:text-[20px] leading-relaxed lg:leading-[32px]"
            style={{ fontFamily: "Georgia" }}
          >
            From QSR and prepared foods to beverages, baked goods, pantry essentials, and private-label solutions —<br className="hidden lg:inline" />
            Zoiko Foods Corp builds, owns, and scales trusted food brands across global markets.
          </p>

          {/* Features */}
          <div
            className="mt-8 flex flex-col items-start lg:flex-row lg:items-center lg:justify-center gap-3 lg:gap-8 uppercase text-white"
            style={{
              fontFamily: "Segoe UI",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              lineHeight: "24px",
            }}
          >
            <span className="flex items-center gap-2" style={{ fontFamily: "Georgia", fontSize: "15px", fontWeight: 400 }}>
              <span className="text-[24px] leading-[0] pt-1 lg:hidden">•</span> Multi-Category FMCG Portfolio
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[24px] leading-[0] pt-1">•</span> Retail, Foodservice & Export Ready
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[24px] leading-[0] pt-1">•</span> Brand-Governed · Quality-Led · Scalable
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col lg:flex-row justify-center gap-4 lg:gap-6 w-full lg:w-auto">
            <button className="h-14 w-full lg:w-auto rounded-none lg:rounded-lg bg-[#D4A574] px-6 lg:px-10 text-lg font-bold text-white transition hover:opacity-90">
              Explore Our Brand Portfolio
            </button>

            <button className="h-14 w-full lg:w-auto rounded-none lg:rounded-lg bg-white text-[#2D5A3D] border-none lg:bg-transparent lg:text-white lg:border-2 lg:border-white px-6 lg:px-10 text-lg font-bold transition lg:hover:bg-white lg:hover:text-[#2D5A3D]">
              Retail &amp; Private-Label Solutions
            </button>
          </div>

        </div>
      </section>
    </>
  );
}