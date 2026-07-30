import Image from "next/image";

const highlights = [
  {
    icon: "/images/compliance.png",
    title: "Compliance",
    description:
      "Aligned with FCPA, SOX, EU Whistleblower Directive, UK PIDA, India Whistleblowers Act",
  },
  {
    icon: "/images/protection.png",
    title: "Protection",
    description: "Zero retaliation guaranteed for whistleblowers",
  },
  {
    icon: "/images/financial-roi.png",
    title: "Financial ROI",
    description:
      "Studies show robust whistleblower systems cut fraud losses by up to 50%, saving millions annually",
  },
];

export default function PolicyHighlights() {
  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 px-5 md:grid-cols-3 md:px-8">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="flex min-h-[288px] flex-col items-center rounded-lg bg-white px-8 pb-8 text-center shadow-[0px_4px_6px_rgba(0,0,0,0.10)]"
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={64}
              height={64}
              className="mt-8 h-16 w-16 object-contain"
            />

            <h3 className="mt-6 font-[Georgia] text-[20px] font-bold leading-10 text-[#2D5A3D]">
              {item.title}
            </h3>

            <p className="mt-4 max-w-[280px] font-[Inter] text-base leading-6 text-[#333333]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
