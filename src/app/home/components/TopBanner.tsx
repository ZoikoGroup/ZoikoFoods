import Image from "next/image";

export default function TopBanner() {
  return (
    <section className="bg-black min-h-20 w-full overflow-hidden hidden md:flex items-center justify-center py-3 px-4">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
        <Image
          src="/images/firstimage.png"
          alt="Women's Day"
          width={32}
          height={32}
        />

        <p className="font-poppins text-white text-[14px] sm:text-[18px] font-normal leading-[20px] sm:leading-[24px]">
          Happy International Women's Day — Honouring Women Who Feed Communities{" "}
          <span className="hidden sm:inline">|</span>
        </p>

        <a
          href="#"
          className="font-poppins text-white text-[14px] sm:text-[18px] font-normal leading-[20px] sm:leading-[24px] underline"
        >
          Discover Our Brands
        </a>
      </div>
    </section>
  );
}
