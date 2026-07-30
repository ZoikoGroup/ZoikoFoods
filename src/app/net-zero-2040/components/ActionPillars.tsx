import Image from "next/image";

export default function ActionPillars() {
  const pillars = [
    {
      image: "/images/renewable-energy-icon.png",
      title: "Renewable\nEnergy\n(RE100)",
      description: "100% by 2030, matching EU and US mandates",
    },
    {
      image: "/images/green-logistics-icon.png",
      title: "Green\nLogistics",
      description: "EV fleet expansion in USA/EU, hybrid fleet in LATAM/Africa",
    },
    {
      image: "/images/supplier-decarbonization-icon.png",
      title: "Supplier\nDecarbonization",
      description: "Incentives for Scope 3 compliance in Asia/Africa",
    },
    {
      image: "/images/offsets-icon.png",
      title: "Offsets &\nNature-Based\nCredits",
      description: "Verified in LATAM & Africa",
    },
    {
      image: "/images/ai-efficiency-icon.png",
      title: "AI-Driven\nEfficiency",
      description: "Smart factories reduce emissions 15% globally",
    },
  ];

  const Card = ({ pillar }: { pillar: (typeof pillars)[number] }) => (
    <div className="flex h-auto min-h-[340px] w-full flex-col items-center rounded-lg bg-white px-6 py-8 text-center shadow-md">
      <Image
        src={pillar.image}
        alt={pillar.title}
        width={64}
        height={64}
        className="mb-8"
      />

      <h3 className="whitespace-pre-line font-[Georgia] text-lg sm:text-xl font-bold leading-8 sm:leading-10 text-[#2D5A3D]">
        {pillar.title}
      </h3>

      <p className="mt-auto whitespace-pre-line font-[Inter] text-base leading-6 text-[#333333]">
        {pillar.description}
      </p>
    </div>
  );

  const topRow = pillars.slice(0, 3);
  const bottomRow = pillars.slice(3);

  return (
    <section className="bg-[#F8F9FA] px-4 py-12 sm:px-8 sm:py-16 lg:px-20 xl:px-40 2xl:px-80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">            <h2 className="mb-10 sm:mb-16 text-center font-[Georgia] text-xl sm:text-2xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
              Action Pillars
            </h2>

        {/*
          Explicit 3-column grid so the row break is always 3-then-2,
          matching Figma, regardless of viewport width. Cards fill their
          grid cell (w-full) instead of a fixed pixel width, so top-row
          and bottom-row cards are always exactly the same width as one
          grid column, at every breakpoint.
        */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topRow.map((pillar) => (
            <Card key={pillar.title} pillar={pillar} />
          ))}

          <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:justify-center lg:col-span-3">
            {bottomRow.map((pillar) => (
              <div
                key={pillar.title}
                className="sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]"
              >
                <Card pillar={pillar} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}