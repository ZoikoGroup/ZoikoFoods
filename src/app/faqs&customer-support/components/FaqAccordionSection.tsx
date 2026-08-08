"use client";

import React from "react";

export default function FaqAccordionSection() {
  const topQuestions: React.ReactNode[] = [
    <>Where can I buy Zoiko Food<br className="block md:hidden" />products</>,
    "How do I find allergen information?",
    "What does 'best before' mean",
    <>How should I store this product after<br className="block md:hidden" />opening?</>,
    <>What should I do if packaging i<br className="block md:hidden" />damaged?</>,
    "How do I report a quality concern",
    <>What brands are part of Zoiko Foods<br className="block md:hidden" />Corp?</>
  ];

  const allergenQuestions: React.ReactNode[] = [
    <>Which allergens may be present i<br className="block md:hidden" />your products</>,
    <>How do you manage cross-contact in<br className="block md:hidden" />manufacturing</>
  ];

  const FaqItem = ({ question }: { question: React.ReactNode }) => (
    <div className="w-full min-h-[56px] md:h-20 py-3 md:py-0 bg-[#F8F9FA] md:bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 flex items-center justify-between px-4 md:px-6 mb-2 cursor-pointer hover:bg-zinc-50">
      <div className="text-[#2D5A3D] text-[14px] md:text-base font-semibold leading-5 md:leading-6 pr-4" style={{ fontFamily: "Segoe UI" }}>
        {question}
      </div>
      <div className="text-[#27AE60] text-sm md:text-xl font-semibold leading-6 md:leading-8" style={{ fontFamily: "Segoe UI" }}>
        ▼
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white flex justify-center py-12 px-6">
      <div className="w-full max-w-[1015px] flex flex-col">
        {/* Top Questions Header */}
        <h2 
          className="text-[#2D5A3D] text-[22px] md:text-3xl font-bold leading-tight md:leading-[51.20px] mb-4 md:mb-8"
          style={{ fontFamily: "Segoe UI" }}
        >
          Top Questions
        </h2>

        {/* Top Questions List */}
        <div className="flex flex-col gap-2 mb-10">
          {topQuestions.map((q, i) => (
            <FaqItem key={`top-${i}`} question={q} />
          ))}
        </div>

        {/* Allergens Header */}
        <div 
          className="w-full h-auto py-5 md:py-0 md:h-28 rounded-tl-lg rounded-tr-lg flex flex-col justify-center px-4 md:px-6 mb-2"
          style={{ background: "linear-gradient(135deg, #228B22 0%, #2D5A3D 50%, #D4A574 100%)" }}
        >
          <div className="text-white text-[18px] md:text-2xl font-bold leading-[26px] md:leading-10 mb-1 md:mb-0" style={{ fontFamily: "Segoe UI" }}>
            Allergens & Dietary Information
          </div>
          <div className="text-white text-xs md:text-base font-normal leading-5 md:leading-6 opacity-95" style={{ fontFamily: "Segoe UI" }}>
            Critical safety information about allergens and dietary requirements
          </div>
        </div>

        {/* Allergens Questions List */}
        <div className="flex flex-col gap-2">
          {allergenQuestions.map((q, i) => (
            <FaqItem key={`allergen-${i}`} question={q} />
          ))}
        </div>
      </div>
    </section>
  );
}
