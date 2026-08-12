import React from "react";

const excludedDamages = [
  "Indirect, incidental, special, consequential, or punitive damages",
  "Loss of profits, revenue, data, or business opportunities",
  "Loss of use, goodwill, or reputation",
  "Business interruption or procurement of substitute services",
  "Any damages arising from your use of or inability to use the Site",
  "Any damages based on any theory of liability (contract, tort, strict liability, or otherwise)",
];

const liabilityCap = [
  "One hundred US dollars (USD $100), or",
  "The amount you paid us (if any) in the twelve (12) months preceding the claim",
];

const preservedRights = [
  "Death or personal injury caused by our negligence",
  "Fraud or fraudulent misrepresentation",
  "Any liability that cannot be excluded or limited under applicable law",
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

export default function LimitationOfLiability() {
  return (
    <section
      id="limitation-of-liability"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          10. Limitation of Liability
        </h2>

        <div className="mb-6 rounded-lg border-l-6 border-[#D4AF37] bg-[rgba(212,175,55,0.15)] p-6">
          <p className="mb-2 text-[17.6px] font-semibold text-[#2D5016]">⚠️ Critical Limitation</p>
          <p className="text-base uppercase leading-relaxed text-[#2C2C2C]">
            Please read this section carefully. It limits Zoiko Foods Corp&rsquo;s liability to
            you.
          </p>
        </div>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Exclusion of Damages</h3>
        <p className="mb-4 text-base uppercase leading-relaxed text-[#2C2C2C]">
          To the fullest extent permitted by applicable law, in no event shall Zoiko Foods Corp,
          its affiliates, directors, officers, employees, agents, suppliers, or licensors be
          liable for:
        </p>
        <BulletList items={excludedDamages} />
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          This limitation applies <span className="font-bold">even if we have been advised of the possibility of such damages</span>.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Liability Cap</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          To the extent permitted by law, our total aggregate liability to you for all claims
          arising out of or related to your use of the Site shall not exceed the greater of:
        </p>
        <BulletList items={liabilityCap} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Preservation of Consumer Rights</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Nothing in these Terms excludes or limits our liability for:
        </p>
        <BulletList items={preservedRights} />
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          If you are a consumer in the European Union or United Kingdom, these limitations and
          exclusions apply only to the extent permitted by applicable consumer protection laws.
        </p>
      </div>
    </section>
  );
}
