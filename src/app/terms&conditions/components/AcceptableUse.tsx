import React from "react";

const permittedUse = [
  "Browsing and accessing publicly available information",
  "Submitting legitimate business inquiries or requests",
  "Downloading publicly provided resources for internal evaluation and reference",
  "Engaging with features and services we make available to you",
];

const securityAbuse = [
  "Use automated systems (bots, scrapers, crawlers) to extract, index, or collect content without our express written permission",
  "Circumvent, disable, or interfere with security features, authentication mechanisms, or rate limits",
  "Introduce viruses, malware, ransomware, or any malicious code",
  "Engage in denial-of-service attacks, network flooding, or similar disruptive activity",
  "Attempt to gain unauthorized access to our systems, servers, networks, or data",
  "Probe, scan, or test the vulnerability of our systems without authorization",
];

const contentAbuse = [
  "Impersonate any person, entity, or Zoiko Foods Corp representative",
  "Submit false, misleading, fraudulent, or infringing content",
  "Use forms, contact mechanisms, or submission features for spam, solicitation, or malicious activity",
  "Reverse engineer, decompile, or disassemble any aspect of the Site or its underlying technology",
  "Use the Site for any illegal, harmful, or abusive purpose",
  "Violate any applicable laws, regulations, or third-party rights",
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

export default function AcceptableUse() {
  return (
    <section
      id="acceptable-use"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          4. Use of Website &amp; Acceptable Use Rules
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Permitted Use</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          You may use the Site for the following lawful purposes:
        </p>
        <BulletList items={permittedUse} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Prohibited Conduct</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">You agree not to:</p>

        <h4 className="mb-3 text-[17.6px] font-semibold text-[#2C2C2C]">Security &amp; System Abuse</h4>
        <BulletList items={securityAbuse} />

        <h4 className="mb-3 text-[17.6px] font-semibold text-[#2C2C2C]">Content &amp; Conduct Abuse</h4>
        <BulletList items={contentAbuse} />

        <div className="rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="mb-2 text-[17.6px] font-semibold text-[#2D5016]">Enforcement</p>
          <p className="text-base leading-relaxed text-[#2C2C2C]">
            Violation of these rules may result in immediate suspension or termination of access,
            and we reserve the right to report violations to law enforcement authorities where
            appropriate.
          </p>
        </div>
      </div>
    </section>
  );
}
