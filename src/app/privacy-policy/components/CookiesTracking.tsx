import React from "react";

const categories = [
  {
    label: "Strictly Necessary",
    text: "Essential for site functionality (cannot be disabled)",
  },
  {
    label: "Functional",
    text: "Remember your preferences and settings",
  },
  {
    label: "Analytics",
    text: "Help us understand site usage and performance (optional, requires consent)",
  },
  {
    label: "Marketing",
    text: "Not currently used on our corporate sites",
  },
];

export default function CookiesTracking() {
  return (
    <section
      id="cookies-tracking"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-2xl font-bold text-[#0F2818]">
          6. Cookies &amp; Tracking Technologies
        </h2>

        <p className="mb-6 text-base leading-relaxed text-[#2D2D2D]">
          We use cookies and similar technologies to enhance your experience and understand how
          our services are used.
        </p>

        <h3 className="mb-4 text-lg font-bold text-[#0F2818]">Cookie Categories</h3>

        <ul className="mb-6 space-y-3">
          {categories.map((item) => (
            <li key={item.label} className="flex items-start gap-3 text-base text-[#2D2D2D]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A472A]" />
              <span className="leading-relaxed">
                <span className="font-semibold text-[#0F2818]">{item.label}:</span> {item.text}
              </span>
            </li>
          ))}
        </ul>

        <p className="mb-6 text-base leading-relaxed text-[#2D2D2D]">
          You can manage your cookie preferences at any time using our cookie preference center.
        </p>

        <button
          type="button"
          id="cookiePrefsBtn2"
          className="mb-6 rounded-lg bg-white px-6 py-3 text-base font-semibold text-[#2d5016]"
          style={{ border: "2px solid #2d5016" }}
        >
          Manage Cookie Preferences
        </button>

        <div className="rounded-lg border-l-4 border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="text-base leading-relaxed text-[#2D2D2D]">
            <span className="font-semibold text-[#0F2818]">Do Not Track:</span> Our systems do not
            currently respond to Do Not Track (DNT) browser signals. You can control cookies
            through your browser settings or our preference center.
          </p>
        </div>
      </div>
    </section>
  );
}
