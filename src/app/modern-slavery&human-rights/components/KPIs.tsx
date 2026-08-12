import React from "react";
import DataTable from "./DataTable";

const kpis: [string, string][] = [
  ["Supplier Onboarding", "% of new suppliers completing modern slavery questionnaire"],
  ["Code Acceptance", "% of suppliers accepting Supplier Code of Conduct"],
  ["Audits", "Number of supplier audits conducted; % completed on schedule"],
  ["Corrective Actions", "Number of corrective actions identified; % closed on time"],
  ["Training", "% of relevant employees completing modern slavery training"],
  ["Reports", "Number of reports received; average time to resolution"],
];

const cycle = [
  { label: "Collect Inputs:", text: "Audits, reports, monitoring signals, industry trends" },
  { label: "Analyze Trends:", text: "Identify systemic issues and root causes" },
  { label: "Update Controls:", text: "Strengthen policies, supplier requirements, and due diligence" },
  { label: "Train & Communicate:", text: "Roll out updates to relevant teams" },
  { label: "Re-test & Validate:", text: "Monitor effectiveness of improvements" },
];

export default function KPIs() {
  return (
    <section id="kpis" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          <span className="lg:hidden">
            8. Measuring
            <br />
            Effectiveness
          </span>
          <span className="hidden lg:inline">8. Measuring Effectiveness</span>
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Key Performance Indicators</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          We track the following metrics to measure the effectiveness of our efforts:
        </p>
        <DataTable columns={["KPI Category", "Metric"]} rows={kpis} />

        <div className="mb-8 rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="text-base leading-relaxed text-[#2C2C2C]">
            <span className="font-bold">Data Privacy:</span> KPI data is reported in aggregate
            form and does not include personally identifiable information or details that could
            identify specific suppliers undergoing remediation.
          </p>
        </div>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Continuous Improvement</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          We continuously improve our approach through the following cycle:
        </p>
        <div className="space-y-4">
          {cycle.map((step) => (
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
