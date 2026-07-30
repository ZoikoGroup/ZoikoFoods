import Image from "next/image";

export default function WhyZoikoDifferentiation() {
  const cards = [
    {
      icon: "/images/esg-icon.png",
      title: "Complete Portfolio",
      description: (
        <>
          Rice, patties, QSR,
          <br />
          condiments, beverages,
          <br />
          teas, wines, café
        </>
      ),
    },
    {
      icon: "/images/cultural-differentiation.png",
      title: "Cultural Edge",
      description: (
        <>
          Caribbean, African, Indian,
          <br />
          and European authenticity
          <br />
          drives loyalty
        </>
      ),
    },
    {
      icon: "/images/proven-execution.png",
      title: "Operational Scale",
      description: (
        <>
          120,000 MT shipped
          <br />
          annually, 8,000+ containers
        </>
      ),
      small: true,
    },
    {
      icon: "/images/sustainability-edge.png",
      title: "Future-Proof",
      description: (
        <>
          100% recyclable packaging
          <br />
          by 2028, renewable energy
          <br />
          by 2030
        </>
      ),
    },
  ];

  return (
    <section className="w-full h-auto sm:h-[474px] relative overflow-hidden py-12 sm:py-0 px-5 sm:px-0">
      <div className="w-full sm:w-[1200px] h-full mx-auto relative">

        <h2 className="sm:absolute sm:top-[84px] sm:left-1/2 sm:-translate-x-1/2 text-center text-[#2D5A3D] text-[22px] sm:text-2xl font-bold font-['Georgia'] leading-8 mb-8 sm:mb-0">
          Why Zoiko — Our Differentiation
        </h2>

        <div className="sm:absolute sm:top-[139px] sm:left-0 w-full flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-0 sm:px-5">

          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-64 py-8 sm:h-72 bg-[#F8F9FA] rounded-lg flex flex-col items-center text-center px-4 sm:px-0"
            >

              {/* Image Icon */}
              <div className="sm:mt-8 h-16 sm:h-20 flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={55}
                  height={55}
                  className="object-contain w-[45px] sm:w-[55px]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 sm:mt-2 text-[#2D5A3D] text-lg sm:text-xl font-bold font-['Georgia'] leading-6">
                {card.title}
              </h3>

              {/* Description */}
              <p
                className={`mt-3 sm:mt-5 text-zinc-800 ${
                  card.small ? "text-xs sm:text-sm" : "text-[14px] sm:text-base"
                } font-normal font-['Inter'] leading-6`}
              >
                {card.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}