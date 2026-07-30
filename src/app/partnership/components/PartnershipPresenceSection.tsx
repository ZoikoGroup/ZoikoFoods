"use client";

export default function PartnershipPresenceSection() {
  const regions = [
    {
      title: (
        <>
          <span className="md:hidden">Americas (North, Central & South)</span>
          <span className="hidden md:inline">Americas (North, Central & South)</span>
        </>
      ),
      description: (
        <>
          <span className="md:hidden">
            Complete Zoiko Foods portfolio available — rice,<br />
            patties, condiments, beverages, QSR<br />
            (NoxxChicken), café products, wines, teas.
          </span>
          <span className="hidden md:inline">
            Complete Zoiko Foods portfolio available — rice, patties, condiments, beverages, QSR (NoxxChicken), café products, wines, teas.
          </span>
        </>
      ),
    },
    {
      title: (
        <>
          <span className="md:hidden">Caribbean</span>
          <span className="hidden md:inline">Caribbean</span>
        </>
      ),
      description: (
        <>
          <span className="md:hidden">
            Full multi-brand distribution across the region —<br />
            retail, quick-serve, beverages, and exclusive<br />
            distributorships.
          </span>
          <span className="hidden md:inline">
            Full multi-brand distribution across the region — retail, quick-serve, beverages, and exclusive distributorships.
          </span>
        </>
      ),
    },
    {
      title: (
        <>
          <span className="md:hidden">Africa (initial 5 countries,<br />expanding)</span>
          <span className="hidden md:inline">Africa (initial 5 countries, expanding)</span>
        </>
      ),
      description: (
        <>
          <span className="md:hidden">
            Complete Zoiko portfolio introduced — rice,<br />
            condiments, patties, beverages, coffee.
          </span>
          <span className="hidden md:inline">
            Complete Zoiko portfolio introduced — rice, condiments, patties, beverages, coffee.
          </span>
        </>
      ),
    },
    {
      title: (
        <>
          <span className="md:hidden">Europe</span>
          <span className="hidden md:inline">Europe</span>
        </>
      ),
      description: (
        <>
          <span className="md:hidden">
            Focused on wines, café culture, and select<br />
            condiments/teas.
          </span>
          <span className="hidden md:inline">
            Focused on wines, café culture, and select condiments/teas.
          </span>
        </>
      ),
    },
    {
      title: (
        <>
          <span className="md:hidden">Asia</span>
          <span className="hidden md:inline">Asia</span>
        </>
      ),
      description: (
        <>
          <span className="md:hidden">
            Expanding rice, teas, beverages, condiments<br />
            distribution.
          </span>
          <span className="hidden md:inline">
            Expanding rice, teas, beverages, condiments distribution.
          </span>
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Title */}
        <h2 className="mb-8 md:mb-12 text-center font-[Georgia] text-[22px] md:text-[28px] font-bold leading-[34px] md:leading-[52px] text-[#2D5A3D]">
          Partnership Presence
        </h2>

        {/* Presence Cards */}
        <div className="flex flex-col gap-4 md:gap-7">
          {regions.map((region, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 md:p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
            >
              <h3 className="font-[Georgia] text-[16px] md:text-xl font-bold text-[#2D5A3D]">
                {region.title}
              </h3>

              <p className="mt-2 md:mt-3 font-[Inter] text-[13px] md:text-[15px] italic leading-[22px] md:leading-[26px] text-[#888888]">
                {region.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}