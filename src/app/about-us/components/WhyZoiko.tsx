import Image from "next/image";

const cards = [
  {
    title: "Multi-Format Manufacturing",
    description:
      "Frozen, chilled, ambient, flash-frozen, and catering-ready FMCG",
    image: "/images/manufacturing.svg",
  },
  {
    title: "Hybrid Model",
    description:
      "We manufacture in world-class facilities while co-creating with partners to ensure agility",
    image: "/images/hybrid.svg",
  },
  {
    title: "Global Compliance",
    description:
      "HACCP, FDA, USDA, ISO 22000, EFSA, FSSAI, BRCGS",
    image: "/images/compliance.svg",
  },
  {
    title: "Embedded Partnerships",
    description:
      "Long-term supply agreements across Africa, Asia, the Caribbean, Europe, and North America",
    image: "/images/partnership.svg",
  },
  {
    title: "Customer-First Impact",
    description:
      "Delivering value to our customers and their customers",
    image: "/images/customer.svg",
  },
  {
    title: "Sustainability First",
    description:
      "Recyclable packaging, carbon-neutral targets, and ESG-linked farming partnerships",
    image: "/images/sustainability.svg",
  },
];

export default function WhyZoiko() {
  return (
    <section className="bg-[#F9FFF8] py-14 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">

        <h2
          className="text-center text-[#2D5A3D] text-2xl md:text-3xl font-bold mb-10 md:mb-16"
          style={{ fontFamily: "Georgia" }}
        >
          Why Zoiko Foods?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E7E7E7] shadow-[2px_4px_23.6px_rgba(0,0,0,0.04)] min-h-[280px] lg:h-[320px] px-8 py-10 lg:py-0 flex flex-col items-center justify-center text-center"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={64}
                height={64}
                className="mb-8"
              />

              <h3
                className="text-[#2D5A3D] text-xl font-bold mb-5"
                style={{ fontFamily: "Georgia" }}
              >
                {card.title}
              </h3>

              <p
                className="text-[#666666] text-base leading-6"
                style={{ fontFamily: "Inter" }}
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