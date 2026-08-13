import HeroSection from "./components/HeroSection";
import QSRRestaurantBrands from "./components/QSRRestaurantBrands";
import CondimentsSauces from "./components/CondimentsSauces";
import Beverages from "./components/Beverages";
import DistributionSupply from "./components/DistributionSupply";
import CTASection from "./components/CTASection";

export const metadata = {
  title: "Our Brand Portfolio | Zoiko Foods Corp",
  description:
    "Authentic Caribbean food brands bringing flavor, culture, and wellness to communities across the globe.",
};

export default function OurBrandsPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0]">
      <HeroSection />
      <QSRRestaurantBrands />
      <CondimentsSauces />
      <Beverages />
      <DistributionSupply />
      <CTASection />
    </main>
  );
}
