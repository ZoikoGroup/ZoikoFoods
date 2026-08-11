import React from "react";

const summaryItems = [
  {
    icon: "📊",
    label: "What we collect",
    text: "Contact details, device data, and usage analytics (if enabled) to deliver and improve our services.",
  },
  {
    icon: "🎯",
    label: "Why we collect it",
    text: "To deliver services, improve performance, protect security, and comply with legal obligations.",
  },
  {
    icon: "🤝",
    label: "How we share it",
    text: "With service providers who help us operate. We do not sell your personal information.",
  },
  {
    icon: "🍪",
    label: "Cookies",
    text: "You control optional cookies via your preferences. Essential cookies ensure site functionality.",
  },
  {
    icon: "⚖️",
    label: "Your rights",
    text: "Access, delete, correct, and opt-out rights available (where applicable by law).",
  },
  {
    icon: "🔒",
    label: "Security",
    text: "We implement appropriate safeguards and incident response practices to protect your data.",
  },
  {
    icon: "✉️",
    label: "Contact",
    text: "Reach our privacy team at privacy@zoikofoods.com",
  },
];

export default function AtAGlanceSummary() {
  return (
    <section id="at-a-glance-summary" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-10 sm:px-10">
      <div
        className="rounded-xl border-2 border-[#D4AF37] p-8 sm:p-10"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(45, 80, 22, 0.05) 100%)",
        }}
      >
        <h2 className="mb-8 text-center text-2xl font-bold text-[#0F2818]">
          Your Privacy, Simplified
        </h2>

        <ul className="space-y-6">
          {summaryItems.map((item) => (
            <li key={item.label} className="flex items-start gap-4">
              <span
                className="flex size-8 shrink-0 items-center justify-center rounded-lg text-base"
                style={{
                  backgroundImage:
                    "linear-gradient(115deg, rgb(34, 139, 34) 0%, rgb(45, 90, 61) 50%, rgb(212, 165, 116) 100%), linear-gradient(135deg, rgb(212, 175, 55) 0%, rgb(184, 148, 30) 100%)",
                }}
              >
                {item.icon}
              </span>
              <p className="text-base leading-relaxed text-[#2D2D2D]">
                <span className="font-semibold text-[#0F2818]">{item.label}:</span>{" "}
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
