export default function WhistleblowerHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(67deg,#166534_0%,#fdba74_100%)] py-16 md:h-96 md:py-0">
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="font-[Georgia] text-3xl font-bold leading-tight text-white md:text-4xl md:leading-[57px]">
          Whistleblower Policy - Protecting Integrity,
          <br className="hidden md:block" />{" "}
          Protecting Shareholder Value
        </h1>

        <p className="mt-6 font-[Georgia] text-lg font-normal leading-8 text-white/90 md:text-xl">
          By enabling safe, anonymous reporting, Zoiko Foods prevents fraud,
          <br className="hidden md:block" />{" "}
          reduces fines, and safeguards our brand reputation globally.
        </p>

        <button
          type="button"
          className="mt-8 block w-full max-w-xs rounded-md bg-white px-6 py-3 font-[Georgia] text-base font-semibold text-green-800 shadow-sm transition hover:bg-white/90 md:hidden"
        >
          Submit a Report Anonymously
        </button>
      </div>
    </section>
  );
}