import React from "react";

const receive = [
  <>Defined brand portfolio<br className="block lg:hidden" /> access by territory and<br className="block lg:hidden" /> channel</>,
  <>Structured onboarding and<br className="block lg:hidden" /> launch support materials</>,
  <>Quality, compliance, and<br className="block lg:hidden" /> specification<br className="block lg:hidden" /> documentation</>,
  <>Supply coordination and<br className="block lg:hidden" /> periodic business reviews</>,
];

const protect = [
  <>Territory integrity and<br className="block lg:hidden" /> market exclusivity</>,
  <>Channel discipline and<br className="block lg:hidden" /> pricing structure</>,
  <>Brand representation<br className="block lg:hidden" /> standards</>,
  <>Partner value through active<br className="block lg:hidden" /> enforcement</>,
];

export default function WhatZoikoProvides() {
  return (
    <section className="bg-gray-50 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold leading-[57.6px] text-green-950">
          What Zoiko Foods Provides
        </h2>

        <div className="mt-8 rounded-lg bg-white p-8 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)] md:p-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold leading-10 text-green-950">
                What You Receive
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {receive.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 text-[17px] leading-6 text-green-900">
                      ✓
                    </span>
                    <span className="text-[17px] leading-[1.6] text-stone-500">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold leading-10 text-green-950">
                What We Protect
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {protect.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 text-[17px] leading-6 text-green-900">
                      ✓
                    </span>
                    <span className="text-[17px] leading-[1.6] text-stone-500">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}