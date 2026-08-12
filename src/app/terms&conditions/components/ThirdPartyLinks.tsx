import React from "react";

const noResponsibility = [
  "The content, accuracy, or availability of Third-Party Services",
  "The privacy practices or terms of Third-Party Services",
  "Any damages or losses arising from your use of Third-Party Services",
];

export default function ThirdPartyLinks() {
  return (
    <section
      id="third-party-links"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          8. Third-Party Services &amp; Links
        </h2>

        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          The Site may contain links to third-party websites, services, platforms, or resources
          (&ldquo;Third-Party Services&rdquo;) that are not owned, controlled, or operated by
          Zoiko Foods Corp.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">No Endorsement</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          The inclusion of any link does not imply endorsement, approval, or recommendation by
          Zoiko Foods Corp. We are not responsible for:
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {noResponsibility.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">{item}</li>
          ))}
        </ul>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Your Responsibility</h3>
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          You access Third-Party Services at your own risk and should review their terms, privacy
          policies, and practices before engaging with them.
        </p>
      </div>
    </section>
  );
}
