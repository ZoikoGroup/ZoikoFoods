import Image from "next/image";

const cards = [
  {
    image: "/images/zoiko-kitchen.png",
    title: "Zoiko Kitchen",
    category: "CULINARY SOLUTIONS",
    description:
      "Chef-led multi-format meals for retail, airlines, hotels, OEM",
  },
  {
    image: "/images/noxx-chicken.png",
    title: "Noxx Chicken",
    category: "CHICKEN & QUICK-SERVICE MEALS",
    description:
      "Bold, crispy chicken crafted with Afro-Caribbean spices and global flavor inspirations",
  },
  {
    image: "/images/noxx-patties.png",
    title: "NoxxPatties",
    category: "SNACKS & HANDHELD MEALS",
    description: "Classic patties reimagined for global markets",
  },
  {
    image: "/images/gingernoxx.png",
    title: "GingerNoxx",
    category: "WELLNESS FOODS & SHOTS",
    description: "Ginger-based functional nutrition & pastries",
  },
  {
    image: "/images/caribbean-taste.png",
    title: "Noxx Caribbean Taste",
    category: "SAUCES & CONDIMENTS",
    description: "Authentic Afro-Caribbean flavors for global kitchens",
  },
  {
    image: "/images/noxx-beverages.png",
    title: "Noxx Beverages",
    category: "JUICES & FUNCTIONAL DRINKS",
    description: "Tropical refreshment meets wellness innovation",
  },
  {
    image: "/images/noxx-beverages.png",
    title: "AquaNoxx",
    category: "SPRING & MINERAL WATER",
    description: "Sustainable hydration from natural springs",
  },
  {
    image: "/images/noxx-beverages.png",
    title: "Savor Taste",
    category: "GLOBAL STAPLES & MEALS",
    description:
      "Everyday accessible FMCG: rice, versatile meals, condiments",
  },
  {
    image: "/images/noxx-beverages.png",
    title: "Noxx Wines & Cellars",
    category: "WINES & APERITIFS",
    description:
      "Global wines & aperitifs inspired by diverse terroirs",
  },
  {
    image: "/images/noxx-beverages.png",
    title: "Café Noxx",
    category: "RETAIL EXPERIENCES",
    description:
      "Experiential coffee bars & tasting lounges",
  },
  {
    image: "/images/noxx-beverages.png",
    title: "Noxx Teas",
    category: "TEAS (RETAIL & INSTITUTIONAL)",
    description:
      "Whole-leaf, functional, and ritual teas",
  },
  {
    image: "/images/noxx-beverages.png",
    title: "Noxx Origins Coffee",
    category: "COFFEE (CPG)",
    description:
      "Single-origin integrity & signature blends",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#1E4538] py-14 md:py-24">
      <div className="max-w-[1230px] mx-auto px-4 pb-15">
        <h2
          className="text-center text-white text-2xl md:text-3xl font-bold mb-10 md:mb-14"
          style={{ fontFamily: "Georgia" }}
        >
          A Portfolio That Brings the World to the Table
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 min-h-[280px] lg:h-[300px] flex flex-col items-center text-center shadow-sm"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={150}
                height={80}
                className="h-[70px] w-auto object-contain mb-6"
              />

              <h3
                className="text-[#1E4538] text-xl font-bold mb-3"
                style={{ fontFamily: "Georgia" }}
              >
                {card.title}
              </h3>

              <p className="text-[#D4A574] text-sm font-bold uppercase tracking-wider mb-4">
                {card.category}
              </p>

              <p className="text-[#666666] text-sm leading-6">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/15 rounded-lg py-12 px-6 text-center">
          <h3
            className="text-white text-2xl"
            style={{ fontFamily: "Georgia" }}
          >
            Zoiko Farms (Zoiko Agro)
          </h3>

          <p className="text-white italic mt-3 text-base">
            Provenance, training, and guaranteed markets for African and
            Caribbean farmers
          </p>
        </div>
      </div>
    </section>
  );
}