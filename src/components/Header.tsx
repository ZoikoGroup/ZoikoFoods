"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/brands", label: "Our Brands" },
    { href: "/heritage", label: "Heritage & Roots" },
    { href: "/journal", label: "Culinary Journal" },
    { href: "/distribution", label: "Distribution" },
  ];

  return (
    <header className="w-full bg-white/95 shadow-[0px_2px_20px_rgba(0,0,0,0.10)] backdrop-blur-[5px]">
      <div className="max-w-[1440px] h-16 mx-auto px-4 sm:px-8 lg:px-[88px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Zoiko Foods"
            width={172}
            height={53}
            priority
            className="w-[130px] lg:w-[172px] h-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#2C2C2C] text-base font-normal leading-6 hover:text-[#1E4538] transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Contact Button */}
          <Link
            href="/contact"
            className="bg-[#1E4538] text-white text-sm lg:text-base font-semibold px-4 py-2 lg:px-8 lg:py-3 rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#17372d] transition"
          >
            Contact Us
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-[2px] bg-[#1E4538]"></span>
            <span className="w-6 h-[2px] bg-[#1E4538]"></span>
            <span className="w-6 h-[2px] bg-[#1E4538]"></span>
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#2C2C2C] text-base font-normal leading-6 hover:text-[#1E4538] transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
