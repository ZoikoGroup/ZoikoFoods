import React from "react";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="scroll-mt-24 border-t border-[#E0E0E0] mx-auto max-w-6xl px-6 py-10 sm:px-10">
      <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-2xl font-bold text-[#0F2818]">
        1. Who We Are
      </h2>

      <div className="mb-6 space-y-2">
        <p className="text-base leading-relaxed text-[#2D2D2D]">
          <span className="font-semibold text-[#0F2818]">Legal Name:</span> Zoiko Foods Corp
        </p>
        <p className="text-base leading-relaxed text-[#2D2D2D]">
          <span className="font-semibold text-[#0F2818]">Business Address:</span>{" "}
          [To be provided - Corporate headquarters address]
        </p>
        <p className="text-base leading-relaxed text-[#2D2D2D]">
          <span className="font-semibold text-[#0F2818]">Privacy Contact:</span>{" "}
          privacy@zoikofoods.com
        </p>
      </div>

      <div className="rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
        <p className="text-base leading-relaxed text-[#2D2D2D]">
          For the purposes of data protection law, Zoiko Foods Corp acts as the &ldquo;data
          controller&rdquo; (under GDPR) and &ldquo;business&rdquo; (under CCPA) for personal
          information collected through our websites and digital services.
        </p>
      </div>
    </section>
  );
}
