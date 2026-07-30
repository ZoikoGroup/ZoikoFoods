const opportunities = [
  {
    title: "Rice",
    description: "Multiple varieties needed across global markets",
    status: "Open",
  },
  {
    title: "Coffee & Teas",
    description: "Premium quality suppliers in Africa & Asia",
    status: "Limited",
  },
  {
    title: "Spices & Condiments",
    description: "Caribbean, Indian, and African spices",
    status: "Open",
  },
  {
    title: "Proteins",
    description: "Chicken and plant-based patties",
    status: "Limited",
  },
  {
    title: "Beverages",
    description: "Ginger, herbs, natural extracts",
    status: "Open",
  },
  {
    title: "Fruits & Vegetables",
    description: "Fresh produce for global distribution",
    status: "Open",
  },
];

export default function SupplyOpportunities() {
  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="mb-8 sm:mb-12 text-center font-[Georgia] text-2xl sm:text-3xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          Supply Opportunities
        </h2>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((item) => {
            const isOpen = item.status === "Open";

            return (
              <div
                key={item.title}
                className="relative rounded-lg bg-white p-6 sm:p-8 shadow-[0px_4px_6px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  className={`absolute right-4 sm:right-6 top-4 sm:top-6 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold uppercase font-[Inter] ${
                    isOpen
                      ? "bg-[#D4EDDA] text-[#155724]"
                      : "bg-[#FFF3CD] text-[#856404]"
                  }`}
                >
                  {item.status}
                </span>

                <h3
                  className={`font-[Georgia] font-bold text-[#2D5A3D] pr-20 sm:pr-24 ${
                    item.title === "Fruits & Vegetables"
                      ? "text-lg sm:text-xl leading-7 sm:leading-8"
                      : "text-xl sm:text-2xl leading-8 sm:leading-10"
                  }`}
                >
                  {item.title}
                </h3>

                <p className="mt-6 sm:mt-8 font-[Inter] text-sm sm:text-base leading-6 text-[#333333]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}