export default function ProofOfSuccess() {
  const successCards = [
    {
      title: "Caribbean",
      text: (
        <>
          Full multi-brand rollout — <span className="font-bold">30% retail<br />penetration in Year 1</span>
        </>
      ),
    },
    {
      title: "Africa (5 markets)",
      text: (
        <>
          Complete portfolio launch — <span className="font-bold">25-40%<br />sales growth within 24 months</span>
        </>
      ),
    },
    {
      title: "Americas",
      text: (
        <>
          End-to-end category expansion — <br />
          <span className="font-bold">
            portfolio across retail, QSR,<br />
            beverages, café, wines
          </span>
        </>
      ),
    },
  ];

  return (
    <section className="w-full h-auto sm:h-100 bg-[#F8F9FA] relative overflow-hidden py-12 sm:py-0 px-5 sm:px-0">
      <div className="w-full sm:w-[1200px] h-auto sm:h-64 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-[80px]">
        {/* Heading */}
        <h2 className="sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 text-center text-[#2D5A3D] text-[22px] sm:text-2xl font-bold font-['Georgia'] leading-8 mb-8 sm:mb-0">
          Proof of Success
        </h2>

        {/* Cards */}
        <div className="sm:absolute sm:top-[79px] sm:left-0 w-full flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-0 sm:px-5">
          {successCards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[360px] h-auto py-6 sm:h-44 bg-white rounded-lg shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] px-6 sm:px-9 sm:pt-7"
            >
              {/* Title */}
              <h3 className="text-[#2D5A3D] text-lg sm:text-xl font-bold font-['Georgia'] leading-6">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-4 sm:mt-5 text-zinc-800 text-[14px] font-normal font-['Inter'] leading-snug sm:leading-6">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}