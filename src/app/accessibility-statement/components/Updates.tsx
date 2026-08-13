import React from "react";

const reviewCadence = [
  { bold: "At least annually", text: " to ensure accuracy and currency" },
  { bold: "When major website changes occur", text: " that may impact accessibility" },
  { bold: "When accessibility standards evolve", text: " or new best practices emerge" },
  { bold: "Following accessibility audits", text: " to reflect improvements and known issues" },
];

const continuousImprovement = [
  "Monitor emerging accessibility standards and best practices",
  "Incorporate user feedback into our development roadmap",
  "Train team members on accessibility principles and techniques",
  "Allocate resources to remediate identified barriers",
  "Collaborate with accessibility experts and the disability community",
];

export default function Updates() {
  return (
    <section id="updates" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          Updates, Review &amp; Continuous Improvement
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Review Cadence</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          This accessibility statement is reviewed and updated:
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-5">
          {reviewCadence.map((item) => (
            <li key={item.bold} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              <span className="font-bold">{item.bold}</span>
              {item.text}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Last Reviewed</h3>
        <p className="mb-6 text-base font-bold text-[#2C2C2C]">January 30, 2026</p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Continuous Improvement</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Accessibility is not a one-time project but an ongoing commitment. We continuously:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          {continuousImprovement.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
