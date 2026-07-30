export default function InvestorRelations() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24"
      style={{
        background:
          "linear-gradient(115deg, #1F4A38 0%, #5F7350 45%, #C99B66 100%)",
      }}
    >
      {/* Soft radial highlight */}
      <div
        className="absolute -top-24 right-40 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 text-center">
        <h2
          className="text-white text-3xl md:text-[40px] font-bold leading-tight"
          style={{ fontFamily: "Georgia" }}
        >
          Investor Relations - Shaping the Future of Global Foods
        </h2>

        <p
          className="max-w-[640px] mx-auto mt-8 text-white/90 text-lg md:text-xl leading-8"
          style={{ fontFamily: "Georgia" }}
        >
          Zoiko Foods Corp. is building a next-generation, culturally authentic
          food conglomerate with Fortune-10 ambition and global scale.
        </p>

        <button className="mt-12 bg-white text-[#1E4538] px-8 py-4 text-base font-bold rounded-lg shadow-[0px_2px_8px_rgba(0,0,0,0.10)] hover:bg-[#f4f4f4] transition">
          Request Investor Briefing
        </button>
      </div>
    </section>
  );
}
