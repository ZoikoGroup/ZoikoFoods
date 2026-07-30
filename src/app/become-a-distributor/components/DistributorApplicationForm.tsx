export default function DistributorApplicationForm() {
  return (
    <section className="w-full h-auto sm:h-[1104px] bg-[#F8F9FA] relative overflow-hidden py-12 sm:py-0 px-5 sm:px-0">
      <div className="w-full sm:w-[1200px] h-auto sm:h-[944px] sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-[80px]">

        {/* Heading */}
        <h2 className="sm:absolute sm:top-0 sm:left-1/2 sm:-translate-x-1/2 text-center text-[#2D5A3D] text-[22px] sm:text-2xl font-bold font-['Georgia'] leading-8 mb-8 sm:mb-0">
          Apply to Become a Distributor
        </h2>

        {/* Form Card */}
        <div className="sm:absolute sm:top-[79px] sm:left-1/2 sm:-translate-x-1/2 w-full sm:w-[800px] h-auto sm:h-[865px] bg-white rounded-lg shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)] p-6 sm:p-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 sm:gap-y-8">

            {/* Full Name */}
            <div>
              <label className="block text-[#2D5A3D] text-[14px] sm:text-base font-bold font-['Inter'] leading-6 mb-2">
                Full Name
              </label>
              <input
                placeholder="Enter Supplier Name"
                className="w-full sm:w-80 h-12 sm:h-14 bg-[#F8F9FA] rounded-lg outline-none px-4 placeholder:text-[#8F8F8F] text-[14px] sm:text-base font-['Arial']"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-[#2D5A3D] text-[14px] sm:text-base font-bold font-['Inter'] leading-6 mb-2">
                Company Name
              </label>
              <input
                placeholder="Select Country"
                className="w-full sm:w-80 h-12 sm:h-14 bg-[#F8F9FA] rounded-lg outline-none px-4 placeholder:text-[#8F8F8F] text-[14px] sm:text-base font-['Arial']"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#2D5A3D] text-[14px] sm:text-base font-bold font-['Inter'] leading-6 mb-2">
                Email & Phone
              </label>
              <input
                placeholder="Select Category"
                className="w-full sm:w-80 h-12 sm:h-14 bg-[#F8F9FA] rounded-lg outline-none px-4 placeholder:text-[#8F8F8F] text-[14px] sm:text-base font-['Arial']"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[#2D5A3D] text-[14px] sm:text-base font-bold font-['Inter'] leading-6 mb-2">
                Phone
              </label>
              <input
                placeholder="e.g., 500 MT"
                className="w-full sm:w-80 h-12 sm:h-14 bg-[#F8F9FA] rounded-lg outline-none px-4 placeholder:text-[#8F8F8F] text-[14px] sm:text-base font-['Arial']"
              />
            </div>

            {/* Region */}
            <div>
              <label className="block text-[#2D5A3D] text-[14px] sm:text-base font-bold font-['Inter'] leading-6 mb-2">
                Region / Country
              </label>
              <select className="w-full sm:w-80 h-12 sm:h-14 bg-[#F8F9FA] rounded-lg px-4 text-[#8F8F8F] text-[14px] sm:text-base font-['Arial'] outline-none">
                <option>Select Region</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-[#2D5A3D] text-[14px] sm:text-base font-bold font-['Inter'] leading-6 mb-2">
                Product Category of Interest
              </label>
              <select className="w-full sm:w-80 h-12 sm:h-14 bg-[#F8F9FA] rounded-lg px-4 text-[#8F8F8F] text-[14px] sm:text-base font-['Arial'] outline-none">
                <option>Select Region</option>
              </select>
            </div>

            {/* Capacity */}
            <div>
              <label className="block text-[#2D5A3D] text-[14px] sm:text-base font-bold font-['Inter'] leading-6 mb-2">
                Estimated Annual Capacity
              </label>
              <select className="w-full sm:w-80 h-12 sm:h-14 bg-[#F8F9FA] rounded-lg px-4 text-[#8F8F8F] text-[14px] sm:text-base font-['Arial'] outline-none">
                <option>Select Capacity</option>
              </select>
            </div>

          </div>

          {/* Message */}
          <div className="mt-6 sm:mt-8">
            <label className="block text-[#2D5A3D] text-[14px] sm:text-base font-bold font-['Inter'] leading-6 mb-2">
              Business Profile / Message
            </label>
            <textarea
              placeholder="Tell us about your distribution network, market presence, and why you're interested in partnering with Zoiko Foods..."
              className="w-full h-24 sm:h-28 bg-[#F8F9FA] rounded-lg resize-none px-4 py-4 placeholder:text-[#8F8F8F] text-[13px] sm:text-base font-['Inter'] outline-none"
            />
          </div>

          {/* Mobile Only Checkbox */}
          <div className="mt-6 flex items-start gap-3 sm:hidden">
            <input type="checkbox" className="mt-1 w-[14px] h-[14px] rounded border-gray-300" />
            <span className="text-[12px] text-zinc-800 font-normal font-['Inter'] leading-[18px]">
              I acknowledge and agree to comply with Zoiko Foods' Supplier Code of Ethics
            </span>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-6 sm:mt-10">
            <button className="w-full sm:w-56 h-12 sm:h-14 bg-[#D4A574] rounded-lg text-white sm:text-[#2D5A3D] text-[14px] sm:text-lg font-bold font-['Arial']">
              <span className="hidden sm:inline">Submit Application</span>
              <span className="sm:hidden">Submit Supplier Compliance Form</span>
            </button>
          </div>

          {/* Note */}
          <p className="text-center mt-6 sm:mt-10 text-stone-500 text-[11px] sm:text-base font-normal font-['Inter'] leading-snug sm:leading-6">
            <i>Our Partnerships Team responds within 72 hours.</i>
          </p>

        </div>

      </div>
    </section>
  );
}