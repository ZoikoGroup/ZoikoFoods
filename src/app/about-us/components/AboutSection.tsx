import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#1E4536]/10 py-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">

        {/* Heading */}
        <h2
          className="text-center text-[#2D5A3D] text-2xl md:text-3xl font-bold mb-8 md:mb-10"
          style={{ fontFamily: "Georgia" }}
        >
          About Zoiko Foods Corp
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left Side */}
          <div>

            <p
              className="text-xl leading-9"
              style={{ fontFamily: "Inter" }}
            >
              <span className="text-[#2C2C2C] font-light">
                At Zoiko Foods, food is more than sustenance — it is{" "}
              </span>

              <span className="text-[#2D5A3D] font-bold">
                identity, culture, and connection
              </span>

              <span className="text-[#2C2C2C] font-light">.</span>
            </p>

            <div className="mt-6 overflow-hidden bg-white">
              <Image
                src="/images/about-section.jpg"
                alt="About Zoiko Foods"
                width={543}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>

            <p
              className="mt-8 text-base leading-6"
              style={{ fontFamily: "Inter" }}
            >
              <span className="text-[#666666]">
                As the food and beverage division of{" "}
              </span>

              <span className="text-[#2D5A3D] font-bold">
                Zoiko Group Inc.
              </span>

              <span className="text-[#666666]">
                , we curate a portfolio of{" "}
              </span>

              <span className="text-[#2D5A3D] font-bold">
                world-class FMCG brands
              </span>

              <span className="text-[#666666]">
                {" "}
                spanning staples, condiments,
                <br className="hidden md:block" />{" "}
                beverages, handheld meals, coffee, tea, wellness, and wines.
              </span>
            </p>

          </div>

          {/* Right Side */}

          <div>

            <h3
              className="text-2xl text-[#2D5A3D] mb-8"
              style={{ fontFamily: "Georgia" }}
            >
              Our portfolio balances:
            </h3>

            {/* Card 1 */}

            <div className="bg-white border-l-[3px] border-[#D4A574] p-5 mb-8">

              <h4
                className="text-lg text-[#2D5A3D]"
                style={{ fontFamily: "Georgia" }}
              >
                Noxx Caribbean Taste
              </h4>

              <p
                className="text-sm text-[#666666] mt-4"
                style={{ fontFamily: "Inter" }}
              >
                Bold, authentic Afro-Caribbean flavors
              </p>

            </div>

            {/* Card 2 */}

            <div className="bg-white border-l-[3px] border-[#D4A574] p-5 mb-8">

              <h4
                className="text-lg text-[#2D5A3D]"
                style={{ fontFamily: "Georgia" }}
              >
                Savor Taste
              </h4>

              <p
                className="text-sm text-[#666666] mt-4 leading-6"
                style={{ fontFamily: "Inter" }}
              >
                Globally accessible staples and meals tailored for mainstream
                consumers across Asia, Europe, and North America
              </p>

            </div>

            {/* Card 3 */}

            <div className="bg-white border-l-[3px] border-[#D4A574] p-5">

              <h4
                className="text-lg text-[#2D5A3D]"
                style={{ fontFamily: "Georgia" }}
              >
                Zoiko Kitchen
              </h4>

              <p
                className="text-sm text-[#666666] mt-4"
                style={{ fontFamily: "Inter" }}
              >
                Institutional and culinary solutions at industrial scale
              </p>

            </div>

            <p
              className="mt-10 text-sm font-medium text-[#2C2C2C] leading-6"
              style={{ fontFamily: "Inter" }}
            >
              <i>Together, these brands ensure Zoiko Foods speaks to every palate —
              from
              <br className="hidden md:block" />{" "}
              heritage-rich to globally versatile.</i>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}