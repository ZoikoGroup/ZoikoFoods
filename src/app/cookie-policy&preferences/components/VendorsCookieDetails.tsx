import React from "react";

const columns = ["Vendor", "Purpose", "Cookie/Identifier", "Duration", "Type"];

const strictlyNecessaryRows: string[][] = [
  ["Zoiko Foods Corp", "Session management", "session_id", "Session", "First-party"],
  ["Zoiko Foods Corp", "CSRF protection", "csrf_token", "Session", "First-party"],
  ["Zoiko Foods Corp", "Cookie consent storage", "cookie_consent", "12 months", "First-party"],
];

const analyticsRows: string[][] = [
  ["Google Analytics", "Site analytics (anonymized)", "_ga", "13 months", "Third-party"],
  ["Google Analytics", "Session identification", "_gid", "24 hours", "Third-party"],
  ["Google Analytics", "Throttle request rate", "_gat", "1 minute", "Third-party"],
];

function VendorTable({ rows }: { rows: string[][] }) {
  return (
    <div className="mb-8 overflow-x-auto rounded-lg border border-[rgba(212,175,55,0.2)] bg-white">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr
            style={{
              backgroundImage: "linear-gradient(135deg, rgb(45,80,22) 0%, rgb(74,124,46) 100%)",
            }}
          >
            {columns.map((c) => (
              <th key={c} className="px-4 py-3 text-[14.4px] font-semibold text-white">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-[rgba(212,175,55,0.15)]">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3.5 align-top text-base text-[#2c2c2c]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function VendorsCookieDetails() {
  return (
    <section
      id="vendors-cookie-details"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2d5016]">
          Vendors &amp; Cookie Details
        </h2>
        <p className="mb-8 text-base leading-relaxed text-[#2c2c2c]">
          Below is a detailed list of vendors and specific cookies we use, organized by category.
        </p>

        <h3 className="mb-4 text-[20.8px] font-semibold text-[#2d5016]">
          Strictly Necessary Cookies
        </h3>
        <VendorTable rows={strictlyNecessaryRows} />

        <h3 className="mb-4 text-[20.8px] font-semibold text-[#2d5016]">
          Analytics Cookies (If Enabled)
        </h3>
        <VendorTable rows={analyticsRows} />

        <div className="rounded-lg border-l-4 border-[#d4af37] bg-[rgba(212,175,55,0.1)] p-6">
          <p className="mb-2 text-base font-bold text-[#2c2c2c]">Vendor Privacy Policies:</p>
          <ul className="list-disc space-y-1 pl-5 text-base text-[#2c2c2c]">
            <li>
              Google Analytics:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#2d5016] underline"
              >
                https://policies.google.com/privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
