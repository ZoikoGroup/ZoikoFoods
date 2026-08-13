import React from "react";

const browsers = [
  "Google Chrome (latest version)",
  "Mozilla Firefox (latest version)",
  "Apple Safari (latest version)",
  "Microsoft Edge (latest version)",
];

const assistiveTech = [
  { bold: "Screen readers:", text: " JAWS, NVDA, VoiceOver, TalkBack" },
  { bold: "Screen magnification software:", text: " ZoomText, built-in OS magnifiers" },
  { bold: "Voice recognition software:", text: " Dragon NaturallySpeaking" },
  { bold: "Keyboard navigation:", text: " Full keyboard access without requiring a mouse" },
];

export default function Compatibility() {
  return (
    <section id="compatibility" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          Compatibility &amp; Assistive Technology
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Supported Browsers</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Our website is designed to work with modern web browsers, including:
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-5">
          {browsers.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              {item}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Assistive Technologies</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Our website is designed to be compatible with common assistive technologies, including:
        </p>
        <ul className="mb-8 list-disc space-y-3 pl-5">
          {assistiveTech.map((item) => (
            <li key={item.bold} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              <span className="font-bold">{item.bold}</span>
              {item.text}
            </li>
          ))}
        </ul>

        <div className="rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="text-base leading-relaxed text-[#2C2C2C]">
            <span className="font-bold">Best Experience:</span> For the best accessibility
            experience, we recommend keeping your browser and assistive technology up to date
            with the latest versions.
          </p>
        </div>
      </div>
    </section>
  );
}
