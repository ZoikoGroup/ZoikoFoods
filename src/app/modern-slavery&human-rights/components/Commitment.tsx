import React from "react";

const items = [
  {
    icon: "🚫",
    label: "Zero tolerance",
    text: "for modern slavery, forced labor, and human trafficking",
  },
  {
    icon: "🔍",
    label: "Risk-based due diligence",
    text: "across our operations and supply chains",
  },
  {
    icon: "📋",
    label: "Supplier standards",
    text: "and contractual controls with audit rights",
  },
  {
    icon: "🎓",
    label: "Training",
    text: "for procurement and operations teams on risk identification",
  },
  {
    icon: "🔄",
    label: "Monitoring, remediation,",
    text: "and continuous improvement processes",
  },
  {
    icon: "🔒",
    label: "Confidential reporting",
    text: "channels with non-retaliation protection",
  },
];

export default function Commitment() {
  return (
    <section id="commitment" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-10 sm:px-10">
      <div
        className="rounded-xl border-2 border-[#D4AF37] p-8 sm:p-10"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(45, 80, 22, 0.05) 100%)",
        }}
      >
        <h2 className="mb-8 text-[24px] font-bold text-[#2D5016]">Our Commitment</h2>

        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.label} className="flex items-start gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg text-[17.6px] bg-[linear-gradient(135deg,rgb(212,175,55)_0%,rgb(184,148,30)_100%)] lg:bg-[linear-gradient(115deg,rgb(34,139,34)_0%,rgb(45,90,61)_50%,rgb(212,165,116)_100%),linear-gradient(135deg,rgb(212,175,55)_0%,rgb(184,148,30)_100%)]"
              >
                {item.icon}
              </span>
              <p className="text-base leading-relaxed text-[#2C2C2C]">
                <span className="font-bold">{item.label}</span> {item.text}
              </p>
            </li>
          ))}
        </ul>

        <a
          href="#due-diligence"
          className="mt-8 inline-block text-base font-semibold text-[#2D5016] underline"
        >
          Learn how we conduct due diligence →
        </a>
      </div>
    </section>
  );
}
