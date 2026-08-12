import React from "react";

const audience = [
  {
    label: "Procurement and sourcing teams:",
    text: "Supplier risk assessment, due diligence, contract management",
  },
  {
    label: "Operations and site management:",
    text: "On-site labor practices, contractor management, red flag identification",
  },
  {
    label: "Logistics and vendor management:",
    text: "Risk identification in transportation and warehousing",
  },
  {
    label: "Leadership and compliance:",
    text: "Strategic oversight, governance, and escalation protocols",
  },
];

const content = [
  "What modern slavery is and how it manifests in supply chains",
  "Risk areas specific to the food and beverage sector",
  "How to spot red flags and indicators of exploitation",
  "Supplier standards and contractual requirements",
  "Escalation procedures and safe reporting channels",
  "Non-retaliation and whistleblower protection",
  "Worker-centered remediation principles",
];

export default function Training() {
  return (
    <section id="training" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          <span className="lg:hidden">
            7. Training &amp;
            <br />
            Awareness
          </span>
          <span className="hidden lg:inline">7. Training &amp; Awareness</span>
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Training Audience</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          We provide modern slavery awareness training to the following teams:
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {audience.map((item) => (
            <li key={item.label} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              <span className="font-bold">{item.label}</span> {item.text}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Training Content</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Training modules cover the following topics:
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {content.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">
          <span className="lg:hidden">
            Training Delivery &amp;
            <br />
            Frequency
          </span>
          <span className="hidden lg:inline">Training Delivery &amp; Frequency</span>
        </h3>
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          Training is delivered through a combination of online modules, in-person sessions, and
          role-specific workshops. Key personnel receive refresher training annually or when
          material updates occur.
        </p>
      </div>
    </section>
  );
}
