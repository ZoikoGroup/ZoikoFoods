import HeroSection from "./components/HeroSection";
import WhyPartnerSection from "./components/WhyPartnerSection";
import CategoriesSection from "./components/CategoriesSection";
import ProvenPartnershipsSection from "./components/ProvenPartnershipsSection";
import ROIBenefitsSection from "./components/ROIBenefitsSection";
import PartnershipPresenceSection from "./components/PartnershipPresenceSection";


export default function Page() {
  return (
    <main className="bg-gray-50">
      <HeroSection />
      <WhyPartnerSection />
      <CategoriesSection />
      <ProvenPartnershipsSection />
      <ROIBenefitsSection />
      <PartnershipPresenceSection />
    </main>
  );
}