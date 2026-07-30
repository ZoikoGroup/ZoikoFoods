const actionData = [
  {
    title: "India (Rice)",
    description:
      "Stable farmer contracts → reduced volatility costs by 15%",
    badge: "$5M annual savings",
  },
  {
    title: "Caribbean (Spices & Patties)",
    description:
      "Local sourcing → $5M annual supply chain savings",
    badge: "Supply chain optimization",
  },
  {
    title: "Africa (Coffee & Ginger)",
    description:
      "Agritech training → +20% yields, sourcing cost reduced by 12%",
    badge: "Farmer empowerment success",
  },
];

export default function ActionSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 md:mb-16 text-center font-[Georgia] text-2xl md:text-3xl font-bold leading-tight md:leading-[52px] text-[#2D5A3D]">
          Commitments in Action
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {actionData.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-[#F8F9FA] p-6 md:p-9"
            >
              <h3 className="font-[Georgia] text-lg md:text-xl font-bold leading-8 md:leading-10 text-[#2D5A3D]">
                {item.title}
              </h3>

              <p className="mt-8 font-[Inter] text-base leading-6 text-[#333333]">
                {item.description}
              </p>

              <div className="mt-8 inline-block rounded-lg bg-[#D4A574] px-5 py-3">
                <p className="font-[Inter] text-sm font-bold leading-6 text-[#2D5A3D]">
                  {item.badge}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}