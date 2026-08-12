import React from "react";
import DataTable from "./DataTable";

const policies = [
  { label: "Code of Conduct:", text: "Sets expectations for ethical behavior across our organization" },
  {
    label: "Supplier Code of Conduct:",
    text: "Establishes labor, health & safety, and ethical standards for suppliers",
  },
  { label: "Human Rights Policy:", text: "Affirms our commitment to internationally recognized human rights" },
  {
    label: "Whistleblowing / Speak Up Policy:",
    text: "Provides safe channels for reporting concerns",
  },
  {
    label: "Anti-Bribery & Anti-Corruption Policy:",
    text: "Addresses corruption risks that may enable exploitation",
  },
  { label: "Procurement Standards:", text: "Governs supplier onboarding and ongoing management" },
];

const governance: [string, string][] = [
  ["Board of Directors", "Sets strategic direction, approves statement, provides oversight"],
  ["Executive Management", "Ensures resources and accountability for implementation"],
  ["Compliance / ESG", "Maintains policy framework, coordinates reporting, manages escalations"],
  ["Procurement", "Conducts supplier due diligence, manages contracts and audits"],
  ["Operations", "Implements on-site labor standards, manages contractors"],
  ["Internal Audit", "Provides independent assurance over controls (where applicable)"],
];

export default function PoliciesGovernance() {
  return (
    <section
      id="policies-governance"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          <span className="lg:hidden">
            2. Policies &amp;
            <br />
            Governance
            <br />
            Framework
          </span>
          <span className="hidden lg:inline">2. Policies &amp; Governance Framework</span>
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Policy Framework</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Our commitment to preventing modern slavery is supported by the following policies:
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {policies.map((item) => (
            <li key={item.label} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              <span className="font-bold">{item.label}</span> {item.text}
            </li>
          ))}
        </ul>

        <div className="mb-8 rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="text-base leading-relaxed text-[#2C2C2C]">
            <span className="font-bold">Policy Access:</span> These policies are available to
            employees and can be shared with suppliers and stakeholders upon request. Contact{" "}
            <a href="mailto:compliance@zoikofoods.com" className="font-semibold text-[#2D5016] underline">
              compliance@zoikofoods.com
            </a>{" "}
            for more information.
          </p>
        </div>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">
          Governance &amp; Accountability
        </h3>
        <DataTable columns={["Function", "Responsibility"]} rows={governance} />
      </div>
    </section>
  );
}
