import React from "react";

export default function ClosingNote() {
  return (
    <section className="px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
        <p className="mb-2 text-base font-bold text-[#2D5016]">Stakeholder Engagement</p>
        <p className="mb-2 text-base leading-relaxed text-[#2C2C2C]">
          We welcome feedback from stakeholders, including NGOs, workers&rsquo; representatives,
          investors, and customers, on our approach to preventing modern slavery.
        </p>
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          For questions or feedback on this statement, please contact{" "}
          <a href="mailto:compliance@zoikofoods.com" className="font-semibold text-[#2D5016] underline">
            compliance@zoikofoods.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
