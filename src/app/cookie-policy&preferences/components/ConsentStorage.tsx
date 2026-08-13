import React from "react";

export default function ConsentStorage() {
  return (
    <section
      id="consent-storage"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <h2 className="border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2d5016]">
          Consent Storage &amp; Retention
        </h2>

        <div>
          <h3 className="mb-3 text-[20.8px] font-semibold text-[#2d5016]">
            How We Record Your Consent
          </h3>
          <p className="text-base leading-relaxed text-[#2c2c2c]">
            When you make a cookie preference choice, we store your decision using a first-party
            cookie called{" "}
            <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 text-[14.4px] text-[#2d5016]">
              cookie_consent
            </code>
            . This cookie is strictly necessary to remember your preferences and is always active.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-[20.8px] font-semibold text-[#2d5016]">What We Store</h3>
          <ul className="space-y-2">
            {[
              "Your consent/rejection for each cookie category",
              "The timestamp of your decision",
              "The version of the cookie policy you consented to",
            ].map((t) => (
              <li key={t} className="flex gap-2 text-base leading-relaxed text-[#2c2c2c]">
                <span className="text-[#d4af37]">•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-[20.8px] font-semibold text-[#2d5016]">Retention Period</h3>
          <p className="text-base leading-relaxed text-[#2c2c2c]">
            Your cookie preferences are stored for up to 12 months. After this period, we will ask
            for your preferences again to ensure your consent remains current and informed.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-[20.8px] font-semibold text-[#2d5016]">Changing Your Mind</h3>
          <p className="mb-3 text-base leading-relaxed text-[#2c2c2c]">
            You can change or withdraw your consent at any time by:
          </p>
          <ul className="space-y-2">
            {[
              'Clicking "Manage Cookie Preferences" in the footer of any page',
              "Returning to this page and adjusting your settings",
              "Clearing your browser cookies (this will reset all preferences)",
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
            Device &amp; Browser Specific
          </h3>
          <p className="text-base leading-relaxed text-[#2c2c2c]">
            Cookie preferences are specific to the device and browser you use. If you access our
            website from multiple devices or browsers, you&apos;ll need to set your preferences on
            each one separately.
          </p>
        </div>
      </div>
    </section>
  );
}
