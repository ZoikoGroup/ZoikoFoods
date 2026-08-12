import React from "react";

const authorityItems = [
  "You have the authority to bind that entity to these Terms",
  "Your use complies with all applicable internal policies and authorizations",
  "That entity agrees to be bound by these Terms",
];

export default function Eligibility() {
  return (
    <section
      id="eligibility"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          2. Eligibility &amp; Authority
        </h2>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Age Requirement</h3>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          You must be at least 18 years of age (or the age of majority in your jurisdiction) to
          use this Site. By using the Site, you represent and warrant that you meet this age
          requirement.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Authority to Bind Organization</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          If you are accessing or using the Site on behalf of a business, organization, or other
          legal entity, you represent and warrant that:
        </p>
        <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
          {authorityItems.map((item) => (
            <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">{item}</li>
          ))}
        </ul>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Compliance with Laws</h3>
        <p className="text-base leading-relaxed text-[#2C2C2C]">
          You are responsible for ensuring that your use of the Site complies with all applicable
          laws, regulations, and restrictions in your jurisdiction.
        </p>
      </div>
    </section>
  );
}
