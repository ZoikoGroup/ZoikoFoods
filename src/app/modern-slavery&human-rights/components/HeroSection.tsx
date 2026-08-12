"use client";

import React from "react";

const meta = [
  { label: "Reporting Period", value: "Fiscal Year 2025" },
  { label: "Publication Date", value: "January 30, 2026" },
  { label: "Last Updated", value: "January 30, 2026" },
  { label: "Approved By", value: "Board of Directors" },
];

const badges = ["🚫 Zero Tolerance", "🔍 Risk-Based Due Diligence", "🤝 Supplier Accountability", "🔒 Safe Reporting"];

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
          className="mb-4 bg-[linear-gradient(137deg,rgb(26,51,9)_0%,rgb(45,80,22)_100%)] bg-clip-text text-[40px] font-extrabold tracking-tight text-transparent lg:bg-[linear-gradient(172.73deg,rgb(34,139,34)_0%,rgb(45,90,61)_50%,rgb(212,165,116)_100%),linear-gradient(143.34deg,rgb(26,51,9)_0%,rgb(45,80,22)_100%)] lg:text-[56px]"
        >
          <span className="lg:hidden">
            Modern Slavery &amp;
            <br />
            Human Rights
            <br />
            Statement
          </span>
          <span className="hidden lg:inline">Modern Slavery &amp; Human Rights Statement</span>
        </h1>
        <p className="mb-8 max-w-3xl text-[20px] text-[#2C2C2C]">
          <span className="lg:hidden">
            We are committed to preventing
            <br />
            modern slavery, forced labor, and
            <br />
            human trafficking in our operations
            <br />
            and supply chains.
          </span>
          <span className="hidden lg:inline">
            We are committed to preventing modern slavery, forced labor, and human trafficking
            <br />
            in our operations and supply chains.
          </span>
        </p>

        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-10">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="text-[13.6px] font-semibold uppercase tracking-wide text-[#2D5016]">
                {m.label}
              </p>
              <p className="mt-1 text-[15.2px] text-[#2C2C2C]">{m.value}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-[#2D5016] bg-[rgba(45,80,22,0.1)] px-5 py-2 text-[13.6px] font-semibold text-[#2D5016]"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 lg:hidden">
          <a
            href="#reporting"
            className="rounded-lg py-3.5 text-center text-[15.2px] font-semibold text-white shadow-[0px_2px_6px_rgba(212,175,55,0.25)]"
            style={{
              backgroundImage: "linear-gradient(135deg, rgb(184,148,30) 0%, rgb(212,175,55) 100%)",
            }}
          >
            📢 Report a Concern
          </a>
          <a
            href="#supplier-standards"
            className="rounded-lg border-2 border-[#2D5016] bg-white py-3.5 text-center text-[15.2px] font-semibold text-[#2D5016]"
          >
            📋 View Supplier Standards
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="py-2 text-center text-[15.2px] font-semibold text-[#2D5016] underline"
          >
            🖨️ Download / Print
          </button>
        </div>
      </div>
    </section>
  );
}
