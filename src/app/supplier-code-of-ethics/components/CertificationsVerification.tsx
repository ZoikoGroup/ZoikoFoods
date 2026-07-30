const certifications = [
  "HACCP",
  "ISO 22000",
  "FDA",
  "FSSAI",
  "BRCGS",
  "Fair Trade",
  "UN SDGs",
  "Rainforest Alliance",
  "SA8000",
];

export default function CertificationsVerification() {
  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <h2
          className="text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D]"
        >
          Certifications & Verification
        </h2>

        {/* Certification Badges */}
        <div className="mt-6 grid grid-cols-2 gap-1.5 md:mt-12 md:flex md:flex-wrap md:justify-center md:gap-5">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg bg-[#2D5A3D] px-2.5 py-2 md:px-8 md:py-4"
            >
              <p
                className={`text-center font-[Inter] font-bold leading-4 text-white md:leading-6 ${
                  item === "ISO 22000" || item === "SA8000"
                    ? "text-[11px] md:text-[14px]"
                    : "text-[12px] md:text-[16px]"
                }`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p
          className="mx-auto mt-12 max-w-4xl text-center font-[Inter] text-lg leading-8 text-[#666666]"
        >
          <i>Every Zoiko supplier must hold valid certifications in their region,
          subject to verification audits.</i>
        </p>
      </div>
    </section>
  );
}