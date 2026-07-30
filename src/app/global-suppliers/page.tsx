import GlobalSuppliersHero from "./components/GlobalSuppliersHero";
import FarmerStories from "./components/FarmerStories";
import FarmerPromise from "./components/FarmerPromise";
import SupplyOpportunities from "./components/SupplyOpportunities";
import EconomicImpactDashboard from "./components/EconomicImpactDashboard";
import SupplyChainNetwork from "./components/SupplyChainNetwork";
import FarmerResourcesHub from "./components/FarmerResourcesHub";
import ApplyFarmerNetwork from "./components/ApplyFarmerNetwork";

export default function GlobalSuppliersPage() {
  return (
    <main>
      <GlobalSuppliersHero />
      <FarmerStories />
      <FarmerPromise />
      <SupplyOpportunities />
      <EconomicImpactDashboard />
      <SupplyChainNetwork />
      <FarmerResourcesHub />
      <ApplyFarmerNetwork />
    </main>
  );
}