import React from "react";

const links = [
  { href: "#key-terms-summary", label: "Key Terms Summary" },
  { href: "#acceptance", label: "1. Acceptance" },
  { href: "#eligibility", label: "2. Eligibility" },
  { href: "#accounts", label: "3. Accounts" },
  { href: "#acceptable-use", label: "4. Acceptable Use" },
  { href: "#user-content", label: "5. User Content" },
  { href: "#intellectual-property", label: "6. Intellectual Property" },
  { href: "#disclaimers", label: "7. Disclaimers" },
  { href: "#third-party-links", label: "8. Third-Party Links" },
  { href: "#warranty-disclaimer", label: "9. Warranty Disclaimer" },
  { href: "#limitation-of-liability", label: "10. Limitation of Liability" },
  { href: "#indemnification", label: "11. Indemnification" },
  { href: "#privacy-data", label: "12. Privacy & Data" },
  { href: "#termination", label: "13. Termination" },
  { href: "#dispute-resolution", label: "14. Dispute Resolution" },
  { href: "#governing-law", label: "15. Governing Law" },
  { href: "#changes-to-terms", label: "16. Changes to Terms" },
  { href: "#general-provisions", label: "17. General Provisions" },
  { href: "#contact", label: "18. Contact" },
];

export default function TableOfContents() {
  return (
    <nav
      className="rounded-xl border border-solid bg-white p-6"
      style={{ borderColor: "rgba(212,175,55,0.2)", boxShadow: "0px 2px 12px rgba(0,0,0,0.05)" }}
      aria-label="Table of contents"
    >
      <p className="mb-4 text-[15.2px] font-bold uppercase tracking-wide text-[#2D5016]">Contents</p>
      <ul className="space-y-1">
        {links.map((link, idx) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`block rounded-md px-3 py-2.5 text-[13.6px] transition hover:bg-[#F8F9FA] ${
                idx === links.length - 1
                  ? "font-semibold text-[#2D5016]"
                  : "text-[#2C2C2C] hover:text-[#2D5016]"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t border-[rgba(212,175,55,0.2)] pt-4">
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-[13.6px] font-semibold text-[#2D5016]"
        >
          ↑ Back to Top
        </a>
      </div>
    </nav>
  );
}
