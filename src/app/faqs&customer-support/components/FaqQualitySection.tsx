"use client";

import React from "react";

export default function FaqQualitySection() {
  const cards = [
    {
      title: "Structured Review",
      desktopDesc: "Zoiko Foods logs and reviews<br/>product concerns through structured<br/>quality processes.",
      mobileDesc: "Zoiko Foods logs and reviews product<br/>concerns through structured quality<br/>processes.",
      height: "h-44"
    },
    {
      title: "Investigation Support",
      desktopDesc: "Where required, we may request<br/>additional information such as<br/>product photos, batch/lot numbers,<br/>and purchase details.",
      mobileDesc: "Where required, we may request<br/>additional information such as product<br/>photos, batch/lot numbers, and<br/>purchase details.",
      height: "h-44"
    },
    {
      title: "Packaging Authority",
      desktopDesc: "Packaging is the definitive source for<br/>ingredients and allergen statements<br/>for your market.",
      mobileDesc: "Packaging is the definitive source for<br/>ingredients and allergen statements for<br/>your market.",
      height: "h-44"
    },
    {
      title: "Professional Guidance",
      desktopDesc: "This page does not replace<br/>professional advice or emergency<br/>services.",
      mobileDesc: "This page does not replace professional<br/>advice or emergency services.",
      height: "h-40"
    }
  ];

  return (
    <section className="w-full bg-[#F8F9FA] flex flex-col items-center px-6 md:px-0 pt-[48px] pb-[46.4px]">
      <div className="w-full md:w-[1015px] flex flex-col">
        <h2 
          className="text-[#2D5A3D] text-[24px] md:text-3xl font-bold leading-tight md:leading-[51.20px] mb-6 md:mb-8"
          style={{ fontFamily: "Segoe UI" }}
        >
          Quality, Safety & Traceability
        </h2>
        
        <div className="flex flex-col md:flex-row flex-wrap gap-y-4 md:gap-x-[27.5px] md:gap-y-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`w-full md:w-80 h-auto md:${card.height} bg-white rounded-lg shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border-l-4 border-[#2D5A3D] p-5 md:p-0 md:pl-[28px] md:pr-2 md:pt-6`}
            >
              <h3 
                className="text-[#2D5A3D] text-[14px] md:text-base font-bold leading-5 md:leading-6 mb-2 md:mb-[11px]"
                style={{ fontFamily: "Segoe UI" }}
              >
                {card.title}
              </h3>
              <div className="text-[#1A1A1A] text-[14px] md:text-base font-normal leading-5 md:leading-6" style={{ fontFamily: "Segoe UI" }}>
                <span className="hidden md:block" dangerouslySetInnerHTML={{ __html: card.desktopDesc }} />
                <span className="block md:hidden" dangerouslySetInnerHTML={{ __html: card.mobileDesc }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
