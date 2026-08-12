import React from "react";

const accountRules = [
  "Provide accurate, current, and complete information during registration",
  "Maintain and promptly update your account information to keep it accurate and current",
  "Maintain the security and confidentiality of your login credentials",
  "Notify us immediately of any unauthorized use of your account or any security breach",
  "Accept responsibility for all activities that occur under your account",
];

export default function Accounts() {
  return (
    <section id="accounts" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          3. Accounts &amp; Registration
        </h2>

        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          Certain features or services on the Site may require you to register for an account or
          provide contact information.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Account Accuracy &amp; Security</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">You agree to:</p>
        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {accountRules.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">{item}</li>
          ))}
        </ul>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">
          Account Suspension &amp; Termination
        </h3>
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          We reserve the right to suspend or terminate your account at any time, with or without
          notice, for violation of these Terms, suspected fraudulent or abusive activity, or as
          required by law.
        </p>
      </div>
    </section>
  );
}
