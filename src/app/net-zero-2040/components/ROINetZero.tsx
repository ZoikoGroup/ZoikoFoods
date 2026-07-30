import Image from "next/image";

export default function ROINetZero() {
  const cards = [
    {
      image: "/images/money-icon.png",
      value: "$200M+",
      description: "avoided in global carbon taxes",
    },
    {
      image: "/images/energy-icon.png",
      value: "$50M+",
      description: "annual energy cost savings by 2030",
    },
    {
      image: "/images/growth-icon.png",
      value: "+3%",
      description: "EBITDA margin expansion",
    },
    {
      image: "/images/esg-icon.png",
      value: "ESG Alignment",
      description:
        "cheaper financing (green bonds, sustainability-linked loans)",
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-10 sm:mb-16 text-center font-[Georgia] text-xl sm:text-2xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          ROI of Net Zero
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.value}
              className="flex h-auto min-h-[280px] sm:min-h-[300px] xl:h-80 flex-col items-center rounded-lg bg-white px-4 sm:px-6 py-8 text-center shadow-md"
            >
              <Image
                src={card.image}
                alt={card.value}
                width={64}
                height={64}
                className="mb-6 sm:mb-8"
              />

              <h3 className="font-[Georgia] text-xl sm:text-2xl font-bold leading-8 sm:leading-10 text-[#D4A574]">
                {card.value}
              </h3>

              <p className="mt-4 sm:mt-6 whitespace-pre-line font-[Inter] text-sm sm:text-base leading-6 text-[#333333]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}