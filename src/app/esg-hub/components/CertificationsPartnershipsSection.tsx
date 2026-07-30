export default function CertificationsPartnerships() {
  const certifications = [
    "UN SDGs",
    "HACCP",
    "ISO 22000",
    "ISO 14001",
    "Fair Trade",
    "WHO Partnerships",
    "GSMA Green Networks",
    "UNPRI",
    "Rainforest Alliance",
  ];

  return (
    <section className="bg-white-50 py-14 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-5">
        <h2 className="text-center text-[#2D5A3D] text-xl sm:text-2xl font-bold font-[Georgia] leading-8 sm:leading-[52px] mb-8 sm:mb-12">
          Certifications &amp; Partnerships
        </h2>

        {/* First Row - 5 boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-6 mb-4 sm:mb-7">
          {certifications.slice(0, 5).map((item) => (
            <div
              key={item}
              className="h-16 sm:h-20 bg-[#2D5A3D] rounded-lg flex items-center justify-center px-2 sm:px-4"
            >
              <p className="text-white text-xs sm:text-base font-bold font-[Inter] text-center leading-4 sm:leading-6">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 4 boxes (centered) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-[790px] mx-auto">
          {certifications.slice(5).map((item) => (
            <div
              key={item}
              className="h-16 sm:h-20 bg-[#2D5A3D] rounded-lg flex items-center justify-center px-2 sm:px-8"
            >
              <p className="text-white text-xs sm:text-base font-bold font-[Inter] text-center leading-4 sm:leading-6">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 sm:mt-12 text-center text-[#666666] text-sm sm:text-lg font-normal font-[Inter] leading-6 sm:leading-8">
          <i>Zoiko ESG Hub is aligned with UN SDGs and leading global standards
          across industries.</i>
        </p>
      </div>
    </section>
  );
}