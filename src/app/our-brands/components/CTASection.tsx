import React from "react";

export default function CTASection() {
  return (
    <section className="px-6 py-10 sm:px-10 lg:px-[52px]">
      <div
        className="mx-auto max-w-[1336px] rounded-2xl px-6 py-14 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(153deg, rgb(34,139,34) 0%, rgb(45,90,61) 50%, rgb(212,165,116) 100%), linear-gradient(135deg, rgb(26,51,9) 0%, rgb(45,80,22) 100%)",
        }}
      >
        <h2 className="mb-[25px] text-[32px] font-bold leading-[51.2px]">
          Interested in Our Brands?
        </h2>
        <p className="mx-auto mb-9 max-w-2xl text-[17.6px] leading-[28.16px] text-white/95">
          Partner with us or learn more about bringing authentic Caribbean flavors to your market.
        </p>
        <a
          href="/contact-us"
          className="inline-block rounded-lg bg-[#D79247] px-10 py-4 text-[17.6px] font-semibold leading-[28.16px] text-white shadow-[0px_4px_8px_rgba(212,175,55,0.3)] transition hover:opacity-90"
        >
          CONTACT US
        </a>
      </div>
    </section>
  );
}
