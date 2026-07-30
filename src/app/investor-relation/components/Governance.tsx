export default function Governance() {
  const leftItems = [
    "Policies in place:",
    "Anti-Bribery & Corruption",
    "Modern Slavery & Human Rights",
    "ESG Oversight Framework",
  ];

  const rightItems = [
    "Parent company: Zoiko Group Inc.",
    "Board-led governance with global oversight",
  ];

  return (
    <section className="bg-[#F6DCC8] py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] rounded-lg px-6 md:px-4 xl:px-0">
        <h2
          className="mb-8 text-center text-[24px] font-bold leading-9 text-[#2D5A3D] md:mb-16 md:leading-[52px]"
          style={{ fontFamily: "Georgia" }}
        >
          Built on Transparency & Governance
        </h2>

        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-24 md:gap-y-0">
          {/* Left Column */}
          <div className="space-y-5 md:space-y-8">
            {leftItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span
                  className="text-[18px] font-bold leading-6 text-[#2D5A3D] md:text-[24px]"
                  style={{ fontFamily: "Inter" }}
                >
                  ✓
                </span>

                <span
                  className="text-[16px] font-normal leading-6 text-[#333333] md:text-[24px]"
                  style={{ fontFamily: "Inter" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-5 md:space-y-8">
            {rightItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span
                  className="text-[18px] font-bold leading-6 text-[#2D5A3D] md:text-[24px]"
                  style={{ fontFamily: "Inter" }}
                >
                  ✓
                </span>

                <span
                  className="text-[16px] font-normal leading-6 text-[#333333] md:text-[24px]"
                  style={{ fontFamily: "Inter" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center md:mt-20">
          <button
            className="h-14 w-full max-w-72 rounded-lg border-2 border-[#2D5A3D] bg-transparent text-[16px] md:text-[18px] font-bold text-[#2D5A3D] transition hover:bg-[#2D5A3D] hover:text-white"
            style={{ fontFamily: "Arial" }}
          >
            View Governance Policies
          </button>
        </div>
      </div>
    </section>
  );
}
