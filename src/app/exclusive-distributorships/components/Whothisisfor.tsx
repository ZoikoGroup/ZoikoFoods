import React from "react";

const cards = [
  {
    title: <>National & Regional <br className="hidden lg:block" />Distributors</>,
    description: <>Established retail, wholesale, and <br className="hidden lg:block" />foodservice reach with proven market <br className="hidden lg:block" />coverage.</>,
    notFit: <>One-off resellers or opportunistic <br className="hidden lg:block" />traders</>,
  },
  {
    title: <>Importers & Export Agents</>,
    description: <>Customs, labeling, and compliance <br className="hidden lg:block" />capability with established cross-border <br className="hidden lg:block" />operations.</>,
    notFit: <>Dropship models without governance <br className="hidden lg:block" />capability</>,
  },
  {
    title: <>Retail Groups & Buying <br className="hidden lg:block" />Consortia</>,
    description: <>Territory-based representation models <br className="hidden lg:block" />with multi-location reach.</>,
    notFit: <>Applicants unwilling to comply with <br className="hidden lg:block" />channel discipline</>,
  },
  {
    title: <>Foodservice Operators</>,
    description: <>Multi-site and institutional distribution <br className="hidden lg:block" />reach with supply chain capability.</>,
    notFit: <>Single-location operations without <br className="hidden lg:block" />scalable infrastructure</>,
  },
];

export default function WhoThisIsFor() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold leading-[57.6px] text-green-950">
          Who This Is For
        </h2>
        <p className="mt-3 max-w-5xl text-lg font-normal leading-7 text-stone-500">
          We partner with established organizations that demonstrate market capability, operational discipline<br className="hidden lg:block" />
          and brand stewardship.
        </p>

        <div className="mt-10 flex flex-wrap gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-lg border border-neutral-200 bg-white p-8 w-full md:w-[380px] flex flex-col ${i === 3 ? 'h-auto md:h-[265px]' : 'h-auto md:h-[320px]'}`}
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4A574] mb-3">
                Typical Fit
              </span>
              <h3 className="text-[22px] font-bold leading-[1.4] text-[#1e442d] mb-4">
                {card.title}
              </h3>
              <p className={`text-[15px] font-normal leading-[1.6] text-zinc-800 ${i === 1 || i === 2 ? 'mb-6' : 'mb-6 md:mb-auto'}`}>
                {card.description}
              </p>
              <div className={`border-t border-neutral-200 pt-4 ${i === 1 || i === 2 ? '' : 'mt-auto'}`}>
                <p className="text-[14px] leading-[1.6]">
                  <span className="font-bold text-[#c2410c]">
                    Not a fit:
                  </span>{" "}
                  <span className="font-medium text-[#c2410c]">
                    {card.notFit}
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