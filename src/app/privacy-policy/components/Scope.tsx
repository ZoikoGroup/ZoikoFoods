import React from "react";

const covered = [
  "Our corporate websites and web applications",
  "Online forms and inquiry submissions",
  "Newsletter subscriptions (if applicable)",
  "Business-to-business engagement platforms",
];

const notCovered = [
  "Third-party websites linked from our sites",
  "Partner platforms and external services",
  "Employment applications (covered by separate recruitment privacy notice)",
  "Employee data (covered by internal HR policies)",
];

export default function Scope() {
  return (
    <section id="scope" className="scroll-mt-24 border-t border-[#E0E0E0] mx-auto max-w-6xl px-6 py-10 sm:px-10">
      <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-2xl font-bold text-[#0F2818]">
        2. Scope of This Policy
      </h2>

      <div className="mb-8">
        <h3 className="mb-4 text-xl font-bold text-[#0F2818]">What This Covers</h3>
        <ul className="space-y-3">
          {covered.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-[#2D2D2D]">
              <img
                src="/images/tick.png"
                alt="tick"
                className="mt-1 h-[15px] w-[15px] shrink-0 object-contain"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold text-[#0F2818]">What This Does Not Cover</h3>
        <ul className="space-y-3">
          {notCovered.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-[#2D2D2D]">
              <img
                src="/images/cross.png"
                alt="cross"
                className="mt-1 h-[15px] w-[15px] shrink-0 object-contain"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
