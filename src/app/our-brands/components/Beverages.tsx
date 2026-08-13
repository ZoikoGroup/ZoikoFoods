import React from "react";
import CategoryHeader from "./CategoryHeader";
import BrandCard, { Badge, BulletItem } from "./BrandCard";

const gingerNoxxItems: BulletItem[] = [
  { text: "Traditional Ginger Beer" },
  { text: "Ginger Tea Blends" },
  { text: "Ginger-Infused Juices" },
  { text: "Caribbean Herbal Blends" },
  { text: "Natural Wellness Drinks" },
];

const gingerNoxxBadges: Badge[] = [
  { text: "Natural Ingredients", type: "descriptor" },
  { text: "Wellness-Focused", type: "descriptor" },
  { text: "Traditional Recipe", type: "descriptor" },
];

const coffeeTeaItems: BulletItem[] = [
  { text: "Jamaican Blue Mountain Coffee" },
  { text: "Caribbean-Blend Ground Coffee" },
  { text: "Mint Tea (Hot & Iced)" },
  { text: "Green Tea" },
  { text: "Hot Chocolate (Caribbean Style)" },
];

const coffeeTeaBadges: Badge[] = [
  { text: "Premium Quality", type: "descriptor" },
  { text: "Single-Origin", type: "descriptor" },
];

export default function Beverages() {
  return (
    <section className="scroll-mt-24 px-6 py-10 sm:px-10 lg:px-[52px]">
      <div className="mx-auto max-w-[1336px]">
        <CategoryHeader icon="🥤" title="Beverages" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[repeat(auto-fill,424px)]">
          <BrandCard
            name="GingerNoxx"
            tagline="Caribbean Wellness in Every Sip"
            description="Premium ginger-based beverages and wellness drinks celebrating Caribbean traditions. Crafted with authentic Caribbean ginger and natural ingredients for refreshing, health-conscious refreshment."
            listLabel="Product Range"
            items={gingerNoxxItems}
            badges={gingerNoxxBadges}
            emoji="🫚"
          />
          <BrandCard
            name="Caribbean Coffee & Tea"
            tagline="Premium Island Brews"
            description="Authentic Caribbean coffee and tea selections, including Jamaican Blue Mountain specialty drinks, traditional mint tea, and island-inspired hot beverages served in our QSR locations."
            listLabel="Offerings"
            items={coffeeTeaItems}
            badges={coffeeTeaBadges}
            emoji="☕"
          />
        </div>
      </div>
    </section>
  );
}
