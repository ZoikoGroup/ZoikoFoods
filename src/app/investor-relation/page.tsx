import InvestorHero from "./components/InvestorHero";
import InvestorHighlights from "./components/InvestorHighlights";
import MarketOpportunity from "./components/MarketOpportunity";
import GrowthRoadmap from "./components/GrowthRoadmap";
import Governance from "./components/Governance";
import ESGSustainability from "./components/ESGSustainability";
import InvestorNews from "./components/InvestorNews";
import InvestorCTA from "./components/InvestorCTA";

export default function InvestorRelationsPage() {
  return (
    <main>
      <InvestorHero />
      <InvestorHighlights />
      <MarketOpportunity />
      <GrowthRoadmap />
      <Governance />
      <ESGSustainability />
      <InvestorNews />
      <InvestorCTA />
    </main>
  );
}