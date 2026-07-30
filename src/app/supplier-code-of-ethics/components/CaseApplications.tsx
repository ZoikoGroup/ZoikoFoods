const cases = [
  {
    title: "EU Supplier",
    description: (
      <>
        Failed to comply with packaging directive
        <br />
        → corrective plan within 6 months or
        <br />
        contract loss.
      </>
    ),
  },
  {
    title: "African Supplier",
    description: (
      <>
        Audit finds underage labor → immediate
        <br />
        termination + NGO referral.
      </>
    ),
  },
  {
    title: "US Supplier",
    description: (
      <>
        Attempted to bribe procurement manager
        <br />
        → termination + FCPA reporting.
      </>
    ),
  },
];

export default function CaseApplications() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2
          className="text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D]"
        >
          Case Applications
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#F8F9FA] p-4 transition-shadow duration-300 hover:shadow-md md:p-9"
            >
              <h3
                className="mb-3 font-[Georgia] text-sm font-bold leading-6 text-[#2D5A3D] md:mb-8 md:text-xl md:leading-10"
              >
                {item.title}
              </h3>

              <p
                className="font-[Inter] text-[12px] leading-5 text-[#333333] md:text-[15px] md:leading-6"
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