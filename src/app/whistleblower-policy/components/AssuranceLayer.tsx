export default function AssuranceLayer() {
  const standards = [
    "FCPA",
    "SOX",
    "EU Directive",
    "PIDA",
    "UN Global Compact",
    "ISO 37001",
  ];

  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-8 text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D] md:mb-12">
          Assurance Layer
        </h2>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {standards.map((item) => (
            <div
              key={item}
              className="flex h-14 items-center justify-center rounded-lg bg-[#2D5A3D] px-6"
            >
              <span className="whitespace-nowrap font-[Inter] text-base font-bold leading-6 text-white">
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center font-[Inter] text-lg font-normal leading-8 text-[#666666]">
          Our system is globally aligned and independently benchmarked to reduce
          risk and improve{" "}
          <br className="hidden md:block" />
          investor confidence.
        </p>
      </div>
    </section>
  );
}
