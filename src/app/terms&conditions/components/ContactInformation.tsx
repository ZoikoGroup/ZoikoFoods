import React from "react";
import Image from "next/image";

const contactRows = [
  {
    icon: "/images/email-icon.png",
    label: "Email",
    value: (
      <a href="mailto:legal@zoikofoods.com" className="text-[#2C2C2C]">
        legal@zoikofoods.com
      </a>
    ),
  },
  {
    icon: "/images/map-pin-icon.png",
    label: "Postal Address",
    value: (
      <span className="text-[#2C2C2C]">
        Zoiko Foods Corp
        <br />
        Legal Department
        <br />
        [Corporate Address]
        <br />
        [City, State, Postal Code]
        <br />
        [Country]
      </span>
    ),
  },
  {
    icon: "/images/phone-icon.png",
    label: "Phone (Legal Notices)",
    value: <span className="text-[#2C2C2C]">[To be provided if required]</span>,
  },
];

export default function ContactInformation() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          18. Contact Information
        </h2>

        <div className="rounded-xl bg-[#F5F5F5] p-6 sm:p-8">
          <h3 className="mb-6 text-[20.8px] font-semibold text-[#2D5016]">Legal Department</h3>
          <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
            For questions, concerns, or notices regarding these Terms, please contact:
          </p>

          <div className="space-y-6">
            {contactRows.map((row) => (
              <div key={row.label} className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg overflow-hidden"
                >
                  <Image src={row.icon} alt={row.label} width={40} height={40} className="object-cover" />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#2D5016]">{row.label}</p>
                  <p className="mt-1 text-base text-[#2C2C2C] leading-relaxed">{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-[14.4px] italic leading-relaxed text-[#8B8B8B]">
          For general inquiries unrelated to these Terms, please visit our{" "}
          <a href="/contact-us" className="font-semibold text-[#2D5016] underline">
            Contact page
          </a>
          .
        </p>
      </div>
    </section>
  );
}
