"use client";

import React from "react";

export default function FaqCategoriesSection() {
  const categories = [
    { name: "Top Question", active: true, widthClass: "w-full md:w-40" },
    { name: "Products & Ingredients", active: false, widthClass: "w-full md:w-56" },
    { name: "Allergens & Dietary", active: false, widthClass: "w-full md:w-48" },
    { name: "Storage & Shelf Life", active: false, widthClass: "w-full md:w-48" },
    { name: "Purchasing", active: false, widthClass: "w-full md:w-32" },
    { name: "Quality & Packaging", active: false, widthClass: "w-full md:w-48" },
    { name: "Sustainability", active: false, widthClass: "w-full md:w-36" },
  ];

  return (
    <>
      <style>{`
        .active-category-btn {
          background: #228B22;
        }
        @media (min-width: 768px) {
          .active-category-btn {
            background: linear-gradient(114deg, #228B22 0%, #2D5A3D 50%, #D4A574 100%);
          }
        }
      `}</style>
      <section className="w-full h-auto py-8 md:py-0 md:h-32 bg-gray-50 flex justify-center items-center px-6">
        <div className="w-full max-w-[1283px] grid grid-cols-2 md:flex items-center justify-between gap-3 md:gap-0 py-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`h-11 md:h-14 ${category.widthClass} rounded-full flex items-center justify-center text-[13px] md:text-base font-semibold leading-tight md:leading-6 transition-colors ${
                category.active
                  ? "text-white outline outline-1 outline-offset-[-1px] outline-green-800 active-category-btn"
                  : "bg-white text-zinc-600 outline outline-1 outline-offset-[-1px] outline-zinc-200 hover:bg-zinc-50"
              }`}
              style={{
                fontFamily: "Segoe UI",
              }}
            >
            {category.name}
          </button>
        ))}
      </div>
    </section>
    </>
  );
}
