const certifications = [
  "HACCP",
  "ISO 22000",
  "ISO 14001",
  "FDA",
  "FSSAI",
  "Fair Trade",
  "Rainforest\nAlliance",
  "UN SDGs",
];

export default function CertificationsSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-2 md:px-6">
        <h2 className="mb-10 md:mb-16 text-center font-[Georgia] text-[15px] min-[375px]:text-[17px] sm:text-xl md:text-3xl font-bold leading-tight md:leading-[52px] text-[#2D5A3D] whitespace-nowrap">
          Global Standards & Certifications
        </h2>

        <div className="grid grid-cols-4 gap-2 md:gap-5 lg:grid-cols-8">
          {certifications.map((item) => (
            <div
              key={item}
              className="flex h-14 md:h-20 items-center justify-center rounded-md md:rounded-lg bg-[#2D5A3D] px-1 md:px-2 text-center shadow-sm"
            >
              <p className="whitespace-pre-line font-[Inter] text-[9px] min-[375px]:text-[10px] sm:text-[11px] font-bold leading-tight text-white md:text-sm">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 md:mt-12 max-w-3xl text-center font-[Inter] text-[13px] sm:text-sm md:text-lg font-normal leading-[26px] md:leading-8 text-[#666666]">
          <i>
            Our sustainability commitments are
            <br className="block md:hidden" />
            {" "}benchmarked against — and often ahead
            <br className="block md:hidden" />
            {" "}of — global FMCG leaders and international
            <br className="block md:hidden" />
            {" "}frameworks.
          </i>
        </p>
      </div>
    </section>
  );
}