import React from "react";

const links = [
  { href: "#at-a-glance-summary", label: "At-a-Glance" },
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#data-we-collect", label: "Data We Collect" },
  { href: "#how-we-use-data", label: "How We Use Data" },
  { href: "#legal-bases-gdpr", label: "Legal Bases (GDPR)" },
  { href: "#cookies-tracking", label: "Cookies & Tracking" },
  { href: "#data-sharing", label: "Data Sharing" },
  { href: "#international-transfers", label: "International Transfers" },
  { href: "#data-retention", label: "Data Retention" },
  { href: "#your-rights", label: "Your Rights" },
  { href: "#security", label: "Security" },
  { href: "#childrens-privacy", label: "Children's Privacy" },
  { href: "#automated-decisions", label: "Automated Decisions" },
  { href: "#policy-updates", label: "Policy Updates" },
  { href: "#contact-complaints", label: "Contact & Complaints" },
];

export default function TableOfContents() {
  return (
    <nav
      className="rounded-xl border border-solid bg-white p-6"
      style={{ borderColor: "rgba(212,175,55,0.2)", boxShadow: "0px 2px 6px rgba(0,0,0,0.05)" }}
      aria-label="Table of contents"
    >
      <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[#0F2818]">Contents</p>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="block rounded-md px-3 py-2.5 text-sm text-[#2D2D2D] transition hover:bg-[#F8F9FA] hover:text-[#1A472A]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t border-[#E0E0E0] pt-4">
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A472A]"
        >
          ↑ Back to Top
        </a>
      </div>
    </nav>
  );
}
