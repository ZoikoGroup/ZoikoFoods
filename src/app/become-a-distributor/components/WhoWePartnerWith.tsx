export default function WhoWePartnerWith() {
  const partners = [
    {
      text: "Established FMCG distributor with retail/wholesale presence",
    },
    {
      bold: "Minimum annual commitment:",
      text: " 5 containers (500 MT) per product line",
    },
    {
      text: "Strong financial capacity and working capital",
    },
    {
      text: "Compliance with HACCP, FDA, FSSAI, or equivalent",
    },
    {
      text: "Long-term exclusive or semi-exclusive agreements",
    },
  ];

  return (
    <section className="w-full h-auto sm:h-[749px] bg-[#F8F9FA] relative overflow-hidden py-12 sm:py-0 px-5 sm:px-0">
      <div className="w-full sm:w-[1200px] h-auto sm:h-[565px] sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-[80px]">

        {/* Heading */}
        <h2 className="sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 text-center text-[#2D5A3D] text-[22px] sm:text-2xl font-bold font-['Georgia'] leading-8 mb-8 sm:mb-0">
          Who We Partner With
        </h2>

        {/* Cards */}
        <div className="w-full sm:w-[800px] sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-[79px] flex flex-col gap-[22px]">
          {partners.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[800px] min-h-[80px] py-4 sm:py-0 sm:h-20 bg-white rounded-lg shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] flex items-center px-6 sm:px-0"
            >
              {/* Tick Icon */}
              <div className="sm:ml-6 w-7 h-7 shrink-0 bg-[#2D5A3D] rounded-full flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4L6 11.5L2.5 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="ml-4 sm:ml-5 flex-1">
                {item.bold ? (
                  <p className="text-zinc-800 text-[14px] sm:text-base font-normal font-['Inter'] leading-snug sm:leading-6">
                    <span className="font-bold">{item.bold}</span>
                    <span>{item.text}</span>
                  </p>
                ) : (
                  <p className="text-zinc-800 text-[14px] sm:text-base font-normal font-['Inter'] leading-snug sm:leading-6">
                    {item.text}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}