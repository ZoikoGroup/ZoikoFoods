import Image from "next/image";

export default function HeroSection() {
  const checklist = [
    "Territory and channel protection",
    "Compliance-first partner onboarding",
    "Performance-reviewed exclusivity",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-950 to-green-900">
      {/* Desktop Background Graphic */}
      <div className="pointer-events-none absolute hidden lg:block right-0 top-1/2 -translate-y-1/2 mr-[68px] z-0 opacity-100 mix-blend-screen">
        <Image 
          src="/distribution-hero-bg.png" 
          alt="Distribution Network Graphic Desktop" 
          width={712}
          height={534}
          className="object-contain" 
          unoptimized 
        />
      </div>

      {/* Mobile Background Graphic */}
      <div className="pointer-events-none absolute block lg:hidden left-0 right-0 bottom-0 z-0 opacity-100 mix-blend-screen">
        <Image 
          src="/images/distribution-hero-bg-mobile.png" 
          alt="Distribution Network Graphic Mobile" 
          width={500}
          height={375}
          className="w-full object-contain object-bottom" 
          unoptimized 
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-56 md:py-20 lg:py-24 z-10">
        <div className="max-w-xl">
          <h1 className="font-['Segoe_UI'] text-[32px] sm:text-[34px] md:text-5xl font-bold leading-[1.8] text-white">
            Exclusive Distribution.
            <br />
            Governed by Design.
          </h1>

          <p className="mt-6 text-[20px] font-normal leading-[1.8] text-white/95 md:text-xl">
            Zoiko Foods Corp partners with select distributors to represent <br className="hidden md:block" />
            our brands with discipline, integrity, and long-term <br className="hidden md:block" />
            commitment.
          </p>

          <p className="mt-6 text-[18px] font-semibold leading-6 text-white/90 md:text-xl">
            This is not open distribution. This is structured market stewardship.
          </p>

          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 max-w-[580px]">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#D4A574] text-[12px] font-bold text-white">
                  ✓
                </span>
                <span className="text-[16px] leading-6 text-white md:text-[16px]">{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-10 rounded-sm border border-white bg-white px-9 py-4 text-base font-semibold leading-6 text-zinc-800 transition hover:bg-white/90">
            Become a Distributor
          </button>
        </div>
      </div>
    </section>
  );
}