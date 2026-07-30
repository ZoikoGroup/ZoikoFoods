const certifications = [
  {
    region: "USA",
    details: "FDA, HACCP",
  },
  {
    region: "EU",
    details: (
      <>
        BRCGS, ISO 22000,
        <br />
        GDPR
      </>
    ),
  },
  {
    region: "India",
    details: "FSSAI",
  },
  {
    region: "Africa",
    details: "ISO 9001, Fair Trade",
  },
  {
    region: "Global",
    details: (
      <>
        Rainforest Alliance,
        <br />
        ESG reporting
        <br />
        alignment
      </>
    ),
  },
];

export default function GlobalCertificationsMapSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-center text-[#2D5A3D] text-2xl font-bold font-[Georgia] leading-[52px]">
          Global Certifications Map
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="h-auto md:h-40 py-6 md:py-0 bg-[#F8F9FA] rounded-lg flex flex-col items-center justify-center text-center px-4"
            >
              <h3 className="text-[#2D5A3D] text-lg font-bold font-[Georgia] leading-6">
                {item.region}
              </h3>

              <p className="mt-8 text-[#333333] text-base font-normal font-['Inter'] leading-6">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}