const cases = [
  {
    title: "Procurement Fraud (Africa)",
    description: "$2M fraud detected early → contract terminated, losses recovered.",
  },
  {
    title: "Labor Abuse (Asia)",
    description: "Child labor flagged → supplier replaced before scandal broke.",
  },
  {
    title: "Financial Misreporting (US)",
    description: "Anonymous tip → corrective audit avoided SEC fine.",
  },
];

export default function CaseApplications() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-8 text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D] md:mb-12">
          Case Applications
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cases.map((item) => (
            <div
              key={item.title}
              className="flex min-h-52 flex-col rounded-lg bg-[#F8F9FA] px-8 py-9"
            >
              <h3 className="font-[Georgia] text-xl font-bold leading-8 text-[#2D5A3D]">
                {item.title}
              </h3>

              <p className="mt-6 font-[Inter] text-base font-normal leading-6 text-[#333333]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
