import Image from "next/image";

const responsibilities = [
  {
    title: "Global Requirements",
    items: [
      "Sign Zoiko's Code of Ethics",
      "Submit to audits",
      "Maintain HACCP/ISO standards",
    ],
  },
  {
    title: "Local Requirements",
    items: [
      <>
        Show certification under applicable
        <br />
        regional authority
      </>,
      <>
        FDA, FSSAI, EU regulators, AU
        <br />
        agencies, etc.
      </>,
    ],
  },
  {
    title: "Annual Renewal",
    items: [
      <>
        Suppliers re-certify compliance every
        <br />
        year
      </>,
      "Regional addendum required",
    ],
  },
];

export default function SupplierResponsibilities() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2
          className="text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D]"
        >
          Supplier Responsibilities
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {responsibilities.map((card, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#F8F9FA] p-6 md:p-8"
            >
              <h3
                className="mb-6 font-[Georgia] text-lg font-bold leading-8 text-[#2D5A3D] md:mb-8 md:text-xl md:leading-10"
              >
                {card.title}
              </h3>

              <div className="space-y-5 md:space-y-6">
                {card.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 md:gap-3">
                    <Image
                      src="/images/tick.png"
                      alt="Tick"
                      width={16}
                      height={16}
                      className="mt-[5px] shrink-0 md:mt-1 md:h-[18px] md:w-[18px]"
                    />

                    <p
                      className="font-[Inter] text-[14px] leading-5 text-[#333333] md:text-[15px] md:leading-6"
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}