const regions = [
  {
    title: "United States",
    frameworks: (
      <>
        Foreign Corrupt Practices Act
        <br className="hidden md:block" />
        (FCPA), OSHA labor laws, FDA food safety.
      </>
    ),
    enforcement: (
      <>
        Any bribery or falsified FDA compliance =
        <br className="hidden md:block" />
        immediate termination + reporting to U.S. regulators.
      </>
    ),
    obligation: (
      <>
        Annual
        <br className="hidden md:block" />
        FDA/HACCP audit certification.
      </>
    ),
  },
  {
    title: "Africa",
    frameworks: (
      <>
        African Union Anti-Corruption Convention,
        <br className="hidden md:block" />
        national labor codes, emerging carbon standards.
      </>
    ),
    enforcement: (
      <>
        Child or forced labor = zero tolerance →
        <br className="hidden md:block" />
        immediate termination + NGO/regulatory reporting.
      </>
    ),
    obligation: (
      <>
        Proof of fair wage policies +
        <br className="hidden md:block" />
        participation in farmer empowerment audits.
      </>
    ),
  },
  {
    title: "European Union",
    frameworks: (
      <>
        EU Directive on Corporate Sustainability Due
        <br className="hidden md:block" />
        Diligence (CSDDD), GDPR, EU Packaging & Waste Directive.
      </>
    ),
    enforcement: (
      <>
        GDPR breaches = financial
        <br className="hidden md:block" />
        penalties, supplier contracts revoked.
      </>
    ),
    obligation: (
      <>
        Packaging aligned with
        <br className="hidden md:block" />
        EU law (Zoiko 2028 roadmap).
      </>
    ),
  },
  {
    title: "Asia-Pacific",
    frameworks: (
      <>
        China Anti-Unfair Competition Law, ASEAN
        <br className="hidden md:block" />
        Human Rights Declaration, APAC Plastics Pact.
      </>
    ),
    enforcement: (
      <>
        Misrepresentation in customs or export
        <br className="hidden md:block" />
        packaging = suspension + regional legal escalation.
      </>
    ),
    obligation: (
      <>
        Alignment with APAC
        <br className="hidden md:block" />
        packaging rules (plastic phase-outs).
      </>
    ),
  },
  {
    title: "India",
    frameworks: (
      <>
        Prevention of Corruption Act, Food Safety and
        <br className="hidden md:block" />
        Standards Authority of India (FSSAI).
      </>
    ),
    enforcement: (
      <>
        Breaches referred to FSSAI, risk of permanent
        <br className="hidden md:block" />
        blacklisting from Zoiko supply chain.
      </>
    ),
    obligation: (
      <>
        FSSAI certification
        <br className="hidden md:block" />
        mandatory for all Indian exports.
      </>
    ),
  },
  {
    title: "Latin America",
    frameworks: (
      <>
        Mexico General Climate Law, Brazil Anti-
        <br className="hidden md:block" />
        Corruption Law, Colombian Labor Code.
      </>
    ),
    enforcement: (
      <>
        Any environmental violation → corrective action within
        <br className="hidden md:block" />
        90 days or contract termination.
      </>
    ),
    obligation: (
      <>
        Proof of carbon reduction alignment
        <br className="hidden md:block" />
        with Zoiko Net Zero 2040.
      </>
    ),
  },
];

export default function RegionalEnforcement() {
  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2
          className="text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D]"
        >
          Regional Enforcement
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {regions.map((region, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-md"
            >
              {/* Header */}
              <div className="bg-[#2D5A3D] py-2 md:py-4">
                <h3
                  className="text-center font-[Inter] text-[14px] font-bold leading-6 text-white md:text-[18px] md:leading-8"
                >
                  {region.title}
                </h3>
              </div>

              {/* Body */}
              <div
                className="space-y-2.5 p-3 font-[Inter] text-[13px] leading-5 md:space-y-6 md:p-6 md:text-[16px] md:leading-6"
              >
                <p>
                  <span className="font-bold text-[#2D5A3D]">
                    Frameworks:
                  </span>{" "}
                  <span className="text-[#333333]">
                    {region.frameworks}
                  </span>
                </p>

                <p>
                  <span className="font-bold text-[#2D5A3D]">
                    Enforcement:
                  </span>{" "}
                  <span className="text-[#333333]">
                    {region.enforcement}
                  </span>
                </p>

                <p>
                  <span className="font-bold text-[#2D5A3D]">
                    Supplier Obligation:
                  </span>{" "}
                  <span className="text-[#333333]">
                    {region.obligation}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}