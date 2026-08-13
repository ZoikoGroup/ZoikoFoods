import React from "react";
import { CheckIcon, ClipboardIcon, EnvelopeIcon } from "../../../components/icons";

const meta = [
  { label: "Last Reviewed", value: "January 30, 2026" },
  { label: "Review Cadence", value: "Annually or with major changes" },
];

export default function HeroSection() {
  return (
    <section
      className="border-b border-solid px-6 py-14 sm:px-10 lg:px-20"
      style={{
        borderColor: "rgba(212,175,55,0.2)",
        backgroundImage:
          "linear-gradient(140deg, rgba(45,80,22,0.03) 0%, rgba(212,175,55,0.03) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <h1
          className="mb-[32px] bg-clip-text text-[40px] font-extrabold tracking-tight text-transparent lg:mb-[36px] lg:text-[56px]"
          style={{
            backgroundImage: "linear-gradient(127deg, rgb(26,51,9) 0%, rgb(45,80,22) 100%)",
          }}
        >
          Accessibility
          <br className="lg:hidden" /> Statement
        </h1>
        <p className="mb-[41px] max-w-3xl text-[20px] leading-[1.4] text-[#2C2C2C]">
          We are committed to providing a website experience that is accessible to everyone,
          <br className="hidden lg:block" /> including people with disabilities.
        </p>

        <div className="mb-[40px] flex flex-col gap-y-[35px] sm:flex-row sm:flex-wrap sm:gap-x-[43px] sm:gap-y-0">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="text-[13.6px] font-semibold uppercase tracking-wide text-[#2D5016]">
                {m.label}
              </p>
              <p className="mt-2 text-[15.2px] text-[#2C2C2C]">{m.value}</p>
            </div>
          ))}
        </div>

        <div
          className="inline-flex items-center gap-2 rounded-[20px] px-5 py-2.5 text-[14.4px] font-semibold text-white"
          style={{
            backgroundImage: "linear-gradient(135deg, rgb(45,80,22) 0%, rgb(74,124,46) 100%)",
          }}
        >
          <CheckIcon className="size-4" />
          <span>WCAG 2.1 Level AA Alignment</span>
        </div>

        <div className="mt-[32px] flex flex-col gap-[16px] lg:hidden">
          <a
            href="#support"
            className="flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-center text-[15.2px] font-semibold text-white shadow-[0px_2px_6px_rgba(212,175,55,0.25)]"
            style={{
              backgroundImage: "linear-gradient(135deg, rgb(184,148,30) 0%, rgb(212,175,55) 100%)",
            }}
          >
            <ClipboardIcon className="size-[18px]" />
            Report an Accessibility Issue
          </a>
          <a
            href="mailto:accessibility@zoikofoods.com"
            className="flex h-[59px] items-center justify-center gap-2 rounded-lg border-2 border-[#2d5016] bg-white px-6 text-center text-[15.2px] font-semibold text-[#2d5016]"
          >
            <EnvelopeIcon className="size-[18px]" />
            Contact Accessibility Support
          </a>
          <a
            href="#standards-guidelines"
            className="mt-[12px] text-center text-[15.2px] font-semibold text-[#2d5016] underline"
          >
            View Our Accessibility Standards
          </a>
        </div>
      </div>
    </section>
  );
}
