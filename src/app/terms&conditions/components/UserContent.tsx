import React from "react";

const warranties = [
  "You own or have the necessary rights, licenses, and permissions to submit the content",
  "Your content does not infringe any third-party intellectual property, privacy, publicity, or other rights",
  "Your content complies with these Terms and applicable laws",
];

const licensePurposes = [
  "Processing and responding to your inquiry or request",
  "Internal evaluation and business operations",
  "Complying with legal obligations",
];

const prohibitedSubmissions = [
  "Illegal, fraudulent, defamatory, obscene, or harmful",
  "Infringing on intellectual property or other rights",
  "Spam, solicitation, or commercial advertisements (unless explicitly permitted)",
  "Malicious code, viruses, or harmful files",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mb-6 list-disc space-y-3 pl-5 text-[#2C2C2C]">
      {items.map((item) => (
        <li key={item} className="pl-1 text-base leading-relaxed text-[#2C2C2C]">{item}</li>
      ))}
    </ul>
  );
}

export default function UserContent() {
  return (
    <section
      id="user-content"
      className="scroll-mt-24 border-t border-[#E0E0E0] px-6 py-10 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 border-b-2 border-[rgba(212,175,55,0.3)] pb-4 text-[28.8px] font-bold text-[#2D5016]">
          5. User Content &amp; Submissions
        </h2>

        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          The Site may allow you to submit content, including through contact forms, inquiry
          submissions, file uploads, comments, or other interactive features (&ldquo;User
          Content&rdquo;).
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Your Warranties</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          By submitting User Content, you represent and warrant that:
        </p>
        <BulletList items={warranties} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">License to Zoiko Foods Corp</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          By submitting User Content, you grant Zoiko Foods Corp a non-exclusive, worldwide,
          royalty-free license to use, reproduce, modify, and display the content solely for the
          purposes of:
        </p>
        <BulletList items={licensePurposes} />

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">No Confidentiality</h3>
        <p className="mb-6 text-base leading-relaxed text-[#2C2C2C]">
          Unless you have entered into a separate Non-Disclosure Agreement (NDA) with Zoiko Foods
          Corp, your submissions are not confidential. Do not submit proprietary, confidential, or
          sensitive information through public forms or unprotected channels.
        </p>

        <h3 className="mb-3 text-[20.8px] font-semibold text-[#1A3309]">Prohibited Submissions</h3>
        <p className="mb-4 text-base leading-relaxed text-[#2C2C2C]">
          You may not submit content that is:
        </p>
        <BulletList items={prohibitedSubmissions} />
      </div>
    </section>
  );
}
