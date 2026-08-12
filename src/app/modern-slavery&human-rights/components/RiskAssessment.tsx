import React from "react";

const riskAreas = [
  {
    label: "Agricultural sourcing:",
    text: "Seasonal and temporary labor, migrant workers, informal employment",
  },
  {
    label: "Labor brokers and recruitment:",
    text: "Recruitment fees, debt bondage, deceptive recruitment practices",
  },
  {
    label: "Contract manufacturing:",
    text: "Subcontracting layers, labor-intensive processes, informal workforce",
  },
  {
    label: "Logistics and warehousing:",
    text: "Temporary labor, subcontracted drivers, informal arrangements",
  },
  { label: "Packaging and commodities:", text: "Labor-intensive extraction and processing" },
  {
    label: "Migrant worker vulnerability:",
    text: "Language barriers, document retention, restricted movement",
  },
];

const methodology = [
  { label: "Supplier Segmentation:", text: "Categorize suppliers by criticality, spend, geography, and labor intensity" },
  { label: "Risk Screening:", text: "Conduct initial risk assessment during supplier onboarding" },
  { label: "Documentation Review:", text: "Evaluate supplier responses to human rights questionnaires" },
  { label: "Targeted Audits:", text: "Conduct on-site assessments for higher-risk suppliers" },
  { label: "Remediation & Verification:", text: "Address findings and verify corrective actions" },
  { label: "Ongoing Monitoring:", text: "Refresh risk assessments periodically and when triggers emerge" },
];

export default function RiskAssessment() {
  return (
    <section
      id="risk-assessment"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          3. Risk Assessment
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Risk Principles</h3>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          Modern slavery risks vary by sector, geography, labor intensity, and supply chain
          complexity. We recognize that risks can exist at multiple points in our value chain, and
          we take a risk-based approach to identification and prioritization.
        </p>

        <div className="mb-8 rounded-lg border-l-6 border-[#D4AF37] bg-[rgba(212,175,55,0.15)] p-6">
          <p className="mb-2 text-[17.6px] font-semibold text-[#2D5016]">Important Note</p>
          <p className="text-base leading-relaxed text-[#2C2C2C]">
            The risk areas outlined below are not exhaustive. They represent areas where modern
            slavery risks are more commonly identified in the food and beverage sector. This does
            not imply that these risks are present in our operations or supply chain.
          </p>
        </div>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">
          <span className="lg:hidden">
            Typical Risk Areas in Food &amp;
            <br />
            Beverage Supply Chains
          </span>
          <span className="hidden lg:inline">Typical Risk Areas in Food &amp; Beverage Supply Chains</span>
        </h3>
        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {riskAreas.map((item) => (
            <li key={item.label} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              <span className="font-bold">{item.label}</span> {item.text}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">
          <span className="lg:hidden">
            Risk Assessment
            <br />
            Methodology
          </span>
          <span className="hidden lg:inline">Risk Assessment Methodology</span>
        </h3>
        <div className="space-y-4">
          {methodology.map((step) => (
            <div key={step.label} className="flex items-start gap-4">
              <span className="mt-0.5 size-8 shrink-0 rounded-full bg-[linear-gradient(135deg,rgb(212,175,55)_0%,rgb(184,148,30)_100%)] lg:bg-[linear-gradient(115deg,rgb(34,139,34)_0%,rgb(45,90,61)_50%,rgb(212,165,116)_100%),linear-gradient(135deg,rgb(212,175,55)_0%,rgb(184,148,30)_100%)]"
              />
              <p className="text-base leading-relaxed text-[#2C2C2C]">
                <span className="font-bold">{step.label}</span> {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
