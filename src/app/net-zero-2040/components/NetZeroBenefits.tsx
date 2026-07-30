import Image from "next/image";

export default function NetZeroBenefits() {
  const cards = [
    {
      image: "/images/global-ambition.png",
      title: "Environment",
      description: "Full Scope 1-3 reductions across 90+ countries",
    },
    {
      image: "/images/fraud-reduction.png",
      title: "Financial",
      description: "$200M+ in avoided carbon taxes and fines globally",
    },
    {
      image: "/images/compliance.png",
      title: "Regulatory",
      description:
        "Aligned with EU, US, APAC, LATAM, and African climate frameworks",
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8 px-4 sm:px-6 lg:flex-row">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col items-center rounded-lg bg-white px-6 sm:px-8 py-8 sm:py-12 text-center shadow-md"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={47}
              height={77}
              className="mb-6 sm:mb-8"
            />

            <h3 className="font-[Georgia] text-lg sm:text-xl font-bold leading-8 sm:leading-10 text-[#2D5A3D]">
              {card.title}
            </h3>

            <p className="mt-3 sm:mt-5 font-[Inter] text-sm sm:text-base leading-6 text-[#333333]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}