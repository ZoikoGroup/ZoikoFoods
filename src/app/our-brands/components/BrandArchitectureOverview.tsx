export default function BrandArchitectureOverview() {
  return (
    <section className="w-full bg-white flex justify-center pt-8 pb-12 md:py-12 px-6">
      <div className="w-full max-w-[1200px]">
        {/* Heading */}
        <h2
          className="text-[#2D5F2E] text-2xl font-bold leading-[56.32px]"
          style={{ fontFamily: "Segoe UI" }}
        >
          Brand Architecture Overview
        </h2>

        {/* First Paragraph */}
        <p
          className="text-[#495057] text-[15px] leading-7 md:text-lg md:leading-8 mt-2 max-w-[1131px]"
          style={{ fontFamily: "Segoe UI" }}
        >
          Zoiko Foods Corp operates a **house-of-brands model**, enabling each
          brand to address a distinct consumer need or category while benefiting
          from centralized quality systems, sourcing discipline, and operational
          scale.
        </p>

        {/* Second Paragraph */}
        <p
          className="text-[#495057] text-[15px] leading-7 md:text-lg md:leading-8 mt-6 max-w-[685px]"
          style={{ fontFamily: "Segoe UI" }}
        >
          Brands are grouped by category role, consumption occasion, and
          go-to-market channel.
        </p>
      </div>
    </section>
  );
}
