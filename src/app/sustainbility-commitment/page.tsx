import HeroSection from "./components/HeroSection";
import CommitmentsSection from "./components/CommitmentsSection";
import ROISection from "./components/ROISection";
import RoadmapSection from "./components/RoadmapSection";
import ActionSection from "./components/ActionSection";
import CertificationsSection from "./components/CertificationsSection";
import CTASection from "./components/CTASection";

export default function Page() {
  return (
    <main className="bg-gray-50">
      <HeroSection />
      <CommitmentsSection />
      <ROISection />
      <RoadmapSection />
      <ActionSection />
      <CertificationsSection />
      <CTASection />
    </main>
  );
}