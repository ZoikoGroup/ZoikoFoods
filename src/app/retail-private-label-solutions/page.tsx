import HeroSection from "./components/HeroSection";
import WhoWeServe from "./components/WhoWeServe";
import CapabilityPillars from "./components/CapabilityPillars";
import TrustStrip from "./components/TrustStrip";
import EngagementSection from "./components/EngagementSection";

export const metadata = {
  title: "Retail & Private-Label Solutions | Zoiko Foods",
  description:
    "Retail-ready food products and private-label manufacturing engineered for consistency, scale, and compliance.",
};

export default function RetailPrivateLabelSolutionsPage() {
  return (
    <main className="bg-[#FAF8F3]">
      <HeroSection />
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-6 py-12 lg:px-8 lg:py-16">
        <WhoWeServe />
        <CapabilityPillars />
        <TrustStrip />
        <EngagementSection />
      </div>
    </main>
  );
}
