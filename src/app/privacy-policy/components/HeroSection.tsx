import React from "react";

const meta = [
  { label: "Effective Date", value: "January 1, 2025" },
  { label: "Last Updated", value: "January 30, 2026" },
  { label: "Jurisdiction", value: "Applies to our websites and digital services" },
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
        <h1 className="mb-4 text-4xl font-bold text-[#0F2818] sm:text-5xl">Privacy Policy</h1>
        <p className="mb-4 max-w-3xl text-lg text-[#0F2818] sm:text-xl">
          How Zoiko Foods Corp collects, uses, protects, and respects your personal data.
        </p>
        <p className="mb-8 max-w-3xl text-base leading-relaxed text-[#2D2D2D]">
          We collect only what we need to operate our services and improve your experience. You
          can review, manage, or request deletion of your data at any time, subject to applicable
          law.
        </p>

        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-12">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#666]">
                {m.label}
              </p>
              <p className="mt-1 text-base font-semibold text-[#1A472A]">{m.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
