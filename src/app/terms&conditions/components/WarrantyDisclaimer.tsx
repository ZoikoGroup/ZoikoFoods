import React from "react";

const disclaimedWarranties = [
  "Implied warranties of merchantability",
  "Fitness for a particular purpose",
  "Non-infringement",
  "Title",
  "Quiet enjoyment",
  "Warranties arising from course of dealing or usage of trade",
];

const noGuarantees = [
  "The Site will be uninterrupted, secure, or error-free",
  "Defects will be corrected",
  "The Site or servers are free of viruses or harmful components",
  "Information provided is accurate, complete, or reliable",
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

export default function WarrantyDisclaimer() {
  return (
    <section
      id="warranty-disclaimer"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          9. Disclaimer of Warranties
        </h2>

        <div className="mb-6 rounded-lg border-l-6 border-[#D4AF37] bg-[rgba(212,175,55,0.15)] p-6">
          <p className="mb-2 text-[17.6px] font-semibold text-[#2D5016]">
            ⚠️ Important Legal Notice
          </p>
          <p className="text-base uppercase leading-relaxed text-[#2C2C2C]">
            To the fullest extent permitted by applicable law, the Site and all services, content,
            and materials are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
            warranties of any kind, either express or implied.
          </p>
        </div>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Disclaimers</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Zoiko Foods Corp disclaims all warranties, including but not limited to:
        </p>
        <BulletList items={disclaimedWarranties} />

        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">We do not warrant that:</p>
        <BulletList items={noGuarantees} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Jurisdictional Variations</h3>
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          Some jurisdictions do not allow the exclusion of certain warranties. In such
          jurisdictions, the above exclusions may not apply to you, and you may have additional
          rights.
        </p>
      </div>
    </section>
  );
}
