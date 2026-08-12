import React from "react";

export default function PrivacyData() {
  return (
    <section
      id="privacy-data"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          12. Privacy, Cookies, and Data Handling
        </h2>

        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Your use of the Site is also governed by our Privacy Policy and Cookie Policy, which
          explain how we collect, use, protect, and share your personal information.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Incorporated Policies</h3>
        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          <li className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
            <a href="/privacy-policy" className="font-semibold text-[#2D5016] underline">
              Privacy Policy
            </a>{" "}
            &ndash; How we handle your personal data
          </li>
          <li className="pl-1 text-base leading-relaxed text-[#2C2C2C]">
            Cookie Policy &amp; Preferences &ndash; How we use cookies and tracking technologies
          </li>
        </ul>

        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          By using the Site, you acknowledge and agree to the practices described in these
          policies.
        </p>

        <div className="rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="text-base leading-relaxed text-[#2C2C2C]">
            <span className="font-bold">Data Protection Rights:</span> If you
            are located in the EEA, UK, California, or other jurisdictions with data protection
            laws, you have specific rights regarding your personal information. See our Privacy
            Policy for details.
          </p>
        </div>
      </div>
    </section>
  );
}
