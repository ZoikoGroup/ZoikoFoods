import React from "react";
import CategoryHeader from "./CategoryHeader";
import BrandCard, { Badge, BulletItem } from "./BrandCard";

const noxxChickenItems: BulletItem[] = [
  { text: "Signature Fried Chicken (Caribbean herb-marinated)" },
  { text: "Jerk Chicken (Authentic Jamaican style)" },
  { text: "Curry Chicken (Coconut-based)" },
  { text: "Glazed Wings (Honey, Red Wine, Sorrel varieties)" },
  { text: "Wraps & Sandwiches" },
  { text: "Plantain Chips (BBQ, Sweet, Regular)" },
  { text: "Caribbean Sides (Rice & Peas, Ackee, Ripe Plantains)" },
];

const noxxChickenBadges: Badge[] = [
  { text: "🇺🇸 USA", type: "flag" },
  { text: "🇯🇲 Jamaica", type: "flag" },
  { text: "Authentic Caribbean", type: "descriptor" },
  { text: "Made Fresh Daily", type: "descriptor" },
];

const zoikoKitchenItems: BulletItem[] = [
  { text: "Recipe Development & Testing" },
  { text: "Caribbean Fusion Concepts" },
  { text: "Menu Innovation" },
  { text: "Culinary Training Programs" },
  { text: "Heritage Recipe Preservation" },
];

const zoikoKitchenBadges: Badge[] = [
  { text: "Innovation Hub", type: "descriptor" },
  { text: "R&D Kitchen", type: "descriptor" },
];

export default function QSRRestaurantBrands() {
  return (
    <section className="scroll-mt-24 px-6 pb-10 pt-16 sm:px-10 lg:px-[52px]">
      <div className="mx-auto max-w-[1336px]">
        <CategoryHeader
          icon="🍗"
          title="Quick Service Restaurants"
          mobileTitle={
            <>
              Quick Service
              <br />
              Restaurants
            </>
          }
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[repeat(auto-fill,424px)]">
          <BrandCard
            name="NoxxChicken"
            tagline="Bold Afro-Caribbean Fried Chicken & Flavors"
            description="A culturally rich QSR brand revolutionizing fried chicken with authentic Caribbean herbs and spices. NoxxChicken offers an easy interaction between great-tasting healthy meals and affordable prices."
            listLabel="Menu Highlights"
            items={noxxChickenItems}
            badges={noxxChickenBadges}
            emoji="🔥"
          />
          <BrandCard
            name="Zoiko Kitchen"
            tagline="Culinary Innovation Meets Caribbean Heritage"
            description="Our food innovation and development platform, creating new Caribbean-inspired menu concepts and testing ground for future brand extensions."
            listLabel="Focus Areas"
            items={zoikoKitchenItems}
            badges={zoikoKitchenBadges}
            emoji="🍽️"
          />
        </div>
      </div>
    </section>
  );
}
