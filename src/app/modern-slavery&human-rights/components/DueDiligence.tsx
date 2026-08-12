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

const onboarding = [
  { label: "Identification and verification:", text: "Legal entity verification, ownership structure" },
  {
    label: "Modern slavery questionnaire:",
    text: "Assessment of labor practices, recruitment, and working conditions",
  },
  {
    label: "Code of Conduct acceptance:",
    text: "Suppliers must acknowledge and accept our Supplier Code of Conduct",
  },
  { label: "Sanctions screening:", text: "Check against relevant sanctions lists and adverse media" },
  {
    label: "Risk-based documentation:",
    text: "Request certifications, audits, or supporting evidence for higher-risk suppliers",
  },
];

const contractualControls = [
  {
    label: "Prohibition clauses:",
    text: "Explicit prohibition of forced labor, child labor, and human trafficking",
  },
  { label: "No recruitment fees:", text: "Workers must not be charged fees to obtain employment" },
  { label: "No passport retention:", text: "Workers must retain possession of their identity documents" },
  { label: "Audit rights:", text: "We reserve the right to audit suppliers and request evidence" },
  { label: "Cascade obligations:", text: "Suppliers must flow down standards to their subcontractors" },
  {
    label: "Corrective action:",
    text: "Suppliers must implement corrective action plans for identified issues",
  },
  { label: "Termination rights:", text: "We reserve the right to terminate for material breaches" },
];

const monitoring = [
  { label: "Desktop reviews:", text: "Ongoing review of documentation and questionnaire responses" },
  {
    label: "On-site audits:",
    text: "Physical inspections for higher-risk suppliers or when red flags emerge",
  },
  {
    label: "Worker interviews:",
    text: "Confidential interviews with workers during audits (where safe and feasible)",
  },
  { label: "Third-party audits:", text: "Use of accredited third-party auditors with proper oversight" },
  { label: "Re-audits:", text: "Follow-up audits to verify closure of corrective actions" },
];

const redFlags = [
  { text: "Evidence of recruitment fees or debt bondage" },
  { text: "Withholding of identity documents or passports" },
  { text: "Restrictions on worker movement or excessive overtime" },
  { text: "Undisclosed or unusual subcontracting arrangements" },
  { text: "Worker complaints or whistleblower reports" },
  { text: "Audit findings indicating non-compliance with labor standards" },
  { text: "Adverse media or NGO reports about a supplier" },
];

export default function DueDiligence() {
  return (
    <section id="due-diligence" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          <span className="lg:hidden">
            4. Due Diligence &amp;
            <br />
            Controls
          </span>
          <span className="hidden lg:inline">4. Due Diligence &amp; Controls</span>
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Supplier Onboarding Controls</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          New suppliers undergo the following due diligence before onboarding:
        </p>
        <BulletList items={onboarding} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Contractual Controls</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Our supplier contracts include the following provisions:
        </p>
        <BulletList items={contractualControls} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Monitoring &amp; Audit Approach</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          We use a risk-based approach to supplier monitoring:
        </p>
        <BulletList items={monitoring} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Red Flags &amp; Escalation Triggers</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          The following indicators trigger escalation and investigation:
        </p>
        <BulletList items={redFlags} />
      </div>
    </section>
  );
}
