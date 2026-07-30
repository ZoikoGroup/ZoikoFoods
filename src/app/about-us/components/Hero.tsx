import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[400px] md:h-[506px] overflow-hidden">
      {/* Background */}
      <Image
        src="/images/about-bg.png.png"
        alt="About Background"
        fill
        priority
        className="object-cover"
      />

      {/* Background Photo */}
      <Image
        src="/images/about-hero.jpg"
        alt="About Hero"
        fill
        priority
        className="object-cover opacity-60"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1
          className="text-white text-3xl md:text-5xl font-bold leading-tight md:leading-[83.2px]"
          style={{
            fontFamily: "Georgia",
          }}
        >
          Feeding the Future
        </h1>

        <p
          className="mt-4 md:mt-6 text-white/95 text-lg md:text-2xl font-light leading-7 md:leading-10"
          style={{
            fontFamily: "Inter",
            textShadow: "0px 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          One Culture, One Table, One Innovation at a Time
        </p>

        <p
          className="mt-4 text-white/90 text-sm md:text-base leading-6 md:leading-7"
          style={{
            fontFamily: "Inter",
            textShadow: "0px 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          Zoiko Foods connects heritage, innovation, and global trust.
        </p>
      </div>
    </section>
  );
}