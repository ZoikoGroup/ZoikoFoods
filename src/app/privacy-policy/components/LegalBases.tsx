import React from "react";

const rows = [
  {
    purpose: "Provide services / respond to inquiries",
    basis: "Contract / Steps at request of data subject",
    explanation: "We use your data to do what you asked us to do",
  },
  {
    purpose: "Security and fraud prevention",
    basis: "Legitimate interests",
    explanation: "We protect our site, services, and users from harm",
  },
  {
    purpose: "Compliance obligations",
    basis: "Legal obligation",
    explanation: "We keep records required by law",
  },
  {
    purpose: "Optional analytics cookies",
    basis: "Consent",
    explanation: "You choose whether analytics cookies are enabled",
  },
  {
    purpose: "Service improvements",
    basis: "Legitimate interests",
    explanation: "We analyze usage to make our services better",
  },
];

export default function LegalBases() {
  return (
    <section
      id="legal-bases-gdpr"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-2xl font-bold text-[#0F2818]">
          5. Legal Bases for Processing (GDPR)
        </h2>

        <p className="mb-6 text-base leading-relaxed text-[#2D2D2D]">
          For users in the European Economic Area (EEA) and United Kingdom, we process your
          personal data based on the following legal grounds:
        </p>

        <div className="overflow-x-auto rounded-lg border border-[rgba(212,175,55,0.2)] bg-white">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead
              style={{
                backgroundImage:
                  "linear-gradient(173deg, rgb(34, 139, 34) 0%, rgb(45, 90, 61) 50%, rgb(212, 165, 116) 100%), linear-gradient(135deg, rgb(45, 80, 22) 0%, rgb(74, 124, 46) 100%)",
              }}
            >
              <tr>
                <th className="px-4 py-3 text-sm font-semibold text-white">Purpose</th>
                <th className="px-4 py-3 text-sm font-semibold text-white">Legal Basis</th>
                <th className="px-4 py-3 text-sm font-semibold text-white">
                  Plain English Explanation
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.purpose} className="border-t border-[rgba(212,175,55,0.15)]">
                  <td className="px-4 py-4 align-top text-sm font-semibold text-[#0F2818]">
                    {row.purpose}
                  </td>
                  <td className="px-4 py-4 align-top text-sm text-[#2D2D2D]">{row.basis}</td>
                  <td className="px-4 py-4 align-top text-sm text-[#2D2D2D]">
                    {row.explanation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
