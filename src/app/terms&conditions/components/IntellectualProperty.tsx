import React from "react";

const licenseGrants = [
  "Access and view Site Content for personal or internal business evaluation purposes",
  "Download and print reasonable portions for the same purposes",
];

const restrictions = [
  "Reproduce, distribute, modify, create derivative works, publicly display, or publicly perform Site Content without our express written permission",
  "Use our trademarks, logos, or brand assets without authorization",
  "Remove, alter, or obscure any copyright, trademark, or proprietary notices",
  "Use Site Content for commercial purposes or in a manner that suggests endorsement or affiliation without permission",
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

export default function IntellectualProperty() {
  return (
    <section
      id="intellectual-property"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          6. Intellectual Property &amp; Brand Use
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Ownership</h3>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          All content, materials, trademarks, service marks, logos, trade names, and other
          intellectual property displayed on or made available through the Site (&ldquo;Site
          Content&rdquo;) are the exclusive property of Zoiko Foods Corp or its licensors and are
          protected by copyright, trademark, and other intellectual property laws.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Limited License</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
          non-transferable, revocable license to:
        </p>
        <BulletList items={licenseGrants} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Restrictions</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">You may not:</p>
        <BulletList items={restrictions} />

        <div className="rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="mb-2 text-[17.6px] font-semibold text-[#2D5016]">Trademark Use</p>
          <p className="text-base leading-relaxed text-[#2C2C2C]">
            For guidelines on authorized use of Zoiko Foods Corp trademarks and brand assets,
            please contact our legal team. Unauthorized use may constitute trademark infringement
            and unfair competition.
          </p>
        </div>
      </div>
    </section>
  );
}
