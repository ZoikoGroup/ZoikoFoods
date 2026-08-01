import HeroSection from "./components/HeroSection";
import WhyPackagingMattersSection from "./components/WhyPackagingMattersSection";
import RoadmapTimelineSection from "./components/RoadmapTimelineSection";
import PackagingInnovationShowcase from "./components/PackagingInnovationShowcase";
import CompetitiveBenchmarkingSection from "./components/CompetitiveBenchmarkingSection";
import ImpactAreasSection from "./components/ImpactAreasSection";
import CommitmentsInActionSection from "./components/CommitmentsInActionSection";
import CertificationsVerificationSection from "./components/CertificationsVerificationSection";

export default function PackagingRoadmapPage() {
  return (
    <main>
      <HeroSection />
      <WhyPackagingMattersSection />
      <RoadmapTimelineSection />
      <PackagingInnovationShowcase />
      <CompetitiveBenchmarkingSection />
      <ImpactAreasSection />
      <CommitmentsInActionSection />
      <CertificationsVerificationSection />
    </main>
  );
}