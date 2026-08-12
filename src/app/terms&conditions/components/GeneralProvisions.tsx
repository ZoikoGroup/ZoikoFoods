import React from "react";

const provisions = [
  {
    title: "Entire Agreement",
    text: "These Terms, together with our Privacy Policy and any additional terms referenced herein, constitute the entire agreement between you and Zoiko Foods Corp regarding your use of the Site and supersede all prior agreements and understandings, whether written or oral.",
  },
  {
    title: "Severability",
    text: "If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.",
  },
  {
    title: "No Waiver",
    text: "Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative of Zoiko Foods Corp.",
  },
  {
    title: "Assignment",
    text: "You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction, including in connection with a merger, acquisition, or sale of assets.",
  },
  {
    title: "Force Majeure",
    text: "We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, or governmental actions.",
  },
  {
    title: "Headings",
    text: "Section headings are for convenience only and shall not affect the interpretation of these Terms.",
  },
];

export default function GeneralProvisions() {
  return (
    <section
      id="general-provisions"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          17. General Provisions
        </h2>

        <div className="space-y-6">
          {provisions.map((item) => (
            <div key={item.title}>
              <h3 className="mb-2 text-[20.8px] font-semibold text-[#1A3309]">{item.title}</h3>
              <p className="text-base leading-relaxed text-[#2C2C2C]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
