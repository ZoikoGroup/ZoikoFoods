import Image from "next/image";

const promises = [
  {
    title: "Fair Pricing",
    description: "10-15% above market rates in select categories",
    image: "/images/money-icon.png",
    alt: "Fair Pricing",
  },
  {
    title: "Long-Term Contracts",
    description: "Guaranteed purchase volumes for 3-5 years",
    image: "/images/long-term-contracts.png",
    alt: "Long-Term Contracts",
  },
  {
    title: "Training & Support",
    description: "Yield improvements, agritech, sustainability coaching",
    image: "/images/foods-icon.png",
    alt: "Training and Support",
  },
  {
    title: "Recognition & Pride",
    description:
      "Supplier stories featured in Zoiko Culinary Journal & packaging",
    image: "/images/recognition-pride.png",
    alt: "Recognition and Pride",
  },
  {
    title: "Global Market Access",
    description: "90+ countries, 50,000+ retail touchpoints",
    image: "/images/esg-icon.png",
    alt: "Global Market Access",
  },
];

export default function FarmerPromise() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="mb-8 sm:mb-12 text-center font-[Georgia] text-2xl sm:text-3xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          The Farmer Promise
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {promises.slice(0, 3).map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-[#F8F9FA] px-6 sm:px-8 py-8 sm:py-10 text-center"
            >
              <div className="mb-6 sm:mb-8 flex justify-center">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={50}
                  height={70}
                  className="object-contain"
                />
              </div>

              <h3 className="font-[Georgia] text-xl sm:text-2xl font-bold leading-8 sm:leading-9 text-[#2D5A3D]">
                {item.title}
              </h3>

              <p className="mt-6 sm:mt-8 font-[Inter] text-sm sm:text-base leading-6 text-[#333333]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {promises.slice(3).map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-[#F8F9FA] px-6 sm:px-8 py-8 sm:py-10 text-center"
              >
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>

                <h3 className="font-[Georgia] text-xl sm:text-2xl font-bold leading-8 sm:leading-9 text-[#2D5A3D]">
                  {item.title}
                </h3>

                <p className="mt-6 sm:mt-8 font-[Inter] text-sm sm:text-base leading-6 text-[#333333]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}