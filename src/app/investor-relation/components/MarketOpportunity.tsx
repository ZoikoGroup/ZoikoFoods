const marketData = [
  {
    value: (
      <>
        $3.5
        <br />
        Trillion
      </>
    ),
    title: (
      <>
        Global packaged food
        <br />
        market
      </>
    ),
  },
  {
    value: (
      <>
        $300
        <br />
        Billion
      </>
    ),
    title: <>Rice market alone</>,
  },
  {
    value: (
      <>
        $190
        <br />
        Billion
      </>
    ),
    title: <>Condiments & sauces</>,
  },
  {
    value: (
      <>
        $1.5
        <br />
        Trillion
      </>
    ),
    title: <>Beverages</>,
  },
];

export default function MarketOpportunity() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-4 xl:px-0">
        <h2
          className="mb-8 md:mb-12 text-center text-[24px] font-bold leading-[52px] text-[#2D5A3D]"
          style={{ fontFamily: "Georgia" }}
        >
          Market Opportunity
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-[42px]">
          {marketData.map((item, index) => (
            <div
              key={index}
              className="flex h-[224px] flex-col items-center justify-center rounded-lg bg-[#F8F9FA] text-center"
            >
              <h3
                className="text-[24px] font-bold leading-10 text-[#D4A574]"
                style={{ fontFamily: "Georgia" }}
              >
                {item.value}
              </h3>

              <p
                className="mt-8 text-[18px] leading-6 text-[#333333]"
                style={{ fontFamily: "Inter" }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mx-auto mt-10 md:mt-12 max-w-[1130px] text-center text-[16px] md:text-[18px] leading-8 text-[#666666]"
          style={{ fontFamily: "Inter" }}
        >
          <i>Zoiko Foods is uniquely positioned to capture underserved cultural
          niches while scaling into mainstream FMCG.</i>
        </p>
      </div>
    </section>
  );
}