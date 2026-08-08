"use client";

export default function FaqSearchSection() {
  return (
    <section className="w-full h-36 bg-white flex justify-center items-center px-6">
      <div className="relative w-full max-w-[815px] h-14">
        {/* Input Field */}
        <input
          type="text"
          placeholder=""
          className="w-full h-full bg-white rounded-[50px] border border-[#27AE60] pl-6 pr-[120px] outline-none text-zinc-800"
          style={{ fontFamily: "Segoe UI" }}
        />
        
        {/* Search Button */}
        <button
          className="absolute right-1.5 top-1/2 -translate-y-1/2 w-28 h-10 rounded-[50px] flex items-center justify-center text-white text-sm font-bold"
          style={{
            fontFamily: "Arial",
            background: "linear-gradient(65deg, #15803d 0%, #166534 50%, #fdba74 100%)",
          }}
        >
          Search
        </button>
      </div>
    </section>
  );
}
