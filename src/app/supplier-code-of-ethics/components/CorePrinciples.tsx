const principles = [
  {
    title: "Integrity",
    description: (
      <>
        Honest business practices
        <br />
        and ethical conduct
      </>
    ),
  },
  {
    title: "Sustainability",
    description: (
      <>
        Environmental responsibility
        <br />
        and resource conservation
      </>
    ),
  },
  {
    title: "Fair Labor",
    description: (
      <>
        Safe working conditions and
        <br />
        fair compensation
      </>
    ),
  },
  {
    title: "Transparency",
    description: (
      <>
        Open communication and
        <br />
        reporting
      </>
    ),
  },
  {
    title: "Partnership",
    description: (
      <>
        Long-term collaborative
        <br />
        relationships
      </>
    ),
  },
  {
    title: (
      <>
        Safety &
        <br />
        Quality
      </>
    ),
    description: (
      <>
        Food safety and product
        <br />
        quality standards
      </>
    ),
  },
];

export default function CorePrinciples() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2
          className="text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D]"
        >
          Core Principles
        </h2>

        <p
          className="mt-2 text-center font-[Inter] text-lg leading-8 text-[#666666]"
        >
          <i>Applied everywhere, adapted locally</i>
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, index) => (
            <div
              key={index}
              className="flex min-h-[130px] flex-col items-center justify-center rounded-lg bg-[#F8F9FA] px-4 py-4 text-center md:min-h-[210px] md:px-6 md:py-0"
            >
              <h3
                className="font-[Georgia] text-base font-bold leading-7 text-[#2D5A3D] md:text-xl md:leading-10"
              >
                {item.title}
              </h3>

              <p
                className="mt-3 font-[Inter] text-[13px] leading-5 text-[#333333] md:mt-6 md:text-[15px] md:leading-6"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}