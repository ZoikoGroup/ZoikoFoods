"use client";

import { MouseEvent } from "react";
import { GearIcon, BanIcon, CheckIcon } from "../../../components/icons";

const meta = [
  { label: "Effective Date", value: "January 1, 2025" },
  { label: "Last Updated", value: "January 30, 2026" },
];

export default function HeroSection() {
  const scrollToCategories = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("cookie-categories");
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
    }
  };

  return (
    <section
      className="border-b border-solid px-6 py-12 sm:px-10 lg:px-[120px] lg:py-16"
      style={{
        borderColor: "rgba(212,175,55,0.2)",
        backgroundImage:
          "linear-gradient(138deg, rgba(45,80,22,0.03) 0%, rgba(212,175,55,0.03) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h1
          className="mb-4 bg-clip-text text-[40px] font-extrabold leading-[1.2] tracking-[-1px] text-transparent lg:text-[56px] lg:leading-[1.05]"
          style={{
            backgroundImage: "linear-gradient(131deg, rgb(26,51,9) 0%, rgb(45,80,22) 100%)",
          }}
        >
          Cookie Policy &amp;
          <br className="lg:hidden" /> Preferences
        </h1>

        <p className="mb-8 max-w-[310px] text-[20px] leading-[1.7] text-[#2c2c2c] lg:max-w-3xl">
          How we use cookies and similar technologies — and how you control them.
        </p>

        <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-12">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="text-[13.6px] font-semibold uppercase tracking-wide text-[#2d5016]">
                {m.label}
              </p>
              <p className="mt-1 text-[15.2px] text-[#2c2c2c]">{m.value}</p>
            </div>
          ))}
        </div>

        <p className="mb-8 max-w-[340px] text-[14.4px] italic leading-relaxed text-[#8b8b8b] lg:max-w-3xl">
          You can change your choices at any time. We use non-essential cookies only with your
          permission.
        </p>

        <div className="flex flex-col gap-3 lg:hidden">
          <a
            href="#cookie-categories"
            onClick={scrollToCategories}
            className="flex items-center justify-center gap-2 rounded-lg py-3.5 text-center text-[15.2px] font-semibold text-white shadow-[0px_2px_6px_rgba(212,175,55,0.25)]"
            style={{
              backgroundImage: "linear-gradient(135deg, rgb(184,148,30) 0%, rgb(212,175,55) 100%)",
            }}
          >
            <GearIcon className="size-[18px]" />
            Manage Cookie Preferences
          </a>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#2d5016] bg-white py-3.5 text-center text-[15.2px] font-semibold text-[#2d5016]"
          >
            <BanIcon className="size-[18px]" />
            Reject Non-Essential Cookies
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#2d5016] py-3.5 text-center text-[15.2px] font-semibold text-white shadow-[0px_2px_6px_rgba(45,80,22,0.25)]"
          >
            <CheckIcon className="size-[18px]" />
            Accept All Cookies
          </button>
        </div>
      </div>
    </section>
  );
}
