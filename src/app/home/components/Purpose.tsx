import Image from "next/image";

export default function Purpose() {
  const values = [
    {
      title: "Sustainability & Shared Prosperity",
      description:
        "Empowering communities in Africa and the Caribbean through fair partnerships",
      icon: "/images/purpose-icon-1.svg",
    },
    {
      title: "Rooted in Culture",
      description:
        "Preserving authentic traditions while embracing modern innovation",
      icon: "/images/purpose-icon-2.svg",
    },
    {
      title: "Quality & Trust",
      description:
        "Committed to excellence in every grain, sauce and product we create",
      icon: "/images/purpose-icon-3.svg",
    },
    {
      title: "Innovation That Leads",
      description:
        "Pioneering solutions that honor heritage while meeting modern needs",
      icon: "/images/purpose-icon-4.svg",
    },
  ];

  return (
    <section className="bg-[#D79247] py-12 md:py-16">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2
          className="text-center text-[24px] md:text-[30px] font-bold leading-[36px] md:leading-[52px] text-white"
          style={{ fontFamily: "Georgia" }}
        >
          Our Purpose &amp; Values
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 mt-10 md:mt-14">
          {values.map((item) => (
            <div key={item.title} className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                />
              </div>

              {/* Title */}
              <h3
                className="text-[18px] font-bold leading-7 text-white lg:whitespace-nowrap"
                style={{ fontFamily: "Georgia" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[16px] leading-6 text-white max-w-[300px] mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
