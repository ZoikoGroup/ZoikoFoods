const hubCards = [
  {
    title: (
      <>
        Submit Anonymous
        <br />
        Report
      </>
    ),
    description: "Secure, encrypted portal available 24/7",
  },
  {
    title: "Independent Ombudsman",
    description: "Third-party review and consultation",
  },
  {
    title: "Policy Download",
    description: "Complete whistleblower protection policy",
  },
];

export default function WhistleblowerEthicsHubSection() {
  return (
    <section className="w-full bg-[#F8F9FA] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-center text-[#2D5A3D] text-2xl font-bold font-[Georgia] leading-[52px]">
          Whistleblower &amp; Ethics Hub
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {hubCards.map((card, index) => (
            <div
              key={index}
              className="h-auto md:h-72 py-10 md:py-0 bg-white rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center text-center px-6 md:px-8"
            >
              <h3 className="text-[#2D5A3D] text-xl font-bold font-[Georgia] leading-10">
                {card.title}
              </h3>

              <p className="mt-10 text-[#666666] text-sm font-normal font-['Inter'] leading-6">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}