import React from "react";

const requirements = [
  {
    title: "Market Coverage",
    description: <>Territory definition, channel map,<br className="block lg:hidden" /> and customer reach demonstration.</>,
    evidence: "Evidence: Customer list summary",
  },
  {
    title: "Operational Capability",
    description: <>Warehousing, logistics, and cold-<br className="block lg:hidden" />chain infrastructure where<br className="block lg:hidden" /> applicable.</>,
    evidence: "Evidence: Facility documentation",
  },
  {
    title: "Brand Stewardship",
    description: <>Pricing discipline, brand<br className="block lg:hidden" /> representation standards, and anti-<br className="block lg:hidden" />grey-market commitment.</>,
    evidence: <>Evidence: Portfolio & standards<br className="block lg:hidden" /> acknowledgment</>,
  },
  {
    title: "Regulatory Compliance",
    description: <>Import/export, labeling, and food<br className="block lg:hidden" /> safety documentation readiness.</>,
    evidence: "Evidence: Compliance certificates",
  },
  {
    title: "Commercial Commitment",
    description: <>Rollout plan, forecasting cadence,<br className="block lg:hidden" /> and reporting willingness.</>,
    evidence: "Evidence: Business plan outline",
  },
  {
    title: "Governance Alignment",
    description: <>Contract compliance, audit<br className="block lg:hidden" /> cooperation, and dispute resolution<br className="block lg:hidden" /> adherence.</>,
    evidence: "Evidence: Governance acknowledgment",
  },
];

export default function PartnerRequirements() {
  return (
    <section className="bg-white px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold leading-[1.3] md:leading-[57.6px] text-green-950">
          Partner<br className="block lg:hidden" /> Requirements
        </h2>
        <p className="mt-4 max-w-3xl text-lg font-normal leading-7 text-stone-500">
          These are non-negotiable requirements<br className="block lg:hidden" /> for all distribution partners. Each<br className="block lg:hidden" /> requirement must be supported with<br className="block lg:hidden" /> appropriate evidence.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {requirements.map((req) => (
            <div
              key={req.title}
              className="rounded-lg border-l-[4.5px] border-[#C8A35F] bg-white p-6 md:p-8 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]"
            >
              <h3 className="text-xl font-bold leading-8 text-green-950">
                {req.title}
              </h3>
              <p className="mt-3 text-base font-normal leading-6 text-stone-500">
                {req.description}
              </p>
              <div className="mt-4 inline-block rounded-sm bg-gray-50 px-3 py-1.5">
                <span className="text-xs font-semibold leading-5 text-zinc-800">
                  {req.evidence}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}