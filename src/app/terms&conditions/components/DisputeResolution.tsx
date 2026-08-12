import React from "react";

export default function DisputeResolution() {
  return (
    <section
      id="dispute-resolution"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          14. Dispute Resolution
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Informal Resolution</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Before initiating formal legal proceedings, we encourage you to contact us to seek an
          informal resolution. Many disputes can be resolved quickly and efficiently through
          direct communication.
        </p>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          Please contact our legal team at{" "}
          <a href="mailto:legal@zoikofoods.com" className="font-semibold text-[#2D5016] underline">
            legal@zoikofoods.com
          </a>{" "}
          with a detailed description of your concern.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Binding Arbitration (If Applicable)</h3>
        <p className="mb-6 text-base italic leading-relaxed text-[#2C2C2C]">
          [This section would be completed based on legal review and business requirements.
          Arbitration clauses vary significantly by jurisdiction and business model.]
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">
          Class Action Waiver (If Applicable)
        </h3>
        <p className="mb-6 text-base italic leading-relaxed text-[#2C2C2C]">
          [This section would be completed based on legal review. Class action waivers are highly
          regulated and may not be enforceable in all jurisdictions.]
        </p>

        <div className="rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="text-base leading-relaxed text-[#2C2C2C]">
            <span className="font-semibold text-[#2D5016]">Legal Review Required:</span>{" "}
            Arbitration and class action waiver provisions must be carefully drafted and reviewed
            by qualified legal counsel to ensure enforceability and compliance with applicable
            laws.
          </p>
        </div>
      </div>
    </section>
  );
}
