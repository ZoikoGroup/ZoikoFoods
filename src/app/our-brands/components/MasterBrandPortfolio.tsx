export default function MasterBrandPortfolio() {
  const categories = [
    {
      title: "QSR, Dining & Prepared Foods",
      mobileTitle: "QSR, Dining & Prepared<br />Foods",
      subtitle:
        "High‑volume brands engineered for quick‑service, casual dining, and prepared meal occasions.",
      mobileSubtitle:
        "High-volume brands engineered for quick-<br />service, casual dining, and prepared meal<br />occasions.",
      layout: "grid-cols-1 md:grid-cols-3",
      cards: [
        {
          title: "NoxxChicken",
          desc: "Flagship quick-service chicken brand focused on flavor consistency and operational scalability.",
          mobileDesc: "Flagship quick-service chicken brand<br />focused on flavor consistency and<br />operational scalability.",
        },
        {
          title: "NoxxChicken UK",
          desc: "UK-specific variant aligned with local sourcing, compliance, and retail expectations.",
          mobileDesc: "UK-specific variant aligned with local<br />sourcing, compliance, and retail<br />expectations.",
        },
        {
          title: "Zoiko Kitchen",
          desc: "Ready-to-cook and ready-to-serve meals for retail and foodservice distribution.",
          mobileDesc: "Ready-to-cook and ready-to-serve<br />meals for retail and foodservice<br />distribution.",
        },
        {
          title: "Noxx Patties",
          desc: "Protein and plant-forward patties for QSR, foodservice, and retail freezer aisles.",
          mobileDesc: "Protein and plant-forward patties for<br />QSR, foodservice, and retail freezer<br />aisles.",
        },
      ],
    },
    {
      title: "Sauces, Condiments & Flavor Brands",
      subtitle:
        "Culinary flavor brands designed for both household use and professional kitchens.",
      layout: "grid-cols-1",
      cards: [
        {
          title: "Noxx Caribbean Taste",
          desc: "Caribbean‑inspired sauces and condiments rooted in traditional flavor profiles and everyday usability.",
        },
      ],
    },
    {
      title: "Ginger-Infused Products Platform",
      subtitle:
        "Ginger‑infused products spanning baked goods, beverages, and condiments.",
      layout: "grid-cols-1",
      cards: [
        {
          title: "GingerNoxx",
          desc: "A ginger‑centric brand focused on baked products, juices, and condiments infused with ginger, engineered for consistent flavor delivery, shelf stability, and broad retail appeal.",
        },
      ],
    },
    {
      title: "Beverage",
      subtitle:
        "Everyday and functional beverage brands across multiple consumption occasions.",
      layout: "grid-cols-1 md:grid-cols-3",
      cards: [
        {
          title: "AquaNoxx",
          desc: "Hydration‑focused water brand designed for everyday consumption.",
        },
        {
          title: "Noxx Juices",
          desc: "Fruit and blended juice products for mass retail distribution.",
        },
        {
          title: "VitaNoxx",
          desc: "Functional and fortified beverages positioned for modern lifestyles.",
        },
        {
          title: "Noxx Beverages",
          desc: "Umbrella platform for carbonated and non-carbonated drink formats.",
        },
        {
          title: "Noxx Wines",
          desc: "Select wine offerings for retail and hospitality channels.",
        },
      ],
    },
    {
      title: "Hot Beverages",
      subtitle:
        "Daily ritual beverages with accessible, consistent positioning.",
      layout: "grid-cols-1 md:grid-cols-2",
      cards: [
        {
          title: "Zoiko Coffee",
          desc: "Coffee products focused on consistency, sourcing discipline, and everyday consumption.",
        },
        {
          title: "Zoiko Teas",
          desc: "Tea collections designed for daily use and international markets.",
        },
      ],
    },
    {
      title: "Pantry & Essentials",
      subtitle:
        "Core food staples delivered at scale for households, institutions, and private‑label programs.",
      layout: "grid-cols-1",
      cards: [
        {
          title: "Zoiko Essentials",
          desc: "Sugar, flour, edible oil, rice, nuts, and frozen essentials.",
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 px-6 flex justify-center">
      <div className="w-full max-w-[1215px] flex flex-col gap-8 md:gap-12">
        {/* Main Heading */}
        <h2
          className="text-[#2D5A3D] text-[22px] leading-8 md:text-4xl font-bold md:leading-[56.32px]"
          style={{ fontFamily: "Segoe UI" }}
        >
          Master Brand Portfolio
        </h2>

        {/* Categories */}
        <div className="flex flex-col gap-12 md:gap-16">
          {categories.map((category, idx) => (
            <div key={idx} className="flex flex-col gap-6 md:gap-8">
              {/* Category Header */}
              <div className="flex flex-col gap-2 md:gap-2">
                <h3
                  className="text-[#2D5A3D] text-[22px] md:text-2xl font-bold leading-8 md:leading-10"
                  style={{ fontFamily: "Segoe UI" }}
                >
                  {category.mobileTitle ? (
                    <>
                      <span className="hidden md:inline">{category.title}</span>
                      <span
                        className="md:hidden"
                        dangerouslySetInnerHTML={{ __html: category.mobileTitle }}
                      />
                    </>
                  ) : (
                    category.title
                  )}
                </h3>
                <p
                  className="text-gray-500 text-[15px] md:text-base font-normal italic leading-6"
                  style={{ fontFamily: "Segoe UI" }}
                >
                  {category.mobileSubtitle ? (
                    <>
                      <span className="hidden md:inline">{category.subtitle}</span>
                      <span
                        className="md:hidden"
                        dangerouslySetInnerHTML={{ __html: category.mobileSubtitle }}
                      />
                    </>
                  ) : (
                    category.subtitle
                  )}
                </p>
              </div>

              {/* Category Cards */}
              <div className={`grid gap-5 md:gap-6 ${category.layout}`}>
                {category.cards.map((card, cardIdx) => (
                  <div
                    key={cardIdx}
                    className="bg-white rounded-lg p-6 md:p-8 flex flex-col gap-3 md:gap-4 shadow-[0px_4px_16px_rgba(0,0,0,0.06)]"
                  >
                    <h4
                      className="text-[#2D5A3D] text-lg md:text-2xl font-bold leading-7 md:leading-9"
                      style={{ fontFamily: "Segoe UI" }}
                    >
                      {card.title}
                    </h4>
                    <p
                      className="text-zinc-600 text-[14px] md:text-base font-normal leading-[22px] md:leading-6"
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
          ))}
        </div>
      </div>
    </section>
  );
}
