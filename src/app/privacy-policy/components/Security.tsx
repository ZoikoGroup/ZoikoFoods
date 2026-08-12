import React from "react";

const practices = [
  {
    title: "Access Controls",
    text: "Role-based access and least privilege principles",
  },
  {
    title: "Encryption",
    text: "Data encryption in transit (TLS) and at rest where appropriate",
  },
  {
    title: "Monitoring",
    text: "Security monitoring, logging, and incident detection systems",
  },
  {
    title: "Vendor Management",
    text: "Due diligence and contractual safeguards for service providers",
  },
  {
    title: "Incident Response",
    text: "Procedures for identifying, responding to, and reporting security incidents",
  },
  {
    title: "Regular Reviews",
    text: "Periodic security assessments and updates",
  },
];

export default function Security() {
  return (
    <section id="security" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-2xl font-bold text-[#0F2818]">
          11. Security &amp; Safeguards
        </h2>

        <p className="mb-6 text-base leading-relaxed text-[#2D2D2D]">
          We implement appropriate technical and organizational security measures to protect your
          personal information from unauthorized access, disclosure, alteration, and destruction.
        </p>

        <h3 className="mb-4 text-xl font-bold text-[#0F2818]">Security Practices</h3>
        <ul className="mb-8 space-y-3">
          {practices.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3 text-base leading-relaxed text-[#2D2D2D]"
            >
              <img
                src="/images/tick.png"
                alt="tick"
                className="mt-1 h-[15px] w-[15px] shrink-0 object-contain"
              />
              <span>
                <span className="font-semibold text-[#0F2818]">{item.title}:</span> {item.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="text-base leading-relaxed text-[#2D2D2D]">
            <span className="font-semibold text-[#0F2818]">Important:</span> While we implement
            industry-standard security measures, no system is 100% secure. We cannot guarantee
            absolute security but commit to using reasonable and appropriate safeguards
            proportionate to the risks involved.
          </p>
        </div>
      </div>
    </section>
  );
}
