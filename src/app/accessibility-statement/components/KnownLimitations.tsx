import React from "react";

const currentLimitations = [
  {
    bold: "Legacy content:",
    text: " Some older pages or archived content may not meet current accessibility standards. We are working to identify and update these pages.",
  },
  {
    bold: "Third-party components:",
    text: " Some embedded third-party tools (maps, social feeds, analytics dashboards) may have accessibility limitations outside our direct control. We work with vendors to improve these where possible.",
  },
  {
    bold: "PDF documents:",
    text: " Older PDF documents may lack proper tagging and structure. We prioritize remediation based on usage and user feedback.",
  },
  {
    bold: "Complex data visualizations:",
    text: " Some charts and graphs may not yet have fully accessible text alternatives. We are improving these progressively.",
  },
];

const approach = [
  "We prioritize fixes for barriers that prevent core tasks (navigation, information access, form submission)",
  "We actively remediate reported issues and address the most impactful problems first",
  "We welcome reports that help us identify issues we may have missed",
  "We commit to transparency about limitations and realistic timelines for improvements",
];

export default function KnownLimitations() {
  return (
    <section
      id="known-limitations"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          Known Limitations
        </h2>

        <div className="mb-8 rounded-lg border-l-4 border-[#B8941E] bg-[rgba(212,175,55,0.15)] p-6">
          <p className="mb-2 text-base font-bold text-[#2D5016]">Transparency &amp; Honesty</p>
          <p className="text-base leading-relaxed text-[#2C2C2C]">
            We acknowledge that accessibility is a continuous journey, not a destination. While we
            strive to meet WCAG 2.1 Level AA standards, some areas of our website may not yet
            fully comply.
          </p>
        </div>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Current Limitations</h3>
        <ul className="mb-6 list-disc space-y-3 pl-5">
          {currentLimitations.map((item) => (
            <li key={item.bold} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              <span className="font-bold">{item.bold}</span>
              {item.text}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Our Approach to Improvement</h3>
        <ul className="list-disc space-y-3 pl-5">
          {approach.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
