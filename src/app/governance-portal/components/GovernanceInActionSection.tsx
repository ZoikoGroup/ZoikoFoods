const actionCards = [
  {
    title: "Supplier Ethics",
    description: (
      <>
        Every contract tied to Zoiko&apos;s Supplier &amp;
        <br />
        Distributor Code of Ethics
      </>
    ),
  },
  {
    title: "Whistleblower System",
    description: (
      <>
        Anonymous reporting system in place
        <br />
        from day one
      </>
    ),
  },
  {
    title: "Board ESG Oversight",
    description: (
      <>
        Early tracking of packaging &amp; energy
        <br />
        milestones → no lag in sustainability
      </>
    ),
  },
];

export default function GovernanceInActionSection() {
  return (
    <section className="w-full bg-[#F8F9FA] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-center text-[#2D5A3D] text-2xl font-bold font-[Georgia] leading-[52px]">
          Governance in Action
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {actionCards.map((card, index) => (
            <div
              key={index}
              className="h-auto md:h-44 bg-white rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.10)] p-6 md:p-9 flex flex-col justify-start"
            >
              <h3 className="text-[#2D5A3D] text-xl font-bold font-[Georgia] leading-10">
                {card.title}
              </h3>

              <p
                className="mt-6 text-[#333333] text-sm font-normal font-['Inter'] leading-6"
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}