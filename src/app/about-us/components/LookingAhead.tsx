import Image from "next/image";

export default function LookingAhead() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      {/* Background Image */}
      <Image
        src="/images/looking-ahead-bg.jpg"
        alt="Looking Ahead"
        fill
        className="object-cover"
      />

      {/* Orange Overlay */}
      <div className="absolute inset-0 bg-[#D48A2E]/55" />

      <div className="relative max-w-[1200px] mx-auto px-4 text-center text-white">
        <h3
          className="text-2xl md:text-[28px] font-normal"
          style={{ fontFamily: "Georgia" }}
        >
          Looking Ahead
        </h3>

        <h2
          className="mt-5 md:mt-7 text-[26px] md:text-[32px] font-bold"
          style={{ fontFamily: "Georgia" }}
        >
          The Future of Global Taste
        </h2>

        <p className="max-w-[650px] mx-auto mt-9 text-base leading-[30px]">
          Zoiko Foods doesn't just follow food trends
          <br className="hidden md:block" />{" "}
          <span className="font-bold">
            we define the cultural, commercial, and technological standards for
            FMCG
          </span>
        </p>

        <p className="max-w-[820px] mx-auto mt-6 md:mt-0 text-base leading-[30px]">
          From{" "}
          <span className="font-bold">
            SavorTaste's globally accessible staples
          </span>{" "}
          to{" "}
          <span className="font-bold">
            Noxx Caribbean Taste's authentic condiments
          </span>
          ,
          <br className="hidden md:block" />{" "}
          and from{" "}
          <span className="font-bold">
            Zoiko Kitchen's institutional meals
          </span>{" "}
          to wellness-forward innovations like{" "}
          <span className="font-bold">GingerNoxx</span>,
          <br className="hidden md:block" />{" "}
          <span className="font-bold">Noxx Teas</span>, and Noxx Origins Coffee,
          our brands connect heritage to modern lifestyles.
        </p>

        <p className="max-w-[820px] mx-auto mt-8 md:mt-12 text-base leading-[30px]">
          By combining{" "}
          <span className="font-bold">
            direct manufacturing excellence
          </span>{" "}
          with{" "}
          <span className="font-bold">
            long-term partnerships
          </span>
          , Zoiko Foods delivers
          <br className="hidden md:block" />{" "}
          <span className="font-bold">
            absolute value to our customers — and to their customers
          </span>
          .
        </p>

        <button className="mt-10 md:mt-14 bg-white text-[#1E4538] px-10 py-4 text-sm font-medium rounded">
          Partner With Us
        </button>
      </div>
    </section>
  );
}