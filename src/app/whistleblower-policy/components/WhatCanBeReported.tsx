export default function WhatCanBeReported() {
  const items = [
    "Bribery & Corruption",
    "Product Safety Violations",
    "Fraud, Theft, Misuse of Assets",
    "Labor & Human Rights Abuses",
    "Environmental Breaches",
    "Financial Misreporting",
    "Supplier & Partner Misconduct",
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-8 text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D] md:mb-12">
          What Can Be Reported
        </h2>

        <div className="grid grid-cols-2 gap-2 md:gap-6 lg:grid-cols-4">
          {items.slice(0, 4).map((item) => (
            <div
              key={item}
              className="flex min-h-[72px] items-center justify-center rounded-lg bg-[#F8F9FA] px-3 py-3 text-center md:min-h-24 md:px-6 md:py-4"
            >
              <p className="font-[Inter] text-sm font-bold leading-5 text-[#2D5A3D] md:text-base md:leading-6">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-2 grid max-w-[910px] grid-cols-2 gap-2 md:mt-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {items.slice(4).map((item) => (
            <div
              key={item}
              className="flex min-h-[72px] items-center justify-center rounded-lg bg-[#F8F9FA] px-3 py-3 text-center md:min-h-24 md:px-6 md:py-4"
            >
              <p className="font-[Inter] text-sm font-bold leading-5 text-[#2D5A3D] md:text-base md:leading-6">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-[Inter] text-lg font-normal leading-8 text-[#666666] md:mt-14">
          <i>Every risk reported early is a cost avoided and a reputation
          preserved.</i>
        </p>
      </div>
    </section>
  );
}