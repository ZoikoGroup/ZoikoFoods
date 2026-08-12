import React from "react";

export default function GoverningLaw() {
  return (
    <section
      id="governing-law"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          15. Governing Law &amp; Jurisdiction
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Governing Law</h3>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          These Terms and any disputes arising out of or related to the Site shall be governed by
          and construed in accordance with the laws of [Jurisdiction to be specified &ndash; e.g.,
          the State of Delaware, United States], without regard to its conflict of law principles.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Exclusive Jurisdiction</h3>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          Subject to applicable mandatory consumer protection laws, you agree that any legal
          action or proceeding arising out of or related to these Terms or the Site shall be
          brought exclusively in the courts located in [Venue to be specified], and you consent to
          the personal jurisdiction of such courts.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Consumer Rights Preservation</h3>
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          If you are a consumer located in the European Union, United Kingdom, or another
          jurisdiction with mandatory consumer protection laws, nothing in this section affects
          your statutory rights, including your right to bring proceedings in your country of
          residence.
        </p>
      </div>
    </section>
  );
}
