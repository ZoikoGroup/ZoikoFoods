"use client";

export default function ProvenPartnershipsSection() {
  return (
    <section className="bg-[#F8F9FA] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <h2 className="mb-12 text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D]">
          Proven Partnerships. Tangible Growth.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Caribbean Rollout */}
          <div className="mx-auto w-full max-w-[365px] h-[281px] rounded-lg bg-white px-8 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <h3 className="font-[Georgia] text-[20px] font-bold text-[#2D5A3D]">
              Caribbean Rollout
            </h3>
            <p className="mt-6 font-[Inter] text-[15px] leading-[24px] text-[#444444]">
              Zoiko Foods&apos; full multi-brand portfolio
              <br className="hidden md:block" />
              (patties, QSR, beverages, condiments,
              <br className="hidden md:block" />
              rice) secured <b>30% retail penetration</b>
              <br className="hidden md:block" />
              <b>in Year 1</b>
            </p>
          </div>

          {/* Africa Launch */}
          <div className="mx-auto w-full max-w-[365px] h-[281px] rounded-lg bg-white px-8 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <h3 className="font-[Georgia] text-[20px] font-bold text-[#2D5A3D]">
              Africa (5-country launch)
            </h3>
            <p className="mt-6 font-[Inter] text-[15px] leading-[24px] text-[#444444]">
              Complete Zoiko portfolio introduced
              <br className="hidden md:block" />
              across supermarkets and QSR — rice,
              <br className="hidden md:block" />
              condiments, patties, beverages —
              <br className="hidden md:block" />
              <b>achieving rapid expansion</b>
            </p>
          </div>

          {/* Americas Expansion */}
          <div className="mx-auto w-full max-w-[365px] h-[281px] rounded-lg bg-white px-8 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <h3 className="font-[Georgia] text-[20px] font-bold text-[#2D5A3D]">
              Americas Expansion
            </h3>
            <p className="mt-6 font-[Inter] text-[15px] leading-[24px] text-[#444444]">
              Total category presence established:
              <br className="hidden md:block" />
              <b>supermarkets, quick-serve</b>
              <br className="hidden md:block" />
              <b>restaurants, beverages, café, and</b>
              <br className="hidden md:block" />
              <b>wines</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}