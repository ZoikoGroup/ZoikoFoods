import React from "react";

const rows = [
  {
    category: "Identity & Contact Data",
    examples: "Name, email address, phone number (if provided)",
    source: "Provided directly by you",
    purpose: "Respond to inquiries; account/service delivery",
  },
  {
    category: "Business Contact Data",
    examples: "Company name, role, business contact information",
    source: "Provided directly by you",
    purpose: "B2B engagement and fulfillment",
  },
  {
    category: "Technical Data",
    examples: "IP address, device type, browser, operating system",
    source: "Collected automatically",
    purpose: "Security, diagnostics, performance optimization",
  },
  {
    category: "Usage Data",
    examples: "Pages viewed, clicks, session duration, referral source",
    source: "Collected automatically",
    purpose: "Analytics and service improvements",
  },
  {
    category: "Cookies & Tracking Data",
    examples: "Cookie IDs, preference flags, analytics identifiers",
    source: "Collected automatically",
    purpose: "Remember settings; analytics (optional)",
  },
];

export default function InformationWeCollect() {
  return (
    <section id="data-we-collect" className="scroll-mt-24 border-t border-[#E0E0E0] mx-auto max-w-6xl px-6 py-10 sm:px-10">
      <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-2xl font-bold text-[#0F2818]">
        3. Information We Collect
      </h2>

      <p className="mb-6 text-base leading-relaxed text-[#2D2D2D]">
        We collect different categories of information depending on how you interact with our
        services. The table below outlines what we collect, how we get it, and why.
      </p>

      <div className="mb-6 overflow-x-auto rounded-lg border border-[#E0E0E0]">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead className="bg-[#F8F9FA]">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold text-[#0F2818]">Category</th>
              <th className="px-4 py-3 text-sm font-semibold text-[#0F2818]">Examples</th>
              <th className="px-4 py-3 text-sm font-semibold text-[#0F2818]">Source</th>
              <th className="px-4 py-3 text-sm font-semibold text-[#0F2818]">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={row.category}
                className={`border-t border-[#E0E0E0] ${idx % 2 === 1 ? "bg-[#F8F9FA]" : "bg-white"}`}
              >
                <td className="px-4 py-4 align-top text-sm text-[#2D2D2D]">{row.category}</td>
                <td className="px-4 py-4 align-top text-sm text-[#2D2D2D]">{row.examples}</td>
                <td className="px-4 py-4 align-top text-sm text-[#2D2D2D]">{row.source}</td>
                <td className="px-4 py-4 align-top text-sm text-[#2D2D2D]">{row.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
        <p className="text-base leading-relaxed text-[#2D2D2D]">
          <span className="font-semibold text-[#0F2818]">Note:</span> We only collect data
          categories that are necessary for the purposes described. We do not collect sensitive
          personal information such as health data, financial account details, or precise
          geolocation unless explicitly required and disclosed for a specific service.
        </p>
      </div>
    </section>
  );
}
