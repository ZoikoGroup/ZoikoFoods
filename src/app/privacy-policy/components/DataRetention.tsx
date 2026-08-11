import React from "react";

const principles = [
  "We keep data only as long as needed to provide services and fulfill legitimate business purposes",
  "We retain certain data to comply with legal, tax, accounting, and regulatory obligations",
  "We maintain records necessary to resolve disputes or enforce our terms",
  "We securely delete or anonymize data when retention is no longer required",
];

const retentionPeriods = [
  {
    title: "Inquiry data",
    text: "Retained for the duration of the business relationship or inquiry resolution, plus applicable statutory periods",
  },
  {
    title: "Technical logs",
    text: "Typically retained for 12-24 months for security and diagnostic purposes",
  },
  {
    title: "Marketing consent",
    text: "Until consent is withdrawn or contact becomes inactive",
  },
  {
    title: "Legal compliance records",
    text: "Retained for periods required by applicable law (typically 6-7 years for business records)",
  },
];

export default function DataRetention() {
  return (
    <section
      id="data-retention"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-2xl font-bold text-[#0F2818]">
          9. Data Retention
        </h2>

        <p className="mb-6 text-base leading-relaxed text-[#2D2D2D]">
          We retain personal information only as long as necessary for the purposes described in
          this policy, or as required by law.
        </p>

        <h3 className="mb-4 text-xl font-bold text-[#0F2818]">Retention Principles</h3>
        <ul className="mb-8 space-y-3">
          {principles.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-base leading-relaxed text-[#2D2D2D]"
            >
              <img
                src="/images/tick.png"
                alt="tick"
                className="mt-1 h-[15px] w-[15px] shrink-0 object-contain"
              />
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mb-4 text-xl font-bold text-[#0F2818]">Typical Retention Periods</h3>
        <ul className="space-y-3">
          {retentionPeriods.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3 text-base leading-relaxed text-[#2D2D2D]"
            >
              <img
                src="/images/tick.png"
                alt="tick"
                className="mt-1 h-[15px] w-[15px] shrink-0 object-contain"
              />
              <span>
                <span className="font-semibold text-[#0F2818]">{item.title}:</span> {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
