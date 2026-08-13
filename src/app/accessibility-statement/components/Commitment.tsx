import React from "react";
import {
  CheckIcon,
  PaletteIcon,
  MegaphoneIcon,
  HandshakeIcon,
  RefreshIcon,
} from "../../../components/icons";

const items = [
  {
    icon: CheckIcon,
    bold: "We strive to meet WCAG 2.1 Level AA standards",
    text: "across our digital properties",
  },
  {
    icon: PaletteIcon,
    bold: "We design and test with accessibility in mind",
    text: "from the start of every project",
  },
  {
    icon: MegaphoneIcon,
    bold: "We welcome feedback",
    text: "and act promptly on reported accessibility issues",
  },
  {
    icon: HandshakeIcon,
    bold: "We provide support",
    text: "if you encounter a barrier while using our website",
  },
  {
    icon: RefreshIcon,
    bold: "Accessibility is part of our continuous improvement process",
    text: ", not a one-time effort",
  },
];

export default function Commitment() {
  return (
    <section id="commitment" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-10 sm:px-10">
      <div
        className="rounded-xl border-2 border-[#D4AF37] p-8 sm:p-10"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(45, 80, 22, 0.05) 100%)",
        }}
      >
        <h2 className="mb-8 text-[24px] font-bold text-[#2D5016]">Our Accessibility Commitment</h2>

        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.bold} className="flex items-start gap-4">
              <span
                className="flex size-8 shrink-0 items-center justify-center rounded-lg text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(115deg, rgb(34,139,34) 0%, rgb(45,90,61) 50%, rgb(212,165,116) 100%), linear-gradient(135deg, rgb(212,175,55) 0%, rgb(184,148,30) 100%)",
                }}
              >
                <item.icon className="size-4" />
              </span>
              <p className="text-base leading-relaxed text-[#2C2C2C]">
                <span className="font-bold">{item.bold}</span>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
