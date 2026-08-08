import HeroSection from "./components/HeroSection";
import BrandArchitectureOverview from "./components/BrandArchitectureOverview";
import MasterBrandPortfolio from "./components/MasterBrandPortfolio";
import PrivateLabelManufacturing from "./components/PrivateLabelManufacturing";
import BrandGovernance from "./components/BrandGovernance";
import CommercialEntryPoints from "./components/CommercialEntryPoints";

export default function OurBrandsPage() {
  return (
    <main>
      <HeroSection />
      <BrandArchitectureOverview />
      <MasterBrandPortfolio />
      <PrivateLabelManufacturing />
      <BrandGovernance />
      <CommercialEntryPoints />
    </main>
  );
}