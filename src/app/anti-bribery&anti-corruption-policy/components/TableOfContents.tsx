"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

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

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  const links = [
    { id: "commitment", label: "Commitment" },
    { id: "scope", label: "Scope" },
    { id: "definitions", label: "Definitions" },
    { id: "prohibited", label: "Prohibited" },
    { id: "gifts", label: "Gifts" },
    { id: "facilitation", label: "Facilitation" },
    { id: "donations", label: "Donations" },
    { id: "third-parties", label: "Third Parties" },
    { id: "conflicts", label: "Conflicts" },
    { id: "books", label: "Books" },
    { id: "training", label: "Training" },
    { id: "reporting", label: "Reporting" },
    { id: "enforcement", label: "Enforcement" },
    { id: "governance", label: "Governance" },
  ];

  return (
    <nav className="rounded-[12px] border border-[rgba(212,175,55,0.2)] bg-white p-[24px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.05)]">
      <h3 className="font-inter font-bold text-[#2d5016] text-[15.2px] tracking-[0.5px] uppercase">Contents</h3>
      <ul className="mt-4 flex flex-col space-y-1">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={(e) => scrollTo(e, link.id)}
              className={`block py-[10px] px-[12px] -mx-[12px] rounded-[6px] transition-colors font-inter text-[13.6px] ${
                activeId === link.id
                  ? "bg-gray-50 font-medium text-[#2d5016]"
                  : "text-[#2c2c2c] hover:bg-gray-50"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className="pt-4 mt-2 border-t border-[rgba(212,175,55,0.2)]">
          <a
            href="#top"
            onClick={(e) => scrollTo(e, "top")}
            className="flex items-center font-inter font-semibold text-[13.6px] text-[#2d5016] hover:opacity-80 transition-opacity"
          >
            ↑ Top
          </a>
        </li>
      </ul>
    </nav>
  );
}
