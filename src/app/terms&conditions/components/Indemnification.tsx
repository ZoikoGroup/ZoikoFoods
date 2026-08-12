import React from "react";

const indemnityGrounds = [
  "Your use or misuse of the Site",
  "Your violation of these Terms",
  "Your violation of any third-party rights, including intellectual property, privacy, or publicity rights",
  "Your User Content or submissions",
  "Your breach of any representations or warranties made in these Terms",
];

export default function Indemnification() {
  return (
    <section
      id="indemnification"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          11. Indemnification
        </h2>

        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          You agree to indemnify, defend, and hold harmless Zoiko Foods Corp, its affiliates, and
          their respective directors, officers, employees, agents, and licensors from and against
          any and all claims, liabilities, damages, losses, costs, and expenses (including
          reasonable attorneys&rsquo; fees) arising out of or related to:
        </p>

        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {indemnityGrounds.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">{item}</li>
          ))}
        </ul>

        <p className="text-base leading-relaxed text-[#2C2C2C]">
          We reserve the right to assume exclusive defense and control of any matter subject to
          indemnification, and you agree to cooperate with our defense of such claims.
        </p>
      </div>
    </section>
  );
}
