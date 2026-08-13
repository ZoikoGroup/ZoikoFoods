import React from "react";

export default function DoNotSellShare() {
  return (
    <section
      id="do-not-sell-share"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2d5016]">
          Do Not Sell or Share My Personal Information (CCPA/CPRA)
        </h2>

        <div className="mb-6 rounded-lg border-l-4 border-[#d4af37] bg-[rgba(212,175,55,0.1)] p-6 sm:p-7">
          <p className="mb-3 text-base font-bold text-[#2c2c2c]">
            Important Notice for California Residents:
          </p>
          <p className="mb-3 text-base leading-relaxed text-[#2c2c2c]">
            Zoiko Foods Corp does not &quot;sell&quot; or &quot;share&quot; personal information as
            defined under the California Consumer Privacy Act (CCPA) and California Privacy Rights
            Act (CPRA).
          </p>
          <p className="text-base leading-relaxed text-[#2c2c2c]">
            We only share data with service providers who are contractually required to use it
            solely to provide services to us and are prohibited from using it for any other
            purpose.
          </p>
        </div>

        <p className="text-base leading-relaxed text-[#2c2c2c]">
          If you have questions about how we handle personal information or wish to exercise your
          privacy rights, please see our{" "}
          <a href="/privacy-policy" className="font-semibold text-[#2d5016] underline">
            Privacy Policy
          </a>{" "}
          or contact our privacy team.
        </p>
      </div>
    </section>
  );
}
