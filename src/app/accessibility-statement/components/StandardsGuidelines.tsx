import React from "react";
import { EyeIcon, KeyboardIcon, BrainIcon, WrenchIcon } from "../../../components/icons";

const principles = [
  {
    icon: EyeIcon,
    title: "Perceivable",
    text: "Content can be seen or heard in different ways. Information is presented in multiple formats and with sufficient contrast.",
  },
  {
    icon: KeyboardIcon,
    title: "Operable",
    text: "Users can navigate and interact with the site using a keyboard, mouse, or assistive technology.",
  },
  {
    icon: BrainIcon,
    title: "Understandable",
    text: "Information and interface controls behave predictably and are easy to comprehend.",
  },
  {
    icon: WrenchIcon,
    title: "Robust",
    text: "Content is compatible with current and future assistive technologies and web browsers.",
  },
];

export default function StandardsGuidelines() {
  return (
    <section
      id="standards-guidelines"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          Standards &amp; Guidelines
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">WCAG 2.1 Level AA</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          We align our website with the{" "}
          <span className="font-bold">Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</span>,
          an internationally recognized standard for web accessibility developed by the World Wide
          Web Consortium (W3C).
        </p>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          WCAG is organized around four principles, known as <span className="font-bold">POUR</span>:
        </p>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, idx) => (
            <div
              key={p.title}
              className={`rounded-xl border border-[rgba(212,175,55,0.15)] bg-[#F5F5F5] p-6 ${
                idx === 3 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-3 flex items-center gap-2">
                <p.icon className="size-[22px] text-[#2D5016]" />
                <p className="text-[17.6px] font-bold text-[#2D5016]">{p.title}</p>
              </div>
              <p className="text-[15.2px] leading-relaxed text-[#2C2C2C]">{p.text}</p>
            </div>
          ))}
        </div>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">ADA-Informed Approach</h3>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          We consider the <span className="font-bold">Americans with Disabilities Act (ADA)</span>{" "}
          expectations for digital accessibility in the United States and strive to ensure our
          website is usable by people with a wide range of disabilities.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Regional Guidance</h3>
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          Where applicable, we also reference relevant accessibility guidance from the regions we
          serve, including European accessibility standards and other international best
          practices.
        </p>
      </div>
    </section>
  );
}
