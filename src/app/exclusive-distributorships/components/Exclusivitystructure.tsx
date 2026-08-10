"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    title: "Territory Definition",
    content:
      "Exclusivity is granted for a clearly mapped geographic territory, defined at the outset of the partnership and documented in the distribution agreement.",
  },
  {
    title: "Channel Scope",
    content:
      "Exclusivity applies to specified channels — retail, wholesale, foodservice, or e-commerce — as agreed with each partner.",
  },
  {
    title: "Term & Review",
    content:
      "Agreements run for a fixed initial term and are renewed subject to performance review and continued alignment with partnership standards.",
  },
  {
    title: "Brand & Category Scope",
    content:
      "Exclusivity is defined by brand and product category, allowing Zoiko Foods to structure multiple partnerships within the same territory where appropriate.",
  },
  {
    title: "Performance Review",
    content:
      "Ongoing exclusivity is contingent on meeting agreed sales, coverage, and compliance benchmarks, reviewed on a periodic basis.",
  },
];

export default function ExclusivityStructure() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold leading-[57.6px] text-green-950">
          Exclusivity Structure
        </h2>
        <p className="mt-4 text-lg font-normal leading-7 text-stone-500">
          Our exclusivity framework is clear, defined,<br className="block lg:hidden" /> and performance-based.
        </p>

        <div className="mt-10 overflow-hidden rounded-lg bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const isLast = index === items.length - 1;
            return (
              <div
                key={item.title}
                className={isLast ? "" : "border-b border-neutral-200"}
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between bg-white px-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold leading-6 text-green-950">
                    {item.title}
                  </span>
                  <span
                    className={`text-base font-semibold leading-6 text-green-950 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-base font-normal leading-6 text-stone-500">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}