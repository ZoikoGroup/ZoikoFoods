export default function RegionalEnforcement() {
  const regions = [
    {
      title: "USA",
      description:
        "Protected under SOX & FCPA — retaliation carries federal penalties.",
    },
    {
      title: "India",
      description:
        "Mandatory protection under Whistleblowers Protection Act.",
    },
    {
      title: "EU",
      description:
        "Directive requires 3-month response to whistleblower cases.",
    },
    {
      title: "Africa",
      description:
        "AU Anti-Corruption Convention applied, local labor codes reinforced.",
    },
    {
      title: "UK",
      description:
        "PIDA protects disclosures in public interest.",
    },
    {
      title: "LATAM",
      description:
        "Brazil & Mexico anti-corruption laws protect whistleblowers under ESG frameworks.",
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-8 text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D] md:mb-12">
          Regional Enforcement
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {regions.map((region) => (
            <div
              key={region.title}
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.10)]"
            >
              {/* Green Header */}
              <div className="flex h-11 items-center justify-center bg-[#2D5A3D]">
                <h3 className="font-[Inter] text-xl font-bold leading-8 text-white">
                  {region.title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex min-h-[115px] flex-1 items-center justify-center border-t border-[#F8F9FA] px-6 py-4 text-center">
                <p className="font-[Inter] text-base font-normal leading-6 text-[#333333]">
                  {region.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
