"use client";

export default function FaqHeroSection() {
  return (
    <>
      <style>{`
        .faq-hero-bg {
          background: linear-gradient(to bottom right, #2D5A3D 0%, #D4A574 100%);
        }
        @media (min-width: 768px) {
          .faq-hero-bg {
            background: linear-gradient(114deg, #228B22 0%, #2D5A3D 50%, #D4A574 100%);
          }
        }
      `}</style>
      <section className="relative w-full h-[617px] md:h-[353px] faq-hero-bg flex justify-center items-start pt-[70px] md:pt-0 md:items-center px-6 overflow-hidden">
        <div className="w-full max-w-[1215px] flex flex-col items-center text-center mt-2">

          <h1
            className="text-white text-[32px] md:text-[46px] font-bold leading-[48px] md:leading-[61px] mb-6 md:mb-7 w-full whitespace-nowrap"
            style={{ fontFamily: "Georgia" }}
          >
            Frequently Asked<br className="block md:hidden" />Questions &amp;<br className="block md:hidden" />Consumer Car
          </h1>

          <p
            className="text-white text-[17px] md:text-[22px] font-normal leading-7 md:leading-8 mb-6 md:mb-7 w-full whitespace-nowrap"
            style={{ fontFamily: "Segoe UI" }}
          >
            Clear answers to common questions —<br className="block md:hidden" />and a responsible way to contact us if<br className="block md:hidden" />you need help.
          </p>

          <p
            className="text-white text-[15px] md:text-[15px] font-normal leading-6 mb-8 md:mb-9 w-full whitespace-nowrap"
            style={{ fontFamily: "Segoe UI" }}
          >
            Most questions are answered below. If your<br className="block md:hidden" />issue needs personal attention, we&apos;ll guide<br className="block md:hidden" />you safely to the righ team.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-10 w-max md:w-full mx-auto">
            <div className="flex items-center gap-2">
              <span className="text-white text-[17px] md:text-base font-normal leading-6" style={{ fontFamily: "Segoe UI Symbol" }}>✓</span>
              <span className="text-white text-base md:text-[15px] font-semibold leading-6" style={{ fontFamily: "Segoe UI" }}>Search-First Self-Service</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-white text-[17px] md:text-base font-normal leading-6" style={{ fontFamily: "Segoe UI Symbol" }}>✓</span>
              <span className="text-white text-base md:text-[15px] font-semibold leading-6" style={{ fontFamily: "Segoe UI" }}>Responsible Safety Escalation</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-white text-[17px] md:text-base font-normal leading-6" style={{ fontFamily: "Segoe UI Symbol" }}>✓</span>
              <span className="text-white text-base md:text-[15px] font-semibold leading-6" style={{ fontFamily: "Segoe UI" }}>Case Reference &amp; Traceability</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
