"use client";

import React from "react";

const meta = [
  { label: "Effective Date", value: "January 1, 2025" },
  { label: "Last Updated", value: "January 30, 2026" },
];

export default function HeroSection() {
  return (
    <section
      className="border-b border-solid px-6 py-14 sm:px-10 lg:px-20"
      style={{
        borderColor: "rgba(212,175,55,0.2)",
        backgroundImage:
          "linear-gradient(140deg, rgba(45,80,22,0.03) 0%, rgba(212,175,55,0.03) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <h1
          className="mb-4 bg-clip-text text-[40px] font-extrabold tracking-tight text-transparent lg:text-[56px]"
          style={{
            backgroundImage: "linear-gradient(120deg, rgb(26,51,9) 0%, rgb(45,80,22) 100%)",
          }}
        >
          Terms &amp; Conditions
        </h1>
        <p className="mb-8 max-w-3xl text-[20px] text-[#2C2C2C]">
          These terms govern your use of Zoiko Foods Corp websites, services, and content.
        </p>

        <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-12">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="text-[13.6px] font-semibold uppercase tracking-wide text-[#2D5016]">
                {m.label}
              </p>
              <p className="mt-1 text-[15.2px] text-[#2C2C2C]">{m.value}</p>
            </div>
          ))}
        </div>

        <p className="mb-8 max-w-3xl text-[14.4px] italic leading-relaxed text-[#8B8B8B]">
          Applies to our websites and digital services unless a product-specific agreement states
          otherwise.
        </p>

        <div className="flex flex-col gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-lg py-3.5 text-center text-[15.2px] font-semibold text-white shadow-[0px_2px_6px_rgba(212,175,55,0.25)]"
            style={{
              backgroundImage: "linear-gradient(135deg, rgb(184,148,30) 0%, rgb(212,175,55) 100%)",
            }}
          >
            🖨️ Download / Print
          </button>
          <a
            href="#limitation-of-liability"
            className="rounded-lg border-2 border-[#2D5016] bg-white py-3.5 text-center text-[15.2px] font-semibold text-[#2D5016]"
          >
            ⚠️ Jump to Limitation of Liability
          </a>
          <a
            href="mailto:legal@zoikofoods.com"
            className="py-2 text-center text-[15.2px] font-semibold text-[#2D5016] underline"
          >
            ✉️ Contact Legal
          </a>
        </div>
      </div>
    </section>
  );
}
