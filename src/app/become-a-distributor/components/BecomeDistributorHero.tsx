export default function BecomeDistributorHero() {
  return (
    <section className="w-full h-auto sm:h-[457px] relative bg-[linear-gradient(135deg,#2D5A3D_0%,#D4A574_100%)] sm:bg-[linear-gradient(135deg,#2D5A3D_0%,#1A4D2A_50%,#D4A574_100%)] overflow-hidden py-14 sm:py-0 px-5 sm:px-0">
      
      {/* Heading */}
      <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-[63px] text-center w-full">
        <h1 className="text-white text-3xl sm:text-4xl font-bold font-['Georgia'] leading-tight sm:leading-[63px]">
          Become a Distributor - <br className="hidden sm:block" />
          <span className="sm:hidden"><br /></span>
          Partner With a Global <br className="sm:hidden" /> Growth Leader
        </h1>
      </div>

      {/* Description */}
      <div className="w-full sm:w-[1007px] sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-[205px] text-center mt-6 sm:mt-0">
        <p className="text-white/90 text-[15px] sm:text-xl font-normal font-['Georgia'] leading-relaxed sm:leading-8">
          Zoiko Foods Corp. is building the world's most culturally authentic
          food network.
          <br className="hidden sm:block" />
          We invite distributors to join us in delivering heritage, innovation,
          and growth to millions worldwide.
        </p>
      </div>

      {/* CTA Button */}
      <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-[336px] w-full sm:w-80 h-14 bg-[#D4A574] rounded-lg flex items-center justify-center mt-8 sm:mt-0 mx-auto max-w-[300px] sm:max-w-none">
        <button className="text-white text-[15px] sm:text-lg font-bold font-['Arial'] whitespace-nowrap">
          Apply to Become a Distributor
        </button>
      </div>

      {/* Optional decorative line for mobile like in design */}
      <div className="sm:hidden w-32 h-[2px] bg-white/50 mx-auto mt-8 rounded-full" />
    </section>
  );
}