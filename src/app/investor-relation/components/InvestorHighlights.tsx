import Image from "next/image";

const cards = [
  {
    image: "/images/global-ambition.png",
    title: (
      <>
        Global
        <br />
        Ambition
      </>
    ),
    description: (
      <>
        Distribution networks<br></br> across
        <br />
        90+ countries
      </>
    ),
  },
  {
    image: "/images/cultural-differentiation.png",
    title: (
      <>
        Cultural
        <br />
        Differentiation
      </>
    ),
    description: (
      <>
        Caribbean, African, Indian,
        <br />
        and European heritage
        <br />
        brands
      </>
    ),
  },
  {
    image: "/images/proven-execution.png",
    title: (
      <>
        Proven
        <br />
        Execution
      </>
    ),
    description: (
      <>
        Exclusive <br></br>distributorships
        <br />
        (e.g., Taj Mahal Rice)
        <br />
        already secured
      </>
    ),
  },
  {
    image: "/images/sustainability-edge.png",
    title: (
      <>
        Sustainability
        <br />
        Edge
      </>
    ),
    description: (
      <>
        100% recyclable packaging
        <br />
        by 2028, ahead of
        <br />
        competitors
      </>
    ),
  },
];

export default function InvestorHighlights() {
  return (
    <section className="bg-[#E8ECEB] py-12 md:py-16">
      <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-6 px-6 md:flex-row md:justify-between md:gap-8 md:px-4 xl:px-0">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex w-full max-w-[340px] flex-col items-center rounded-lg bg-white px-6 py-8 text-center shadow-[0px_4px_6px_rgba(0,0,0,0.10)] md:h-[320px] md:w-266 md:max-w-none md:py-0 md:pt-6"
          >
            <Image
              src={card.image}
              alt=""
              width={64}
              height={64}
              className="mb-5 object-contain"
            />

            <h3
              className="text-[20px] font-bold leading-8 text-[#2D5A3D]"
              style={{ fontFamily: "Georgia" }}
            >
              {card.title}
            </h3>

            <p
              className="mt-6 text-[16px] leading-6 text-[#333333]"
              style={{ fontFamily: "Inter" }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}