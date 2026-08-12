import React from "react";

export default function HeroSection() {
  return (
    <section 
      className="border-b border-[rgba(212,175,55,0.2)]"
      style={{ backgroundImage: "linear-gradient(134.94deg, rgba(45, 80, 22, 0.03) 0%, rgba(212, 175, 55, 0.03) 100%)" }}
    >
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
        <h1 
          className="font-inter font-extrabold text-4xl md:text-5xl lg:text-[56px] leading-tight tracking-[-1px] text-transparent bg-clip-text"
          style={{ backgroundImage: "linear-gradient(171.66deg, rgb(34, 139, 34) 0%, rgb(45, 90, 61) 50%, rgb(212, 165, 116) 100%), linear-gradient(139.46deg, rgb(26, 51, 9) 0%, rgb(45, 80, 22) 100%)" }}
        >
          Anti-Bribery & Anti-Corruption Policy
        </h1>
        <p className="mt-8 font-inter font-semibold text-[20px] text-[#2c2c2c]">
          We do not tolerate bribery, corruption, or improper conduct in any form.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 font-inter text-[15.2px]">
          <span className="text-[#8b8b8b]">Applies to:</span>
          <span className="font-bold text-[#2d5016]">Employees</span>
          <span className="text-[#2c2c2c]">&bull;</span>
          <span className="font-bold text-[#2d5016]">Contractors</span>
          <span className="text-[#2c2c2c]">&bull;</span>
          <span className="font-bold text-[#2d5016]">Agents</span>
          <span className="text-[#2c2c2c]">&bull;</span>
          <span className="font-bold text-[#2d5016]">Suppliers</span>
          <span className="text-[#2c2c2c]">&bull;</span>
          <span className="font-bold text-[#2d5016]">Partners</span>
        </div>
        
        <div className="mt-14 flex flex-wrap gap-x-20 gap-y-6">
          <div>
            <p className="font-inter font-semibold text-[13.6px] text-[#2d5016] uppercase tracking-[0.5px]">Effective Date</p>
            <p className="mt-1 font-inter text-[15.2px] text-[#2c2c2c]">January 1, 2025</p>
          </div>
          <div>
            <p className="font-inter font-semibold text-[13.6px] text-[#2d5016] uppercase tracking-[0.5px]">Last Reviewed</p>
            <p className="mt-1 font-inter text-[15.2px] text-[#2c2c2c]">January 30, 2026</p>
          </div>
          <div>
            <p className="font-inter font-semibold text-[13.6px] text-[#2d5016] uppercase tracking-[0.5px]">Approved By</p>
            <p className="mt-1 font-inter text-[15.2px] text-[#2c2c2c]">Board of Directors</p>
          </div>
          <div>
            <p className="font-inter font-semibold text-[13.6px] text-[#2d5016] uppercase tracking-[0.5px]">Policy Owner</p>
            <p className="mt-1 font-inter text-[15.2px] text-[#2c2c2c]">Legal & Compliance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
