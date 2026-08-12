import React from "react";
import HeroSection from "./components/HeroSection";
import TableOfContents from "./components/TableOfContents";
import PolicyContent from "./components/PolicyContent";

export const metadata = {
  title: "Anti-Bribery & Anti-Corruption Policy | Zoiko Foods Corp",
  description:
    "Zoiko Foods Corp maintains a zero-tolerance policy for bribery, corruption, kickbacks, and facilitation payments.",
};

export default function AntiBriberyPolicyPage() {
  return (
    <main id="top" className="min-h-screen bg-[#FAF8F5]">
      <HeroSection />

      <div className="mx-auto max-w-[1440px] py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <aside className="px-6 sm:px-10 lg:sticky lg:top-24 lg:w-[320px] lg:shrink-0 lg:px-10">
            <TableOfContents />
          </aside>

          <div className="min-w-0 flex-1 mx-6 sm:mx-10 lg:mx-0 lg:mr-10 rounded-2xl border border-[rgba(212,175,55,0.2)] bg-white shadow-sm overflow-hidden">
            <PolicyContent />
          </div>
        </div>
      </div>
    </main>
  );
}
