import React from "react";
import CategoryHeader from "./CategoryHeader";
import BrandCard, { Badge, BulletItem } from "./BrandCard";

const items: BulletItem[] = [
  { label: "Marinades:", text: "Calypso Jerk Marinade, Traditional blends" },
  { label: "Dry Seasonings:", text: "Calypso Jerk Seasoning, Spicy Rhythm Curry" },
  { label: "Sauces:", text: "BBQ varieties, Hot sauces, Glazing sauces" },
  { label: "Beverages:", text: "Natural Caribbean juices and drinks" },
  { label: "Snacks:", text: "Plantain Chips (BBQ, Sweet, Original)" },
];

const badges: Badge[] = [
  { text: "🇺🇸 USA", type: "flag" },
  { text: "🇨🇦 Canada", type: "flag" },
  { text: "🇬🇧 UK", type: "flag" },
  { text: "All Natural", type: "descriptor" },
  { text: "Heritage Recipes", type: "descriptor" },
  { text: "Family-Owned", type: "descriptor" },
];

export default function CondimentsSauces() {
  return (
    <section className="scroll-mt-24 px-6 py-10 sm:px-10 lg:px-[52px]">
      <div className="mx-auto max-w-[1336px]">
        <CategoryHeader icon="🌶️" title="Condiments & Seasonings" />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[repeat(auto-fill,424px)]">
          <BrandCard
            name="La Caribbean Taste"
            tagline="Be Inspired By Taste"
            description="Premium condiments and food products crafted with heritage recipes and modern food science. All-natural sauces, marinades, dry seasonings, and juices with authentic international flavors that capture the distinctive essence of Caribbean cuisine."
            listLabel="Product Lines"
            items={items}
            badges={badges}
            emoji="✨"
          />
        </div>
      </div>
    </section>
  );
}
