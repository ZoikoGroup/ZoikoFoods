const cards = [
  {
    title: (
      <>
        Retailers &amp;
        <br className="hidden lg:block" />
        Supermarkets
      </>
    ),
    description:
      "National and regional grocery chains, specialty food retailers, and ethnic market operators seeking authentic Caribbean products with retail-ready packaging and documentation.",
  },
  {
    title: (
      <>
        Distributors &amp;
        <br className="hidden lg:block" />
        Wholesalers
      </>
    ),
    description:
      "Food service distributors, broadline wholesalers, and specialty distributors requiring consistent supply, case pack flexibility, and multi-market compliance.",
  },
  {
    title: "Food Service & QSR",
    description:
      "Restaurant groups, quick-service restaurants, hospitality providers, and institutional food service operations seeking authentic Caribbean flavors at scale.",
  },
  {
    title: (
      <>
        Private-Label Brand
        <br className="hidden lg:block" />
        Owners
      </>
    ),
    description:
      "Retailers and brands seeking turnkey private-label manufacturing with formulation support, custom packaging, labeling services, and quality consistency.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="font-inter">
      <h2 className="text-[32px] font-bold leading-[1.6] text-[#2d5016]">
        Who We Serve
      </h2>
      <p className="mt-3 max-w-[337px] text-[16.8px] leading-[1.6] text-[#8b8b8b] lg:max-w-[1081px]">
        Zoiko Foods Corp partners with institutional buyers seeking reliable
        Caribbean food products and private-label manufacturing capability.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="rounded-xl border bg-white p-7 shadow-[0px_2px_4px_rgba(0,0,0,0.04)]"
            style={{ borderColor: "rgba(212,175,55,0.2)" }}
          >
            <h3 className="text-[17.6px] font-bold leading-[1.6] text-[#2d5016]">
              {card.title}
            </h3>
            <p className="mt-4 text-[15.2px] leading-[1.5] text-[#2c2c2c]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
