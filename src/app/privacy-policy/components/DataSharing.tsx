import React from "react";

const groups = [
  {
    title: "Service Providers & Processors",
    items: [
      "Cloud hosting and infrastructure providers",
      "Analytics and performance monitoring services",
      "Customer support and communication platforms",
      "Email delivery and marketing automation tools (if applicable)",
    ],
  },
  {
    title: "Professional Advisers",
    items: [
      "Legal counsel, auditors, and consultants where necessary for professional advice",
    ],
  },
  {
    title: "Legal & Regulatory",
    items: [
      "Government authorities, regulators, and law enforcement when required by law",
      "Courts and dispute resolution bodies in legal proceedings",
    ],
  },
  {
    title: "Business Transfers",
    items: [
      "In connection with mergers, acquisitions, or asset sales, with appropriate safeguards",
    ],
  },
];

export default function DataSharing() {
  return (
    <section
      id="data-sharing"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-2xl font-bold text-[#0F2818]">
          7. Data Sharing &amp; Disclosure
        </h2>

        <p className="mb-8 text-base leading-relaxed text-[#2D2D2D]">
          We may share your personal information with the following categories of recipients:
        </p>

        <div className="space-y-8">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-lg font-bold text-[#0F2818]">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[#2D2D2D]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A472A]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="text-base leading-relaxed text-[#2D2D2D]">
            <span className="font-semibold text-[#0F2818]">CCPA Disclosure:</span> We do not
            &ldquo;sell&rdquo; or &ldquo;share&rdquo; personal information as defined under
            California law. We only disclose data to service providers under contractual
            restrictions that prevent them from using it for purposes beyond providing services to
            us.
          </p>
        </div>
      </div>
    </section>
  );
}
