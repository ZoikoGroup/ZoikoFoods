export default function PrivateLabelManufacturing() {
  const capabilities = [
    "Private‑label and white‑label production",
    "Product formulation and co‑development",
    "Ready‑to‑launch category ranges",
    "Quality, specification, and compliance documentation",
    "Multi‑country sourcing options",
  ];

  const indicativeCategories = [
    "Pantry staples",
    "Frozen vegetables",
    "Snacks and chips",
    "Honey and natural sweeteners",
    "Select beverage formats",
  ];

  return (
    <section
      className="w-full relative overflow-hidden flex justify-center py-12 md:py-16 pl-6 pr-10 md:px-6"
      style={{
        background:
          "linear-gradient(135deg, #228B22 0%, #2D5A3D 50%, #D4A574 100%)",
      }}
    >
      <div className="w-full max-w-[1215px] flex flex-col">
        {/* Heading */}
        <h2
          className="text-white text-[28px] leading-[36px] md:text-3xl font-bold md:leading-[56.32px]"
          style={{ fontFamily: "Segoe UI" }}
        >
          Private-Label &amp; White-Label Manufacturing
        </h2>

        {/* Description */}
        <p
          className="text-white text-[16px] leading-[26px] md:text-lg font-normal md:leading-8 mt-4 md:mt-2 max-w-[1109px]"
          style={{ fontFamily: "Segoe UI" }}
        >
          Alongside its proprietary brands, Zoiko Foods Corp supports retailers,
          distributors, and foodservice operators with private‑label and
          white‑label manufacturing under partner branding.
        </p>

        {/* Two Columns */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-[33px] mt-12 md:mt-16">
          {/* Capabilities */}
          <div className="flex-1">
            <h3
              className="text-white text-[24px] md:text-2xl font-bold leading-8 md:leading-10 mb-5 md:mb-6"
              style={{ fontFamily: "Segoe UI" }}
            >
              Capabilities
            </h3>
            <ul className="flex flex-col gap-4">
              {capabilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span
                    className="text-white text-[15px] md:text-base font-normal leading-[24px] md:leading-6 shrink-0 w-3.5"
                    style={{ fontFamily: "Segoe UI" }}
                  >
                    →
                  </span>
                  <span
                    className="text-white text-[15px] md:text-base font-normal leading-[24px] md:leading-6"
                    style={{ fontFamily: "Segoe UI" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Indicative Categories */}
          <div className="flex-1">
            <h3
              className="text-white text-[24px] md:text-2xl font-bold leading-8 md:leading-10 mb-5 md:mb-6"
              style={{ fontFamily: "Segoe UI" }}
            >
              Indicative Categories
            </h3>
            <ul className="flex flex-col gap-4">
              {indicativeCategories.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span
                    className="text-white text-[15px] md:text-base font-normal leading-[24px] md:leading-6 shrink-0 w-3.5"
                    style={{ fontFamily: "Segoe UI" }}
                  >
                    →
                  </span>
                  <span
                    className="text-white text-[15px] md:text-base font-normal leading-[24px] md:leading-6"
                    style={{ fontFamily: "Segoe UI" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
