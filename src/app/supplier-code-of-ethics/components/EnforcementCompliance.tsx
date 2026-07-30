import Image from "next/image";

const points = [
  "Breaches escalate under Delaware law (parent company jurisdiction)",
  "Local breaches prosecuted under regional laws",
  <>
    Anonymous reporting available through the{" "}
    <span className="font-bold">Whistleblower Portal</span>
  </>,
];

export default function EnforcementCompliance() {
  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Image */}
          <div>
            <Image
              src="/images/enforcement-compliance-banner.png"
              alt="Enforcement & Compliance"
              width={461}
              height={288}
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2
              className="mb-6 text-center font-[Georgia] text-2xl font-bold leading-[40px] text-[#2D5A3D] md:mb-8 md:text-left md:leading-[52px]"
            >
              Enforcement & Compliance
            </h2>

            <div className="space-y-6 md:space-y-8">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-4">
                  <Image
                    src="/images/legal-icon.png"
                    alt="Legal"
                    width={18}
                    height={18}
                    className="mt-1 shrink-0 md:h-5 md:w-5"
                  />

                  <p
                    className="font-[Inter] text-[15px] leading-6 text-[#333333] md:text-base md:leading-7"
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}