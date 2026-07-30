import BecomeDistributorHero from "./components/BecomeDistributorHero";
import GlobalFoodGrowthStory from "./components/GlobalFoodGrowthStory";
import WhyZoikoDifferentiation from "./components/WhyZoikoDifferentiation";
import WhoWePartnerWith from "./components/WhoWePartnerWith";
import DistributorBenefits from "./components/DistributorBenefits";
import ProofOfSuccess from "./components/ProofOfSuccess";
import ActiveTerritories from "./components/ActiveTerritories";
import DistributorApplicationForm from "./components/DistributorApplicationForm";

export default function BecomeDistributorPage() {
  return (
    <main>
      <BecomeDistributorHero />
      <GlobalFoodGrowthStory />
      <WhyZoikoDifferentiation />
      <WhoWePartnerWith />
      <DistributorBenefits />
      <ProofOfSuccess />
      <ActiveTerritories />
      <DistributorApplicationForm />
    </main>
  );
}