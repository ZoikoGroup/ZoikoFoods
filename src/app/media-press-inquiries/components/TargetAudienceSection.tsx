import React from "react";

export default function TargetAudienceSection() {
  return (
    <section className="px-6 py-14 sm:px-10 lg:px-20">
      <div
        className="mx-auto max-w-6xl rounded-lg p-8 sm:p-10"
        style={{ border: "1.5px solid #1A472A" }}
      >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-bold text-[#0F2818]">This page is for:</h3>
            <ul className="space-y-4">
              {["Journalists and editors", "Media analysts and commentators", "Trade and business publications", "Industry researchers"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-[#2D2D2D]">
                    <img src="/images/tick.png" alt="tick" className="h-[15px] w-[15px] shrink-0 object-contain" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-bold text-[#0F2818]">This page is not for:</h3>
            <ul className="space-y-4">
              {["Product questions", "Consumer complaints", "Sales enquiries", "Distribution requests", "Influencer promotions"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-[#2D2D2D]">
                    <img src="/images/cross.png" alt="cross" className="h-[15px] w-[15px] shrink-0 object-contain" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-[#E0E0E0]" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <span className="text-base font-semibold text-[#2D2D2D]">For other inquiries:</span>
          <div className="flex flex-wrap gap-3">
            {[
              "Consumers → FAQ & Consumer Care",
              "Commercial → Contact Us",
              "Distribution → Exclusive Distributorships",
            ].map((t) => (
              <span
                key={t}
                className="rounded bg-[#F8F9FA] px-4 py-2 text-sm font-semibold text-[#1A472A]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
