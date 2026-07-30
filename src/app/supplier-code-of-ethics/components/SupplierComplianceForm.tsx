export default function SupplierComplianceForm() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl rounded-lg bg-[#F8F9FA] p-4 md:p-12">
          {/* Heading */}
          <h2 className="mb-6 text-center font-[Georgia] text-2xl font-bold leading-[40px] text-[#2D5A3D] md:mb-12 md:leading-[52px]">
            Supplier Compliance Form
          </h2>

          {/* Row 1 */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-[Inter] text-sm font-semibold text-[#3E3E3E] md:text-base">
                Supplier Name
              </label>

              <input
                type="text"
                placeholder="Enter Supplier Name"
                className="h-11 w-full rounded-lg bg-white px-4 text-sm font-[Arial] font-normal text-[#3E3E3E] placeholder:text-[#757575] focus:outline-none md:h-14 md:px-5 md:text-base"
              />
            </div>

            <div>
              <label className="mb-2 block font-[Inter] text-sm font-semibold text-[#3E3E3E] md:text-base">
                Country/Region
              </label>

              <select className="h-11 w-full rounded-lg bg-white px-4 text-sm font-[Arial] text-[#757575] focus:outline-none md:h-14 md:px-5 md:text-base">
                <option>Select Country</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="mt-5 grid gap-5 md:mt-8 md:grid-cols-2 md:gap-8">
            <div>
              <label className="mb-2 block font-[Inter] text-sm font-semibold text-[#3E3E3E] md:text-base">
                Product Category
              </label>

              <select className="h-11 w-full rounded-lg bg-white px-4 text-sm font-[Arial] text-[#757575] focus:outline-none md:h-14 md:px-5 md:text-base">
                <option>Select Category</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-[Inter] text-sm font-semibold text-[#3E3E3E] md:text-base">
                Annual Capacity
              </label>

              <input
                type="text"
                placeholder="e.g., 500 MT"
                className="h-11 w-full rounded-lg bg-white px-4 text-sm font-[Arial] placeholder:text-[#757575] focus:outline-none md:h-14 md:px-5 md:text-base"
              />
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-5 md:mt-8">
            <label className="mb-2 block font-[Inter] text-sm font-semibold text-[#3E3E3E] md:text-base">
              Local Certifications
            </label>

            <textarea
              rows={3}
              placeholder="List your FDA, FSSAI, EU Packaging, or other relevant certifications"
              className="w-full rounded-lg bg-white p-4 text-sm font-[Inter] placeholder:text-[#757575] focus:outline-none md:p-5 md:text-base"
            />
          </div>

          {/* Checkbox */}
          <div className="mt-5 flex items-start gap-3 md:mt-8">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 accent-[#2D5A3D]"
            />

            <label className="font-[Inter] text-sm font-semibold leading-5 text-[#3E3E3E] md:text-base md:leading-6">
              I acknowledge and agree to comply with Zoiko Foods'
              Supplier Code of Ethics
            </label>
          </div>

          {/* Button */}
          <button className="mt-6 h-11 w-full rounded-lg bg-[#D4A574] text-sm font-bold text-white transition duration-300 hover:opacity-90 md:mt-10 md:h-14 md:text-lg">
            Submit Supplier Compliance Form
          </button>
        </div>
      </div>
    </section>
  );
}
