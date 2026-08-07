export default function BrandGovernance() {
  const cards = [
    {
      title: "Food Safety & Quality",
      desc: "Management systems ensuring product excellence",
      mobileDesc: "Management systems ensuring product<br />excellence",
    },
    {
      title: "Supplier Audits",
      desc: "Ethical sourcing standards across supply chain",
      mobileDesc: "Ethical sourcing standards across supply<br />chain",
    },
    {
      title: "Regulatory Compliance",
      desc: "Standards across all operating markets",
    },
    {
      title: "Traceability",
      desc: "Complete recall readiness protocols",
    },
  ];

  return (
    <section className="w-full bg-white flex justify-center py-12 md:py-16 px-6">
      <div className="w-full max-w-[1212px] flex flex-col gap-6 md:gap-8">
        {/* Header Section */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h2
            className="text-[#2D5A3D] text-[28px] leading-[36px] md:text-4xl font-bold md:leading-[56.32px]"
            style={{ fontFamily: "Segoe UI" }}
          >
            <span className="hidden md:inline">
              Brand Governance, Quality &amp; Compliance
            </span>
            <span className="md:hidden">
              Brand Governance,<br />Quality &amp; Compliance
            </span>
          </h2>
          <p
            className="text-zinc-600 text-[17px] leading-[28px] md:text-lg font-normal md:leading-8 max-w-[895px]"
            style={{ fontFamily: "Segoe UI" }}
          >
            <span className="hidden md:inline">
              All Zoiko Foods brands and private‑label programs operate under
              unified governance frameworks covering:
            </span>
            <span className="md:hidden">
              All Zoiko Foods brands and private-label<br />
              programs operate under unified<br />
              governance frameworks covering:
            </span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-full bg-gray-50 rounded-sm border-l-[3px] md:border-l-4 border-[#2D5A3D] pt-5 pl-5 pb-5 pr-4 md:pt-6 md:pl-7 md:pb-6 md:pr-4 flex flex-col gap-2 md:gap-[11px]"
            >
              <h3
                className="text-[#2D5A3D] text-[16px] leading-[24px] md:text-base font-bold md:leading-6"
                style={{ fontFamily: "Segoe UI" }}
              >
                {card.title}
              </h3>
              <p
                className="text-zinc-900 text-[15px] leading-[24px] md:text-base font-normal md:leading-6"
                style={{ fontFamily: "Segoe UI" }}
              >
                {card.mobileDesc ? (
                  <>
                    <span className="hidden md:inline">{card.desc}</span>
                    <span
                      className="md:hidden"
                      dangerouslySetInnerHTML={{ __html: card.mobileDesc }}
                    />
                  </>
                ) : (
                  card.desc
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
