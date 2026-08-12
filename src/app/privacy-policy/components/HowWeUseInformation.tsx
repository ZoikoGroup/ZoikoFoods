import React from "react";

const purposes = [
  {
    label: "Provide and operate our services",
    text: "To deliver the functionality you request and maintain service quality",
  },
  {
    label: "Respond to inquiries and requests",
    text: "To answer questions, provide support, and fulfill business communications",
  },
  {
    label: "Improve website performance and user experience",
    text: "To analyze usage patterns, identify issues, and optimize our digital services",
  },
  {
    label: "Prevent fraud, abuse, and security incidents",
    text: "To protect our systems, prevent unauthorized access, and maintain platform integrity",
  },
  {
    label: "Comply with legal obligations",
    text: "To meet regulatory requirements, enforce our terms, and respond to lawful requests",
  },
  {
    label: "Business operations",
    text: "For internal reporting, governance, auditing, and strategic planning",
  },
];

export default function HowWeUseInformation() {
  return (
    <section
      id="how-we-use-data"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-2xl font-bold text-[#0F2818]">
          4. How We Use Your Information
        </h2>

        <p className="mb-6 text-base leading-relaxed text-[#2D2D2D]">
          We process your personal information for the following purposes:
        </p>

        <ul className="space-y-3">
          {purposes.map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-base text-[#2D2D2D]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A472A]" />
              <span className="leading-relaxed">
                <span className="font-semibold text-[#0F2818]">{item.label}:</span> {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
