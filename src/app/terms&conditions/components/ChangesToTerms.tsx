import React from "react";

const noticeChannels = [
  'Posting the updated Terms on the Site with a new "Last Updated" date',
  "Prominent notice on the Site (for significant changes)",
  "Email notification (if we have your contact information on file)",
];

export default function ChangesToTerms() {
  return (
    <section
      id="changes-to-terms"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          16. Changes to These Terms
        </h2>

        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          We reserve the right to modify, update, or replace these Terms at any time, at our sole
          discretion.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Notice of Material Changes</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Material changes will be communicated by:
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {noticeChannels.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">{item}</li>
          ))}
        </ul>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Acceptance of Changes</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          Your continued use of the Site after changes become effective constitutes acceptance of
          the revised Terms. If you do not agree to the revised Terms, you must discontinue use of
          the Site.
        </p>
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          We recommend reviewing these Terms periodically to stay informed of updates.
        </p>
      </div>
    </section>
  );
}
