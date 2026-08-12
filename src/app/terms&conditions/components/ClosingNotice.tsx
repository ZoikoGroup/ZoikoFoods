import React from "react";

export default function ClosingNotice() {
  return (
    <section className="px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
        <h2 className="mb-2 text-[17.6px] font-bold text-[#2D5016]">Thank You</h2>
        <p className="mb-2 text-base leading-relaxed text-[#2C2C2C]">
          Thank you for taking the time to review these Terms &amp; Conditions. We are committed
          to operating with transparency, fairness, and respect for your rights.
        </p>
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          If you have questions or need clarification on any provision, please don&rsquo;t
          hesitate to contact our legal team.
        </p>
      </div>
    </section>
  );
}
