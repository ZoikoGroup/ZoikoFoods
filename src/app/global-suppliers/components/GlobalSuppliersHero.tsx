export default function GlobalSuppliersHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(90deg,#2D5A3D_0%,#D4A574_100%)] sm:bg-[linear-gradient(67deg,#8A5A2B_0%,#1F6B3A_55%,#D4A574_100%)]">
      <div className="mx-auto flex flex-col items-center justify-center px-6 sm:px-8 pt-16 sm:pt-[80px] pb-12 sm:pb-[72px] text-center">
        <h1 className="w-full max-w-5xl font-[Georgia] text-[28px] leading-[36px] sm:text-[40px] sm:leading-[52px] font-bold text-white">
          <span className="sm:hidden">
            The Zoiko Farmer <br />
            Promise A Global <br />
            Movement for Farmers <br />
            &amp; Suppliers
          </span>
          <span className="hidden sm:block">
            The Zoiko Farmer Promise
            <br />
            A Global Movement for Farmers &amp; Suppliers
          </span>
        </h1>

        <p className="mt-5 sm:mt-[35px] max-w-3xl font-[Inter] text-[14px] sm:text-[20px] leading-[22px] sm:leading-[28px] font-normal text-white">
          <span className="sm:hidden">
            We connect heritage, opportunity, and <br />
            innovation to empower farmers worldwide.
          </span>
          <span className="hidden sm:block">
            We connect heritage, opportunity, and innovation to empower farmers
            worldwide.
          </span>
        </p>

        <div className="mt-8 sm:mt-[38px] flex w-full px-2 sm:px-0 flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-[21px]">
          <button className="w-full sm:w-auto rounded-md bg-[#D4A574] px-6 sm:px-8 py-3.5 sm:py-4 font-[Arial] text-sm sm:text-base font-bold text-white transition hover:opacity-90">
            Apply to Join
          </button>

          <button className="w-full sm:w-auto rounded-md border-[1.5px] border-white px-6 sm:px-8 py-3.5 sm:py-4 font-[Arial] text-sm sm:text-base font-bold text-white transition hover:bg-white hover:text-[#1F6B3A]">
            Explore Farmer Stories
          </button>
        </div>
      </div>
    </section>
  );
}