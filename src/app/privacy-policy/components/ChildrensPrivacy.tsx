import React from "react";

export default function ChildrensPrivacy() {
  return (
    <section id="childrens-privacy" className="border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold text-[#0F2818]">12. Children&apos;s Privacy</h2>

        <div className="space-y-4">
          <p className="text-base leading-relaxed text-[#2D2D2D]">
            Our services are not directed to children under the age of 16 (or applicable age
            threshold in your jurisdiction). We do not knowingly collect personal information
            from children.
          </p>
          <p className="text-base leading-relaxed text-[#2D2D2D]">
            If we become aware that we have collected personal information from a child without
            appropriate parental consent, we will take steps to delete that information as
            quickly as possible.
          </p>
          <p className="text-base leading-relaxed text-[#2D2D2D]">
            If you believe we may have collected information from a child, please contact us
            immediately at{" "}
            <a href="mailto:privacy@zoikofoods.com" className="font-semibold text-[#1A472A]">
              privacy@zoikofoods.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
