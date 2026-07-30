export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[560px] md:h-[790px] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
    >
      {/* Black Overlays */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 hidden md:block bg-black/40"></div>

      {/* Glass Card */}
      <div className="relative z-10 flex items-center justify-center h-full min-h-[560px] md:min-h-0 px-4 sm:px-8 py-10 md:py-0">
        <div className="w-full max-w-[1100px] md:h-[520px] rounded-[24px] border border-white/20 bg-white/10 backdrop-blur-[5px] shadow-[0_4px_20px_rgba(17,71,105,0.1)] flex flex-col items-center justify-center text-center px-6 py-10 md:px-[48px] md:py-[40px]">
          {/* Heading */}
          <h1 className="font-georgia text-white text-[32px] sm:text-[42px] md:text-[60px] font-bold leading-[1.2]">
            Celebrating Global Traditions
            <br className="hidden md:block" />{" "}
            Elevating Everyday Meals
          </h1>

          {/* Paragraph */}
          <p className="mt-6 md:mt-6 font-inter text-white text-[18px] sm:text-[20px] md:text-[25px] font-light leading-[1.7] md:leading-[45px]">
            From African fields and Caribbean kitchens
            <br className="hidden md:block" />{" "}
            to family tables worldwide
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-12">
            <button className="bg-[#2D5A3D] rounded-2g px-8 py-4 md:px-10 md:py-6 font-inter text-white text-[15px] md:text-[20px] font-medium leading-[24px]">
              Discover Our Brands
            </button>

            <button className="bg-[#D79247] rounded-2g px-8 py-4 md:px-10 md:py-6 font-inter text-white text-[15px] md:text-[20px] font-medium leading-[24px]">
              Explore Rice &amp; Global Staples
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
