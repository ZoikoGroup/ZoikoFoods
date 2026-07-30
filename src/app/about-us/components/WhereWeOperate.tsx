import Image from "next/image";

const items = [
  {
    image: "/images/rd-innovation.svg",
    title: "R&D & Innovation",
    description: (
      <>
        Caribbean, India, USA,
        <br />
        Lagos, Asia-Pacific
      </>
    ),
  },
  {
    image: "/images/production-packaging.svg",
    title: "Production & Packaging",
    description: (
      <>
        Certified facilities across
        <br />
        Africa, Asia, Europe, Americas
      </>
    ),
  },
  {
    image: "/images/global-logistics.svg",
    title: "Global Logistics",
    description: (
      <>
        Cold-chain and ambient
        <br />
        shipping to 40+ countries
      </>
    ),
  },
  {
    image: "/images/scale-reach.svg",
    title: "Scale & Reach",
    description: (
      <>
        50M+ meals annually,
        <br />
        millions of rice packs
        <br />
        distributed worldwide
      </>
    ),
  },
  {
    image: "/images/smart-systems.svg",
    title: "Smart Systems",
    description: (
      <>
        ERP batch tracking, AI-
        <br />
        driven QA, ESG
        <br />
        transparency
      </>
    ),
  },
  {
    image: "/images/deep-partnerships.svg",
    title: "Deep Partnerships",
    description: (
      <>
        Multi-decade agreements
        <br />
        securing resilience and
        <br />
        shared prosperity
      </>
    ),
  },
];

export default function WhereWeOperate() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2
          className="text-center text-2xl md:text-3xl font-bold text-[#2D5A3D] mb-12 md:mb-20"
          style={{ fontFamily: "Georgia" }}
        >
          Where We Operate
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-20">
          {items.map((item, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={40}
                height={40}
                className="mb-8"
              />

              <h3
                className="text-2xl text-[#2D5A3D] mb-4"
                style={{ fontFamily: "Georgia" }}
              >
                {item.title}
              </h3>

              <p className="text-sm text-[#666666] leading-6" style={{ fontFamily: "Inter" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}