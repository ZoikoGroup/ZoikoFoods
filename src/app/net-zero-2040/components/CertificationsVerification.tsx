export default function CertificationsVerification() {
  const certifications = [
    "SBTi",
    "RE100",
    "UN SDGs",
    "ISO 14064",
    "GHG Protocol",
  ];

  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 sm:mb-14 text-center font-[Georgia] text-xl sm:text-2xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          Certifications & Verification
        </h2>

        <div className="mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {certifications.map((item) => (
            <div
              key={item}
              className="rounded-lg bg-[#2D5A3D] px-5 sm:px-8 py-3 sm:py-4"
            >
              <span
                className={`font-[Inter] font-bold text-white ${
                  item === "ISO 14064" ? "text-xs sm:text-sm" : "text-sm sm:text-base"
                }`}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="mx-auto max-w-3xl text-center font-[Inter] text-sm sm:text-base lg:text-lg font-normal leading-6 sm:leading-8 text-[#666666]">
          Zoiko&apos;s roadmap is independently verified and aligned with
          regional frameworks.
        </p>
      </div>
    </section>
  );
}