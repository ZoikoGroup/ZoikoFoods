export default function ApplyFarmerNetwork() {
  return (
    <section className="bg-[#F8F9FA] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="mb-8 sm:mb-12 text-center font-[Georgia] text-2xl sm:text-3xl font-bold leading-8 sm:leading-[52px] text-[#2D5A3D]">
          Apply to Join the Zoiko Farmer Network
        </h2>

        <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 sm:p-8 md:p-12 shadow-[0px_4px_6px_rgba(0,0,0,0.10)]">
          <form className="space-y-6 sm:space-y-8">
            {/* Row 1 */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-[Inter] text-sm sm:text-base font-bold text-[#2D5A3D]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-[#F8F9FA] px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#2D5A3D]"
                />
              </div>

              <div>
                <label className="mb-2 block font-[Inter] text-sm sm:text-base font-bold text-[#2D5A3D]">
                  Farm/Company Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-[#F8F9FA] px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#2D5A3D]"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-[Inter] text-sm sm:text-base font-bold text-[#2D5A3D]">
                  Region / Country
                </label>
                <select className="w-full rounded-lg bg-[#F8F9FA] px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-[#949494] outline-none focus:ring-2 focus:ring-[#2D5A3D]">
                  <option>Select Region</option>
                  <option>India</option>
                  <option>Caribbean</option>
                  <option>Africa</option>
                  <option>Europe</option>
                  <option>Americas</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-[Inter] text-sm sm:text-base font-bold text-[#2D5A3D]">
                  Product Category
                </label>
                <select className="w-full rounded-lg bg-[#F8F9FA] px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-[#949494] outline-none focus:ring-2 focus:ring-[#2D5A3D]">
                  <option>Select Category</option>
                  <option>Rice</option>
                  <option>Coffee & Teas</option>
                  <option>Spices</option>
                  <option>Fruits & Vegetables</option>
                  <option>Beverages</option>
                  <option>Proteins</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <div>
                <label className="mb-3 sm:mb-4 block font-[Inter] text-sm sm:text-base font-bold text-[#2D5A3D]">
                  Certifications
                </label>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <label className="flex items-center gap-2 sm:gap-3">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="font-[Inter] text-sm sm:text-base text-[#2D5A3D]">
                      HACCP
                    </span>
                  </label>

                  <label className="flex items-center gap-2 sm:gap-3">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="font-[Inter] text-sm sm:text-base text-[#2D5A3D]">
                      FDA
                    </span>
                  </label>

                  <label className="flex items-center gap-2 sm:gap-3">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="font-[Inter] text-sm sm:text-base text-[#2D5A3D]">
                      Fair Trade
                    </span>
                  </label>

                  <label className="flex items-center gap-2 sm:gap-3">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="font-[Inter] text-sm sm:text-base text-[#2D5A3D]">
                      Organic
                    </span>
                  </label>

                  <label className="flex items-center gap-2 sm:gap-3">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="font-[Inter] text-sm sm:text-base text-[#2D5A3D]">
                      ISO
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="mb-2 block font-[Inter] text-sm sm:text-base font-bold text-[#2D5A3D]">
                  Annual Capacity
                </label>

                <select className="w-full rounded-lg bg-[#F8F9FA] px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-[#949494] outline-none focus:ring-2 focus:ring-[#2D5A3D]">
                  <option>Select Capacity</option>
                  <option>Under 100 Tons</option>
                  <option>100–500 Tons</option>
                  <option>500–1000 Tons</option>
                  <option>1000+ Tons</option>
                </select>
              </div>
            </div>

            {/* Story */}
            <div>
              <label className="mb-2 block font-[Inter] text-sm sm:text-base font-bold text-[#2D5A3D]">
                Profile / Story (Optional)
              </label>

              <textarea
                rows={4}
                placeholder="Tell us about your farm, your heritage, and what makes your products special..."
                className="w-full rounded-lg bg-[#F8F9FA] p-4 sm:p-5 text-sm sm:text-base text-[#767676] outline-none focus:ring-2"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 lg:flex-row">
              <button
                type="submit"
                className="w-full sm:w-auto rounded-lg bg-[#D4A574] px-6 sm:px-8 py-3 sm:py-4 font-[Arial] text-sm sm:text-lg font-bold text-white transition hover:opacity-90"
              >
                Submit Application
              </button>

              <button
                type="button"
                className="w-full sm:w-auto rounded-lg border-2 border-[#2D5A3D] px-6 sm:px-8 py-3 sm:py-4 font-[Arial] text-sm sm:text-lg font-bold text-[#2D5A3D] transition hover:bg-[#2D5A3D] hover:text-white"
              >
                Book a Call With Procurement Team
              </button>
            </div>

            <p className="pt-2 text-center font-[Inter] text-sm sm:text-base text-[#666666]">
              Our Partnerships Team responds within 72 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}