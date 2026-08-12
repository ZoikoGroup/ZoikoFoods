import React from "react";

function BulletList({ items }: { items: { label?: string; text: string }[] }) {
  return (
    <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
      {items.map((item) => (
        <li key={item.text} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
          {item.label ? <span className="font-bold">{item.label}</span> : null}{" "}
          {item.text}
        </li>
      ))}
    </ul>
  );
}

const whatWeDo = [
  { text: "Sourcing and procurement of agricultural commodities and ingredients" },
  { text: "Manufacturing and production operations (owned and contract)" },
  { text: "Distribution and logistics management" },
  { text: "Brand development and portfolio management" },
];

const supplyChain = [
  { label: "Agricultural sourcing:", text: "Raw materials, commodities, and ingredients" },
  { label: "Contract manufacturing:", text: "Third-party production facilities" },
  { label: "Packaging materials:", text: "Primary and secondary packaging suppliers" },
  { label: "Logistics and warehousing:", text: "Transportation, storage, and distribution partners" },
  { label: "Services:", text: "Cleaning, security, maintenance, and temporary labor providers" },
];

const operationsCovered = [
  { text: "All owned and controlled entities, offices, and production sites" },
  { text: "Direct employees and on-site contractors" },
];

const supplyChainCoverage = [
  { label: "Tier 1 suppliers:", text: "Direct suppliers to Zoiko Foods Corp (primary focus)" },
  {
    label: "Tier 2+ suppliers:",
    text: "Suppliers to our suppliers (monitored where feasible and risk-appropriate)",
  },
];

export default function OurBusiness() {
  return (
    <section id="our-business" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          <span className="lg:hidden">
            1. Our Business,
            <br />
            Structure &amp; Supply
            <br />
            Chain
          </span>
          <span className="hidden lg:inline">1. Our Business, Structure &amp; Supply Chain</span>
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Organization Overview</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          <span className="font-bold">Entity Covered:</span> Zoiko Foods Corp and its controlled
          subsidiaries
        </p>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          <span className="font-bold">What We Do:</span> Zoiko Foods Corp is a global food and
          beverage company engaged in:
        </p>
        <BulletList items={whatWeDo} />
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          <span className="font-bold">Where We Operate:</span> Our operations span multiple
          regions including North America, the Caribbean, Europe, Africa, and Asia. We maintain
          offices, production facilities, and distribution networks across these markets.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Supply Chain Overview</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Our supply chain includes the following key categories:
        </p>
        <BulletList items={supplyChain} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Scope of This Statement</h3>
        <h4 className="mb-3 text-[17.6px] font-semibold text-[#2C2C2C]">Operations Covered</h4>
        <BulletList items={operationsCovered} />

        <h4 className="mb-3 text-[17.6px] font-semibold text-[#2C2C2C]">Supply Chain Coverage</h4>
        <BulletList items={supplyChainCoverage} />

        <h4 className="mb-3 text-[17.6px] font-semibold text-[#2C2C2C]">Exclusions</h4>
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          This statement does not cover third-party entities not controlled by Zoiko Foods Corp,
          including independent retailers, franchisees, or separate joint ventures where we lack
          operational control.
        </p>
      </div>
    </section>
  );
}
