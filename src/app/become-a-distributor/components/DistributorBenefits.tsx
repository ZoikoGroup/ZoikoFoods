export default function DistributorBenefits() {
  const financialBenefits = [
    {
      bold: "12-25% wholesale margins",
      text: " depending on product line",
    },
    {
      bold: "Trade Discounts:",
      text: (
        <>
          {" "}
          Introductory volume discounts + early
          <br />
          payment incentives
        </>
      ),
    },
    {
      bold: "Marketing Fund:",
      text: (
        <>
          {" "}
          3-5% of annual order value reinvested in
          <br />
          local activations
        </>
      ),
    },
    {
      bold: "Territorial Exclusivity:",
      text: " Protects partner's market rights",
    },
  ];

  const operationalBenefits = [
    { text: "Dedicated account manager" },
    { text: "Training programs (sales & product)" },
    { text: "Co-branded marketing materials" },
    { text: "Access to innovation pipeline before global rollout" },
  ];

  return (
    <section className="w-full h-auto sm:h-[728px] py-12 sm:py-10 relative overflow-hidden px-5 sm:px-0">
      <div className="w-full sm:w-[1200px] h-full mx-auto relative flex flex-col sm:block">

        {/* Main Heading */}
        <h2 className="sm:absolute sm:top-[23px] sm:left-1/2 sm:-translate-x-1/2 text-center text-[#2D5A3D] text-[22px] sm:text-2xl font-bold font-['Georgia'] leading-8 mb-8 sm:mb-0">
          Distributor Benefits — The ROI Case
        </h2>

        <div className="flex flex-col sm:block gap-6 sm:gap-0 w-full">
          {/* Financial Incentives */}
          <div className="sm:absolute sm:left-[20px] sm:top-[99px] w-full sm:w-[556px] h-auto sm:h-[496px] bg-[#F8F9FA] rounded-lg py-8 sm:py-0 px-4 sm:px-0">
            <h3 className="sm:absolute sm:top-[39px] sm:left-1/2 sm:-translate-x-1/2 text-center text-[#2D5A3D] text-lg sm:text-xl font-bold font-['Georgia'] leading-6 mb-6 sm:mb-0">
              Financial Incentives
            </h3>
            <div className="sm:absolute sm:top-[96px] sm:left-[40px] w-full sm:w-[476px] flex flex-col gap-[17px] mx-auto">
              {financialBenefits.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[500px] min-h-[56px] bg-white rounded-lg border-l-4 border-[#D4A574] flex items-center px-4 py-4 sm:py-5"
                >
                  <p className="text-zinc-800 text-[14px] sm:text-base font-normal font-['Inter'] leading-snug sm:leading-6">
                    <span className="font-bold">{item.bold}</span>
                    <span>{item.text}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Support */}
          <div className="sm:absolute sm:right-[20px] sm:top-[99px] w-full sm:w-[556px] h-auto sm:h-[496px] bg-[#F8F9FA] rounded-lg py-8 sm:py-0 px-4 sm:px-0 mt-6 sm:mt-0">
            <h3 className="sm:absolute sm:top-[39px] sm:left-1/2 sm:-translate-x-1/2 text-center text-[#2D5A3D] text-lg sm:text-xl font-bold font-['Georgia'] leading-6 mb-6 sm:mb-0">
              Operational Support
            </h3>
            <div className="sm:absolute sm:top-[96px] sm:left-[40px] w-full sm:w-[476px] flex flex-col gap-[17px] mx-auto">
              {operationalBenefits.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[476px] min-h-[56px] bg-white rounded-lg border-l-4 border-[#D4A574] flex items-center px-4 py-4 sm:py-3"
                >
                  <p className="text-zinc-800 text-[14px] sm:text-base font-normal font-['Inter'] leading-snug sm:leading-6">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}