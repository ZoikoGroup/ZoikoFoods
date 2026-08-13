import React from "react";
import { EnvelopeIcon, ClipboardIcon, MapPinIcon } from "../../../components/icons";

const reportChecklist = [
  "The web page URL where you encountered the issue",
  "A description of the problem or barrier",
  "The assistive technology you were using (if applicable)",
  "Your browser and operating system",
  "Your contact information if you'd like a response",
];

export default function Support() {
  return (
    <section id="support" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          Feedback &amp; Support
        </h2>

        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          If you encounter an accessibility barrier anywhere on our website, we want to know. Your
          feedback directly shapes our remediation priorities.
        </p>

        <div
          className="relative mb-8 overflow-hidden rounded-2xl p-10"
          style={{
            backgroundImage: "linear-gradient(135deg, rgb(26,51,9) 0%, rgb(45,80,22) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0) 70%)",
            }}
          />

          <h3 className="relative mb-5 border-b-2 border-[rgba(212,175,55,0.3)] pb-6 text-[28.8px] font-bold leading-tight text-white">
            Need Help or Found an Accessibility Issue?
          </h3>
          <p className="relative mb-7 max-w-[500px] text-base leading-[1.8] text-white/95">
            We want to hear from you. If you encounter an accessibility barrier while using our
            website, or if you need assistance accessing any content, please contact us.
          </p>

          <div className="relative flex flex-col gap-4">
            <div className="flex items-center gap-4 rounded-lg bg-white/10 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(212,175,55,0.3)] text-white">
                <EnvelopeIcon className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-base font-bold text-white">Email</p>
                <a
                  href="mailto:accessibility@zoikofoods.com"
                  className="block break-words text-base font-semibold text-white"
                >
                  accessibility@zoikofoods.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-lg bg-white/10 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(212,175,55,0.3)] text-white">
                <ClipboardIcon className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-base font-bold text-white">Report Form</p>
                <a
                  href="mailto:accessibility@zoikofoods.com?subject=Accessibility%20Issue%20Report"
                  className="break-words text-base font-semibold text-white underline"
                >
                  Submit an accessibility report
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-lg bg-white/10 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(212,175,55,0.3)] text-white">
                <MapPinIcon className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-base font-bold text-white">Postal Address</p>
                <p className="break-words text-base leading-[1.7] text-white">
                  Zoiko Foods Corp, Accessibility Team
                  <br />
                  [Corporate Address], [City, State, Postal Code]
                </p>
              </div>
            </div>
          </div>

          <p className="relative mt-7 max-w-[480px] text-base leading-[1.8] text-white/95">
            <span className="font-bold">Response Time:</span> We aim to respond to accessibility
            inquiries as soon as practicable, typically within 2-3 business days.
          </p>
        </div>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">
          What to Include in Your Report
        </h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          To help us address your concern quickly, please provide:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          {reportChecklist.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
