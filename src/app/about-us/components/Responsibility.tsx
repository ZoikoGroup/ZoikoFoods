import Image from "next/image";

export default function Responsibility() {
  return (
    <section className="bg-[#F9FFF8] py-14 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20">
        {/* Left Images */}
        <div className="flex gap-3 md:gap-5 w-full max-w-[540px] lg:w-auto">
          <div className="flex-1 lg:flex-none lg:w-[260px] h-[300px] md:h-[420px] relative rounded-lg overflow-hidden">
            <Image
              src="/images/responsibility-1.jpg"
              alt="Responsibility"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-3 md:gap-5 flex-1 lg:flex-none">
            <div className="w-full lg:w-[260px] h-[144px] md:h-[200px] relative rounded-lg overflow-hidden">
              <Image
                src="/images/responsibility-2.jpg"
                alt="Responsibility"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full lg:w-[260px] h-[144px] md:h-[200px] relative rounded-lg overflow-hidden">
              <Image
                src="/images/responsibility-3.jpg"
                alt="Responsibility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:max-w-[500px]">
          <h2
            className="text-3xl md:text-[40px] font-bold text-[#2D5A3D] mb-8 md:mb-12"
            style={{ fontFamily: "Georgia" }}
          >
            Our Responsibility
          </h2>

          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-4">
              <Image
                src="/images/check.svg"
                alt="check"
                width={24}
                height={24}
              />
              <p className="text-lg text-[#666666] leading-7">
                82% recyclable packaging, 100% by 2027
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Image
                src="/images/check.svg"
                alt="check"
                width={24}
                height={24}
              />
              <p className="text-lg text-[#666666] leading-7">
                Carbon-neutral facilities by 2030
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Image
                src="/images/check.svg"
                alt="check"
                width={24}
                height={24}
              />
              <p className="text-lg text-[#666666] leading-7">
                Inclusive sourcing — empowering African rice farmers &
                Caribbean spice growers with finance and training
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Image
                src="/images/check.svg"
                alt="check"
                width={24}
                height={24}
              />
              <p className="text-lg text-[#666666] leading-7">
                Transparent ESG metrics — reported group-wide
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Image
                src="/images/check.svg"
                alt="check"
                width={24}
                height={24}
              />
              <p className="text-lg leading-7">
                <span className="text-[#666666]">
                  Look for the{" "}
                </span>

                <span className="font-bold text-[#2D5A3D]">
                  "Sourced with Zoiko Farms (Zoiko Agro)"
                </span>

                <span className="text-[#666666]">
                  {" "}
                  trust-mark on our packs
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}