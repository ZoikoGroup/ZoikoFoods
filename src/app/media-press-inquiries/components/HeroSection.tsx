"use client";

import React from "react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const GOLD = "#C8A35F";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-start gap-3 text-base text-white leading-[25.6px]">
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
        style={{ backgroundColor: GOLD }}
      >
        <Check size={12} color="#FFFFFF" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </span>
  );
}

export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      style={{ backgroundImage: "linear-gradient(135deg, #0F2818 0%, #1A472A 100%)" }}
      className="px-6 py-16 sm:px-10 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h1 className="mb-4 text-3xl md:text-[40px] font-bold leading-tight md:leading-[57.6px] text-white">
            Media &amp; Press Inquiries
          </h1>
          <p className="mb-2 text-xl md:text-[19px] text-white opacity-95 leading-[32px]">
            Official information, statements, and media contact for Zoiko Foods Corp
          </p>
          <p className="mb-8 text-base text-white opacity-90 leading-[25.6px]">
            Verified facts and structured processes — designed for accuracy and accountability
          </p>
          <button
            onClick={() => router.push("/media-press-inquiries/submit")}
            className="mb-12 rounded px-8 py-4 bg-white text-base font-semibold text-[#1A472A] transition hover:bg-gray-100"
          >
            Submit a Media Enquiry
          </button>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            <Pill>Official corporate communications</Pill>
            <Pill>Verified statements and timestamps</Pill>
            <Pill>Structured response and correction process</Pill>
          </div>
        </div>
        <div className="overflow-hidden rounded-[10px]">
          <img
            src="/media-press-hero.jpg"
            alt="Journalist holding a microphone"
            className="h-64 w-full object-cover sm:h-80 lg:h-[364px]"
          />
        </div>
      </div>
    </section>
  );
}
