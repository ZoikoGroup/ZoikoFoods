"use client";

import Link from "next/link";
import { MouseEvent } from "react";

const links = [
  { label: "Terms & Conditions", href: "/terms&conditions", accent: false },
  { label: "Privacy Policy", href: "/privacy-policy", accent: false },
  { label: "Cookie Policy & Preferences", href: "/cookie-policy&preferences", accent: true },
  { label: "Accessibility Statement", href: "#", accent: false },
];

export default function MobileFooter() {
  const scrollToPreferences = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("cookie-categories");
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#1a3309] px-8 py-12 lg:hidden">
      <div className="flex flex-col gap-4 border-b border-white/20 pb-6">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={"text-[14.4px] " + (link.accent ? "text-[#d4af37]" : "text-white")}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="#cookie-categories"
          id="footerCookieLink"
          onClick={scrollToPreferences}
          className="text-[14.4px] text-white"
        >
          Manage Cookie Preferences
        </a>
      </div>
      <div className="mt-6 text-[13.6px] text-white/80">
        <p>© 2026 Zoiko Foods Corp.</p>
        <p>All rights reserved.</p>
      </div>
      <p className="mt-4 text-[13.6px] text-white/80">Your privacy choices matter to us</p>
    </section>
  );
}
