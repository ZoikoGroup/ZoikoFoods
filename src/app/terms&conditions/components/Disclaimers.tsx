import React from "react";

const noReliance = [
  "The accuracy, completeness, reliability, or currency of any information",
  "The suitability or fitness of products or services for any particular purpose",
  "The availability of products in your market or region",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
      {items.map((item) => (
        <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">{item}</li>
      ))}
    </ul>
  );
}

export default function Disclaimers() {
  return (
    <section
      id="disclaimers"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          7. Product &amp; Information Disclaimers
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Information Provided &lsquo;As Is&rsquo;</h3>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          Information provided on the Site, including product descriptions, specifications,
          images, pricing, and availability, is for general informational purposes only and is
          provided &ldquo;as is&rdquo; without warranties of any kind.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">No Reliance Warranty</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          We make no warranties or representations regarding:
        </p>
        <BulletList items={noReliance} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Subject to Change</h3>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          Product specifications, packaging, formulations, ingredients, pricing, and availability
          may vary by market and are subject to change without notice. Always verify current
          information with authorized distributors or retailers.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">No Health or Nutritional Claims</h3>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          Unless expressly stated in official, approved materials, no health, nutritional,
          allergen, or dietary claims are made or implied. Consult product packaging and labels
          for authoritative information.
        </p>

        <div className="rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="text-base leading-relaxed text-[#2C2C2C]">
            <span className="font-bold">Important:</span> Do not rely solely on
            website information for critical decisions. Always verify product details, allergen
            information, and nutritional data from official packaging or contact us directly.
          </p>
        </div>
      </div>
    </section>
  );
}
