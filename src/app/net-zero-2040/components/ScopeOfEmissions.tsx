export default function ScopeOfEmissions() {
  const scopes = [
    {
      title: "Scope 1 (Direct)",
      value: "15%",
      bg: "bg-gradient-to-br from-green-100 to-gray-50",
      titleColor: "text-[#333333]",
      valueColor: "text-[#2D5A3D]",
    },
    {
      title: "Scope 2 (Indirect Energy)",
      value: "20%",
      bg: "bg-gradient-to-br from-slate-200 to-gray-50",
      titleColor: "text-[#333333]",
      valueColor: "text-[#2D5A3D]",
    },
    {
      title: "Scope 3 (Supply Chain + Logistics)",
      value: "65%",
      bg: "bg-gradient-to-br from-[#2D5A3D] to-green-900",
      titleColor: "text-white",
      valueColor: "text-[#D4A574]",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-10 sm:mb-14 text-center font-[Georgia] text-xl sm:text-2xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          Scope of Emissions
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {scopes.map((scope) => (
            <div
              key={scope.title}
              className={`${scope.bg} flex h-48 sm:h-56 lg:h-60 flex-col items-center justify-center rounded-lg px-4 sm:px-8 lg:px-25` }
            >
              <h3
                className={`font-[Inter] text-3xl sm:text-4xl font-bold leading-[58px] sm:leading-[76.8px] ${scope.valueColor}`}
              >
                {scope.value}
              </h3>

              <p
                className={`mt-3 sm:mt-4 text-center font-[Georgia] text-lg sm:text-xl font-bold leading-8 sm:leading-10 ${scope.titleColor}`}
              >
                {scope.title}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 sm:mt-12 max-w-3xl text-center font-[Inter] text-sm sm:text-base lg:text-lg font-normal leading-6 sm:leading-8 text-[#666666]">
          <i>Unlike peers, Zoiko directly targets Scope 3 — where the real climate
          impact lies.</i>
        </p>
      </div>
    </section>
  );
}