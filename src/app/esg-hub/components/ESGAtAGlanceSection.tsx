import Image from "next/image";

const esgCards = [
  {
    title: "Foods",
    description: "100% recyclable packaging by 2028 → $25M annual savings",
    image: "/images/foods-icon.png",
    progress: "60%",
  },
  {
    title: "Healthcare",
    description:
      "Sustainable R&D → 30% green chemistry adoption by 2027",
    image: "/images/healthcare-icon.png",
    progress: "45%",
  },
  {
    title: "Communications",
    description:
      "Renewable-powered networks by 2030 → 40% energy savings",
    image: "/images/communications-icon.png",
    progress: "40%",
  },
  {
    title: "Financial Services",
    description:
      "100% digital-first transactions → paper reduction = 90% savings",
    image: "/images/financial-services-icon.png",
    progress: "82%",
  },
  {
    title: "Tech",
    description:
      "AI-driven efficiency → reducing SME partner carbon footprint by 15%",
    image: "/images/tech-icon.png",
    progress: "50%",
  },
];

function ESGCard({ card }: { card: (typeof esgCards)[number] }) {
  return (
    <div className="w-full max-w-sm rounded-lg bg-white px-5 sm:px-8 py-6 sm:py-10 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Image
        src={card.image}
        alt={card.title}
        width={52}
        height={77}
        className="mb-6 sm:mb-8 h-12 w-10 sm:h-15 sm:w-12 object-contain"
      />

      <h3 className="font-[Georgia] text-base sm:text-lg pb-2 sm:pb-3 font-bold leading-6 text-[#2D5A3D]">
        {card.title}
      </h3>

      <p className="mt-2 sm:mt-3 text-sm font-[Inter] leading-6 text-[#333333]">
        {card.description}
      </p>

      <div className="mt-4 sm:mt-5 h-1.5 overflow-hidden rounded-sm bg-[#F0F0F0]">
        <div
          className="h-full rounded-sm bg-gradient-to-r from-green-800 to-[#D4A574]"
          style={{ width: card.progress }}
        />
      </div>
    </div>
  );
}

export default function ESGAtAGlanceSection() {
  const topRow = esgCards.slice(0, 3);
  const bottomRow = esgCards.slice(3);

  return (
    <section className="bg-[#F8F9FA] pt-16 sm:pt-22 pb-16 sm:pb-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-6">
        <h2 className="mb-6 sm:mb-8 text-center font-[Georgia] text-lg sm:text-xl pb-5 sm:pb-7 font-bold leading-tight text-[#2D5A3D] md:text-2xl">
          ESG at a Glance
        </h2>

        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topRow.map((card) => (
            <ESGCard key={card.title} card={card} />
          ))}
        </div>

        {/* Bottom row - centered (flex ensures cards stay centered) */}
        <div className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-5 sm:gap-6">
          {bottomRow.map((card) => (
            <ESGCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}