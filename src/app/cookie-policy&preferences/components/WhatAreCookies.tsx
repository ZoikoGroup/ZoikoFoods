import React from "react";

export default function WhatAreCookies() {
  return (
    <section
      id="what-are-cookies"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2d5016]">
          What Are Cookies &amp; Similar Technologies?
        </h2>

        <div className="mb-8">
          <h3 className="mb-3 text-[20.8px] font-semibold text-[#2d5016]">Cookies</h3>
          <p className="text-base leading-relaxed text-[#2c2c2c]">
            Cookies are small text files stored on your device (computer, tablet, phone) when you
            visit websites. They help websites remember information about your visit, such as your
            preferences, login status, or items in your shopping cart.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="mb-3 text-[20.8px] font-semibold text-[#2d5016]">Similar Technologies</h3>
          <ul className="space-y-2">
            {[
              "Pixels/Tags: Small pieces of code embedded in web pages that measure usage and track conversions",
              "Local Storage: Browser storage that saves data locally for faster performance and offline capabilities",
              "Session Storage: Temporary storage that expires when you close your browser",
            ].map((t) => (
              <li key={t} className="flex gap-2 text-base leading-relaxed text-[#2c2c2c]">
                <span className="text-[#d4af37]">•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-[20.8px] font-semibold text-[#2d5016]">
            First-Party vs Third-Party
          </h3>
          <ul className="space-y-2">
            {[
              "First-party cookies: Set by Zoiko Foods Corp directly to operate our website",
              "Third-party cookies: Set by external services (analytics, advertising) that we use",
            ].map((t) => (
              <li key={t} className="flex gap-2 text-base leading-relaxed text-[#2c2c2c]">
                <span className="text-[#d4af37]">•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
