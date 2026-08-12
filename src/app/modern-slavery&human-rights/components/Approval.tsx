import React from "react";

const cadence = [
  "At least annually to ensure accuracy and reflect current practices",
  "When material changes occur in our business, operations, or supply chain",
  "When regulatory requirements or best practices evolve",
];

export default function Approval() {
  return (
    <section id="approval" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-xl border-2 border-[#D4AF37] bg-[#F5F5F5] p-6 sm:p-8">
          <h2 className="mb-6 text-[20.8px] font-semibold text-[#2D5016]">
            <span className="lg:hidden">
              Statement Approval &amp;
              <br />
              Sign-Off
            </span>
            <span className="hidden lg:inline">Statement Approval &amp; Sign-Off</span>
          </h2>

          <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-12">
            <div>
              <p className="text-base font-semibold text-[#2D5016]">Approved By</p>
              <p className="mt-1 text-base text-[#2C2C2C]">Board of Directors, Zoiko Foods Corp</p>
            </div>
            <div>
              <p className="text-base font-semibold text-[#2D5016]">Reporting Period</p>
              <p className="mt-1 text-base text-[#2C2C2C]">Fiscal Year 2025</p>
            </div>
            <div>
              <p className="text-base font-semibold text-[#2D5016]">Date of Approval</p>
              <p className="mt-1 text-base text-[#2C2C2C]">January 30, 2026</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-base font-semibold text-[#2D5016]">Next Review</p>
            <p className="mt-1 text-base text-[#2C2C2C]">
              January 2027 (or sooner if material changes occur)
            </p>
          </div>

          <div className="border-t-2 border-[#2C2C2C] pt-6 text-[14.4px] font-bold text-[#8B8B8B]">
            <p className="mb-4">
              Signed: <span className="font-normal">_______________________________</span>
            </p>
            <p className="mb-1">
              Name: <span className="font-normal">[Authorized Signatory Name]</span>
            </p>
            <p className="mb-1">
              Title: <span className="font-normal">[Chief Executive Officer / Board Chair]</span>
            </p>
            <p>
              Date: <span className="font-normal">January 30, 2026</span>
            </p>
          </div>
        </div>

        <h3 className="mb-3 mt-8 text-[20.8px] font-semibold text-[#1A3309]">Review Cadence</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          This statement is reviewed and updated:
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {cadence.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          Updated statements are published on our website and communicated to relevant
          stakeholders.
        </p>
      </div>
    </section>
  );
}
