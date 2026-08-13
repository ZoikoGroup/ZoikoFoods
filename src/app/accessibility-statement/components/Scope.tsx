import React from "react";

const covers = [
  "Our corporate website and public-facing web pages",
  "Key content pages, including product information and company information",
  "Forms and interactive elements (contact forms, inquiry submissions)",
  "Core site navigation and global interface components",
  "Legal and policy pages (Privacy Policy, Terms & Conditions, Cookie Policy)",
];

const exclusions = [
  "Third-party content not controlled by Zoiko Foods Corp (e.g., embedded maps, external widgets, social media feeds)",
  "Third-party websites linked from our site",
  "Legacy PDF documents created before our accessibility standards were implemented (we are working to remediate these)",
  "Separate employment or careers portals (which may have their own accessibility statements)",
];

export default function Scope() {
  return (
    <section id="scope" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          Scope of This Statement
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">
          What This Statement Covers
        </h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          This accessibility statement applies to the following Zoiko Foods Corp digital
          properties:
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {covers.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Exclusions</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          This statement does not cover:
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {exclusions.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              {item}
            </li>
          ))}
        </ul>

        <div className="rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="text-base leading-relaxed text-[#2C2C2C]">
            <span className="font-bold">Note:</span> If you encounter accessibility barriers in
            third-party content embedded on our site, please contact us, and we will work with the
            vendor to address the issue or provide an accessible alternative.
          </p>
        </div>
      </div>
    </section>
  );
}
