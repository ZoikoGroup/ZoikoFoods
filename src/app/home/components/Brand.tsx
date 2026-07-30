import BrandCard from "./BrandCard";

export default function Brand() {
  const brands = [
    {
      image: "/images/brand-1.jpg",
      title: "Staples & Grains",
      description:
        "SavorTaste Rice, Zoiko Kitchen - African/Caribbean sourcing",
    },

    {
      image: "/images/brand-2.jpg",
      title: "Sauces & Condiments",
      description:
        "La Caribbean Taste, NoxxChicken Sauces",
    },

    {
      image: "/images/brand-3.jpg",
      title: "Snacks & Bakery",
      description:
        "Noxx Patties, artisanal baked goods",
    },

    {
      image: "/images/brand-4.jpg",
      title: "Plant-Based & Wellness",
      description:
        "GingerNoxx, Supremo Nutrition FMCG crossovers",
    },

    {
      image: "/images/brand-5.jpg",
      title: "Beverages & Refreshments",
      description:
        "AquaNoxx, Noxx Wines, Noxx Beverages",
    },

    {
      image: "/images/brand-6.jpg",
      title: "Tea & Coffee",
      description:
        "Whole-leaf, functional and ritual teas",
    },
  ];

  return (
    <section
      className="py-12 md:py-20 bg-[#F8F8F8] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/brand-bg.jpg')",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        <h2
          className="text-center text-[24px] md:text-[30px] font-bold leading-[36px] md:leading-[52px] text-[#2D5A3D]"
          style={{ fontFamily: "Georgia" }}
        >
          Our Brand Family
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          {brands.map((brand) => (
            <BrandCard
              key={brand.title}
              image={brand.image}
              title={brand.title}
              description={brand.description}
            />
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <button className="bg-[#2D5A3D] text-white px-8 py-4 text-[14px] font-medium">
            Explore All Brands
          </button>
        </div>

      </div>
    </section>
  );
}
