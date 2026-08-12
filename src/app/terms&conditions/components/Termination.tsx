import React from "react";

const terminationGrounds = [
  "Violation of these Terms",
  "Suspected fraudulent, abusive, or illegal activity",
  "Security risks or threats to the integrity of our systems",
  "Compliance with legal or regulatory requirements",
  "Discontinuation or modification of the Site or services",
];

const terminationEffects = [
  "Your right to access and use the Site immediately ceases",
  "Any licenses granted to you are automatically revoked",
  "We may delete or retain your account and data as described in our Privacy Policy",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
      {items.map((item) => (
        <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">{item}</li>
      ))}
    </ul>
  );
}

export default function Termination() {
  return (
    <section
      id="termination"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          13. Termination &amp; Suspension
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Our Right to Terminate</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          We reserve the right to suspend, restrict, or terminate your access to the Site at any
          time, with or without notice, for any reason, including but not limited to:
        </p>
        <BulletList items={terminationGrounds} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Effect of Termination</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">Upon termination:</p>
        <BulletList items={terminationEffects} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Survival</h3>
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          The following sections survive termination: Intellectual Property, Disclaimers,
          Limitation of Liability, Indemnification, Governing Law, and Dispute Resolution.
        </p>
      </div>
    </section>
  );
}
