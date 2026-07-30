export default function ActiveTerritories() {
  const territories = [
    {
      title: "Americas",
      description: (
        <>
          Complete portfolio distributed; sub-
          <br />
          regional expansion open
        </>
      ),
      status: "Active",
      statusStyle: "bg-[#D4EDDA] text-[#155724]",
    },
    {
      title: "Caribbean",
      description: (
        <>
          Full rollout; new channel partnerships
          <br />
          available
        </>
      ),
      status: "Active",
      statusStyle: "bg-[#D4EDDA] text-[#155724]",
    },
    {
      title: "Africa",
      description: (
        <>
          Active in 5 markets; expansion
          <br />
          opportunities in additional countries
        </>
      ),
      status: "Expanding",
      statusStyle: "bg-[#D4EDDA] text-[#155724]",
    },
    {
      title: "Europe",
      description: "Wines, café, condiments open",
      status: "Available",
      statusStyle: "bg-[#D1ECF1] text-[#0C5460]",
    },
    {
      title: "Asia",
      description: "Rice, teas, beverages open for distribution",
      status: "Available",
      statusStyle: "bg-[#D1ECF1] text-[#0C5460]",
    },
  ];

  return (
    <section className="w-full h-auto sm:h-126 py-12 sm:py-15 relative overflow-hidden px-5 sm:px-0">

      <div className="w-full sm:w-[1200px] h-auto sm:h-96 mx-auto relative flex flex-col sm:block">

        {/* Heading */}
        <h2 className="sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 text-center text-[#2D5A3D] text-[22px] sm:text-2xl font-bold font-['Georgia'] leading-8 mb-8 sm:mb-0">
          Active & Available Territories
        </h2>

        {/* Cards */}
        <div className="sm:absolute sm:top-[79px] sm:left-0 w-full grid grid-cols-1 sm:grid-cols-3 gap-[18px] sm:gap-[21px] sm:px-5">

          {territories.map((item, index) => (
            <div
              key={index}
              className={`bg-[#F8F9FA] rounded-[10px] relative p-6 sm:p-0 ${
                index < 3 ? "sm:h-40" : "sm:h-32"
              }`}
            >

              <div className="flex justify-between items-center sm:block mb-3 sm:mb-0">
                {/* Title */}
                <h3 className="sm:absolute sm:left-8 sm:top-8 text-[#2D5A3D] text-[17px] sm:text-xl font-bold font-['Georgia'] leading-6">
                  {item.title}
                </h3>

                {/* Status Badge */}
                <div
                  className={`sm:absolute sm:right-4 sm:top-4 px-3 py-1 rounded-md w-max ${item.statusStyle}`}
                >
                  <span className="text-[10px] sm:text-xs font-bold font-['Inter'] uppercase leading-4 sm:leading-5">
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="sm:absolute sm:left-8 sm:top-[76px] w-full sm:w-[95%] text-[#4A4A4A] text-[13px] sm:text-base font-normal font-['Inter'] leading-snug sm:leading-6">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}