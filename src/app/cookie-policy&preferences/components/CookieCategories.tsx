"use client";

import { useState } from "react";

type Category = {
  id: string;
  title: string;
  badge: "always" | "optional";
  description: string;
  learnMoreLabel: string;
  toggle?: boolean;
  infoBox?: { title: string; body: string };
};

const categories: Category[] = [
  {
    id: "strictly-necessary",
    title: "Strictly Necessary Cookies",
    badge: "always",
    description:
      "These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.",
    learnMoreLabel: "Learn more about strictly necessary cookies",
  },
  {
    id: "functional",
    title: "Functional Cookies",
    badge: "optional",
    description:
      "These cookies enable enhanced functionality and personalization, such as remembering your language preferences, region selection, or display settings.",
    learnMoreLabel: "Learn more about functional cookies",
    toggle: true,
  },
  {
    id: "analytics",
    title: "Analytics & Performance Cookies",
    badge: "optional",
    description:
      "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance and user experience.",
    learnMoreLabel: "Learn more about analytics cookies",
    toggle: true,
  },
  {
    id: "marketing",
    title: "Marketing & Advertising Cookies",
    badge: "optional",
    description:
      "These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.",
    learnMoreLabel: "Learn more about marketing cookies",
    toggle: true,
    infoBox: {
      title: "Current Status:",
      body: "We do not currently use marketing or advertising cookies on our corporate website. This category is included for transparency and may be used in the future with your consent.",
    },
  },
];

export default function CookieCategories() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "strictly-necessary": true,
    functional: true,
    analytics: true,
    marketing: true,
  });
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    functional: false,
    analytics: false,
    marketing: false,
  });

  const toggleOpen = (id: string) => setOpenIds((s) => ({ ...s, [id]: !s[id] }));
  const toggleSwitch = (id: string) => setToggles((s) => ({ ...s, [id]: !s[id] }));

  return (
    <section
      id="cookie-categories"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2d5016]">
          Cookie Categories
        </h2>
        <p className="mb-8 text-base leading-relaxed text-[#2c2c2c]">
          We categorize cookies by their purpose. You can control optional cookies using the
          toggles below or via the preferences panel.
        </p>

        <div className="space-y-6">
          {categories.map((cat) => {
            const isOpen = openIds[cat.id];
            const isOn = toggles[cat.id];
            return (
              <div
                key={cat.id}
                className="rounded-xl border-2 border-[rgba(212,175,55,0.2)] bg-white p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-[20.8px] font-semibold text-[#2d5016]">{cat.title}</h3>
                  <div className="flex items-center gap-4">
                    <span
                      className={
                        "rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-wide " +
                        (cat.badge === "always" ? "text-white" : "text-[#b8941e]")
                      }
                      style={
                        cat.badge === "always"
                          ? {
                              backgroundImage:
                                "linear-gradient(135deg, rgb(45,80,22) 0%, rgb(74,124,46) 100%)",
                            }
                          : { backgroundColor: "rgba(212,175,55,0.2)" }
                      }
                    >
                      {cat.badge === "always" ? "Always Active" : "Optional"}
                    </span>

                    {cat.toggle && (
                      <div className="flex items-center gap-2.5">
                        <span className="text-base font-semibold text-[#2c2c2c]">
                          {isOn ? "Enabled" : "Disabled"}
                        </span>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={isOn}
                          aria-label={`Toggle ${cat.title}`}
                          onClick={() => toggleSwitch(cat.id)}
                          className="relative h-7 w-14 shrink-0 rounded-full transition-colors duration-200"
                          style={{ backgroundColor: isOn ? "#2d5016" : "#8b8b8b" }}
                        >
                          <span
                            className="absolute top-[3px] size-[22px] rounded-full bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.3)] transition-all duration-200"
                            style={{ left: isOn ? "31px" : "3px" }}
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {isOpen && (
                  <p className="mt-5 text-base leading-relaxed text-[#2c2c2c]">
                    {cat.description}
                  </p>
                )}

                {isOpen && cat.infoBox && (
                  <div className="mt-4 rounded-lg border-l-4 border-[#d4af37] bg-[rgba(212,175,55,0.1)] p-6">
                    <p className="text-base leading-relaxed text-[#2c2c2c]">
                      <span className="font-bold">{cat.infoBox.title}</span> {cat.infoBox.body}
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => toggleOpen(cat.id)}
                  aria-expanded={isOpen}
                  className="mt-5 flex w-full items-center justify-between border-t border-[rgba(212,175,55,0.2)] pt-5 text-[15.2px] font-semibold text-[#2d5016]"
                >
                  <span>{cat.learnMoreLabel}</span>
                  <span
                    className={"text-xs transition-transform " + (isOpen ? "rotate-180" : "")}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
