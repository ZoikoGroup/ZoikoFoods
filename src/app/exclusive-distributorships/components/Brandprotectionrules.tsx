import React from "react";

const rules = [
  <>No unauthorized re-export or<br className="block lg:hidden" /> territory leakage beyond agreed<br className="block lg:hidden" /> boundaries</>,
  <>No unauthorized online resale<br className="block lg:hidden" /> unless explicitly permitted in<br className="block lg:hidden" /> agreement</>,
];

export default function BrandProtectionRules() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold leading-[1.3] md:leading-[57.6px] text-green-950">
          Brand Protection<br className="block lg:hidden" /> & Channel Rules
        </h2>
        <p className="mt-4 max-w-3xl text-lg font-normal leading-7 text-stone-500">
          These non-negotiable protections<br className="block lg:hidden" /> safeguard consumers, brand integrity,<br className="block lg:hidden" /> and partner investment.
        </p>

        <div className="mt-10 rounded-lg border border-green-900 bg-white p-8 pb-12">
          <ul className="flex flex-col">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="flex items-start gap-4 py-4 border-b border-neutral-200"
              >
                <span className="mt-1 text-[10px] text-green-900">
                  ●
                </span>
                <span className="text-base font-normal leading-6 text-zinc-800">
                  {rule}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}