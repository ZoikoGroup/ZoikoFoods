import Image from "next/image";

const cards = [
  {
    image: "/images/legal-compliance.png",
    title: "Legal Compliance",
    description: (
      <>
        Suppliers must follow global laws +
        <br />
        Zoiko's framework
      </>
    ),
  },
  {
    image: "/images/regional-enforcement.png",
    title: (
      <>
        Regional
        <br />
        Enforcement
      </>
    ),
    description: "Specific rules apply by geography",
  },
  {
    image: "/images/human-dignity.png",
    title: "Human Dignity",
    description: (
      <>
        Workers' rights, safety, and fair pay are
        <br />
        non-negotiable
      </>
    ),
  },
];

export default function PolicyHighlights() {
  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:justify-between lg:gap-0">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex min-h-[200px] w-full flex-col items-center rounded-lg bg-white px-4 py-4 text-center shadow-md md:min-h-[290px] md:px-8 md:py-8 lg:w-[380px]"
          >
            <Image
              src={card.image}
              alt={
                typeof card.title === "string"
                  ? card.title
                  : `Policy Icon ${index + 1}`
              }
              width={44}
              height={44}
              className="mb-3 object-contain md:mb-8 md:h-16 md:w-16"
            />

            <h3
              className="mb-3 font-[Georgia] text-[16px] font-bold leading-7 text-[#2D5A3D] md:mb-5 md:text-[20px] md:leading-10"
            >
              {card.title}
            </h3>

            <p
              className="font-[Inter] text-[12px] leading-5 text-[#333333] md:text-[14px] md:leading-6"
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}