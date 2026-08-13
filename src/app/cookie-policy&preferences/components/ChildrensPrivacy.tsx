import React from "react";

export default function ChildrensPrivacy() {
  return (
    <section
      id="childrens-privacy"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl space-y-4">
        <h2 className="mb-2 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2d5016]">
          Children&apos;s Privacy &amp; Tracking
        </h2>
        <p className="text-base leading-relaxed text-[#2c2c2c]">
          Our website is not directed to children under the age of 16, and we do not knowingly
          collect personal information or use tracking technologies to collect data from children.
        </p>
        <p className="text-base leading-relaxed text-[#2c2c2c]">
          If you are a parent or guardian and believe your child has provided us with personal
          information or interacted with our tracking technologies, please contact us at{" "}
          <a
            href="mailto:privacy@zoikofoods.com"
            className="font-semibold text-[#2d5016] underline"
          >
            privacy@zoikofoods.com
          </a>
          , and we will take appropriate steps to remove such information.
        </p>
      </div>
    </section>
  );
}
