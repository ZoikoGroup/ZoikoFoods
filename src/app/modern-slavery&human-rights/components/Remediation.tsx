import React from "react";

const principles = [
  { label: "Worker-centered:", text: "Remediation must not harm the workers it is intended to protect" },
  { label: "Proportionate:", text: "Response is proportionate to severity and supplier cooperation" },
  { label: "Time-bound:", text: "Corrective actions have clear deadlines" },
  { label: "Verified:", text: "Completion is verified through evidence and follow-up" },
  {
    label: "Transparent:",
    text: "Workers and relevant stakeholders are informed of outcomes where appropriate",
  },
];

const processSteps = [
  { label: "Issue Identified:", text: "Through audit, monitoring, whistleblower report, or other channel" },
  {
    label: "Triage Severity:",
    text: "Assess severity (critical / major / minor) and immediate risk to workers",
  },
  {
    label: "Immediate Actions:",
    text: "For critical issues, take immediate containment actions to protect workers",
  },
  {
    label: "Corrective Action Plan:",
    text: "Develop time-bound plan with supplier; secure commitment",
  },
  {
    label: "Implementation & Monitoring:",
    text: "Supplier implements plan; we monitor progress",
  },
  { label: "Verification:", text: "Verify completion through desktop review or follow-up audit" },
  { label: "Closure & Learning:", text: "Close issue, document learnings, improve controls" },
];

const escalation = [
  { text: "Escalate to executive management and board where appropriate" },
  { text: "Suspend business while remediation is underway" },
  { text: "Terminate the supplier relationship for material or unresolved breaches" },
  { text: "Report to law enforcement or relevant authorities where legally required" },
];

function StepList({ items }: { items: { label: string; text: string }[] }) {
  return (
    <div className="mb-6 space-y-4">
      {items.map((step) => (
        <div key={step.label} className="flex items-start gap-4">
          <span className="mt-0.5 size-8 shrink-0 rounded-full bg-[linear-gradient(135deg,rgb(212,175,55)_0%,rgb(184,148,30)_100%)] lg:bg-[linear-gradient(115deg,rgb(34,139,34)_0%,rgb(45,90,61)_50%,rgb(212,165,116)_100%),linear-gradient(135deg,rgb(212,175,55)_0%,rgb(184,148,30)_100%)]"
          />
          <p className="text-base leading-relaxed text-[#2C2C2C]">
            <span className="font-bold">{step.label}</span> {step.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Remediation() {
  return (
    <section id="remediation" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          <span className="lg:hidden">
            6. Remediation &amp;
            <br />
            Remedy
          </span>
          <span className="hidden lg:inline">6. Remediation &amp; Remedy</span>
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Remediation Principles</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          When issues are identified, we prioritize worker safety and rights. Our approach is
          guided by the following principles:
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {principles.map((item) => (
            <li key={item.label} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              <span className="font-bold">{item.label}</span> {item.text}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Remediation Process</h3>
        <StepList items={processSteps} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Escalation &amp; Termination</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          In cases where remediation is not achieved, or where violations are severe, we may:
        </p>
        <ul className="mb-8 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {escalation.map((item) => (
            <li key={item.text} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              {item.text}
            </li>
          ))}
        </ul>

        <div className="rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="mb-2 text-[17.6px] font-semibold text-[#2D5016]">Access to Remedy</p>
          <p className="text-base leading-relaxed text-[#2C2C2C]">
            We are committed to ensuring that workers who have been harmed have access to
            effective remedy. This may include reimbursement of recruitment fees, restoration of
            documents, back pay, or other measures appropriate to the harm suffered.
          </p>
        </div>
      </div>
    </section>
  );
}
