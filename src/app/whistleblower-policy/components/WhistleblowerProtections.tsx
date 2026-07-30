import Image from "next/image";

const protections = [
  {
    icon: "/images/confidentiality.png",
    title: "Confidentiality",
    description: "Absolute secrecy enforced",
  },
  {
    icon: "/images/non-retaliation.png",
    title: "Non-Retaliation",
    description: "Guaranteed under law and Zoiko's policy",
  },
  {
    icon: "/images/jurisdiction-coverage.png",
    title: "Jurisdiction Coverage",
    description: "Full protection in USA, EU, UK, India, LATAM, Africa",
  },
  {
    icon: "/images/financial-security.png",
    title: "Financial Security",
    description:
      "Whistleblowers are shielded from dismissal, demotion, or financial retaliation",
  },
];

export default function WhistleblowerProtections() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-8 text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D] md:mb-12">
          Whistleblower Protections
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {protections.map((item) => (
            <div
              key={item.title}
              className="flex min-h-72 flex-col items-center rounded-lg bg-[#F8F9FA] px-6 pb-8 text-center"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                className="mt-9 h-16 w-16 object-contain"
              />

              <h3 className="mt-6 font-[Georgia] text-xl font-bold leading-8 text-[#2D5A3D]">
                {item.title}
              </h3>

              <p className="mt-4 font-[Inter] text-base leading-6 text-[#333333]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
