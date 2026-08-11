"use client";

import React, { useState } from "react";
import { Search, ArrowRight } from "lucide-react";

const GREEN = "#1A472A";

const statements = [
  {
    title: "Zoiko Foods Corp Announces Strategic Partnership with Regional Distribution Network",
    date: "January 15, 2026",
    body: "Zoiko Foods Corp has entered into a structured distribution agreement to expand market reach across key territories while maintaining brand governance and channel discipline.",
    tag: "Press Release",
  },
  {
    title: "Zoiko Foods Corp Strengthens Quality and Food Safety Commitment",
    date: "January 8, 2026",
    body: "",
    tag: "",
  },
];

const filters = ["All", "Press Releases", "Corporate Updates", "Brand Launches", "Trade Announcements"];

export default function OfficialStatementsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-[36px] font-bold text-[#0F2818]">Official Statements &amp; Announcement</h2>
        <p className="mb-8 text-lg text-[#666]">
          Verified corporate communications and press releases
        </p>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={
                  "rounded-full px-4 py-2 text-sm font-medium transition " +
                  (activeFilter === f
                    ? "text-white"
                    : "border border-[#E0E0E0] text-[#2D2D2D] hover:bg-stone-50")
                }
                style={activeFilter === f ? { backgroundColor: GREEN, borderColor: GREEN } : {}}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded border border-[#E0E0E0] bg-white px-3 h-[47px] w-full sm:w-[214px]">
            <Search size={16} className="text-[#666] shrink-0" />
            <input
              type="text"
              aria-label="Search statements"
              className="w-full text-base text-[#2D2D2D] outline-none placeholder:text-[#666]"
            />
          </div>
        </div>

        <div className="space-y-5">
          {statements.map((s) => (
            <div key={s.title} className="rounded-lg border border-[#E0E0E0] p-8">
              <h3 className="mb-1.5 text-[22px] font-bold text-[#0F2818]">{s.title}</h3>
              <p className="mb-3 text-sm text-[#666]">{s.date}</p>
              {s.body && (
                <p className="mb-5 text-base leading-relaxed text-[#2D2D2D]">{s.body}</p>
              )}
              {(s.tag || s.body) && (
                <div className="flex items-center justify-between">
                  {s.tag ? (
                    <span className="rounded bg-[#F8F9FA] px-3 py-1.5 text-[13px] font-semibold text-[#2D2D2D]">
                      {s.tag}
                    </span>
                  ) : (
                    <span />
                  )}
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-base font-semibold"
                    style={{ color: GREEN }}
                  >
                    Read statement <ArrowRight size={14} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
