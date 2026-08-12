import Link from "next/link";
import React from "react";

export const ReadyToPartner = () => (
  <section className="py-12 lg:py-16 px-6 lg:px-24 bg-[linear-gradient(115deg,#228B22_0%,#2D5A3D_60%,#D4A574_100%)]">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-10 font-['Segoe_UI'] leading-[1.8]">Ready to Partner with<br className="block lg:hidden" />Zoiko Foods?</h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link href="/our-brands" className="py-4 w-[220px] lg:w-[240px] bg-white text-[#0F4C81] lg:text-[#2D5A3D] rounded-md font-bold text-[15px] hover:bg-gray-100 transition-colors">
          Explore Our Brands
        </Link>
        <Link href="/partnership" className="py-4 w-[220px] lg:w-[240px] border border-white text-white rounded-md font-bold text-[15px] hover:bg-white/10 transition-colors">
          Retail & Distribution
        </Link>
        <Link href="/our-brands/private-label" className="py-4 w-[220px] lg:w-[240px] lg:border border-white text-[#0F4C81] lg:text-white rounded-md font-bold text-[15px] hover:bg-white/10 transition-colors bg-white lg:bg-transparent">
          Private-Label Solutions
        </Link>
      </div>
    </div>
  </section>
);
