import Image from "next/image";

export default function Purpose() {
  return (
    <section className="relative w-full py-14 md:py-24 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/purpose-bg.jpg"
        alt="Purpose Background"
        fill
        className="object-cover"
      />

      {/* Light Peach Overlay */}
      <div className="absolute inset-0 bg-[#FEE1CC]/60 h-full lg:h-[734px]"></div>

      <div className="relative max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 px-4 ">

        {/* Vision Card */}
        <div className="w-full lg:w-[502px] shrink-0 bg-white rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.06)] p-8 md:p-12">

          <h2
            className="text-[#2D5A3D] text-2xl md:text-[32px] font-bold mb-10 md:mb-16"
            style={{ fontFamily: "Georgia" }}
          >
            Our Purpose
          </h2>

          <h3
            className="text-[#2D5A3D] text-2xl mb-5"
            style={{ fontFamily: "Georgia" }}
          >
            Vision
          </h3>

          <p
            className="text-[#666666] text-[15px] leading-[1.7]"
            style={{ fontFamily: "Inter" }}
          >
            To be the world&apos;s most trusted and culturally relevant
            food group, shaping the future of taste through{" "}
            <span className="text-[#2D5A3D] font-bold">
              heritage, science, technology, and sustainability
            </span>
          </p>

        </div>

        {/* Mission Card */}
        <div className="flex-1 bg-white rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.06)] p-8 md:p-12">

          <h3
            className="text-[#2D5A3D] text-2xl font-bold mb-8"
            style={{ fontFamily: "Georgia" }}
          >
            Mission
          </h3>

          <p
            className="mb-8 text-[15px]"
            style={{ fontFamily: "Inter" }}
          >
            <span className="text-[#666666]">
              We enrich lives through
            </span>{" "}
            <span className="text-[#2D5A3D] font-bold">
              food with meaning
            </span>
            <span className="text-[#666666]">:</span>
          </p>

          <div className="space-y-6 text-[15px] leading-[1.7]" style={{ fontFamily: "Inter" }}>

            <div className="flex gap-3">
              <span className="text-[#E8863C] font-bold shrink-0">→</span>
              <p>
                <span className="text-[#2D5A3D] font-bold">
                  Rooted in culture
                </span>
                <span className="text-[#666666]">
                  {" "}— honoring Africa, the Caribbean, and Asia as
                  our foundation
                </span>
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-[#E8863C] font-bold shrink-0">→</span>
              <p>
                <span className="text-[#2D5A3D] font-bold">
                  Perfected by innovation
                </span>
                <span className="text-[#666666]">
                  {" "}— applying Tier-1 R&amp;D, AI-enabled
                  traceability, and precision supply chains
                </span>
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-[#E8863C] font-bold shrink-0">→</span>
              <p>
                <span className="text-[#2D5A3D] font-bold">
                  Delivered with reliability
                </span>
                <span className="text-[#666666]">
                  {" "}— from supermarket rice packs to
                  airline trays to wellness drinks
                </span>
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-[#E8863C] font-bold shrink-0">→</span>
              <p>
                <span className="text-[#2D5A3D] font-bold">
                  Secured through partnerships
                </span>
                <span className="text-[#666666]">
                  {" "}— multi-decade agreements with farmers, mills,
                  and distributors that guarantee stability, fair pricing,
                  and shared prosperity
                </span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
