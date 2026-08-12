import React from "react";

const changes = [
  {
    label: "Material Changes",
    description:
      "We will notify you via email (if we have your contact information) or prominent notice on our website",
  },
  {
    label: "Minor Updates",
    description: "Reflected in the 'Last Updated' date at the top of this policy",
  },
  {
    label: "Continued Use",
    description:
      "Your continued use of our services after updates constitutes acceptance of the revised policy",
  },
];

export default function PolicyUpdates() {
  return (
    <section id="policy-updates" className="border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold text-[#0F2818]">
          14. Policy Updates &amp; Version Control
        </h2>

        <p className="text-base leading-relaxed text-[#2D2D2D]">
          We may update this Privacy Policy from time to time to reflect changes in our
          practices, legal requirements, or service offerings.
        </p>

        <h3 className="mb-4 mt-8 text-lg font-bold text-[#0F2818]">How We Communicate Changes</h3>

        <ul className="space-y-3">
          {changes.map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-base text-[#2D2D2D]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A472A]" />
              <span className="leading-relaxed">
                <span className="font-semibold text-[#0F2818]">{item.label}:</span>{" "}
                {item.description}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-base leading-relaxed text-[#2D2D2D]">
          We encourage you to review this policy periodically to stay informed about how we
          protect your information.
        </p>
      </div>
    </section>
  );
}
