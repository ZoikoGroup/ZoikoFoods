export default function HeroSection() {
  return (
    <section className="w-full min-h-[300px] md:min-h-[461px] overflow-hidden bg-[linear-gradient(65deg,#1A4D2A_0%,#2D5A3D_55%,#D4A574_100%)]">
      <div className="max-w-[1440px] h-full mx-auto flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-12 md:py-20 text-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold font-[Georgia] leading-9 md:leading-[63px]">
          The Zoiko Governance Portal -
          <br />
          Accountability Without Compromise
        </h1>

        <p className="mt-6 md:mt-8 text-white/90 text-base md:text-xl font-normal font-[Georgia] leading-6 md:leading-8">
          Even as a startup, Zoiko Foods operates with world-class standards in
          governance, ethics, and compliance. We publish live commitments,
          frameworks, and metrics—not after the fact, but in real time.
        </p>

        <button className="mt-8 md:mt-10 w-full max-w-xs md:w-80 h-14 rounded-lg bg-[#D4A574] flex items-center justify-center transition duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98]">
          <span className="text-white text-base md:text-lg font-bold font-[Arial]">
            Explore Governance Framework
          </span>
        </button>
      </div>
    </section>
  );
}