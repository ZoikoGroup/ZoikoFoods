import React from "react";
import DataTable from "./DataTable";

const standards: [string, string][] = [
  ["No Forced Labor", "All work must be voluntary; no physical, psychological, or financial coercion"],
  ["No Child Labor", "Comply with minimum age laws; no hazardous work for young workers"],
  ["Freedom of Movement", "Workers are free to leave employment; no restriction on movement"],
  ["No Document Retention", "Workers retain possession of identity documents and passports"],
  ["No Recruitment Fees", "Workers do not pay fees to secure employment; employer covers costs"],
  ["Fair Wages", "Comply with minimum wage laws; pay on time and in full"],
  ["Safe Working Conditions", "Provide safe, healthy workplace; comply with health & safety laws"],
  [
    "Freedom of Association",
    "Respect workers' rights to organize and bargain collectively where permitted",
  ],
];

const responsibilities = [
  "Implement and maintain systems to prevent modern slavery in their operations",
  "Cascade these standards to their subcontractors and suppliers",
  "Provide evidence of compliance upon request",
  "Allow access for audits and inspections",
  "Report concerns or suspected violations promptly",
  "Cooperate with corrective action and remediation efforts",
];

export default function SupplierStandards() {
  return (
    <section
      id="supplier-standards"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          <span className="lg:hidden">
            5. Supplier
            <br />
            Standards &amp;
            <br />
            Expectations
          </span>
          <span className="hidden lg:inline">5. Supplier Standards &amp; Expectations</span>
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Core Requirements</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          All suppliers must comply with the following minimum standards:
        </p>
        <DataTable columns={["Standard", "Requirement"]} rows={standards} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Supplier Responsibilities</h3>
        <ul className="list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {responsibilities.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
