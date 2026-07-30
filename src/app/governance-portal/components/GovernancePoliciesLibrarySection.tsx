import Image from "next/image";

const policies = [
  {
    icon: "/images/code-of-conduct.png",
    title: "Code of Conduct",
  },
  {
    icon: "/images/whistleblower-policy.png",
    title: "Whistleblower Policy",
  },
  {
    icon: "/images/risk-compliance.png",
    title: (
      <>
        Anti-Bribery &<br />
        Anti-Corruption
      </>
    ),
  },
  {
    icon: "/images/cybersecurity.png",
    title: (
      <>
        Cybersecurity &<br />
        Data Privacy
      </>
    ),
  },
  {
    icon: "/images/foods-icon.png",
    title: "ESG Oversight Framework",
  },
  {
    icon: "/images/human-dignity.png",
    title: (
      <>
        Modern Slavery & Human Rights
        <br />
        Statement
      </>
    ),
  },
  {
    icon: "/images/supplier-code.png",
    title: (
      <>
        Supplier & Distributor
        <br />
        Code of Ethics
      </>
    ),
  },
];

export default function GovernancePoliciesLibrarySection() {
  return (
    <section className="w-full bg-[#F8F9FA] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-center text-[#2D5A3D] text-2xl font-bold font-[Georgia] leading-[52px]">
          Governance Policies Library
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {policies.slice(0, 4).map((policy, index) => (
            <div
              key={index}
              className="h-auto md:h-60 py-8 md:py-0 bg-white rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center text-center px-5"
            >
              <Image
                src={policy.icon}
                alt="Policy Icon"
                width={50}
                height={64}
                className="mb-8"
              />

              <h3 className="text-[#2D5A3D] text-lg font-bold font-[Georgia] leading-6">
                {policy.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-[836px] mx-auto">
          {policies.slice(4).map((policy, index) => (
            <div
              key={index}
              className="h-auto md:h-60 py-8 md:py-0 bg-white rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.10)] flex flex-col items-center justify-center text-center px-5"
            >
              <Image
                src={policy.icon}
                alt="Policy Icon"
                width={64}
                height={64}
                className="mb-8"
              />

              <h3 className="text-[#2D5A3D] text-lg font-bold font-[Georgia] leading-6">
                {policy.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}