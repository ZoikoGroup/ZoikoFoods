export default function Newsletter() {
  return (
    <section
      className="relative min-h-[364px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/newsletter-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[364px] px-4 sm:px-6 py-10 text-center">

        {/* Heading */}
        <h2
          className="text-[24px] md:text-[30px] font-bold leading-[36px] md:leading-[52px] text-[#1E4538]"
          style={{ fontFamily: "Georgia" }}
        >
          Join Our Table
        </h2>

        {/* Description */}
        <p className="mt-4 text-center text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#1E4538]">
          Get recipes, culture & inspiration from Africa, the Caribbean,
          <br className="hidden md:block" />{" "}
          and beyond delivered to your inbox
        </p>

        {/* Form */}
        <div className="mt-8 md:mt-12 flex flex-col items-center gap-6 w-full">

          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full max-w-[400px] h-12 rounded-lg bg-white px-4 text-[16px] placeholder:text-[#757575] shadow-lg outline-none"
          />

          <button className="bg-[#2D5A3D] text-white px-10 py-3 rounded-full text-[14px] font-medium hover:opacity-90 transition">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}
