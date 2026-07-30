const supplyNetwork = [
  {
    country: "India",
    category: "Rice & Spices",
    description: "Premium basmati and regional spice varieties",
  },
  {
    country: "Caribbean",
    category: "Spices, Patties",
    description: "Scotch bonnet peppers, jerk seasonings",
  },
  {
    country: "Africa",
    category: "Coffee, Ginger",
    description: "Ethiopian coffee, Nigerian ginger",
  },
  {
    country: "Americas",
    category: "Fresh Produce, Poultry",
    description: "Organic produce and free-range poultry",
  },
  {
    country: "Europe",
    category: "Wines, Produce",
    description: "Mediterranean wines and fresh produce",
  },
];

export default function SupplyChainNetwork() {
  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="mb-8 sm:mb-12 text-center font-[Georgia] text-2xl sm:text-3xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          Supply Chain Network
        </h2>

        {/* Mobile & Tablet Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:hidden">
          {supplyNetwork.map((item) => (
            <div
              key={item.country}
              className="rounded-lg bg-white p-6 sm:p-8 shadow-[0px_4px_6px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-[Georgia] text-xl sm:text-2xl font-bold leading-8 sm:leading-10 text-[#2D5A3D]">
                {item.country}
              </h3>
              <p className="mt-4 sm:mt-6 font-[Inter] text-sm sm:text-base leading-6 text-[#333333]">
                {item.category}
              </p>
              <p className="mt-4 sm:mt-6 font-[Inter] text-sm italic leading-6 text-[#666666]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8">
            {supplyNetwork.slice(0, 3).map((item) => (
              <div
                key={item.country}
                className="rounded-lg bg-white p-8 shadow-[0px_4px_6px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-[Georgia] text-2xl font-bold leading-10 text-[#2D5A3D]">
                  {item.country}
                </h3>
                <p className="mt-6 font-[Inter] text-base leading-6 text-[#333333]">
                  {item.category}
                </p>
                <p className="mt-6 font-[Inter] text-sm italic leading-6 text-[#666666]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <div className="grid w-full max-w-3xl grid-cols-2 gap-8">
              {supplyNetwork.slice(3).map((item) => (
                <div
                  key={item.country}
                  className="rounded-lg bg-white p-8 shadow-[0px_4px_6px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-[Georgia] text-2xl font-bold leading-10 text-[#2D5A3D]">
                    {item.country}
                  </h3>
                  <p className="mt-6 font-[Inter] text-base leading-6 text-[#333333]">
                    {item.category}
                  </p>
                  <p className="mt-6 font-[Inter] text-sm italic leading-6 text-[#666666]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}