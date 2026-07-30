const categories = [
  {
    title: (
      <>
        Distribution
        <br />
        Partnerships
      </>
    ),
    description: (
      <>
        Regional and global distribution
        <br />
        networks
      </>
    ),
  },
  {
    title: (
      <>
        Retail
        <br />
        Collaborations
      </>
    ),
    description: (
      <>
        Supermarket chains and specialty
        <br />
        retailers
      </>
    ),
  },
  {
    title: (
      <>
        Supply Chain &
        <br />
        Logistics
      </>
    ),
    description: (
      <>
        Transportation, warehousing, and
        <br />
        fulfillment
      </>
    ),
  },
  {
    title: (
      <>
        Co-Branding &
        <br />
        Licensing
      </>
    ),
    description: (
      <>
        Brand partnerships and licensing
        <br />
        opportunities
      </>
    ),
  },
  {
    title: (
      <>
        Innovation
        <br />
        Partnerships
      </>
    ),
    description: (
      <>
        R&D collaboration and product
        <br />
        development
      </>
    ),
  },
  {
    title: (
      <>
        Community
        <br />
        Partnerships
      </>
    ),
    description: (
      <>
        Social impact and farmer empowerment
        <br />
        programs
      </>
    ),
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D]">
          Partnership Categories
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#F8F9FA] p-6 text-center md:p-10"
            >
              <h3 className="font-[Georgia] text-xl font-bold leading-10 text-[#2D5A3D]">
                {item.title}
              </h3>

              <p className="mt-8 font-[Inter] text-base leading-7 text-[#666666]">
                {item.description}
              </p>

              <button className="mt-10 rounded-lg bg-[#2D5A3D] px-6 py-3 font-[Arial] text-sm font-bold text-white transition hover:bg-[#1F4A32]">
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}