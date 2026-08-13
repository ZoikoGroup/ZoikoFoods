const buyerTypes = [
  "Retailer / Supermarket",
  "Distributor / Wholesaler",
  "Food Service / QSR",
  "Private-Label Brand Owner",
  "Other",
];

const categories = [
  "Condiments & Sauces",
  "Seasonings",
  "Beverages",
  "Snacks",
  "Prepared Foods",
  "Other",
];

const inputClasses =
  "h-[51px] w-full rounded-lg border-2 border-[#f5f5f5] bg-white px-4 text-base text-[#2c2c2c] placeholder:text-[#757575] outline-none focus:border-[#d4af37]";

const labelClasses = "text-[15.2px] font-semibold text-[#2c2c2c]";

export default function EngagementSection() {
  return (
    <section
      className="font-inter rounded-2xl border bg-white px-10 py-12 shadow-[0px_4px_10px_rgba(0,0,0,0.06)] lg:p-16"
      style={{ borderColor: "rgba(212,175,55,0.2)" }}
    >
      <h2 className="text-center text-[32px] font-bold leading-[1.6] text-[#2d5016]">
        Request a Retail
        <br className="lg:hidden" /> Conversation
      </h2>
      <p className="mx-auto mt-4 max-w-[258px] text-center text-[16.8px] leading-[1.6] text-[#8b8b8b] lg:max-w-[1034px]">
        Share your requirements and we will respond with availability,
        capability alignment, and next steps. All engagements are subject to
        commercial evaluation and capacity review.
      </p>

      <form className="mx-auto mt-10 flex max-w-[700px] flex-col gap-6 lg:mt-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="companyName" className={labelClasses}>
              Company Name <span className="text-[#b8941e]">*</span>
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="buyerType" className={labelClasses}>
              Buyer Type <span className="text-[#b8941e]">*</span>
            </label>
            <select
              id="buyerType"
              name="buyerType"
              required
              defaultValue=""
              className={`${inputClasses} h-[53px]`}
            >
              <option value="" disabled>
                -- Select --
              </option>
              {buyerTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contactName" className={labelClasses}>
              Contact Name <span className="text-[#b8941e]">*</span>
            </label>
            <input
              id="contactName"
              name="contactName"
              type="text"
              required
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="roleTitle" className={labelClasses}>
              Role / Title <span className="text-[#b8941e]">*</span>
            </label>
            <input
              id="roleTitle"
              name="roleTitle"
              type="text"
              required
              placeholder="e.g., Category Manager, Procurement Director"
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className={labelClasses}>
              Email Address <span className="text-[#b8941e]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className={labelClasses}>
              Phone Number
            </label>
            <input id="phone" name="phone" type="tel" className={inputClasses} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="country" className={labelClasses}>
              Country / Region <span className="text-[#b8941e]">*</span>
            </label>
            <input
              id="country"
              name="country"
              type="text"
              required
              placeholder="Where are you located?"
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="targetMarkets" className={labelClasses}>
              Target Markets <span className="text-[#b8941e]">*</span>
            </label>
            <input
              id="targetMarkets"
              name="targetMarkets"
              type="text"
              required
              placeholder="e.g., USA, Canada, UK"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="categoryInterest" className={labelClasses}>
            Product Category Interest <span className="text-[#b8941e]">*</span>
          </label>
          <select
            id="categoryInterest"
            name="categoryInterest"
            required
            defaultValue=""
            className={`${inputClasses} h-[53px]`}
          >
            <option value="" disabled>
              -- Select Category --
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="estimatedVolume" className={labelClasses}>
            Estimated Monthly/Quarterly
            <br className="lg:hidden" /> Volume
          </label>
          <input
            id="estimatedVolume"
            name="estimatedVolume"
            type="text"
            placeholder="Optional – approximate cases or units"
            className={inputClasses}
          />
          <p className="text-[13.6px] text-[#8b8b8b]">
            Helps us assess capacity alignment
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="packagingRequirements" className={labelClasses}>
            Packaging Requirements
          </label>
          <input
            id="packagingRequirements"
            name="packagingRequirements"
            type="text"
            placeholder="e.g., Glass bottles, plastic containers, custom sizes"
            className={inputClasses}
          />
          <p className="text-[13.6px] text-[#8b8b8b]">
            Optional – any specific packaging needs
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className={labelClasses}>
            Requirements / Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Share any additional details about your requirements..."
            className="w-full resize-none rounded-lg border-2 border-[#f5f5f5] bg-white px-4 py-3 text-base text-[#2c2c2c] placeholder:text-[#757575] outline-none focus:border-[#d4af37]"
          />
        </div>

        <div
          className="rounded-lg border-l-4 border-[#2d5a3d] bg-[rgba(212,175,55,0.05)] p-6 lg:border-[#d4af37]"
        >
          <p className="text-[14.4px] leading-[1.5] text-[#2c2c2c]">
            <span className="font-bold">Engagement Terms:</span> All
            engagements are subject to commercial evaluation, capacity
            availability, and compliance review. Response times vary based on
            complexity. By submitting this form, you consent to our use of
            your information as described in our{" "}
            <a href="#" className="text-[#2d5016] underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
          <button
            type="submit"
            className="h-[50px] w-full rounded-lg px-8 text-[14px] font-normal text-white shadow-[0px_4px_8px_rgba(212,175,55,0.25)] transition hover:opacity-90 lg:h-14 lg:w-auto lg:text-base lg:font-semibold"
            style={{
              backgroundImage:
                "linear-gradient(149deg, rgb(34,139,34) 0%, rgb(45,90,61) 50%, rgb(212,165,116) 100%), linear-gradient(135deg, rgb(184,148,30) 0%, rgb(212,175,55) 100%)",
            }}
          >
            Submit Request
          </button>
          <button
            type="reset"
            className="h-[50px] w-full rounded-lg border-2 border-[#2d5016] px-8 text-[14px] font-semibold text-[#2d5016] transition hover:bg-[#2d5016]/5 lg:h-14 lg:w-auto lg:text-base"
          >
            Clear Form
          </button>
        </div>
      </form>
    </section>
  );
}
