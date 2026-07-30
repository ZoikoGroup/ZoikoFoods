import Image from "next/image";

export default function ESGSustainability() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 md:px-4 xl:px-0">
        <h2
          className="mb-8 md:mb-12 text-center text-[24px] font-bold leading-9 md:leading-[52px] text-[#2D5A3D]"
          style={{ fontFamily: "Georgia" }}
        >
          ESG & Sustainability Commitments
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 md:items-start">
          {/* Left Image */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-[#C0C0C0] md:h-[465px] md:w-[556px]">
            <Image
              src="/images/esg-sustainability.jpg"
              alt="ESG Sustainability"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-5 md:mb-6 rounded-lg bg-white p-5 md:p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.10)]">
              <h3
                className="text-[18px] md:text-[20px] font-bold leading-7 md:leading-8 text-[#2D5A3D]"
                style={{ fontFamily: "Georgia" }}
              >
                100% recyclable/compostable packaging by 2028
              </h3>
            </div>

            <div className="mb-5 md:mb-6 rounded-lg bg-white p-5 md:p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.10)]">
              <h3
                className="text-[18px] md:text-[20px] font-bold leading-7 md:leading-8 text-[#2D5A3D]"
                style={{ fontFamily: "Georgia" }}
              >
                100% renewable energy by 2030
              </h3>
            </div>

            <div className="mb-6 md:mb-8 rounded-lg bg-white p-5 md:p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.10)]">
              <h3
                className="text-[18px] md:text-[20px] font-bold leading-7 md:leading-8 text-[#2D5A3D]"
                style={{ fontFamily: "Georgia" }}
              >
                Empowerment of 100,000 farmers by 2030
              </h3>
            </div>

            <p
              className="mb-6 md:mb-8 text-[14px] leading-6 text-[#666666]"
              style={{ fontFamily: "Inter" }}
            >
              <i>Zoiko Foods is not just catching up — we are moving faster than
              the industry's</i>
              <br className="hidden md:block" />
              largest players in ESG commitments.
            </p>

            <button
              className="h-14 w-full rounded-lg border-2 border-[#2D5A3D] bg-transparent text-[16px] md:text-[18px] font-bold text-[#2D5A3D] transition hover:bg-[#2D5A3D] hover:text-white md:w-96"
              style={{ fontFamily: "Arial" }}
            >
              Explore Our Sustainability Strategy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
