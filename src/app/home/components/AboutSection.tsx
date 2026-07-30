export default function AboutSection() {
  return (
    <section className="w-full bg-[#1E4538] py-10 md:py-14">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center px-6 text-center">

        <p className="font-inter italic text-white text-[16px] md:text-[22px] font-light leading-[28px] md:leading-[38px]">
          From African fields and Caribbean kitchens to family tables
          worldwide,
          <br className="hidden md:block" />{" "}
          Zoiko Foods connects cultures through everyday staples and
          global flavors.
        </p>

        <button className="mt-8 md:mt-10 bg-white text-[#1E4538] text-[16px] md:text-[18px] font-medium px-8 py-4 md:px-12 md:py-6 hover:bg-gray-100 transition">
          Learn More About Us
        </button>

      </div>
    </section>
  );
}
