import React from "react";

const gdprRights = [
  {
    title: "Right of Access",
    text: "Request a copy of the personal data we hold about you",
  },
  {
    title: "Right to Rectification",
    text: "Request correction of inaccurate or incomplete data",
  },
  {
    title: "Right to Erasure",
    text: "Request deletion of your personal data (subject to legal limitations)",
  },
  {
    title: "Right to Restrict Processing",
    text: "Request that we limit how we use your data",
  },
  {
    title: "Right to Data Portability",
    text: "Receive your data in a structured, machine-readable format",
  },
  {
    title: "Right to Object",
    text: "Object to processing based on legitimate interests",
  },
  {
    title: "Right to Withdraw Consent",
    text: "Where processing is based on consent, you can withdraw it at any time",
  },
];

const ccpaRights = [
  {
    title: "Right to Know",
    text: "Request disclosure of categories and specific pieces of personal information collected",
  },
  {
    title: "Right to Delete",
    text: "Request deletion of your personal information (subject to exceptions)",
  },
  {
    title: "Right to Correct",
    text: "Request correction of inaccurate personal information",
  },
  {
    title: "Right to Opt-Out",
    text: 'Opt-out of "sale" or "sharing" of personal information (not applicable as we don’t sell data)',
  },
  {
    title: "Right to Limit",
    text: "Limit use of sensitive personal information (if applicable)",
  },
  {
    title: "Right to Non-Discrimination",
    text: "Exercise rights without receiving discriminatory treatment",
  },
];

const responseTimes = [
  {
    title: "GDPR",
    text: "One month (extendable to three months for complex requests)",
  },
  {
    title: "CCPA",
    text: "45 days (extendable by 45 additional days if needed)",
  },
];

function RightsList({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className="mb-8 space-y-3">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex items-start gap-3 text-base leading-relaxed text-[#2D2D2D]"
        >
          <img
            src="/images/tick.png"
            alt="tick"
            className="mt-1 h-[15px] w-[15px] shrink-0 object-contain"
          />
          <span>
            <span className="font-semibold text-[#0F2818]">{item.title}:</span> {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function YourRights() {
  return (
    <section
      id="your-rights"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-2xl font-bold text-[#0F2818]">
          10. Your Rights &amp; Controls
        </h2>

        <p className="mb-6 text-base leading-relaxed text-[#2D2D2D]">
          Depending on your location and applicable law, you may have the following rights
          regarding your personal information:
        </p>

        <h3 className="mb-4 text-xl font-bold text-[#0F2818]">GDPR Rights (EEA &amp; UK)</h3>
        <RightsList items={gdprRights} />

        <h3 className="mb-4 text-xl font-bold text-[#0F2818]">CCPA/CPRA Rights (California)</h3>
        <RightsList items={ccpaRights} />

        <div
          className="mb-8 rounded-2xl p-8 text-center sm:p-10"
          style={{
            backgroundImage:
              "linear-gradient(144deg, rgb(34, 139, 34) 0%, rgb(45, 90, 61) 50%, rgb(212, 165, 116) 100%), linear-gradient(135deg, rgb(26, 51, 9) 0%, rgb(45, 80, 22) 100%)",
          }}
        >
          <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">
            Exercise Your Privacy Rights
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-white/90">
            You can submit a privacy request to access, correct, delete, or manage your personal
            data. We&apos;ll verify your identity and respond within the timeframes required by
            law.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-[#1A472A] transition hover:bg-white/90"
            >
              Submit Privacy Request
            </button>
            <button
              type="button"
              className="rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Manage Cookies
            </button>
          </div>
        </div>

        <h3 className="mb-4 text-xl font-bold text-[#0F2818]">Verification &amp; Processing</h3>
        <p className="mb-6 text-base leading-relaxed text-[#2D2D2D]">
          To protect your privacy and security, we verify your identity before processing rights
          requests. We typically use email verification as the primary method. We&apos;ll respond
          to verified requests within:
        </p>
        <ul className="mb-8 space-y-3">
          {responseTimes.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3 text-base leading-relaxed text-[#2D2D2D]"
            >
              <img
                src="/images/tick.png"
                alt="tick"
                className="mt-1 h-[15px] w-[15px] shrink-0 object-contain"
              />
              <span>
                <span className="font-semibold text-[#0F2818]">{item.title}:</span> {item.text}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="mb-4 text-xl font-bold text-[#0F2818]">Authorized Agents (CCPA)</h3>
        <p className="text-base leading-relaxed text-[#2D2D2D]">
          California residents may use an authorized agent to submit requests on their behalf. We
          may require written proof of authorization and verification of your identity.
        </p>
      </div>
    </section>
  );
}
