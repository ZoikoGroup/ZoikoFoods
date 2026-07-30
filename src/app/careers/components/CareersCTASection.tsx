export default function CareersCTASection() {
  return (
    <section className="bg-[#396A4B] py-20">
      <div className="mx-auto max-w-[1200px] px-5 text-center">

        {/* Heading */}
        <h2 className="text-[26px] font-bold leading-tight text-white md:text-4xl">
          Ready to Join Our Team?
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm leading-6 text-white opacity-90 md:mt-5 md:text-lg md:leading-7">
          Applications are managed centrally by Zoiko Foods Corp. ensuring
          consistent, fair evaluation across all brands and locations.
        </p>


        {/* Equal Opportunity Box */}
        <div className="mt-8 flex justify-center md:mt-10">
          <div className="inline-block rounded-lg bg-white/10 px-5 py-4 text-center md:px-8 md:py-5">
            <p className="text-xs leading-5 text-white md:text-sm md:leading-6">
              <span className="font-bold">
                Equal Opportunity:
              </span>{" "}
              We are committed to EEOC, Equality Act (UK), and GDPR/CCPA
              compliance in all hiring practices.
            </p>
          </div>
        </div>


        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:mt-10 md:gap-5">

          <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#396A4B] md:px-8 md:text-base">
            Browse All Positions
          </button>

          <button className="rounded-md bg-[#FF8C00] px-6 py-3 text-sm font-semibold text-white md:px-8 md:text-base">
            Submit General Application
          </button>

        </div>

      </div>
    </section>
  );
}