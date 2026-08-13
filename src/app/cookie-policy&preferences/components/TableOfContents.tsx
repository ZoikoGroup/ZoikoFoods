"use client";

import { MouseEvent, useEffect, useState } from "react";

const links = [
  { id: "at-a-glance", label: "At-a-Glance" },
  { id: "what-are-cookies", label: "What Are Cookies" },
  { id: "cookie-categories", label: "Cookie Categories" },
  { id: "vendors-cookie-details", label: "Vendors & Details" },
  { id: "consent-storage", label: "Consent Storage" },
  { id: "do-not-sell-share", label: "Do Not Sell/Share" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "contact", label: "Contact" },
];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentActiveId = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          currentActiveId = section.getAttribute("id") || "";
        }
      });

      setActiveId(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="rounded-xl border border-solid bg-white p-6"
      style={{ borderColor: "rgba(212,175,55,0.2)", boxShadow: "0px 2px 12px rgba(0,0,0,0.05)" }}
      aria-label="Table of contents"
    >
      <p className="mb-4 text-[15.2px] font-bold uppercase tracking-wide text-[#2d5016]">Contents</p>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={(e) => scrollTo(e, link.id)}
              className={`block rounded-md px-3 py-2.5 text-[13.6px] transition hover:bg-[#F8F9FA] ${
                activeId === link.id
                  ? "bg-[#F8F9FA] font-semibold text-[#2d5016]"
                  : "text-[#2c2c2c] hover:text-[#2d5016]"
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
          onClick={(e) => scrollTo(e, "top")}
          className="inline-flex items-center gap-1.5 text-[13.6px] font-semibold text-[#2d5016]"
        >
          ↑ Back to Top
        </a>
      </div>
    </nav>
  );
}
