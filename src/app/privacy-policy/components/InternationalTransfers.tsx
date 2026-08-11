import React from "react";

const safeguards = [
  {
    title: "Standard Contractual Clauses (SCCs)",
    text: "We use European Commission-approved SCCs when transferring data from the EEA",
  },
  {
    title: "Supplementary Measures",
    text: "We implement additional technical and organizational safeguards as required",
  },
  {
    title: "Service Provider Agreements",
    text: "Contractual obligations requiring appropriate data protection standards",
  },
];

export default function InternationalTransfers() {
  return (
    <section
      id="international-transfers"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-2xl font-bold text-[#0F2818]">
          8. International Data Transfers
        </h2>

        <p className="mb-6 text-base leading-relaxed text-[#2D2D2D]">
          Your personal information may be transferred to and processed in countries outside your
          country of residence, including countries that may not provide the same level of data
          protection as your home country.
        </p>

        <h3 className="mb-4 text-xl font-bold text-[#0F2818]">Safeguards We Use</h3>
        <ul className="mb-6 space-y-3">
          {safeguards.map((item) => (
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

        <div className="rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="text-base leading-relaxed text-[#2D2D2D]">
            If you are located in the EEA or UK and would like more information about the
            safeguards we use for international transfers, please contact our privacy team.
          </p>
        </div>
      </div>
    </section>
  );
}
