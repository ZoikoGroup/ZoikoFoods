import React from "react";

const testingPractices = [
  { bold: "Automated scanning:", text: " Accessibility checks integrated into our development workflow" },
  { bold: "Manual testing:", text: " Keyboard-only navigation testing on every page and feature" },
  {
    bold: "Screen reader testing:",
    text: " Spot checks with popular screen readers (JAWS, NVDA, VoiceOver) for critical workflows",
  },
  {
    bold: "Contrast and zoom testing:",
    text: " Verification at 200%+ text sizing and various contrast settings",
  },
  { bold: "Periodic audits:", text: " Internal and external accessibility audits conducted regularly" },
  {
    bold: "User testing:",
    text: " Feedback from users with disabilities to identify real-world barriers",
  },
];

const remediationSteps = [
  { number: "1", title: "Issue Received:", text: " Reports come via our accessibility support channel or through testing" },
  {
    number: "2",
    title: "Triage & Prioritization:",
    text: " We assess severity (blocker, major, minor) and impact on user experience",
  },
  {
    number: "3",
    title: "Assignment:",
    text: " Issues are assigned to the appropriate product or engineering team",
  },
  {
    number: "4",
    title: "Fix & Validation:",
    text: " Solutions are implemented and tested for effectiveness",
  },
  {
    number: "5",
    title: "Notification:",
    text: " If contact details were provided, we inform the reporter of the resolution",
  },
];

const trainingGovernance = [
  "Design and engineering teams receive guidance on accessibility best practices",
  "Accessibility checkpoints are included in our release quality assurance process",
  "We maintain an internal accessibility knowledge base and resources",
];

export default function OngoingEfforts() {
  return (
    <section id="ongoing-efforts" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          Ongoing Efforts &amp; Continuous Improvement
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Testing &amp; Review Practices</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          We use a multi-layered approach to identify and fix accessibility issues:
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-5">
          {testingPractices.map((item) => (
            <li key={item.bold} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              <span className="font-bold">{item.bold}</span>
              {item.text}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Remediation Process</h3>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          When accessibility issues are identified, we follow a structured remediation process:
        </p>
        <ol className="mb-8 space-y-4">
          {remediationSteps.map((step) => (
            <li key={step.number} className="flex items-start gap-4">
              <span
                className="flex size-8 shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(115deg, rgb(34,139,34) 0%, rgb(45,90,61) 50%, rgb(212,165,116) 100%), linear-gradient(135deg, rgb(212,175,55) 0%, rgb(184,148,30) 100%)",
                }}
              >
                {step.number}
              </span>
              <p className="text-base leading-relaxed text-[#2C2C2C]">
                <span className="font-bold">{step.title}</span>
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Training &amp; Governance</h3>
        <ul className="list-disc space-y-3 pl-5">
          {trainingGovernance.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
