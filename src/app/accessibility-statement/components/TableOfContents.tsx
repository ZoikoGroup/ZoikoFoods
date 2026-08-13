import React from "react";

const links = [
  { href: "#commitment", label: "Our Commitment" },
  { href: "#scope", label: "Scope" },
  { href: "#standards-guidelines", label: "Standards & Guidelines" },
  { href: "#accessibility-features", label: "Accessibility Features" },
  { href: "#ongoing-efforts", label: "Ongoing Efforts" },
  { href: "#known-limitations", label: "Known Limitations" },
  { href: "#support", label: "Feedback & Support" },
  { href: "#compatibility", label: "Compatibility" },
  { href: "#updates", label: "Updates & Review" },
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
