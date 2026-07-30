export default function InvestorCTA() {
  return (
    <section className="bg-[#F8F9FA] py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center md:px-4 xl:px-0">
        <p
          className="mx-auto max-w-[900px] text-[16px] font-normal leading-8 text-[#333333]"
          style={{ fontFamily: "Inter" }}
        >
          We welcome strategic investors, distribution partners, and financial
          stakeholders who share our vision for a{" "}
          <br className="hidden md:block" />
          culturally authentic, globally scaled food conglomerate.
        </p>

        <div
          className="mt-8 md:mt-10 text-[16px] md:text-[18px] font-normal leading-8 text-[#666666]"
          style={{ fontFamily: "Inter" }}
        >
          <p>Email: info@zoikofoods.com</p>
          <p>Phone: +1 800-484-5574</p>
        </div>

        <button
          className="mt-8 md:mt-10 h-14 w-full max-w-72 rounded-lg border-2 border-[#2D5A3D] bg-transparent text-[16px] md:text-[18px] font-bold text-[#2D5A3D] transition hover:bg-[#2D5A3D] hover:text-white"
          style={{ fontFamily: "Arial" }}
        >
          Book a Call With Our Team
        </button>
      </div>
    </section>
  );
}