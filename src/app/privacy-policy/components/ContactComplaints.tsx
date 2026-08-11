import React from "react";

const contactRows = [
  {
    icon: "✉️",
    label: "Email",
    value: (
      <a href="mailto:privacy@zoikofoods.com" className="font-semibold text-[#1A472A]">
        privacy@zoikofoods.com
      </a>
    ),
  },
  {
    icon: "📍",
    label: "Postal Address",
    value: (
      <span className="text-[#2D2D2D]">
        Zoiko Foods Corp, [Corporate Address], [City, State, Postal Code], [Country]
      </span>
    ),
  },
  {
    icon: "📞",
    label: "CCPA Toll-Free Number (California Residents)",
    value: <span className="text-[#666]">[To be provided if required]</span>,
  },
];

const authorities = [
  {
    text: "UK: Information Commissioner's Office (ICO) - ",
    href: "https://ico.org.uk",
    linkLabel: "ico.org.uk",
  },
  {
    text: "EU Member States: Find your local authority at ",
    href: "https://edpb.europa.eu",
    linkLabel: "edpb.europa.eu",
  },
];

export default function ContactComplaints() {
  return (
    <section id="contact-complaints" className="border-t border-[#E0E0E0] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold text-[#0F2818]">
          15. Contact, Complaints &amp; Escalation
        </h2>

        <div className="rounded-xl bg-[#F8F9FA] p-6 sm:p-8">
          <h3 className="mb-6 text-xl font-bold text-[#0F2818]">Privacy Contact Information</h3>

          <div className="space-y-6">
            {contactRows.map((row) => (
              <div key={row.label} className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgb(34, 139, 34) 0%, rgb(45, 90, 61) 50%, rgb(212, 165, 116) 100%)",
                  }}
                >
                  {row.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#666]">
                    {row.label}
                  </p>
                  <p className="mt-1 text-base">{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="mb-4 mt-10 text-xl font-bold text-[#0F2818]">
          Supervisory Authority (GDPR)
        </h3>

        <p className="text-base leading-relaxed text-[#2D2D2D]">
          If you are located in the EEA or UK and believe we have not adequately addressed your
          privacy concerns, you have the right to lodge a complaint with your local data
          protection supervisory authority.
        </p>

        <ul className="mt-4 space-y-3">
          {authorities.map((item) => (
            <li key={item.linkLabel} className="flex items-start gap-3 text-base text-[#2D2D2D]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A472A]" />
              <span className="leading-relaxed">
                {item.text}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#1A472A]"
                >
                  {item.linkLabel}
                </a>
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-base leading-relaxed text-[#2D2D2D]">
          We encourage you to contact us first so we can attempt to resolve your concerns
          directly.
        </p>
      </div>
    </section>
  );
}
