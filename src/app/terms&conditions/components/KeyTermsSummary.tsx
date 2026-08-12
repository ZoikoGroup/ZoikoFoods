import React from "react";
import Image from "next/image";

const summaryItems = [
  {
    icon: "/images/acceptance-icon.png",
    label: "Acceptance",
    text: "Using this site means you accept these terms and agree to comply with them.",
  },
  {
    icon: "/images/prohibited-icon.png",
    label: "Prohibited Conduct",
    text: "You may not misuse, interfere with, or compromise our site, systems, or content.",
  },
  {
    icon: "/images/ownership-icon.png",
    label: "Ownership",
    text: "Zoiko Foods Corp owns all content, trademarks, and brand assets on this site.",
  },
  {
    icon: "/images/info-icon.png",
    label: "Information Provided 'As Is'",
    text: "Content may change without notice and comes with no warranties.",
  },
  {
    icon: "/images/liability-icon.png",
    label: "Limited Liability",
    text: "Our liability is limited to the extent permitted by law.",
  },
  {
    icon: "/images/governing-law-icon.png",
    label: "Governing Law",
    text: "These terms are governed by the laws specified in Section 15.",
  },
  {
    icon: "/images/updates-icon.png",
    label: "Updates",
    text: "We may update these terms; continued use means acceptance of changes.",
  },
];

export default function KeyTermsSummary() {
  return (
    <section id="key-terms-summary" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-10 sm:px-10">
      <div
        className="rounded-xl border-2 border-[#D4AF37] p-8 sm:p-10"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(45, 80, 22, 0.05) 100%)",
        }}
      >
        <h2 className="mb-2 text-[28.8px] font-bold text-[#2D5016]">Key Terms at a Glance</h2>
        <p className="mb-8 text-base text-[#8B8B8B]">
          Understand the major contractual implications in 30 seconds:
        </p>

        <ul className="space-y-6">
          {summaryItems.map((item) => (
            <li key={item.label} className="flex items-start gap-4">
              <span
                className="flex size-8 shrink-0 items-center justify-center rounded-lg overflow-hidden"
              >
                <Image src={item.icon} alt={item.label} width={32} height={32} className="object-contain" />
              </span>
              <p className="text-base leading-relaxed text-[#2C2C2C]">
                <span className="font-semibold text-[#2D5016]">{item.label}:</span> {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
