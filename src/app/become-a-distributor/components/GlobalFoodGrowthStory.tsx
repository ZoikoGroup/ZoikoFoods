import Image from "next/image";

export default function GlobalFoodGrowthStory() {
  const cards = [
    {
      icon: "/images/globe.png",
      value: "$3.5T",
      title: "Packaged food market",
    },
    {
      icon: "/images/rice.png",
      value: "$300B",
      title: "Rice market",
    },
    {
      icon: "/images/chilli.png",
      value: "$190B",
      title: "Condiments market",
    },
    {
      icon: "/images/beverage.png",
      value: "$1.5T",
      title: "Beverages market",
    },
  ];

  return (
    <section className="w-full h-auto sm:h-[579px] bg-[#F8F9FA] relative overflow-hidden py-12 sm:py-0">
      <div className="w-full sm:w-[1200px] h-auto sm:h-[481px] sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-[49px] px-5 sm:px-0">

        {/* Heading */}
        <h2 className="sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 text-center text-[#2D5A3D] text-[22px] sm:text-2xl font-bold font-['Georgia'] leading-8 mb-8 sm:mb-0">
          The Global Food Growth Story
        </h2>

        {/* Cards */}
        <div className="sm:absolute sm:top-[79px] sm:left-0 w-full grid grid-cols-2 gap-4 sm:flex sm:justify-between sm:gap-0 sm:px-5">

          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-64 aspect-square sm:h-64 bg-white rounded-lg shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] flex flex-col items-center p-3 sm:p-0"
            >
              {/* Icon */}
              <div className="mt-4 sm:mt-8 h-12 sm:h-20 flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={70}
                  height={70}
                  className="object-contain w-[40px] h-[40px] sm:w-[70px] sm:h-[70px]"
                />
              </div>

              {/* Value */}
              <div className="mt-3 sm:mt-5 text-[#D4A574] text-xl sm:text-2xl font-bold font-['Inter'] leading-tight sm:leading-[64px]">
                {card.value}
              </div>

              {/* Title */}
              <div className="mt-2 sm:mt-3 text-[#666666] text-[13px] sm:text-[16px] font-medium font-['Inter'] leading-snug sm:leading-6 text-center px-1">
                {card.title}
              </div>
            </div>
          ))}

        </div>

        {/* Description */}
        <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-[386px] w-full sm:w-[786px] text-center text-[#666666] text-[15px] sm:text-[17px] font-normal font-['Inter'] leading-relaxed sm:leading-8 mt-10 sm:mt-0">
          <i>Zoiko Foods is positioned at the intersection of heritage-driven demand and global
          <br className="hidden sm:block" />
          consumer megatrends. We don&apos;t compete with legacy brands — we grow in the
          <br className="hidden sm:block" />
          spaces they&apos;ve overlooked.</i>
        </div>

      </div>
    </section>
  );
}