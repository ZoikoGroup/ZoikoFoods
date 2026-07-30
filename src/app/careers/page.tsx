import HeroSection from "./components/HeroSection";
import CareerTracksSection from "./components/CareerTracksSection";
import WhyWorkSection from "./components/WhyWorkSection";
import EmployeeVoicesSection from "./components/EmployeeVoicesSection";
import CurrentOpportunitiesSection from "./components/CurrentOpportunitiesSection";
import GraduateProgramSection from "./components/GraduateProgramSection";
import CareersCTASection from "./components/CareersCTASection";

export default function CareersPage() {
  return (
    <main className="bg-gray-50">
      <HeroSection />
      <CareerTracksSection />
      <WhyWorkSection />
      <EmployeeVoicesSection />
      <CurrentOpportunitiesSection />
      <GraduateProgramSection />
      <CareersCTASection />
    </main>
  );
}