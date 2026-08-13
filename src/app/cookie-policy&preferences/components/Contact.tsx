import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2d5016]">
          Contact &amp; Questions
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[#2c2c2c]">
          If you have questions about our use of cookies or wish to raise concerns about our
          cookie practices, please contact:
        </p>

        <div className="rounded-xl bg-[#F5F5F5] p-6 sm:p-8">
          <h3 className="mb-3 text-[20.8px] font-semibold text-[#2d5016]">Privacy Team</h3>
          <p className="mb-3 text-base text-[#2c2c2c]">
            Email:{" "}
            <a
              href="mailto:privacy@zoikofoods.com"
              className="font-semibold text-[#2d5016] underline"
            >
              privacy@zoikofoods.com
            </a>
          </p>
          <p className="text-base leading-relaxed text-[#2c2c2c]">
            For comprehensive information about how we handle personal data, see our{" "}
            <a href="/privacy-policy" className="font-semibold text-[#2d5016] underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
