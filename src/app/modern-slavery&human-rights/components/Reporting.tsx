import React from "react";

const nextSteps = [
  "Reports are triaged by our compliance team",
  "We conduct a confidential investigation",
  "Findings are escalated to appropriate management levels",
  "Remediation is implemented as needed",
  "You will receive a response if contact information is provided",
];

export default function Reporting() {
  return (
    <section id="reporting" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgb(26,51,9)_0%,rgb(45,80,22)_100%)] p-8 text-white sm:p-10 lg:bg-[linear-gradient(113.67deg,rgb(34,139,34)_0%,rgb(45,90,61)_50%,rgb(212,165,116)_100%),linear-gradient(135deg,rgb(26,51,9)_0%,rgb(45,80,22)_100%)]">
        <div
          className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0) 70%)",
          }}
        />

        <h2 className="relative mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-white">
          <span className="lg:hidden">
            Report a
            <br />
            Concern
          </span>
          <span className="hidden lg:inline">Report a Concern</span>
        </h2>

        <p className="relative mb-8 max-w-3xl text-base leading-relaxed text-white/95">
          If you are aware of, or suspect, modern slavery, forced labor, or human trafficking in
          our operations or supply chains, please report it immediately.
        </p>

        <div className="relative mb-8 flex flex-col gap-4">
          <div className="rounded-lg bg-white/10 p-4">
            <p className="mb-2 text-base font-bold">📧 Email</p>
            <a href="mailto:ethics@zoikofoods.com" className="text-base font-semibold underline">
              ethics@zoikofoods.com
            </a>
          </div>
          <div className="rounded-lg bg-white/10 p-4">
            <p className="mb-2 text-base font-bold">📋 Online Report Form</p>
            <a href="#" className="text-base font-semibold underline">
              Submit a confidential report
            </a>
          </div>
          <div className="rounded-lg bg-white/10 p-4">
            <p className="mb-2 text-base font-bold">📞 Hotline (Optional)</p>
            <p className="text-base">[Toll-free number to be provided if implemented]</p>
          </div>
        </div>

        <h3 className="relative mb-3 text-[20.8px] font-semibold text-white">Non-Retaliation</h3>
        <p className="relative mb-8 max-w-3xl text-base leading-relaxed text-white/95">
          We prohibit retaliation against anyone who reports concerns in good faith. All reports
          are treated confidentially to the extent possible and consistent with investigation
          requirements.
        </p>

        <h3 className="relative mb-3 text-[20.8px] font-semibold text-white">What Happens Next</h3>
        <ul className="relative list-disc space-y-3 pl-5 text-white/95">
          {nextSteps.map((step) => (
            <li key={step} className="pl-1 text-base leading-relaxed">
              {step}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
