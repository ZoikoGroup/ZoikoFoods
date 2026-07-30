export default function InvestorNews() {
  const news = [
    <>
      Zoiko Foods Secures
      <br />
      Exclusive
      <br />
      Distributorship for
      <br />
      Taj Mahal Rice
    </>,
    <>
      Zoiko Group
      <br />
      Expands Global Hubs
      <br />
      Across 5 Continents
    </>,
    <>
      Packaging Roadmap
      <br />
      Targets 2028
      <br />
      Milestone
    </>,
  ];

  return (
    <section className="bg-[#E8ECEB] py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-4 xl:px-0">
        <h2
          className="mb-10 md:mb-16 text-center text-[24px] font-bold leading-[52px] text-[#2D5A3D]"
          style={{ fontFamily: "Georgia" }}
        >
          Investor News & Updates
        </h2>

        <div className="mb-10 md:mb-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {news.map((item, index) => (
            <div
              key={index}
              className="flex h-[240px] md:h-[288px] items-center justify-center rounded-xl bg-[#F8F9FA] px-8 text-center"
            >
              <h3
                className="text-[20px] font-bold leading-10 text-[#2D5A3D]"
                style={{ fontFamily: "Georgia" }}
              >
                {item}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="h-14 w-full max-w-60 rounded-lg border-2 border-[#2D5A3D] bg-transparent text-[16px] md:text-[18px] font-bold text-[#2D5A3D] transition hover:bg-[#2D5A3D] hover:text-white"
            style={{ fontFamily: "Arial" }}
          >
            Follow Our Journey
          </button>
        </div>
      </div>
    </section>
  );
}