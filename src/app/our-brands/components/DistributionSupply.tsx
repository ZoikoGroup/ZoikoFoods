import React from "react";
import CategoryHeader from "./CategoryHeader";
import BrandCard, { Badge, BulletItem } from "./BrandCard";

const items: BulletItem[] = [
  { label: "Grains & Staples:", text: "Rice, wheat, vegetable oils" },
  { label: "Proteins:", text: "Frozen seafood, poultry, meat products" },
  { label: "Dairy:", text: "Fresh dairy products, cheese, specialty items" },
  { label: "Produce:", text: "Fruits, vegetables, frozen vegetables" },
  { label: "Spices & Ingredients:", text: "Caribbean spices, seasonings" },
  { label: "Specialty Foods:", text: "Organic products, ethnic foods" },
];

const badges: Badge[] = [
  { text: "🌍 Global Distribution", type: "special" },
  { text: "B2B/B2G", type: "descriptor" },
  { text: "Institutional Supply", type: "descriptor" },
  { text: "AI-Powered Logistics", type: "descriptor" },
];

export default function DistributionSupply() {
  return (
    <section id="distribution-supply" className="scroll-mt-24 px-6 py-10 sm:px-10 lg:px-[52px]">
      <div className="mx-auto max-w-[1336px]">
        <CategoryHeader icon="🚛" title="Distribution & Supply Services" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[repeat(auto-fill,424px)]">
          <BrandCard
            name="Zoiko Supply Group"
            tagline="AI-Powered Global Trade & Supply Chain"
            description="Our global distribution arm providing transparent, ethical sourcing and scalable supply chain solutions. Delivering commodities and food products across multiple continents with focus on reliability and sustainability."
            listLabel="Product Categories"
            items={items}
            badges={badges}
            emoji="🌍"
          />
        </div>
      </div>
    </section>
  );
}
